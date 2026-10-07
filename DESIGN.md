---
name: Justin The
description: Digital transformation & geospatial AI for Indonesia, printed as sheets in a topographic map series.
colors:
  paper: "oklch(0.972 0.007 125)"
  paper-2: "oklch(0.945 0.013 135)"
  paper-3: "oklch(0.915 0.018 140)"
  sea: "oklch(0.948 0.018 220)"
  ink: "oklch(0.29 0.045 200)"
  ink-soft: "oklch(0.38 0.04 200)"
  teal: "oklch(0.43 0.075 188)"
  line: "oklch(0.62 0.045 185)"
  hair: "oklch(0.84 0.02 170)"
  muted: "oklch(0.47 0.02 205)"
  index: "oklch(0.6 0.135 45)"
  index-ink: "oklch(0.5 0.13 42)"
  select: "oklch(0.88 0.06 75)"
typography:
  display:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 1.3rem + 3.6vw, 3.75rem)"
    fontWeight: 720
    lineHeight: 1.15
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 82"
  headline:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.2rem + 2.2vw, 2.5rem)"
    fontWeight: 680
    lineHeight: 1.15
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 88"
  title:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 680
    lineHeight: 1.25
    fontVariation: "'wdth' 86"
  body:
    fontFamily: "'Source Serif 4 Variable', 'Source Serif 4', Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.08em"
    fontVariation: "'wdth' 72"
  figure:
    fontFamily: "'JetBrains Mono Variable', 'JetBrains Mono', ui-monospace, monospace"
    fontSize: "0.85rem"
    fontWeight: 500
    lineHeight: 1.3
    fontFeature: "'tnum'"
rounded:
  none: "0"
  hairline: "2px"
spacing:
  gutter: "clamp(1rem, 4vw, 2.5rem)"
  sheet-inset: "clamp(1.1rem, 5vw, 4rem)"
  measure: "68ch"
  container: "78rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.1rem"
  button-primary-hover:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.paper}"
  tool-button:
    textColor: "{colors.ink}"
    rounded: "{rounded.hairline}"
    height: "2.5rem"
    padding: "0 0.55rem"
  tool-button-hover:
    backgroundColor: "{colors.paper-2}"
  search-input:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "1rem 1.1rem"
  sheet-row-title:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
  sheet-row-title-hover:
    textColor: "{colors.teal}"
  glance-box:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
---

# Design System: Justin The

## Overview

**Creative North Star: "The Map Sheet"**

Every page is one sheet in an Indonesian topographic map series. A sheet has a collar (sheet number, coordinates, legend, scale bar) printed in condensed caps outside a ruled neatline; inside the frame sits the map face: a contour masthead seeded from the page's slug, a title block, and a serif reading column. Listings are sheet indexes, rows in a ruled table, never a card grid. The home page is the series index map of Indonesia with hatched 2.5° index cells, numbered markers, a north arrow and a scale bar, and the list of sheets beside it.

The system is text-first, calm, and dense in the way printed cartography is dense: many hairline rules, few fills, one warm accent. Depth comes from rule weight (ink rule vs. hair rule), not from shadow. Cartographic furniture is functional, never ornament: the scale bar measures reading time, the legend links to categories, the sheet number is the item's ID, the coordinates are the project's first region.

The world carries a night-map dark theme (deep teal-slate paper, pale ink, brighter terracotta), switched by system preference or the header toggle. Every token has a night counterpart; nothing is hard-coded per theme.

**Key Characteristics:**
- Neatline frame (ink rule plus offset hair outline) with graticule ticks every 72px around every sheet and listing.
- Collar band above each frame: sheet number left, coordinates or counts right, in condensed caps and mono figures.
- Slug-seeded contour field: teal hairlines, a terracotta index contour every fifth level, elevation labels on index lines.
- Archivo condensed for structure, Source Serif 4 for reading, JetBrains Mono for every figure and sheet number.
- Square corners; ink and hair rules do the work cards and shadows do elsewhere.

## Colors

Printed map paper and forest-teal ink with a single terracotta index colour; restrained, with the accent rationed to index lines, current-state marks, and figures.

### Primary
- **Forest-Teal Ink** (`ink`): all text, neatlines, the heavy rule under the header, table heads' underline, the primary button fill, land outlines on the index map.
- **Survey Teal** (`teal`): links, hover state of row titles and legend entries, Geospatial AI category swatch (solid line), diagram edges.

### Secondary
- **Terracotta Index** (`index`): index contours, focus ring, current-page underline in nav and filters, the short bar over prose h2, hatched index cells and lit map markers, Digital Transformation swatch (dashed line), timeline stations.
- **Index Ink** (`index-ink`): the text-safe terracotta for figures: sheet numbers in lists, figure numbers in captions, timeline dates, elevation labels.

### Neutral
- **Map Paper** (`paper`): page ground and the inside of every frame.
- **Paper Tint** (`paper-2`): masthead ground, glance box, code, thumbnails, hover fills.
- **Paper Shade** (`paper-3`): neighbouring countries on the index map, alternate quadrant fills.
- **Sea Wash** (`sea`): water on the index map only.
- **Soft Ink** (`ink-soft`): ledes, summaries, secondary nav links.
- **Contour Line** (`line`): ordinary contours, graticule, diagram cluster borders, scrollbar.
- **Hair Rule** (`hair`): row dividers, image borders, the neatline's outer outline.
- **Collar Grey** (`muted`): collar text, captions, list markers, counts.
- **Highlighter** (`select`): text selection and search-match marks.

### Named Rules
**The Index Contour Rule.** Terracotta is the index line: it marks what is current, focused, lit, or numbered. It never fills a surface larger than a marker or a hatched cell.

**The Two Inks Rule.** Every divider is either ink (structural: frame, header, top of a list, table head) or hair (between peers). There is no third rule colour and no grey box fill standing in for a rule.

**The Night Map Rule.** Dark mode is a re-inked sheet, not an inverted one: every token is redefined under `[data-theme='dark']` and the system preference, so components only ever reference tokens.

## Typography

**Display Font:** Archivo Variable (with system-ui), width axis pulled in to 70-88
**Body Font:** Source Serif 4 Variable (with Georgia), optical sizing on
**Label/Mono Font:** JetBrains Mono Variable (with ui-monospace), tabular figures

**Character:** A condensed survey grotesk for headings and collar text against a book serif for reading; the mono is reserved for numbers that a map would print: sheet IDs, coordinates, counts, graticule labels.

### Hierarchy
- **Display** (720, step-4 clamp to 3.75rem, wdth 82): item and listing titles, max 22ch. The home title goes heavier and narrower (740, wdth 76, up to 4rem, line-height 1.02).
- **Headline** (680, step-3 clamp to 2.5rem, wdth 88): prose h2 and home section heads; prose h2 sits on an ink rule with a 3.5rem terracotta bar.
- **Title** (680, 1.25rem, wdth 86): row titles in sheet indexes; 650 at ~0.95-1rem for compact lists, search hits, adjoining sheets.
- **Body** (400, 1.0625rem, 1.6): Source Serif 4 at a 68ch measure, hyphenated. Ledes step up to 1.25rem / 1.5 in soft ink.
- **Label / Collar** (600, 0.75rem, 0.08em, uppercase, wdth 72, collar grey): sheet collars, legend titles, TOC heading, glance labels, table heads. A sentence-case facet variant (550, 0.8rem, 0.02em) carries category and reading-time lines under rows.
- **Figure** (mono 500, ~0.85rem, tabular): sheet numbers (CS-01), coordinates, counts, graticule labels.

### Named Rules
**The Collar Voice Rule.** Uppercase condensed caps belong to the margin of the sheet (collar, legends, labels, table heads). Headings and body never go uppercase.

**The Numbers Are Mono Rule.** Any figure a map would print (sheet number, coordinate, count, scale value) is set in JetBrains Mono with tabular numerals.

## Layout

A single centred sheet, `min(100% - 2 * gutter, 78rem)`. Every content page is a framed sheet: a collar band (flex, space-between) above a neatline frame, content inset by `clamp(1.1rem, 5vw, 4rem)`. Item pages: contour masthead (`clamp(9rem, 22vw, 15rem)` tall) across the frame top, then the title block; from 68rem the title block takes a 1.15fr / 1fr split when there is a cover, and the body becomes three columns (13.5rem margin TOC, 68ch prose, remaining space for wide figures that bleed 14rem right). Home: title and positioning line split 1.35fr / 1fr at 60rem; the index frame splits map 1.6fr / sheet list 1fr at 68rem, with the map legend boxed under the map; the two category entry lists sit side by side at 60rem. Below 40rem the index map keeps the whole archipelago in view and enlarges markers and furniture instead of cropping. Breakpoints in use: 30, 34, 40, 46, 60, 68rem. Vertical rhythm is generous between sections (3.5-6rem) and tight inside lists (0.5-1.1rem row padding).

## Elevation & Depth

Flat. Depth is conveyed by rule weight and paper tint: ink rules frame, hair rules separate, `paper-2` marks a raised panel (glance box, masthead, hover). Three shadows exist and all are situational: the search dialog floats over a dimmed backdrop, the nav section menus float over content, and AI illustration covers (cut-out isometric objects with no ground) cast a soft drop shadow so they sit on the paper.

### Shadow Vocabulary
- **Dialog lift** (`box-shadow: 0 1.5rem 3rem -1rem oklch(0.2 0.03 200 / 0.35)`): the search dialog only.
- **Menu lift** (`box-shadow: 0 1rem 2rem -1rem oklch(0.2 0.03 200 / 0.3)`): the nav section menus only, because they float over page content.
- **Illustration ground** (`filter: drop-shadow(0 1.25rem 1.5rem oklch(0.2 0.03 200 / 0.12))`): transparent AI illustration covers on item pages only.

### Named Rules
**The Ruled Not Raised Rule.** Containers are bordered, never shadowed. If a surface needs separating, give it an ink or hair rule or a `paper-2` ground.

## Shapes

Square. Frames, buttons, rows, thumbnails, tables, the glance box and the search dialog all have 0 radius; the only rounding is a 2px softening on header tool buttons, inline code and map popups. The neatline is the signature silhouette: a 1px ink border, a 1px hair outline offset 5px, and graticule ticks (1px, every 72px, 7px deep, 55% opacity) along all four inner edges. Circles appear only as map markers and timeline stations. Category identity is a line style, not a colour chip: solid teal (Geospatial AI), dashed terracotta (Digital Transformation), dotted grey (tags).

## Components

### Buttons
Rare and blunt; links do most of the work.
- **Shape:** square (0).
- **Primary:** ink fill, paper text, 650 Archivo 0.9rem, padding 0.75rem 1.1rem.
- **Hover / Focus:** fill and border shift to teal; focus is the global 2px terracotta outline offset 3px.
- **Tool button:** header icon/text buttons, 2.5rem square, transparent until hover (hair border, `paper-2` fill), 1.6-stroke SVG icons.

### Inputs / Fields
- **Style:** the search dialog input is borderless Archivo 1.1rem on paper, separated from results by an ink rule.
- **Focus:** the input's own outline is removed and the form gets a 2px terracotta inset underline.

### Navigation
Condensed collar caps in a band between an ink rule (top) and a hair rule (bottom). Default soft ink, hover ink; the current page is ink with a 2px terracotta inset underline. **Section menus:** hovering or focusing Projects, Geospatial AI or Digital Transformation drops a legend box under the link: a 1px ink border on paper with the menu lift, listing every sheet in that section (mono terracotta sheet number, Archivo title), then an "All in …" link above a hair rule. It opens after a short delay and stays closed on touch. A transparent bridge spans the gap so the pointer can cross into the box, and Escape closes it until pointer or focus leaves. Filters on listings use the same current-state underline with mono counts. Series navigation is an ink-ruled two-cell grid; TOC is a hair-ruled list whose current section gets a terracotta left rule, sticky from 68rem and collapsed into a details element below.

### Sheet Index Row (signature)
Lists are rows, not cards: an ink rule tops the list, hair rules divide rows. Each row: a 4:3 thumbnail (cover, or a slug-seeded contour field when there is no cover), a mono sheet number in index ink (hidden below 46rem), then title (teal on hover), serif summary in soft ink, and a sentence-case collar facet line. Rows linked to the index map get a `paper-2` fade (`lit`) and teal title when their marker is hovered or focused.

### Index Map (signature)
SVG of Indonesia on sea wash, neighbours in paper shade, dashed graticule every 5° with mono degree labels, ink frame, north arrow and 500 km alternating scale bar at bottom left. Project regions are terracotta-hatched 2.5° cells; markers are ink circles with paper numerals that turn terracotta and grow when lit. Hover or focus on a marker or a sheet-list row lights both (list-to-map linked highlight).

### Contour Masthead (signature)
Deterministic contour field seeded from the slug: ordinary lines in `line` at 0.9px and 75% opacity, every fifth level an index contour in terracotta at 1.6px with a haloed elevation label (`n m`) read left to right. Index lines and labels survey in left to right (1.6s clip, reduced-motion respected).

### Map Collar Pieces
- **Collar band:** sheet number and kind left, coordinates/date/counts right, above each frame.
- **Scale bar:** reading time as a 10-segment alternating ink/paper bar, one segment per 2 minutes, unfilled segments hatched.
- **Legend:** line-style swatches linking to categories.
- **Glance box:** ink-bordered `paper-2` panel with a collar title and a ruled definition list, like a map's legend box.
- **Adjoining sheets:** related items as a hair-ruled grid of cells topped by an ink rule.

### AI Illustration Note
Every AI-generated cover carries its provenance on screen: a "AI ILLUSTRATION" collar note at the bottom-left of row thumbnails and a sentence-case caption under item covers. Illustrated thumbnails use `object-fit: contain` with padding so the note never overlaps the image.

## Do's and Don'ts

### Do:
- **Do** put every page's content inside a neatline frame with a collar band above it.
- **Do** use terracotta only for index lines, current state, focus, lit markers and figures (The Index Contour Rule).
- **Do** divide with ink rules for structure and hair rules between peers; use `paper-2` for the rare raised panel.
- **Do** set sheet numbers, coordinates, counts and scale values in JetBrains Mono with tabular numerals.
- **Do** generate a contour field from the slug wherever an item has no real image, rather than a stock or placeholder picture.
- **Do** label every AI illustration as an illustration, on the thumbnail and on the cover.
- **Do** define every new colour in both the light and night-map themes.

### Don't:
- **Don't** lay items out as a card grid with rounded, shadowed cards; lists are ruled sheet-index rows.
- **Don't** round corners beyond 2px or add shadows to containers (The Ruled Not Raised Rule).
- **Don't** set headings or body in uppercase; caps are the collar's voice.
- **Don't** add cartographic furniture that measures nothing: each scale bar, legend, coordinate or sheet number must carry real data.
- **Don't** crop the index map on small screens; keep the full extent and enlarge markers instead.
