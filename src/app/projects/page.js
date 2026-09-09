import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/features/projects/ProjectCard";
import { ProjectArchive } from "@/features/projects/ProjectArchive";
import { getFeaturedProjects, getArchiveProjects } from "@/features/projects/selectors";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata("Selected work", "Projects in full-stack development, AI, and interactive applications.", "/projects");
export default function Projects() { return <Container><div className="page-intro"><p className="eyebrow">WORK / SELECTED & EXPLORATORY</p><h1>Built with purpose.<br /><span className="accent">Learned through doing.</span></h1><p className="lead">Event platforms, AI tools, and applications that turn complex information into useful experiences.</p></div><div className="selected-projects">{getFeaturedProjects().map((p,index) => <ProjectCard key={p.slug} project={p} index={index} />)}</div><section className="section-space" aria-labelledby="archive-heading"><SectionHeading number="THE EXPLORATIONS" title="More from the workbench." id="archive-heading" /><ProjectArchive projects={getArchiveProjects()} /></section></Container>; }
