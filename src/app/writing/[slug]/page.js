import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/layout/Container';
import { getPost, getPublishedPosts } from '@/features/blog/posts';
import { renderPost } from '@/features/blog/mdx';
import { PostHeader } from '@/features/blog/PostHeader';
import { mdxComponents } from '@/features/blog/mdx-components';
import { getSiteOrigin, pageMetadata } from '@/lib/site';
export const dynamic = 'force-static';
export async function generateStaticParams() { return (await getPublishedPosts()).map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  const origin = getSiteOrigin();
  const image = origin ? new URL(`/writing/${post.slug}/opengraph-image`, origin).href : undefined;
  return { ...pageMetadata(post.title, post.description, `/writing/${post.slug}`),
    openGraph: { type: 'article', title: post.title, description: post.description, publishedTime: post.publishedAt, modifiedTime: post.updatedAt, ...(image ? { images: [image] } : {}) },
    twitter: { card: 'summary_large_image', title: post.title, description: post.description, ...(image ? { images: [image] } : {}) },
  };
}
export default async function PostPage({ params }) {
  const post = await getPost((await params).slug);
  if (!post) notFound();
  const Content = await renderPost(post.body);
  return <Container><div className="post-shell"><Link className="text-link case-breadcrumb" href="/writing">← All writing</Link><article><PostHeader post={post} /><div className="post-prose"><Content components={mdxComponents} /></div></article><Link className="text-link case-next" href="/writing">Back to the writing archive →</Link></div></Container>;
}
