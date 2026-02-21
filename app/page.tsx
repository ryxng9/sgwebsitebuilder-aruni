import Link from "next/link";
import Navbar, { NAVBAR_HEIGHT_CLASS, ColorScheme } from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroWave from "@/components/HeroWave";
import EmojiMarquee from "@/components/EmojiMarquee";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { Sparkles, Building2, Rocket } from "lucide-react";
import { ShoppingCart, BriefcaseBusiness, FolderCode, Wrench, Search } from "lucide-react";
import Image from "next/image";

const homeColorScheme: ColorScheme = {
  initial: {
    bg: "bg-white",
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

const whoWeWorkBestWith = [
  "Teams using their website to generate leads or sales",
  "Founders launching a new site or rebuilding an underperforming one",
  "Startups that care about speed, scalability, and long-term maintainability",
];

const lessSuitableIf = [
  "Large organisations with long approval chains",
  "Projects focused purely on visual branding with no conversion goals",
  "One-off or experimental sites without a clear business objective",
];

export default function Home() {
  return (
    <>
      <Navbar colorScheme={homeColorScheme} />
      <main className="bg-white text-black overflow-x-hidden">
        {/* Hero — compact to show marquee on load */}
        <section
          className="min-h-[85vh] flex flex-col px-6 relative overflow-hidden"
          aria-label="Hero"
        >
        {/* Grain Background Image */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src="/images/homepage/grain-background.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.08]"
            priority
          />
        </div>
        {/* Spacer for fixed navbar */}
        <div className={NAVBAR_HEIGHT_CLASS} aria-hidden="true" />
        
        {/* Collaboration text */}
        <div className="w-full text-center pt-2">
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
        
        {/* Content area — compact to fit marquee */}
        <div className="flex-1 flex items-start justify-center relative z-10 pt-6">
          <div className="w-full max-w-6xl mx-auto">
            <h1 className="font-display font-bold text-black text-4xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight max-w-3xl animate-fadeInUp mt-8">
              Singapore's #1 Web Builder for Businesses.
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-4 font-sans animate-fadeInUp animation-delay-200">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-[15px] font-medium px-6 py-3 rounded-lg bg-[#212121] text-white hover:bg-black transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Start a Project
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center text-[15px] font-medium px-6 py-3 rounded-lg border-2 border-black text-black bg-transparent hover:bg-black/5 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Our Work
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-6 flex gap-12 animate-fadeInUp animation-delay-400">
              {/* Projects Completed */}
              <div className="text-left">
                <div className="font-display font-bold text-3xl sm:text-4xl text-black mb-1">
                  120+
                </div>
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#FFFF3A]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-sans text-black/70 text-sm">
                  Projects completed
                </p>
              </div>

              {/* Rating */}
              <div className="text-left">
                <div className="font-display font-bold text-3xl sm:text-4xl text-black mb-1">
                  4.9
                </div>
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#FFFF3A]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-sans text-black/70 text-sm">
                  Rating from clients
                </p>
              </div>
            </div>
          </div>
        </div>
        
          {/* Animated Wave */}
          <HeroWave />
        </section>

      {/* Emoji Marquee */}
      <EmojiMarquee />

      {/* Our Featured Builds — BLACK SECTION */}
      <section className="w-full px-6 pt-32 sm:pt-40 pb-24 sm:pb-32 bg-[#212121]">
        <div className="w-full mx-auto">
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center max-w-2xl mx-auto">
            Our featured builds
          </h2>
          <p className="mt-6 font-sans text-base sm:text-lg text-[#FFFF3A] text-center max-w-xl mx-auto leading-relaxed">
            Real-world builds, backed by a clear and reliable process.
          </p>

          <div className="mt-16 space-y-8 max-w-6xl mx-auto">
            {/* Featured Build 1 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
              <div className="aspect-[21/9] relative overflow-hidden bg-gradient-to-br from-[#1e3a8a] to-[#60a5fa]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/90 text-2xl font-display font-bold">E-commerce Platform Preview</div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-xs font-sans text-[#FFFF3A] uppercase tracking-wider mb-3">WEBSITE REDESIGN</p>
                <h3 className="font-display font-bold text-white text-2xl sm:text-3xl mb-4">E-commerce Platform Redesign</h3>
                <p className="font-sans text-white/70 text-base sm:text-lg leading-relaxed mb-6">
                  Complete overhaul of online shopping experience with modern UI and improved conversion rates.
                </p>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center font-sans text-base font-medium px-6 py-3 rounded-lg border border-white/20 text-white bg-transparent hover:bg-white/5 transition-all duration-200"
                >
                  View Case Study
                </Link>
              </div>
            </div>

            {/* Featured Build 2 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
              <div className="aspect-[21/9] relative overflow-hidden bg-gradient-to-br from-gray-700 to-gray-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/90 text-2xl font-display font-bold">Corporate Website Preview</div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-xs font-sans text-[#FFFF3A] uppercase tracking-wider mb-3">WEBSITE REDESIGN</p>
                <h3 className="font-display font-bold text-white text-2xl sm:text-3xl mb-4">Corporate Website Transformation</h3>
                <p className="font-sans text-white/70 text-base sm:text-lg leading-relaxed mb-6">
                  Professional rebrand with focus on user experience and modern design principles.
                </p>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center font-sans text-base font-medium px-6 py-3 rounded-lg border border-white/20 text-white bg-transparent hover:bg-white/5 transition-all duration-200"
                >
                  View Case Study
                </Link>
              </div>
            </div>

            {/* Featured Build 3 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
              <div className="aspect-[21/9] relative overflow-hidden bg-gradient-to-br from-emerald-600 to-emerald-400">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/90 text-2xl font-display font-bold">SaaS Platform Preview</div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-xs font-sans text-[#FFFF3A] uppercase tracking-wider mb-3">WEBSITE REDESIGN</p>
                <h3 className="font-display font-bold text-white text-2xl sm:text-3xl mb-4">SaaS Platform Launch</h3>
                <p className="font-sans text-white/70 text-base sm:text-lg leading-relaxed mb-6">
                  From concept to launch, a complete web solution for a modern software platform.
                </p>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center font-sans text-base font-medium px-6 py-3 rounded-lg border border-white/20 text-white bg-transparent hover:bg-white/5 transition-all duration-200"
                >
                  View Case Study
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials — BLACK SECTION */}
      <Testimonials />

      {/* Pricing — WHITE SECTION */}
      <section className="w-full px-6 py-24 sm:py-32 bg-white">
        <div className="w-full max-w-6xl mx-auto">
          {/* Header */}
          <h2 className="font-display font-bold text-black text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center max-w-2xl mx-auto">
            Pricing
          </h2>
          <p className="mt-6 font-sans text-base sm:text-lg text-black/70 text-center max-w-xl mx-auto leading-relaxed">
            Transparent pricing for quality web solutions
          </p>

          {/* Pricing Cards */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Small Scoped Builds */}
            <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 flex flex-col">
              <div className="flex items-start gap-3 mb-4 h-[60px]">
                <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-display font-bold text-black text-2xl leading-tight">Small Scoped Builds</h3>
              </div>
              <div className="pb-4 border-b border-black/10 h-[80px] flex items-start">
                <span className="font-display font-bold text-black text-3xl">Starting from $3,000</span>
              </div>
              <p className="font-sans text-black/70 text-sm leading-relaxed py-4 border-b border-black/10 h-[100px]">
                Marketing sites, small rebuilds, clearly defined scope with minimal integrations.
              </p>
              <ul className="space-y-3 pt-4 mb-auto">
                <li className="flex items-start gap-2 font-sans text-black/80 text-sm">
                  <span className="text-black mt-0.5">✓</span>
                  <span>Landing pages</span>
                </li>
                <li className="flex items-start gap-2 font-sans text-black/80 text-sm">
                  <span className="text-black mt-0.5">✓</span>
                  <span>Portfolio websites</span>
                </li>
                <li className="flex items-start gap-2 font-sans text-black/80 text-sm">
                  <span className="text-black mt-0.5">✓</span>
                  <span>Small business websites</span>
                </li>
                <li className="flex items-start gap-2 font-sans text-black/80 text-sm">
                  <span className="text-black mt-0.5">✓</span>
                  <span>Marketing campaign sites</span>
                </li>
              </ul>
              <div className="mt-6 space-y-3">
                <Link
                  href="/contact"
                  className="block w-full text-center py-3 px-6 rounded-lg bg-black text-white hover:bg-black hover:text-white transition-all duration-200 font-medium"
                >
                  Get Started
                </Link>
                <Link
                  href="/pricing"
                  className="block w-full text-center py-2 px-6 rounded-lg text-black/70 hover:text-black transition-all duration-200 text-sm font-medium"
                >
                  View Full Pricing →
                </Link>
              </div>
            </div>

            {/* Medium Builds */}
            <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 flex flex-col">
              <div className="flex items-start gap-3 mb-4 h-[60px]">
                <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-display font-bold text-black text-2xl leading-tight">Medium Builds</h3>
              </div>
              <div className="pb-4 border-b border-black/10 h-[80px] flex items-start">
                <span className="font-display font-bold text-black text-3xl">Starting from $8,000</span>
              </div>
              <p className="font-sans text-black/70 text-sm leading-relaxed py-4 border-b border-black/10 h-[100px]">
                Custom functionality, CMS integration, multi-page sites with moderate complexity.
              </p>
              <ul className="space-y-3 pt-4 mb-auto">
                <li className="flex items-start gap-2 font-sans text-black/80 text-sm">
                  <span className="text-black mt-0.5">✓</span>
                  <span>E-commerce sites</span>
                </li>
                <li className="flex items-start gap-2 font-sans text-black/80 text-sm">
                  <span className="text-black mt-0.5">✓</span>
                  <span>Corporate websites</span>
                </li>
                <li className="flex items-start gap-2 font-sans text-black/80 text-sm">
                  <span className="text-black mt-0.5">✓</span>
                  <span>Multi-page platforms</span>
                </li>
                <li className="flex items-start gap-2 font-sans text-black/80 text-sm">
                  <span className="text-black mt-0.5">✓</span>
                  <span>Content management systems</span>
                </li>
              </ul>
              <div className="mt-6 space-y-3">
                <Link
                  href="/contact"
                  className="block w-full text-center py-3 px-6 rounded-lg bg-black text-white hover:bg-black hover:text-white transition-all duration-200 font-medium"
                >
                  Get Started
                </Link>
                <Link
                  href="/pricing"
                  className="block w-full text-center py-2 px-6 rounded-lg text-black/70 hover:text-black transition-all duration-200 text-sm font-medium"
                >
                  View Full Pricing →
                </Link>
              </div>
            </div>

            {/* Complex Systems */}
            <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 flex flex-col">
              <div className="flex items-start gap-3 mb-4 h-[60px]">
                <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-display font-bold text-black text-2xl leading-tight">Complex Systems</h3>
              </div>
              <div className="pb-4 border-b border-black/10 h-[80px] flex items-start">
                <span className="font-display font-bold text-black text-3xl">Starting from $15,000+</span>
              </div>
              <p className="font-sans text-black/70 text-sm leading-relaxed py-4 border-b border-black/10 h-[100px]">
                Internal tools, dashboards, API-heavy systems with complex business logic.
              </p>
              <ul className="space-y-3 pt-4 mb-auto">
                <li className="flex items-start gap-2 font-sans text-black/80 text-sm">
                  <span className="text-black mt-0.5">✓</span>
                  <span>SaaS platforms</span>
                </li>
                <li className="flex items-start gap-2 font-sans text-black/80 text-sm">
                  <span className="text-black mt-0.5">✓</span>
                  <span>Custom web applications</span>
                </li>
                <li className="flex items-start gap-2 font-sans text-black/80 text-sm">
                  <span className="text-black mt-0.5">✓</span>
                  <span>Enterprise dashboards</span>
                </li>
                <li className="flex items-start gap-2 font-sans text-black/80 text-sm">
                  <span className="text-black mt-0.5">✓</span>
                  <span>API-driven systems</span>
                </li>
              </ul>
              <div className="mt-6 space-y-3">
                <Link
                  href="/contact"
                  className="block w-full text-center py-3 px-6 rounded-lg bg-black text-white hover:bg-black hover:text-white transition-all duration-200 font-medium"
                >
                  Get Started
                </Link>
                <Link
                  href="/pricing"
                  className="block w-full text-center py-2 px-6 rounded-lg text-black/70 hover:text-black transition-all duration-200 text-sm font-medium"
                >
                  View Full Pricing →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA — final call-to-action — WHITE SECTION */}
      <section className="w-full px-6 py-20 sm:py-28 bg-white border-t border-black/10">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-black text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
            Have a project in mind?
          </h2>
          <p className="mt-6 font-sans text-base sm:text-lg text-black leading-relaxed max-w-2xl mx-auto">
            Let's talk
          </p>
          <p className="mt-4 font-sans text-base sm:text-lg text-black/70 leading-relaxed max-w-2xl mx-auto">
            Tell us what you're building, and we'll let you know if we're a good fit.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-sans text-base font-medium px-8 py-4 rounded-lg bg-[#212121] text-white hover:bg-black transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#212121] focus:ring-offset-2"
            >
              Start a project
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
