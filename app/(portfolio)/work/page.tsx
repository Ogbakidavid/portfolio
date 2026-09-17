import Link from "next/link";

export default function WorkPage() {
  return (
    <section className="route-placeholder" aria-labelledby="work-title">
      <p className="route-placeholder__index">02 / WORK</p>
      <h1 id="work-title">Work index coming next.</h1>
      <p>
        The full project index is intentionally reserved for the next approved
        implementation phase.
      </p>
      <Link className="text-link" href="/">
        Return home
      </Link>
    </section>
  );
}
