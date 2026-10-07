import { getItems, langs, type Kind } from './content';

/** getStaticPaths for item pages: every key in every language (missing translations get a stub). */
export const itemPaths = (kind: Kind) => async () =>
  (await Promise.all(langs.map(async (lang) => {
    const pool = await getItems(kind, lang);
    return pool.map((item) => ({ params: { lang, slug: item.key }, props: { item, pool } }));
  }))).flat();
