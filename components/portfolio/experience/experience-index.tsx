import { experience } from "@/lib/content/profile";

export function ExperienceIndex() {
  return (
    <section className="profile-page experience-page" aria-labelledby="experience-title">
      <header className="profile-page__header">
        <p className="route-placeholder__index">03 / EXPERIENCE</p>
        <h1 id="experience-title">Experience</h1>
        <p>From frontend implementation to broader solutions engineering and technical delivery.</p>
      </header>
      <ol className="experience-index" aria-label="Professional experience">
        {experience.map((entry) => (
          <li className="experience-entry" key={`${entry.company}-${entry.role}`}>
            <div className="experience-entry__topline">
              <span className="experience-entry__number">{entry.number}</span>
              <span className="experience-entry__period">{entry.period}</span>
            </div>
            <div className="experience-entry__content">
              <h2>{entry.role}</h2>
              <p className="experience-entry__company">{entry.company}</p>
              <p className="experience-entry__summary">{entry.summary}</p>
              <div>
                <p className="profile-label">Selected responsibilities / areas</p>
                <ul className="experience-entry__areas">
                  {entry.areas.map((area) => <li key={area}>{area}</li>)}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
