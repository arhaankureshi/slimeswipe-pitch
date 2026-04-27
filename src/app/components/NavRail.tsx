"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "top", label: "01 · TITLE" },
  { id: "team", label: "02 · THE TEAM" },
  { id: "problem", label: "03 · PROBLEM" },
  { id: "what", label: "04 · WHAT WE DO" },
  { id: "how", label: "05 · HOW IT WORKS" },
  { id: "edge", label: "06 · EDGE" },
  { id: "insight", label: "07 · INSIGHT" },
  { id: "testimonials", label: "08 · TESTIMONIALS" },
  { id: "traction", label: "09 · TRACTION" },
  { id: "sales", label: "10 · SALES STRATEGY" },
  { id: "wins", label: "11 · SALES" },
  { id: "projected", label: "12 · PROJECTED SALES" },
  { id: "numbers", label: "13 · NUMBERS" },
  { id: "marketing", label: "14 · MARKETING" },
  { id: "giving", label: "15 · CHARITY" },
  { id: "resilience", label: "16 · RESILIENCE" },
  { id: "ask", label: "17 · THE ASK" },
];

export default function NavRail() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const o = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setActive(s.id);
            }
          }
        },
        { threshold: 0.4 }
      );
      o.observe(el);
      observers.push(o);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      aria-label="Deck navigation"
      className="pointer-events-auto fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 lg:block"
    >
      <ul className="flex flex-col gap-3">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="group flex items-center justify-end gap-3"
              >
                <span
                  className="pointer-events-none whitespace-nowrap text-[9px] font-bold opacity-0 transition-all duration-300 group-hover:opacity-100"
                  style={{
                    color: isActive ? "var(--electric)" : "var(--dim)",
                    letterSpacing: "0.3em",
                  }}
                >
                  {s.label}
                </span>
                <span
                  aria-hidden
                  className="block transition-all duration-300"
                  style={{
                    width: isActive ? "28px" : "14px",
                    height: "2px",
                    background: isActive ? "var(--electric)" : "var(--hair)",
                    boxShadow: isActive
                      ? "0 0 12px rgba(79,123,255,0.8)"
                      : "none",
                  }}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
