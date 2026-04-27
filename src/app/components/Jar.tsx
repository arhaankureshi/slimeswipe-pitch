"use client";

/**
 * Pure-CSS/SVG jar mock. We don't have the real jar photos, so we render
 * a glass-like container with tinted gel inside, tilted ~8° as in the spec.
 */
export default function Jar({
  tint,
  accent,
  glow,
}: {
  tint: string;
  accent: string;
  glow: string;
}) {
  return (
    <div className="relative h-full w-full">
      <div
        aria-hidden
        className="absolute inset-0 rounded-[40%] blur-[40px] opacity-60"
        style={{ background: glow }}
      />
      <div className="jar-float relative flex h-full w-full items-center justify-center">
        <svg
          viewBox="0 0 180 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
        >
          <defs>
            <linearGradient
              id={`jar-gel-${accent}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor={tint} stopOpacity="0.95" />
              <stop offset="100%" stopColor={tint} stopOpacity="0.6" />
            </linearGradient>
            <linearGradient
              id={`jar-glass-${accent}`}
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id={`lid-${accent}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a1a2a" />
              <stop offset="100%" stopColor="#0a0a14" />
            </linearGradient>
          </defs>

          {/* Lid */}
          <rect
            x="30"
            y="18"
            width="120"
            height="28"
            rx="4"
            fill={`url(#lid-${accent})`}
            stroke={accent}
            strokeOpacity="0.4"
            strokeWidth="1"
          />
          {/* Lid top highlight */}
          <rect x="30" y="18" width="120" height="3" fill={accent} opacity="0.6" />

          {/* Jar body */}
          <path
            d="M 25 46 L 155 46 L 158 220 Q 158 232 148 232 L 32 232 Q 22 232 22 220 Z"
            fill={`url(#jar-gel-${accent})`}
            stroke={accent}
            strokeOpacity="0.5"
            strokeWidth="1.2"
          />

          {/* Glass sheen */}
          <path
            d="M 25 46 L 155 46 L 158 220 Q 158 232 148 232 L 32 232 Q 22 232 22 220 Z"
            fill={`url(#jar-glass-${accent})`}
          />

          {/* Highlight strip */}
          <rect
            x="35"
            y="56"
            width="8"
            height="160"
            rx="4"
            fill="white"
            opacity="0.12"
          />

          {/* Gel surface swirl */}
          <ellipse cx="90" cy="92" rx="50" ry="6" fill="white" opacity="0.08" />

          {/* Label plate */}
          <rect
            x="50"
            y="120"
            width="80"
            height="60"
            rx="2"
            fill="#050509"
            opacity="0.5"
            stroke={accent}
            strokeOpacity="0.3"
            strokeWidth="0.8"
          />
          <text
            x="90"
            y="148"
            textAnchor="middle"
            fontSize="14"
            fontFamily="Georgia, serif"
            fontWeight="700"
            fill="white"
            letterSpacing="1"
          >
            SS
          </text>
          <text
            x="90"
            y="164"
            textAnchor="middle"
            fontSize="6"
            fontFamily="Georgia, serif"
            fill={accent}
            letterSpacing="2"
          >
            SLIMESWIPE
          </text>
        </svg>
      </div>
    </div>
  );
}
