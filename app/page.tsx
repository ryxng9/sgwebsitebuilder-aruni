import Link from "next/link";
import Navbar, { NAVBAR_HEIGHT_CLASS } from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroWave from "@/components/HeroWave";
import EmojiMarquee from "@/components/EmojiMarquee";

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
      <Navbar />
      <main className="bg-white text-black">
        {/* Hero — full viewport; only this is visible on load */}
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
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-6xl mx-auto">
            <h1 className="font-display font-bold text-black text-4xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight max-w-3xl animate-fadeInUp">
              Singapore's #1 Web Builder for Businesses.
            </h1>

            <div className="mt-12 flex flex-wrap items-center gap-4 font-sans animate-fadeInUp animation-delay-200">
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

            <p className="mt-10 font-sans text-base sm:text-lg text-black/90 max-w-xl leading-relaxed animate-fadeInUp animation-delay-400">
              • We develop websites for startups and SMEs that turn visitors into customers.
            </p>
          </div>
        </div>
        {/* Animated Wave */}
        <HeroWave />
      </section>

      {/* Emoji Marquee */}
      <EmojiMarquee />

      {/* Who it's for — centered, loose spacing */}
      <section className="w-full px-6 py-24 sm:py-32 pb-32 sm:pb-40">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="font-display font-bold text-black text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center max-w-2xl mx-auto">
            Built for teams that want results.
          </h2>
          <p className="mt-6 font-sans text-base sm:text-lg text-black/80 text-center max-w-xl mx-auto leading-relaxed">
            We work best with teams who value performance.
          </p>

          <div className="mt-16 grid sm:grid-cols-2 gap-8 sm:gap-10 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-black/10 bg-[#FFFF3A]/10 backdrop-blur-sm p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
              <h3 className="font-display font-semibold text-black text-lg sm:text-xl tracking-tight">
                We work best with
              </h3>
              <ul className="mt-6 font-sans text-black/85 text-[15px] sm:text-base leading-relaxed space-y-4">
                {whoWeWorkBestWith.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-black/10 bg-black/[0.02] backdrop-blur-sm p-8 sm:p-10 shadow-md hover:shadow-lg transition-all duration-200">
              <h3 className="font-display font-semibold text-black/70 text-lg sm:text-xl tracking-tight">
                Less suitable if you are
              </h3>
              <ul className="mt-6 font-sans text-black/65 text-[15px] sm:text-base leading-relaxed space-y-4">
                {lessSuitableIf.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[#212121]/50 shrink-0 mt-0.5" aria-hidden>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services we provide — WHITE SECTION */}
      <section className="w-full px-6 pt-32 sm:pt-40 pb-24 sm:pb-32 bg-white">
        <div className="w-full mx-auto">
          <h2 className="font-display font-bold text-black text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center max-w-2xl mx-auto">
            Services we provide
          </h2>
          <p className="mt-6 font-sans text-base sm:text-lg text-[#FFFF3A] text-center max-w-xl mx-auto leading-relaxed">
            Websites built to convert, scale, and perform
          </p>

          <div className="mt-16 px-6 max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* E-commerce */}
              <div className="rounded-2xl border border-black/10 bg-white/60 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 flex flex-col">
                <h3 className="font-display font-semibold text-black text-lg tracking-tight">
                  E-commerce
                </h3>
                <p className="mt-3 font-sans text-black/70 text-sm leading-relaxed flex-1">
                  Build powerful online stores that drive sales and deliver seamless shopping experiences.
                </p>
                <Link
                  href="/services/e-commerce"
                  className="mt-4 inline-flex items-center justify-center font-sans text-sm font-medium px-4 py-2 rounded-lg border border-black/20 text-black bg-transparent hover:bg-black/5 transition-all duration-200"
                >
                  Read More
                </Link>
              </div>

              {/* Business Web Design */}
              <div className="rounded-2xl border border-black/10 bg-white/60 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 flex flex-col">
                <h3 className="font-display font-semibold text-black text-lg tracking-tight">
                  Business Web Design
                </h3>
                <p className="mt-3 font-sans text-black/70 text-sm leading-relaxed flex-1">
                  Professional websites that establish credibility and convert visitors into customers.
                </p>
                <Link
                  href="/services/business-web-design"
                  className="mt-4 inline-flex items-center justify-center font-sans text-sm font-medium px-4 py-2 rounded-lg border border-black/20 text-black bg-transparent hover:bg-black/5 transition-all duration-200"
                >
                  Read More
                </Link>
              </div>

              {/* Custom Web Development */}
              <div className="rounded-2xl border border-black/10 bg-white/60 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 flex flex-col">
                <h3 className="font-display font-semibold text-black text-lg tracking-tight">
                  Custom Web Development
                </h3>
                <p className="mt-3 font-sans text-black/70 text-sm leading-relaxed flex-1">
                  Tailored web solutions built to your exact specifications and business needs.
                </p>
                <Link
                  href="/services/custom-web-development"
                  className="mt-4 inline-flex items-center justify-center font-sans text-sm font-medium px-4 py-2 rounded-lg border border-black/20 text-black bg-transparent hover:bg-black/5 transition-all duration-200"
                >
                  Read More
                </Link>
              </div>

              {/* Website Management */}
              <div className="rounded-2xl border border-black/10 bg-white/60 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 flex flex-col">
                <h3 className="font-display font-semibold text-black text-lg tracking-tight">
                  Website Management
                </h3>
                <p className="mt-3 font-sans text-black/70 text-sm leading-relaxed flex-1">
                  Ongoing maintenance and support to keep your website running smoothly and securely.
                </p>
                <Link
                  href="/services/website-management"
                  className="mt-4 inline-flex items-center justify-center font-sans text-sm font-medium px-4 py-2 rounded-lg border border-black/20 text-black bg-transparent hover:bg-black/5 transition-all duration-200"
                >
                  Read More
                </Link>
              </div>

              {/* SEO - Spans full width on mobile, takes 1 column on larger screens */}
              <div className="rounded-2xl border border-black/10 bg-white/60 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 flex flex-col md:col-span-2 lg:col-span-1">
                <h3 className="font-display font-semibold text-black text-lg tracking-tight">
                  Search Engine Optimisation (SEO)
                </h3>
                <p className="mt-3 font-sans text-black/70 text-sm leading-relaxed flex-1">
                  Improve your search rankings and drive organic traffic to your website.
                </p>
                <Link
                  href="/services/seo"
                  className="mt-4 inline-flex items-center justify-center font-sans text-sm font-medium px-4 py-2 rounded-lg border border-black/20 text-black bg-transparent hover:bg-black/5 transition-all duration-200"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* See All Services Button */}
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center font-sans text-base font-medium px-8 py-4 rounded-lg bg-[#212121] text-white hover:bg-black transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              See All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Proof — work samples and process — WHITE SECTION */}
      <section className="w-full px-6 py-24 sm:py-32 bg-white">
        <div className="w-full max-w-6xl mx-auto">
          {/* Header */}
          <h2 className="font-display font-bold text-black text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center max-w-2xl mx-auto">
            Proven through practice
          </h2>
          <p className="mt-6 font-sans text-base sm:text-lg text-[#212121] text-center max-w-xl mx-auto leading-relaxed">
            Real-world builds, backed by a clear and reliable process.
          </p>

          {/* Work Samples */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Sample 1 */}
            <div className="rounded-xl border border-black/30 bg-white/60 backdrop-blur-sm p-6 sm:p-8 hover:border-black/50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-[#FFFF3A]/20 to-[#FFFF3A]/20 mb-6 flex items-center justify-center border border-black/20">
                <span className="font-sans text-black/75 text-sm">Project Preview</span>
              </div>
              <p className="font-sans text-black text-[15px] sm:text-base font-semibold leading-relaxed">
                E-commerce
              </p>
              <p className="mt-3 font-sans text-[#212121] text-sm sm:text-[15px] leading-relaxed">
                Built to improve enquiry quality and page speed
              </p>
            </div>

            {/* Sample 2 */}
            <div className="rounded-xl border border-black/30 bg-white/60 backdrop-blur-sm p-6 sm:p-8 hover:border-black/50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-[#FFFF3A]/20 to-[#FFFF3A]/20 mb-6 flex items-center justify-center border border-black/20">
                <span className="font-sans text-black/75 text-sm">Project Preview</span>
              </div>
              <p className="font-sans text-black text-[15px] sm:text-base font-semibold leading-relaxed">
                Business Web Design
              </p>
              <p className="mt-3 font-sans text-[#212121] text-sm sm:text-[15px] leading-relaxed">
                Scalable architecture designed for conversion and retention
              </p>
            </div>

            {/* Sample 3 */}
            <div className="rounded-xl border border-black/30 bg-white/60 backdrop-blur-sm p-6 sm:p-8 hover:border-black/50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-[#FFFF3A]/20 to-[#FFFF3A]/20 mb-6 flex items-center justify-center border border-black/20">
                <span className="font-sans text-black/75 text-sm">Project Preview</span>
              </div>
              <p className="font-sans text-black text-[15px] sm:text-base font-semibold leading-relaxed">
                Custom Web Development
              </p>
              <p className="mt-3 font-sans text-[#212121] text-sm sm:text-[15px] leading-relaxed">
                Clean design focused on trial signups and feature clarity
              </p>
            </div>
          </div>

          {/* Process Snapshot with Timeline */}
          <div className="mt-20 sm:mt-24">
            <div className="relative">
              {/* Timeline connector line - hidden on mobile, visible on lg */}
              <div className="hidden lg:block absolute top-5 left-0 right-0 h-0.5 bg-[#FFFF3A]/30" aria-hidden="true" />
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
                {/* Step 1 */}
                <div className="space-y-3 relative">
                  <div className="w-10 h-10 rounded-lg bg-[#FFFF3A] border border-black/30 flex items-center justify-center relative z-10">
                    <span className="font-display font-semibold text-black text-sm">1</span>
                  </div>
                  {/* Arrow - hidden on mobile and tablet, visible on lg */}
                  <div className="hidden lg:block absolute top-5 -right-4 transform -translate-y-1/2 z-20" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#FFFF3A]">
                      <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-display font-semibold text-black text-base sm:text-lg tracking-tight">
                    Strategy
                  </h3>
                  <p className="font-sans text-[#212121] text-[15px] leading-relaxed">
                    Define goals, audience, and conversion intent
                  </p>
                </div>

                {/* Step 2 */}
                <div className="space-y-3 relative">
                  <div className="w-10 h-10 rounded-lg bg-[#FFFF3A] border border-black/30 flex items-center justify-center relative z-10">
                    <span className="font-display font-semibold text-black text-sm">2</span>
                  </div>
                  {/* Arrow */}
                  <div className="hidden lg:block absolute top-5 -right-4 transform -translate-y-1/2 z-20" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#FFFF3A]">
                      <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-display font-semibold text-black text-base sm:text-lg tracking-tight">
                    Structure
                  </h3>
                  <p className="font-sans text-[#212121] text-[15px] leading-relaxed">
                    Plan pages, content hierarchy, and user flow
                  </p>
                </div>

                {/* Step 3 */}
                <div className="space-y-3 relative">
                  <div className="w-10 h-10 rounded-lg bg-[#FFFF3A] border border-black/30 flex items-center justify-center relative z-10">
                    <span className="font-display font-semibold text-black text-sm">3</span>
                  </div>
                  {/* Arrow */}
                  <div className="hidden lg:block absolute top-5 -right-4 transform -translate-y-1/2 z-20" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#FFFF3A]">
                      <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-display font-semibold text-black text-base sm:text-lg tracking-tight">
                    Build
                  </h3>
                  <p className="font-sans text-[#212121] text-[15px] leading-relaxed">
                    Clean, scalable, production-ready code
                  </p>
                </div>

                {/* Step 4 */}
                <div className="space-y-3 relative">
                  <div className="w-10 h-10 rounded-lg bg-[#FFFF3A] border border-black/30 flex items-center justify-center relative z-10">
                    <span className="font-display font-semibold text-black text-sm">4</span>
                  </div>
                  <h3 className="font-display font-semibold text-black text-base sm:text-lg tracking-tight">
                    Launch
                  </h3>
                  <p className="font-sans text-[#212121] text-[15px] leading-relaxed">
                    Performance, SEO, and deployment ready
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section — WHITE SECTION */}
      <section className="w-full px-6 py-24 sm:py-32 bg-white border-t border-black/10">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Quality Assurance */}
            <div className="rounded-2xl border border-black/10 bg-[#FFFF3A]/10 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
              <h3 className="font-display font-semibold text-black text-lg sm:text-xl tracking-tight mb-3">
                Quality Assurance
              </h3>
              <p className="font-sans text-black/70 text-sm sm:text-base leading-relaxed">
                Rigorous testing ensures your website works flawlessly.
              </p>
            </div>

            {/* Cost Transparency */}
            <div className="rounded-2xl border border-black/10 bg-[#FFFF3A]/10 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
              <h3 className="font-display font-semibold text-black text-lg sm:text-xl tracking-tight mb-3">
                Cost Transparency
              </h3>
              <p className="font-sans text-black/70 text-sm sm:text-base leading-relaxed">
                Clear pricing with no hidden fees or surprises.
              </p>
            </div>

            {/* End-to-end Service */}
            <div className="rounded-2xl border border-black/10 bg-[#FFFF3A]/10 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
              <h3 className="font-display font-semibold text-black text-lg sm:text-xl tracking-tight mb-3">
                End-to-end Service
              </h3>
              <p className="font-sans text-black/70 text-sm sm:text-base leading-relaxed">
                From concept to launch, we handle everything.
              </p>
            </div>

            {/* Fast Service */}
            <div className="rounded-2xl border border-black/10 bg-[#FFFF3A]/10 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
              <h3 className="font-display font-semibold text-black text-lg sm:text-xl tracking-tight mb-3">
                Fast Service
              </h3>
              <p className="font-sans text-black/70 text-sm sm:text-base leading-relaxed">
                Quick turnaround times without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — final call-to-action — WHITE SECTION */}
      <section className="w-full px-6 py-20 sm:py-28 bg-white border-t border-black/10">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-black text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
            Have a project in mind?
          </h2>
          <p className="mt-6 font-sans text-base sm:text-lg text-[#FFFF3A] leading-relaxed max-w-2xl mx-auto">
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
