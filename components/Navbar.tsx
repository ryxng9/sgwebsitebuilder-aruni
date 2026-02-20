"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/** Navbar height when at top (6rem). Use for fixed navbar container / hero spacer. */
export const NAVBAR_HEIGHT_CLASS = "h-24";
/** Slightly compressed height when scrolled (5rem). */
const NAVBAR_SCROLLED_HEIGHT_CLASS = "h-20";
/** Padding-top to use for content that sits below the fixed navbar. */
export const NAVBAR_OFFSET_CLASS = "pt-24";

const serviceLinks = [
  { href: "/services/e-commerce", label: "E-commerce" },
  { href: "/services/business-web-design", label: "Business Web Design" },
  { href: "/services/custom-web-development", label: "Custom Web Development" },
  { href: "/services/website-management", label: "Website Management" },
  { href: "/services/seo", label: "SEO" },
];

const defaultNavLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/company", label: "Company" },
];

export type NavLink = { href: string; label: string };

export type ColorScheme = {
  initial: {
    bg: string;
    text: string;
    buttonBg: string;
    buttonText: string;
    buttonHoverBg: string;
  };
  scrolled: {
    bg: string;
    text: string;
    buttonBg: string;
    buttonText: string;
    buttonHoverBg: string;
  };
};

type NavbarProps = {
  brandName?: string;
  brandHref?: string;
  links?: NavLink[];
  contactHref?: string;
  contactLabel?: string;
  className?: string;
  colorScheme?: ColorScheme;
};

const defaultColorScheme: ColorScheme = {
  initial: {
    bg: "bg-[#FFFF3A]",
    text: "text-black",
    buttonBg: "bg-[#212121]",
    buttonText: "text-white",
    buttonHoverBg: "hover:bg-black",
  },
  scrolled: {
    bg: "bg-white",
    text: "text-black",
    buttonBg: "bg-[#212121]",
    buttonText: "text-white",
    buttonHoverBg: "hover:bg-black",
  },
};

export default function Navbar({
  brandName = "SGWebsiteBuilder",
  brandHref = "/",
  links = defaultNavLinks,
  contactHref = "/contact",
  contactLabel = "Contact",
  className = "",
  colorScheme = defaultColorScheme,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  const isCompact = scrolled;
  const colors = isCompact ? colorScheme.scrolled : colorScheme.initial;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 ease-out ${className} ${isCompact
          ? `${NAVBAR_SCROLLED_HEIGHT_CLASS} ${colors.bg}`
          : `${NAVBAR_HEIGHT_CLASS} ${colors.bg}`
          }`}
        role="banner"
      >
        <div className="w-full max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Left: Brand */}
          <Link
            href={brandHref}
            className={`transition-all duration-300 hover:opacity-90 ${isCompact ? 'h-12' : 'h-14'}`}
          >
            <Image
              src="/images/sgwebsitebuilder/sgwb-black-yellowbg.png"
              alt="SGWebsiteBuilder"
              width={isCompact ? 180 : 220}
              height={isCompact ? 48 : 56}
              className="h-full w-auto"
              priority
            />
          </Link>

          {/* Center: Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-sans absolute left-1/2 transform -translate-x-1/2" aria-label="Main">
            {/* Services Dropdown */}
            <div 
              className="relative" 
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/services"
                className={`text-[15px] transition-all duration-300 ${colors.text} hover:underline flex items-center gap-1`}
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-black/10 rounded-lg shadow-xl py-2 z-50">
                  <Link
                    href="/services"
                    className="block px-4 py-2.5 text-[15px] text-black font-medium hover:bg-[#FFFF3A]/10 transition-colors"
                  >
                    Services
                  </Link>
                  <div className="border-t border-black/10 my-2" />
                  {serviceLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block px-4 py-2.5 text-[15px] text-black hover:bg-[#FFFF3A]/10 transition-colors"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-[15px] transition-all duration-300 ${colors.text} hover:underline`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right: Contact Button */}
          <Link
            href={contactHref}
            className={`text-[15px] font-medium px-6 py-2.5 rounded-lg shadow-lg transition-all duration-200 ${colors.buttonBg} ${colors.buttonText} ${colors.buttonHoverBg} hover:shadow-xl hover:-translate-y-0.5`}
          >
            {contactLabel}
          </Link>
        </div>
      </header>
      {/* Sentinel: in-flow element at top; when it leaves viewport, navbar goes compact */}
      <div ref={sentinelRef} className="h-px w-full shrink-0 pointer-events-none" aria-hidden />
    </>
  );
}
