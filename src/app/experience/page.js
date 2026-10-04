import { Container } from "@/components/layout/Container";
import { ExperienceList } from "@/features/experience/ExperienceList";
import { experiences } from "@/content/experiences";
import { pageMetadata } from "@/lib/site";
import { MinecraftAccent } from "@/components/ui/MinecraftAccent";
export const metadata = pageMetadata(
  "Experience",
  "Professional development, practical automation, and technical leadership.",
  "/experience",
);
export default function Experience() {
  return (
    <Container>
      <div className="page-intro">
        <p className="eyebrow eyebrow-with-accent"><MinecraftAccent icon="compass" decorative />Experience</p>
        <h1>My <span className="accent">experience.</span></h1>
        <p className="lead">
          From full-stack development and festival platforms to improving
          operational workflows.
        </p>
      </div>
      {[
        ["professional", "Professional experience"],
        ["leadership", "Technical leadership"],
        ["community", "Community & creative work"],
      ].map(([key, label]) => (
        <section key={key} className="experience-group" aria-labelledby={key}>
          <h2 className="group-title" id={key}>
            {label}
          </h2>
          <ExperienceList
            experiences={experiences.filter((e) => e.category === key)}
          />
        </section>
      ))}
    </Container>
  );
}
