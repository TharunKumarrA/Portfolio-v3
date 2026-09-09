import { getSiteOrigin } from "@/lib/site";
export default function robots() { const origin=getSiteOrigin(); return {rules: {userAgent:'*', ...(origin ? {allow:'/'} : {disallow:'/'})},...(origin ? {sitemap:`${origin}/sitemap.xml`} : {})}; }
