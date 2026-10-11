# Aditya Kumar: Developer Portfolio

A one-page portfolio built with Next.js (App Router), React and Tailwind CSS. All content is configured in one file.

## Run it

```bash
npm install
cp .env.example .env     # optional: see below
npm run dev              # http://localhost:3000
npm run build            # production build
```

## What to configure

Open `config/portfolio.js`. Anything left as `""` is hidden instead of showing a dead link.

| Field | Where | Notes |
|---|---|---|
| `site.email` | `config/portfolio.js` | Enables the "Email me" button. Until set, GitHub is the primary contact button. |
| `site.linkedin` | `config/portfolio.js` | Full profile URL. Hidden when empty. |
| `projects[0].liveUrl` | `config/portfolio.js` | Your deployed Flux URL. The "Live demo" button is hidden until set. |
| `projects[0].image` | `config/portfolio.js` | Optional real screenshot (put it in `public/projects/`). Replaces the illustrated layout. |
| `experience.highlights`, `experience.stack` | `config/portfolio.js` | Add what you actually did at Stackwise. Hidden while empty. |
| Resume | `public/resume.pdf` | Drop the file in; resume buttons appear automatically. |
| `NEXT_PUBLIC_SITE_URL` | `.env` / Vercel | Your deployed domain, used for social share previews. |
| `GITHUB_TOKEN` | `.env` / Vercel | Optional. Raises the GitHub API rate limit. Server-only. |

`GITHUB_USERNAME` (top of `config/portfolio.js`) drives every GitHub link and the repositories section.

## How it works

- **GitHub repositories** are fetched on the server and cached for an hour. If GitHub is slow, rate-limited or unreachable, the section shows a message and a link to your profile instead of failing.
- **Contact** uses a `mailto:` link, so no backend or third-party form service is needed.
- **Motion**: only the hero entrance animation, which is switched off when the visitor prefers reduced motion.

## Deploy

Push to GitHub and import the repo on Vercel. Add `NEXT_PUBLIC_SITE_URL` (and optionally `GITHUB_TOKEN`) under Environment Variables, using the raw value with no surrounding quotes.
