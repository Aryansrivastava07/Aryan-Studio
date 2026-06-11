"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/30 transition-all duration-300 ${isScrolled ? "shadow-sm py-2" : "py-0"}`}
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 max-w-container-max mx-auto">
        <Link
          href="/"
          className="font-headline-md text-headline-md text-primary tracking-tight flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            camera
          </span>
          ARYAN STUDIO
        </Link>

        <nav className="hidden md:flex items-center gap-gutter">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body-md text-label-md uppercase tracking-wider transition-colors hover:opacity-80 duration-300 ${
                  active
                    ? "text-primary font-bold border-b-2 border-primary pb-1"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider h-12 px-6 rounded hover:bg-primary-container transition-colors duration-300 min-h-[48px]"
          >
            Book Now
          </Link>
        </div>

        <button
          className="md:hidden text-primary hover:opacity-80 transition-opacity duration-300 p-2"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          <span className="material-symbols-outlined text-3xl">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden px-margin-mobile pb-stack-md bg-surface/95 border-t border-outline-variant/30">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 font-label-md text-label-md uppercase tracking-wider text-on-surface-variant"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
