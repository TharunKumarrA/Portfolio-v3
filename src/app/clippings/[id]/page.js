import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { getPublishedClipping, getPublishedClippings } from "@/content/clippings";
import { pageMetadata } from "@/lib/site";

export const dynamic = "force-static";
export function generateStaticParams() { return getPublishedClippings().map(({ id }) => ({ id })); }
export async function generateMetadata({ params }) {
  const clipping = getPublishedClipping((await params).id);
  if (!clipping) return {};
  return pageMetadata("Clipping", clipping.body.slice(0, 150), `/clippings/${clipping.id}`);
}
export default async function ClippingDetailPage({ params }) {
  const clipping = getPublishedClipping((await params).id);
  if (!clipping) notFound();
  const date = new Intl.DateTimeFormat("en", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${clipping.publishedAt}T00:00:00Z`));
  return <Container className="clipping-detail">
    <Link className="text-link" href="/clippings">← All clippings</Link>
    <article>
      <header className="clipping-detail__header"><p className="eyebrow">Clippings / {date}</p><p>Tharun Kumar A</p></header>
      <div className="clipping-detail__reading"><p className="clipping-detail__body">{clipping.body}</p></div>
      <footer className="clipping-detail__footer"><span>tharun-kumarr.vercel.app</span><span>Clipping</span></footer>
    </article>
  </Container>;
}
