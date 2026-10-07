# PRD — Justin The: Digital Transformation & Geospatial AI Site

Oct 6, 2026 · @Justin The

## Overview

The site is a bilingual (English + Bahasa Indonesia) portfolio and knowledge hub for Justin The. It is a static site hosted on a free github.io subdomain, built with Claude Code, and launched with a full content set. There is no fixed launch date.

**Positioning line:** Digital transformation & geospatial AI for Indonesia.

The site follows a portfolio-first model with a knowledge section behind it, and gives equal weight to two connected identities: geospatial AI and digital transformation. Case studies prove delivery at national scale. Methods, tips, and Indonesia-specific guides build reputation with geospatial peers. Digital transformation articles share how to implement systems and drive their adoption, including enterprise work with no spatial component.

### Goals

1. Build a reputation in the geospatial and digital transformation communities, in Indonesia and globally.
2. Showcase delivered programmes as credible, specific case studies.
3. Share methods, lessons, and perspectives from real projects.
4. Become a go-to reference for Indonesia-specific geospatial knowledge (datums, data sources, field conditions).
5. Show digital transformation competence: implementing systems, driving adoption, managing change, and leading programmes, including non-spatial enterprise work.

### Non-goals

- A sales or lead-generation site for a consultancy.
- A CV replacement. The site may support job applications, but it is not designed around them.
- User accounts, paid content, or e-commerce.
- An email newsletter at launch. RSS covers subscriptions for now.

## Target audience

There are two primary audiences: geospatial practitioners and digital transformation practitioners. Every page should give them something they can learn, reuse, or cite.

| Audience | Who they are | What they need from the site | Content that serves them |
| --- | --- | --- | --- |
| Geospatial practitioners (primary) | GIS analysts, drone/LiDAR operators, remote sensing engineers, in Indonesia and abroad | Real methods, honest lessons, Indonesia-specific know-how | Projects, Geospatial AI |
| Digital transformation practitioners (primary) | DT leads, IT managers, PMO and change managers in government, SOEs, and industry | Practical implementation methods, adoption and change tactics, honest lessons | Digital Transformation, Projects |
| Students and early-career professionals | Geography, geodesy, and computer science students; career switchers | Clear explanations, Bahasa-language material | Geospatial AI, Digital Transformation |
| Government and programme decision-makers | Ministry, SOE, and agency staff commissioning geospatial or digital work | Plain-language value, proof of delivery, how to scope projects | Projects, Digital Transformation |
| Industry peers and collaborators | Researchers, open-source maintainers, conference organisers | Evidence of expertise and opinions worth discussing | Projects, Perspectives tag |

**Bilingual rationale:** English reaches the global community and international collaborators. Bahasa Indonesia serves local practitioners and students, a group that global geospatial blogs rarely serve in depth.

## Information architecture

The site has four sections under Home: Projects, Geospatial AI, Digital Transformation, and About. The three content sections map directly to what has been written: case studies go to Projects, and each article belongs to Geospatial AI, Digital Transformation, or both.

&#91;embedded content: site map · 3 content categories, 2 tags, 1 series\]

Categories planned earlier but without content yet (Methods, Indonesia Geo, Field Notes, Tutorials, Tools & Reviews, Explainers) and the Resources pages (Data Directory, Glossary, Tools & Code, Reading List) are deferred until there is content for them. Each can be added later with one config entry (FR-29), without changing URLs.

## Content plan

The site launches with three content categories, all in the main navigation, plus two tags. Categories follow the content: a new one is added only when there are at least three items for it. A post can belong to more than one category.

### Content categories

| Category | Definition | Current content | Shown as |
| --- | --- | --- | --- |
| Projects | Case studies of delivered work: context, approach, role, outcome, lessons | 7 case studies, filtered by sector | Nav category |
| Geospatial AI | How AI, satellite, drone, and spatial data are used in practice, and where the field is heading in Indonesia | Spatial AI in Practice; One Map, Many Models; Data Governance (shared) | Nav category |
| Digital Transformation | How to implement systems and drive adoption, spatial or not: change management, data, dashboards, and emerging technology | Timesheet app (Part 1); KPI dashboards (Part 2); Data Governance (shared); Spatial AI in Practice (shared); Generative AI; Blockchain, Quantum, and AI | Nav category |
| Perspectives | Opinion pieces, clearly labelled as views | Blockchain, Quantum, and AI; One Map, Many Models | Tag |
| Lessons Learned | Honest accounts of what went wrong and why | Timesheet app; Spatial AI in Practice; Generative AI | Tag |

Series, such as *Digitalising a Construction Company*, are set in each item's metadata and shown as previous/next navigation, not as a category.

### Project sectors

Case studies are filtered by sector within Projects. Only sectors with at least one case study are shown.

| Sector | Case studies |
| --- | --- |
| Infrastructure & Construction | National capital monitoring; 142 km high-speed railway monitoring |
| Agriculture & Food Security | Nationwide rice productivity in one month |
| Energy | Hydropower feasibility across four sites; landslide early warning for minihydro plants |
| Mining | Mapping illegal mining to protect communities and nature |
| Environment & Pollution | Forecasting Belitung's coastline |

Forestry & Land Governance and Urban & Property Development appear automatically once a case study uses them.

### Digital Transformation content

DT content is written for practitioners: how to implement systems, drive adoption, and manage change, with honest lessons. It draws on both geospatial and non-spatial work. Non-spatial work appears as articles, not case studies.

| Experience | Article ideas |
| --- | --- |
| Timesheet app rollout (industrial company) | Taking an app from requirements to company-wide use; getting field workers to adopt a new tool |
| Mine Management Systems and data migration | Migrating from legacy platforms without losing data or trust; ETL design for multi-site operations |
| Enterprise analytics and KPI dashboards | Designing KPI dashboards executives actually use; moving from spreadsheets to an analytics platform |
| Digital upskilling and adoption programmes | Upskilling workforces with mixed technology maturity; a change management playbook for system adoption |
| Geospatial and AI projects as DT | Why AI dashboards get ignored in ministries, and what drives adoption; turning drone monitoring into a decision process |
| Programme and PMO leadership | Running multi-site blanket contracts; delivering a national programme in one month; writing a good TOR |

### Launch content set

The launch set is the content already drafted in `content.md`, plus three short personal pages:

| Item | Type | At launch |
| --- | --- | --- |
| Case studies | Projects | 7 (drafted) |
| Articles | Geospatial AI and Digital Transformation | 7 (drafted) |
| About, Now, Contact | Personal pages | 3 (to write) |
| Resources pages | Data Directory, Glossary, Tools & Code, Reading List | Deferred until after launch |

Every item ships in both English and Bahasa Indonesia, so the launch set is 17 bilingual items. All drafts still contain open markers that must be resolved before they can be published (FR-40).

### Launch articles

1. Building the App Was Easy. Getting People to Use It Took Three Months. (Digital Transformation; series Part 1)
2. The Dashboard Came Last: KPI Dashboards for a Construction Company's Leadership (Digital Transformation; series Part 2)
3. Data Governance Without the Bureaucracy (Digital Transformation, Geospatial AI)
4. Spatial AI in Practice (Geospatial AI, Digital Transformation)
5. Generative AI for a Small Geospatial Team (Digital Transformation)
6. Blockchain, Quantum, and AI: What People Ask For vs What They Actually Need (Digital Transformation; Perspectives)
7. One Map, Many Models: Where Geospatial AI in Indonesia Is Heading (Geospatial AI; Perspectives)

### Content rules

- **Specific over promotional.** No unsupported claims such as "set a new standard" or "unprecedented precision." Use numbers, constraints, and trade-offs instead.
- **Method, not client data.** Never publish client imagery, maps, or findings without written permission. Describe the method and keep the client generic where needed.
- **Sensitive projects stay method-only.** Law-enforcement and land-dispute work (for example Tesso Nilo, KLHK Law Enforcement) gets no site-specific details.
- **Past employers too.** Digital transformation articles drawing on past or current employers share methods and lessons, not internal data, figures, or confidential details.
- **Verify regulations.** Posts on drone permits, the One Map Policy, or other rules cite official sources and carry an "as of" date.

## Functional requirements

Launch features are bilingual content, search, comments, interactive maps, and RSS. All must work on static hosting with no server of our own. Priority uses Must / Should / Could.

### Bilingual

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| FR-1 | Every page and post exists in English and Bahasa Indonesia | Must | Each content item has an EN and ID version linked by a shared translation key |
| FR-2 | Language-prefixed URLs | Must | `/en/...` and `/id/...`; the same slug in both languages where practical |
| FR-3 | Language switcher on every page | Must | Switcher links to the exact counterpart page, not the homepage |
| FR-4 | All UI strings translated | Must | Navigation, dates, labels, buttons, and 404 page appear in the active language |
| FR-5 | `hreflang` tags on every page | Must | Each page declares its alternate-language URL |
| FR-6 | Missing translations block publishing | Should | The build fails or warns when a content item lacks its counterpart |

### Search

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| FR-7 | Client-side full-text search | Must | Works with no backend; index generated at build time |
| FR-8 | Search scoped to the active language | Must | EN pages return EN results; ID pages return ID results |
| FR-9 | Results show title, category, and excerpt | Should | Search opens from the header and works with the keyboard |

### Comments

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| FR-10 | Comments on posts and case studies | Must | Third-party comment widget compatible with GitHub Pages (Giscus recommended, see Technical requirements) |
| FR-11 | Comments load lazily | Should | The widget loads only when scrolled into view, so page speed is unaffected |
| FR-12 | Comments can be disabled per page | Should | A metadata flag (`comments: false`) hides the widget |

### Interactive maps

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| FR-13 | Embed an interactive map inside any post | Must | A reusable component or shortcode takes a data file, centre, and zoom |
| FR-14 | Supports GeoJSON at launch | Must | Points, lines, and polygons render with styled layers and popups |
| FR-15 | Basemap with correct attribution | Must | Uses an openly licensed basemap; attribution is visible |
| FR-16 | Maps load lazily, with a static fallback | Should | A preview image shows until the map is clicked or scrolled into view |
| FR-17 | Large datasets use tiled formats | Could | Supports PMTiles or similar for data too large for GeoJSON |
| FR-18 | No client data in maps | Must | Map data is public, synthetic, or explicitly approved by the client |

### Subscriptions

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| FR-19 | RSS/Atom feed per language | Must | `/en/feed.xml` and `/id/feed.xml`, linked in the page head and footer |
| FR-20 | Per-category feeds | Could | Readers can subscribe to a single category |

### Navigation and templates

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| FR-21 | Header navigation | Must | Home, Projects, Geospatial AI, Digital Transformation, About, search, language switcher |
| FR-22 | Category and tag archive pages | Must | Every category and tag has a paginated listing page |
| FR-23 | Post template | Must | Title, date, updated date, one or more categories, tags, reading time, table of contents for long posts, related posts |
| FR-24 | Case study template | Must | Structured fields: client (or anonymised label), sector, location, year, role, methods and tools, outcome, lessons |
| FR-25 | Code blocks | Must | Syntax highlighting and a copy button |
| FR-26 | Glossary page | Should | Post-launch: EN–ID term pairs with a definition, filterable by letter or keyword |
| FR-27 | Data Directory page | Should | Post-launch: filterable list of sources with publisher, data type, coverage, licence, and link |
| FR-28 | Footer | Must | RSS, GitHub, LinkedIn, contact, licence notice, language switcher |

## Technical requirements

Recommended stack: **Astro** static site generator, deployed to **GitHub Pages** through GitHub Actions, at `justin-the.github.io` (assuming the GitHub username in the CV). Versions and features below reflect general knowledge and should be checked against current documentation before building.

### Static site generator options

| Option | Strengths | Weaknesses | Fit |
| --- | --- | --- | --- |
| **Astro (recommended)** | Built-in i18n routing; content collections with schema validation; interactive components (maps) only load where used | Requires Node.js; newer than Hugo, so fewer ready-made themes | Best fit for bilingual content plus interactive maps |
| Hugo | Very fast builds; mature built-in multilingual support; single binary | Go templating is harder to read; interactive components need manual JavaScript | Strong alternative if maps stay simple |
| Jekyll | Native GitHub Pages support | Weak multilingual support without plugins; slower builds; GitHub Pages restricts plugins unless built with Actions | Not recommended |

Astro's schema validation is especially useful when building with Claude Code: required metadata fields (such as the translation key) can be enforced at build time, which supports FR-6.

### Hosting and deployment

- **Repository:** public repo named `justin-the.github.io`, so the site serves at the root URL.
- **Deployment:** GitHub Actions builds the site on every push to `main` and publishes to GitHub Pages.
- **Preview:** pull requests run a build check, so broken links or missing translations fail before merge.
- **Custom domain later:** GitHub Pages supports custom domains, so the github.io URL can move without rebuilding.
- **Limits:** GitHub Pages has size and bandwidth limits. I believe they are roughly 1 GB per site and a soft limit of about 100 GB of bandwidth per month, but verify in GitHub's current documentation. Large map data and images must stay within these.

### Third-party services

| Feature | Recommended service | Notes |
| --- | --- | --- |
| Comments | Giscus | Stores comments in GitHub Discussions on the site repo. Readers need a GitHub account to comment, which suits a technical audience but excludes some readers. |
| Search | Pagefind | Builds a static search index after the site build; supports multilingual indexes. |
| Interactive maps | MapLibre GL JS | Supports vector tiles and PMTiles. Leaflet is a simpler alternative for basic GeoJSON maps. |
| Basemap | To be decided | Choose a provider whose terms allow embedding on a public site. OpenStreetMap's own tile servers have a usage policy that may not suit this, so verify before choosing. A self-hosted PMTiles basemap is another option. |

### Proposed repository structure

```
justin-the.github.io/
├── content/                      # everything Justin edits
│   ├── content.md                # English case studies, articles, pages
│   ├── content.id.md             # Bahasa Indonesia, same translationKeys
│   ├── *.md                      # optional extra source files, read the same way
│   ├── site.en.yaml              # homepage and section copy (EN)
│   ├── site.id.yaml              # homepage and section copy (ID)
│   ├── data/                     # glossary, data directory, reading list, talks
│   └── images/<translationKey>/  # cover.jpg plus any other images per item
├── scripts/
│   └── split-content.mjs         # parses and validates content at build time
├── src/
│   ├── content/                  # GENERATED at build time; never edit by hand
│   ├── components/               # Map, Mermaid, LanguageSwitcher, Search, Comments
│   ├── layouts/                  # CaseStudy, Article, Page
│   ├── content-types.ts          # maps # headings to types and templates
│   └── i18n/{en,id}.json         # UI strings
├── public/maps/                  # GeoJSON / PMTiles for interactive maps
└── .github/workflows/deploy.yml
```

### Site metadata block (example)

```yaml
title: "From LiDAR point cloud to minihydro layout"
lang: en
translationKey: lidar-minihydro-layout
categories: [geospatial-ai]   # one or more
tags: [lidar, hydropower, dem]
summary: "How a DEM drives turbine, generator, and channel placement."
published: 2026-11-01
updated: 2026-11-01
comments: true
map: false
```

### Content source: content.md

All case studies and articles are written in one Markdown file, `content/content.md`, with images in a folder beside it. At build time, a script reads the file, splits it into individual items, validates them, and lays out every page automatically. Justin never edits page code or creates files per item: adding content means adding a section to the Markdown file and, optionally, dropping images into a folder.

&#91;embedded content: content pipeline · one source file, split, validated, laid out automatically\]

The single source file is for writing; the split items are for building. Generated items are never edited by hand, so the source file stays the only place content lives.

#### Source file format

The current working file already follows this format, so it can be used as-is:

- **Top-level headings set the content type.** `# Case Studies` makes every item below it a case study, `# Articles` makes them articles, and `# Pages` holds standalone pages such as About, Now, and Contact. A registry maps each heading to a type, so new types can be added later.
- **Each second-level heading (`##`) starts one item.** Its title is the heading text, with any numbering prefix (such as `1.` or `A1.`) removed.
- **Each item ends with a `### Site metadata` block** containing a YAML code block: `translationKey`, categories or sector, tags, summary, series, `featured`, `draft`, and so on. The metadata is read, not displayed.
- **Working sections are excluded from the page:** `### To confirm before publishing` and `### To add before publishing` stay in the source for the author but never render.
- **Anything before the first top-level type heading is ignored,** including the file intro and the Contents list.
- **Mermaid code blocks render as diagrams,** including flowcharts, timelines, and quadrant charts.

#### Bilingual and multiple files

- **Bahasa Indonesia lives in `content/content.id.md`,** using the same structure. Items are matched across languages by `translationKey`.
- **Every `.md` file in `content/` is read the same way.** New content can go into `content.md` or into additional files (for example one file per year or per topic) without any code change.

#### Images

- **One folder per item:** `content/images/<translationKey>/`.
- **`cover.jpg` (or `.png`, `.webp`) becomes the item's card and header image automatically.** Items without a cover get a generated pattern consistent with the site design.
- **Other images are placed with normal Markdown links,** for example `![Drone survey](images/landslide-early-warning-minihydro/survey.jpg)`.
- **All images are resized and converted** to modern formats at build time.

#### Automatic layout

- **Case studies** render with the at-a-glance table as a summary card, then the remaining sections in order.
- **Articles** render as long-form reading pages with a table of contents for long pieces.
- **The home page, category and sector lists, series navigation, and related items** are generated from the metadata (`featured`, categories, sector, series, tags), never maintained by hand.

#### Requirements

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| FR-36 | Content is read from Markdown source files | Must | Every `.md` file in `content/` is parsed at build time; no content lives in components or layouts |
| FR-37 | Items are split by heading | Must | Each `##` heading under a type heading becomes one item, typed by its `#` heading |
| FR-38 | Metadata comes from the Site metadata block | Must | The YAML block is parsed and validated against the type's schema, then removed from the rendered page |
| FR-39 | Working sections never render | Must | "To confirm" and "To add" sections are stripped from output |
| FR-40 | Open markers block publishing | Must | Items with `draft: true`, or containing \[TO CONFIRM\], \[ADD\], \[CONFIRM\], \[DRAFT\], \[VERIFY\], or \[TO WRITE\], are excluded from production builds and listed in the build log |
| FR-41 | Clear build errors | Must | Errors name the source file, the item heading, and the problem (for example a missing `translationKey`) |
| FR-42 | Images are picked up by convention | Must | `cover.*` in an item's image folder becomes its cover; other images resolve from Markdown links |
| FR-43 | Layout is automatic | Must | Templates are chosen by type; home, lists, series, and related items are generated from metadata |
| FR-44 | Mermaid diagrams render | Must | Flowchart, timeline, and quadrant chart blocks render as diagrams; failures fall back to showing the code |
| FR-45 | Bilingual matching | Must | EN and ID items are paired by `translationKey`; unpaired items are reported (see FR-6) |
| FR-46 | Homepage and section copy from files | Must | Positioning line, intros, and section text come from `content/site.en.yaml` and `content/site.id.yaml` |
| FR-47 | Structured data from files | Must | When added after launch, the Glossary, Data Directory, Reading List, and Talks come from YAML files in `content/data/` |
| FR-48 | Import from other formats | Could | A script converts a spreadsheet or Word document into the source format |

A single large file is easy to write in but can become hard to navigate. Splitting it later into several files in `content/` is supported without code changes (FR-36), so this can be decided when it becomes a problem.

## Design direction

Recommended style: **"field notebook meets topographic map."** It is text-first and calm like Anita Graser's site, with cartographic details that signal the geospatial niche. Writing stays the hero; maps and visuals appear where they explain something.

### Visual language

| Element | Recommendation |
| --- | --- |
| Colour | Warm off-white background, deep forest-teal primary, terracotta accent (like contour index lines), muted greys for metadata |
| Dark mode | Full dark theme following the system setting, with a manual toggle |
| Headings | A clean grotesk sans-serif |
| Body text | A highly readable serif for long posts (for example Source Serif 4) |
| Code | A monospace font such as JetBrains Mono |
| Motifs | Subtle contour-line pattern in the header; coordinates and region labels as metadata on case studies |
| Imagery | Real field photos, map screenshots, and diagrams; no stock photos |

All fonts must support the full Latin character set used in Bahasa Indonesia and be free to self-host or load from Google Fonts.

### Layout

- **Reading width:** about 65–75 characters per line for posts.
- **Homepage:** positioning line and short intro; two equal entry points, Geospatial AI and Digital Transformation, each with featured case studies or articles; an interactive map of Indonesia marking project regions (regions only, no exact sites); latest posts from both.
- **Case study cards:** title, sector, region, year, and a one-line outcome.
- **Post pages:** title block with category, date, reading time, and language switcher; table of contents in a sidebar on desktop, collapsed on mobile.
- **Mobile first:** every page, map, table, and code block works on a phone without horizontal page scrolling.

## Content and translation workflow

Justin builds the site and produces translations with Claude Code. Justin writes each post in one language, Claude Code drafts the other, and Justin reviews before publishing. Human review stays mandatory: AI translation of technical geospatial terms is often inconsistent or too literal.

### Publishing steps

1. **Draft** a new `##` section in `content/content.md` under the right type heading, ending with its Site metadata block (`draft: true`).
2. **Add images** to `content/images/<translationKey>/`, with `cover.jpg` for the card image.
3. **Translate** with Claude Code, which adds the matching section to `content/content.id.md` with the same `translationKey`.
4. **Check terms** against the glossary so the same English term always maps to the same Bahasa term.
5. **Resolve every marker:** \[TO CONFIRM\], \[ADD\], \[CONFIRM\], \[DRAFT\], \[VERIFY\], and \[TO WRITE\]. The build lists any that remain.
6. **Preview** locally, including maps and diagrams, then open a pull request.
7. **Publish** by setting `draft: false` in both languages and merging to `main`; GitHub Actions builds and deploys.

### Repository guidance for Claude Code

A `CLAUDE.md` file at the repo root gives Claude Code standing rules:

- Writing style: specific, plain, no promotional superlatives.
- Terminology: always use the glossary for EN–ID technical terms; keep established English terms (for example LiDAR, DEM, NDVI) untranslated where Indonesian practitioners use them as-is.
- Content rules from the Content plan section: no client data, sensitive projects method-only, regulations cited.
- Technical conventions: the source file format, metadata schema, and how to add a map to a post.

### Review checklist

- [ ] Both language versions exist and share a `translationKey`
- [ ] Technical terms match the glossary
- [ ] No client names, imagery, or data without permission
- [ ] Regulations and statistics cite a source and date
- [ ] Maps load and show attribution
- [ ] Summary and tags filled in for both languages

## Extensibility and future content

Adding a new category, content type, or page section must take a config entry and, at most, one new template, never a redesign or broken links. The site will grow beyond its launch set, so these rules are built in from Phase 1.

### Requirements

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| FR-29 | Categories defined in one config file | Must | Adding a category = one entry (slug, EN and ID name, EN and ID description, nav or tag) plus translations; no template code changes |
| FR-30 | Navigation and footer generated from config | Must | A new category or page appears in menus without editing layout code |
| FR-31 | Post URLs independent of category | Must | Posts live at `/en/posts/<slug>` and `/id/posts/<slug>`, so recategorising or promoting a tag never changes a URL |
| FR-32 | New content types via content collections | Should | Each type = a schema, a layout, and a listing page; existing types are untouched |
| FR-33 | Optional fields reserved in the schema now | Should | `author`, `series`, `seriesOrder`, `video`, `downloads` exist as optional fields from launch, avoiding later migrations |
| FR-34 | Redirects for moved or renamed pages | Should | Static redirect pages generated at build time, since GitHub Pages has no server-side redirects (verify the exact mechanism in Astro's docs) |
| FR-35 | Languages not hard-coded to two | Could | Language list lives in config, so a third language could be added later |

### Candidate future content

| Content type | Example | What it needs |
| --- | --- | --- |
| Talks & Publications | Conference talks, papers, workshop slides | A collection with event, date, slides link, video link |
| Video walkthroughs | Screen recordings of a QGIS or Python workflow | A lazy-loading video embed component |
| Series and learning paths | A multi-part "Drone mapping from scratch" series | The `series` fields plus previous/next navigation |
| Datasets and samples | Synthetic or public sample data for tutorials | A downloads page with licence per dataset; files kept within GitHub Pages limits |
| Interactive tools | Coordinate converter for Indonesian datums; NDVI explorer | A standalone page type that loads its own scripts |
| Map gallery | Showcase of maps and visualisations | A gallery layout with thumbnails and captions |
| Guest posts and interviews | Conversations with Indonesian geospatial practitioners | The `author` field and author profile pages |
| Newsletter | Periodic digest of new posts | A third-party email service, added when RSS is no longer enough |

### Adding a content type

`CLAUDE.md` includes a standing checklist so Claude Code adds new content consistently:

1. Register the new `#` heading in `content-types.ts`, mapping it to a type name.
2. Define the type's metadata schema, with required bilingual fields.
3. Create its layout and listing page.
4. Add EN and ID UI strings for any new labels.
5. Register it in the navigation config if it belongs in the menu.
6. Add one bilingual example section to the source files and confirm the build passes CI.

## Non-functional requirements

The site must be fast on Indonesian mobile connections, accessible, findable in both languages, and free of tracking by default.

| ID | Area | Requirement | Target |
| --- | --- | --- | --- |
| NFR-1 | Performance | Fast load on mid-range phones over mobile data | Lighthouse Performance score of 90+ on mobile for pages without maps |
| NFR-2 | Performance | Minimal JavaScript on text pages | Map, search, and comment scripts load only on pages and moments that need them |
| NFR-3 | Performance | Optimised images | Responsive sizes, modern formats (WebP or AVIF), lazy loading below the fold |
| NFR-4 | Accessibility | Meets WCAG 2.2 level AA | Keyboard navigation, visible focus, alt text on all images, sufficient colour contrast in both themes |
| NFR-5 | Accessibility | Maps are not the only source of information | Every map has a text summary or caption of its key point |
| NFR-6 | SEO | Discoverable in both languages | `sitemap.xml` with alternate-language entries, canonical URLs, unique meta descriptions per language |
| NFR-7 | SEO | Rich link previews | Open Graph and Twitter/X card tags with a per-post image |
| NFR-8 | SEO | Structured data | Article markup on posts and case studies |
| NFR-9 | Privacy | No tracking cookies by default | Any analytics must be cookieless and privacy-friendly; a short privacy note discloses third-party services (Giscus, basemap, search) |
| NFR-10 | Reliability | Broken links caught before deploy | Link check runs in CI on every pull request |
| NFR-11 | Compatibility | Modern browsers | Last two versions of Chrome, Safari, Firefox, and Edge, on desktop and mobile |
| NFR-12 | Licensing | Clear reuse terms | Content and code licences stated in the footer (suggested: CC BY 4.0 for content, MIT for code) |

## Success metrics

Success means peers use, discuss, and cite the content, not raw traffic. The targets below are proposed starting points for the first 12 months after launch, to revisit after 6 months.

| Metric | Type | How measured | Proposed 12-month target |
| --- | --- | --- | --- |
| Publishing consistency | Leading | New bilingual posts per quarter | At least 3 per quarter |
| Reader engagement | Leading | Giscus comments and reactions | Comments on at least half of new posts |
| Code reuse | Leading | Stars, forks, and issues on linked GitHub repos | At least 1 repo with outside contributions or issues |
| Inbound links and mentions | Lagging | Backlinks, shares, and mentions found via search and social | Cited or linked by at least 5 external sites or communities |
| Professional opportunities | Lagging | Speaking invitations, collaboration or interview requests citing the site | At least 2 |
| Visitors and top pages | Diagnostic | Cookieless analytics, if adopted (see open questions) | Baseline only in the first 6 months |
| Language split | Diagnostic | Share of EN vs ID page views | Baseline only, used to decide translation priorities |

## Risks, assumptions, and open questions

The biggest risk is a launch that keeps slipping: a full bilingual content set with no fixed date makes it easy to delay indefinitely. The milestones section counters this with phase gates.

### Risks

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Launch slips with no fixed date and a full content set | High | Fix the launch set (Content plan) and use the phase gates in Milestones; set a target date once Phase 1 is done |
| Bilingual publishing doubles the workload and stalls posting | High | AI-assisted translation with a review checklist; a realistic pace of about 3 posts per quarter |
| Confidential client information published by mistake | High | Written permission per case study; method-only treatment for sensitive projects; review checklist item |
| Two identities blur the message | Medium | One positioning line that joins them; equal entry points on the homepage; multi-category posts that link the two sides |
| AI translation errors hurt credibility with Indonesian readers | Medium | Glossary-enforced terminology; Justin reviews every translation; ask a peer to review early posts |
| Promotional tone carried over from the existing portfolio text | Medium | Rewrite case studies from scratch using the case study template; content rules in `CLAUDE.md` |
| Regulation and data-source posts go out of date | Medium | "As of" dates on time-sensitive posts; yearly review of time-sensitive content |
| Giscus requires a GitHub account, excluding some readers | Low | Accept for launch; revisit if non-technical readers ask to comment |
| Heavy map data exceeds GitHub Pages limits | Low | Simplify GeoJSON, use PMTiles for large data, monitor repo size |

### Assumptions

- The GitHub username is `justin-the`, matching the CV.
- The repo is public, which Giscus and free GitHub Pages hosting require.
- Astro is the chosen generator unless the build phase surfaces a blocker.
- The launch content is the set currently drafted in `content.md`; new categories are added only when there is content for them.

### Open questions

- [ ] Which language serves at the root URL: English or Bahasa Indonesia?
- [ ] Should Perspectives become a nav category once it has three items?
- [ ] Use cookieless analytics, or no analytics at all?
- [ ] Which basemap provider, after checking its usage terms?
- [ ] Confirm content and code licences (suggested CC BY 4.0 and MIT).
- [ ] Should both language versions of a post share one comment thread, or have separate threads?
- [ ] Which language will Justin usually write first?
- [ ] Move to a custom domain later, and if so, which name?

## Milestones

The build runs in five phases separated by four gates. There is no fixed launch date, so each gate's criteria, not the calendar, decide when the next phase starts.

&#91;embedded content: build roadmap · 5 phases, 4 gates\]

Writing content takes far longer than building the site, so drafting case studies and posts should start in Phase 1, not wait for Phase 3.
