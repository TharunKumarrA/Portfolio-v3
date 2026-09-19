import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { parsePost, selectPublishedPosts, getAllPosts, getPost } from '../src/features/blog/posts.js';
import { renderPost } from '../src/features/blog/mdx.js';
import { createRss } from '../src/features/blog/rss.js';
const source = (extra = '') => `---\ntitle: "A title"\ndescription: "A description"\npublishedAt: "2026-01-02"\n${extra}\n---\n## Hello\n\nA useful paragraph.\n`;
test('missing draft flag is private by default; metadata and real dates are validated', () => {
  assert.equal(parsePost(source(), 'hello').draft, true);
  assert.throws(() => parsePost(source().replace('2026-01-02', '2026-02-30'), 'hello'));
  assert.throws(() => parsePost(source().replace('"2026-01-02"', 'true'), 'hello'));
  assert.throws(() => parsePost(source('updatedAt: "2025-01-01"'), 'hello'));
  assert.throws(() => parsePost(source(), '../secret'));
});
test('published selection excludes drafts and future posts with deterministic ordering', () => {
  const publicPost = parsePost(source('draft: false'), 'public');
  const draft = parsePost(source(), 'draft');
  const future = { ...publicPost, slug: 'future', publishedAt: '2099-01-01' };
  assert.deepEqual(selectPublishedPosts([draft, future, publicPost], '2026-09-19').map(p => p.slug), ['public']);
  assert.deepEqual(selectPublishedPosts([{ ...publicPost, slug: 'z' }, { ...publicPost, slug: 'a' }]).map(p => p.slug), ['a', 'z']);
});
test('filesystem rejects ambiguous MD and MDX slugs and identifies invalid files', async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'portfolio-posts-'));
  try {
    await writeFile(path.join(directory, 'hello.md'), source());
    await writeFile(path.join(directory, 'hello.mdx'), source());
    await assert.rejects(getAllPosts(directory), /Duplicate post slug/);
    await writeFile(path.join(directory, 'hello.mdx'), 'Invalid');
    await assert.rejects(getAllPosts(directory), /hello.mdx/);
  } finally { await rm(directory, { recursive: true, force: true }); }
});
test('direct lookup does not expose drafts or path traversal', async () => {
  assert.equal(await getPost('welcome-to-writing'), undefined);
  assert.equal(await getPost('../package'), undefined);
});
test('MDX renders headings, highlighted code, tables, footnotes and custom components', async () => {
  const Content = await renderPost('## Heading\n\n```js\nconst x = 1;\n```\n\n| A | B |\n| - | - |\n| 1 | 2 |\n\nA note[^1].\n\n[^1]: Footnote.\n\n<Callout>Aside</Callout>');
  const html = renderToStaticMarkup(createElement(Content, { components: { Callout: ({children}) => createElement('aside', {}, children) } }));
  assert.match(html, /<h2>Heading/); assert.match(html, /hljs-keyword/);
  assert.match(html, /<table>/); assert.match(html, /footnotes/); assert.match(html, /<aside>Aside/);
});
test('feed escapes XML and uses canonical absolute URLs', () => {
  const post = { ...parsePost(source('draft: false'), 'hello'), title: 'A & <B>', tags: ['R&D'] };
  const xml = createRss([post], 'https://example.com', 'Tharun & friends');
  assert.match(xml, /A &amp; &lt;B&gt;/); assert.match(xml, /R&amp;D/);
  assert.match(xml, /https:\/\/example.com\/writing\/hello/);
  assert.doesNotMatch(xml, /undefined/);
});
