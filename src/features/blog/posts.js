import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { z } from 'zod';

const date = z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine(value => {
  const parsed = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(parsed.valueOf()) && parsed.toISOString().slice(0, 10) === value;
}, 'Use a real calendar date in YYYY-MM-DD format');
export const postSchema = z.object({
  title: z.string().trim().min(1).max(160),
  description: z.string().trim().min(1).max(300),
  publishedAt: date,
  updatedAt: date.optional(),
  tags: z.array(z.string().trim().min(1)).default([]),
  draft: z.boolean().default(true),
}).strict().refine(post => !post.updatedAt || post.updatedAt >= post.publishedAt, {
  message: 'updatedAt must not precede publishedAt', path: ['updatedAt'],
});
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export function parsePost(source, slug) {
  if (!slugPattern.test(slug)) throw new Error(`Invalid post slug: ${slug}`);
  const { data, content } = matter(source);
  const metadata = postSchema.parse(data);
  if (!content.trim()) throw new Error(`${slug}: post body is empty`);
  const words = content.replace(/```[\s\S]*?```/g, '').split(/\s+/).filter(Boolean).length;
  return { ...metadata, slug, body: content, readingMinutes: Math.max(1, Math.ceil(words / 200)) };
}
export function selectPublishedPosts(posts, today = new Date().toISOString().slice(0, 10)) {
  return posts.filter(post => !post.draft && post.publishedAt <= today)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.slug.localeCompare(b.slug));
}
export async function getAllPosts(directory = path.join(process.cwd(), 'content/posts')) {
  const files = (await readdir(directory)).filter(file => /\.mdx?$/.test(file));
  const posts = await Promise.all(files.map(async file => {
    try { return parsePost(await readFile(path.join(directory, file), 'utf8'), file.replace(/\.mdx?$/, '')); }
    catch (error) { throw new Error(`${file}: ${error.message}`, { cause: error }); }
  }));
  if (new Set(posts.map(post => post.slug)).size !== posts.length) throw new Error('Duplicate post slug');
  return posts;
}
export async function getPublishedPosts() { return selectPublishedPosts(await getAllPosts()); }
export async function getPost(slug) {
  if (!slugPattern.test(slug)) return undefined;
  return (await getPublishedPosts()).find(post => post.slug === slug);
}
export function formatPostDate(value) {
  return new Intl.DateTimeFormat('en', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`));
}
