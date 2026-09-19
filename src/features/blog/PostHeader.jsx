import { formatPostDate } from './posts';
import { profile } from '@/content/profile';
export function PostHeader({ post }) {
  return <header className="post-header"><p className="eyebrow">WRITING / {profile.name}</p><h1>{post.title}</h1>
    <p className="post-description">{post.description}</p>
    <p className="post-meta"><time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time><span>{post.readingMinutes} min read</span></p>
    {post.updatedAt && <p className="post-meta">Updated <time dateTime={post.updatedAt}>{formatPostDate(post.updatedAt)}</time></p>}
  </header>;
}
