"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import Navbar, { NAVBAR_HEIGHT_CLASS, ColorScheme } from "@/components/Navbar";
import Footer from "@/components/Footer";

const processSteps = [
  "We review your inquiry",
  "We schedule a short alignment call",
  "We scope and send proposal",
];

const contactColorScheme: ColorScheme = {
  initial: {
    bg: "bg-[#212121]",
    text: "text-white",
    buttonBg: "bg-[#FFFF3A]",
    buttonText: "text-black",
    buttonHoverBg: "hover:bg-white",
  },
  scrolled: {
    bg: "bg-[#212121]",
    text: "text-white",
    buttonBg: "bg-[#FFFF3A]",
    buttonText: "text-black",
    buttonHoverBg: "hover:bg-white",
  },
};

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    projectDescription: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Check if environment variables are set
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error("EmailJS Configuration Error:", {
          serviceId: serviceId ? "Set" : "Missing",
          templateId: templateId ? "Set" : "Missing",
          publicKey: publicKey ? "Set" : "Missing",
        });
        throw new Error("EmailJS credentials not configured. Please check your .env.local file.");
      }

      console.log("Sending email with EmailJS...");
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );

      console.log("EmailJS Response:", result);

      if (result.text === "OK") {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          projectType: "",
          budget: "",
          projectDescription: "",
        });
      }
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      console.error("Error details:", {
        message: error?.message,
        text: error?.text,
        status: error?.status,
      });
      
      let errorMessage = "Oops! Something went wrong. Please try again or contact us directly via email.";
      
      if (error?.message?.includes("credentials not configured")) {
        errorMessage = "Email service is not configured yet. Please contact us directly via email.";
      } else if (error?.text) {
        errorMessage = `Error: ${error.text}`;
      }
      
      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const dismissStatus = () => {
    setSubmitStatus({ type: null, message: "" });
  };

  return (
    <>
      <Navbar colorScheme={contactColorScheme} />
      
      {/* Fixed Status Message */}
      {submitStatus.type && (
        <div className="fixed top-28 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-6 animate-slideDown">
          <div
            className={`p-4 rounded-lg border shadow-xl backdrop-blur-sm ${
              submitStatus.type === "success"
                ? "bg-green-500/90 border-green-400 text-white"
                : "bg-red-500/90 border-red-400 text-white"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <p className="font-sans text-sm flex-1">{submitStatus.message}</p>
              <button
                onClick={dismissStatus}
                className="shrink-0 text-white/70 hover:text-[#FFFF3A] hover:scale-110 transition-all duration-200"
                aria-label="Close message"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translate(-50%, -20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.4s ease-out forwards;
        }
      `}</style>
      
      <main className="bg-[#212121] text-white">
        {/* Hero Section */}
        <section className="w-full px-6 pt-32 sm:pt-40 pb-16 sm:pb-20 bg-[#212121]">
          <div className={NAVBAR_HEIGHT_CLASS} aria-hidden="true" />
          <div className="w-full max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight mb-8 animate-fadeInUp">
              Let's Talk About Your Project
            </h1>
            
            <p className="font-sans text-base sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200">
              Share your project details below and we'll get back to you within 24 hours. This is a scoped conversation, not a sales call.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full px-6 pb-24 sm:pb-32 bg-[#212121]">
          <div className="w-full max-w-2xl mx-auto">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 animate-fadeInUp animation-delay-400">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block font-sans text-white text-sm font-medium mb-2"
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
                  className="w-full px-4 py-3 rounded-lg border border-white/15 bg-white/5 backdrop-blur-sm text-white font-sans text-base focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all placeholder:text-white/40"
                  placeholder="Your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-sans text-white text-sm font-medium mb-2"
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
                  className="w-full px-4 py-3 rounded-lg border border-white/15 bg-white/5 backdrop-blur-sm text-white font-sans text-base focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all placeholder:text-white/40"
                  placeholder="your@email.com"
                />
              </div>

              {/* Company Field */}
              <div>
                <label
                  htmlFor="company"
                  className="block font-sans text-white text-sm font-medium mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-white/15 bg-white/5 backdrop-blur-sm text-white font-sans text-base focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all placeholder:text-white/40"
                  placeholder="Your company name"
                />
              </div>

              {/* Project Type Field */}
              <div>
                <label
                  htmlFor="projectType"
                  className="block font-sans text-white text-sm font-medium mb-2"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-white/15 bg-white/5 backdrop-blur-sm text-white font-sans text-base focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all placeholder:text-white/40"
                >
                  <option value="">Select a project type</option>
                  <option value="e-commerce">E-commerce</option>
                  <option value="business-web-design">Business Web Design</option>
                  <option value="custom-web-development">Custom Web Development</option>
                  <option value="website-management">Website Management</option>
                  <option value="seo">SEO</option>
                  <option value="others">Others</option>
                </select>
              </div>

              {/* Budget Range Field */}
              <div>
                <label
                  htmlFor="budget"
                  className="block font-sans text-white text-sm font-medium mb-2"
                >
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-white/15 bg-white/5 backdrop-blur-sm text-white font-sans text-base focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all placeholder:text-white/40"
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
                  className="block font-sans text-white text-sm font-medium mb-2"
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
                  className="w-full px-4 py-3 rounded-lg border border-white/15 bg-white/5 backdrop-blur-sm text-white font-sans text-base focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all resize-none placeholder:text-white/40"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-sans text-base font-medium px-8 py-4 rounded-lg bg-[#FFFF3A] text-black hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#FFFF3A] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#FFFF3A] disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Sending..." : "Start the Conversation"}
                </button>
                <p className="mt-4 font-sans text-white/75 text-sm text-center">
                  We typically respond within 24 hours.
                </p>
              </div>
            </form>

            {/* Alternative Contact Options */}
            <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 lg:p-10 shadow-lg">
              <h3 className="font-display font-semibold text-white text-xl sm:text-2xl tracking-tight text-center mb-6">
                Prefer Direct Contact?
              </h3>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                {/* Email */}
                <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                  <h4 className="font-display font-semibold text-white text-lg tracking-tight mb-2">
                    Email
                  </h4>
                  <p className="font-sans text-white/75 text-base">
                    retroxpect@gmail.com
                  </p>
                </div>

                {/* WhatsApp */}
                <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                  <h4 className="font-display font-semibold text-white text-lg tracking-tight mb-2">
                    WhatsApp
                  </h4>
                  <p className="font-sans text-white/75 text-base">
                    +65 9636 7885
                  </p>
                </div>
              </div>
              
              {/* Contact Buttons */}
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="mailto:retroxpect@gmail.com"
                  className="inline-flex items-center justify-center font-sans text-sm font-medium px-6 py-3 rounded-lg bg-[#FFFF3A] text-black hover:bg-white transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Send Email
                </a>
                <a
                  href="https://wa.me/6596367885"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-sans text-sm font-medium px-6 py-3 rounded-lg bg-[#FFFF3A] text-black hover:bg-white transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>

            {/* Micro Expectation Setting */}
            <div className="mt-16 rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm p-8 lg:p-10">
              <h3 className="font-display font-semibold text-white text-lg sm:text-xl tracking-tight mb-6">
                What Happens Next
              </h3>
              <ul className="space-y-3 font-sans text-white/75 text-[15px] sm:text-base leading-relaxed">
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
        <Footer />
      </main>
    </>
  );
}
