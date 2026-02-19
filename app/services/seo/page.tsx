import Link from "next/link";
import Navbar, { NAVBAR_HEIGHT_CLASS, ColorScheme } from "@/components/Navbar";
import Footer from "@/components/Footer";

const seoColorScheme: ColorScheme = {
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

const services = [
  {
    title: "Technical SEO",
    items: ["Site Architecture", "XML Sitemaps", "Robots.txt Optimization"],
    description: "Foundation-level SEO ensuring search engines can properly crawl, index, and understand your website structure.",
    imagePosition: "left" as const,
  },
  {
    title: "On-Page Optimization",
    items: ["Meta Tags & Titles", "Header Structure", "Content Optimization"],
    description: "Strategic optimization of page elements to improve relevance and rankings for target keywords.",
    imagePosition: "right" as const,
  },
  {
    title: "Performance & Core Web Vitals",
    items: ["Page Speed Optimization", "Mobile Responsiveness", "User Experience Metrics"],
    description: "Technical performance improvements that directly impact search rankings and user satisfaction.",
    imagePosition: "left" as const,
  },
  {
    title: "Structured Data",
    items: ["Schema Markup", "Rich Snippets", "Knowledge Graph Optimization"],
    description: "Advanced markup helping search engines understand your content and display enhanced search results.",
    imagePosition: "right" as const,
  },
];

const results = [
  {
    metric: "+320%",
    description: "Increase in organic traffic",
  },
  {
    metric: "Top 3",
    description: "Rankings for target keywords",
  },
  {
    metric: "95+",
    description: "Average PageSpeed score",
  },
  {
    metric: "+150%",
    description: "Click-through rate improvement",
  },
  {
    metric: "60% increase",
    description: "Indexed pages",
  },
];

export default function SEOPage() {
  return (
    <>
      <Navbar colorScheme={seoColorScheme} />
      <main className="bg-[#212121] text-white">
        {/* Hero Section */}
        <section className="w-full px-6 pt-32 sm:pt-40 pb-24 sm:pb-32 bg-[#212121]">
          <div className={NAVBAR_HEIGHT_CLASS} aria-hidden="true" />
          <div className="w-full max-w-4xl mx-auto">
            <h1 className="font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight mb-8 animate-fadeInUp">
              SEO Optimization
            </h1>
            
            <p className="font-sans text-base sm:text-lg text-white/85 leading-relaxed max-w-3xl animate-fadeInUp animation-delay-200">
              Improve your search rankings and drive organic traffic with technical SEO optimization. We focus on the technical foundation that search engines love and users appreciate.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full px-6 py-24 sm:py-32 bg-[#212121]">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight mb-16">
              SEO Services
            </h2>

            <div className="space-y-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className={`rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm shadow-lg overflow-hidden flex flex-col ${service.imagePosition === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Image Section */}
                  <div className="lg:w-1/2 bg-gradient-to-br from-[#FFFF3A]/20 to-white/5 p-12 flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-block p-8 rounded-2xl bg-white/10 backdrop-blur-sm shadow-lg">
                        <div className="font-display font-bold text-white text-3xl mb-4">
                          {service.title}
                        </div>
                        <div className="w-16 h-1 bg-[#FFFF3A] mx-auto"></div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="font-display font-semibold text-white text-2xl tracking-tight mb-6">
                      {service.title}
                    </h3>
                    <ul className="space-y-3 mb-6">
                      {service.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="text-[#FFFF3A] shrink-0 mt-1" aria-hidden>•</span>
                          <span className="font-sans text-white/85 text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="font-sans text-white/75 text-sm leading-relaxed">
                      {service.description}
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
              SEO Success Story
            </h2>

            <div className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-8 lg:p-12 shadow-lg">
              {/* Placeholder for analytics preview */}
              <div className="aspect-video rounded-lg bg-gradient-to-br from-[#FFFF3A]/20 to-white/5 mb-8 flex items-center justify-center border border-white/10">
                <span className="font-sans text-white/60 text-lg">SEO Analytics Preview</span>
              </div>

              <h3 className="font-display font-semibold text-white text-xl sm:text-2xl tracking-tight mb-4">
                B2B SaaS Company
              </h3>
              
              <p className="font-sans text-white/85 text-base sm:text-lg leading-relaxed mb-6">
                Comprehensive SEO optimization for a B2B SaaS platform resulted in a 320% increase in organic traffic within 6 months. We implemented technical SEO best practices, optimized Core Web Vitals, added structured data, and improved mobile performance. The site now ranks in the top 3 for all target keywords with an average PageSpeed score of 95+.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-lg bg-[#FFFF3A]/20 text-white text-sm font-medium">
                  Technical SEO
                </span>
                <span className="px-4 py-2 rounded-lg bg-[#FFFF3A]/20 text-white text-sm font-medium">
                  Performance
                </span>
                <span className="px-4 py-2 rounded-lg bg-[#FFFF3A]/20 text-white text-sm font-medium">
                  Schema Markup
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
                  className="rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm p-6 shadow-lg text-center"
                >
                  <div className="font-display font-bold text-[#FFFF3A] text-3xl sm:text-4xl mb-3">
                    {result.metric}
                  </div>
                  <p className="font-sans text-white/75 text-sm leading-relaxed">
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
              Ready to Improve Your Rankings?
            </h2>
            <p className="mt-6 font-sans text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
              Let's optimize your website for search engines and drive more organic traffic to your business.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-sans text-base font-medium px-8 py-4 rounded-lg bg-white text-black hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
