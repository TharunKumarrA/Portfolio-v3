import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { TagList } from "@/components/ui/TagList";
export function ProjectCard({ project, index = 0, compact = false }) {
  return (
    <article className="project-card">
      <Link
        href={`/projects/${project.slug}`}
        className="project-image-link"
        aria-label={`Read ${project.title} case study`}
      >
        {project.image && (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={1440}
            height={810}
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="project-image"
          />
        )}
        {!compact && <span className="image-index" aria-hidden="true">
          0{index + 1} / {project.year}
        </span>}
        <span className="image-arrow" aria-hidden="true">
          <FiArrowUpRight />
        </span>
      </Link>
      <div className="project-card-copy">
        {!compact && <p className="eyebrow">
          {project.category} · {project.year}
        </p>}
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        {!compact && <p className="project-headline">{project.headline}</p>}
        <p className="muted">{compact ? ({ sustain: "A Chrome extension that estimates the energy, carbon, and water impact of AI queries.", "pragati-2025": "An event platform with registration, payments, and a chatbot." }[project.slug] || project.summary) : project.summary}</p>
        <p className="project-role">{project.role}</p>
        {!compact && <TagList items={project.technologies.slice(0, 4)} />}
        <Link href={`/projects/${project.slug}`} className="text-link">
          Read case study <FiArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
