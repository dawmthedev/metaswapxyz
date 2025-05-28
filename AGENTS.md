# AGENTS.md

> **Purpose:**
> Provide AI agents and collaborators with a concise map of the Metaswap.xyz codebase—routes, components and goals—so automation scripts can reliably extend the project.

---

## 1. Company & Brand Overview

- **Metaswap, LLC** publishes software and experiments with web infrastructure.
- **Metaswap.xyz** is a minimal landing site showcasing a 3D interactive experience and brand links.

---

## 2. Website Goals

1. **3D Showcase:** Keep the rotating object center stage.
2. **Minimal Navigation:** Only essential links (About, Instagram, Labs) with clean layout.
3. **Future SEO Content:** Blog and case studies are planned but not yet implemented.

---

## 3. Tech Stack

- **Framework:** Next.js 14 using the `app` directory.
- **Language:** TypeScript + React.
- **Styling:** Tailwind CSS with global styles in `globals.css`.
- **3D:** `@react-three/fiber`, `@react-three/drei` and `@splinetool/react-spline`.
- **Linting:** ESLint via `eslint.config.mjs`.
- **Deployment:** Vercel.

---

## 4. Directory Overview

```
/src
└─ app/
   ├─ layout.tsx          # global layout
   ├─ head.tsx            # meta tags
   ├─ page.tsx            # home page
   ├─ about/page.tsx      # simple about page
   ├─ three-canvas.tsx    # R3F Canvas wrapper
   ├─ splash-screen.tsx   # initial logo animation
   ├─ components/
   │   ├─ Header.tsx
   │   ├─ Footer.tsx
   │   └─ 3D/
   │       ├─ Scene.tsx
   │       └─ MyModel.tsx
   └─ globals.css
```

No `/blog` or `/case-studies` directories exist yet.

---

## 5. Current Routes

- `/` – Home with 3D canvas.
- `/about` – Company overview.

All other routes listed in older docs are still TODO.

---

## 6. UX Principles

- **Minimalism:** Large whitespace and simple gradients.
- **Centered 3D Canvas:** Fills viewport; header and footer overlay.
- **Responsive:** Components use Tailwind classes for mobile and desktop.

---

## 7. 3D Canvas

`three-canvas.tsx` mounts a `Canvas` with an environment preset and the custom `Scene`. `Scene.tsx` controls a rotating icosahedron with particles and responsive scaling.

---

## 8. CI/CD

- Deploys on Vercel.
- Future GitHub Actions should lint and build previews before merge.

---

## 9. Roadmap

- Add dynamic Blog and Case Study sections using JSON content files.
- Generate sitemap and RSS for SEO.
- Automate linting and preview builds via GitHub Actions.

> _Keep this file up to date as the project evolves._
