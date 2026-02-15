import Image from "next/image";
import Link from "next/link";
import Navbar, { NAVBAR_HEIGHT_CLASS, ColorScheme } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
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
  publishedAt?: string;
}

const WORK_DETAIL_QUERY = `*[_type == "work" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  image,
  type,
  features,
  description,
  technologies,
  publishedAt
}`;

const options = { next: { revalidate: 30 } };

async function getWorkProject(slug: string): Promise<WorkProject | null> {
  return client.fetch(WORK_DETAIL_QUERY, { slug }, options);
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
    bg: "bg-white",
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

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getWorkProject(slug);

  if (!project) {
    return (
      <>
        <Navbar colorScheme={workColorScheme} />
        <main className="bg-white text-black min-h-screen flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="font-display font-bold text-4xl mb-4">Project Not Found</h1>
            <p className="font-sans text-lg text-black/75 mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Link
              href="/work"
              className="inline-flex items-center justify-center font-sans text-base font-medium px-8 py-4 rounded-lg bg-[#212121] text-white hover:bg-black transition-all duration-200"
            >
              Back to Projects
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar colorScheme={workColorScheme} />
      <main className="bg-white text-black">
        {/* Hero Section */}
        <section className="w-full px-6 pt-32 sm:pt-40 pb-16 sm:pb-20">
          <div className={NAVBAR_HEIGHT_CLASS} aria-hidden="true" />
          
          {/* Back Button */}
          <div className="w-full max-w-5xl mx-auto mb-8">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-sans text-sm text-black/60 hover:text-black transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </Link>
          </div>

          <div className="w-full max-w-5xl mx-auto">
            {/* Type Badge */}
            <div className="mb-4">
              <span className="inline-block px-4 py-2 rounded-full bg-[#FFFF3A]/20 text-black text-sm font-medium uppercase tracking-wide">
                {typeLabels[project.type] || project.type}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display font-bold text-black text-4xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight mb-6">
              {project.title}
            </h1>

            {/* Description */}
            {project.description && (
              <p className="font-sans text-lg sm:text-xl text-black/75 leading-relaxed max-w-3xl">
                {project.description}
              </p>
            )}
          </div>
        </section>

        {/* Project Image */}
        <section className="w-full px-6 pb-16 sm:pb-20">
          <div className="w-full max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#FFFF3A]/20 to-black/5">
              {project.image ? (
                <Image
                  src={urlFor(project.image).width(1200).height(675).url()}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-sans text-black/40 text-lg">No image available</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="w-full px-6 py-16 sm:py-20 bg-white/30">
          <div className="w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Key Features */}
            <div>
              <h2 className="font-display font-bold text-black text-2xl sm:text-3xl tracking-tight mb-6">
                Key Features
              </h2>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="text-[#FFFF3A] shrink-0 mt-1.5 text-lg" aria-hidden>•</span>
                    <span className="font-sans text-black/85 text-base sm:text-lg leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div>
                <h2 className="font-display font-bold text-black text-2xl sm:text-3xl tracking-tight mb-6">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-lg bg-white border border-black/10 text-black text-sm font-medium shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section — BLACK SECTION */}
        <section className="w-full px-6 py-20 sm:py-28 bg-black">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
              Interested in a Similar Project?
            </h2>
            <p className="mt-6 font-sans text-base sm:text-lg text-[#FFFF3A] leading-relaxed max-w-2xl mx-auto">
              Let's create something exceptional
            </p>
            <p className="mt-4 font-sans text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Discuss how we can help bring your vision to life with a similar approach.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-sans text-base font-medium px-8 py-4 rounded-lg bg-[#FFFF3A] text-black hover:bg-[#FFFF3A]/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center font-sans text-base font-medium px-8 py-4 rounded-lg border-2 border-white text-white bg-transparent hover:bg-white/10 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
