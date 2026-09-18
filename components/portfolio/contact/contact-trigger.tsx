"use client";

import { useContact } from "@/components/portfolio/contact/contact-context";
import { ArrowUpRight } from "lucide-react";

export function ContactTrigger() {
  const { openContact } = useContact();

  return (
    <button className="text-link" type="button" data-cursor="link" onClick={(event) => openContact(event.currentTarget)}>
      Start a conversation <ArrowUpRight className="portfolio-arrow" aria-hidden="true" />
    </button>
  );
}
