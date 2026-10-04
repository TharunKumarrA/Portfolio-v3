import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { Container } from "@/components/layout/Container";
import { TagList } from "@/components/ui/TagList";
import { projects } from "@/content/projects";
import { getProject } from "@/features/projects/selectors";
import { pageMetadata } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProject(slug);
  return p
    ? pageMetadata(p.title, p.summary, `/projects/${slug}`)
    : { title: "Project not found" };
}
export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const study = p.caseStudy;
  const next =
    projects[
      (projects.findIndex((x) => x.slug === slug) + 1) % projects.length
    ];
  return (
    <Container>
      <Link className="text-link case-breadcrumb" href="/projects">
        <FiArrowLeft aria-hidden="true" />
        All work
      </Link>
      <div className="page-intro">
        <p className="eyebrow">
          {p.category} / {p.year}
        </p>
        <h1>{p.title}</h1>
        <p className="lead">{p.summary}</p>
      </div>
      <dl className="case-facts">
        <div>
          <dt>My role</dt>
          <dd>{p.role}</dd>
        </div>
        <div>
          <dt>Project</dt>
          <dd>{p.category}</dd>
        </div>
        <div>
          <dt>Technology</dt>
          <dd>
            {p.technologies.length ? (
              <TagList items={p.technologies} />
            ) : (
              "Team-led platform development"
            )}
          </dd>
        </div>
      </dl>
      {p.image && (
        <div className="case-cover">
          <Image
            src={p.image.src}
            alt={p.image.alt}
            width={1440}
            height={810}
            sizes="(min-width: 1280px) 1160px, 100vw"
          />
        </div>
      )}
      <div className="case-layout">
        <aside className="case-aside">
          <p className="case-nav-title">In this project</p>
          <nav aria-label="Case study sections">
            <a href="#context">The context</a>
            <a href="#responsibility">My responsibility</a>
            <a href="#implementation">The implementation</a>
            <a href="#outcome">The outcome</a>
            {study.considerations.length > 0 && (
              <a href="#considerations">Engineering considerations</a>
            )}
          </nav>
        </aside>
        <div className="case-body">
          <section id="context">
            <h2>The context</h2>
            <p>{study.situation}</p>
          </section>
          <section id="responsibility">
            <h2>My responsibility</h2>
            <p>{study.task}</p>
          </section>
          <section id="implementation">
            <h2>The implementation</h2>
            <ul>
              {study.actions.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </section>
          <section id="outcome">
            <h2>The outcome</h2>
            <p>{study.result}</p>
            <div className="case-actions">
              {p.links.repository && (
                <a
                  href={p.links.repository}
                  className="button button-secondary"
                >
                  View source <FiArrowUpRight aria-hidden="true" />
                </a>
              )}
              {p.links.live && (
                <a href={p.links.live} className="button button-primary">
                  {p.slug === "sustain" ? "Chrome Web Store" : "Visit project"}
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              )}
              {p.links.reference && (
                <a href={p.links.reference} className="text-link">
                  View on LinkedIn <FiArrowUpRight aria-hidden="true" />
                </a>
              )}
            </div>
          </section>
          {study.considerations.length > 0 && (
            <section id="considerations">
              <h2>Engineering considerations</h2>
              <ul>
                {study.considerations.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
      <div className="case-next">
        <span className="muted">Next project</span>
        <Link className="text-link" href={`/projects/${next.slug}`}>
          {next.title}
          <FiArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </Container>
  );
}
