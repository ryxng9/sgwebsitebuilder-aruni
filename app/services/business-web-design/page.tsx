import Link from "next/link";
import Navbar, { NAVBAR_HEIGHT_CLASS, ColorScheme } from "@/components/Navbar";
import Footer from "@/components/Footer";

const businessWebDesignColorScheme: ColorScheme = {
  initial: {
    bg: "bg-[#FFFF3A]",
    text: "text-black",
    buttonBg: "bg-[#212121]",
    buttonText: "text-white",
    buttonHoverBg: "hover:bg-black",
  },
  scrolled: {
    bg: "bg-[#FFFF3A]",
    text: "text-black",
    buttonBg: "bg-[#212121]",
    buttonText: "text-white",
    buttonHoverBg: "hover:bg-black",
  },
};

const technologies = [
  {
    title: "Core Stack",
    items: ["Next.js", "React", "TailwindCSS"],
    description: "Modern frameworks that deliver fast, responsive, and maintainable websites with exceptional user experiences.",
    imagePosition: "left" as const,
  },
  {
    title: "Design Systems",
    items: ["Figma to Code", "Component Libraries", "Brand Guidelines Integration"],
    description: "Systematic approach to design implementation ensuring consistency and scalability across your entire web presence.",
    imagePosition: "right" as const,
  },
  {
    title: "User Experience",
    items: ["Responsive Design", "Accessibility Standards (WCAG)", "Mobile-First Approach"],
    description: "Ensuring your website works flawlessly across all devices and is accessible to all users, including those with disabilities.",
    imagePosition: "left" as const,
  },
  {
    title: "Performance",
    items: ["Core Web Vitals Optimization", "SEO Best Practices", "Fast Load Times"],
    description: "Optimized for speed and search engines, ensuring your website ranks well and provides instant user experiences.",
    imagePosition: "right" as const,
  },
];

const results = [
  {
    metric: "+250%",
    description: "Lead generation",
  },
  {
    metric: "92/100",
    description: "PageSpeed score",
  },
  {
    metric: "3x",
    description: "Faster to market",
  },
  {
    metric: "+85%",
    description: "Mobile conversion",
  },
  {
    metric: "60%",
    description: "Lower bounce rate",
  },
];

export default function BusinessWebDesignPage() {
  return (
    <>
      <Navbar colorScheme={businessWebDesignColorScheme} />
      <main className="bg-[#212121] text-white">
        {/* Hero Section */}
        <section className="w-full px-6 pt-32 sm:pt-40 pb-24 sm:pb-32 bg-[#212121]">
          <div className={NAVBAR_HEIGHT_CLASS} aria-hidden="true" />
          <div className="w-full max-w-4xl mx-auto">
            {/* Collaboration text */}
            <div className="mb-6">
              <p className="font-sans text-sm text-white/75">
                In collaboration with{" "}
                <a
                  href="https://www.retroxpect.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFFF3A] font-medium hover:text-white transition-colors duration-200"
                >
                  retroXpect
                </a>
              </p>
            </div>
            
            <h1 className="font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight mb-8 animate-fadeInUp">
              Business Web Design
            </h1>
            
            <p className="font-sans text-base sm:text-lg text-white/85 leading-relaxed max-w-3xl animate-fadeInUp animation-delay-200">
              Professional websites designed to convert visitors into customers. We create clean, modern designs that reflect your brand and drive business results.
            </p>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="w-full px-6 py-24 sm:py-32 bg-[#212121]">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight mb-16">
              Technologies We Use
            </h2>

            <div className="space-y-8">
              {technologies.map((tech) => (
                <div
                  key={tech.title}
                  className={`rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm shadow-lg overflow-hidden flex flex-col ${tech.imagePosition === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Image Section */}
                  <div className="lg:w-1/2 bg-gradient-to-br from-[#FFFF3A]/20 to-white/5 p-12 flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-block p-8 rounded-2xl bg-white/10 backdrop-blur-sm shadow-lg">
                        <div className="font-display font-bold text-white text-3xl mb-4">
                          {tech.title}
                        </div>
                        <div className="w-16 h-1 bg-[#FFFF3A] mx-auto"></div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="font-display font-semibold text-white text-2xl tracking-tight mb-6">
                      {tech.title}
                    </h3>
                    <ul className="space-y-3 mb-6">
                      {tech.items.map((item) => (
                        <li key={item} className="flex gap-3 items-start">
                          <span className="text-[#FFFF3A] shrink-0 mt-1" aria-hidden>•</span>
                          <span className="font-sans text-white/85 text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="font-sans text-white/75 text-sm leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Example Section */}
        <section className="w-full px-6 py-24 sm:py-32 bg-[#212121]">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center mb-16">
              Business Website Example
            </h2>

            <div className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-8 lg:p-12 shadow-lg">
              {/* Placeholder for site preview */}
              <div className="aspect-video rounded-lg bg-gradient-to-br from-[#FFFF3A]/20 to-white/5 mb-8 flex items-center justify-center border border-white/10">
                <span className="font-sans text-white/60 text-lg">Business Website Preview</span>
              </div>

              <h3 className="font-display font-semibold text-white text-xl sm:text-2xl tracking-tight mb-4">
                Professional Services Firm
              </h3>
              
              <p className="font-sans text-white/85 text-base sm:text-lg leading-relaxed mb-6">
                A modern, conversion-focused website for a consulting firm. Clean design with clear service offerings, team profiles, case studies, and an integrated contact system that increased qualified leads by 250%.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-lg bg-[#FFFF3A]/20 text-white text-sm font-medium">
                  Next.js
                </span>
                <span className="px-4 py-2 rounded-lg bg-[#FFFF3A]/20 text-white text-sm font-medium">
                  TailwindCSS
                </span>
                <span className="px-4 py-2 rounded-lg bg-[#FFFF3A]/20 text-white text-sm font-medium">
                  Sanity CMS
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="w-full px-6 py-24 sm:py-32 bg-[#212121]">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center mb-16">
              Client Results
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
              {results.map((result) => (
                <div
                  key={result.metric}
                  className="rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm p-6 shadow-lg text-center flex flex-col justify-between min-h-[140px]"
                >
                  <div className="font-display font-bold text-[#FFFF3A] text-3xl sm:text-4xl">
                    {result.metric}
                  </div>
                  <p className="font-sans text-white/75 text-sm leading-relaxed mt-auto pt-3">
                    {result.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full px-6 py-20 sm:py-28 bg-[#212121]">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
              Ready to Elevate Your Business Online?
            </h2>
            <p className="mt-6 font-sans text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
              Let's create a professional website that represents your brand and converts visitors into customers.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-sans text-base font-medium px-8 py-4 rounded-lg bg-white text-black hover:bg-[#FFFF3A] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
