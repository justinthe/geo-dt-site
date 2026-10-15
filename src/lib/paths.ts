import { getItems, langs, type Kind } from './content';

/** getStaticPaths for item pages: every key in every language (missing translations get a stub). */
export const itemPaths = (kind: Kind) => async () =>
  (await Promise.all(langs.map(async (lang) => {
    const items = await getItems(kind, lang);
    // Read next draws from case studies and articles together.
    const pool = kind === 'pages' ? items : [...await getItems('projects', lang), ...await getItems('posts', lang)];
    return items.map((item) => ({ params: { lang, slug: item.key }, props: { item, pool } }));
  }))).flat();
