import Link from "next/link";
import type { Project } from "@/lib/content/projects";

export function ProjectRow({ project }: { project: Project }) {
  return (
    <li className="project-row">
      <Link className="project-row__link" data-cursor="project" href={`/work/${project.slug}`}>
        <span className="project-row__number">{project.number}</span>
        <span className="project-row__title">{project.title}</span>
        <span className="project-row__category">{project.category}</span>
        <span className="project-row__arrow" aria-hidden="true">↗</span>
      </Link>
    </li>
  );
}
