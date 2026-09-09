import Image from "next/image";
import Link from "next/link";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InteractiveAccent } from "@/components/ui/InteractiveAccent";
import { ProjectCard } from "@/features/projects/ProjectCard";
import { getFeaturedProjects } from "@/features/projects/selectors";
import { profile } from "@/content/profile";
export default function Home() {
 return <><Container><section className="hero" aria-labelledby="hero-title"><div className="hero-top"><p className="eyebrow"><span className="status-dot" /> SOFTWARE DEVELOPER</p><p className="hero-location">INDIA / PORTFOLIO 03</p></div><div className="hero-heading"><h1 id="hero-title">Thoughtful interfaces.<br /><span className="accent">Dependable systems.</span></h1><InteractiveAccent /></div><div className="hero-bottom"><p>I’m <strong>Tharun Kumarr A.</strong><br />{profile.introduction}</p><div className="hero-actions"><Link className="button button-primary" href="/projects">Explore my work <FiArrowUpRight aria-hidden="true" /></Link><Link className="text-link" href="/resume">View résumé <FiArrowUpRight aria-hidden="true" /></Link></div></div><div className="hero-footnote"><span>Currently · Analyst at Goldman Sachs</span><a href="#selected-work">SCROLL TO EXPLORE <FiArrowDown aria-hidden="true" /></a></div></section>
 <section id="selected-work" className="section-space" aria-labelledby="work-heading"><SectionHeading number="01 / SELECTED WORK" title="Ideas, put into practice." id="work-heading"><Link className="text-link" href="/projects">All projects <FiArrowUpRight aria-hidden="true" /></Link></SectionHeading><div className="selected-projects">{getFeaturedProjects().map((p,index) => <ProjectCard key={p.slug} project={p} index={index} />)}</div></section>
 <section className="about-teaser section-space" aria-labelledby="about-heading"><div className="portrait-wrap"><Image src="/images/tharun.webp" width={760} height={760} alt="Tharun Kumarr A" sizes="(min-width: 768px) 35vw, 100vw" /><span className="portrait-caption">A LITTLE ABOUT THE PERSON</span></div><div><p className="eyebrow">02 / BEYOND THE CODE</p><h2 id="about-heading">Curious by nature.<br />A builder by choice.</h2><p className="muted">{profile.about}</p><p className="muted">Outside development: space, drums, football, and a good book.</p><Link className="text-link" href="/about">More about me <FiArrowUpRight aria-hidden="true" /></Link></div></section>
 <section className="current-strip" aria-labelledby="now-heading"><div><p className="eyebrow">03 / RIGHT NOW</p><h2 id="now-heading">Building tools. Improving workflows.</h2></div><div><p>{profile.now}</p><Link className="text-link" href="/experience">Explore my experience <FiArrowUpRight aria-hidden="true" /></Link></div></section></Container></>;
}
