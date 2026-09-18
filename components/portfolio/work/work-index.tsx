import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content/projects";
import { ProjectRow } from "@/components/portfolio/work/project-row";

export function WorkIndex() {
  return (
    <section className="work-page" aria-labelledby="work-index-title">
      <header className="work-index__header">
        <p className="route-placeholder__index">02 / WORK</p>
        <h1 id="work-index-title">Selected work</h1>
        <p>Systems, interfaces, and delivery across applied software work.</p>
      </header>
      <ol className="project-index" aria-label="Projects">
        {projects.map((project) => <ProjectRow key={project.slug} project={project} />)}
      </ol>
      <Link className="text-link work-index__back" href="/">
        Return home <ArrowUpRight className="portfolio-arrow" aria-hidden="true" />
      </Link>
    </section>
  );
}
