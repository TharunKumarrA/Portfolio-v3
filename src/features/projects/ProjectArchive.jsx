import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
export function ProjectArchive({ projects }) {
  return (
    <div className="archive-list">
      {projects.map((p) => (
        <article key={p.slug} className="archive-row">
          <span className="archive-year">{p.year}</span>
          <div>
            <h3>
              <Link href={`/projects/${p.slug}`}>{p.title}</Link>
            </h3>
            <p>{p.summary}</p>
          </div>
          <span className="archive-category">{p.category}</span>
          <Link
            href={`/projects/${p.slug}`}
            className="archive-arrow"
            aria-label={`Read about ${p.title}`}
          >
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        </article>
      ))}
    </div>
  );
}
