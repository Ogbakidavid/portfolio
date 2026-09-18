"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ContactBusinessForm } from "@/components/portfolio/contact/contact-business-form";
import { ContactMessageForm } from "@/components/portfolio/contact/contact-message-form";

type ContactMode = "business" | "message";

export function ContactPanel({ open, onClose, triggerRef }: { open: boolean; onClose: () => void; triggerRef: React.RefObject<HTMLElement | null> }) {
  const panelRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);
  const reducedMotion = useReducedMotion();
  const [mode, setMode] = useState<ContactMode>("business");
  useEffect(() => {
    if (!open) {
      if (wasOpen.current) triggerRef.current?.focus();
      wasOpen.current = false;
      return;
    }
    wasOpen.current = true;
    const overflow = document.body.style.overflow;
    const padding = document.body.style.paddingRight;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbar) document.body.style.paddingRight = `${scrollbar}px`;
    requestAnimationFrame(() => closeRef.current?.focus());
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); onClose(); return; }
      if (event.key !== "Tab" || !panelRef.current) return;
      const items = panelRef.current.querySelectorAll<HTMLElement>("button, input, textarea, [tabindex]:not([tabindex='-1'])");
      if (!items.length) return;
      const first = items[0]; const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => { document.removeEventListener("keydown", onKeyDown); document.body.style.overflow = overflow; document.body.style.paddingRight = padding; };
  }, [onClose, open, triggerRef]);
  return <AnimatePresence>{open && <motion.div className="contact-panel-layer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={reducedMotion ? { duration: 0 } : { duration: 0.32 }}>
    <button className="contact-panel__backdrop" type="button" aria-label="Close contact panel" onClick={onClose} />
    <motion.aside ref={panelRef} className="contact-panel" role="dialog" aria-modal="true" aria-labelledby="contact-panel-title" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={reducedMotion ? { duration: 0 } : { duration: 0.48, ease: [0.22, 1, 0.36, 1] }}>
      <div className="contact-panel__header"><div><p className="contact-panel__index">06 / CONTACT</p><h2 id="contact-panel-title">Let&apos;s work together.</h2></div><button ref={closeRef} className="contact-panel__close" type="button" onClick={onClose}>Close <span aria-hidden="true">×</span></button></div>
      <div className="contact-panel__modes" role="tablist" aria-label="Contact mode"><button type="button" role="tab" aria-selected={mode === "business"} className={mode === "business" ? "is-active" : ""} onClick={() => setMode("business")}>Business</button><button type="button" role="tab" aria-selected={mode === "message"} className={mode === "message" ? "is-active" : ""} onClick={() => setMode("message")}>Message</button></div>
      <div className="contact-panel__body">{mode === "business" ? <ContactBusinessForm /> : <ContactMessageForm />}</div>
    </motion.aside>
  </motion.div>}</AnimatePresence>;
}
