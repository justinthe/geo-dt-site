# Justin The: site

Astro 7 static site, bilingual (EN/ID), deployed to GitHub Pages at `https://justinthe.github.io/geo-dt-site/`. Product truth: `PRODUCT.md`. Requirements: `PRD.md`. Design direction: `.impeccable/surfaces/` (and `DESIGN.md` once written).

## Commands

Node 22 is required (`.nvmrc`). On a machine with Node 20, prefix commands with `npx -y -p node@22 --`.

- `npm run dev`: split content, then the dev server (search only works after a build).
- `npm run build`: split content, `astro build`, then the Pagefind index.
- `node scripts/check-links.mjs`: internal link check over `dist/` (CI runs it).

## Content

- All writing lives in `content/*.md`. Never edit `src/content/generated/` (rebuilt by `scripts/split-content.mjs`).
- `# Case Studies` / `# Articles` / `# Pages` set the type; each `##` is one item, ending with a `### Site metadata` YAML block (`translationKey` and `summary` are required).
- Bahasa Indonesia goes in `content/content.id.md` with the same `translationKey`s. Until then ID pages show a "not translated yet" stub.
- Open markers (`[TO CONFIRM]`, `[ADD]`, `[CONFIRM]`, `[DRAFT]`, `[VERIFY]`, `[TO WRITE]`): a table row, list item or paragraph that is only a marker is dropped at build; a marker trailing real text is removed; a column that is a marker in every row is dropped; a section opened by `[TO WRITE]` is dropped. The build log lists every drop.
- `draft: true` is ignored while `honourDraftFlag` is `false` in `src/config/site.ts`.
- Images: `content/images/<translationKey>/`. `cover.*` (or `cover:` in metadata) is the card and header image. In the text, `![alt](images/<key>/file.png "Caption")` becomes a numbered figure.
- Homepage index map points: `regions: [{ name, lon, lat }]` in a case study's metadata (regions, never exact sites).
- Mermaid: flowcharts render top-down; `timeline` renders as an HTML list; a `title` line becomes a caption.
- Homepage copy: `content/site.{en,id}.yaml`. Categories, sectors, tags, series, links: `src/config/site.ts`. UI strings: `src/i18n/{en,id}.json`.

## Writing rules

- Specific and plain: numbers, constraints, trade-offs. No promotional superlatives.
- Method, not client data. No client names or logos; blur logos in images before adding them (originals stay in the gitignored `_private/`).
- Sensitive projects (law enforcement, land disputes) stay method-only.
- Regulations and statistics cite a source and an "as of" date.
- Keep established English terms (LiDAR, DEM, NDVI) untranslated in Bahasa Indonesia.
- AI-generated images carry the caption "Illustration (AI-generated)" and their prompt in `content/images/<key>/PROVENANCE.md`.

## Adding a content type

1. Map its `#` heading in `TYPES` in `scripts/split-content.mjs`.
2. Add a collection and schema in `src/content.config.ts`.
3. Add its route under `src/pages/[lang]/` using `layouts/Sheet.astro` or a new layout.
4. Add EN and ID strings in `src/i18n/`.
5. Add it to the nav in `layouts/Base.astro` if it belongs there.
6. Add one example section and confirm `npm run build` passes.

A new category is one entry in `categories` in `src/config/site.ts`.
