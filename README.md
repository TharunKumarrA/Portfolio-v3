# Portfolio v3

Tharun Kumarr A’s portfolio, rebuilt with Next.js App Router, React, JavaScript, Tailwind CSS, and React Icons. V2 remains a separate repository.

## Run

Use Node 22 or newer. Run `npm install` to generate the initial lockfile, then run `npm run dev`. Commit `package-lock.json` after the first successful installation; subsequent checkouts should use `npm ci`. Run `npm run check` before proposing a release. `npm run build` creates the production build and `npm start` serves it.

## Structure

- `src/app`: routes, metadata, document shell, and visual tokens.
- `src/content`: canonical profile, project, and experience records.
- `src/features`: project presentation/selection, experience entries, and clipboard behavior.
- `src/components`: shared layout and small interface elements.
- `src/lib`: dates and site configuration.
- `tests`: content selection, dates, metadata, and clipboard failure behavior.
- `docs`: architecture, design system, content provenance, and release checklist.

## Update content

Edit a project once in `src/content/projects.js`. A stable slug produces its case-study URL; `featuredOrder` controls home-page selection. Optional links are omitted rather than rendered empty. Add images to `public/projects` and provide descriptive alt text. Run `npm run check:content` after editing.

Professional history and education were refreshed from the supplied LinkedIn profile on 9 September 2026. See `docs/content-provenance.md` for unresolved details. The provided résumé PDF is retained and clearly labeled as the April 2025 edition; update the file and its date label together.

## Deploy to Vercel

Import this repository as a Next.js project. Use Node 22. Set `NEXT_PUBLIC_SITE_URL` to the final production origin and redeploy. Preview deployments should leave it unset, which omits canonical URLs and disallows indexing. No database or application secrets are required.

## Principles

Essential content renders without a global loading gate. Client code is limited to route indication, clipboard interaction, and a decorative hover accent. Project images remain in the document flow. All experience entries are visible. Semantic links, buttons, headings, focus indicators, and reduced-motion behavior are part of the shared system.
