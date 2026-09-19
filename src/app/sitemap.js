import { projects } from "@/content/projects";
import { getSiteOrigin } from "@/lib/site";
import { getPublishedPosts } from "@/features/blog/posts";
export default async function sitemap() {
 const origin = getSiteOrigin();
 if (!origin) return [];
 const pages = ['/', '/writing', '/projects', '/experience', '/about', '/resume', ...projects.map(p => `/projects/${p.slug}`)];
 return [...pages.map(path => ({ url: new URL(path, origin).href })), ...(await getPublishedPosts()).map(post => ({ url: new URL(`/writing/${post.slug}`, origin).href, lastModified: `${post.updatedAt || post.publishedAt}T00:00:00Z` }))];
}
