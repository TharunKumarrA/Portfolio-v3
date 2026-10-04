import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MinecraftAccent } from "@/components/ui/MinecraftAccent";
import { PlayerNameplate } from "@/components/ui/PlayerNameplate";
import { profile } from "@/content/profile";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "About",
  "Meet Tharun Kumar A: software developer, curious learner, and builder.",
  "/about",
);
export default function About() {
  return (
    <Container className="about-refined">
      <div className="page-intro">
        <p className="eyebrow eyebrow-with-accent"><MinecraftAccent icon="map" decorative />About me</p>
        <h1>Vanakam! <span className="accent">I’m Tharun.</span></h1>
        <p className="lead">A software developer with a curious mind, based in India.</p>
      </div>
      <div className="about-page">
        <div className="about-copy">
          <p>{profile.about}</p>
          <p>{profile.now}</p>
          <p>
            I’m drawn to the space between a technical problem and the person
            using the solution. A clear interface, a reliable workflow, and a
            well-explained decision all matter.
          </p>
          <p>
            Beyond the screen, I enjoy space, geopolitics, non-fiction, music,
            and sport.
          </p>
          <div className="intro-links"><Link className="text-link" href="/experience">View experience →</Link><Link className="text-link" href="/resume">Résumé ↗</Link></div>
          <a className="text-link mt-6" href={profile.links.linkedin}>
            Connect on LinkedIn ↗
          </a>
        </div>
        <div className="portrait-frame">
        <PlayerNameplate displayName="Tharun" />
        <Image
          className="about-photo"
          src="/images/tharun.webp"
          alt="Tharun Kumar A"
          width={760}
          height={760}
          sizes="(min-width: 768px) 320px, 100vw"
        />
        </div>
      </div>
      <section className="section-space" aria-labelledby="skills-heading">
        <SectionHeading
          title="Tools I use"
          id="skills-heading"
          icon="crafting"
        />
        <div className="skills-grid">
          {profile.skills.map((s) => (
            <div className="skill-group" key={s.title}>
              <h3>{s.title}</h3>
              <ul>
                {s.items.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="section-space" aria-labelledby="education-heading">
        <SectionHeading
          title="Education"
          id="education-heading"
          icon="book"
        />
        {profile.education.map((e) => (
          <div className="education-row" key={e.school}>
            <div>
              <h3>{e.school}</h3>
              <p>{e.qualification}</p>
            </div>
            <p>{e.dates}</p>
          </div>
        ))}
      </section>
      <section className="section-space" aria-labelledby="interests-heading">
        <SectionHeading
          title="Outside work"
          id="interests-heading"
          icon="compass"
        />
        <ul className="interests-list">
          {profile.interests.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
