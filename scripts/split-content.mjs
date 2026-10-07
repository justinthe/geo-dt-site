// Splits content/*.md into one generated Markdown file per item (src/content/generated/<type>/<lang>/<key>.md).
// Rules: PRD "Content source" section, plus the marker rule in PRODUCT.md.
import { readFileSync, writeFileSync, readdirSync, rmSync, mkdirSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkStringify from 'remark-stringify';
import { toString } from 'mdast-util-to-string';
import YAML from 'yaml';

const ROOT = new URL('..', import.meta.url).pathname;
const SRC = join(ROOT, 'content');
const OUT = join(ROOT, 'src/content/generated');

// `#` heading → content type. Add a line here for a new type (PRD "Adding a content type").
const TYPES = { 'case studies': 'projects', articles: 'posts', pages: 'pages' };
const DROP_SECTIONS = /^(to confirm before publishing|to add before publishing)$/i;
const MARKER = /\s*\[(TO CONFIRM|ADD|CONFIRM|DRAFT|VERIFY|TO WRITE)\b[^\]]*\]/g;

const parser = unified().use(remarkParse).use(remarkGfm);
const md = unified().use(remarkGfm).use(remarkStringify, { bullet: '-', emphasis: '*', rule: '-' });
const log = { dropped: [], errors: [], unpaired: [] };

// Strip markers from text nodes; true when the node is left with no real text.
function stripMarkers(node) {
  if (node.type === 'text') node.value = node.value.replace(MARKER, '');
  node.children?.forEach(stripMarkers);
  return toString(node).trim() === '';
}
const hasMarker = (node) => new RegExp(MARKER.source).test(toString(node));

// Marker rule: a paragraph, list item, or table row whose content is only a marker is dropped;
// a marker trailing real text is removed; a [TO WRITE] section is dropped whole.
function applyMarkers(nodes, where) {
  const out = [];
  for (const n of nodes) {
    if (!hasMarker(n) || n.type === 'code') { out.push(n); continue; }
    if (n.type === 'table') {
      const [head, ...rows] = n.children;
      const empty = rows.map((r) => r.children.map((c) => stripMarkers(c)));
      // A column that is a marker in every row goes; otherwise a row with an emptied cell goes.
      const deadCols = head.children.map((_, j) => empty.every((r) => r[j]));
      deadCols.forEach((d, j) => d && log.dropped.push(`${where}: table column "${toString(head.children[j] ?? {})}"`));
      for (const r of n.children) r.children = r.children.filter((_, j) => !deadCols[j]);
      n.children = [head, ...rows.filter((r, i) => {
        const keep = !empty[i].some((e, j) => e && !deadCols[j]);
        if (!keep) log.dropped.push(`${where}: table row "${toString(r.children[0])}"`);
        return keep;
      })];
      n.align = n.align?.filter((_, j) => !deadCols[j]);
      out.push(n);
    } else if (n.type === 'list') {
      n.children = n.children.filter((li) => {
        if (!hasMarker(li)) return true;
        const empty = stripMarkers(li);
        if (empty) log.dropped.push(`${where}: list item`);
        return !empty;
      });
      if (n.children.length) out.push(n);
    } else if (stripMarkers(n)) {
      log.dropped.push(`${where}: ${n.type}`);
    } else out.push(n);
  }
  return out;
}

// Split a list of nodes into [heading, ...body] sections at the given depth.
function sections(nodes, depth) {
  const res = []; let cur = null;
  for (const n of nodes) {
    if (n.type === 'heading' && n.depth === depth) res.push((cur = { heading: n, body: [] }));
    else if (cur) cur.body.push(n);
  }
  return res;
}

function dropSections(nodes, where) {
  const out = []; let skip = 0;
  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i];
    if (n.type === 'heading' && skip && n.depth <= skip) skip = 0;
    if (skip) continue;
    if (n.type === 'heading' && DROP_SECTIONS.test(toString(n).trim())) { skip = n.depth; continue; }
    // A section opened by a [TO WRITE] paragraph is not written yet: drop it with its heading.
    if (n.type === 'heading' && /\[TO WRITE/.test(toString(nodes[i + 1] ?? {}))) {
      log.dropped.push(`${where}: section "${toString(n)}" ([TO WRITE])`);
      skip = n.depth; continue;
    }
    out.push(n);
  }
  return out;
}

const esc = (x) => x.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
// Mermaid timelines draw a fixed-width strip that is unreadable in a text column: set them as an HTML list.
// Other diagrams lose their `title` line to a caption, so it can't be clipped by the SVG.
function diagramForms(n, where, meta) {
  if (n.type === 'code' && n.lang === 'map') return [mapForm(n, where, meta)];
  if (n.type !== 'code' || n.lang !== 'mermaid') return [n];
  const lines = n.value.split('\n').map((l) => l.trim()).filter(Boolean);
  const title = lines.find((l) => l.startsWith('title '))?.slice(6);
  if (lines[0] === 'timeline') {
    const steps = lines.slice(1).filter((l) => l.includes(':')).map((l) => l.split(/\s*:\s*/));
    return [{ type: 'html', value: `<figure class="timeline">${title ? `<figcaption>${esc(title)}</figcaption>` : ''}<ol>${steps.map(([when, ...what]) => `<li><span class="when">${esc(when)}</span><span class="what">${esc(what.join(': '))}</span></li>`).join('')}</ol></figure>` }];
  }
  if (!title) return [n];
  n.value = n.value.replace(/^\s*title .*$\n?/m, '');
  return [{ type: 'html', value: `<p class="diagram-title">${esc(title)}</p>` }, n];
}

// ```map {"data": "maps/x.geojson", "center": [lon, lat], "zoom": 8, "caption": "..."}``` → interactive map (FR-13).
function mapForm(n, where, meta) {
  let o;
  try { o = JSON.parse(n.value); } catch (e) { log.errors.push(`${where}: map block is not valid JSON: ${e.message}`); return n; }
  if (!o.data || !o.caption) log.errors.push(`${where}: map block needs "data" and "caption" (maps are never the only source of information)`);
  if (o.data && !existsSync(join(ROOT, 'public', o.data))) log.errors.push(`${where}: map data public/${o.data} not found`);
  meta.map = true;
  return { type: 'html', value: `<figure class="map"><div class="map-canvas" data-map="${esc(JSON.stringify(o))}"></div><figcaption>${esc(o.caption)}</figcaption></figure>` };
}

function rewriteImages(node, depthToRoot) {
  if (node.type === 'image' && node.url.startsWith('images/')) node.url = `${depthToRoot}content/${node.url}`;
  node.children?.forEach((c) => rewriteImages(c, depthToRoot));
}

const files = readdirSync(SRC).filter((f) => f.endsWith('.md'));
const items = [];
for (const file of files) {
  const lang = file.match(/\.([a-z]{2})\.md$/)?.[1] ?? 'en';
  const tree = parser.parse(readFileSync(join(SRC, file), 'utf8'));
  for (const typeSec of sections(tree.children, 1)) {
    const type = TYPES[toString(typeSec.heading).trim().toLowerCase()];
    if (!type) continue; // file intro, Contents, etc.
    for (const [order, item] of sections(typeSec.body, 2).entries()) {
      const raw = toString(item.heading).trim();
      const number = raw.match(/^([A-Z]?\d+)\.\s+/)?.[1] ?? null;
      const title = raw.replace(/^[A-Z]?\d+\.\s+/, '');
      const where = `${file} › "${title}"`;
      let body = item.body.filter((n) => n.type !== 'thematicBreak');

      // Site metadata block
      const metaIdx = body.findIndex((n) => n.type === 'heading' && /^site metadata$/i.test(toString(n).trim()));
      const yamlNode = metaIdx >= 0 && body.slice(metaIdx).find((n) => n.type === 'code' && n.lang === 'yaml');
      if (!yamlNode) { log.errors.push(`${where}: missing "### Site metadata" YAML block`); continue; }
      let meta;
      try { meta = YAML.parse(yamlNode.value) ?? {}; } catch (e) { log.errors.push(`${where}: Site metadata YAML: ${e.message}`); continue; }
      body = body.slice(0, metaIdx);
      for (const k of ['translationKey', 'summary']) if (!meta[k]) log.errors.push(`${where}: missing \`${k}\` in Site metadata`);
      if (!meta.translationKey) continue;

      body = applyMarkers(dropSections(body, where), where);

      // Case studies: the "At a glance" table becomes structured fields; the intro becomes the lede.
      if (type === 'projects') {
        const gi = body.findIndex((n) => n.type === 'heading' && /^at a glance$/i.test(toString(n).trim()));
        const table = gi >= 0 && body[gi + 1]?.type === 'table' ? body[gi + 1] : null;
        if (table) {
          meta.glance = table.children.slice(1).map((r) => ({ label: toString(r.children[0]).trim(), value: toString(r.children[1]).trim() }));
          body.splice(gi, 2);
        }
      }
      if (body[0]?.type === 'paragraph') meta.lede = toString(body.shift());

      body.forEach((n) => {
        if (n.type === 'heading') n.depth = Math.max(2, n.depth - 1);
        // Long left-to-right flowcharts can't be read in a text column or on a phone: lay them out top-down.
        if (n.type === 'code' && n.lang === 'mermaid') n.value = n.value.replace(/^flowchart LR\b/m, 'flowchart TD');
      });
      body = body.flatMap((n) => diagramForms(n, where, meta));
      const dir = join(OUT, type, lang);
      const depthToRoot = relative(dir, ROOT) + '/';
      body.forEach((n) => rewriteImages(n, depthToRoot));

      const imgDir = join(SRC, 'images', meta.translationKey);
      const coverFile = meta.cover ?? (existsSync(imgDir) && readdirSync(imgDir).find((f) => /^cover\.(jpe?g|png|webp|avif)$/i.test(f)));
      if (coverFile) meta.cover = `${depthToRoot}content/images/${meta.translationKey}/${coverFile}`;
      else delete meta.cover;

      Object.assign(meta, { title: meta.title ?? title, lang, number, order, sourceFile: file });
      items.push({ type, lang, key: meta.translationKey, dir, meta, body: md.stringify({ type: 'root', children: body }) });
    }
  }
}

// Bilingual pairing (FR-45). Warn only: Bahasa content is scaffolded, not written yet.
const langs = [...new Set(items.map((i) => i.lang))];
for (const i of items) for (const l of langs) if (!items.some((o) => o.key === i.key && o.lang === l)) log.unpaired.push(`${i.key} (${i.lang}) has no ${l} version`);

if (log.errors.length) {
  console.error('\nContent errors:\n  ' + log.errors.join('\n  '));
  process.exit(1);
}
rmSync(OUT, { recursive: true, force: true });
for (const i of items) {
  mkdirSync(i.dir, { recursive: true });
  writeFileSync(join(i.dir, `${i.key}.md`), `---\n${YAML.stringify(i.meta)}---\n\n${i.body}`);
}
console.log(`content: ${items.length} items written (${langs.join(', ')})`);
if (log.dropped.length) console.log(`content: ${log.dropped.length} open markers dropped:\n  ` + log.dropped.join('\n  '));
if (log.unpaired.length && process.env.VERBOSE) console.log('content: unpaired:\n  ' + log.unpaired.join('\n  '));
