import { stackGroups } from "@/lib/content/profile";

export function StackIndex() {
  return (
    <section className="profile-page stack-page" aria-labelledby="stack-title">
      <header className="profile-page__header">
        <p className="route-placeholder__index">04 / STACK</p>
        <h1 id="stack-title">Stack</h1>
        <p>Technologies, platforms, and implementation capabilities used across the work.</p>
      </header>
      <div className="stack-index">
        {stackGroups.map((group) => (
          <section className="stack-group" key={group.name} aria-labelledby={`stack-${group.name}`}>
            <h2 id={`stack-${group.name}`}>{group.name}</h2>
            <ul>
              {group.items.map((item) => <li key={item}><span>{item}</span></li>)}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
