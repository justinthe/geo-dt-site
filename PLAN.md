# Build plan and status

Source of truth: `PRD.md` and `PRODUCT.md`. Decisions from the interviews on 2026-10-07 are recorded here.

## Decisions

| Topic | Decision |
| --- | --- |
| Locations | Kept as written in text and metadata. Exception: the landslide project's site name is blurred in its images (`main.png`, `daily_report.png`), and the coordinates column in `daily_report.png`. |
| Client logo | Blurred: the client's logo and name in the 3 landslide images. Unredacted originals are in the gitignored `_private/images-original/`. |
| Bahasa Indonesia | EN content only. ID routes, UI strings, and switcher exist; ID item pages show a "not translated yet" stub linking to EN. |
| Open markers | The paragraph, row, or list item carrying a marker is dropped at build. A column that is all markers is dropped. A `[TO WRITE]` section is dropped. The build log lists each drop. |
| `draft: true` | Ignored at launch (`honourDraftFlag: false` in `src/config/site.ts`). |
| URL | `https://justinthe.github.io/geo-dt-site/`; `/` redirects to `/en/`. |
| Now, Contact | Removed for now. About links to email instead. |
| Word clouds | Kept as is. |
| Missing imagery | AI illustrations, captioned "Illustration (AI-generated)". Hydropower: Gamma. The other 9: local FLUX.1-schnell via ComfyUI, palette-matched to the Gamma image. Provenance is in each folder's `PROVENANCE.md` and embedded in the file. |
| `formulae.png` | Duplicate "Water Band Index" label and arrow painted out. |
| Design | "Map sheet": neatline, graticule ticks, sheet numbers, legend swatches, reading-time scale bar, slug-seeded contour masthead, homepage sheet-index map of Indonesia. Contract: `.impeccable/surfaces/src-pages-index-astro.md`. |

## Built

- **Content pipeline:** `scripts/split-content.mjs` turns `content/*.md` into items, applying the marker rule. Diagram handling:
  - Mermaid flowcharts render top-down.
  - Timelines render as an HTML list.
  - A diagram's `title` line becomes a caption.
  - A ```` ```map ```` block becomes an interactive map.
- **Pages:** home, projects (with sector filters), case studies, articles, About, category and tag archives (paginated), RSS per language, sitemap with hreflang, 404, and a root redirect.
- **Navigation:** Projects, Geospatial AI, and Digital Transformation show their sheets in a menu on hover or keyboard focus. Escape closes it.
- **Search:** Pagefind, one index per language, opened with the header button or `/`.
- **Comments:** Giscus, lazy-loaded, one thread per translationKey shared by both languages. Hidden until repo and category IDs are set.
- **Maps:** MapLibre with the OpenFreeMap basemap, loaded on scroll only on pages that have a map. Tested with a synthetic layer; no content uses it yet.
- **Diagrams:** Mermaid renders to SVG at build time and is recoloured for light and dark.
- **CI:** `.github/workflows/deploy.yml` runs build, link check, and Pages deploy.
- **Repo guidance:** `CLAUDE.md` holds content rules and conventions.

## Your actions

1. GitHub → Settings → Pages → Source: **GitHub Actions**.
2. Enable Discussions, set up Giscus (https://giscus.app), and fill `repoId` and `categoryId` in `src/config/site.ts`.
3. Confirm licences: the footer currently says CC BY 4.0 for writing and MIT for code (the PRD's suggestion).
4. Check OpenFreeMap's terms before publishing a post with a map.
5. Resolve markers in `content/content.md` over time. Each resolved line reappears automatically.
6. Write `content/content.id.md` when ready.

## Deferred

- Redirect pages (FR-34): nothing has moved yet.
- Per-category feeds (FR-20), PMTiles (FR-17), Glossary and Data Directory (FR-26/27): post-launch.
- Analytics: none (NFR-9).
