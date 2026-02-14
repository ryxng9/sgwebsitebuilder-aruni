"use client";

import { useEffect, useRef } from "react";

export default function HeroWaveServices() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = `${length}`;
      pathRef.current.style.strokeDashoffset = `${length}`;
    }
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none" style={{ height: "200px" }}>
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient for the glow effect - lemon */}
          <linearGradient id="waveGradientServices" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFF3A" />
            <stop offset="33%" stopColor="#FFFF3A" />
            <stop offset="66%" stopColor="#FFFF3A" />
            <stop offset="100%" stopColor="#FFFF3A" />
          </linearGradient>

          {/* Filter for glow effect */}
          <filter id="glowServices">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Static wave path (drawn line) */}
        <path
          ref={pathRef}
          d="M0,100 Q150,80 300,100 T600,100 T900,100 T1200,100"
          fill="none"
          stroke="#000000"
          strokeWidth="3"
          strokeLinecap="round"
          className="wave-draw"
        />

        {/* Animated gradient glow following the wave */}
        <path
          d="M0,100 Q150,80 300,100 T600,100 T900,100 T1200,100"
          fill="none"
          stroke="url(#waveGradientServices)"
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#glowServices)"
          className="wave-glow"
        />
      </svg>

      <style jsx>{`
        .wave-draw {
          animation: drawWave 2s ease-out forwards;
        }

        .wave-glow {
          opacity: 0;
          animation: glowFlow 3s ease-in-out infinite;
          animation-delay: 2s;
          stroke-dasharray: 300;
          stroke-dashoffset: 0;
        }

        @keyframes drawWave {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes glowFlow {
          0% {
            opacity: 0;
            stroke-dashoffset: 0;
          }
          10% {
            opacity: 0.8;
          }
          100% {
            opacity: 0.8;
            stroke-dashoffset: -600;
          }
        }
      `}</style>
    </div>
  );
}
