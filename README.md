# RemoteRecruit — Home Page

A pixel-faithful, fully responsive recreation of the **RemoteRecruit** marketing
home page, built from the provided Figma design. Built with React + Vite and
styled entirely with Tailwind CSS, using a reusable component-based
architecture, scroll-reveal animations, and accessibility/performance best
practices.

> Live demo: _add your deployed URL here (Vercel / Netlify)_

---

## ✨ Features

- **Fully responsive** — desktop, tablet and mobile layouts (mobile-first
  Tailwind breakpoints, collapsible mobile nav).
- **Component-based architecture** — small reusable primitives
  (`Button`, `Badge`, `Container`, `SectionReveal`, `LazyImage`, `Logo`) compose
  every section.
- **Scroll-reveal animations** — fade + slide-up on section enter via a tiny
  `IntersectionObserver` hook (`useInView`) — no animation library, so the
  bundle stays small. Respects `prefers-reduced-motion`.
- **Interactive states** — hover/transition effects on every button, link and
  card; an accessible FAQ **accordion**; a sticky navbar that solidifies on
  scroll.
- **Scroll-to-top button** — appears after scrolling and smoothly returns to top.
- **Lazy-loaded images** — `LazyImage` uses native `loading="lazy"` + async
  decoding with a fade-in and skeleton placeholder.
- **Accessibility** — semantic landmarks, skip link, focus-visible rings,
  labelled controls, `aria-expanded`/`aria-controls` on the accordion, and a
  `<noscript>` fallback so content is never hidden without JS.
- **Mock data** — FAQ and pricing content live in `src/data/` as plain modules.

## 🧱 Tech Stack

| Concern        | Choice                                   |
| -------------- | ---------------------------------------- |
| Framework      | React 18 (meets the “v17 or above” req)  |
| Build tool     | Vite 5                                   |
| Styling        | Tailwind CSS 3 + PostCSS + Autoprefixer  |
| Fonts          | Poppins (Google Fonts, `display=swap`)   |
| Icons / art    | Inline SVG + CSS-recreated UI mockups    |
| Animations     | IntersectionObserver + CSS transitions   |

## 🚀 Getting Started

**Prerequisites:** Node.js ≥ 18 and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Production build → ./dist
npm run build

# 4. Preview the production build locally (http://localhost:4173)
npm run preview
```

## 📁 Project Structure

```
src/
├── App.jsx                 # Page composition (skip link → nav → sections → footer)
├── main.jsx                # React entry
├── index.css               # Tailwind layers + reveal/focus utilities
├── data/                   # Mock content (faq.js, pricing.js)
├── hooks/
│   └── useInView.js        # IntersectionObserver scroll-reveal hook
└── components/
    ├── ui/                 # Reusable primitives (Button, Badge, Container,
    │                       #   SectionReveal, LazyImage, Logo, ScrollToTop, icons)
    ├── layout/             # Navbar, Footer
    ├── sections/           # Hero, GlobalReach, FeeFree, ShowcaseTalents,
    │                       #   HelpCTA, CommonQuestions, Pricing, FeatureRow
    └── mockups/            # CSS-recreated dashboard / membership / profile cards
```

## 🌐 Deployment

The app is a static Vite build, deployable to any static host.

**Vercel** — auto-detected, or use the included `vercel.json`.
Build command `npm run build`, output directory `dist`.

**Netlify** — uses the included `netlify.toml`
(build `npm run build`, publish `dist`).

```bash
# Vercel
npm i -g vercel && vercel

# Netlify
npm i -g netlify-cli && netlify deploy --prod
```

## ⚡ Performance & Accessibility

- Single small JS chunk (~55 KB gzip incl. React), one CSS file (~6 KB gzip).
- Fonts preconnected and loaded with `display=swap` to avoid blocking render.
- Images carry explicit dimensions + `loading="lazy"` to minimise CLS.
- Passive scroll listeners; `prefers-reduced-motion` honoured.
- Targeting Lighthouse ≥ 90 for both Performance and Accessibility.

## 📝 Known Issues / Limitations

- **Design-access constraint:** only **view** access to Figma was provided and
  no design-token/API export was available, so the raster dashboard
  illustrations are **recreated with HTML/CSS** rather than exported as images,
  and colors/spacing are sampled visually. They’re a close approximation, not a
  byte-identical export.
- **Avatars** are lightweight locally-generated SVG placeholders (initials on a
  gradient) so the deploy is self-contained and fast.
- Navigation links, social links and CTA buttons are **non-functional anchors**
  (`#`) — this is a single marketing page with no backend or routing.
- FAQ content is **placeholder** (lorem-style) text, matching the design.

## 📜 Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start Vite dev server with HMR       |
| `npm run build`   | Production build to `dist/`          |
| `npm run preview` | Serve the production build locally   |
