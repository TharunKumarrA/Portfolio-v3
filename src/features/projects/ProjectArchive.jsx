import Link from "next/link";
export function ProjectArchive({ projects }) {
  return <div className="archive-list">{projects.map((project) => (
    <article key={project.slug} className="archive-row">
      <div><h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
        <p>{project.summary}</p><p className="archive-role">{project.role}</p>
      </div>
      <span className="archive-year">{project.year}</span>
    </article>
  ))}</div>;
}
