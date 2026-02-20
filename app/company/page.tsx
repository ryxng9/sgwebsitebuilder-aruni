import Link from "next/link";
import Navbar, { NAVBAR_HEIGHT_CLASS, ColorScheme } from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroWave from "@/components/HeroWave";
import { Rocket, Building2, Sparkles } from "lucide-react";

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
  {
    icon: Rocket,
    title: "Founders with validated ideas",
    description: "Entrepreneurs who have proven their concept and are ready to build a scalable web presence that supports growth and customer acquisition.",
  },
  {
    icon: Building2,
    title: "SMEs rebuilding or upgrading systems",
    description: "Established businesses looking to modernize their digital infrastructure with clean, maintainable solutions that improve efficiency and user experience.",
  },
  {
    icon: Sparkles,
    title: "Businesses that value clean execution",
    description: "Organizations that prioritize quality code, proper architecture, and long-term maintainability over quick fixes and shortcuts.",
  },
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
        <section
          className="h-screen flex flex-col px-6 relative overflow-hidden"
          aria-label="Hero"
        >
          {/* Spacer for fixed navbar */}
          <div className={NAVBAR_HEIGHT_CLASS} aria-hidden="true" />
        
          {/* Collaboration text */}
          <div className="w-full text-center pt-4">
            <p className="font-sans text-sm text-black/60">
              In collaboration with{" "}
              <a
                href="https://www.retroxpect.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-medium hover:text-[#FFFF3A] transition-colors duration-200"
              >
                retroXpect
              </a>
            </p>
          </div>
        
          {/* Content area — fills remaining space and centers */}
          <div className="flex-1 flex items-center justify-center pb-32">
            <div className="w-full max-w-4xl mx-auto text-center">
              <h1 className="font-display font-bold text-black text-4xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight mb-8 animate-fadeInUp">
                Who We Are
              </h1>
              
              <p className="font-sans text-base sm:text-lg text-black/85 leading-relaxed max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
                We're a focused team of developers who build business websites that actually work. Too many businesses treat their website as decoration. We treat it as part of the business system, built to communicate clearly, automate where it matters, and support real growth.
              </p>
            </div>
          </div>
        
          {/* Animated Wave */}
          <HeroWave />
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

        {/* Our Standards Section — BLACK SECTION */}
        <section className="w-full px-6 py-24 sm:py-32 bg-[#212121]">
          <div className="w-full max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center mb-8">
              Our Standards
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#FFFF3A] text-center max-w-2xl mx-auto leading-relaxed mb-16">
              We hold ourselves to high standards in everything we deliver.
            </p>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
                >
                  <h3 className="font-display font-semibold text-white text-xl sm:text-2xl tracking-tight mb-4">
                    {principle.title}
                  </h3>
                  <p className="font-sans text-white/75 text-[15px] sm:text-base leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Work Best With Section */}
        <section className="w-full px-6 py-24 sm:py-32 bg-white/30">
          <div className="w-full max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-black text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center mb-16">
              Who We Work Best With
            </h2>

            <div className="rounded-2xl border border-black/20 bg-white/60 backdrop-blur-sm p-8 lg:p-12 shadow-lg">
              <div className="space-y-8">
                {idealClients.map((client, index) => {
                  const Icon = client.icon;
                  return (
                    <div key={client.title}>
                      <div className="flex gap-6 items-start">
                        <div className="shrink-0">
                          <Icon className="w-8 h-8 text-black" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display font-semibold text-black text-xl sm:text-2xl tracking-tight mb-3">
                            {client.title}
                          </h3>
                          <p className="font-sans text-black/75 text-base leading-relaxed">
                            {client.description}
                          </p>
                        </div>
                      </div>
                      {index < idealClients.length - 1 && (
                        <div className="mt-8 border-t border-black/10" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Soft CTA Section — WHITE SECTION */}
        <section className="w-full px-6 py-20 sm:py-28 bg-[#212121] border-t border-white/10">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
              If This Sounds Like a Good Fit
            </h2>
            <p className="mt-6 font-sans text-base sm:text-lg text-[#FFFF3A] leading-relaxed max-w-2xl mx-auto">
              Let's start a conversation
            </p>
            <p className="mt-4 font-sans text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              We work with teams who value clarity, quality, and straightforward collaboration. If that aligns with how you operate, reach out.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-sans text-base font-medium px-8 py-4 rounded-lg bg-white text-black hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
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
