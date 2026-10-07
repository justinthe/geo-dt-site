import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getItems, langs, t } from '../../lib/content';
import { site, type Lang } from '../../config/site';

export const getStaticPaths = () => langs.map((lang) => ({ params: { lang } }));

export async function GET(ctx: APIContext) {
  const lang = ctx.params.lang as Lang;
  const items = [...(await getItems('posts', lang)), ...(await getItems('projects', lang))].filter((i) => !i.fallback);
  return rss({
    title: `${site.author} · ${t(lang, 'site.tagline')}`,
    description: t(lang, 'site.tagline'),
    site: new URL(import.meta.env.BASE_URL, ctx.site).href,
    items: items
      .sort((a, b) => +b.date - +a.date)
      .map((i) => ({ title: i.entry.data.title, description: i.entry.data.summary, pubDate: i.date, link: i.href, categories: i.entry.data.tags })),
    customData: `<language>${lang}</language>`,
  });
}
