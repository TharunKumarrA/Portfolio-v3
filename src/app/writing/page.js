import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { PostList } from '@/features/blog/PostList';
import { getPublishedPosts } from '@/features/blog/posts';
import { getSiteOrigin, pageMetadata } from '@/lib/site';
import { MinecraftAccent } from '@/components/ui/MinecraftAccent';
export const metadata = pageMetadata('Writing', 'Essays and notes on software, systems, and things I’m trying to understand.', '/writing');
export default async function WritingPage() {
  const posts = await getPublishedPosts();
  return <Container><header className="page-intro"><p className="eyebrow eyebrow-with-accent"><MinecraftAccent icon="book" decorative />Essays & notes</p><h1>Writing<span className="accent">, and life.</span></h1><p className="lead">Writing about software, work, and the questions I keep returning to.</p>
    {getSiteOrigin() && <Link className="text-link" href="/rss.xml">Subscribe via RSS</Link>}
  </header><PostList posts={posts} /></Container>;
}
