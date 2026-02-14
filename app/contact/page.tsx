"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar, { NAVBAR_HEIGHT_CLASS, ColorScheme } from "@/components/Navbar";

const processSteps = [
  "We review your inquiry",
  "We schedule a short alignment call",
  "We scope and send proposal",
];

const contactColorScheme: ColorScheme = {
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    projectDescription: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navbar colorScheme={contactColorScheme} />
      <main className="bg-white text-black">
        {/* Hero Section */}
        <section className="w-full px-6 pt-32 sm:pt-40 pb-16 sm:pb-20">
          <div className={NAVBAR_HEIGHT_CLASS} aria-hidden="true" />
          <div className="w-full max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold text-black text-4xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight mb-8 animate-fadeInUp">
              Let's Talk About Your Project
            </h1>
            
            <p className="font-sans text-base sm:text-lg text-black/75 max-w-2xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200">
              Share your project details below and we'll get back to you within 24 hours. This is a scoped conversation, not a sales call.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full px-6 pb-24 sm:pb-32">
          <div className="w-full max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 animate-fadeInUp animation-delay-400">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block font-sans text-black text-sm font-medium mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-black/15 bg-white/60 backdrop-blur-sm text-black font-sans text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-sans text-black text-sm font-medium mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-black/15 bg-white/60 backdrop-blur-sm text-black font-sans text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              {/* Company Field */}
              <div>
                <label
                  htmlFor="company"
                  className="block font-sans text-black text-sm font-medium mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-black/15 bg-white/60 backdrop-blur-sm text-black font-sans text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="Your company name"
                />
              </div>

              {/* Budget Range Field */}
              <div>
                <label
                  htmlFor="budget"
                  className="block font-sans text-black text-sm font-medium mb-2"
                >
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-black/15 bg-white/60 backdrop-blur-sm text-black font-sans text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                >
                  <option value="">Select a range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-20k">$10,000 - $20,000</option>
                  <option value="20k-plus">$20,000+</option>
                </select>
              </div>

              {/* Project Description Field */}
              <div>
                <label
                  htmlFor="projectDescription"
                  className="block font-sans text-black text-sm font-medium mb-2"
                >
                  Project Description *
                </label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  required
                  value={formData.projectDescription}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-black/15 bg-white/60 backdrop-blur-sm text-black font-sans text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full font-sans text-base font-medium px-8 py-4 rounded-lg bg-[#212121] text-black hover:bg-black transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
                >
                  Start the Conversation
                </button>
                <p className="mt-4 font-sans text-black/75 text-sm text-center">
                  We typically respond within 24 hours.
                </p>
              </div>
            </form>

            {/* Alternative Contact Options */}
            <div className="mt-16 pt-12 border-t border-black/15">
              <h3 className="font-display font-semibold text-black text-xl sm:text-2xl tracking-tight text-center mb-6">
                Prefer Direct Contact?
              </h3>
              <div className="space-y-4 text-center">
                <p className="font-sans text-black/75 text-base sm:text-lg">
                  Reach us directly at{" "}
                  <a
                    href="mailto:hello@sgwebsitebuilder.com"
                    className="text-[#FFFF3A] hover:text-[#a89577] underline transition-colors"
                  >
                    hello@sgwebsitebuilder.com
                  </a>
                </p>
                <p className="font-sans text-black/75 text-base sm:text-lg">
                  Or message us on{" "}
                  <a
                    href="https://wa.me/6512345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFFF3A] hover:text-[#a89577] underline transition-colors"
                  >
                    WhatsApp
                  </a>
                </p>
              </div>
            </div>

            {/* Micro Expectation Setting */}
            <div className="mt-16 rounded-xl border border-black/15 bg-white/40 backdrop-blur-sm p-8 lg:p-10">
              <h3 className="font-display font-semibold text-black text-lg sm:text-xl tracking-tight mb-6">
                What Happens Next
              </h3>
              <ul className="space-y-3 font-sans text-black/75 text-[15px] sm:text-base leading-relaxed">
                {processSteps.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="text-[#FFFF3A] shrink-0 mt-0.5" aria-hidden>
                      {index + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-white border-t border-black/10" role="contentinfo">
          <div className="w-full max-w-6xl mx-auto px-6 py-16 sm:py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {/* Column 1 – Brand */}
              <div className="space-y-4">
                <h2 className="font-display font-semibold text-black text-lg tracking-tight">
                  SGWebsiteBuilder
                </h2>
                <p className="font-sans text-black/75 text-[15px] leading-relaxed max-w-xs">
                  High-converting websites built for SMEs, founders, and startups.
                </p>
                <p className="font-sans text-black/75/70 text-sm pt-2">
                  © 2026 SGWebsiteBuilder
                </p>
              </div>

              {/* Column 2 – Pages */}
              <div className="space-y-4">
                <h3 className="font-display font-semibold text-black text-base tracking-tight">
                  Pages
                </h3>
                <nav aria-label="Footer navigation">
                  <ul className="space-y-3">
                    <li>
                      <Link href="/" className="font-sans text-black/75 text-[15px] hover:text-[#FFFF3A] transition-colors">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/services" className="font-sans text-black/75 text-[15px] hover:text-[#FFFF3A] transition-colors">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/work" className="font-sans text-black/75 text-[15px] hover:text-[#FFFF3A] transition-colors">
                        Work
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing" className="font-sans text-black/75 text-[15px] hover:text-[#FFFF3A] transition-colors">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="font-sans text-black/75 text-[15px] hover:text-[#FFFF3A] transition-colors">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/company" className="font-sans text-black/75 text-[15px] hover:text-[#FFFF3A] transition-colors">
                        Company
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="font-sans text-black/75 text-[15px] hover:text-[#FFFF3A] transition-colors">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Column 3 – What We Do */}
              <div className="space-y-4">
                <h3 className="font-display font-semibold text-black text-base tracking-tight">
                  What We Do
                </h3>
                <ul className="space-y-3">
                  <li className="font-sans text-black/75 text-[15px]">
                    Website development
                  </li>
                  <li className="font-sans text-black/75 text-[15px]">
                    Conversion-focused builds
                  </li>
                  <li className="font-sans text-black/75 text-[15px]">
                    Design-ready implementation
                  </li>
                  <li className="font-sans text-black/75 text-[15px]">
                    Scalable production builds
                  </li>
                </ul>
              </div>

              {/* Column 4 – Contact */}
              <div className="space-y-4">
                <h3 className="font-display font-semibold text-black text-base tracking-tight">
                  Contact
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="inline-block font-sans text-[15px] font-medium px-5 py-2.5 rounded-lg bg-[#212121] text-black hover:bg-black transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Start a project
                  </Link>
                  <p className="font-sans text-black/75 text-[15px]">
                    <a
                      href="mailto:hello@sgwebsitebuilder.com"
                      className="hover:text-[#FFFF3A] transition-colors"
                    >
                      hello@sgwebsitebuilder.com
                    </a>
                  </p>
                  <p className="font-sans text-black/75/70 text-sm">
                    Singapore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
