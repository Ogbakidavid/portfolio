import Link from "next/link";

export default async function ProjectPlaceholderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <section className="route-placeholder" aria-labelledby="project-title">
      <p className="route-placeholder__index">WORK / PROJECT</p>
      <h1 id="project-title">{slug.replaceAll("-", " ")}</h1>
      <p>Project detail presentation will be added in a later phase.</p>
      <Link className="text-link" href="/work">
        Back to work
      </Link>
    </section>
  );
}
