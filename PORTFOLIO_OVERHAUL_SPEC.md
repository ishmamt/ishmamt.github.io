# Ishmam Tashdeed portfolio website overhaul specification

**Status:** Design and implementation specification  
**Prepared:** 24 November 2026  
**Target:** [ishmamt.github.io](https://ishmamt.github.io/) and its [source repository](https://github.com/ishmamt/ishmamt.github.io)  
**Primary content source:** `C:\Users\Lenovo\Downloads\CV_2025.pdf` (the document itself says “Last updated in April 2026”)  
**Direction:** A clean rebuild: a calm, text-first academic portfolio with a substantial blog called **my thoughts**, restrained Nord-inspired color, and a small amount of purposeful motion. The existing al-folio implementation is a content reference only.
**Visual preview:** `PORTFOLIO_LAYOUT_MOCKUP.html` in Downloads is a standalone, interactive design mockup, not the production website.

## 1. Purpose and priorities

The site should let a first-time visitor understand who Ishmam is, what he studies, what he has published, and how to contact him within the first screen and one short scroll. It should serve prospective collaborators, students, hiring committees, and readers of technical writing. The blog should be substantial enough to stand on its own as a public research notebook.

The governing priorities, in order, are: **clear identity; credible research evidence; easy reading; simple editing; visual polish**. Content density should come from good selection and hierarchy, not from a dashboard of widgets. The site must work as a static GitHub Pages site, and ordinary edits to biography, publications, projects, news, and posts should be made in Markdown or a small, documented data file.

### Required outcomes

1. A home page that opens with a modest "Hi, I'm Ishmam" heading, one unified introduction, portrait, the obfuscated email below the portrait, and direct links ordered **GitHub, Scholar, LinkedIn, CV**. The CV link opens the hosted PDF.
2. Dedicated Research, **my thoughts**, and About pages, with obvious routes back to the home page. There is no Teaching or CV page; the home page CV link opens the PDF directly.
3. An extensive Markdown blog with reliable inline and display LaTeX, code highlighting, citations/footnotes, tables, figures, and long-article navigation.
4. Light and dark modes with consistent semantic colors and a saved user choice.
5. No al-folio templates, styles, scripts, demo content, misleading placeholder links, or invented professional claims in the rebuilt site.

## 2. Reference synthesis

These are design interpretations of the linked sites, not instructions to copy their code or branding.

| Reference | Useful pattern | Application here |
| --- | --- | --- |
| [Wenhao Chai](https://wenhaochai.com/index.html) | Identity and research summary appear immediately; life, blog, and news follow as readable sections. | Put the strongest bio and selected work above secondary material. Use a compact recent-writing list on the home page. |
| [Alexi Gladstone](https://alexiglad.github.io/) | Conversational voice, “what I’m up to,” research highlights, and a visible blog entry point. | Permit a short human aside and a small Now section, but make research claims precise and date each update. |
| [Zhe Zhao](https://sites.google.com/view/zhezhao/) | Very sparse biography with personality in the prose. | Keep the structure sparse, then let the About page show personality through photography, music, and 3D art. |
| [Siqi Zhu](https://zhusq20.github.io/) | Playful line and strong typographic hierarchy within a compact page. | Use one optional, quiet personality detail; avoid a large animated slogan that competes with the research. |
| [Yuen Chen](https://chenyuen0103.github.io/index.html) | Neat profile summary, clear publication rows, and direct CV/contact links. | Use this as a model for publication metadata and scannable research entries. |
| [Chih-Hao Lin](https://chih-hao-lin.github.io/) | Research-first page with links to paper, project, code, and video; publication selection control. | Give each publication a consistent link set and allow selected/all views if the list grows. Limit motion to explanatory diagrams. |
| [Nelson Liu](https://cs.stanford.edu/~nfliu/) | Plain academic page with easy-to-read publication records and optional abstracts/BibTeX. | Keep paper metadata usable without images; optional details may expand in place. |
| [colah's blog](https://colah.github.io/) | Writing organized by topics and depth, including rough notes. | Treat **my thoughts** as a curated library, with topics, series, and a distinction between polished essays and research notes. |

The local `example.html` contributes a useful prototype: narrow centered column, Nord-derived dark and light tokens, small uppercase section labels, date/title rows, searchable blog list, project detail reveal, reading progress, and reduced-motion intent. It contains sample posts, placeholder projects, a mock math formula, and links marked `#`; those are examples of interface behavior, not content to publish. The supplied prototype is a visual reference only. The new layout mockup makes the proposed design tangible; it is not source code to drop into the live site unchanged.

## 3. Current site audit and migration decisions

The repository is currently an al-folio Jekyll site. The implementation direction is a **fresh, minimal static Jekyll build in this repository**, with new layouts, CSS, and only the plugins needed for the final pages. Retain the repository URL, GitHub Pages publishing, verified personal content, useful owned images, and stable public links. Replace the al-folio configuration, Liquid includes/layouts, SCSS system, JavaScript bundle, demo collections, and feature-specific dependencies. Do not preserve a feature merely because al-folio already provides it. If a clean Jekyll build cannot satisfy a requirement cleanly, evaluate another static generator before bringing back theme code.

The live home page currently presents a short lecturer bio, portrait, email, and two selected publications. The local bibliography contains those same two entries. The supplied CV contains **four** publication entries, so it is the better starting inventory. The publication page is currently `/research/`; the CV page points at `/assets/pdf/cv.pdf`. The blog title and description still say `al-folio` and “a simple whitespace theme for academics.” Existing posts are theme feature demos dated 2015–2024, project files are demos, and `_data/cv.yml` is commented example content. These files and their supporting UI should be excluded from the new site rather than adapted one by one.

The CV and current site are not fully synchronized. The CV's first entry says ICPR, while its arXiv version is a 2025 preprint; confirm the conference citation, year, and final paper URL before publication. The CV describes ongoing projects as of April 2026; retain “ongoing” only after checking their current status. Use the actual CV update date in the download label. Keep existing public URLs where feasible and add redirects if paths change. Do not reuse the old demo content as real posts or projects.

## 4. Site map and navigation

| Route | Page purpose | Primary content |
| --- | --- | --- |
| `/` | Fast introduction and orientation | Compact hero, portrait and email, selected research, recent thoughts |
| `/research/` | Research record | Publications and research work, with a Scholar link near the title |
| `/blog` | **my thoughts** index | Intro, search, topic filters, chronological posts, series |
| `/blog/:year/:slug/` | Article | Full Markdown article and reading tools |
| `/about/` | Experimental personal page | Short freeform introduction, photography, music recommendations, and 3D art profile |
| `/assets/pdf/cv.pdf` | Hosted CV PDF | Opens directly from the home page; replace the file as the CV changes |
| `/404/` | Recovery | Helpful message plus home/research/blog links |

Header navigation on desktop: a small **U+130E0 Egyptian cat glyph** followed by **Ishmam Tashdeed** at left; **research, my thoughts, about** at right; theme control beside the links. The glyph replaces the earlier asterisk and is decorative, so the accessible link name remains Ishmam Tashdeed. Use a font fallback that contains the glyph; keep all adjacent text in Space Mono. The user-facing blog route is **`/blog`**. If GitHub Pages normalizes the generated page to `/blog/`, both forms must resolve to the same index without a second blog location. Use `/blog/:year/:slug/` for posts. On small screens, keep a simple two-row header or accessible disclosure menu. The CV link appears with the home page's other direct links and opens `/assets/pdf/cv.pdf`. If any old article URLs are worth preserving, redirect them individually. There is no Teaching or CV page in the new navigation.

### Design mockup and screen composition

Open `PORTFOLIO_LAYOUT_MOCKUP.html` from Downloads in a browser to inspect the proposed desktop and mobile layout. Its navigation switches between home, research, **my thoughts**, a sample article, and About; the theme toggle and sample post filters also work. The home page CV link opens the PDF in the same Downloads folder as a stand-in for the future hosted file. The mockup is deliberately standalone, so it can be reviewed without rebuilding the current site. Its research examples come from the supplied CV, while its article titles and body are visibly labeled samples. The abstract `it.` monogram marks where an authentic portrait could go.

The home composition is **compact header → one-piece introduction beside a portrait and obfuscated email → selected research rows → recent thoughts → small footer**. Section headings have no numbers. The research page uses a plain publication ledger with year/status in a narrow left column and the substance on the right; a Scholar link below the page title points to the most current full list. The blog starts with a clean title and brief description, followed immediately by search, topic filters, and quiet chronological entries. There is no separate featured sample card above search. The article uses a narrower reading measure, a small table of contents, and space for math and code. About is deliberately looser: photography placeholders, an album recommendation slot, and a 3D art profile link. On phones, all columns collapse to one and the portrait/email follow the introduction.

## 5. Page specifications

### Home page

**First viewport, desktop:** show a smaller H1 reading **“Hi, I'm Ishmam”** without a period. Do not put a tagline or decorative label above it. Below the H1, use one continuous paragraph that names the current role and institution and describes the research focus. Avoid a separate slogan plus biography. Put direct links below the paragraph in this exact order: **GitHub** (`https://github.com/ishmamt`), **Scholar**, **LinkedIn** (`https://bd.linkedin.com/in/ishmam-tashdeed`), **CV** (hosted PDF). A portrait sits to the right on desktop and below the introduction on phones; immediately under it, display the exact obfuscated address **`ishmamtashdeed[at]iut-dhaka[dot]edu`** in the link/highlight color at a legible **13 px Space Mono bold** starting size. Allow it to wrap cleanly rather than shrinking it. The obfuscated address can also be a mailto link if the visible text stays in that format. The portrait must not crowd the copy or disappear on mobile.

**Below the fold:** (1) selected research, three or four entries; (2) recent thoughts, up to three latest real posts with dates and one-line descriptions. End with a compact footer. There is no “a little context,” News, or Now section on the home page. Avoid a skills cloud and large hero artwork. Use publication summaries that state the problem and contribution in one or two sentences. If recent thoughts is empty, show a small, warm line such as **“Cricket sounds... it's empty out here.”** Empty photography, music, or art sections may use similarly short, distinct jokes, but must still say what content belongs there. Do not show a giant empty card or fabricate posts. The first home page load must contain useful content even when JavaScript is unavailable.

### Research page

Start with the clean **Research** title, without a pre-title label. Place a visible Google Scholar link directly below it, with short wording that the Scholar profile has the latest publication list. The page itself contains research work and publications sorted newest first; omit the separate “Current questions” section and unpublished project-direction rows. Each record needs title, exact author order, venue/status, year, two-sentence plain-language summary, and available links: paper, code, project page, BibTeX. Mark equal contribution precisely. An optional thumbnail or diagram is secondary to the text and must carry alt text or a caption.

Use a clear distinction between peer-reviewed publication, preprint, and ongoing project. Selected/all filters can be client-side enhancement but the full list remains in the HTML. If publication abstracts expand, the control must be a real button with `aria-expanded`, keyboard support, and no layout jump that loses reading position.

Published or publicly released research projects may appear among the research records when they have a useful artifact. Do not add a separate section for speculative or ongoing questions. Do not present ongoing work as accepted papers.

### My thoughts index at `/blog`

The navigation label is **my thoughts**. The H1 uses the same title style as the other interior pages: **My Thoughts**, without a decorative period or pre-title label. A short paragraph below it can say what the blog covers: research notes, careful explanations, experiments, and tools. The search field follows that introduction directly. Topic filters and a chronological, text-first list come next; there is no featured post card above search. Each row includes title, publish date, short description, topic, and approximate reading time. Topics should be a small controlled vocabulary such as **Multimodal**, **LLMs**, **Robustness**, **Math**, **Tools**, and **Notes**; avoid a one-off tag for every post.

Provide a visible search field that searches title, description, tags, and optionally headings in a generated static index. Search and topic filters should combine. Show a useful empty state and clear-filter action. Keyboard focus must remain predictable when results change. Pagination or year grouping should prevent a very long initial index. Expose an RSS/Atom feed. If there are no authentic posts at launch, show a short honest introduction and an empty-state message; never publish theme demos as authored articles.

### Article page

Use a 650–740 px prose column with a wider figure breakout only when useful. The article header includes title, date, updated date when changed materially, description, topic, reading time, and optional series position. Support H2–H4 headings with stable anchors, inline `$...$` and display `$$...$$` math, fenced code with language labels, tables, blockquotes, numbered citations or footnotes, figures with captions, callouts, and downloadable artifacts. The article body should remain readable in both themes, including math and syntax colors.

For long articles, include an “On this page” table of contents after the introduction or in a desktop side rail. On mobile it should collapse naturally into document flow. Provide previous/next article and related posts by explicit series or shared topic. Reading progress is optional, thin, and must not obscure content. Copy-code buttons are optional enhancements; visible code and math must work without them. Use actual rendered math, not the prototype's visual formula mockup.

### About page and direct CV PDF

About is the most experimental page. Open with a clean **About** title and a short, human introduction or observation; do not repeat the home page's job description. Give the page room to be quirky without turning it into a novelty interface. Include three owner-editable sections: **Photography**, with a responsive gallery and placeholder frames until real photos are supplied; **On repeat**, for a song or album recommendation with artwork, artist, a short personal note, and an optional listening link; and **3D art**, with a short description, preview image or placeholder, and a prominent link to the owner's [ArtStation profile](https://sed_cat.artstation.com/). Each section should be editable through Markdown and image files. Add concise, playful empty states where real material is missing. Keep image captions, alt text, music credits, and outbound-link labels clear. The CV remains a hosted PDF at `/assets/pdf/cv.pdf`; no web CV page or Teaching page is required.

## 6. Verified content inventory and editorial treatment

The items below come from the supplied CV unless another source is linked. The PDF header gives April 2026 as its update date. Treat status words such as “ongoing” and “present” as **last confirmed in that PDF**, not as automatically current in November 2026.

| Content | Source facts to use | Display guidance |
| --- | --- | --- |
| Identity | Ishmam Tashdeed; Lecturer, Department of Computer Science and Engineering, Islamic University of Technology; email `ishmamtashdeed@iut-dhaka.edu`. | Lead the home page; show the address in obfuscated form beneath the portrait. The existing live page also names NDAG-Lab; confirm current association before prominent use. |
| Interests | Multimodal learning, robustness evaluation, decentralized learning, hallucination prevention in LLMs. | Use a short sentence, not four disconnected badges. |
| Education | IUT, B.Sc. in CSE, Jan 2019–May 2023; GPA 3.97/4.0, rank 3/99; thesis on visual robustness in zero-shot VQA. | Keep the formal education details in the PDF CV. About may mention the thesis only if it fits the personal story. |
| Teaching | Lecturer at IUT since Aug 2023 as of the CV; courses: AI (Summer 2025), Linear Algebra (Winter 2024 and 2025), Introduction to Programming (Winter 2023). | Retain these details in the PDF CV. The About page need not recap them. Confirm current appointment and advising counts. |
| Experience | Aamra Networks Limited, R&D intern, Oct 2021–Dec 2022; license plate reading, facial recognition attendance, customer-service automation. | Retain in the PDF CV; respect proprietary dataset boundaries if mentioned elsewhere. |
| Awards | IUT Research Seed Grant (2022); OIC Scholarship (2019). | Retain in the PDF CV with the source wording. |

### Publications to migrate

1. **Personalized Federated Segmentation with Shared Feature Aggregation and Boundary-Focused Calibration.** CV lists Ishmam Tashdeed and Md. Atiqur Rahman as equal contributors, with Sabrina Islam and Md. Azam Hossain, and labels the venue ICPR. The [arXiv record](https://arxiv.org/abs/2511.18847) identifies the preprint and authors. Verify final ICPR citation and links before using a conference badge.
2. **Chunk-and-Fuse: Progressive Code Integration for Abstractive Bug Report Summarization.** CV lists Shaira Sadia Karim, Abrar Mahmud Rahim, and Lamia Alam as equal contributors, followed by Ishmam and collaborators; status is arXiv preprint in the CV. Verify the exact public paper/code URLs and final status.
3. **Visual Robustness Benchmark for Visual Question Answering (VQA).** CV labels it WACV; the current site lists it as a [2024 arXiv preprint](https://arxiv.org/abs/2407.03386). Reconcile the final venue/year and author spelling before replacing the current bibliography entry.
4. **Enhancing Zero-Shot Crypto Sentiment With Fine-Tuned Language Model and Prompt Engineering.** [IEEE Access record](https://doi.org/10.1109/ACCESS.2024.3350638), 2024, already present in the repository bibliography. Preserve DOI and full author order.

### Research and software projects in the CV inventory

- **AI-generated video detection:** a 2,000+ video dataset and forensic evaluation approach as described in the CV. Publish only cleared examples and dataset details.
- **Opinion distributions in subjective product question answering:** aspect/sentiment extraction from reviews and evaluation of LLM summaries.
- **Hallucination mitigation in compressed chain of thought:** investigation and method development as described in the CV.
- **Epistemic gain in LLM knowledge discovery:** stochastic block model world generator and evaluation metric.
- **VeloTrack:** vehicle speed analysis from CCTV with object detection and tracking.
- **ML Algorithm Visualizer:** animations of several classical machine-learning algorithms.

The first four were marked ongoing in April 2026. Keep them in the editorial inventory, but do not show an ongoing-questions section on the Research page. A project may be published later as a research record when its status and public artifact are verified. If public work is not yet available, omit dead `#` links. The GitHub profile is [github.com/ishmamt](https://github.com/ishmamt); match software links to actual repositories before publishing them. The current pinned GitHub repositories do not, by themselves, establish that they correspond to the CV projects.

## 7. Visual design system

### Layout and rhythm

- Main container: about **800–860 px** for the home/research pages; article prose **650–740 px**. Preserve 24 px side padding on medium screens and 16–20 px on phones.
- Use a single column for most content. A portrait may form a two-column introduction at widths above roughly 800 px. Project entries remain text-first rows; use cards only where a visual preview adds information.
- Vertical rhythm: 8 px base unit; around 16–24 px within a record, 40–56 px between sections, and 72–96 px of top breathing room on desktop. Rules are light and sparse.
- Avoid fixed footer and scrollable news boxes. The footer follows the content. Sticky header is acceptable only if it stays compact and does not cover headings.

### Typography

Use **Space Mono site-wide**: headings, body text, navigation, metadata, captions, controls, and code. Do not introduce a second proportional body face. Self-host the regular and bold font files in the production site and include `monospace` as a fallback. Because monospace text occupies more width, keep body copy around 15–16 px with a generous 1.7–1.85 line height, and use a narrower reading measure of roughly 55–65 characters for long posts. Check several real articles on mobile before locking the scale.

Suggested scale: home H1 36–48 px desktop / 32–38 px mobile; interior H1 38–50 px; H2 21–25 px; H3 17–20 px; body 15–16 px at 1.7–1.85 line height; metadata 11–13 px. Use weight and spacing before uppercase. Never use tiny all-caps text for a paragraph. All page titles follow the same title case style except the conversational home title, which reads exactly “Hi, I'm Ishmam”.

### Color tokens

Use semantic tokens so every component reads from the same palette. These are starting values, drawn from the local prototype's Nord-inspired scheme; contrast testing may adjust them.

| Token | Dark | Light | Use |
| --- | --- | --- | --- |
| `--page` | `#2E3440` | `#ECEFF4` | Main background |
| `--surface` | `#3B4252` | `#F7F9FB` | Quiet panels, code backgrounds |
| `--text` | `#ECEFF4` | `#2E3440` | Body and headings |
| `--muted` | `#B8C3D5` | `#4C566A` | Dates and supporting text |
| `--border` | `#5A6578` | `#C7D0DD` | Dividers and controls |
| `--link` | `#88C0D0` | `#315C82` | Links and focus-related accents |
| `--accent` | `#D08770` | `#9A4028` | Small highlight and progress |
| `--success` | `#A3BE8C` | `#436B2F` | Occasional status, never meaning alone |

Do not use every Nord color on every screen. The base is neutral slate and snow; cyan is for links; coral marks a few focal details. Publication status or topic tags should have text labels and not rely only on color. Links must be identifiable without hover. Test all normal, hover, focus, visited, code, and math states for adequate contrast.

### Illustration and motion

Use authentic diagrams or figures from research where they explain the work. A small line animation can show a research process or project mechanism, inspired by the Chih-Hao Lin reference, but it must have a static first frame and a text explanation. No auto-playing hero slideshow, continuous typing animation, parallax, or motion required for navigation. Hover changes should be subtle (color/underline and at most a short translation). Honor `prefers-reduced-motion: reduce`; avoid layout shift. The playful note from Siqi Zhu can appear as one sentence or small footer line rather than a dominant visual motif.

## 8. Interactions and accessibility

- Theme control: visible label or clear accessible name; defaults to system preference, persists a manual choice, and avoids a flash of the wrong theme. The control updates `aria-pressed` or equivalent state.
- Search: usable without a mouse, announced result count, clear reset. If JavaScript is disabled, the chronological archive remains available.
- Menus and disclosure panels: semantic links/buttons, visible keyboard focus, Escape support where relevant, and logical tab order.
- Images: meaningful alt text; decorative graphics use empty alt or are hidden from assistive technology. Every research figure has a caption with enough context to understand it.
- Math: check rendered output with a screen reader or provide adjacent textual description for central equations. Equations must scroll horizontally on narrow screens without pushing the page width.
- Article landmarks: one H1, ordered headings, skip-to-content link, visible anchor targets, and a table of contents that points to stable IDs.
- Touch targets: around 44 px where controls are isolated; no tiny icon-only links. Focus states need a distinct outline in both themes.
- Hide the visual **page** scrollbar in both themes and on all routes, while preserving wheel, touch, keyboard, and programmatic scrolling. Overflowing code or equations must remain horizontally scrollable. The footer's **back to top** control scrolls the current page/view to its top without changing the route or returning to Home.

## 9. Content model and editing workflow

Keep **Markdown as the owner-facing source of truth** for page bodies, posts, and project write-ups. Use YAML front matter only for structured metadata. Store publication records in a small, documented data file or Markdown collection; import verified facts from the existing BibTeX, but do not retain the al-folio bibliography renderer solely for compatibility. If BibTeX export is needed, generate it from the same publication records or keep a reviewed `.bib` file as a download. The home page should query `selected: true` research entries and the three latest posts by date rather than duplicate content. A short biography can be a single Markdown include or data entry if it appears in multiple places.

Recommended post fields: `title`, `date`, `updated` (optional), `description`, `tags`, `series` (optional), `cover` (optional), and `math` (boolean only if conditional loading is used). Recommended project fields: `title`, `status`, `updated`, `summary`, `topics`, `links`, `selected`, and `image` (optional). Publication fields must include title, authors, year, venue/status, DOI/arXiv/paper/code URLs as available, `selected`, and optional summary/preview. Require a short description for every post so lists and social previews are useful.

Keep a short repository guide with concrete tasks: add a post, add a publication, add a project, update the home bio, replace the CV, and preview locally. The workflow should be: edit Markdown or the relevant record; run the local Jekyll build; review rendered pages; commit and deploy. Changes to ordinary text must never require changing JavaScript or CSS. Add a lightweight content check for placeholder text, empty `href="#"`, missing dates/descriptions, duplicate slugs, and broken internal links.

## 10. Technical implementation plan

1. **Clean rebuild:** create a fresh minimal Jekyll structure in a separate branch or worktree, then replace the published tree once the new site is complete. Carry over only reviewed content, owned assets, domain/deployment configuration, and redirects. Remove al-folio theme files and unused dependencies from the final tree.
2. **Content migration:** enter the four CV publications after reconciling citations; add verified research projects; prepare a current CV PDF; move genuine personal writing into Markdown posts. Exclude all theme demo posts, projects, example news, external feeds, and Einstein samples.
3. **New templates:** build header, home, research list, **my thoughts** index, article, experimental About, footer, and 404 layouts from scratch. The home page links straight to the hosted CV PDF. No CV or Teaching page.
4. **Small design system:** use one semantic CSS token set for light/dark themes and a few reusable components. Avoid importing Bootstrap, the al-folio SCSS stack, icon bundles, chart libraries, and other unused features.
5. **Progressive enhancements:** add only small scripts for theme persistence, search/filter, disclosure, and optional progress. Core links, publications, articles, and math remain statically rendered.
6. **Metadata:** enable descriptive page titles, canonical URLs, Open Graph image, feed, sitemap, and structured author/article metadata where appropriate. Use a real portrait or simple branded card for social sharing.
7. **Preserve links:** keep `/research/` and make `/blog` the intended blog entry path, with `/blog/` resolving to the same page if the host adds a slash. Redirect individual legacy post URLs when needed. Verify `/assets/pdf/cv.pdf` or replace it with a stable redirect to the current PDF.

### Performance targets

Target a readable initial page with no JavaScript dependency. Self-host or carefully load font subsets with fallback and `font-display: swap`. Reserve image dimensions, use optimized responsive images, and lazy-load noncritical figures. Keep the final CSS and JavaScript small because the new site has no theme feature bundle. Use Lighthouse and real-device checks as diagnostics; aim for Core Web Vitals in the “good” range rather than a cosmetic score alone.

## 11. Acceptance criteria

- At 390 px phone width and at common desktop widths, the smaller home title, one-piece introduction, portrait, and obfuscated email are easy to find; no horizontal page overflow occurs.
- The four verified publication records appear with correct author order, status, and working links; selected entries on the home page match the research page.
- A newly added Markdown article can render inline/display LaTeX, a language-labeled code block, figure/caption, footnote, and table in both themes.
- Search and topic filtering work by keyboard; with JavaScript off, every article remains reachable from the archive.
- Theme preference survives reload; system preference works before a manual choice; all text and controls remain legible in both modes.
- No al-folio templates, styles, scripts, packages, sample posts, sample projects, lorem ipsum, mock papers, stale dates, or `#` placeholders appear in the final site.
- The header label is **my thoughts**, its user-facing route is `/blog`, posts live under `/blog/`, and there is no CV or Teaching page. The home CV link opens the hosted PDF directly.
- Space Mono renders throughout the site. Interior page titles follow one consistent title case style, and none has a decorative pre-title label. Home section headings have no numbers.
- The header uses the U+130E0 cat glyph instead of the asterisk; the email beneath the portrait is larger and uses the link/highlight color in both themes.
- The Research page has a Scholar link below its title and no “Current questions” section. The home page has no “a little context” section.
- Home links appear in the order GitHub, Scholar, LinkedIn, CV. The blog search follows the page introduction with no featured card above it.
- Page scrollbars are visually hidden while scrolling still works. “Back to top” preserves the current route/view.
- About has editable photography, music recommendation, and 3D art sections with useful empty states.
- Internal links, CV download, RSS, metadata, and 404 recovery work after deployment. Existing public URLs either resolve or redirect.
- A content editor can update biography, add a post, add a project, or replace the CV using documented Markdown/data steps without touching site logic.

## 12. Decisions to resolve before content freeze

1. Confirm the latest CV and whether its April 2026 facts still describe current role, projects, advising, and contact details.
2. Confirm the final bibliographic data and public links for the ICPR, WACV, and Chunk-and-Fuse entries; the repository currently shows only two older bibliography records.
3. Choose an authentic portrait and supply photography, music recommendations, and 3D art previews when available. The [GitHub profile](https://github.com/ishmamt) links to the [ArtStation profile](https://sed_cat.artstation.com/); verify that this is the preferred public art destination.
4. Decide which research projects can have public detail pages and whether the video-detection dataset has any release restrictions.
5. Supply the first genuine posts or explicitly launch **my thoughts** with a clear empty state.

## Source notes

Local files reviewed: `basics.txt`, `example.html`, `CV_2025.pdf`, `_config.yml`, `_pages/about.md`, `_pages/blog.md`, `_pages/publications.md`, `_pages/projects.md`, `_pages/cv.md`, `_bibliography/papers.bib`, `_data/cv.yml`, and representative demo project/news files in the repository. The live site, GitHub profile/repository, and all eight inspiration websites linked in `basics.txt` were reviewed. The visual recommendations above are a synthesis of their structure and the supplied HTML example; exact colors are proposed tokens, not claims about the linked sites' CSS.
