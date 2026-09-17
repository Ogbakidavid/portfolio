import Link from "next/link";
import { Reveal } from "@/components/portfolio/home/reveal";

const projects = [
  { slug: "billam", title: "BillAm", category: "AI systems / operations" },
  { slug: "dayle", title: "Dayle", category: "Settlement / infrastructure" },
  { slug: "aethersearch", title: "AetherSearch", category: "Retrieval / RAG" },
  { slug: "plp-alumni", title: "Power Hub", category: "Peer learning" },
];

export function HomeView() {
  return (
    <div className="home-view">
      <Reveal className="home-view__statement" delay={0.04}>
        <p className="home-view__index">01 / SYSTEMS, INTERFACES, DELIVERY</p>
        <h1>
          I turn complex requirements into working software.
        </h1>
        <p className="home-view__summary">
          Backend engineering, AI/RAG, API integration, and technical
          implementation.
        </p>
        <Reveal className="home-view__positioning" delay={0.2}>
          <p>Technical focus</p>
          <ul>
            <li>Backend systems</li>
            <li>AI / RAG</li>
            <li>APIs &amp; integrations</li>
            <li>Implementation</li>
          </ul>
        </Reveal>
      </Reveal>

      <Reveal className="home-view__work" delay={0.12}>
        <div className="home-view__work-heading">
          <span>Selected work</span>
          <span aria-hidden="true">↘</span>
        </div>
        <ol className="work-entry" aria-label="Selected projects">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link className="work-entry__link" href={`/work/${project.slug}`}>
                <span className="work-entry__number" aria-hidden="true">
                  {String(projects.indexOf(project) + 1).padStart(2, "0")}
                </span>
                <span className="work-entry__title">{project.title}</span>
                <span className="work-entry__category">{project.category}</span>
                <span className="work-entry__arrow" aria-hidden="true">↗</span>
              </Link>
            </li>
          ))}
        </ol>
        <Link className="text-link" href="/work">
          Open work index <span aria-hidden="true">↗</span>
        </Link>
      </Reveal>

      <Reveal className="home-view__footer" delay={0.2}>
        <span>Based in Nigeria</span>
        <Link className="text-link" href="/contact">
          Start a conversation <span aria-hidden="true">↗</span>
        </Link>
      </Reveal>
    </div>
  );
}
