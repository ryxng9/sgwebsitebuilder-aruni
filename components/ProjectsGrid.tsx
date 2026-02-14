"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
}

const typeLabels: Record<string, string> = {
  ecommerce: "E-commerce",
  business: "Business Website",
  custom: "Custom Web App",
  saas: "SaaS Platform",
  portfolio: "Portfolio",
};

interface ProjectsGridProps {
  projects: WorkProject[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_DISPLAY = 12; // 4 rows x 3 columns
  
  const displayedProjects = showAll ? projects : projects.slice(0, INITIAL_DISPLAY);
  const hasMore = projects.length > INITIAL_DISPLAY;

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {displayedProjects.map((project) => (
          <Link
            key={project._id}
            href={`/work/${project.slug.current}`}
            className="group rounded-xl border border-black/15 bg-white/60 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
          >
            {/* Project Image */}
            <div className="relative aspect-video bg-gradient-to-br from-[#FFFF3A]/20 to-black/5">
              {project.image ? (
                <Image
                  src={urlFor(project.image).width(600).height(400).url()}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-sans text-black/40 text-sm">No image</span>
                </div>
              )}
            </div>

            {/* Project Content */}
            <div className="p-5">
              {/* Type Badge */}
              <div className="mb-3">
                <span className="inline-block px-3 py-1 rounded-full bg-[#FFFF3A]/20 text-black text-xs font-medium uppercase tracking-wide">
                  {typeLabels[project.type] || project.type}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-black text-lg tracking-tight mb-4 group-hover:text-black/80 transition-colors">
                {project.title}
              </h3>

              {/* Features List */}
              <div className="space-y-2">
                <h4 className="font-sans font-medium text-black/60 text-xs uppercase tracking-wide">
                  Key Features
                </h4>
                <ul className="space-y-1.5">
                  {project.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex gap-2 items-start">
                      <span className="text-[#FFFF3A] shrink-0 mt-1 text-sm" aria-hidden>•</span>
                      <span className="font-sans text-black/75 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Load More / Collapse Button */}
      {hasMore && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center justify-center font-sans text-base font-medium px-8 py-4 rounded-lg border-2 border-black text-black bg-transparent hover:bg-black/5 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            {showAll ? "Show Less" : `Load More (${projects.length - INITIAL_DISPLAY} more)`}
          </button>
        </div>
      )}
    </>
  );
}
