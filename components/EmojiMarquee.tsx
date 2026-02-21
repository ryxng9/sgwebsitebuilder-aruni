"use client";

import Image from "next/image";

export default function EmojiMarquee() {
  const logos = [
    { src: "/images/homepage/marquee/flextronic.svg", alt: "Flextronic" },
    { src: "/images/homepage/marquee/grab.svg", alt: "Grab" },
    { src: "/images/homepage/marquee/ntu.svg", alt: "NTU" },
    { src: "/images/homepage/marquee/nus.svg", alt: "NUS" },
    { src: "/images/homepage/marquee/nyu.svg", alt: "NYU" },
    { src: "/images/homepage/marquee/reebok.svg", alt: "Reebok" },
    { src: "/images/homepage/marquee/sats.png", alt: "SATS" },
    { src: "/images/homepage/marquee/singtel.svg", alt: "Singtel" },
    { src: "/images/homepage/marquee/stryker.svg", alt: "Stryker" },
    { src: "/images/homepage/marquee/toysrus.svg", alt: "Toys R Us" },
  ];
  
  return (
    <div className="w-full overflow-hidden bg-white border-y border-black/10 py-8">
      <div className="marquee-container">
        <div className="marquee-content">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="inline-block mx-12 relative"
              style={{ width: "120px", height: "60px" }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain opacity-40 grayscale"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="inline-block mx-12 relative"
              style={{ width: "120px", height: "60px" }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain opacity-40 grayscale"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          display: flex;
          overflow: hidden;
          user-select: none;
        }

        .marquee-content {
          display: flex;
          animation: scroll 30s linear infinite;
          white-space: nowrap;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
