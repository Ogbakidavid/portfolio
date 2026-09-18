"use client";

import { useContact } from "@/components/portfolio/contact/contact-context";

export function ContactTrigger() {
  const { openContact } = useContact();

  return (
    <button className="text-link" type="button" data-cursor="link" onClick={(event) => openContact(event.currentTarget)}>
      Start a conversation <span aria-hidden="true">↗</span>
    </button>
  );
}
