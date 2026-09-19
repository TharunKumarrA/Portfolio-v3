import Link from "next/link";
import { Container } from "./Container";
import { Navigation } from "./Navigation";
import { ThemeToggle } from "@/features/theme/ThemeToggle";
export function Header() {
  return (
    <header className="site-header">
      <Container className="header-inner">
        <Link href="/" className="wordmark" aria-label="Tharun Kumarr A — home">
          <span className="brand-square" aria-hidden="true">
            t.
          </span>
          <span>
            THARUN<span className="wordmark-suffix"> KUMARR</span>
          </span>
        </Link>
        <div className="header-actions">
          <Navigation />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
