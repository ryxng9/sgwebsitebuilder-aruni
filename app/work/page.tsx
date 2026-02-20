import Link from "next/link";
import Navbar, { NAVBAR_HEIGHT_CLASS, ColorScheme } from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsGrid from "@/components/ProjectsGrid";
import HeroWaveWork from "@/components/HeroWaveWork";
import { client } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

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

const WORK_QUERY = `*[_type == "work"] | order(publishedAt desc) {
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

async function getWorkProjects(): Promise<WorkProject[]> {
  return client.fetch(WORK_QUERY, {}, options);
}

const workColorScheme: ColorScheme = {
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

const typeLabels: Record<string, string> = {
  ecommerce: "E-commerce",
  business: "Business Website",
  custom: "Custom Web App",
  saas: "SaaS Platform",
  portfolio: "Portfolio",
};

export default async function Work() {
  const projects = await getWorkProjects();
  
  return (
    <>
      <Navbar colorScheme={workColorScheme} />
      <main className="bg-[#212121] text-white">
        {/* Hero Section */}
        <section
          className="h-screen flex flex-col px-6 relative overflow-hidden"
          aria-label="Hero"
        >
          {/* Spacer for fixed navbar */}
          <div className={NAVBAR_HEIGHT_CLASS} aria-hidden="true" />
        
          {/* Collaboration text */}
          <div className="w-full text-center pt-4">
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
        
          {/* Content area — fills remaining space and centers higher */}
          <div className="flex-1 flex items-center justify-center pb-32">
            <div className="w-full max-w-4xl mx-auto text-center">
              <h1 className="font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight animate-fadeInUp">
                Our Projects
              </h1>
              
              <p className="mt-8 font-sans text-base sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200">
                A showcase of the work we've delivered for our clients. From e-commerce platforms to custom web applications.
              </p>
            </div>
          </div>
        
          {/* Animated Wave */}
          <HeroWaveWork />
        </section>

        {/* Projects Grid Section */}
        <section className="w-full px-6 py-24 sm:py-32">
          <div className="w-full max-w-7xl mx-auto">
            {projects.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-sans text-black/60 text-lg">
                  No projects yet. Add projects in the{" "}
                  <Link href="/studio" className="text-[#FFFF3A] hover:underline">
                    Sanity Studio
                  </Link>
                  .
                </p>
              </div>
            ) : (
              <ProjectsGrid projects={projects} />
            )}
          </div>
        </section>

        {/* CTA Section — BLACK SECTION */}
        <section className="w-full px-6 py-20 sm:py-28 bg-[#212121]">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="mt-6 font-sans text-base sm:text-lg text-[#FFFF3A] leading-relaxed max-w-2xl mx-auto">
              Let's create something exceptional
            </p>
            <p className="mt-4 font-sans text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
              Discuss your project and see how we can help bring your vision to life.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-sans text-base font-medium px-8 py-4 rounded-lg bg-white text-black hover:bg-[#FFFF3A] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
