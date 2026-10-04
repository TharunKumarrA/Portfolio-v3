import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { experiences } from "@/content/experiences";
import { profile } from "@/content/profile";
import { dateRange } from "@/lib/dates";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata("Résumé", "Experience, education, and a downloadable résumé for Tharun Kumar A.", "/resume");
export default function Resume() {
  return <Container className="resume-simple">
    <header className="page-intro">
      <h1>Résumé</h1>
      <p className="lead">{profile.current}</p>
      <div className="resume-actions">
        <a className="text-link" href="/resume.pdf" download="Tharun-Kumar-A-Resume.pdf">Download PDF ↓</a>
        <a className="text-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Open PDF ↗</a>
      </div>
      <p className="resume-note">PDF edition: April 2025. Current experience is listed below.</p>
    </header>
    <section aria-labelledby="resume-work">
      <h2 id="resume-work">Experience</h2>
      <ul className="resume-entries">{experiences.filter(exp => exp.category === "professional").map(exp => <li key={exp.id}>
        <div><h3>{exp.role}</h3><p>{exp.organization}</p></div>
        <span>{dateRange(exp.startDate, exp.endDate)}</span>
      </li>)}</ul>
      <Link className="text-link" href="/experience">Full experience →</Link>
    </section>
    <section aria-labelledby="resume-education">
      <h2 id="resume-education">Education</h2>
      <ul className="resume-entries">{profile.education.map(item => <li key={item.school}>
        <div><h3>{item.school}</h3><p>{item.qualification}</p></div><span>{item.dates}</span>
      </li>)}</ul>
    </section>
    <section aria-labelledby="resume-skills">
      <h2 id="resume-skills">Skills</h2>
      <p className="muted">{profile.skills.flatMap(group => group.items).join(" · ")}</p>
    </section>
  </Container>;
}
