"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "Project timelines vary based on complexity. Small scoped builds typically take 2-3 weeks, medium builds 4-6 weeks, and complex systems 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you offer website maintenance and support?",
    answer: "Yes, we offer ongoing maintenance and support packages. This includes regular updates, security monitoring, performance optimization, and technical support to ensure your website runs smoothly.",
  },
  {
    question: "What technologies do you use?",
    answer: "We specialize in modern web technologies including Next.js, React, TypeScript, and Tailwind CSS. We also work with various CMS platforms like Sanity and Contentful, depending on your project needs.",
  },
  {
    question: "Can you help with SEO and digital marketing?",
    answer: "Absolutely. We build websites with SEO best practices in mind, including proper meta tags, structured data, and performance optimization. We can also integrate analytics and tracking tools to help you measure success.",
  },
  {
    question: "What is your payment structure?",
    answer: "We typically work with a 50% upfront deposit and 50% upon project completion. For larger projects, we can arrange milestone-based payments. All pricing is transparent and agreed upon before work begins.",
  },
  {
    question: "Do you work with clients outside Singapore?",
    answer: "Yes, we work with clients globally. Most of our communication happens online through video calls and project management tools, making remote collaboration seamless and efficient.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-6 py-24 sm:py-32 bg-[#212121]">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="font-sans text-white/70 text-center mb-16 max-w-2xl mx-auto">
          Got questions? We've got answers. If you don't find what you're looking for, feel free to reach out.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-white/20"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-500"
              >
                <span className="font-sans font-semibold text-white text-base sm:text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#FFFF3A] flex-shrink-0 transition-transform duration-500 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="font-sans text-white/80 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
