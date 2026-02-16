"use client";

export default function EmojiMarquee() {
  const businesses = ["DBS", "SIA", "Sheng Siong", "NTUC", "WeBull", "Singtel", "StarHub", "Grab", "Shopee", "Lazada", "CapitaLand", "Keppel"];
  
  return (
    <div className="w-full overflow-hidden bg-[#FFFF3A]/5 border-y border-black/10 py-8">
      <div className="marquee-container">
        <div className="marquee-content">
          {/* First set of business names */}
          {businesses.map((business, index) => (
            <span
              key={`business-1-${index}`}
              className="inline-block mx-12 font-display font-bold text-2xl sm:text-3xl text-black/40 hover:text-black/70 transition-colors"
            >
              {business}
            </span>
          ))}
          {/* Duplicate set for seamless loop */}
          {businesses.map((business, index) => (
            <span
              key={`business-2-${index}`}
              className="inline-block mx-12 font-display font-bold text-2xl sm:text-3xl text-black/40 hover:text-black/70 transition-colors"
            >
              {business}
            </span>
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

        .marquee-content:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
