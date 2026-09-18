"use client";

import { useState, type FormEvent } from "react";
import { contactDestinations } from "@/lib/content/contact";

export function ContactMessageForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Enter your name.";
    if (!email.trim()) next.email = "Enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(email.trim())) next.email = "Enter a valid email address.";
    if (!message.trim()) next.message = "Write a message before sending.";
    setErrors(next);
    if (Object.keys(next).length) return;
    const body = [`Name: ${name.trim()}`, `Email: ${email.trim()}`, "", "Message:", message.trim()].join("\n");
    window.location.href = `mailto:${contactDestinations.email}?subject=${encodeURIComponent("Portfolio inquiry")}&body=${encodeURIComponent(body)}`;
  };
  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__field"><label htmlFor="message-name">What&apos;s your name?</label><input id="message-name" name="name" type="text" value={name} onChange={(event) => setName(event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "message-name-error" : undefined} required />{errors.name && <p className="contact-form__error" id="message-name-error">{errors.name}</p>}</div>
      <div className="contact-form__field"><label htmlFor="message-email">What&apos;s your email?</label><input id="message-email" name="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "message-email-error" : undefined} required />{errors.email && <p className="contact-form__error" id="message-email-error">{errors.email}</p>}</div>
      <div className="contact-form__field"><label htmlFor="message-body">What do you want to say?</label><textarea id="message-body" name="message" rows={6} value={message} onChange={(event) => setMessage(event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-body-error" : undefined} required />{errors.message && <p className="contact-form__error" id="message-body-error">{errors.message}</p>}</div>
      <button className="contact-form__submit" type="submit">Send <span aria-hidden="true">↗</span></button>
    </form>
  );
}
