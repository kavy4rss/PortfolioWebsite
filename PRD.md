# Product Requirements Document (PRD)
## Kavy Agrawal — Personal Portfolio Website (React.js)

**Version:** 1.0
**Prepared for:** Kavy Agrawal
**Prepared by:** Senior React Developer & Web Designer (Claude)
**Source reference:** https://kavyagrawal.netlify.app/ (existing portfolio — content audit below)
**Date:** July 16, 2026

---

## 1. Executive Summary

Rebuild and elevate Kavy Agrawal's personal portfolio into a premium, modern, animation-rich React.js single-page application (SPA) that positions him as a top-tier Full Stack / SaaS / App Developer. The new site must feel expensive, fast, and alive — cinematic page transitions, purposeful 3D moments, scroll-triggered storytelling — while staying genuinely fast, accessible, and discoverable by both traditional search engines **and** AI answer engines (ChatGPT, Claude, Gemini, Perplexity).

**Note on source content:** The existing site (kavyagrawal.netlify.app) is a JavaScript-rendered SPA. Automated extraction could only retrieve the static `<head>` metadata (title, description, keywords, OG/Twitter tags) — the actual rendered About/Projects/Education/Interests copy is not accessible to crawlers without JS execution, which is itself a finding worth fixing in the rebuild (see §9.2 — SSR/prerendering for SEO). Sections below marked **[CONTENT NEEDED]** should be filled in by Kavy directly (bio text, project write-ups, real screenshots, resume PDF, timeline dates) before development starts; the structure, fields, and word-count guidance are fully specified so content can be dropped straight in.

**Extracted metadata (verbatim, reused as SEO baseline):**
| Field | Value |
|---|---|
| Title | Kavy Agrawal \| Website, App & SaaS Developer |
| Meta description | Kavy Agrawal's Professional Portfolio. Turning Vision Into Reality as a Full Stack Developer, SaaS Developer, and App Developer with modern architectures. |
| Keywords | Full Stack Developer, SaaS Architect, React Specialist, Flutter Developer, Node.js Backend Expert, Custom Payment Gateway Integration, Python Programmer, Vibe Coding Expert, Freelance Software Engineer India |
| Tagline | "Turning Vision Into Reality" |
| OG type | website |
| Twitter card | summary_large_image |

---

## 2. Goals & Success Metrics

| Goal | Metric |
|---|---|
| Premium first impression | < 3s perceived load (loader), Lighthouse Performance ≥ 90 |
| Recruiter/client conversion | Contact form submission rate, average session > 90s |
| SEO visibility | Indexed on Google within 2 weeks; ranks for "Kavy Agrawal" position #1 |
| AI-engine visibility | Cited/summarized correctly when asked "Who is Kavy Agrawal" in ChatGPT/Claude/Gemini/Perplexity |
| Technical credibility | Site itself demonstrates the skills claimed (animations, responsiveness, performance) |
| Accessibility | Lighthouse Accessibility ≥ 95, full keyboard navigation |

**Target audience:** Recruiters, hiring managers, startup founders/clients looking to hire a freelance full-stack/SaaS developer, and fellow developers.

---

## 3. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **React 18 + Vite** | Fast dev/build, modern SPA tooling |
| Routing | **React Router v6** with `AnimatePresence` wrapper | Enables route-level page transitions |
| Styling | **Tailwind CSS** + CSS variables for theme tokens | Rapid, consistent, premium utility styling |
| Page/element transitions | **Framer Motion** | Industry standard for React motion, shared-layout transitions |
| Scroll-reveal animations | **Framer Motion `whileInView`** + **GSAP + ScrollTrigger** for complex sequences | Smooth, performant scroll storytelling |
| 3D animation | **React Three Fiber + Drei** (Three.js) | 3D loader scene, hero 3D element, project card tilt/parallax |
| Smooth scrolling | **Lenis** (or `@studio-freight/lenis`) | Buttery inertia scrolling that pairs with GSAP |
| Forms | React Hook Form + Zod validation; submission via **EmailJS** or a serverless function (Netlify Forms / Formspree / custom Node endpoint) | No backend required, spam-protected |
| Icons | **Lucide React** | Clean, consistent, MIT-licensed |
| Deployment | Netlify (matches existing domain/hosting) | Continuity, easy CI/CD |
| SEO/meta management | **react-helmet-async** | Per-route meta/OG/schema injection |
| Analytics | Plausible or GA4 | Track conversion goals |

**Do NOT change the native cursor** — no custom cursor component; all interactive states use `:hover`/`:focus` styling only, never `cursor: none` or a custom cursor follower.

---

## 4. Information Architecture / Site Map

```
/                          Home
/about                     About (landing tab)
   /about#about            About Me (sub-tab)
   /about#interests        Interests (sub-tab)
   /about#education        Education (sub-tab)
/projects                  Projects grid
/projects/:slug            Individual project detail (modal or dedicated route)
/contact                   Contact form
/privacy-policy            Privacy Policy
/terms-of-service          Terms of Service
/sitemap                   Human-readable HTML site map
/sitemap.xml                XML sitemap (machine-readable, auto-generated)
/robots.txt                 Crawler rules
/llms.txt                   AI-crawler content summary (see §9.3)
404                          Custom not-found page (on-brand, with animation)
```

**Note on "About" as `#` with sub-menus:** implemented as a single `/about` route with an in-page tab/segmented-control system (About / Interests / Education), using animated tab transitions (Framer Motion `layoutId`) rather than separate page loads — keeps it fast and keeps the "#" anchor behavior the user described, while still being independently linkable via `/about#interests` etc. for SEO/deep-linking.

---

## 5. Global Components

### 5.1 Loading Screen (first visit / hard refresh only)
- Triggers only on initial app mount (not on in-app route changes — those use page transitions instead).
- Center: custom **KA monogram logo** (see §7), animated stroke-draw-in (SVG path animation).
- Below logo: short status text cycling, e.g. "Loading experience…" → "Almost there…"
- Background: subtle **3D animation** via React Three Fiber — recommend a slowly rotating abstract geometric object (icosahedron/wireframe sphere) or particle field in the brand gradient, low-poly, GPU-cheap (< 500 vertices) so it doesn't hurt load time.
- Progress indication: real asset-loading progress bar (not fake), using `useProgress` from `@react-three/drei` if 3D assets are preloaded, or a simple simulated bar capped at real `window.onload`.
- Exit animation: loader scales/fades out, hero content scales/fades in — Framer Motion `AnimatePresence` handoff, ~600–800ms, no jank.
- Session-based: store a flag in `sessionStorage` so the loader doesn't replay on every internal navigation, only on fresh tab/reload.

### 5.2 Navbar
- Logo (left) — "Kavy Agrawal" custom KA logo, links home.
- Nav links: Home · About (with hover sub-menu: About / Interests / Education) · Projects · Contact.
- Sticky, with scroll-based background blur/opacity transition (transparent over hero → frosted glass on scroll).
- Active-route indicator (animated underline, `layoutId` shared element).
- Mobile: slide-in/fade drawer menu with staggered link entrance animation.
- CTA button: "Let's Talk" / "Hire Me" → `/contact`, styled as the accent-color premium button (see §6).

### 5.3 Footer
- Logo + short tagline ("Turning Vision Into Reality").
- Quick links: Home, About, Projects, Contact, Sitemap, Privacy Policy, Terms of Service.
- Social links: GitHub, LinkedIn, X/Twitter, Email — icon buttons with hover micro-animation. **[CONTENT NEEDED: exact profile URLs]**
- Copyright line with dynamic year.
- Subtle top border-gradient in brand colors.

### 5.4 Page Transitions (every route change)
- Wrap `<Routes>` in Framer Motion `AnimatePresence mode="wait"`.
- Transition style: **"premium reveal"** — outgoing page fades + scales down slightly (0.98) and slides up 20px while a brand-gradient overlay panel wipes across the screen (clip-path or scaleX transform from one side), then the incoming page fades/scales in from behind the wipe. Duration ~700ms, `ease: [0.83, 0, 0.17, 1]` (expo-style easing) for a "classy" feel.
- Route-level loading state suppressed for such short transitions — no spinner needed mid-transition.
- Respect `prefers-reduced-motion`: fall back to a simple 200ms crossfade for users who request reduced motion (accessibility requirement, not optional).

### 5.5 Scroll Animations
- Text: staggered word/line reveal (`whileInView`, `staggerChildren`) for headings.
- Images/cards: fade-up + slight scale-in as they enter viewport (`viewport={{ once: true, amount: 0.3 }}`).
- Section backgrounds: subtle parallax (GSAP ScrollTrigger `scrub`) on decorative shapes/gradients.
- Skill bars / stats counters: animate numeric count-up when scrolled into view.
- All scroll animations run `once: true` (don't replay on scroll-up) to avoid feeling gimmicky.

---

## 6. Visual Design System

**Direction:** Modern, premium, clean — bright, vivid accent colors on a neutral (near-black or near-white) base, generous whitespace, large confident typography, soft glassmorphism accents, gradient meshes as background texture rather than flat color blocks.

| Token | Value (proposed) |
|---|---|
| Base background | `#0B0C10` (near-black, dark-mode-first) with `#FAFAFA` light-mode alternative |
| Primary accent | Electric Indigo `#6C5CE7` |
| Secondary accent | Vivid Cyan `#00E5FF` |
| Tertiary/CTA pop | Coral/Pink `#FF3D71` (used sparingly — buttons, highlights) |
| Gradient signature | `linear-gradient(135deg, #6C5CE7 0%, #00E5FF 100%)` — used on logo, hero glow, CTA buttons, section dividers |
| Text primary | `#F5F5F7` (dark mode) / `#0B0C10` (light mode) |
| Text muted | `#A0A0AA` |
| Font — display/headings | "Clash Display" or "Satoshi" (bold, geometric, premium feel) |
| Font — body | "Inter" or "General Sans" (clean, highly legible) |
| Corner radius | 16–24px on cards, 999px (pill) on buttons |
| Elevation | Soft glow shadows using accent color at low opacity, not generic black drop-shadows |

Light/dark mode toggle is a **recommended enhancement** (not blocking v1) — the dark, bright-accent aesthetic already reads premium by default.

---

## 7. Logo Design Spec — "Kavy Agrawal"

- Monogram: stylized **"KA"** lock-up — the K's diagonal strokes and A's apex merge into a single continuous line to suggest connectivity/full-stack integration.
- Built as **SVG** (scalable, animatable stroke-draw for the loader, crisp at all sizes).
- Color: brand gradient fill (Indigo → Cyan) on dark backgrounds; solid dark version for light backgrounds/print (favicon, OG image).
- Deliverables needed: `logo-full.svg` (KA mark + wordmark, for navbar), `logo-mark.svg` (KA mark only, for favicon/loader/small spaces), PNG exports at 512×512 and 32×32 for favicon/OG fallback.

---

## 8. Page-by-Page Specification

### 8.1 Home
- **Hero section:** Full-viewport. Left/center: greeting + name + role.
  - Greeting: animated typing/reveal effect — e.g. "Hi, I'm" → **"Kavy Agrawal"** (large display type, gradient text) → rotating role subtitle ("Full Stack Developer / SaaS Architect / App Developer") using a text-cycle animation.
  - Right or background: profile photo — treated with a soft gradient-glow border/blob shape, subtle floating animation (idle Y-axis bob via Framer Motion `animate={{ y: [0,-10,0] }}`), optionally combined with a light 3D decorative element (floating shapes) behind/around the photo.
  - Primary CTAs: "View Projects" (→ /projects) and "Download Resume" (PDF link). **[CONTENT NEEDED: resume PDF]**
  - Scroll-down indicator with subtle bounce.
- **Quick-stats strip:** e.g. years of experience, projects completed, technologies — animated count-up on scroll. **[CONTENT NEEDED: real numbers]**
- **Skills preview:** condensed grid/marquee of tech logos (React, Node.js, Flutter, Python, etc. — pulled from extracted keyword list), infinite auto-scroll marquee, pause on hover.
- **Featured projects preview:** 2–3 top projects as premium cards linking to `/projects`.
- **CTA band:** "Let's build something great" → `/contact`, gradient background section.

### 8.2 About (`/about`, tabbed: About · Interests · Education)
- **About tab:** Bio narrative — who Kavy is, his development philosophy, specialties (Full Stack, SaaS architecture, payment gateway integrations, "vibe coding"). **[CONTENT NEEDED: 150–250 word bio]**
- **Interests tab:** Personal interests/hobbies as icon+label cards. **[CONTENT NEEDED: list]**
- **Education tab:** Vertical animated timeline — institution, degree, dates, key achievements. **[CONTENT NEEDED: education history]**
- Shared: sticky sub-nav tab bar with animated active-tab indicator; each tab's content fades/slides in independently.

### 8.3 Projects (`/projects`)
- Filterable grid (by tag: Web / App / SaaS / AI, etc.).
- Each **project card**: cover image, title, 1-line summary, tech-stack chips, hover state reveals "View Details" with subtle 3D tilt-on-hover (`react-parallax-tilt` or manual Framer Motion transform).
- Clicking opens **project detail** (modal with shared-layout `layoutId` morph animation from card → full view, or dedicated `/projects/:slug` route): image gallery/carousel, problem statement, role, tech stack, key features, live-site link, GitHub repo link.
- **[CONTENT NEEDED: project list — name, description, images/screenshots, tech stack, live/repo links for each project]**

### 8.4 Contact (`/contact`)
- Split layout: left — direct contact info (email, phone/socials, location — city/country level only) + availability status badge ("Open to freelance work"); right — contact form.
- Form fields: Name, Email, Subject/Project type (select), Message. Client-side validation (Zod), inline error states, animated success confirmation (checkmark micro-animation) on submit.
- Submission handling: EmailJS (no backend needed) or serverless function; include honeypot field + rate limiting to deter spam.
- Optional: booking-call link (Calendly) as secondary CTA.

### 8.5 Privacy Policy / Terms of Service / Sitemap (legal + utility pages)
- Simple, clean typographic layout (no heavy animation) — long-form readable pages, still on-brand (same fonts/colors), with a table of contents/anchor nav for sections.
- Privacy Policy covers: what data is collected (contact form fields, analytics/cookies), how it's used, third-party services used (EmailJS/analytics), no data sold, contact for data requests.
- Terms of Service covers: site usage terms, IP/content ownership (project images, code snippets shown are Kavy's own or client-approved), disclaimer of liability, external link disclaimer.
- HTML Sitemap page: nested list of all routes, for users and as an SEO signal.
- These are the one place classic legal boilerplate is fine — but should still be written in first person / branded voice, not generic Lorem Ipsum.

### 8.6 404 Page
- On-brand, friendly copy, small 3D/illustration element, CTA back to Home.

---

## 9. SEO & AI-Search ("Answer Engine") Optimization

### 9.1 Traditional SEO
- Semantic HTML5 structure (`<header>`, `<main>`, `<nav>`, `<section>`, proper heading hierarchy — one `<h1>` per page).
- Per-route `<title>` and `<meta name="description">` via `react-helmet-async`, unique per page.
- Open Graph + Twitter Card tags per page (title, description, image, url, type) — reuse and extend the existing OG values found.
- `robots.txt` allowing all crawlers, pointing to `sitemap.xml`.
- Auto-generated `sitemap.xml` (all routes + project detail pages), submitted to Google Search Console & Bing Webmaster Tools.
- **Schema.org JSON-LD structured data:**
  - `Person` schema on Home/About (name, jobTitle, url, sameAs [social links], knowsAbout [skills]).
  - `CreativeWork` / `SoftwareSourceCode` schema on each project detail page.
  - `BreadcrumbList` schema on Projects/detail pages.
  - `WebSite` schema with `SearchAction` if a site search is ever added.
- Image `alt` text on every image (project screenshots, profile photo) — descriptive, keyword-natural, not stuffed.
- Fast Core Web Vitals: lazy-load below-fold images, code-split routes, compress/serve images as WebP/AVIF.
- Canonical URLs per page to avoid duplicate-content issues (especially for `/about#tab` deep links).

### 9.2 Rendering strategy (critical fix vs. current site)
The current site's content isn't visible to non-JS crawlers/fetchers (confirmed during this audit — only meta tags were retrievable). Recommend **prerendering** the SPA (via `vite-plugin-ssr`, or a static prerender step with `react-snap`/`vite-plugin-prerender`, or migrating to **Next.js** if long-term SEO is a priority) so each route serves fully-rendered HTML to crawlers and AI agents, not just an empty `<div id="root">`. This single change meaningfully improves both Google indexing and AI-engine readability.

### 9.3 "AI SEO" — Optimizing for ChatGPT / Claude / Gemini / Perplexity
AI answer engines and their web-browsing/RAG tools rely on clean, well-structured, machine-parseable content — not keyword tricks. Concrete steps:
1. **`llms.txt`** at the site root — an emerging standard (plain Markdown file) summarizing who Kavy is, his skills, and links to key pages, written in clear factual prose an LLM can quote directly. Also add `llms-full.txt` with fuller content if desired.
2. **Prerendered/SSR HTML** (see §9.2) so AI crawlers (GPTBot, ClaudeBot, Google-Extended, PerplexityBot) can actually read the content — this is the single highest-impact item.
3. **Structured, factual "About" copy** — write bio content as clear, quotable factual statements ("Kavy Agrawal is a full-stack developer based in India specializing in X, Y, Z") rather than only marketing flourish — this is what gets extracted verbatim into AI summaries.
4. **FAQ section** (optional, high value) — a short Q&A block ("What technologies does Kavy Agrawal specialize in?", "Is Kavy Agrawal available for freelance work?") marked up with `FAQPage` JSON-LD — AI engines and Google both favor this format for direct answers.
5. Explicitly allow known AI crawlers in `robots.txt` (`GPTBot`, `ClaudeBot`, `Google-Extended`, `PerplexityBot`, `Applebot-Extended`) unless there's a reason to block them.
6. Consistent name/identity signals across the web (GitHub, LinkedIn, resume, this site) so AI engines can confidently cross-reference "Kavy Agrawal" as one entity — matches the `Person` schema `sameAs` field in §9.1.
7. Keep factual claims (years of experience, tech stack, project counts) accurate and consistent everywhere — AI engines cross-check for consistency before citing a source confidently.

---

## 10. Non-Functional Requirements

- **Responsive:** Mobile-first, breakpoints for mobile / tablet / laptop / large desktop; all animations degrade gracefully (lighter/fewer on mobile for performance).
- **Performance budget:** Initial JS bundle < 250KB gzipped (code-split 3D/GSAP into lazy-loaded chunks so they don't block first paint); Lighthouse Performance ≥ 90 mobile.
- **Accessibility:** WCAG 2.1 AA — keyboard navigable, visible focus states, sufficient color contrast despite the bright-on-dark palette, `prefers-reduced-motion` support (§5.4), form labels/ARIA on the contact form.
- **Browser support:** Latest 2 versions of Chrome, Firefox, Safari, Edge; graceful 3D fallback (static gradient image) if WebGL unavailable.
- **Cursor:** default OS cursor preserved everywhere — no custom cursor replacement, per explicit requirement.

---

## 11. Suggested Folder / Component Architecture

```
src/
  assets/           (logo SVGs, images, 3D models if any)
  components/
    layout/         Navbar, Footer, PageTransition, Loader
    ui/              Button, Card, Tag, Badge, Tabs, Modal
    sections/        Hero, StatsStrip, SkillsMarquee, FeaturedProjects, CTASection
  pages/
    Home.jsx
    About.jsx        (with AboutTab, InterestsTab, EducationTab)
    Projects.jsx
    ProjectDetail.jsx
    Contact.jsx
    PrivacyPolicy.jsx
    TermsOfService.jsx
    Sitemap.jsx
    NotFound.jsx
  data/
    projects.js       (project content — single source of truth)
    skills.js
    education.js
    social.js
  hooks/              useScrollAnimation, useReducedMotion, useLenis
  lib/                seo (helmet helpers), schema (JSON-LD builders), validation (Zod schemas)
  three/              Loader3DScene, HeroDecor (React Three Fiber components)
  App.jsx             (Router + AnimatePresence + Lenis provider)
  main.jsx
public/
  robots.txt
  llms.txt
  sitemap.xml (generated)
  favicon + OG images
```

---

## 12. Content Checklist — What's Needed From Kavy Before/During Development

- [ ] Professional headshot / hero photo (high-res, transparent or easily-mattable background preferred)
- [ ] Bio copy for About tab (150–250 words)
- [ ] Interests list (5–8 items with short labels)
- [ ] Education history (institution, degree, dates, highlights)
- [ ] Full project list: for each project — name, 1-line summary, full description, screenshots (3–5 each), tech stack, live URL, GitHub URL, role/contribution
- [ ] Resume PDF
- [ ] Real stats (years experience, projects completed, clients, etc.)
- [ ] Social/profile links (GitHub, LinkedIn, X, email, phone if public)
- [ ] Availability status (open to work / booked / etc.)
- [ ] Any existing brand assets (if a KA logo already exists elsewhere) — otherwise use §7 spec

---

## 13. Delivery Phases

1. **Phase 1 — Foundation:** Project setup (Vite + Tailwind + Router), design system tokens, logo, layout shell (Navbar/Footer), routing + page transitions skeleton.
2. **Phase 2 — Core Pages:** Home, About (tabs), Projects grid + detail, Contact form + submission handling.
3. **Phase 3 — Motion & 3D:** Loader scene, scroll animations, hero 3D/parallax, micro-interactions polish.
4. **Phase 4 — SEO/AI-SEO + Legal:** Meta/schema wiring, sitemap/robots/llms.txt, Privacy/Terms/Sitemap pages, prerendering setup.
5. **Phase 5 — QA:** Cross-browser/device testing, accessibility audit, performance tuning, content load-in with real assets.
6. **Phase 6 — Launch:** Deploy to Netlify, connect domain, submit to Search Console, verify AI-crawler access.

---

*End of PRD. Once the Content Checklist (§12) is filled in, this document is ready to hand directly to development — happy to start scaffolding the React project structure next.*