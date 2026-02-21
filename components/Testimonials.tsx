"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Working with SGWB was a game-changer for our business. They delivered a stunning website that exceeded our expectations and significantly improved our conversion rates.",
    name: "Sarah Chen",
    title: "Founder, TechVenture",
  },
  {
    quote: "Responsive and relentlessly hardworking on different aspects of website building. The team is experienced and I'd recommend them for rebuilding your website from scratch.",
    name: "Kevin Quah",
    title: "CEO, Digital Solutions",
  },
  {
    quote: "The attention to detail and commitment to quality was outstanding. Our new e-commerce platform has transformed how we do business online.",
    name: "Michael Tan",
    title: "Director, RetailHub",
  },
  {
    quote: "Professional, efficient, and creative. SGWB understood our vision and brought it to life with a modern, scalable web solution.",
    name: "Jessica Wong",
    title: "Marketing Head, StartupCo",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="w-full px-6 py-24 sm:py-32 bg-[#212121]">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-[2.5rem] leading-tight tracking-tight text-center mb-16">
          Testimonials
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="flex flex-col items-center gap-8 min-h-[350px]">
            {/* Quote Icon */}
            <div className="flex-shrink-0">
              <svg className="w-16 h-16 text-[#FFFF3A]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </div>

            {/* Testimonial Content */}
            <div className="text-center transition-opacity duration-300" style={{ opacity: isTransitioning ? 0 : 1 }}>
              <p className="font-sans text-white text-lg sm:text-xl leading-relaxed mb-6 max-w-3xl">
                "{currentTestimonial.quote}"
              </p>
            </div>
          </div>

          {/* Author and Navigation Group */}
          <div className="flex flex-col items-center gap-6">
            {/* Author Info */}
            <div className="text-center transition-opacity duration-300" style={{ opacity: isTransitioning ? 0 : 1 }}>
              <p className="font-sans font-semibold text-white text-lg">{currentTestimonial.name}</p>
              <p className="font-sans text-white/60 text-sm">{currentTestimonial.title}</p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4">
            <button
              onClick={goToPrevious}
              className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:bg-[#FFFF3A] hover:border-[#FFFF3A] hover:text-black transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="font-sans text-white/60 text-sm">
              {currentIndex + 1}/{testimonials.length}
            </span>
            <button
              onClick={goToNext}
              className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:bg-[#FFFF3A] hover:border-[#FFFF3A] hover:text-black transition-all duration-200"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-[#FFFF3A]" : "w-1.5 bg-white/20"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
