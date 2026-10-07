// Fails when a built page links to a page or file that isn't in dist/ (NFR-10). Internal links only.
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = new URL('../dist', import.meta.url).pathname;
const BASE = '/geo-dt-site/';
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const broken = [];
for (const file of walk(DIST).filter((f) => f.endsWith('.html'))) {
  for (const [, url] of readFileSync(file, 'utf8').matchAll(/(?:href|src)="([^"#?]+)/g)) {
    if (!url.startsWith(BASE)) continue;
    const p = join(DIST, decodeURI(url.slice(BASE.length)));
    if (!existsSync(p) || (statSync(p).isDirectory() && !existsSync(join(p, 'index.html')))) broken.push(`${file.slice(DIST.length)} → ${url}`);
  }
}
if (broken.length) { console.error(`Broken internal links:\n  ${[...new Set(broken)].join('\n  ')}`); process.exit(1); }
console.log('links: all internal links resolve');
