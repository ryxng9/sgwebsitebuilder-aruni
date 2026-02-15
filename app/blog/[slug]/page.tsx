import Image from "next/image";
import Link from "next/link";
import Navbar, { NAVBAR_HEIGHT_CLASS, ColorScheme } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText } from "next-sanity";

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

const BLOG_DETAIL_QUERY = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  image,
  content,
  excerpt,
  author,
  type,
  publishedAt
}`;

const options = { next: { revalidate: 30 } };

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  return client.fetch(BLOG_DETAIL_QUERY, { slug }, options);
}

const blogColorScheme: ColorScheme = {
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return (
      <>
        <Navbar colorScheme={blogColorScheme} />
        <main className="bg-white text-black min-h-screen flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="font-display font-bold text-4xl mb-4">Post Not Found</h1>
            <p className="font-sans text-lg text-black/75 mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center font-sans text-base font-medium px-8 py-4 rounded-lg bg-[#212121] text-white hover:bg-black transition-all duration-200"
            >
              Back to Blog
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar colorScheme={blogColorScheme} />
      <main className="bg-white text-black">
        {/* Hero Section */}
        <section className="w-full px-6 pt-32 sm:pt-40 pb-16 sm:pb-20">
          <div className={NAVBAR_HEIGHT_CLASS} aria-hidden="true" />
          
          {/* Back Button */}
          <div className="w-full max-w-4xl mx-auto mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-sans text-sm text-black/60 hover:text-black transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>

          <div className="w-full max-w-4xl mx-auto">
            {/* Type Badge */}
            <div className="mb-4">
              <span className="inline-block px-4 py-2 rounded-full bg-[#FFFF3A]/20 text-black text-sm font-medium uppercase tracking-wide">
                {typeLabels[post.type] || post.type}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display font-bold text-black text-4xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight mb-6">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center gap-4 text-sm text-black/60 font-sans">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{formatDate(post.publishedAt)}</span>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="w-full px-6 pb-16 sm:pb-20">
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#FFFF3A]/20 to-black/5">
              {post.image ? (
                <Image
                  src={urlFor(post.image).width(1200).height(675).url()}
                  alt={post.title}
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

        {/* Content */}
        <section className="w-full px-6 pb-20 sm:pb-28">
          <div className="w-full max-w-3xl mx-auto">
            <article className="prose prose-lg prose-black max-w-none">
              <PortableText 
                value={post.content}
                components={{
                  block: {
                    normal: ({children}) => <p className="font-sans text-black/85 text-base sm:text-lg leading-relaxed mb-6">{children}</p>,
                    h2: ({children}) => <h2 className="font-display font-bold text-black text-2xl sm:text-3xl tracking-tight mt-12 mb-6">{children}</h2>,
                    h3: ({children}) => <h3 className="font-display font-semibold text-black text-xl sm:text-2xl tracking-tight mt-8 mb-4">{children}</h3>,
                  },
                  marks: {
                    strong: ({children}) => <strong className="font-semibold text-black">{children}</strong>,
                    em: ({children}) => <em className="italic">{children}</em>,
                    link: ({children, value}) => (
                      <a 
                        href={value?.href} 
                        className="text-black underline hover:text-black/70 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {children}
                      </a>
                    ),
                  },
                  list: {
                    bullet: ({children}) => <ul className="list-disc list-inside space-y-2 mb-6 font-sans text-black/85">{children}</ul>,
                    number: ({children}) => <ol className="list-decimal list-inside space-y-2 mb-6 font-sans text-black/85">{children}</ol>,
                  },
                }}
              />
            </article>
          </div>
        </section>

        {/* CTA Section — BLACK SECTION */}
        <section className="w-full px-6 py-20 sm:py-28 bg-black">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
              Want to Work With Us?
            </h2>
            <p className="mt-6 font-sans text-base sm:text-lg text-[#FFFF3A] leading-relaxed max-w-2xl mx-auto">
              Let's discuss your <strong className="font-semibold text-[#FFFF3A]">project</strong> and create something <strong className="font-semibold text-[#FFFF3A]">exceptional</strong> together.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-sans text-base font-medium px-8 py-4 rounded-lg bg-[#FFFF3A] text-black hover:bg-[#FFFF3A]/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center font-sans text-base font-medium px-8 py-4 rounded-lg border-2 border-white text-white bg-transparent hover:bg-white/10 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Read More Posts
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
