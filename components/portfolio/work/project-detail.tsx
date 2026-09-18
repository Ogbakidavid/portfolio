import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content/projects";

function ProjectNavigation({ previous, next }: { previous?: Project; next?: Project }) {
  return (
    <nav className="project-navigation" aria-label="Project navigation">
      <div>
        <span className="project-navigation__label">Previous</span>
        {previous ? (
          <Link href={`/work/${previous.slug}`}>{previous.number} / {previous.title}</Link>
        ) : <span className="project-navigation__disabled">—</span>}
      </div>
      <Link className="text-link" href="/work">Back to work <ArrowUpRight className="portfolio-arrow" aria-hidden="true" /></Link>
      <div className="project-navigation__next">
        <span className="project-navigation__label">Next</span>
        {next ? (
          <Link href={`/work/${next.slug}`}>{next.number} / {next.title}</Link>
        ) : <span className="project-navigation__disabled">—</span>}
      </div>
    </nav>
  );
}

export function ProjectDetail({ project, previous, next }: { project: Project; previous?: Project; next?: Project }) {
  const projectLinks = [
    project.github?.frontend && {
      href: project.github.frontend,
      label: "Frontend",
      group: "GitHub",
    },
    project.github?.backend && {
      href: project.github.backend,
      label: "Backend",
      group: "GitHub",
    },
    project.liveUrl && {
      href: project.liveUrl,
      label: "Live site",
      group: "Project",
    },
  ].filter(Boolean) as { href: string; label: string; group: string }[];

  return (
    <article className="project-detail" aria-labelledby="project-detail-title">
      <header className="project-detail__header">
        <div>
          <p className="route-placeholder__index">{project.number} / {project.category}</p>
          <h1 id="project-detail-title">{project.title}</h1>
          <p className="project-detail__summary">{project.shortDescription}</p>
        </div>
        <div className={`project-detail__signal project-detail__signal--${project.visualMode}`} aria-label={`${project.title} system themes`}>
          {project.visualLanguage.map((label) => <span key={label}>{label}</span>)}
        </div>
      </header>

      <dl className="project-detail__meta">
        <div><dt>Context</dt><dd>{project.category}</dd></div>
        {project.status && <div><dt>Status</dt><dd>{project.status}</dd></div>}
        <div><dt>Technology</dt><dd>{project.technologies.slice(0, 3).join(" · ")}</dd></div>
      </dl>

      {projectLinks.length > 0 && (
        <nav className="project-links" aria-label={`${project.title} links`}>
          <span className="project-links__label">Project links</span>
          <div className="project-links__items">
            {projectLinks.map(({ href, label, group }) => (
              <a
                key={`${group}-${label}`}
                data-cursor="external"
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${group} ${label} for ${project.title} (opens in a new tab)`}
              >
                {group === "GitHub" && <span className="project-links__group">GitHub</span>}{label} <ArrowUpRight className="portfolio-arrow" aria-hidden="true" />
              </a>
            ))}
          </div>
        </nav>
      )}

      <div className="project-detail__body">
        <section aria-labelledby="project-overview-title">
          <h2 id="project-overview-title">Overview</h2>
          <p>{project.overview}</p>
        </section>
        <section aria-labelledby="project-approach-title">
          <h2 id="project-approach-title">System / approach</h2>
          <p>{project.systemApproach}</p>
        </section>
        {project.contribution && <section aria-labelledby="project-contribution-title">
          <h2 id="project-contribution-title">Documented contribution</h2>
          <p>{project.contribution}</p>
        </section>}
        <section aria-labelledby="project-technology-title">
          <h2 id="project-technology-title">Technology</h2>
          <ul className="project-detail__technology">
            {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        </section>
        {project.notes && <section aria-labelledby="project-notes-title">
          <h2 id="project-notes-title">Status / notes</h2>
          <p>{project.notes}</p>
        </section>}
      </div>
      <ProjectNavigation previous={previous} next={next} />
    </article>
  );
}
