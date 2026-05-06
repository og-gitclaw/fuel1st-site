# fuel1st-site

Marketing website for Fuel1st (Global Aviation Fuel Solutions). Built with Next.js 14 (App Router), TypeScript, and Tailwind. Deployed to Vercel.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript no-emit check
- `npm start` — run production build locally

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site origin used for OG tags, sitemap, JSON-LD |
| `NEXT_PUBLIC_ALLOW_INDEXING` | Set to `true` to remove `noindex` and serve a real `robots.txt` |
| `REVALIDATE_TOKEN` | Shared secret for `POST /api/revalidate-news` to manually refresh the news feed |

By default the site emits `<meta name="robots" content="noindex,nofollow">` and a disallow-all `robots.txt`. This is intentional during pre-launch — flip `NEXT_PUBLIC_ALLOW_INDEXING=true` in Vercel project settings when ready to go live.

## Architecture

- `app/` — App Router pages
- `components/` — UI components (Nav, Footer, NewsCard, etc.)
- `lib/` — site metadata, services, leadership, FAQ, blog posts, RSS aggregator
- `app/api/revalidate-news/` — manual revalidation endpoint for the news feed
- `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx` — SEO surfaces

## News feed

`/news` aggregates four public RSS sources (Aviation Week, FlightGlobal, Simple Flying, AIN), filters out items that mention competitors, categorizes by keyword, and renders a card grid with a category filter that persists in `localStorage`. The page uses ISR with a 24-hour revalidate window. Manual revalidation:

```bash
curl -X POST -H "x-revalidate-token: <REVALIDATE_TOKEN>" \
  https://<your-domain>/api/revalidate-news
```

## Open TODOs

Search the codebase for `TODO:` to find every placeholder. Highlights:

- Leadership bios are placeholders
- Press kit is missing the full logo pack and one-pager
- Legal pages (Privacy, Terms, Cookies) are unreviewed boilerplate
- One blog post is a placeholder; real editorial content TBD

## License

MIT — see [LICENSE](./LICENSE).
