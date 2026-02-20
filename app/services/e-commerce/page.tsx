import Link from "next/link";
import Navbar, { NAVBAR_HEIGHT_CLASS, ColorScheme } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TrendingUp, Users, Zap, Clock, DollarSign } from "lucide-react";
import Image from "next/image";

const ecommerceColorScheme: ColorScheme = {
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
    items: ["Next.js", "React", "TypeScript"],
    description: "Modern, type-safe frameworks that ensure scalability, maintainability, and exceptional performance for your e-commerce platform.",
    imagePosition: "left" as const,
    image: "/images/services/e-commerce/nextjs.svg",
  },
  {
    title: "Commerce Platforms",
    items: ["Shopify", "WooCommerce", "Ecwid"],
    description: "Industry-leading platforms that provide robust product management, secure payments, and seamless inventory control.",
    imagePosition: "right" as const,
    image: "/images/services/e-commerce/shopify.png",
  },
  {
    title: "Architecture",
    items: ["Headless CMS (Sanity/Contentful)", "Custom API Integrations", "Webhook-based automation"],
    description: "Flexible content management and API-driven architecture that allows for custom workflows and third-party integrations.",
    imagePosition: "left" as const,
    image: "/images/services/e-commerce/sanity.webp",
  },
  {
    title: "Operations",
    items: ["Inventory syncing", "Order management logic", "Automated fulfilment flows"],
    description: "Streamlined operational systems that reduce manual work and ensure accurate, real-time synchronization across platforms.",
    imagePosition: "right" as const,
    image: "/images/services/e-commerce/zapier.png",
  },
];

const results = [
  {
    icon: TrendingUp,
    metric: "+180%",
    description: "Conversion rate",
  },
  {
    icon: Users,
    metric: "+130%",
    description: "Organic traffic",
  },
  {
    icon: Zap,
    metric: "45%",
    description: "Faster load times",
  },
  {
    icon: Clock,
    metric: "70%",
    description: "Less manual work",
  },
  {
    icon: DollarSign,
    metric: "+30%",
    description: "Revenue growth",
  },
];

export default function EcommercePage() {
  return (
    <>
      <Navbar colorScheme={ecommerceColorScheme} />
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
              E-commerce Development
            </h1>
            
            <p className="font-sans text-base sm:text-lg text-white/85 leading-relaxed max-w-3xl animate-fadeInUp animation-delay-200">
              Build high-converting online stores that scale with your business. From custom shopping experiences to seamless payment integration, we create e-commerce solutions that drive revenue.
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
                    <div className="relative w-64 h-64">
                      <Image
                        src={tech.image}
                        alt={tech.title}
                        fill
                        className="object-contain"
                      />
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
              E-commerce Site Example
            </h2>

            <div className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-8 lg:p-12 shadow-lg">
              {/* Placeholder for site preview */}
              <div className="aspect-video rounded-lg bg-gradient-to-br from-[#FFFF3A]/20 to-white/5 mb-8 flex items-center justify-center border border-white/10">
                <span className="font-sans text-white/60 text-lg">E-commerce Site Preview</span>
              </div>

              <h3 className="font-display font-semibold text-white text-xl sm:text-2xl tracking-tight mb-4">
                Fashion Retailer Online Store
              </h3>
              
              <p className="font-sans text-white/85 text-base sm:text-lg leading-relaxed mb-6">
                A complete e-commerce solution built for a growing fashion brand. Features include custom product filtering, wishlist functionality, size guides, and seamless checkout experience.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-lg bg-[#FFFF3A]/20 text-white text-sm font-medium">
                  Next.js
                </span>
                <span className="px-4 py-2 rounded-lg bg-[#FFFF3A]/20 text-white text-sm font-medium">
                  Shopify
                </span>
                <span className="px-4 py-2 rounded-lg bg-[#FFFF3A]/20 text-white text-sm font-medium">
                  Stripe
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
              {results.map((result) => {
                const Icon = result.icon;
                return (
                  <div
                    key={result.metric}
                    className="rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm p-6 shadow-lg text-center flex flex-col items-center gap-4 min-h-[180px]"
                  >
                    <Icon className="w-10 h-10" style={{ color: '#FFFF3A' }} />
                    <div className="font-display font-bold text-white text-3xl sm:text-4xl">
                      {result.metric}
                    </div>
                    <p className="font-sans text-white text-sm leading-relaxed">
                      {result.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full px-6 py-20 sm:py-28 bg-[#212121]">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
              Ready to Build Your E-commerce Store?
            </h2>
            <p className="mt-6 font-sans text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Let's discuss your e-commerce project and create a solution that drives sales and scales with your business.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-sans text-base font-medium px-8 py-4 rounded-lg bg-white text-black hover:bg-[#FFFF3A] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
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
