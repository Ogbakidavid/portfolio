import Link from "next/link";
import { certifications, education } from "@/lib/content/profile";

export function AboutView() {
  return (
    <section className="profile-page about-page" aria-labelledby="about-title">
      <header className="profile-page__header">
        <p className="route-placeholder__index">05 / ABOUT</p>
        <h1 id="about-title">About</h1>
        <p className="about-page__statement">Frontend Developer, Backend Engineer, and Implementation &amp; Solutions Engineer.</p>
      </header>
      <div className="about-page__grid">
        <section aria-labelledby="focus-title">
          <h2 id="focus-title" className="profile-label">Professional focus</h2>
          <p>I connect software engineering with AI/RAG systems, API integration, business systems, and practical technical implementation.</p>
        </section>
        <section aria-labelledby="about-experience-title">
          <h2 id="about-experience-title" className="profile-label">Experience</h2>
          <p>My work has progressed from frontend implementation into end-to-end enterprise implementation, solution design, automation, and technical delivery.</p>
          <Link className="text-link" href="/experience">View experience <span aria-hidden="true">↗</span></Link>
        </section>
      </div>
      <div className="about-page__supporting">
        <section aria-labelledby="education-title">
          <h2 id="education-title" className="profile-label">Education</h2>
          <div className="about-list">
            {education.map((entry) => <div key={entry.title}><h3>{entry.title}</h3><p>{entry.institution}</p><span>{entry.period}</span></div>)}
          </div>
        </section>
        <section aria-labelledby="certifications-title">
          <h2 id="certifications-title" className="profile-label">Certifications</h2>
          <ul className="about-list about-list--plain">
            {certifications.map((certification) => <li key={certification}>{certification}</li>)}
          </ul>
        </section>
      </div>
    </section>
  );
}
