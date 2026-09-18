"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";
import { ContactPanel } from "@/components/portfolio/contact/contact-panel";

type ContactContextValue = {
  openContact: (trigger?: HTMLElement | null) => void;
};

const ContactContext = createContext<ContactContextValue | null>(null);

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);
  const openContact = useCallback((trigger?: HTMLElement | null) => {
    triggerRef.current = trigger ?? null;
    setOpen(true);
  }, []);
  const closeContact = useCallback(() => setOpen(false), []);

  return (
    <ContactContext.Provider value={{ openContact }}>
      {children}
      <ContactPanel open={open} onClose={closeContact} triggerRef={triggerRef} />
    </ContactContext.Provider>
  );
}

export function useContact() {
  const context = useContext(ContactContext);
  if (!context) throw new Error("useContact must be used within ContactProvider");
  return context;
}
