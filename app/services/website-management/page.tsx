import Link from "next/link";
import Navbar, { NAVBAR_HEIGHT_CLASS, ColorScheme } from "@/components/Navbar";
import Footer from "@/components/Footer";

const websiteManagementColorScheme: ColorScheme = {
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
  "Content Updates",
  "Security Monitoring",
  "Performance Optimization",
  "Bug Fixes & Maintenance",
  "Backup Management",
  "Analytics & Reporting",
];

const results = [
  {
    metric: "99.9%",
    description: "Uptime guarantee",
  },
  {
    metric: "<2 hours",
    description: "Average response time",
  },
  {
    metric: "50+ sites",
    description: "Currently managed",
  },
];

export default function WebsiteManagementPage() {
  return (
    <>
      <Navbar colorScheme={websiteManagementColorScheme} />
      <main className="bg-white text-black">
        {/* Hero Section */}
        <section className="w-full px-6 pt-32 sm:pt-40 pb-24 sm:pb-32">
          <div className={NAVBAR_HEIGHT_CLASS} aria-hidden="true" />
          <div className="w-full max-w-4xl mx-auto">
            <h1 className="font-display font-bold text-black text-4xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight mb-8 animate-fadeInUp">
              Website Management
            </h1>
            
            <p className="font-sans text-base sm:text-lg text-black/85 leading-relaxed max-w-3xl animate-fadeInUp animation-delay-200">
              Keep your website running smoothly with our comprehensive management services. From regular updates to security monitoring, we handle the technical details so you can focus on your business.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full px-6 py-24 sm:py-32 bg-white/30">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-black text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight mb-12">
              What's Included
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service) => (
                <div
                  key={service}
                  className="rounded-xl border border-black/10 bg-white/60 backdrop-blur-sm p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
                >
                  <p className="font-sans text-black text-base sm:text-lg font-medium">
                    {service}
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
              Management in Action
            </h2>

            <div className="rounded-2xl border border-black/20 bg-white/60 backdrop-blur-sm p-8 lg:p-12 shadow-lg">
              {/* Placeholder for dashboard preview */}
              <div className="aspect-video rounded-lg bg-gradient-to-br from-[#FFFF3A]/20 to-black/5 mb-8 flex items-center justify-center border border-black/10">
                <span className="font-sans text-black/60 text-lg">Management Dashboard Preview</span>
              </div>

              <h3 className="font-display font-semibold text-black text-xl sm:text-2xl tracking-tight mb-4">
                Enterprise Client Portfolio
              </h3>
              
              <p className="font-sans text-black/85 text-base sm:text-lg leading-relaxed mb-6">
                We manage a portfolio of 50+ websites for various clients, ensuring 99.9% uptime, regular security updates, performance optimization, and content updates. Our proactive monitoring catches issues before they impact users, and our rapid response team resolves problems in under 2 hours on average.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-lg bg-[#FFFF3A]/20 text-black text-sm font-medium">
                  24/7 Monitoring
                </span>
                <span className="px-4 py-2 rounded-lg bg-[#FFFF3A]/20 text-black text-sm font-medium">
                  Monthly Reports
                </span>
                <span className="px-4 py-2 rounded-lg bg-[#FFFF3A]/20 text-black text-sm font-medium">
                  Priority Support
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="w-full px-6 py-24 sm:py-32 bg-white/30">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-black text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center mb-16">
              Our Track Record
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
              Let Us Manage Your Website
            </h2>
            <p className="mt-6 font-sans text-base sm:text-lg text-black/75 leading-relaxed max-w-2xl mx-auto">
              Focus on your business while we keep your website secure, fast, and up-to-date.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-sans text-base font-medium px-8 py-4 rounded-lg bg-[#212121] text-white hover:bg-black transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
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
