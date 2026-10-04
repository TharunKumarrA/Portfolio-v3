import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { getFeaturedProjects } from "@/features/projects/selectors";
import { getPublishedPosts } from "@/features/blog/posts";

const projectDescriptions = {
  sustain: "AI resource-usage estimates",
  "pragati-2025": "Event registration and payments",
  "amritotsavam-2025": "Festival registration and organizer tools",
};
const writingSlugs = [
  "from-the-other-side",
  "yours-not-mine",
  "three-things-cannot-be-long-hidden",
];
const monthYear = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export default async function Home() {
  const posts = await getPublishedPosts();
  const selectedPosts = writingSlugs
    .map((slug) => posts.find((post) => post.slug === slug))
    .filter(Boolean);

  return (
    <Container className="directory">
      <section className="directory-intro" aria-label="Introduction">
        <p>I build software and write about life.</p>
        <p className="muted">Currently at Goldman Sachs.</p>
      </section>
      <div className="directory-columns">
        <section aria-labelledby="built-heading">
          <h2 id="built-heading">Things I’ve built</h2>
          <ul className="directory-list">
            {getFeaturedProjects().map((project) => (
              <li key={project.slug}>
                <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
                <p>{projectDescriptions[project.slug] || project.summary}</p>
              </li>
            ))}
          </ul>
          <Link className="directory-more" href="/projects">All projects →</Link>
        </section>
        <section aria-labelledby="written-heading">
          <h2 id="written-heading">Things I’ve written</h2>
          <ul className="directory-list">
            {selectedPosts.map((post) => (
              <li key={post.slug}>
                <h3><Link href={`/writing/${post.slug}`}>{post.title}</Link></h3>
                <time dateTime={post.publishedAt}>
                  {monthYear.format(new Date(`${post.publishedAt}T00:00:00Z`))}
                </time>
              </li>
            ))}
          </ul>
          <Link className="directory-more" href="/writing">All writing →</Link>
        </section>
      </div>
    </Container>
  );
}
