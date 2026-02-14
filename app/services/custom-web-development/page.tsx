import Link from "next/link";
import Navbar, { NAVBAR_HEIGHT_CLASS, ColorScheme } from "@/components/Navbar";
import Footer from "@/components/Footer";

const customWebDevColorScheme: ColorScheme = {
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
  "Node.js & Express",
  "PostgreSQL & MongoDB",
  "API Development",
  "Third-party Integrations",
  "Cloud Deployment",
];

const results = [
  {
    metric: "60% faster",
    description: "Development time vs traditional methods",
  },
  {
    metric: "99.9%",
    description: "Uptime reliability",
  },
  {
    metric: "100K+",
    description: "Users handled daily",
  },
];

export default function CustomWebDevelopmentPage() {
  return (
    <>
      <Navbar colorScheme={customWebDevColorScheme} />
      <main className="bg-white text-black">
        {/* Hero Section */}
        <section className="w-full px-6 pt-32 sm:pt-40 pb-24 sm:pb-32">
          <div className={NAVBAR_HEIGHT_CLASS} aria-hidden="true" />
          <div className="w-full max-w-4xl mx-auto">
            <h1 className="font-display font-bold text-black text-4xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight mb-8 animate-fadeInUp">
              Custom Web Development
            </h1>
            
            <p className="font-sans text-base sm:text-lg text-black/85 leading-relaxed max-w-3xl animate-fadeInUp animation-delay-200">
              Tailored web applications built to your exact specifications. From complex dashboards to custom workflows, we develop scalable solutions that solve your unique business challenges.
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
              Custom Application Example
            </h2>

            <div className="rounded-2xl border border-black/20 bg-white/60 backdrop-blur-sm p-8 lg:p-12 shadow-lg">
              {/* Placeholder for site preview */}
              <div className="aspect-video rounded-lg bg-gradient-to-br from-[#FFFF3A]/20 to-black/5 mb-8 flex items-center justify-center border border-black/10">
                <span className="font-sans text-black/60 text-lg">Custom Application Preview</span>
              </div>

              <h3 className="font-display font-semibold text-black text-xl sm:text-2xl tracking-tight mb-4">
                SaaS Project Management Platform
              </h3>
              
              <p className="font-sans text-black/85 text-base sm:text-lg leading-relaxed mb-6">
                A fully custom project management solution built for a growing startup. Features include real-time collaboration, custom workflows, advanced reporting, and integrations with 15+ third-party tools. Now serving 100K+ daily active users.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-lg bg-[#FFFF3A]/20 text-black text-sm font-medium">
                  Next.js
                </span>
                <span className="px-4 py-2 rounded-lg bg-[#FFFF3A]/20 text-black text-sm font-medium">
                  Node.js
                </span>
                <span className="px-4 py-2 rounded-lg bg-[#FFFF3A]/20 text-black text-sm font-medium">
                  PostgreSQL
                </span>
                <span className="px-4 py-2 rounded-lg bg-[#FFFF3A]/20 text-black text-sm font-medium">
                  AWS
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
              Need a Custom Solution?
            </h2>
            <p className="mt-6 font-sans text-base sm:text-lg text-black/75 leading-relaxed max-w-2xl mx-auto">
              Let's discuss your unique requirements and build a custom web application that perfectly fits your business needs.
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
