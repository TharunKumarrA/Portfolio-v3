import Link from 'next/link';
import { formatPostDate } from './posts';
export function PostList({ posts }) {
  if (!posts.length) return <p className="writing-empty muted">No posts published yet. There’s more to come.</p>;
  return <ul className="writing-index">{posts.map(post => <li key={post.slug}>
    <h2><Link href={`/writing/${post.slug}`}>{post.title}</Link></h2>
    <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
  </li>)}</ul>;
}
