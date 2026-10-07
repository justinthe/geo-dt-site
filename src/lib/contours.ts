import { hash } from './content';

/** Seeded PRNG (mulberry32). */
function rng(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * A topographic contour field generated from a slug: a few seeded hills and valleys,
 * traced with marching squares. Returns ordinary and index (every 5th) contour paths.
 */
export function contours(slug: string, w = 120, h = 40, cols = 60, levels = 14) {
  const r = rng(hash(slug));
  const rows = Math.round((cols * h) / w);
  const bumps = Array.from({ length: 7 }, () => ({
    x: r() * w, y: r() * h,
    s: (0.12 + r() * 0.28) * w,
    a: (r() < 0.25 ? -0.6 : 1) * (0.5 + r()),
  }));
  const tilt = (r() - 0.5) * 0.6;
  const z = (x: number, y: number) =>
    bumps.reduce((v, b) => v + b.a * Math.exp(-((x - b.x) ** 2 + ((y - b.y) * 1.6) ** 2) / (2 * b.s * b.s)), tilt * (x / w));

  const dx = w / cols, dy = h / rows;
  const grid: number[][] = [];
  let min = Infinity, max = -Infinity;
  for (let j = 0; j <= rows; j++) {
    grid[j] = [];
    for (let i = 0; i <= cols; i++) {
      const v = z(i * dx, j * dy);
      grid[j][i] = v; min = Math.min(min, v); max = Math.max(max, v);
    }
  }

  const f = (n: number) => +n.toFixed(1);
  const plain: string[] = [], index: string[] = [];
  const labels: { d: string; text: string }[] = [];
  for (let l = 1; l <= levels; l++) {
    const iso = min + ((max - min) * l) / (levels + 1);
    const segs: number[][][] = [];
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        const c = [grid[j][i], grid[j][i + 1], grid[j + 1][i + 1], grid[j + 1][i]];
        const code = (c[0] > iso ? 8 : 0) | (c[1] > iso ? 4 : 0) | (c[2] > iso ? 2 : 0) | (c[3] > iso ? 1 : 0);
        if (code === 0 || code === 15) continue;
        const x = i * dx, y = j * dy;
        const lerp = (a: number, b: number) => (iso - a) / (b - a);
        const e = [
          [x + dx * lerp(c[0], c[1]), y], // top
          [x + dx, y + dy * lerp(c[1], c[2])], // right
          [x + dx * lerp(c[3], c[2]), y + dy], // bottom
          [x, y + dy * lerp(c[0], c[3])], // left
        ];
        const pairs: Record<number, number[][]> = {
          1: [[3, 2]], 2: [[2, 1]], 3: [[3, 1]], 4: [[0, 1]], 5: [[3, 0], [2, 1]], 6: [[0, 2]], 7: [[3, 0]],
          8: [[3, 0]], 9: [[0, 2]], 10: [[0, 1], [3, 2]], 11: [[0, 1]], 12: [[3, 1]], 13: [[2, 1]], 14: [[3, 2]],
        };
        for (const [a, b] of pairs[code]) segs.push([e[a], e[b]]);
      }
    }
    const lines = chain(segs);
    const d = lines.map((pl) => 'M' + pl.map((p) => `${f(p[0])} ${f(p[1])}`).join('L')).join('');
    if (l % 5 !== 0) { plain.push(d); continue; }
    index.push(d);
    // Elevation label on the longest index line, read left to right
    const long = lines.sort((a, b) => b.length - a.length)[0];
    if (long && long.length > cols / 2) {
      // Read left to right where the label sits (the middle of the line), so it is never upside down
      const seg = (k: number) => Math.hypot(long[k + 1][0] - long[k][0], long[k + 1][1] - long[k][1]);
      const total = long.slice(1).reduce((t, _, k) => t + seg(k), 0);
      let k = 0;
      for (let run = 0; k < long.length - 2 && run + seg(k) < total / 2; k++) run += seg(k);
      const pl = long[k + 1][0] < long[k][0] ? [...long].reverse() : long;
      labels.push({ d: 'M' + pl.map((p) => `${f(p[0])} ${f(p[1])}`).join('L'), text: `${l * 25} m` });
    }
  }
  return { w, h, plain: plain.join(''), index: index.join(''), labels };
}

/** Join marching-squares segments that share endpoints into polylines. */
function chain(segs: number[][][]) {
  const key = (p: number[]) => `${p[0].toFixed(4)},${p[1].toFixed(4)}`;
  const ends = new Map<string, number[]>();
  segs.forEach((s, i) => s.forEach((p) => { const k = key(p); ends.set(k, [...(ends.get(k) ?? []), i]); }));
  const used = new Set<number>();
  const out: number[][][] = [];
  for (let i = 0; i < segs.length; i++) {
    if (used.has(i)) continue;
    used.add(i);
    const line = [...segs[i]];
    for (const dir of [1, -1]) {
      for (;;) {
        const tip = dir === 1 ? line.at(-1)! : line[0];
        const next = (ends.get(key(tip)) ?? []).find((n) => !used.has(n));
        if (next === undefined) break;
        used.add(next);
        const [a, b] = segs[next];
        const far = key(a) === key(tip) ? b : a;
        dir === 1 ? line.push(far) : line.unshift(far);
      }
    }
    out.push(line);
  }
  return out;
}
