import { projects } from "../../content/projects.js";
export function getFeaturedProjects() {
 return projects.filter(p => p.featuredOrder !== null).toSorted((a,b) => a.featuredOrder - b.featuredOrder);
}
export function getProject(slug) { return projects.find(project => project.slug === slug); }
export function getArchiveProjects() { return projects.filter(p => p.featuredOrder === null); }
