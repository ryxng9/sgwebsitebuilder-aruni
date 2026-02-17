import Link from "next/link";

const pageLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "/company", label: "Company" },
    { href: "/contact", label: "Contact" },
];

const socialLinks = [
    { href: "https://www.instagram.com", label: "Instagram", icon: "instagram" },
    { href: "https://www.facebook.com", label: "Facebook", icon: "facebook" },
    { href: "https://www.linkedin.com", label: "LinkedIn", icon: "linkedin" },
    { href: "https://www.x.com", label: "X", icon: "x" },
];

const whatWeDo = [
    "Website development",
    "Conversion-focused builds",
    "Design-ready implementation",
    "Scalable production builds",
];

export default function Footer() {
    return (
        <footer
            className="w-full bg-[#FFFF3A] border-t border-black/10"
            role="contentinfo"
        >
            <div className="w-full max-w-6xl mx-auto px-6 py-16 sm:py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Column 1 – Brand */}
                    <div className="space-y-4">
                        <h2 className="font-display font-semibold text-black text-lg tracking-tight">
                            SGWebsiteBuilder
                        </h2>
                        <p className="font-sans text-[#212121] text-[15px] leading-relaxed max-w-xs">
                            High-converting websites built for SMEs, founders, and startups.
                        </p>
                        <p className="font-sans text-[#212121]/70 text-sm pt-2">
                            © 2026 SGWebsiteBuilder
                        </p>
                    </div>

                    {/* Column 2 – Pages */}
                    <div className="space-y-4">
                        <h3 className="font-display font-semibold text-black text-base tracking-tight">
                            Pages
                        </h3>
                        <nav aria-label="Footer navigation">
                            <ul className="space-y-3">
                                {pageLinks.map(({ href, label }) => (
                                    <li key={href}>
                                        <Link
                                            href={href}
                                            className="font-sans text-[#212121] text-[15px] hover:text-[#212121] hover:underline transition-all"
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Column 3 – What We Do */}
                    <div className="space-y-4">
                        <h3 className="font-display font-semibold text-black text-base tracking-tight">
                            What We Do
                        </h3>
                        <ul className="space-y-3">
                            {whatWeDo.map((item) => (
                                <li
                                    key={item}
                                    className="font-sans text-[#212121] text-[15px]"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 – Contact */}
                    <div className="space-y-4">
                        <h3 className="font-display font-semibold text-black text-base tracking-tight">
                            Contact
                        </h3>
                        <div className="space-y-3">
                            <Link
                                href="/contact"
                                className="inline-block font-sans text-[15px] font-medium px-5 py-2.5 rounded-lg bg-black text-white hover:bg-[#212121] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Start a project
                            </Link>
                            <p className="font-sans text-[#212121] text-[15px]">
                                <a
                                    href="mailto:retroxpect@gmail.com"
                                    className="hover:text-[#212121] hover:underline transition-all"
                                >
                                    retroxpect@gmail.com
                                </a>
                            </p>
                            <p className="font-sans text-[#212121] text-[15px]">
                                <a
                                    href="tel:+6596367885"
                                    className="hover:text-[#212121] hover:underline transition-all"
                                >
                                    +65 9636 7885
                                </a>
                            </p>
                            
                            {/* Social Links */}
                            <div className="pt-2">
                                <h4 className="font-display font-semibold text-black text-sm tracking-tight mb-3">
                                    Socials
                                </h4>
                                <div className="flex gap-3">
                                    {socialLinks.map(({ href, label, icon }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-9 h-9 rounded-lg bg-black/10 hover:bg-black/20 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                                            aria-label={label}
                                        >
                                            {icon === 'instagram' && (
                                                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                                </svg>
                                            )}
                                            {icon === 'facebook' && (
                                                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                                </svg>
                                            )}
                                            {icon === 'linkedin' && (
                                                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                                </svg>
                                            )}
                                            {icon === 'x' && (
                                                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                                </svg>
                                            )}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
