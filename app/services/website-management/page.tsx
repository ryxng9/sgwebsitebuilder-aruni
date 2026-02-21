import Link from "next/link";
import Navbar, { NAVBAR_HEIGHT_CLASS, ColorScheme } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Clock, Globe, TrendingDown, Zap, Settings, Lock, Gauge, Headphones } from "lucide-react";

const websiteManagementColorScheme: ColorScheme = {
  initial: {
    bg: "bg-[#212121]",
    text: "text-white",
    buttonBg: "bg-[#FFFF3A]",
    buttonText: "text-black",
    buttonHoverBg: "hover:bg-white",
  },
  scrolled: {
    bg: "bg-[#212121]",
    text: "text-white",
    buttonBg: "bg-[#FFFF3A]",
    buttonText: "text-black",
    buttonHoverBg: "hover:bg-white",
  },
};

const services = [
  {
    title: "Maintenance & Updates",
    items: ["Content Updates", "Plugin & Theme Updates", "Bug Fixes & Patches"],
    description: "Regular maintenance ensuring your website stays current, secure, and functioning optimally without disruptions.",
    imagePosition: "left" as const,
    icon: Settings,
  },
  {
    title: "Security & Monitoring",
    items: ["24/7 Uptime Monitoring", "Security Scans", "Malware Protection"],
    description: "Proactive security measures and constant monitoring to protect your website from threats and ensure maximum uptime.",
    imagePosition: "right" as const,
    icon: Lock,
  },
  {
    title: "Performance",
    items: ["Speed Optimization", "Database Cleanup", "Caching Configuration"],
    description: "Continuous performance tuning to ensure fast load times and smooth user experiences across all devices.",
    imagePosition: "left" as const,
    icon: Gauge,
  },
  {
    title: "Support & Reporting",
    items: ["Priority Support", "Monthly Reports", "Analytics Tracking"],
    description: "Dedicated support team and detailed monthly reports keeping you informed about your website's performance and health.",
    imagePosition: "right" as const,
    icon: Headphones,
  },
];

const results = [
  {
    icon: Shield,
    metric: "99.9%",
    description: "Uptime guarantee",
  },
  {
    icon: Clock,
    metric: "<2hrs",
    description: "Response time",
  },
  {
    icon: Globe,
    metric: "50+",
    description: "Sites managed",
  },
  {
    icon: TrendingDown,
    metric: "90%",
    description: "Fewer incidents",
  },
  {
    icon: Zap,
    metric: "40%",
    description: "Faster sites",
  },
];

export default function WebsiteManagementPage() {
  return (
    <>
      <Navbar colorScheme={websiteManagementColorScheme} />
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
              Website Management
            </h1>
            
            <p className="font-sans text-base sm:text-lg text-white/85 leading-relaxed max-w-3xl animate-fadeInUp animation-delay-200">
              Keep your website running smoothly with our comprehensive management services. From regular updates to security monitoring, we handle the technical details so you can focus on your business.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full px-6 py-24 sm:py-32 bg-[#212121]">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight mb-16">
              What's Included
            </h2>

            <div className="space-y-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className={`rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm shadow-lg overflow-hidden flex flex-col ${service.imagePosition === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Icon Section */}
                  <div className="lg:w-1/2 bg-gradient-to-br from-[#FFFF3A]/20 to-white/5 p-12 flex items-center justify-center">
                    {(() => {
                      const Icon = service.icon;
                      return <Icon className="w-32 h-32" style={{ color: '#FFFF3A' }} />;
                    })()}
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="font-display font-semibold text-white text-2xl tracking-tight mb-6">
                      {service.title}
                    </h3>
                    <ul className="space-y-3 mb-6">
                      {service.items.map((item) => (
                        <li key={item} className="flex gap-3 items-start">
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
              Management in Action
            </h2>

            <div className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-8 lg:p-12 shadow-lg">
              {/* Placeholder for dashboard preview */}
              <div className="aspect-video rounded-lg bg-gradient-to-br from-[#FFFF3A]/20 to-white/5 mb-8 flex items-center justify-center border border-white/10">
                <span className="font-sans text-white/60 text-lg">Management Dashboard Preview</span>
              </div>

              <h3 className="font-display font-semibold text-white text-xl sm:text-2xl tracking-tight mb-4">
                Enterprise Client Portfolio
              </h3>
              
              <p className="font-sans text-white/85 text-base sm:text-lg leading-relaxed mb-6">
                We manage a portfolio of 50+ websites for various clients, ensuring 99.9% uptime, regular security updates, performance optimization, and content updates. Our proactive monitoring catches issues before they impact users, and our rapid response team resolves problems in under 2 hours on average.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-lg bg-[#FFFF3A]/20 text-white text-sm font-medium">
                  24/7 Monitoring
                </span>
                <span className="px-4 py-2 rounded-lg bg-[#FFFF3A]/20 text-white text-sm font-medium">
                  Monthly Reports
                </span>
                <span className="px-4 py-2 rounded-lg bg-[#FFFF3A]/20 text-white text-sm font-medium">
                  Priority Support
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="w-full px-6 py-24 sm:py-32 bg-[#212121]">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center mb-16">
              Our Track Record
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
              Let Us Manage Your Website
            </h2>
            <p className="mt-6 font-sans text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
              Focus on your business while we keep your website secure, fast, and up-to-date.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-sans text-base font-medium px-8 py-4 rounded-lg bg-white text-black hover:bg-[#FFFF3A] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white"
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
