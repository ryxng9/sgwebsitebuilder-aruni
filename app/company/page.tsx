import Link from "next/link";
import Navbar, { NAVBAR_HEIGHT_CLASS, ColorScheme } from "@/components/Navbar";

const principles = [
  {
    title: "Build for scale, not shortcuts",
    description: "We prioritize long-term maintainability over quick fixes. Every decision considers future growth.",
  },
  {
    title: "Clarity before execution",
    description: "We don't start building until requirements are clear. Ambiguity leads to rework.",
  },
  {
    title: "Production-ready means fully deployed",
    description: "A project isn't done until it's live, tested, and handed over with documentation.",
  },
  {
    title: "Clean handover, no lock-in",
    description: "You own everything. Full access to code, hosting, and systems from day one.",
  },
  {
    title: "Respect timelines and scope",
    description: "We commit to realistic timelines and communicate clearly when scope changes.",
  },
];

const idealClients = [
  "Founders with validated ideas",
  "SMEs rebuilding or upgrading systems",
  "Teams with a clear decision-maker",
  "Businesses that value clean execution",
  "Clients who understand development is collaboration",
];

const companyColorScheme: ColorScheme = {
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

export default function Company() {
  return (
    <>
      <Navbar colorScheme={companyColorScheme} />
      <main className="bg-white text-black">
        {/* Hero Section — Who We Are */}
        <section className="w-full px-6 pt-32 sm:pt-40 pb-24 sm:pb-32">
          <div className={NAVBAR_HEIGHT_CLASS} aria-hidden="true" />
          <div className="w-full max-w-4xl mx-auto">
            <h1 className="font-display font-bold text-black text-4xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight mb-8 animate-fadeInUp">
              Who We Are
            </h1>
            
            <p className="font-sans text-base sm:text-lg text-black/85 leading-relaxed max-w-3xl animate-fadeInUp animation-delay-200">
              We're a small, focused development studio. We specialize in implementation, not marketing. We build clean, scalable, production-ready systems for businesses that need them. We care about doing the job properly.
            </p>
          </div>
        </section>

        {/* Why Dev-Only Section */}
        <section className="w-full px-6 py-24 sm:py-32 bg-white/30">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-black text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight mb-12 animate-fadeInUp">
              Why We Focus on Development
            </h2>

            <div className="space-y-6 font-sans text-black/85 text-base sm:text-lg leading-relaxed animate-fadeInUp animation-delay-200">
              <p>
                We don't do branding, ads, or marketing strategy. We believe specialization produces better outcomes. Development is execution, not ideas.
              </p>
              <p>
                By focusing exclusively on implementation, we've built deep expertise in what we do. We prefer depth over offering everything.
              </p>
              <p>
                This focus allows us to deliver systems that work reliably, scale properly, and hand over cleanly.
              </p>
            </div>
          </div>
        </section>

        {/* Our Standards Section */}
        <section className="w-full px-6 py-24 sm:py-32">
          <div className="w-full max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-black text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center mb-16">
              Our Standards
            </h2>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-xl border border-black/20 bg-white/40 backdrop-blur-sm p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
                >
                  <h3 className="font-display font-semibold text-black text-lg sm:text-xl tracking-tight mb-3">
                    {principle.title}
                  </h3>
                  <p className="font-sans text-black/75 text-[15px] sm:text-base leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Work Best With Section */}
        <section className="w-full px-6 py-24 sm:py-32 bg-white/30">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-black text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight mb-12">
              Who We Work Best With
            </h2>

            <ul className="space-y-4 font-sans text-black/85 text-base sm:text-lg leading-relaxed mb-8">
              {idealClients.map((client) => (
                <li key={client} className="flex gap-3">
                  <span className="text-black/60 shrink-0 mt-1" aria-hidden>•</span>
                  <span>{client}</span>
                </li>
              ))}
            </ul>

            <p className="font-sans text-black/75 text-base sm:text-lg leading-relaxed pt-6 border-t border-black/20">
              We work best when expectations are clear and communication is direct.
            </p>
          </div>
        </section>

        {/* Soft CTA Section */}
        <section className="w-full px-6 py-20 sm:py-28">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-black text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
              If This Sounds Like a Good Fit
            </h2>
            <p className="mt-6 font-sans text-base sm:text-lg text-black/75 leading-relaxed max-w-2xl mx-auto">
              We work with teams who value clarity, quality, and straightforward collaboration. If that aligns with how you operate, let's start a conversation.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-sans text-base font-medium px-8 py-4 rounded-lg bg-[#212121] text-white hover:bg-[#212121]/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-white border-t border-black/10" role="contentinfo">
          <div className="w-full max-w-6xl mx-auto px-6 py-16 sm:py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {/* Column 1 – Brand */}
              <div className="space-y-4">
                <h2 className="font-display font-semibold text-black text-lg tracking-tight">
                  SGWebsiteBuilder
                </h2>
                <p className="font-sans text-black/75 text-[15px] leading-relaxed max-w-xs">
                  High-converting websites built for SMEs, founders, and startups.
                </p>
                <p className="font-sans text-black/60 text-sm pt-2">
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
                    <li>
                      <Link href="/" className="font-sans text-black/75 text-[15px] hover:text-black transition-colors">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/services" className="font-sans text-black/75 text-[15px] hover:text-black transition-colors">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/work" className="font-sans text-black/75 text-[15px] hover:text-black transition-colors">
                        Work
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing" className="font-sans text-black/75 text-[15px] hover:text-black transition-colors">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="font-sans text-black/75 text-[15px] hover:text-black transition-colors">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/company" className="font-sans text-black/75 text-[15px] hover:text-black transition-colors">
                        Company
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="font-sans text-black/75 text-[15px] hover:text-black transition-colors">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Column 3 – What We Do */}
              <div className="space-y-4">
                <h3 className="font-display font-semibold text-black text-base tracking-tight">
                  What We Do
                </h3>
                <ul className="space-y-3">
                  <li className="font-sans text-black/75 text-[15px]">
                    Website development
                  </li>
                  <li className="font-sans text-black/75 text-[15px]">
                    Conversion-focused builds
                  </li>
                  <li className="font-sans text-black/75 text-[15px]">
                    Design-ready implementation
                  </li>
                  <li className="font-sans text-black/75 text-[15px]">
                    Scalable production builds
                  </li>
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
                    className="inline-block font-sans text-[15px] font-medium px-5 py-2.5 rounded-lg bg-[#212121] text-white hover:bg-[#212121]/90 transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Start a project
                  </Link>
                  <p className="font-sans text-black/75 text-[15px]">
                    <a
                      href="mailto:hello@sgwebsitebuilder.com"
                      className="hover:text-black transition-colors"
                    >
                      hello@sgwebsitebuilder.com
                    </a>
                  </p>
                  <p className="font-sans text-black/60 text-sm">
                    Singapore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
