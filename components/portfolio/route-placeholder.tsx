import Link from "next/link";

export function RoutePlaceholder({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <section className="route-placeholder" aria-labelledby="route-title">
      <p className="route-placeholder__index">{index}</p>
      <h1 id="route-title">{title}</h1>
      <p>This view is structurally ready for a later implementation phase.</p>
      <Link className="text-link" href="/">
        Return home
      </Link>
    </section>
  );
}
