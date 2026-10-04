import Link from "next/link";
import { Container } from "@/components/layout/Container";
export default function NotFound() {
  return (
    <Container className="error-page">
      <h1>Page not found</h1>
      <p>This page doesn’t exist. There’s still plenty to explore.</p>
      <Link className="button button-primary" href="/">
        Back to home ↗
      </Link>
    </Container>
  );
}
