"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useContact } from "@/components/portfolio/contact/contact-context";

const links = [
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/stack", label: "Stack" },
  { href: "/about", label: "About" },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navigation() {
  const pathname = usePathname();
  const { openContact } = useContact();
  const contactTriggerRef = useRef<HTMLButtonElement>(null);

  return (
    <header className="portfolio-nav">
      <Link className="portfolio-nav__identity" href="/" aria-label="David Ogbaki home">
        <span>DAVID</span>
        <span>OGBAKI</span>
      </Link>

      <nav aria-label="Primary navigation">
        <ul className="portfolio-nav__links">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                className="portfolio-nav__link"
                data-active={isActive(pathname, link.href)}
                href={link.href}
                aria-current={isActive(pathname, link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <button ref={contactTriggerRef} className="portfolio-nav__link portfolio-nav__link--contact" type="button" onClick={(event) => openContact(event.currentTarget)}>
              Contact <ArrowUpRight className="portfolio-arrow" aria-hidden="true" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
