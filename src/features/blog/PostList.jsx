import Link from 'next/link';
import { formatPostDate } from './posts';

export function PostList({ posts }) {
  if (!posts.length) return <p className="writing-empty muted">No posts published yet. There’s more to come.</p>;
  const years = [...new Set(posts.map(post => post.publishedAt.slice(0, 4)))];
  return <div className="writing-archive">{years.map(year => <section className="writing-year" key={year} aria-labelledby={`year-${year}`}>
    <h2 id={`year-${year}`}>{year}</h2>
    <ul className="post-list">{posts.filter(post => post.publishedAt.startsWith(year)).map(post => <li key={post.slug}>
      <article><p className="post-meta"><time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time><span>{post.readingMinutes} min read</span></p>
        <h3><Link href={`/writing/${post.slug}`}>{post.title}</Link></h3><p className="muted">{post.description}</p>
        {post.tags.length > 0 && <ul className="tag-list" aria-label="Topics">{post.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>}
      </article>
    </li>)}</ul>
  </section>)}</div>;
}
