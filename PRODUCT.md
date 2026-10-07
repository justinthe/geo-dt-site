# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static), deployed to GitHub Pages via GitHub Actions from repo `justinthe/geo-dt-site`, served at `https://justinthe.github.io/geo-dt-site/` (Astro `base: '/geo-dt-site'`). Pagefind for search, Giscus for comments, MapLibre GL JS for maps. Chosen in PRD.md; confirmed in interview 2026-10-07.

## Users

- **Geospatial practitioners** (GIS analysts, drone/LiDAR operators, remote sensing engineers, Indonesia and abroad): want real methods, honest lessons, Indonesia-specific know-how.
- **Digital transformation practitioners** (DT leads, IT managers, PMO/change managers in government, SOEs, industry): want implementation and adoption tactics, honest lessons.
- Secondary: students and early-career professionals; government and programme decision-makers; industry peers and collaborators.

## Product Purpose

Bilingual (EN + Bahasa Indonesia) portfolio and knowledge hub for Justin The. Case studies prove delivery at national scale; articles share methods, lessons, and perspectives. Success = peers use, discuss, and cite the content, not raw traffic.

## Positioning

"Digital transformation & geospatial AI for Indonesia." Two connected identities with equal weight: someone who has built the systems and also had to get people to use them, across 20+ years in Indonesia.

## Operating Context

- Pages at launch: Home, Projects, Geospatial AI, Digital Transformation, About, posts, archives. Now and Contact are deferred (user, 2026-10-07).
- Links: GitHub https://github.com/justinthe, LinkedIn https://www.linkedin.com/in/justin-the, email justin.the@gmail.com.
- Readers arrive mostly on mobile over Indonesian mobile data; text pages must be light.
- Author writes in one Markdown source file (`content/content.md`); the build splits, validates, and lays out every page. Author never edits page code.
- Bahasa Indonesia is scaffolded only at launch: routes, UI strings, switcher, and a "translation coming" state. `content.id.md` is added later by the author.

## Capabilities and Constraints

- Static hosting only; no server of our own.
- Bilingual routing `/en/...`, `/id/...`; English at root (`/` redirects to `/en/`).
- **Open markers** (`[TO CONFIRM]`, `[ADD]`, `[CONFIRM]`, `[DRAFT]`, `[VERIFY]`, `[TO WRITE]`): the line, table row, or list item that carries a marker is dropped at build time; the item itself still publishes. Source file keeps the markers for the author. (Interview decision; replaces PRD FR-40's exclude-whole-item rule.)
- **Locations:** place names stay as written in text, metadata, and images (user reversed the earlier island-level rule on 2026-10-07). Homepage map marks project regions, not exact sites (PRD).
- **No client logos** in images: blur them. The landslide project's site name and the coordinates column in its daily report are also blurred (user, 2026-10-07). Client names stay out of the text (already anonymised in the source).
- Word-cloud images (railway case study) are public-news derived and kept as-is (user decision).

## Brand Commitments

- Voice: specific, plain, no promotional superlatives; numbers, constraints, trade-offs instead of claims.
- Design direction pinned by PRD: "field notebook meets topographic map": text-first, calm, cartographic details. Warm off-white ground, deep forest-teal primary, terracotta accent, muted grey metadata; full dark mode (system + toggle); clean grotesk headings, readable serif body (e.g. Source Serif 4), monospace code (e.g. JetBrains Mono); subtle contour-line motif; coordinates/region labels as metadata.
- Imagery: real field imagery and screenshots where they exist. Where none exists, AI-generated illustrations are allowed (user decision 2026-10-07), always labelled as illustrations.

## Evidence on Hand

- `content.md`: 7 case studies, 7 articles (all drafts).
- `about.md`: About page (EN).
- `images/<n>_<slug>/`: real project imagery for case studies 1, 2, 3, 5 (16 images). Folder 5 carries the client's logo and name, which must be blurred before use.
- No testimonials, client logos, metrics dashboards, or press. Do not fabricate any.

## Product Principles

1. Writing is the hero; visuals appear where they explain something.
2. Method, not client data: no client names, logos, or confidential figures.
3. Honest over impressive: lessons and failures are first-class content.
4. Author effort stays in one Markdown file; everything else is derived.
5. Fast and light on a mid-range phone; scripts load only where needed.

## Accessibility & Inclusion

WCAG 2.2 AA: keyboard navigation, visible focus, alt text on all images, contrast in both themes. Maps never the only source of information (text summary/caption required).
