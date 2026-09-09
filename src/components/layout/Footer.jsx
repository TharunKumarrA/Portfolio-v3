import Link from "next/link";
import { FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";
import { Container } from "./Container";
import { profile } from "@/content/profile";
import { CopyEmailButton } from "@/features/contact/CopyEmailButton";
export function Footer() {
 return <footer className="site-footer" id="contact"><Container>
  <div className="footer-top"><div><p className="eyebrow">HAVE SOMETHING IN MIND?</p><h2>Let’s build<br /><span className="accent">something useful.</span></h2></div>
  <div className="contact-links"><a href={`mailto:${profile.email}`} className="email-link">{profile.email}<FiArrowUpRight aria-hidden="true" /></a><CopyEmailButton email={profile.email} /><div className="social-links"><a href={profile.links.github}><FiGithub aria-hidden="true" />GitHub</a><a href={profile.links.linkedin}><FiLinkedin aria-hidden="true" />LinkedIn</a></div></div></div>
  <div className="footer-bottom"><p>© {new Date().getFullYear()} Tharun Kumarr A</p><p className="font-heading">DARE MIGHTY THINGS.</p><Link href="/resume">Résumé <FiArrowUpRight aria-hidden="true" /></Link></div>
 </Container></footer>;
}
