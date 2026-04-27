"use client";

import { useEffect } from "react";

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

/**
 * Global keyboard + arrow-key navigation between slides.
 * - ArrowDown / ArrowRight / Space / PageDown → next slide
 * - ArrowUp / ArrowLeft / PageUp → previous slide
 * - Home → first slide · End → last slide
 *
 * Finds the slide closest to the current scroll position, then jumps to
 * the neighbour. Ignored when focus is on a form field.
 */
export default function KeyboardNav() {
  useEffect(() => {
    const findCurrentIndex = () => {
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
      return best;
    };

    const scrollTo = (i: number) => {
      const clamped = Math.max(0, Math.min(SLIDE_IDS.length - 1, i));
      const el = document.getElementById(SLIDE_IDS[clamped]);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      // Skip when typing in inputs/textareas
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      const current = findCurrentIndex();

      if (
        e.key === "ArrowDown" ||
        e.key === "ArrowRight" ||
        e.key === "PageDown" ||
        (e.key === " " && !e.shiftKey)
      ) {
        e.preventDefault();
        scrollTo(current + 1);
      } else if (
        e.key === "ArrowUp" ||
        e.key === "ArrowLeft" ||
        e.key === "PageUp" ||
        (e.key === " " && e.shiftKey)
      ) {
        e.preventDefault();
        scrollTo(current - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        scrollTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        scrollTo(SLIDE_IDS.length - 1);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    // Slide-in transition: add .slide-in class to each <section> as it
    // enters view, so the top divider grows across the screen
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
          }
        }
      },
      { threshold: 0.25 }
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      observer.disconnect();
    };
  }, []);

  return null;
}
