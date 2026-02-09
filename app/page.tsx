import Link from "next/link";
import { NAVBAR_HEIGHT_CLASS } from "@/components/Navbar";

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
        className="h-screen flex flex-col px-6"
        aria-label="Hero"
      >
        {/* Spacer for fixed navbar */}
        <div className={NAVBAR_HEIGHT_CLASS} aria-hidden="true" />
        {/* Content area — fills remaining space and centers */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-6xl mx-auto">
          <h1 className="font-display font-bold text-beige-cream text-4xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight max-w-3xl">
            Where growing businesses turn traffic into customers.
          </h1>

          <div className="mt-12 flex flex-wrap items-center gap-4 font-sans">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center text-[15px] font-medium px-6 py-3 rounded-lg bg-beige-cream text-brown-red hover:bg-pink-cream transition-colors"
            >
              Start a Project
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center text-[15px] font-medium px-6 py-3 rounded-lg border-2 border-beige-cream text-beige-cream bg-transparent hover:bg-beige-cream/10 transition-colors"
            >
              View our Work
            </Link>
          </div>

          <p className="mt-10 font-sans text-base sm:text-lg text-beige-cream/95 max-w-xl leading-relaxed">
            • We develop conversion-focused websites for startups and SMEs that
            want results, not just a pretty site.
          </p>
          </div>
        </div>
      </section>

      {/* Who it's for — centered, loose spacing */}
      <section className="w-full px-6 py-24 sm:py-32">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="font-display font-bold text-beige-cream text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center max-w-2xl mx-auto">
            Built for teams that want results.
          </h2>
          <p className="mt-6 font-sans text-base sm:text-lg text-beige-cream/90 text-center max-w-xl mx-auto leading-relaxed">
            We work best with teams who value performance over polish alone.
          </p>

          <div className="mt-16 grid sm:grid-cols-2 gap-8 sm:gap-10 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-beige-cream/20 bg-beige-cream/5 backdrop-blur-sm p-8 sm:p-10">
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

            <div className="rounded-2xl border border-beige-cream/15 bg-beige-cream/[0.03] backdrop-blur-sm p-8 sm:p-10">
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
    </main>
  );
}
