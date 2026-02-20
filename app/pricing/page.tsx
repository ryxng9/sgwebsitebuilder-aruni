import Link from "next/link";
import Navbar, { NAVBAR_HEIGHT_CLASS, ColorScheme } from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroWave from "@/components/HeroWave";

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
    price: "Starting from $15,000+",
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
          <HeroWave />
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
        <section className="w-full px-6 py-24 sm:py-32 bg-[#212121]">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center mb-8">
              Typical Project Ranges
            </h2>
            <p className="font-sans text-base sm:text-lg text-white/75 text-center max-w-2xl mx-auto leading-relaxed mb-16">
              Projects are priced based on scope and complexity. These are general ranges.
            </p>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              {pricingCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
                >
                  <h3 className="font-display font-semibold text-white text-xl sm:text-2xl tracking-tight mb-4">
                    {card.title}
                  </h3>
                  <div className="font-display font-bold text-[#FFFF3A] text-2xl sm:text-3xl mb-6">
                    {card.price}
                  </div>
                  <p className="font-sans text-white/85 text-[15px] sm:text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Affects Cost Section — BLACK SECTION */}
        <section className="w-full px-6 py-24 sm:py-32 bg-[#212121]">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center mb-8">
              What Affects Cost
            </h2>
            <p className="font-sans text-base sm:text-lg text-white/75 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              Several factors influence project pricing.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-md">
                <div className="text-2xl mb-3">🎯</div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">Scope Clarity</h3>
                <p className="font-sans text-white/70 text-sm leading-relaxed">Well-defined requirements lead to accurate estimates</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-md">
                <div className="text-2xl mb-3">🔌</div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">Number of Integrations</h3>
                <p className="font-sans text-white/70 text-sm leading-relaxed">Third-party services and API connections</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-md">
                <div className="text-2xl mb-3">⚙️</div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">Custom Functionality</h3>
                <p className="font-sans text-white/70 text-sm leading-relaxed">Unique features tailored to your needs</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-md">
                <div className="text-2xl mb-3">⏱️</div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">Timeline Urgency</h3>
                <p className="font-sans text-white/70 text-sm leading-relaxed">Rushed timelines may require additional resources</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-md">
                <div className="text-2xl mb-3">📝</div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">Content Readiness</h3>
                <p className="font-sans text-white/70 text-sm leading-relaxed">Having content prepared speeds up delivery</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-md">
                <div className="text-2xl mb-3">🛟</div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">Ongoing Support</h3>
                <p className="font-sans text-white/70 text-sm leading-relaxed">Maintenance and update requirements</p>
              </div>
            </div>
          </div>
        </section>

        {/* What Happens After You Contact Us Section */}
        <section className="w-full px-6 py-24 sm:py-32 bg-[#212121]">
          <div className="w-full max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center mb-16">
              What Happens After You Reach Out
            </h2>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#FFFF3A]/20 border border-[#FFFF3A]/30 flex items-center justify-center shrink-0">
                      <span className="font-display font-semibold text-white text-lg">
                        {step.number}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-white text-lg sm:text-xl tracking-tight mb-2">
                        {step.title}
                      </h3>
                      <p className="font-sans text-white/75 text-[15px] sm:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Soft CTA Section — WHITE SECTION */}
        <section className="w-full px-6 py-20 sm:py-28 bg-white border-t border-black/10">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-black text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
              If This Aligns With Your Expectations
            </h2>
            <p className="mt-6 font-sans text-base sm:text-lg text-black leading-relaxed max-w-2xl mx-auto">
              Let's start a conversation
            </p>
            <p className="mt-4 font-sans text-base sm:text-lg text-black/70 leading-relaxed max-w-2xl mx-auto">
              We work with teams who value clarity and quality. If you're looking for a development partner who aligns with these principles, reach out.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-sans text-base font-medium px-8 py-4 rounded-lg bg-[#212121] text-white hover:bg-black transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#212121] focus:ring-offset-2"
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
