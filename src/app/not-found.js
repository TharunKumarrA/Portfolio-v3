import Link from "next/link";
import { Container } from "@/components/layout/Container";
export default function NotFound() { return <Container className="error-page"><p className="eyebrow">OFF THE MAP</p><h1>404.</h1><p>This page doesn’t exist. There’s still plenty to explore.</p><Link className="button button-primary" href="/">Back to home ↗</Link></Container>; }
