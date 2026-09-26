# Sandesh Rijal — Portfolio

Dark-mode portfolio site for a Senior Flutter & .NET Developer / Technical Lead.

**Stack:** Next.js 15 (App Router) · React 19 · Tailwind CSS 3 · Framer Motion · Lucide React

---

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build && npm start   # production build
npm run export               # static export to ./out (GitHub Pages)
```

---

## Before you publish — two files to add

| File | What to do |
| --- | --- |
| `public/Sandesh_Rijal_CV.pdf` | **Add this.** Every "Download CV" button points at it and will 404 until it exists. |
| `public/profile.jpg` | Already in place (cropped from the photo you sent). Replace with a square image any time — the circular frame crops to centre. |

A placeholder `public/profile.svg` is also included if you ever want to fall back to initials.

---

## Editing content

Everything the site renders lives in **`lib/data.js`** — profile, experience, projects,
skills, education. Change it there and every section updates; no component edits needed.

Two `href`s in `lib/data.js` currently point at **search URLs** rather than exact listings,
so nothing 404s out of the box. Swap them for the real links when convenient:

- EV Fast Charger — Play Store / App Store
- pub.dev packages and brickhub.dev bricks

---

## Contact form

Out of the box the form validates input and then opens the visitor's mail client
(`mailto:`), so it works on any static host with no backend.

To receive submissions as real email instead, create a free form at
[formspree.io](https://formspree.io) and add to `.env.local`:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxx
```

See `.env.example`.

---

## Deploy

### Option A — Vercel (recommended)

Zero configuration; the Next.js defaults are already correct.

```bash
git init && git add -A && git commit -m "Portfolio site"
git remote add origin https://github.com/rijalsandeshraj/portfolio.git
git push -u origin main
```

Then at [vercel.com/new](https://vercel.com/new): import the repo → **Deploy**.
Add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` under *Settings → Environment Variables* if you use it.
Every later `git push` redeploys automatically.

**Custom domain:** *Settings → Domains* → add your domain → point the DNS records it shows you.

### Option B — GitHub Pages (free, static)

`.github/workflows/deploy.yml` is already committed and does the whole build.

1. Push the repo to GitHub.
2. *Settings → Pages → Build and deployment → Source:* **GitHub Actions**.
3. Push to `main`. The workflow builds a static export and publishes it.

Live at `https://rijalsandeshraj.github.io/<repo-name>/`.

> **Repo named `rijalsandeshraj.github.io`?** That's a *user page* served from the domain
> root, so remove the `NEXT_PUBLIC_BASE_PATH` line from `.github/workflows/deploy.yml` —
> otherwise every asset path gets a prefix it doesn't need.

---

## Structure

```
app/
  layout.jsx        fonts, metadata, <html> shell
  page.jsx          section composition
  globals.css       theme tokens, .glass / .badge / .eyebrow utilities
components/
  Navbar.jsx        sticky bar, scroll-spy, mobile sheet
  Hero.jsx          headline, CTAs, glowing photo frame, stat strip
  About.jsx         bio + pull quote
  Strengths.jsx     four core pillars
  Experience.jsx    expandable timeline with scroll-linked rail
  Projects.jsx      project cards with tags and links
  Skills.jsx        categorised badge grid
  Education.jsx     degrees, languages, interests
  Contact.jsx       validated form + direct details
  Footer.jsx        socials, back to top
  Reveal.jsx        scroll-entrance wrappers
  ScrollProgress.jsx
lib/data.js         ← all content lives here
```

## Notes

- Accent colour is defined once in `tailwind.config.js` (`accent.DEFAULT`). Change it there
  and the whole site follows.
- All ambient animation is disabled under `prefers-reduced-motion`.
- Fully responsive; the timeline rail and node markers collapse below `sm`.
