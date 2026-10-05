import { Container } from "@/components/layout/Container";
import { ClippingCard } from "@/features/clippings/ClippingCard";
import { getPublishedClippings } from "@/content/clippings";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Clippings", "Small quotations, video moments, and original notes.", "/clippings");

export default function ClippingsPage() {
  const clippings = getPublishedClippings();
  return <Container className="clippings-page">
    <header className="clippings-intro">
      <p className="eyebrow">A small public notebook</p>
      <h1>Clippings<span className="accent">.</span></h1>
      <p>A small collection of things I want to come back to.</p>
    </header>
    <section className="clippings-wall" aria-label="Published clippings">
      {clippings.map((clipping) => <ClippingCard key={clipping.id} clipping={clipping} />)}
    </section>
  </Container>;
}
