import { ImageResponse } from 'next/og';
import { getPost } from '@/features/blog/posts';
import { profile } from '@/content/profile';
export async function GET(_request, { params }) {
  const post = await getPost((await params).slug);
  if (!post) return new Response('Not found', { status: 404 });
  return new ImageResponse(<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#171313', color: '#f3ece1', width: '100%', height: '100%', padding: 70 }}>
    <div style={{ color: '#d79a48', fontSize: 26 }}>WRITING / {profile.name}</div>
    <div style={{ fontSize: 64, lineHeight: 1.15 }}>{post.title}</div>
    <div style={{ color: '#c2b1a0', fontSize: 24 }}>{post.publishedAt} · {post.readingMinutes} min read</div>
  </div>, { width: 1200, height: 630 });
}
