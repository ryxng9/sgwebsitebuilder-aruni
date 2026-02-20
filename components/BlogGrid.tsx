"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  image: SanityImageSource;
  content: any[];
  excerpt?: string;
  author: string;
  type: string;
  publishedAt: string;
}

const typeLabels: Record<string, string> = {
  announcement: "Announcement",
  tutorial: "Tutorial",
  "case-study": "Case Study",
  news: "News",
  update: "Update",
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear().toString().slice(-2);
  return `${day} ${month} ${year}`;
}

function getExcerpt(post: BlogPost): string {
  if (post.excerpt) return post.excerpt;
  
  // Extract text from first paragraph of content
  if (post.content && post.content.length > 0) {
    const firstBlock = post.content.find((block: any) => block._type === 'block');
    if (firstBlock && firstBlock.children) {
      const text = firstBlock.children
        .map((child: any) => child.text)
        .join('');
      return text.slice(0, 120) + (text.length > 120 ? '...' : '');
    }
  }
  
  return '';
}

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  const [showAll, setShowAll] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const INITIAL_DISPLAY = 12; // 4 rows x 3 columns
  
  // Get unique types from posts
  const availableTypes = Array.from(new Set(posts.map(p => p.type)));
  
  // Toggle type selection
  const toggleType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };
  
  // Filter posts by selected types
  const filteredPosts = selectedTypes.length > 0
    ? posts.filter(p => selectedTypes.includes(p.type))
    : posts;
  
  const displayedPosts = showAll ? filteredPosts : filteredPosts.slice(0, INITIAL_DISPLAY);
  const hasMore = filteredPosts.length > INITIAL_DISPLAY;

  return (
    <>
      {/* Type Filter */}
      {availableTypes.length > 0 && (
        <div className="mb-8">
          <h3 className="font-sans font-medium text-[#FFFF3A] text-sm uppercase tracking-wide mb-4">
            Filter by Type
          </h3>
          <div className="flex flex-wrap gap-3">
            {availableTypes.map((type) => (
              <button
                key={type}
                onClick={() => toggleType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide transition-all duration-200 ${
                  selectedTypes.includes(type)
                    ? 'bg-[#FFFF3A] text-black shadow-md'
                    : 'bg-white/5 border border-white/20 text-white/70 hover:border-white/40'
                }`}
              >
                {typeLabels[type] || type}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {displayedPosts.map((post) => (
          <div
            key={post._id}
            className="group rounded-xl border border-white/15 bg-[#212121] backdrop-blur-sm overflow-hidden shadow-lg flex flex-col"
          >
            {/* Post Image */}
            <Link href={`/blog/${post.slug.current}`} className="block">
              <div className="relative aspect-video bg-gradient-to-br from-[#FFFF3A]/20 to-white/5">
              {post.image ? (
                <Image
                  src={urlFor(post.image).width(600).height(400).url()}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-sans text-white/40 text-sm">No image</span>
                </div>
              )}
            </div>
            </Link>

            {/* Post Content */}
            <div className="p-5 flex flex-col flex-1">
              {/* Type Badge */}
              <div className="mb-3">
                <span className="inline-block px-3 py-1 rounded-full bg-[#FFFF3A]/20 text-white text-xs font-medium uppercase tracking-wide">
                  {typeLabels[post.type] || post.type}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-white text-lg tracking-tight mb-3 line-clamp-2">
                {post.title}
              </h3>

              {/* Content/Excerpt */}
              <p className="font-sans text-white/75 text-sm leading-relaxed mb-4 line-clamp-3">
                {getExcerpt(post)}
              </p>

              {/* View More Button */}
              <div className="mt-auto">
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="inline-flex items-center justify-center font-sans text-sm font-medium px-6 py-2.5 rounded-lg bg-white text-black hover:bg-[#FFFF3A] transition-all duration-200 shadow-md hover:shadow-lg mb-3"
                >
                  View More
                </Link>
              </div>
              
              {/* Publish Date */}
              <div className="pt-3 border-t border-white/10">
                <span className="font-sans text-white/60 text-xs">
                  {formatDate(post.publishedAt)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More / Collapse Button */}
      {hasMore && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center justify-center font-sans text-base font-medium px-8 py-4 rounded-lg border-2 border-black text-black bg-transparent hover:bg-black/5 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            {showAll ? "Show Less" : `Load More (${filteredPosts.length - INITIAL_DISPLAY} more)`}
          </button>
        </div>
      )}
    </>
  );
}
