import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { getFeaturedProjects } from "@/features/projects/selectors";
import { getPublishedPosts } from "@/features/blog/posts";
import { MinecraftAccent } from "@/components/ui/MinecraftAccent";
import { HeroTypefaceWord } from "@/components/ui/HeroTypefaceWord";

const projectDescriptions = {
  sustain: "AI resource-use estimates for sustainable software decisions",
  "pragati-2025": "Event registration and payments for Pragati ’25",
  "molecule-visualizer": "Interactive 3D molecular geometry for learning",
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
        <p className="eyebrow pixel-label">Software & stories</p>
        <p className="directory-statement">
          I build <HeroTypefaceWord word="software." />
          <br />
          <span className="accent">And sometimes I <HeroTypefaceWord word="write." delay={3700} /></span>
        </p>
        <p className="muted">Web applications, automation tools, and notes from the journey.<br />Currently an Analyst at Goldman Sachs.</p>
        <div className="intro-links">
          <Link className="text-link hero-work-cta" href="/experience">View experience →</Link>
          <Link className="text-link" href="/about">More about me ↗</Link>
        </div>
      </section>
      <div className="directory-columns">
        <section aria-labelledby="built-heading">
          <h2 id="built-heading"><MinecraftAccent icon="crafting" decorative />Things I’ve <span className="accent">built</span></h2>
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
          <h2 id="written-heading"><MinecraftAccent icon="book" decorative />Things I’ve <span className="accent">written</span></h2>
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
