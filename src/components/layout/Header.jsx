"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { Navigation } from "./Navigation";
export function Header() {
  const home = usePathname() === "/";
  const name = <Link href="/">Tharun Kumar A.<span className="directory-accent" aria-hidden="true">·</span></Link>;
  return <header className="directory-header">
    <Container className="directory-header-inner">
      {home ? <h1>{name}</h1> : <p className="directory-name">{name}</p>}
      <Navigation />
    </Container>
  </header>;
}
