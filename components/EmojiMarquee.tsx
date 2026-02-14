"use client";

export default function EmojiMarquee() {
  const emojis = ["⚡", "🚀", "💻", "🎯", "✨", "🔥", "💡", "🎨", "📱", "⚙️", "🌟", "💪"];
  
  return (
    <div className="w-full overflow-hidden bg-[#FFFF3A]/5 border-y border-black/10 py-8">
      <div className="marquee-container">
        <div className="marquee-content">
          {/* First set of emojis */}
          {emojis.map((emoji, index) => (
            <span
              key={`emoji-1-${index}`}
              className="inline-block mx-8 text-4xl sm:text-5xl opacity-60 hover:opacity-100 transition-opacity"
            >
              {emoji}
            </span>
          ))}
          {/* Duplicate set for seamless loop */}
          {emojis.map((emoji, index) => (
            <span
              key={`emoji-2-${index}`}
              className="inline-block mx-8 text-4xl sm:text-5xl opacity-60 hover:opacity-100 transition-opacity"
            >
              {emoji}
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
