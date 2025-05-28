# AGENTS.md

> **Purpose:**  
> Give AI agents (e.g. Codex) and team members a complete map of Metaswap.xyz—its mission, structure, conventions, tech stack, content & SEO strategy, and external inspirations—so they can navigate the repo, generate features, fix bugs, and drive CI/CD.

---

## 1. Company & Brand Overview

- **Metaswap, LLC** is a software-publishing holding company behind:
  - **Metaswap Agency** (undisclosed SaaS products in stealth)
  - **Metaswap.xyz**: the main “holding page” and brand gateway ([metaswap.xyz](https://metaswap.xyz/))
- **Vision:** Showcase our design & development prowess, publish AI-focused blog content, and host clean case studies demonstrating our software-publishing skills.

---

## 2. Website Purpose & Goals

1. **Funnel & Brand Hub:** Minimal landing page that routes visitors to Labs, Instagram, partner sites.
2. **SEO Powerhouse:** Blog for AI thought leadership + structured case studies to drive organic traffic.
3. **Showcase Centerpiece:** Rotating 3D model at top—our signature interactive flourish.

---

## 3. Tech Stack

- **Framework:** Next.js 14 (app directory)
- **Language:** TypeScript + React
- **Styling:** Tailwind CSS + global resets (`globals.css`)
- **3D:** react-three-fiber (+ drei) for WebGL scenes
- **Quality:** ESLint, Prettier; future Jest for unit & integration tests
- **Hosting & CI/CD:** Vercel (preview & production) with GitHub Actions

---

## 4. Information Architecture & Routes

```

/                ← Home with 3D centerpiece
/news            ← Blog index (AI content)
/blog/\[slug]     ← Individual blog posts
/case-studies    ← Case study index
/case-studies/\[id] ← Single case study
/about           ← Company story & team
/investors       ← Investor relations
/careers         ← Job openings
/legal           ← Terms & Conditions
/privacy         ← Privacy Policy

```

---

## 5. Content Strategy & Headless CMS

- **JSON-Driven Content:**
  - `/content/blog/*.json` → `{ slug, title, date, excerpt, body[] }`
  - `/content/case-studies/*.json` → `{ id, title, client, date, summary, images[], details[] }`
- **Dynamic Loading:**
  - SSG for static pages; ISR for blog & case studies
  - Auto-generate `sitemap.xml` & RSS feed from JSON
- **SEO Metadata:**
  - `<Head>` tags per page: title, description, canonical URL, Open Graph, Twitter cards
  - Structured data (JSON-LD) for articles & case studies

---

## 6. UX & Design Principles

1. **Minimalism & Focus:** Ultra-low-contrast gradients, monochrome typography, Kanye-style whitespace.
2. **Intrigue & Exploration:** Encourage users to scroll & click—keep 3D object front-and-center.
3. **Responsive Navigation:**
   - **Desktop:** Top nav links (News, Blog, Case Studies, About, Investors, Careers, Legal, Privacy).
   - **Mobile:** Hamburger → full-screen overlay menu.
4. **Interactive Showcase:** Bottom “product carousel” with hover-reveal on desktop, scrollable cards on mobile.

---

## 7. Code Structure & Key Components

```

/src
└─ app/
├─ layout.tsx           # global Header + Footer
├─ head.tsx             # site metadata & fonts
├─ page.tsx             # home
├─ news/page.tsx        # alias to /blog
├─ blog/\[slug]/page.tsx # dynamic blog posts
├─ case-studies/page.tsx
├─ case-studies/\[id]/page.tsx
├─ about/page.tsx
├─ investors/page.tsx
├─ careers/page.tsx
├─ legal/page.tsx
├─ privacy/page.tsx
├─ components/
│    ├─ Header.tsx
│    ├─ Footer.tsx
│    ├─ three-canvas.tsx
│    └─ 3D/
│         ├─ Scene.tsx
│         └─ MyModel.tsx

```

---

## 8. 3D Centric Feature

- **Rotating Object:**
  - Always render at 100% scale on desktop; 50% scale on mobile if needed.
  - Lighting & reflection map optimized for performance.
- **Keep Logic Intact:** No code changes to animation speed or model—only container sizing when responsive.

---

## 9. CI/CD & Automation

- **Pipeline:**
  1. PR → lint/type-check → build preview (Vercel)
  2. Manual QA → merge → production deploy
- **Automations:**
  - Codex-callable scripts for:
    - Patching dead links
    - Regenerating JSON-LD
    - Updating Tailwind theme variables

---

## 10. Block.xyz Inspiration

- **Nav & Messaging:**
  - Top links: News, Open Source, Careers, Investors, Legal, Privacy ([Block](https://block.xyz/))
  - Center tagline: “block builds technology for economic empowerment” ([Block](https://block.xyz/))
- **Product Row:** Square, Cash App, Tidal, Bitkey, Proto with hover-reveal & mobile scroll ([Block](https://block.xyz/))
- **Full-screen Mobile Menu:** Same items as desktop in vertical list.

---

## 11. Competitor Analysis

- **Vercel (vercel.com):**
  - High-perf Next.js hosting, detailed case studies & blog.
- **Netlify (netlify.com):**
  - Jamstack leader, rich tutorials & community posts.
- **Contentful (contentful.com):**
  - Headless CMS thought leadership & guides.
- **Sanity (sanity.io):**
  - Developer-centric CMS with portable text & community blog.
- **Webflow (webflow.com):**
  - No-code CMS with in-depth showcase & educational videos.

---

## 12. Next Steps / Roadmap

- [ ] Wire up all new routes & JSON-driven loaders
- [ ] Scaffold blog & case-studies pages with sample JSON
- [ ] Implement SEO enhancements: sitemap, RSS, JSON-LD
- [ ] Refine Tailwind theme: ultra-low contrast & hues
- [ ] Add GitHub Actions & Codex scripts for CI/CD automations

> _Maintain this file as the single source of truth for AI agents and the team._
