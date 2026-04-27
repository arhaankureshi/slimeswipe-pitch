"use client";

import React from "react";

export default function NextSlideArrow({
  href,
  label = "NEXT",
}: {
  href: string;
  label?: string;
}) {
  const onClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el instanceof HTMLElement) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <a
      href={href}
      onClick={onClick}
      aria-label="Jump to next slide"
      className="group mx-auto mt-10 flex flex-col items-center gap-2 transition-transform duration-300 hover:translate-y-1"
    >
      <span
        className="text-[9px] font-bold transition-colors group-hover:text-white"
        style={{ color: "var(--dim)", letterSpacing: "0.4em" }}
      >
        {label}
      </span>
      <span
        aria-hidden
        className="relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 group-hover:border-white"
        style={{
          border: "1px solid var(--hair)",
          background: "rgba(12, 12, 24, 0.55)",
          backdropFilter: "blur(4px)",
        }}
      >
        <span
          aria-hidden
          className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            boxShadow: "0 0 24px rgba(79,123,255,0.4)",
            border: "1px solid var(--electric)",
          }}
        />
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="text-[color:var(--lilac)] transition-transform duration-500 group-hover:translate-y-[2px] group-hover:text-[color:var(--electric)]"
          style={{ animation: "scroll-hint 2.2s ease-in-out infinite" }}
        >
          <path
            d="M3 6 L8 11 L13 6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
