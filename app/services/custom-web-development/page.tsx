import Link from "next/link";
import Navbar, { NAVBAR_HEIGHT_CLASS, ColorScheme } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Zap, Shield, Users, TrendingUp, Clock } from "lucide-react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const customWebDevColorScheme: ColorScheme = {
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

const technologies = [
  {
    title: "Frontend Stack",
    items: ["Next.js", "React", "TypeScript"],
    description: "Modern, type-safe frontend frameworks that deliver exceptional user experiences with maintainable, scalable code.",
    imagePosition: "left" as const,
    image: "/images/services/custom-web-development/nextjs.svg",
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "Express", "RESTful & GraphQL APIs"],
    description: "Robust server-side architecture with flexible API design for seamless data flow and third-party integrations.",
    imagePosition: "right" as const,
    image: "/images/services/custom-web-development/nodejs.svg",
  },
  {
    title: "Database Solutions",
    items: ["PostgreSQL", "MongoDB", "Redis Caching"],
    description: "Reliable data storage solutions optimized for performance, scalability, and data integrity across all use cases.",
    imagePosition: "left" as const,
    image: "/images/services/custom-web-development/postgresql.png",
  },
  {
    title: "Infrastructure",
    items: ["AWS/Vercel Deployment", "CI/CD Pipelines", "Monitoring & Analytics"],
    description: "Enterprise-grade infrastructure with automated deployments, real-time monitoring, and 99.9% uptime guarantees.",
    imagePosition: "right" as const,
    image: "/images/services/custom-web-development/vercel.svg",
  },
];

const results = [
  {
    icon: Zap,
    metric: "60%",
    description: "Faster development",
  },
  {
    icon: Shield,
    metric: "99.9%",
    description: "Uptime reliability",
  },
  {
    icon: Users,
    metric: "100K+",
    description: "Daily users",
  },
  {
    icon: TrendingUp,
    metric: "+200%",
    description: "Workflow efficiency",
  },
  {
    icon: Clock,
    metric: "50%",
    description: "Less manual work",
  },
];

interface WorkProject {
  _id: string;
  title: string;
  slug: { current: string };
  image: SanityImageSource;
  type: string;
  features: string[];
  description?: string;
  technologies?: string[];
}

const CUSTOM_QUERY = `*[_type == "work" && type == "custom"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  image,
  type,
  features,
  description,
  technologies
}`;

const options = { next: { revalidate: 30 } };

async function getCustomProjects(): Promise<WorkProject[]> {
  return client.fetch(CUSTOM_QUERY, {}, options);
}

export default async function CustomWebDevelopmentPage() {
  const customProjects = await getCustomProjects();
  return (
    <>
      <Navbar colorScheme={customWebDevColorScheme} />
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
              Custom Web Development
            </h1>
            
            <p className="font-sans text-base sm:text-lg text-white/85 leading-relaxed max-w-3xl animate-fadeInUp animation-delay-200">
              Tailored web applications built to your exact specifications. From complex dashboards to custom workflows, we develop scalable solutions that solve your unique business challenges.
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
              Custom Application Examples
            </h2>

            {customProjects.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-sans text-white/60 text-lg">
                  No custom projects yet. Add projects in the{" "}
                  <Link href="/studio" className="text-[#FFFF3A] hover:underline">
                    Sanity Studio
                  </Link>
                  .
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                {customProjects.map((project) => (
                  <div key={project._id} className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-8 lg:p-12 shadow-lg">
                    {/* Project Image */}
                    <Link href={`/work/${project.slug.current}`} className="block mb-8">
                      <div className="aspect-video rounded-lg bg-gradient-to-br from-[#FFFF3A]/20 to-white/5 relative overflow-hidden border border-white/10">
                        {project.image ? (
                          <Image
                            src={urlFor(project.image).width(1200).height(675).url()}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="font-sans text-white/60 text-lg">{project.title}</span>
                          </div>
                        )}
                      </div>
                    </Link>

                    <h3 className="font-display font-semibold text-white text-xl sm:text-2xl tracking-tight mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="font-sans text-white/85 text-base sm:text-lg leading-relaxed mb-6">
                      {project.description || "A custom web application showcasing our expertise."}
                    </p>

                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-4 py-2 rounded-lg bg-[#FFFF3A]/20 text-white text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    <Link
                      href={`/work/${project.slug.current}`}
                      className="inline-flex items-center justify-center font-sans text-sm font-medium px-6 py-3 rounded-lg bg-white text-black hover:bg-[#FFFF3A] transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      View Case Study
                    </Link>
                  </div>
                ))}
              </div>
            )}
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
              Need a Custom Solution?
            </h2>
            <p className="mt-6 font-sans text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
              Let's discuss your unique requirements and build a custom web application that perfectly fits your business needs.
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
