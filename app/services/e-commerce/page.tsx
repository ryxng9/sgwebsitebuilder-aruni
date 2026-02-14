import Link from "next/link";
import Navbar, { NAVBAR_HEIGHT_CLASS, ColorScheme } from "@/components/Navbar";
import Footer from "@/components/Footer";

const ecommerceColorScheme: ColorScheme = {
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

const technologies = [
  "Next.js & React",
  "Shopify & WooCommerce",
  "Stripe & Payment Gateways",
  "Headless CMS Integration",
  "Custom Cart Solutions",
  "Inventory Management",
];

const results = [
  {
    metric: "+180%",
    description: "Increase in conversion rate",
  },
  {
    metric: "45% faster",
    description: "Page load times",
  },
  {
    metric: "+$250K",
    description: "Additional revenue in 6 months",
  },
];

export default function EcommercePage() {
  return (
    <>
      <Navbar colorScheme={ecommerceColorScheme} />
      <main className="bg-white text-black">
        {/* Hero Section */}
        <section className="w-full px-6 pt-32 sm:pt-40 pb-24 sm:pb-32">
          <div className={NAVBAR_HEIGHT_CLASS} aria-hidden="true" />
          <div className="w-full max-w-4xl mx-auto">
            <h1 className="font-display font-bold text-black text-4xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight mb-8 animate-fadeInUp">
              E-commerce Development
            </h1>
            
            <p className="font-sans text-base sm:text-lg text-black/85 leading-relaxed max-w-3xl animate-fadeInUp animation-delay-200">
              Build high-converting online stores that scale with your business. From custom shopping experiences to seamless payment integration, we create e-commerce solutions that drive revenue.
            </p>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="w-full px-6 py-24 sm:py-32 bg-white/30">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-black text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight mb-12">
              Technologies We Use
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className="rounded-xl border border-black/10 bg-white/60 backdrop-blur-sm p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
                >
                  <p className="font-sans text-black text-base sm:text-lg font-medium">
                    {tech}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Example Section */}
        <section className="w-full px-6 py-24 sm:py-32">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-black text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center mb-16">
              E-commerce Site Example
            </h2>

            <div className="rounded-2xl border border-black/20 bg-white/60 backdrop-blur-sm p-8 lg:p-12 shadow-lg">
              {/* Placeholder for site preview */}
              <div className="aspect-video rounded-lg bg-gradient-to-br from-[#FFFF3A]/20 to-black/5 mb-8 flex items-center justify-center border border-black/10">
                <span className="font-sans text-black/60 text-lg">E-commerce Site Preview</span>
              </div>

              <h3 className="font-display font-semibold text-black text-xl sm:text-2xl tracking-tight mb-4">
                Fashion Retailer Online Store
              </h3>
              
              <p className="font-sans text-black/85 text-base sm:text-lg leading-relaxed mb-6">
                A complete e-commerce solution built for a growing fashion brand. Features include custom product filtering, wishlist functionality, size guides, and seamless checkout experience.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-lg bg-[#FFFF3A]/20 text-black text-sm font-medium">
                  Next.js
                </span>
                <span className="px-4 py-2 rounded-lg bg-[#FFFF3A]/20 text-black text-sm font-medium">
                  Shopify
                </span>
                <span className="px-4 py-2 rounded-lg bg-[#FFFF3A]/20 text-black text-sm font-medium">
                  Stripe
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="w-full px-6 py-24 sm:py-32 bg-white/30">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-black text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center mb-16">
              Client Results
            </h2>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              {results.map((result) => (
                <div
                  key={result.metric}
                  className="rounded-xl border border-black/15 bg-white/60 backdrop-blur-sm p-8 shadow-lg text-center"
                >
                  <div className="font-display font-bold text-[#FFFF3A] text-4xl sm:text-5xl mb-3">
                    {result.metric}
                  </div>
                  <p className="font-sans text-black/75 text-base sm:text-lg leading-relaxed">
                    {result.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full px-6 py-20 sm:py-28">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-black text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
              Ready to Build Your E-commerce Store?
            </h2>
            <p className="mt-6 font-sans text-base sm:text-lg text-black/75 leading-relaxed max-w-2xl mx-auto">
              Let's discuss your e-commerce project and create a solution that drives sales and scales with your business.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-sans text-base font-medium px-8 py-4 rounded-lg bg-[#212121] text-white hover:bg-black transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
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
