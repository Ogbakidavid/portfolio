import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/portfolio/work/project-detail";
import { getProject, getProjectSiblings, projects } from "@/lib/content/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const { previous, next } = getProjectSiblings(project.slug);
  return <ProjectDetail project={project} previous={previous} next={next} />;
}
