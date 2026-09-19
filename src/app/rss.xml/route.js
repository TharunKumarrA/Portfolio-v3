import { getPublishedPosts } from '@/features/blog/posts';
import { createRss } from '@/features/blog/rss';
import { getSiteOrigin } from '@/lib/site';
import { profile } from '@/content/profile';
export const dynamic = 'force-static';
export async function GET() {
  const origin = getSiteOrigin();
  if (!origin) return new Response('RSS is available after the production site URL is configured.', { status: 503 });
  return new Response(createRss(await getPublishedPosts(), origin, profile.name), { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
