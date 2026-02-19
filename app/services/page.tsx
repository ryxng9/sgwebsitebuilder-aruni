import Link from "next/link";
import Navbar, { NAVBAR_HEIGHT_CLASS, ColorScheme } from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroWave from "@/components/HeroWave";

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
    title: "Small Projects",
    timeframe: "1–3 weeks",
    items: [
      "Landing pages",
      "Portfolio sites",
      "Basic business websites",
    ],
  },
  {
    title: "Medium Projects",
    timeframe: "3–6 weeks",
    items: [
      "E-commerce stores",
      "Custom web applications",
      "CMS integration",
      "Multi-page sites",
    ],
  },
  {
    title: "Large Projects",
    timeframe: "6–12 weeks",
    items: [
      "Complex e-commerce platforms",
      "Custom SaaS applications",
      "Enterprise websites",
      "Advanced integrations",
    ],
  },
];

const requiredItems = [
  "Clear objective and success criteria",
  "Access to necessary tools and accounts",
  "Content or structured requirements",
  "Timely feedback during review phases",
];

const niceToHaveItems = [
  "Existing brand guidelines",
  "Sitemap or rough structure",
  "Example references",
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
    title: "Fully Functional Website",
    description: "All features working as specified, tested across devices and browsers, ready for real-world use.",
  },
  {
    title: "Deployed & Live",
    description: "Hosted on production environment with SSL certificate, custom domain configured, and accessible to users.",
  },
  {
    title: "Documentation Provided",
    description: "Complete handover documentation including how to manage content, update the site, and access all systems.",
  },
  {
    title: "Full Ownership Transfer",
    description: "Complete access to hosting, domain, repository, and all accounts. You own everything we build.",
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
            <div className="w-full max-w-6xl mx-auto">
              <h1 className="font-display font-bold text-black text-4xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight text-center max-w-3xl mx-auto animate-fadeInUp">
                Services we provide
              </h1>
              
              <p className="mt-10 font-sans text-base sm:text-lg text-black/85 text-center max-w-2xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200">
                We develop solutions that help scale your business.
              </p>
            </div>
          </div>
        
          {/* Animated Wave */}
          <HeroWave />
        </section>

        {/* What Development Includes - Cards Section */}
        <section className="w-full px-6 py-24 sm:py-32">
          <div className="w-full max-w-7xl mx-auto">
            <h2 className="font-display font-semibold text-black text-2xl sm:text-3xl tracking-tight text-center mb-16">
              What we offer
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
        <section className="w-full px-6 py-24 sm:py-32 bg-[#212121]">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center max-w-3xl mx-auto mb-16">
              Types of Projects We Take
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* E-commerce */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg overflow-hidden">
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-[#FFFF3A]/30 to-white/5 flex items-center justify-center border-b border-white/10">
                  <span className="font-sans text-white/40 text-sm">E-commerce Image</span>
                </div>
                <div className="p-8">
                  <h3 className="font-display font-semibold text-white text-xl tracking-tight mb-4">
                    E-commerce
                  </h3>
                  <ul className="space-y-2.5 font-sans text-white/85 text-sm leading-relaxed mb-6">
                    <li className="flex gap-2">
                      <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>WooCommerce/WordPress stores</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>Shopify custom themes</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>Custom Next.js e-commerce</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>Payment gateway integration</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>Product catalog management</span>
                    </li>
                  </ul>
                  <Link
                    href="/services/e-commerce"
                    className="inline-flex items-center justify-center font-sans text-sm font-medium px-6 py-3 rounded-lg bg-white text-black hover:bg-white/90 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Read More
                  </Link>
                </div>
              </div>

              {/* Business Web Design */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg overflow-hidden">
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-[#FFFF3A]/30 to-white/5 flex items-center justify-center border-b border-white/10">
                  <span className="font-sans text-white/40 text-sm">Business Web Design Image</span>
                </div>
                <div className="p-8">
                  <h3 className="font-display font-semibold text-white text-xl tracking-tight mb-4">
                    Business Web Design
                  </h3>
                  <ul className="space-y-2.5 font-sans text-white/85 text-sm leading-relaxed mb-6">
                    <li className="flex gap-2">
                      <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>Corporate websites</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>Landing pages</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>Portfolio sites</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>Service-based business sites</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>Responsive design implementation</span>
                    </li>
                  </ul>
                  <Link
                    href="/services/business-web-design"
                    className="inline-flex items-center justify-center font-sans text-sm font-medium px-6 py-3 rounded-lg bg-white text-black hover:bg-white/90 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Read More
                  </Link>
                </div>
              </div>

              {/* Custom Web Development */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg overflow-hidden">
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-[#FFFF3A]/30 to-white/5 flex items-center justify-center border-b border-white/10">
                  <span className="font-sans text-white/40 text-sm">Custom Development Image</span>
                </div>
                <div className="p-8">
                  <h3 className="font-display font-semibold text-white text-xl tracking-tight mb-4">
                    Custom Web Development
                  </h3>
                  <ul className="space-y-2.5 font-sans text-white/85 text-sm leading-relaxed mb-6">
                    <li className="flex gap-2">
                      <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>Hand-coded HTML/CSS/JS</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>React/Next.js applications</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>Custom CMS integration</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>API development & integration</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>Progressive Web Apps (PWA)</span>
                    </li>
                  </ul>
                  <Link
                    href="/services/custom-web-development"
                    className="inline-flex items-center justify-center font-sans text-sm font-medium px-6 py-3 rounded-lg bg-white text-black hover:bg-white/90 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Read More
                  </Link>
                </div>
              </div>

              {/* Website Management */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg overflow-hidden">
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-[#FFFF3A]/30 to-white/5 flex items-center justify-center border-b border-white/10">
                  <span className="font-sans text-white/40 text-sm">Website Management Image</span>
                </div>
                <div className="p-8">
                  <h3 className="font-display font-semibold text-white text-xl tracking-tight mb-4">
                    Website Management
                  </h3>
                  <ul className="space-y-2.5 font-sans text-white/85 text-sm leading-relaxed mb-6">
                    <li className="flex gap-2">
                      <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>Regular content updates</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>Security monitoring & patches</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>Performance optimization</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>Backup & recovery services</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>Technical support</span>
                    </li>
                  </ul>
                  <Link
                    href="/services/website-management"
                    className="inline-flex items-center justify-center font-sans text-sm font-medium px-6 py-3 rounded-lg bg-white text-black hover:bg-white/90 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Read More
                  </Link>
                </div>
              </div>

              {/* SEO */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg overflow-hidden">
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-[#FFFF3A]/30 to-white/5 flex items-center justify-center border-b border-white/10">
                  <span className="font-sans text-white/40 text-sm">SEO Image</span>
                </div>
                <div className="p-8">
                  <h3 className="font-display font-semibold text-white text-xl tracking-tight mb-4">
                    Search Engine Optimisation (SEO)
                  </h3>
                  <ul className="space-y-2.5 font-sans text-white/85 text-sm leading-relaxed mb-6">
                    <li className="flex gap-2">
                      <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>On-page SEO optimization</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>Technical SEO audits</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>Keyword research & strategy</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>Meta tags & schema markup</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>Google Analytics setup</span>
                    </li>
                  </ul>
                  <Link
                    href="/services/seo"
                    className="inline-flex items-center justify-center font-sans text-sm font-medium px-6 py-3 rounded-lg bg-white text-black hover:bg-white/90 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Read More
                  </Link>
                </div>
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
        <section className="w-full px-6 py-24 sm:py-32 bg-[#212121]">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center max-w-3xl mx-auto mb-6">
              What Clients Need to Provide
            </h2>
            
            <p className="font-sans text-[#FFFF3A] text-[15px] sm:text-base text-center max-w-2xl mx-auto leading-relaxed mb-16">
              Great projects are collaborative. Here's what helps us deliver the best results.
            </p>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Required */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 lg:p-10 shadow-lg">
                <h3 className="font-display font-semibold text-white text-xl sm:text-2xl tracking-tight mb-6">
                  Required
                </h3>
                <ul className="space-y-4 font-sans text-white/85 text-[15px] sm:text-base leading-relaxed">
                  {requiredItems.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nice to Have */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 lg:p-10 shadow-md">
                <h3 className="font-display font-semibold text-white/70 text-xl sm:text-2xl tracking-tight mb-6">
                  Nice to Have
                </h3>
                <ul className="space-y-4 font-sans text-white/65 text-[15px] sm:text-base leading-relaxed">
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
            <h2 className="font-display font-bold text-black text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center max-w-3xl mx-auto mb-16">
              What a Finished Build Looks Like
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {finishedBuildItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-black/20 bg-white/60 backdrop-blur-sm shadow-lg flex flex-col overflow-hidden"
                >
                  {/* Image Placeholder */}
                  <div className="aspect-square bg-gradient-to-br from-[#FFFF3A]/20 to-black/5 flex items-center justify-center border-b border-black/10">
                    <span className="font-sans text-black/40 text-xs">Icon Placeholder</span>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="font-display font-semibold text-black text-lg tracking-tight mb-4">
                      {item.title}
                    </h3>
                    <p className="font-sans text-black/75 text-sm leading-relaxed flex-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Soft Call to Action Section — BLACK SECTION */}
        <section className="w-full px-6 py-20 sm:py-28 bg-[#212121] border-t border-white/10">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
              If This Approach Aligns With You
            </h2>
            <p className="mt-6 font-sans text-base sm:text-lg text-[#FFFF3A] leading-relaxed max-w-2xl mx-auto">
              Let's start a conversation
            </p>
            <p className="mt-4 font-sans text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              This page explains how we work. If you're looking for a development partner who values clarity, quality, and collaboration, reach out.
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
