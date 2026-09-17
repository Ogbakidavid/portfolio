import Link from "next/link";

export default function WorkNotFound() {
  return (
    <section className="route-placeholder" aria-labelledby="work-not-found-title">
      <p className="route-placeholder__index">WORK / NOT FOUND</p>
      <h1 id="work-not-found-title">No such project.</h1>
      <p>The requested project is not part of the current work index.</p>
      <Link className="text-link" href="/work">Back to work <span aria-hidden="true">↗</span></Link>
    </section>
  );
}
