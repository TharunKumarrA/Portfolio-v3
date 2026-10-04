import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectArchive } from "@/features/projects/ProjectArchive";
import { getFeaturedProjects, getArchiveProjects } from "@/features/projects/selectors";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata("Projects", "Web applications, event platforms, and automation tools I’ve built.", "/projects");
export default function Projects() {
  return <Container>
    <header className="page-intro"><h1>Things I’ve built</h1><p className="lead">Web applications, event platforms, and automation tools.</p></header>
    <section aria-labelledby="selected-heading">
      <SectionHeading title="Selected projects" id="selected-heading" />
      <ProjectArchive projects={getFeaturedProjects()} />
    </section>
    <section className="section-space" aria-labelledby="archive-heading">
      <SectionHeading title="Other projects" id="archive-heading" />
      <ProjectArchive projects={getArchiveProjects()} />
    </section>
  </Container>;
}
