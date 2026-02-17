import Link from "next/link";
import Navbar, { NAVBAR_HEIGHT_CLASS, ColorScheme } from "@/components/Navbar";
import Footer from "@/components/Footer";

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
];

const idealClients = [
  "Founders with validated ideas",
  "SMEs rebuilding or upgrading systems",
  "Businesses that value clean execution",
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
              We're a focused team of developers who build business websites that actually work. Too many businesses treat their website as decoration. We treat it as part of the business system, built to communicate clearly, automate where it matters, and support real growth.
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

        {/* Our Standards Section — WHITE SECTION */}
        <section className="w-full px-6 py-24 sm:py-32 bg-white">
          <div className="w-full max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-black text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center mb-8">
              Our Standards
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#FFFF3A] text-center max-w-2xl mx-auto leading-relaxed mb-16">
              We hold ourselves to high standards in everything we deliver.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-xl border border-black/10 bg-[#FFFF3A]/10 backdrop-blur-sm p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
                >
                  <h3 className="font-display font-semibold text-black text-lg sm:text-xl tracking-tight mb-3">
                    {principle.title}
                  </h3>
                  <p className="font-sans text-black/85 text-[15px] sm:text-base leading-relaxed">
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

            <ul className="space-y-4 font-sans text-black/85 text-base sm:text-lg leading-relaxed">
              {idealClients.map((client) => (
                <li key={client} className="flex gap-3">
                  <span className="text-black/60 shrink-0 mt-1" aria-hidden>•</span>
                  <span>{client}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Soft CTA Section — WHITE SECTION */}
        <section className="w-full px-6 py-20 sm:py-28 bg-white border-t border-black/10">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-black text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
              If This Sounds Like a Good Fit
            </h2>
            <p className="mt-6 font-sans text-base sm:text-lg text-[#FFFF3A] leading-relaxed max-w-2xl mx-auto">
              Let's start a conversation
            </p>
            <p className="mt-4 font-sans text-base sm:text-lg text-black/70 leading-relaxed max-w-2xl mx-auto">
              We work with teams who value clarity, quality, and straightforward collaboration. If that aligns with how you operate, reach out.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-sans text-base font-medium px-8 py-4 rounded-lg bg-[#212121] text-white hover:bg-black transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#212121] focus:ring-offset-2"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
