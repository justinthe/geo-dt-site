import { readFileSync } from 'node:fs';
import YAML from 'yaml';
import type { Lang } from '../config/site';

// Screenshots live in content/images/off-sheet/<key>.png; Astro resolves them at build time.
const shots = import.meta.glob<{ default: ImageMetadata }>('/content/images/off-sheet/*.png', { eager: true });
const shot = (key: string) => shots[`/content/images/off-sheet/${key}.png`]?.default;

const data = YAML.parse(readFileSync('content/off-sheet.yaml', 'utf8'));

export function offSheet(lang: Lang) {
  const items = data.items.map((i: any) => ({
    key: i.key as string,
    domain: i.domain as string,
    title: i.title[lang] as string,
    stack: i.stack[lang] as string,
    desc: i.desc[lang] as string,
    href: `https://justinthe.github.io/${i.key}/`,
    shot: shot(i.key),
  }));
  const groups = data.domains.map((d: any) => ({
    key: d.key as string,
    name: d.name[lang] as string,
    note: d.note[lang] as string,
    items: items.filter((i: any) => i.domain === d.key),
  }));
  const copy = { ...data[lang], all: data[lang].all.replace('{n}', String(items.length)) }; // item count comes from the data
  return { copy, items, groups, count: `${items.length} ${copy.sketches} · ${groups.length} ${copy.domains}` };
}
