Build Next.js websited for the best:
LCP
Largest contenful Paint
FID
First Input Delay

- User webworkers & Part town
  -Lazy loading
  -Quick - instant interactviity
  CLS
  Cumulative Layout Shift
- Set dimentions for all images proerply

# CODEX_NAV_LINKS_REQUEST.md

> **Goal:**  
> Wire up all top‐nav links to real Next.js pages, add a JSON-driven blog section with dynamic slug routes, ensure desktop & mobile menus work correctly, and build for optimal Web Vitals (LCP, FID, CLS).

---

## 1. Create Pages & Routes

- **Static pages:**
  - `/news` → `src/app/news/page.tsx`
  - `/about` → `src/app/about/page.tsx`
  - `/investors` → `src/app/investors/page.tsx`
  - `/careers` → `src/app/careers/page.tsx`
  - `/legal` → `src/app/legal/page.tsx`
  - `/privacy` → `src/app/privacy/page.tsx`
- **Blog section:**
  - **Index:** `/blog` → `src/app/blog/page.tsx`
  - **Dynamic posts:** `/blog/[slug_title]` → `src/app/blog/[slug_title]/page.tsx`
- Each page should render a placeholder `<h1>` (title) and set a `<Head><title>`.

---

## 2. JSON-Driven CMS Folder

- Create a folder at `content/blog/` containing one JSON per post:  
   content/blog/
  ├─ first-project.json
  ├─ second-project.json
  └─ … - JSON schema for each:
  ```json
  {
  "slug": "first-project",
  "title": "My First Project",
  "date": "2025-05-30",
  "excerpt": "A quick intro…",
  "body": [
  "Paragraph 1…",
  "Paragraph 2…"
  ]
  }
  In src/app/blog/page.tsx, read all JSON files to build a list of posts (title, date, excerpt, link).
  ```

In src/app/blog/[slug_title]/page.tsx, use generateStaticParams() to list slugs, then fetch corresponding JSON to populate the post page. 3. Yeezy-Style Blog Design
Minimal & Bold: black & white palette, large headings, generous whitespace.

Typography: oversized sans-serif headlines, tight line heights for body text.

Layout:

Index: grid of cards with hover lift & subtle shadow

Post: left-aligned content, full-width images, clear “back to blog” link

3D Integration: omit the rotating centerpiece on blog pages for speed.

4. Update Header.tsx
   Replace <a> tags with import Link from 'next/link'.

Point each link to its route, including /blog.

Use usePathname() to apply an “active” style on the current link.

5. Mobile Menu
   Ensure the hamburger toggles a full-screen <nav> overlay with all links (including Blog).

Style links vertically and close overlay on click.

6. Routing & Routing Check
   Verify client-side transitions (no full reload).

Ensure no “404” on refresh.

Confirm <Head> titles are unique & descriptive.

7. Performance & Web Vitals
   Largest Contentful Paint (LCP)
   Preload hero fonts & any above-the-fold images.

Use Next/Image with priority + explicit width/height.

Inline critical CSS for header/nav.

First Input Delay (FID)
Defer non-critical scripts via next/script (strategy="lazyOnload").

Offload third-party scripts (analytics) to Web Workers using Partytown.

Lazy-load heavy components (3D canvas) with next/dynamic({ ssr: false }).

Cumulative Layout Shift (CLS)
Always set width & height on <Image>/<img>.

Use CSS aspect-ratio for embeds & videos.

Reserve space for dynamic content with placeholders or skeletons.

Lazy Loading & Instant Interactivity
Lazy-load offscreen images & iframes.

Show skeleton screens for blog lists & posts.

Prioritize hydration of nav & blog index.

Do not alter the 3D centerpiece logic on /; only update navigation, blog routes, design, and performance optimizations.

_Never put api keys in the body paramaters of requests on n8n_

Workflows I needto run my agency :

Automated Outreach:
->Scrape Business Pages
->Webscrape Real Estate Agents
->Websra

Automated Marketing Worrkflows
-> TikTok Content Producing Bot
->TikTok Engagement Bot
->Instagram Engagement Bot
-> Google, Facebook, TT, IG Ads

Automated Software development workdlows:
-> Codex
->Github Actions
->Metaswap CRM for tools management.

---

How will users be able to quickly integrate into a workflow and wha twill the UX be like?? ->

- Have a breakdown of all automations availble in a format that matches exactly like n8n demonstrates them. title, image, short description, > details page> Ability to add integration to aresnal, ability to use it and make a copy of the running cron job..

- User Chooses one of the available automations, setup UI asks for them to connect any credentials needed.

- ***
