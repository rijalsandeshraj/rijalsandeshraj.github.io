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

Submissions go to **Formspree** (`https://formspree.io/f/xvkgwvkr`), configured in
`lib/data.js`. Notification emails arrive with the subject
`Portfolio enquiry — <whatever the sender typed>`.

The endpoint is deliberately committed rather than stored as a build secret: any
`NEXT_PUBLIC_*` value is inlined into the client bundle, so a secret would add
indirection without adding secrecy. Anyone can read it from the deployed JS either way.

To point at a different form (a test one, say) set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in
`.env.local` — it takes precedence. Blank the endpoint entirely and the form falls back
to opening the visitor's mail client.

**Free tier is 50 submissions/month.** Past that, Formspree holds them until the next
cycle or an upgrade.

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

### Option B — GitHub Pages (this repo's current setup)

`.github/workflows/deploy.yml` is committed and does the whole build.

1. Push to GitHub as `rijalsandeshraj.github.io` (public).
2. *Settings → Pages → Build and deployment → Source:* **GitHub Actions**.
3. Push to `main`. The workflow static-exports the site and publishes it.

Live at **<https://rijalsandeshraj.github.io>**.

> This is a **user page**, served from the domain root, so the build runs with no
> `basePath`. If you ever move it to a project page (`/<repo-name>/`), uncomment the
> `NEXT_PUBLIC_BASE_PATH` line in the workflow — otherwise every asset 404s.

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
