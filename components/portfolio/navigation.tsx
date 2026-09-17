"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
            <Link
              className="portfolio-nav__link portfolio-nav__link--contact"
              data-active={isActive(pathname, "/contact")}
              href="/contact"
              aria-current={isActive(pathname, "/contact") ? "page" : undefined}
            >
              Contact <span aria-hidden="true">↗</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
