"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ShoppingCart, BriefcaseBusiness, FolderCode, Wrench, Search, Palette } from "lucide-react";

/** Navbar height when at top (6rem). Use for fixed navbar container / hero spacer. */
export const NAVBAR_HEIGHT_CLASS = "h-24";
/** Slightly compressed height when scrolled (5rem). */
const NAVBAR_SCROLLED_HEIGHT_CLASS = "h-20";
/** Padding-top to use for content that sits below the fixed navbar. */
export const NAVBAR_OFFSET_CLASS = "pt-24";

const serviceLinks = [
  { href: "/services/e-commerce", label: "E-commerce", icon: ShoppingCart, description: "Build powerful online stores" },
  { href: "/services/business-web-design", label: "Business Web Design", icon: BriefcaseBusiness, description: "Professional websites for businesses" },
  { href: "/services/custom-web-development", label: "Custom Web Development", icon: FolderCode, description: "Tailored web solutions" },
  { href: "/services/website-management", label: "Website Management", icon: Wrench, description: "Ongoing maintenance & support" },
  { href: "/services/seo", label: "SEO", icon: Search, description: "Improve search rankings" },
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
  const colors = colorScheme.initial; // Always use initial colors

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 ease-out border-b border-black/10 ${className} ${isCompact
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
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white border border-black/10 rounded-xl shadow-2xl p-6 z-50 opacity-0 animate-fadeIn">
                  <style jsx>{`
                    @keyframes fadeIn {
                      to {
                        opacity: 1;
                      }
                    }
                    .animate-fadeIn {
                      animation: fadeIn 0.15s ease-out forwards;
                    }
                  `}</style>
                  <div className="mb-4">
                    <h3 className="font-display font-bold text-black text-lg mb-1">Our Services</h3>
                    <p className="text-sm text-black/60">Comprehensive web solutions for your business</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {serviceLinks.map(({ href, label, icon: Icon, description }) => (
                      <Link
                        key={href}
                        href={href}
                        className="group flex items-start gap-3 p-4 rounded-lg hover:bg-[#FFFF3A] transition-all duration-200 border border-transparent hover:border-[#FFFF3A]"
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          <Icon className="w-5 h-5 text-black/70 group-hover:text-black transition-colors" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-sans font-medium text-black text-sm mb-0.5 group-hover:text-black transition-colors">
                            {label}
                          </div>
                          <div className="font-sans text-xs text-black/60 leading-relaxed">
                            {description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-black/10">
                    <Link
                      href="/services"
                      className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-black/5 hover:bg-[#FFFF3A] transition-colors text-sm font-medium text-black"
                    >
                      <Palette className="w-4 h-4" />
                      View All Services
                    </Link>
                  </div>
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
