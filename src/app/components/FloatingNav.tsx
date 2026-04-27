"use client";

import { useEffect, useState } from "react";

const SLIDE_IDS = [
  "top",
  "team",
  "problem",
  "what",
  "how",
  "edge",
  "insight",
  "testimonials",
  "traction",
  "sales",
  "wins",
  "projected",
  "numbers",
  "marketing",
  "giving",
  "resilience",
  "ask",
];

const LABELS: Record<string, string> = {
  top: "TITLE",
  team: "TEAM",
  problem: "PROBLEM",
  what: "WHAT WE DO",
  how: "HOW IT WORKS",
  edge: "EDGE",
  insight: "INSIGHT",
  testimonials: "TESTIMONIALS",
  traction: "TRACTION",
  sales: "SALES STRATEGY",
  wins: "SALES",
  projected: "PROJECTED SALES",
  numbers: "NUMBERS",
  marketing: "MARKETING",
  giving: "CHARITY",
  resilience: "RESILIENCE",
  ask: "THE ASK",
};

/**
 * Always-visible next/prev navigation pinned to the bottom center of the
 * viewport. Reads which slide is currently centered, shows the name of
 * the NEXT slide, and scrolls to it on click. Pairs with KeyboardNav.
 */
export default function FloatingNav() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const findCurrent = () => {
      const viewportCenter = window.scrollY + window.innerHeight / 2;
      let best = 0;
      let bestDelta = Infinity;
      SLIDE_IDS.forEach((id, i) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const center = top + rect.height / 2;
        const delta = Math.abs(center - viewportCenter);
        if (delta < bestDelta) {
          bestDelta = delta;
          best = i;
        }
      });
      setCurrentIdx(best);
    };

    findCurrent();
    window.addEventListener("scroll", findCurrent, { passive: true });
    window.addEventListener("resize", findCurrent);
    return () => {
      window.removeEventListener("scroll", findCurrent);
      window.removeEventListener("resize", findCurrent);
    };
  }, []);

  const scrollToIdx = (i: number) => {
    const clamped = Math.max(0, Math.min(SLIDE_IDS.length - 1, i));
    const el = document.getElementById(SLIDE_IDS[clamped]);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const isLast = currentIdx >= SLIDE_IDS.length - 1;
  const isFirst = currentIdx === 0;
  const nextLabel = isLast ? "BACK TO TOP" : LABELS[SLIDE_IDS[currentIdx + 1]];

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-6 z-40 flex justify-center"
      aria-hidden={false}
    >
      <div
        className="pointer-events-auto flex items-center gap-3 rounded-full px-3 py-2"
        style={{
          background: "rgba(5, 5, 9, 0.78)",
          border: "1px solid var(--hair)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(107,63,160,0.12)",
        }}
      >
        <button
          onClick={() => scrollToIdx(currentIdx - 1)}
          disabled={isFirst}
          aria-label="Previous slide"
          className="group flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 hover:bg-[rgba(107,63,160,0.2)] disabled:cursor-not-allowed disabled:opacity-25"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            className="text-[color:var(--lilac)] transition-colors group-hover:text-white"
          >
            <path
              d="M13 10 L8 5 L3 10"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          onClick={() => scrollToIdx(isLast ? 0 : currentIdx + 1)}
          aria-label={isLast ? "Back to top" : "Next slide"}
          className="group flex items-center gap-3 rounded-full px-4 py-[5px] transition-all duration-300 hover:px-5"
          style={{
            background:
              "linear-gradient(135deg, rgba(79,123,255,0.18), rgba(107,63,160,0.18))",
            border: "1px solid rgba(107,63,160,0.5)",
          }}
        >
          <span
            className="text-[9px] font-bold"
            style={{
              color: "var(--dim)",
              letterSpacing: "0.32em",
            }}
          >
            NEXT
          </span>
          <span
            className="text-[10px] font-bold uppercase text-white transition-all"
            style={{ letterSpacing: "0.18em" }}
          >
            {nextLabel}
          </span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            className="text-[color:var(--electric)] transition-transform duration-300 group-hover:translate-x-[3px]"
            style={{ animation: "scroll-hint 2.2s ease-in-out infinite" }}
          >
            <path
              d="M3 6 L8 11 L13 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div
          className="hidden px-2 text-[9px] font-bold md:block"
          style={{ color: "var(--faint)", letterSpacing: "0.28em" }}
        >
          {String(currentIdx + 1).padStart(2, "0")}&nbsp;/&nbsp;
          {String(SLIDE_IDS.length).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}
