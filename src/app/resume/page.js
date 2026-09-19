import { Container } from "@/components/layout/Container";
import { ExperienceList } from "@/features/experience/ExperienceList";
import { experiences } from "@/content/experiences";
import { profile } from "@/content/profile";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Résumé",
  "Experience, education, and a downloadable résumé for Tharun Kumarr A.",
  "/resume",
);
export default function Resume() {
  return (
    <Container>
      <div className="page-intro">
        <p className="eyebrow">RÉSUMÉ / AT A GLANCE</p>
        <h1>
          Experience,
          <br />
          <span className="accent">in focus.</span>
        </h1>
        <p className="lead">{profile.introduction}</p>
        <div className="resume-actions">
          <a
            className="button button-primary"
            href="/resume.pdf"
            download="Tharun-Kumarr-A-Resume.pdf"
          >
            Download PDF ↓
          </a>
          <a
            className="button button-secondary"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open PDF ↗
          </a>
        </div>
        <p className="resume-note">
          The downloadable PDF is the April 2025 edition. The experience below
          reflects the current profile.
        </p>
      </div>
      <div className="resume-summary">
        <h2>Professional experience</h2>
        <ExperienceList
          experiences={experiences.filter((e) => e.category === "professional")}
        />
        <h2>Education</h2>
        {profile.education.map((e) => (
          <div className="education-row" key={e.school}>
            <div>
              <h3>{e.school}</h3>
              <p>{e.qualification}</p>
            </div>
            <p>{e.dates}</p>
          </div>
        ))}
        <h2>Technical skills</h2>
        <p>{profile.skills.flatMap((s) => s.items).join(" · ")}</p>
      </div>
      <iframe
        className="resume-frame"
        src="/resume.pdf"
        title="Tharun Kumarr A résumé — April 2025"
        loading="lazy"
      />
    </Container>
  );
}
