import { Container } from "./Container";
import { profile } from "@/content/profile";
export function Footer() {
  return <footer className="directory-footer" id="contact">
    <Container><nav aria-label="Contact and social links">
      <a href={`mailto:${profile.email}`}>Email</a>
      <a href={profile.links.github}>GitHub</a>
      <a href={profile.links.linkedin}>LinkedIn</a>
    </nav></Container>
  </footer>;
}
