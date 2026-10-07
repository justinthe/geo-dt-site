import { getCollection, type CollectionEntry } from 'astro:content';
import { site, languages, defaultLang, type Lang, categories, namedTags, sectors } from '../config/site';
import en from '../i18n/en.json';
import id from '../i18n/id.json';

const strings = { en, id } as Record<Lang, Record<string, string>>;
export const t = (lang: Lang, key: string) => strings[lang]?.[key] ?? strings[defaultLang][key] ?? key;
export const langs = Object.keys(languages) as Lang[];

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
/** Site-relative URL with the base path and a trailing slash. */
export const url = (path: string) => {
  const p = path.split('/').filter(Boolean).join('/');
  return p ? `${BASE}/${p}/` : `${BASE}/`;
};
export const asset = (path: string) => `${BASE}/${path.replace(/^\//, '')}`;

export type Kind = 'projects' | 'posts' | 'pages';
export type Entry = CollectionEntry<'projects'> | CollectionEntry<'posts'> | CollectionEntry<'pages'>;
export interface Item {
  kind: Kind;
  entry: Entry;
  lang: Lang; // language of the page it is listed on
  fallback: boolean; // true when shown in another language because the translation doesn't exist yet
  key: string;
  href: string; // the page in `lang` (a "not translated yet" stub when fallback)
  readHref: string; // where the text can actually be read
  sheet: string | null;
  minutes: number;
  date: Date;
}

const paths: Record<Kind, string> = { projects: 'projects', posts: 'posts', pages: '' };
export const itemPath = (kind: Kind, lang: Lang, key: string) => url(`${lang}/${paths[kind]}/${key}`);

const published = (e: Entry) => site.honourDraftFlag ? !e.data.draft : true;

export async function getItems(kind: Kind, lang: Lang): Promise<Item[]> {
  const all = (await getCollection(kind)).filter(published) as Entry[];
  const keys = [...new Set(all.map((e) => e.data.translationKey))];
  return keys
    .map((key) => {
      const own = all.find((e) => e.data.translationKey === key && e.data.lang === lang);
      const entry = own ?? all.find((e) => e.data.translationKey === key && e.data.lang === defaultLang) ?? all.find((e) => e.data.translationKey === key)!;
      const sheet = entry.data.number ? (kind === 'projects' ? `CS-${entry.data.number.padStart(2, '0')}` : entry.data.number) : null;
      return {
        kind, entry, lang, key,
        fallback: !own,
        href: itemPath(kind, lang, key),
        readHref: itemPath(kind, entry.data.lang as Lang, key),
        sheet,
        minutes: Math.max(1, Math.round((entry.body ?? '').split(/\s+/).length / 220)),
        date: entry.data.published ?? site.launchDate,
      };
    })
    .sort((a, b) => a.entry.data.order - b.entry.data.order);
}

/** Every translationKey of a kind, with the languages it really exists in (for the switcher and hreflang). */
export async function translations(kind: Kind, key: string): Promise<Lang[]> {
  return (await getCollection(kind)).filter((e) => e.data.translationKey === key).map((e) => e.data.lang as Lang);
}

export const categoryName = (slug: string, lang: Lang) => categories[slug]?.name[lang] ?? slug;
export const sectorName = (slug: string, lang: Lang) => sectors[slug]?.[lang] ?? slug;
export const tagName = (slug: string, lang: Lang) => namedTags[slug]?.[lang] ?? slug.replace(/-/g, ' ');

export const formatDate = (d: Date, lang: Lang) =>
  d.toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

/** Items sharing the most tags, categories, sector or series with `item`, best first. */
export function related(item: Item, pool: Item[], n = 3) {
  const facets = (i: Item) => {
    const d = i.entry.data as Record<string, unknown>;
    return new Set([
      ...((d.tags as string[]) ?? []).map((x) => `t:${x}`),
      ...((d.categories as string[]) ?? []).map((x) => `c:${x}`),
      ...(d.sector ? [`s:${d.sector}`] : []),
      ...(d.series ? [`r:${d.series}`] : []),
    ]);
  };
  const mine = facets(item);
  return pool
    .filter((o) => o.key !== item.key)
    .map((o) => ({ o, score: [...facets(o)].filter((f) => mine.has(f)).length }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map((x) => x.o);
}

/** Deterministic 32-bit hash for seeding generated artwork from a slug. */
export function hash(s: string) {
  let h = 2166136261;
  for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return h >>> 0;
}
