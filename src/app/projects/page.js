import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/features/projects/ProjectCard";
import { ProjectArchive } from "@/features/projects/ProjectArchive";
import { getFeaturedProjects, getArchiveProjects } from "@/features/projects/selectors";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata("Projects", "Web applications, event platforms, and automation tools I’ve built.", "/projects");
export default function Projects() {
  return <Container>
    <header className="page-intro"><p className="eyebrow">Projects</p><h1>Things I’ve <span className="accent">built.</span></h1><p className="lead">Web applications, event platforms, and automation tools.</p></header>
    <section aria-labelledby="selected-heading">
      <SectionHeading title="Selected projects" id="selected-heading" />
      <div className="selected-projects refined-projects">{getFeaturedProjects().map(project => <ProjectCard key={project.slug} project={project} compact />)}</div>
    </section>
    <section className="section-space" aria-labelledby="archive-heading">
      <SectionHeading title="Other projects" id="archive-heading" />
      <ProjectArchive projects={getArchiveProjects()} />
    </section>
  </Container>;
}
