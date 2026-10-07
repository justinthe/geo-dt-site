import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';
import { unified } from '@astrojs/markdown-remark';
import rehypeMermaid from 'rehype-mermaid';
import rehypeSheet from './src/lib/rehype-sheet.mjs';

export default defineConfig({
  site: 'https://justinthe.github.io',
  base: '/geo-dt-site',
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  integrations: [
    expressiveCode({
      themes: ['github-light', 'github-dark'],
      themeCssSelector: (theme) => (theme.type === 'dark' ? '[data-theme="dark"]' : '[data-theme="light"]'),
      useDarkModeMediaQuery: false,
      styleOverrides: { borderRadius: '0', codeFontFamily: 'var(--font-mono)', uiFontFamily: 'var(--font-sans)' },
    }),
    sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', id: 'id' } } }),
  ],
  image: { layout: 'constrained' },
  markdown: {
    syntaxHighlight: { type: 'shiki', excludeLangs: ['mermaid'] },
    // Diagrams render to inline SVG at build time; colours come from site CSS (see global.css "Diagrams").
    processor: unified({
      rehypePlugins: [
        [rehypeMermaid, {
          strategy: 'inline-svg',
          // The renderer loads Archivo itself so label boxes are measured in the face the page shows.
          css: new URL('./node_modules/@fontsource-variable/archivo/wdth.css', import.meta.url),
          mermaidConfig: { theme: 'neutral', fontFamily: 'Archivo Variable', themeVariables: { fontSize: '15px' }, quadrantChart: { pointTextPadding: 9, pointLabelFontSize: 13 } },
        }],
        rehypeSheet,
      ],
    }),
  },
});
