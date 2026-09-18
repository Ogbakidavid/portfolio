"use client";

import { useState, type FormEvent } from "react";
import { contactDestinations } from "@/lib/content/contact";

const projectTypes = ["Dev Project", "Business Automation", "AI & Automation"] as const;

export function ContactBusinessForm() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const toggle = (type: string) => {
    setSelectedTypes((current) => current.includes(type) ? current.filter((item) => item !== type) : [...current, type]);
    setErrors((current) => ({ ...current, projectType: "" }));
  };
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.currentTarget;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
    setDescription(textarea.value);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (!selectedTypes.length) next.projectType = "Select at least one project type.";
    if (!name.trim()) next.name = "Enter your name.";
    if (!description.trim()) next.description = "Tell me a little about your project.";
    setErrors(next);
    if (Object.keys(next).length) return;
    const message = ["Hello David,", "", "I'd like to discuss a project.", "", "Project type:", selectedTypes.join("\n"), "", "Name:", name.trim(), "", "Project:", description.trim()].join("\n");
    const url = `https://wa.me/${contactDestinations.whatsapp}?text=${encodeURIComponent(message)}`;
    const popup = window.open(url, "_blank", "noopener,noreferrer");
    if (!popup) window.location.href = url;
  };
  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <fieldset className="contact-form__fieldset" aria-describedby={errors.projectType ? "business-project-type-error" : undefined}>
        <legend>What kind of project?</legend>
        <div className="contact-form__options">
          {projectTypes.map((type) => <label className="contact-form__option" key={type}><input type="checkbox" name="projectType" value={type} checked={selectedTypes.includes(type)} onChange={() => toggle(type)} /><span>{type}</span></label>)}
        </div>
        {errors.projectType && <p className="contact-form__error" id="business-project-type-error">{errors.projectType}</p>}
      </fieldset>
      <div className="contact-form__field"><label htmlFor="business-name">What&apos;s your name?</label><input id="business-name" name="name" type="text" value={name} onChange={(event) => setName(event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "business-name-error" : undefined} required />{errors.name && <p className="contact-form__error" id="business-name-error">{errors.name}</p>}</div>
      <div className="contact-form__field"><label htmlFor="business-description">Tell me about your project</label><textarea className="contact-form__autosize" id="business-description" name="description" rows={1} value={description} onChange={handleDescriptionChange} aria-invalid={Boolean(errors.description)} aria-describedby={errors.description ? "business-description-error" : undefined} required />{errors.description && <p className="contact-form__error" id="business-description-error">{errors.description}</p>}</div>
      <button className="contact-form__submit" type="submit"><span>Send</span><span aria-hidden="true">→</span></button>
    </form>
  );
}
