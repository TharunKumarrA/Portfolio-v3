import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { PostList } from '@/features/blog/PostList';
import { getPublishedPosts } from '@/features/blog/posts';
import { getSiteOrigin, pageMetadata } from '@/lib/site';
export const metadata = pageMetadata('Writing', 'Essays and notes on software, systems, and things I’m trying to understand.', '/writing');
export default async function WritingPage() {
  const posts = await getPublishedPosts();
  return <Container><header className="page-intro"><h1>Things I’ve written</h1><p className="lead">Notes on software, life, and things I’m trying to understand.</p>
    {getSiteOrigin() && <Link className="text-link" href="/rss.xml">Subscribe via RSS</Link>}
  </header><PostList posts={posts} /></Container>;
}
