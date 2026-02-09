import Link from "next/link";
import { NAVBAR_HEIGHT_CLASS } from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroWave from "@/components/HeroWave";

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
    <main className="bg-brown-red text-beige-cream">
      {/* Hero — full viewport; only this is visible on load */}
      <section
        className="h-screen flex flex-col px-6 relative overflow-hidden"
        aria-label="Hero"
      >
        {/* Spacer for fixed navbar */}
        <div className={NAVBAR_HEIGHT_CLASS} aria-hidden="true" />
        {/* Content area — fills remaining space and centers */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-6xl mx-auto">
            <h1 className="font-display font-bold text-beige-cream text-4xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight max-w-3xl animate-fadeInUp">
              Where growing businesses turn traffic into customers.
            </h1>

            <div className="mt-12 flex flex-wrap items-center gap-4 font-sans animate-fadeInUp animation-delay-200">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-[15px] font-medium px-6 py-3 rounded-lg bg-beige-cream text-brown-red hover:bg-pink-cream transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Start a Project
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center text-[15px] font-medium px-6 py-3 rounded-lg border-2 border-beige-cream text-beige-cream bg-transparent hover:bg-beige-cream/10 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                View our Work
              </Link>
            </div>

            <p className="mt-10 font-sans text-base sm:text-lg text-beige-cream/95 max-w-xl leading-relaxed animate-fadeInUp animation-delay-400">
              • We develop conversion-focused websites for startups and SMEs that
              want results, not just a pretty site.
            </p>
          </div>
        </div>
        {/* Animated Wave */}
        <HeroWave />
      </section>

      {/* Who it's for — centered, loose spacing */}
      <section className="w-full px-6 py-24 sm:py-32 pb-32 sm:pb-40">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="font-display font-bold text-beige-cream text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center max-w-2xl mx-auto">
            Built for teams that want results.
          </h2>
          <p className="mt-6 font-sans text-base sm:text-lg text-beige-cream/90 text-center max-w-xl mx-auto leading-relaxed">
            We work best with teams who value performance over polish alone.
          </p>

          <div className="mt-16 grid sm:grid-cols-2 gap-8 sm:gap-10 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-beige-cream/20 bg-beige-cream/5 backdrop-blur-sm p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
              <h3 className="font-display font-semibold text-beige-cream text-lg sm:text-xl tracking-tight">
                We work best with
              </h3>
              <ul className="mt-6 font-sans text-beige-cream/90 text-[15px] sm:text-base leading-relaxed space-y-4">
                {whoWeWorkBestWith.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-dark-yellow shrink-0 mt-0.5" aria-hidden>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-beige-cream/15 bg-beige-cream/[0.03] backdrop-blur-sm p-8 sm:p-10 shadow-md hover:shadow-lg transition-all duration-200">
              <h3 className="font-display font-semibold text-beige-cream/80 text-lg sm:text-xl tracking-tight">
                Less suitable if you are
              </h3>
              <ul className="mt-6 font-sans text-beige-cream/75 text-[15px] sm:text-base leading-relaxed space-y-4">
                {lessSuitableIf.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-grey shrink-0 mt-0.5" aria-hidden>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What we build — light background section with new color scheme */}
      <section className="w-full px-6 pt-32 sm:pt-40 pb-24 sm:pb-32 bg-[#F1F0E4]">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="font-display font-bold text-[#3E3F29] text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center max-w-2xl mx-auto">
            What we build
          </h2>
          <p className="mt-6 font-sans text-base sm:text-lg text-[#7D8D86] text-center max-w-xl mx-auto leading-relaxed">
            Websites built to convert, scale, and perform in production.
          </p>

          <div className="mt-16 grid sm:grid-cols-2 gap-8 sm:gap-10 max-w-4xl mx-auto">
            {/* Conversion-focused websites */}
            <div className="rounded-2xl border border-[#3E3F29]/10 bg-white/40 backdrop-blur-sm p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
              <h3 className="font-display font-semibold text-[#3E3F29] text-lg sm:text-xl tracking-tight">
                Conversion-focused websites
              </h3>
              <p className="mt-4 font-sans text-[#7D8D86] text-[15px] sm:text-base leading-relaxed">
                Websites designed around clear user journeys, built to turn visitors into customers.
              </p>
            </div>

            {/* Design-ready development */}
            <div className="rounded-2xl border border-[#3E3F29]/10 bg-white/40 backdrop-blur-sm p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
              <h3 className="font-display font-semibold text-[#3E3F29] text-lg sm:text-xl tracking-tight">
                Design-ready development
              </h3>
              <p className="mt-4 font-sans text-[#7D8D86] text-[15px] sm:text-base leading-relaxed">
                We work seamlessly with designers or founders, delivering pixel-accurate, build-ready sites.
              </p>
            </div>

            {/* Clean, scalable builds */}
            <div className="rounded-2xl border border-[#3E3F29]/10 bg-white/40 backdrop-blur-sm p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
              <h3 className="font-display font-semibold text-[#3E3F29] text-lg sm:text-xl tracking-tight">
                Clean, scalable builds
              </h3>
              <p className="mt-4 font-sans text-[#7D8D86] text-[15px] sm:text-base leading-relaxed">
                Production-grade code that's easy to maintain, extend, and grow with your business.
              </p>
            </div>

            {/* Launch-ready delivery */}
            <div className="rounded-2xl border border-[#3E3F29]/10 bg-white/40 backdrop-blur-sm p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
              <h3 className="font-display font-semibold text-[#3E3F29] text-lg sm:text-xl tracking-tight">
                Launch-ready delivery
              </h3>
              <p className="mt-4 font-sans text-[#7D8D86] text-[15px] sm:text-base leading-relaxed">
                Optimised for performance, SEO, and real-world usage — ready to ship, not "almost done".
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof — work samples and process */}
      <section className="w-full px-6 py-24 sm:py-32 bg-[#F6F0F0]">
        <div className="w-full max-w-6xl mx-auto">
          {/* Header */}
          <h2 className="font-display font-bold text-[#57595B] text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center max-w-2xl mx-auto">
            Proven through practice
          </h2>
          <p className="mt-6 font-sans text-base sm:text-lg text-[#BDB395] text-center max-w-xl mx-auto leading-relaxed">
            Real-world builds, backed by a clear and reliable process.
          </p>

          {/* Work Samples */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Sample 1 */}
            <div className="rounded-xl border border-[#D5C7A3]/30 bg-white/60 backdrop-blur-sm p-6 sm:p-8 hover:border-[#D5C7A3]/50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-[#F2E2B1]/20 to-[#D5C7A3]/20 mb-6 flex items-center justify-center border border-[#D5C7A3]/20">
                <span className="font-sans text-[#BDB395] text-sm">Project Preview</span>
              </div>
              <p className="font-sans text-[#57595B] text-[15px] sm:text-base font-medium leading-relaxed">
                Lead-generation site for a local SME
              </p>
              <p className="mt-3 font-sans text-[#BDB395] text-sm sm:text-[15px] leading-relaxed">
                Built to improve enquiry quality and page speed
              </p>
            </div>

            {/* Sample 2 */}
            <div className="rounded-xl border border-[#D5C7A3]/30 bg-white/60 backdrop-blur-sm p-6 sm:p-8 hover:border-[#D5C7A3]/50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-[#F2E2B1]/20 to-[#D5C7A3]/20 mb-6 flex items-center justify-center border border-[#D5C7A3]/20">
                <span className="font-sans text-[#BDB395] text-sm">Project Preview</span>
              </div>
              <p className="font-sans text-[#57595B] text-[15px] sm:text-base font-medium leading-relaxed">
                E-commerce rebuild for a growing startup
              </p>
              <p className="mt-3 font-sans text-[#BDB395] text-sm sm:text-[15px] leading-relaxed">
                Scalable architecture designed for conversion and retention
              </p>
            </div>

            {/* Sample 3 */}
            <div className="rounded-xl border border-[#D5C7A3]/30 bg-white/60 backdrop-blur-sm p-6 sm:p-8 hover:border-[#D5C7A3]/50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-[#F2E2B1]/20 to-[#D5C7A3]/20 mb-6 flex items-center justify-center border border-[#D5C7A3]/20">
                <span className="font-sans text-[#BDB395] text-sm">Project Preview</span>
              </div>
              <p className="font-sans text-[#57595B] text-[15px] sm:text-base font-medium leading-relaxed">
                SaaS marketing site with product demos
              </p>
              <p className="mt-3 font-sans text-[#BDB395] text-sm sm:text-[15px] leading-relaxed">
                Clean design focused on trial signups and feature clarity
              </p>
            </div>
          </div>

          {/* Process Snapshot */}
          <div className="mt-20 sm:mt-24">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {/* Step 1 */}
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#F2E2B1]/40 border border-[#D5C7A3]/30 flex items-center justify-center">
                  <span className="font-display font-semibold text-[#57595B] text-sm">1</span>
                </div>
                <h3 className="font-display font-semibold text-[#57595B] text-base sm:text-lg tracking-tight">
                  Strategy
                </h3>
                <p className="font-sans text-[#BDB395] text-[15px] leading-relaxed">
                  Define goals, audience, and conversion intent
                </p>
              </div>

              {/* Step 2 */}
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#F2E2B1]/40 border border-[#D5C7A3]/30 flex items-center justify-center">
                  <span className="font-display font-semibold text-[#57595B] text-sm">2</span>
                </div>
                <h3 className="font-display font-semibold text-[#57595B] text-base sm:text-lg tracking-tight">
                  Structure
                </h3>
                <p className="font-sans text-[#BDB395] text-[15px] leading-relaxed">
                  Plan pages, content hierarchy, and user flow
                </p>
              </div>

              {/* Step 3 */}
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#F2E2B1]/40 border border-[#D5C7A3]/30 flex items-center justify-center">
                  <span className="font-display font-semibold text-[#57595B] text-sm">3</span>
                </div>
                <h3 className="font-display font-semibold text-[#57595B] text-base sm:text-lg tracking-tight">
                  Build
                </h3>
                <p className="font-sans text-[#BDB395] text-[15px] leading-relaxed">
                  Clean, scalable, production-ready code
                </p>
              </div>

              {/* Step 4 */}
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#F2E2B1]/40 border border-[#D5C7A3]/30 flex items-center justify-center">
                  <span className="font-display font-semibold text-[#57595B] text-sm">4</span>
                </div>
                <h3 className="font-display font-semibold text-[#57595B] text-base sm:text-lg tracking-tight">
                  Launch
                </h3>
                <p className="font-sans text-[#BDB395] text-[15px] leading-relaxed">
                  Performance, SEO, and deployment ready
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — final call-to-action */}
      <section className="w-full px-6 py-20 sm:py-28 bg-[#F1E5D1]">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-[#57595B] text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
            Have a project in mind?
          </h2>
          <p className="mt-6 font-sans text-base sm:text-lg text-[#C39898] leading-relaxed max-w-2xl mx-auto">
            Tell us what you're building, and we'll let you know if we're a good fit.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-sans text-base font-medium px-8 py-4 rounded-lg bg-[#987070] text-[#F1E5D1] hover:bg-[#C39898] hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#987070] focus:ring-offset-2 focus:ring-offset-[#F1E5D1]"
            >
              Start a project
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
