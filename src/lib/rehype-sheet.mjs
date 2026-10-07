// Sets Markdown output in the sheet's forms: titled images become numbered figures,
// tables get a scroll wrapper, Mermaid SVGs get a diagram frame.
const el = (tagName, properties, children) => ({ type: 'element', tagName, properties, children });

const all = (n, test, out = []) => { if (test(n)) out.push(n); n.children?.forEach((k) => all(k, test, out)); return out; };
const hasClass = (n, c) => [].concat(n.properties?.className ?? []).includes(c);

// Quadrant charts centre each point label under its dot; a label that would straddle the
// vertical divider is anchored to the dot's side instead, so it never sits on the line.
function clearQuadrantDivider(svg) {
  const border = all(svg, (n) => hasClass(n, 'border'))[0];
  if (!border) return;
  const xs = all(border, (n) => n.tagName === 'line' && n.properties.x1 === n.properties.x2).map((l) => +l.properties.x1).sort((a, b) => a - b);
  const mid = xs[Math.floor(xs.length / 2)];
  for (const g of all(svg, (n) => hasClass(n, 'data-point'))) {
    const text = g.children.find((k) => k.tagName === 'text');
    const x = +String(text?.properties.transform ?? '').match(/translate\(([\d.]+)/)?.[1];
    const half = String(text?.children?.[0]?.value ?? '').length * 3.6;
    if (!text || Number.isNaN(x) || Math.abs(x - mid) >= half + 4) continue;
    text.properties.textAnchor = x > mid ? 'start' : 'end';
    text.properties.x = x > mid ? -6 : 6;
  }
}

export default function rehypeSheet() {
  return (tree, file) => {
    let fig = 0;
    const label = /\/id\//.test(file.path ?? '') ? 'Gbr.' : 'Fig.';
    const walk = (node) => {
      if (!node.children) return;
      node.children = node.children.map((c) => {
        const kids = c.children?.filter((k) => !(k.type === 'text' && !k.value.trim())) ?? [];
        if (c.tagName === 'p' && kids.length && kids.every((k) => k.tagName === 'img')) {
          return kids.map((img) => {
            const caption = img.properties.title;
            delete img.properties.title;
            img.properties.loading = 'lazy';
            return el('figure', {}, [img, ...(caption ? [el('figcaption', {}, [
              el('span', { className: ['figure-num'] }, [{ type: 'text', value: `${label} ${++fig}` }]),
              el('span', {}, [{ type: 'text', value: caption }]),
            ])] : [])]);
          });
        }
        if (c.tagName === 'table') return el('div', { className: ['table-scroll'], tabIndex: 0, role: 'region', ariaLabel: 'Table' }, [c]);
        if (c.tagName === 'svg' && String(c.properties.id ?? '').startsWith('mermaid')) {
          // Labels are HTML inside the SVG; serialised there, <br> becomes <br></br>, which parses as two breaks: use an empty block instead.
          const fixBr = (n) => n.children?.forEach((k, i) => (k.tagName === 'br' ? (n.children[i] = el('span', { style: 'display:block' }, [])) : fixBr(k)));
          fixBr(c);
          clearQuadrantDivider(c);
          return el('div', { className: ['diagram'], role: 'img', ariaLabel: c.properties.ariaRoledescription ?? 'Diagram' }, [c]);
        }
        walk(c);
        return c;
      }).flat();
    };
    walk(tree);
  };
}
