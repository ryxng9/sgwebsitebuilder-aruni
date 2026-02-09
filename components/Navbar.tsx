"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/** Navbar height when at top (5rem). Use for fixed navbar container / hero spacer. */
export const NAVBAR_HEIGHT_CLASS = "h-20";
/** Slightly compressed height when scrolled (4rem). */
const NAVBAR_SCROLLED_HEIGHT_CLASS = "h-16";
/** Padding-top to use for content that sits below the fixed navbar. */
export const NAVBAR_OFFSET_CLASS = "pt-20";

const defaultNavLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/work", label: "Work" },
];

export type NavLink = { href: string; label: string };

type NavbarProps = {
  brandName?: string;
  brandHref?: string;
  links?: NavLink[];
  contactHref?: string;
  contactLabel?: string;
  className?: string;
};

export default function Navbar({
  brandName = "SGWebsiteBuilder",
  brandHref = "/",
  links = defaultNavLinks,
  contactHref = "/contact",
  contactLabel = "Contact",
  className = "",
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0,
      }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const isCompact = scrolled;

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 ease-out ${className} ${
        isCompact
          ? `${NAVBAR_SCROLLED_HEIGHT_CLASS} bg-beige-cream`
          : `${NAVBAR_HEIGHT_CLASS} bg-brown-red`
      }`}
      role="banner"
    >
      <div className="w-full max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link
          href={brandHref}
          className={`font-display tracking-tight transition-all duration-300 ${
            isCompact
              ? "text-brown-red hover:opacity-90 text-lg"
              : "text-beige-cream hover:opacity-90 text-xl"
          }`}
        >
          {brandName}
        </Link>
        <nav className="flex items-center gap-8 sm:gap-10 font-sans" aria-label="Main">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-[15px] transition-all duration-300 ${
                isCompact
                  ? "text-brown-red hover:opacity-90"
                  : "text-beige-cream hover:opacity-90"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href={contactHref}
            className={`text-[15px] font-medium px-5 py-2 rounded-lg transition-all duration-300 ${
              isCompact
                ? "bg-brown-red text-beige-cream hover:bg-brown-red/90"
                : "py-2.5 bg-beige-cream text-brown-red hover:bg-pink-cream"
            }`}
          >
            {contactLabel}
          </Link>
        </nav>
      </div>
    </header>
    {/* Sentinel: in-flow element at top; when it leaves viewport, navbar goes compact */}
    <div ref={sentinelRef} className="h-px w-full shrink-0 pointer-events-none" aria-hidden />
    </>
  );
}
