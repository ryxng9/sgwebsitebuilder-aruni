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
  const INITIAL_DISPLAY = 12; // 4 rows x 3 columns
  
  const displayedPosts = showAll ? posts : posts.slice(0, INITIAL_DISPLAY);
  const hasMore = posts.length > INITIAL_DISPLAY;

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {displayedPosts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug.current}`}
            className="group rounded-xl border border-black/15 bg-white/60 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
          >
            {/* Post Image */}
            <div className="relative aspect-video bg-gradient-to-br from-[#FFFF3A]/20 to-black/5">
              {post.image ? (
                <Image
                  src={urlFor(post.image).width(600).height(400).url()}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-sans text-black/40 text-sm">No image</span>
                </div>
              )}
            </div>

            {/* Post Content */}
            <div className="p-5">
              {/* Type Badge */}
              <div className="mb-3">
                <span className="inline-block px-3 py-1 rounded-full bg-[#FFFF3A]/20 text-black text-xs font-medium uppercase tracking-wide">
                  {typeLabels[post.type] || post.type}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-black text-lg tracking-tight mb-3 group-hover:text-black/80 transition-colors line-clamp-2">
                {post.title}
              </h3>

              {/* Content/Excerpt */}
              <p className="font-sans text-black/75 text-sm leading-relaxed mb-4 line-clamp-3">
                {getExcerpt(post)}
              </p>

              {/* Publish Date */}
              <div className="pt-3 border-t border-black/10">
                <span className="font-sans text-black/60 text-xs">
                  {formatDate(post.publishedAt)}
                </span>
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
            {showAll ? "Show Less" : `Load More (${posts.length - INITIAL_DISPLAY} more)`}
          </button>
        </div>
      )}
    </>
  );
}
