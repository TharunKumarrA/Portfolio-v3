# Writing and publishing

The public section is called Writing; its domain object is a Post. Posts live in `content/posts`, outside application code. The existing JavaScript, Next.js App Router and Tailwind stack is unchanged. No database, CMS, accounts, or browser editor is required.

## Publish a post

1. Copy `content/posts/welcome-to-writing.mdx` to a unique lowercase hyphenated filename. The filename becomes the permanent URL: `my-post.mdx` → `/writing/my-post`.
2. Write your title, description, quoted `publishedAt` date (YYYY-MM-DD), optional quoted `updatedAt`, tags, and body. Leave `draft: true` while editing. Markdown and MDX are supported.
3. Put images in `public/blog/my-post/` and reference them as `![Descriptive alt text](/blog/my-post/image.webp)`. Optimize images before committing. Code fences accept language names; tables and footnotes work. `<Callout>...</Callout>` is available for an aside.
4. Run `npm run check`. Metadata and MDX are checked even for drafts. Missing `draft` defaults to true. Unknown metadata fields, invalid dates, duplicate slugs, and empty bodies fail validation.
5. Set `draft: false` and commit/push when ready. Vercel must be connected to the repository for automatic deployment. Future-dated posts remain hidden until a build on or after their date; this is not a scheduling service.

The sample is a draft, not an article attributed to you. Existing Medium articles are not imported or invented. Copy your original articles into this format when ready. Publish here first and use the article URL as the canonical URL when cross-posting elsewhere.

## Preview

Run `npm run dev`. Published posts appear at `/writing`; drafts remain inaccessible, including direct URLs and social images. To review a draft visually, temporarily set `draft: false` locally with a date no later than today, then restore it before committing. Never commit that temporary visibility change unintentionally.

## Production URL

Set `NEXT_PUBLIC_SITE_URL` to the real production origin before building. It drives article canonical URLs, RSS URLs, social images, and sitemap entries. Without it, RSS returns 503 and its subscription links are hidden; no placeholder production URL is generated. Social cards are generated at `/writing/<slug>/opengraph-image`.

## Architecture

`features/blog/posts.js` owns file access, the Zod metadata schema, publication visibility, sorting, and reading-time estimates. Routes and components consume `getPublishedPosts()` / `getPost(slug)` rather than reading files. Every public surface uses this same visibility policy. `mdx.js` owns MDX compilation with GFM and syntax highlighting. MDX is trusted executable repository code; never feed it remote, CMS, or reader-submitted text without redesigning this boundary. MDX components are explicit, with no default remote embeds. RSS is a pure serializer of the published catalogue.

Writing is server-rendered; it adds no client state or global store. A later CMS can replace the content module while preserving the Post contract and route composition. Tags are metadata, not a taxonomy or search system. Reading time is an estimate at 200 words/minute, excluding fenced code.
