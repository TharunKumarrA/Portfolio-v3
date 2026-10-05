import Link from "next/link";
import { clippingPreview } from "./templates";

export function ClippingCard({ clipping, preview = false }) {
  const previewBody = clippingPreview(clipping.body, 220);
  const date = clipping.publishedAt ? new Intl.DateTimeFormat("en", { month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${clipping.publishedAt}T00:00:00Z`)) : "Draft";
  const content = <>
    <header className="clipping-card__header"><span>Tharun</span><time>{date}</time></header>
    <p className="clipping-card__body">{previewBody}</p>
    <footer className="clipping-card__footer"><span>Read clipping</span><span aria-hidden="true">↗</span></footer>
  </>;
  if (preview) return <article className="clipping-card clipping-card--preview">{content}</article>;
  return <Link className="clipping-card" href={`/clippings/${clipping.id}`} aria-label={`Read clipping: ${clipping.body}`}>{content}</Link>;
}
