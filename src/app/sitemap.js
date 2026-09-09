import { projects } from "@/content/projects";
import { getSiteOrigin } from "@/lib/site";
export default function sitemap() { const origin=getSiteOrigin(); if (!origin) return []; return ['','/projects','/experience','/about','/resume',...projects.map(p=>`/projects/${p.slug}`)].map(path=>({url:new URL(path||'/',origin).href})); }
