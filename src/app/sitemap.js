import { projects } from "@/content/projects";
import { getSiteOrigin } from "@/lib/site";
import { getPublishedPosts } from "@/features/blog/posts";
import { getPublishedClippings } from "@/content/clippings";
export default async function sitemap() {
 const origin = getSiteOrigin();
 if (!origin) return [];
 const pages = ['/', '/writing', '/clippings', '/projects', '/experience', '/about', '/resume', ...projects.map(p => `/projects/${p.slug}`)];
 return [...pages.map(path => ({ url: new URL(path, origin).href })), ...(await getPublishedPosts()).map(post => ({ url: new URL(`/writing/${post.slug}`, origin).href, lastModified: `${post.updatedAt || post.publishedAt}T00:00:00Z` })), ...getPublishedClippings().map(clipping => ({ url: new URL(`/clippings/${clipping.id}`, origin).href, lastModified: `${clipping.publishedAt}T00:00:00Z` }))];
}
