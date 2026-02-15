import Image from "next/image";
import Link from "next/link";
import Navbar, { NAVBAR_HEIGHT_CLASS, ColorScheme } from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogGrid from "@/components/BlogGrid";
import { client } from "@/sanity/lib/client";
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

const BLOG_QUERY = `*[_type == "blogPost"] | order(publishedAt desc) {
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

async function getBlogPosts(): Promise<BlogPost[]> {
  return client.fetch(BLOG_QUERY, {}, options);
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

function getExcerpt(post: BlogPost): string {
  if (post.excerpt) return post.excerpt;
  
  // Extract text from first paragraph of content
  if (post.content && post.content.length > 0) {
    const firstBlock = post.content.find((block: any) => block._type === 'block');
    if (firstBlock && firstBlock.children) {
      const text = firstBlock.children
        .map((child: any) => child.text)
        .join('');
      return text.slice(0, 150) + (text.length > 150 ? '...' : '');
    }
  }
  
  return '';
}

export default async function Blog() {
  const posts = await getBlogPosts();
  const [latestPost, ...otherPosts] = posts;

  return (
    <>
      <Navbar colorScheme={blogColorScheme} />
      <main className="bg-white text-black">
        {/* Hero Section */}
        <section className="w-full px-6 pt-32 sm:pt-40 pb-12 sm:pb-16">
          <div className={NAVBAR_HEIGHT_CLASS} aria-hidden="true" />
          <div className="w-full max-w-6xl mx-auto">
            <h1 className="font-display font-bold text-black text-4xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight mb-6">
              Blog
            </h1>
            <p className="font-sans text-base sm:text-lg text-black/75 leading-relaxed max-w-2xl">
              Read about our latest announcements
            </p>
          </div>
        </section>

        {/* Separator Line */}
        <div className="w-full px-6">
          <div className="w-full max-w-6xl mx-auto border-t border-black/10"></div>
        </div>

        {/* Latest Post Section */}
        {latestPost ? (
          <section className="w-full px-6 py-16 sm:py-20">
            <div className="w-full max-w-6xl mx-auto">
              <Link
                href={`/blog/${latestPost.slug.current}`}
                className="group grid md:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                {/* Image - Left Side */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-[#FFFF3A]/20 to-black/5">
                  {latestPost.image ? (
                    <Image
                      src={urlFor(latestPost.image).width(800).height(600).url()}
                      alt={latestPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-sans text-black/40 text-lg">No image</span>
                    </div>
                  )}
                </div>

                {/* Content - Right Side */}
                <div>
                  <h2 className="font-display font-bold text-black text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight mb-4 group-hover:text-black/80 transition-colors">
                    {latestPost.title}
                  </h2>
                  
                  <p className="font-sans text-black/75 text-base sm:text-lg leading-relaxed mb-6 line-clamp-3">
                    {getExcerpt(latestPost)}
                  </p>

                  {/* Type and Date */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#FFFF3A]/20 text-black font-medium uppercase tracking-wide">
                      {typeLabels[latestPost.type] || latestPost.type}
                    </span>
                    <span className="font-sans text-black/60">
                      {formatDate(latestPost.publishedAt)}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        ) : (
          <section className="w-full px-6 py-16 sm:py-20">
            <div className="w-full max-w-6xl mx-auto text-center">
              <p className="font-sans text-black/60 text-lg">
                No blog posts yet. Add posts in the{" "}
                <Link href="/studio" className="text-[#FFFF3A] hover:underline">
                  Sanity Studio
                </Link>
                .
              </p>
            </div>
          </section>
        )}

        {/* Blog Grid Section */}
        {otherPosts.length > 0 && (
          <section className="w-full px-6 py-16 sm:py-20 bg-white/30">
            <div className="w-full max-w-6xl mx-auto">
              <BlogGrid posts={otherPosts} />
            </div>
          </section>
        )}

        {/* CTA Section — BLACK SECTION */}
        <section className="w-full px-6 py-20 sm:py-28 bg-black">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
              Want to Work With Us?
            </h2>
            <p className="mt-6 font-sans text-base sm:text-lg text-[#FFFF3A] leading-relaxed max-w-2xl mx-auto">
              Let's create something exceptional
            </p>
            <p className="mt-4 font-sans text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Discuss your project and see how we can help bring your vision to life.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-sans text-base font-medium px-8 py-4 rounded-lg bg-[#FFFF3A] text-black hover:bg-[#FFFF3A]/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#FFFF3A] focus:ring-offset-2 focus:ring-offset-black"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
