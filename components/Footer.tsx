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
                                    href="mailto:hello@sgwebsitebuilder.com"
                                    className="hover:text-[#212121] hover:underline transition-all"
                                >
                                    hello@sgwebsitebuilder.com
                                </a>
                            </p>
                            <p className="font-sans text-[#212121]/70 text-sm">
                                Singapore
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
