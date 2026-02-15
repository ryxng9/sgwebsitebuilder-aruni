import Link from "next/link";
import Navbar, { NAVBAR_HEIGHT_CLASS, ColorScheme } from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroWavePricing from "@/components/HeroWavePricing";

const pricingCards = [
  {
    title: "Small Scoped Builds",
    price: "Starting from $3,000",
    description: "Marketing sites, small rebuilds, clearly defined scope with minimal integrations.",
  },
  {
    title: "Medium Builds",
    price: "Starting from $8,000",
    description: "Custom functionality, CMS integration, multi-page sites with moderate complexity.",
  },
  {
    title: "Complex Systems",
    price: "From $15,000+",
    description: "Internal tools, dashboards, API-heavy systems with complex business logic.",
  },
];

const costFactors = [
  "Scope clarity",
  "Number of integrations",
  "Custom functionality requirements",
  "Timeline urgency",
  "Content readiness",
  "Ongoing support requirements",
];

const processSteps = [
  {
    number: "1",
    title: "Intro Call / Alignment",
    description: "We discuss your goals, requirements, and expectations to ensure we're a good fit.",
  },
  {
    number: "2",
    title: "Scope Clarification",
    description: "We define the project scope, deliverables, and technical requirements in detail.",
  },
  {
    number: "3",
    title: "Proposal with Timeline + Pricing",
    description: "You receive a clear proposal outlining timeline, cost, and what's included.",
  },
  {
    number: "4",
    title: "Project Kickoff",
    description: "Once aligned, we begin development with clear milestones and communication.",
  },
];

const pricingColorScheme: ColorScheme = {
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

export default function Pricing() {
  return (
    <>
      <Navbar colorScheme={pricingColorScheme} />
      <main className="bg-white text-black">
        {/* Hero Section */}
        <section
          className="h-screen flex flex-col px-6 relative overflow-hidden"
          aria-label="Hero"
        >
          {/* Spacer for fixed navbar */}
          <div className={NAVBAR_HEIGHT_CLASS} aria-hidden="true" />
        
          {/* Content area — fills remaining space and centers higher */}
          <div className="flex-1 flex items-center justify-center pb-32">
            <div className="w-full max-w-4xl mx-auto text-center">
              <h1 className="font-display font-bold text-black text-4xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight animate-fadeInUp">
                Transparent Pricing
              </h1>
              
              <p className="mt-8 font-sans text-base sm:text-lg text-black/75 max-w-2xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200">
                We price based on scope and complexity. We don't do "cheap and fast." Clear ranges help both sides align on expectations before we begin.
              </p>
            </div>
          </div>
        
          {/* Animated Wave */}
          <HeroWavePricing />
        </section>

        {/* How Pricing Works Section */}
        <section className="w-full px-6 py-24 sm:py-32 bg-white/40">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-black text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center mb-8">
              How Pricing Works
            </h2>
            
            <p className="font-sans text-black/75 text-base sm:text-lg text-center max-w-2xl mx-auto leading-relaxed">
              Projects are scoped individually. Pricing depends on complexity, integrations, and timeline. All projects begin with a scoped estimate based on your specific requirements.
            </p>
          </div>
        </section>

        {/* Typical Project Ranges Section — BLACK SECTION */}
        <section className="w-full px-6 py-24 sm:py-32 bg-black">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center mb-8">
              Typical Project Ranges
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#FFFF3A] text-center max-w-2xl mx-auto leading-relaxed mb-16">
              Projects are priced based on <strong className="font-semibold text-[#FFFF3A]">scope</strong> and <strong className="font-semibold text-[#FFFF3A]">complexity</strong>. These are general ranges.
            </p>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              {pricingCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
                >
                  <h3 className="font-display font-semibold text-white text-xl sm:text-2xl tracking-tight mb-4">
                    {card.title}
                  </h3>
                  <div className="font-display font-bold text-[#FFFF3A] text-2xl sm:text-3xl mb-6">
                    {card.price}
                  </div>
                  <p className="font-sans text-white text-[15px] sm:text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Affects Cost Section — BLACK SECTION */}
        <section className="w-full px-6 py-24 sm:py-32 bg-black">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center mb-8">
              What Affects Cost
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#FFFF3A] text-center max-w-2xl mx-auto leading-relaxed mb-12">
              Several factors influence <strong className="font-semibold text-[#FFFF3A]">project pricing</strong>.
            </p>

            <ul className="space-y-4 font-sans text-white text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {costFactors.map((factor) => (
                <li key={factor} className="flex gap-3">
                  <span className="text-[#FFFF3A] shrink-0 mt-1" aria-hidden>•</span>
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What Happens After You Contact Us Section */}
        <section className="w-full px-6 py-24 sm:py-32">
          <div className="w-full max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-black text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center mb-16">
              What Happens After You Reach Out
            </h2>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-xl border border-black/15 bg-white/60 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#FFFF3A]/20 border border-[#FFFF3A]/30 flex items-center justify-center shrink-0">
                      <span className="font-display font-semibold text-black text-lg">
                        {step.number}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-black text-lg sm:text-xl tracking-tight mb-2">
                        {step.title}
                      </h3>
                      <p className="font-sans text-black/75 text-[15px] sm:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Soft CTA Section — BLACK SECTION */}
        <section className="w-full px-6 py-20 sm:py-28 bg-black">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
              If This Aligns With Your Expectations
            </h2>
            <p className="mt-6 font-sans text-base sm:text-lg text-[#FFFF3A] leading-relaxed max-w-2xl mx-auto">
              Let's start a conversation
            </p>
            <p className="mt-4 font-sans text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              We work with teams who value clarity and quality. If you're looking for a development partner who aligns with these principles, reach out.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-sans text-base font-medium px-8 py-4 rounded-lg bg-[#FFFF3A] text-black hover:bg-[#FFFF3A]/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#FFFF3A] focus:ring-offset-2 focus:ring-offset-black"
              >
                Start a Project
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
