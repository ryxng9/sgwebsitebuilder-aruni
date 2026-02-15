import Link from "next/link";
import Navbar, { NAVBAR_HEIGHT_CLASS, ColorScheme } from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroWaveServices from "@/components/HeroWaveServices";

const heroCards = [
  {
    title: "Architecture & Setup",
    description: "Foundation planning, tech stack selection, and project scaffolding for scalable growth.",
  },
  {
    title: "Implementation",
    description: "Clean, production-grade code built with performance, maintainability, and best practices in mind.",
  },
  {
    title: "Integrations",
    description: "Seamless connection of third-party tools, APIs, and services that power your business.",
  },
  {
    title: "Deployment & Handover",
    description: "Launch-ready delivery with documentation, hosting setup, and knowledge transfer.",
  },
];

const timelineBlocks = [
  {
    title: "Small Scoped Builds",
    timeframe: "2–4 weeks",
    items: [
      "Marketing websites",
      "Simple rebuilds",
      "Clearly defined scope",
    ],
  },
  {
    title: "Medium Builds",
    timeframe: "4–8 weeks",
    items: [
      "Custom functionality",
      "CMS integration",
      "Multi-page structured sites",
      "Moderate integrations",
    ],
  },
  {
    title: "Larger / Complex Systems",
    timeframe: "8–12+ weeks",
    items: [
      "Internal tools",
      "Multi-role dashboards",
      "API-heavy builds",
      "Complex business logic",
    ],
  },
];

const requiredItems = [
  "Clear objective and success criteria",
  "A single decision-maker",
  "Access to necessary tools and accounts",
  "Content or structured requirements",
  "Timely feedback during review phases",
];

const niceToHaveItems = [
  "Existing brand guidelines",
  "Sitemap or rough structure",
  "Example references",
  "Pre-written content",
  "Technical documentation (if applicable)",
];

const includedItems = [
  "Define system architecture and technical structure",
  "Set up project foundation and environments",
  "Implement responsive front-end and back-end functionality",
  "Integrate third-party services and APIs",
  "Connect CMS or database systems (if applicable)",
  "Optimize performance and basic technical SEO setup",
  "Deploy to production (Vercel or similar)",
  "Provide access handover and documentation",
];

const excludedItems = [
  "Branding and visual identity design",
  "Copywriting or messaging strategy",
  "Marketing campaigns or paid ads",
  "Ongoing content updates after delivery",
  "Long-term maintenance unless separately agreed",
];

const goodFitProjects = [
  "Founders with validated ideas ready to build",
  "SMEs redesigning or rebuilding an existing site",
  "Teams needing internal tools or workflow systems",
  "Businesses that need custom functionality beyond templates",
  "Teams with a clear decision-maker",
  "Clients who value clean, scalable builds",
];

const notFitProjects = [
  "Just need something quick and cheap",
  "No clear goals or requirements",
  "No decision-maker involved",
  "Projects requiring daily content updates",
  "Pure marketing-only engagements",
];

const finishedBuildItems = [
  {
    title: "Deployed to Production",
    description: "Hosted on a real, live environment (e.g., Vercel or similar). Fully accessible and operational.",
  },
  {
    title: "Cross-Environment Reliability",
    description: "Works across modern browsers and devices. Tested under expected usage conditions.",
  },
  {
    title: "Documentation & Handover",
    description: "Clear handover notes, instructions for managing or updating the site, and any necessary setup documentation.",
  },
  {
    title: "Access & Ownership",
    description: "Full access to hosting, repository, and CMS (if applicable). Client retains ownership of final build.",
  },
];

const servicesColorScheme: ColorScheme = {
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

export default function Services() {
  return (
    <>
      <Navbar colorScheme={servicesColorScheme} />
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
            <div className="w-full max-w-6xl mx-auto">
              <h1 className="font-display font-bold text-black text-4xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight text-center max-w-3xl mx-auto animate-fadeInUp">
                Development built for growth
              </h1>
              
              <p className="mt-10 font-sans text-base sm:text-lg text-black/85 text-center max-w-2xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200">
                Production-ready websites that scale with your business.
              </p>
            </div>
          </div>
        
          {/* Animated Wave */}
          <HeroWaveServices />
        </section>

        {/* What Development Includes - Cards Section */}
        <section className="w-full px-6 py-24 sm:py-32">
          <div className="w-full max-w-7xl mx-auto">
            <h2 className="font-display font-semibold text-black text-2xl sm:text-3xl tracking-tight text-center mb-16">
              What development includes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {heroCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-black/15 bg-white/40 backdrop-blur-sm p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
                >
                  {/* Placeholder Image */}
                  <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-black/10 to-black/5 mb-6 flex items-center justify-center border border-black/10">
                    <span className="font-sans text-black/40 text-sm">Visual</span>
                  </div>
                  
                  <h3 className="font-display font-semibold text-black text-lg sm:text-xl tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-4 font-sans text-black/75 text-[15px] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Projects We Take Section — BLACK SECTION */}
        <section className="w-full px-6 py-24 sm:py-32 bg-black">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center max-w-3xl mx-auto mb-8">
              Types of Projects We Take
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#FFFF3A] text-center max-w-2xl mx-auto leading-relaxed mb-16">
              We work best with teams who have <strong className="font-semibold text-[#FFFF3A]">clear goals</strong> and <strong className="font-semibold text-[#FFFF3A]">defined requirements</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Good Fit */}
              <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-8 lg:p-10 shadow-lg">
                <h3 className="font-display font-semibold text-white text-xl sm:text-2xl tracking-tight mb-6">
                  Good Fit
                </h3>
                <ul className="space-y-4 font-sans text-white text-[15px] sm:text-base leading-relaxed">
                  {goodFitProjects.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not a Fit */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 lg:p-10 shadow-md">
                <h3 className="font-display font-semibold text-white/80 text-xl sm:text-2xl tracking-tight mb-6">
                  Not a Fit
                </h3>
                <ul className="space-y-4 font-sans text-white/70 text-[15px] sm:text-base leading-relaxed">
                  {notFitProjects.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-white/50 shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Typical Timelines Section */}
        <section className="w-full px-6 py-24 sm:py-32">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-black text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center max-w-3xl mx-auto mb-6">
              Typical Timelines
            </h2>
            
            <p className="font-sans text-black/75 text-[15px] sm:text-base text-center max-w-2xl mx-auto leading-relaxed mb-16">
              Timelines vary depending on scope and complexity. These are general ranges, not fixed commitments.
            </p>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {timelineBlocks.map((block) => (
                <div
                  key={block.title}
                  className="rounded-2xl border border-black/20 bg-white/60 backdrop-blur-sm p-8 shadow-lg"
                >
                  <div className="mb-6">
                    <div className="font-display font-bold text-black text-3xl sm:text-4xl mb-2">
                      {block.timeframe}
                    </div>
                    <h3 className="font-display font-semibold text-black text-lg sm:text-xl tracking-tight">
                      {block.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-3 font-sans text-black/75 text-[15px] leading-relaxed">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="text-black/50 shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-xl border border-black/15 bg-white/40 backdrop-blur-sm p-6 lg:p-8">
              <p className="font-sans text-black/70 text-sm sm:text-[15px] leading-relaxed">
                <span className="font-semibold text-black">Timelines vary based on:</span> Scope clarity, speed of client feedback, third-party integrations or dependencies, and change requests during development.
              </p>
            </div>
          </div>
        </section>

        {/* What Clients Need to Provide Section — BLACK SECTION */}
        <section className="w-full px-6 py-24 sm:py-32 bg-black">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center max-w-3xl mx-auto mb-6">
              What Clients Need to Provide
            </h2>
            
            <p className="font-sans text-[#FFFF3A] text-[15px] sm:text-base text-center max-w-2xl mx-auto leading-relaxed mb-16">
              Great projects are <strong className="font-semibold text-[#FFFF3A]">collaborative</strong>. Here's what helps us deliver the best results.
            </p>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Required */}
              <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-8 lg:p-10 shadow-lg">
                <h3 className="font-display font-semibold text-white text-xl sm:text-2xl tracking-tight mb-6">
                  Required
                </h3>
                <ul className="space-y-4 font-sans text-white text-[15px] sm:text-base leading-relaxed">
                  {requiredItems.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nice to Have */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 lg:p-10 shadow-md">
                <h3 className="font-display font-semibold text-white/80 text-xl sm:text-2xl tracking-tight mb-6">
                  Nice to Have
                </h3>
                <ul className="space-y-4 font-sans text-white/70 text-[15px] sm:text-base leading-relaxed">
                  {niceToHaveItems.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-white/50 shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What a Finished Build Looks Like Section */}
        <section className="w-full px-6 py-24 sm:py-32">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-black text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center max-w-3xl mx-auto mb-6">
              What a Finished Build Looks Like
            </h2>
            
            <p className="font-sans text-black/75 text-[15px] sm:text-base text-center max-w-2xl mx-auto leading-relaxed mb-16">
              A project is considered complete when it is fully implemented, deployed, and handed over. The goal is ownership and long-term usability.
            </p>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {finishedBuildItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-black/20 bg-white/60 backdrop-blur-sm p-8 lg:p-10 shadow-lg"
                >
                  <h3 className="font-display font-semibold text-black text-lg sm:text-xl tracking-tight mb-4">
                    {item.title}
                  </h3>
                  <p className="font-sans text-black/75 text-[15px] sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Soft Call to Action Section — BLACK SECTION */}
        <section className="w-full px-6 py-20 sm:py-28 bg-black">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
              If This Approach Aligns With You
            </h2>
            <p className="mt-6 font-sans text-base sm:text-lg text-[#FFFF3A] leading-relaxed max-w-2xl mx-auto">
              This page explains how we work. If you're looking for a development partner who values <strong className="font-semibold text-[#FFFF3A]">clarity</strong>, <strong className="font-semibold text-[#FFFF3A]">quality</strong>, and <strong className="font-semibold text-[#FFFF3A]">collaboration</strong>, let's start a conversation.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-sans text-base font-medium px-8 py-4 rounded-lg bg-[#FFFF3A] text-black hover:bg-[#FFFF3A]/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#FFFF3A] focus:ring-offset-2 focus:ring-offset-black"
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
