"use client";

import React from "react";
import AutoFit from "./AutoFit";

export function Slide({
  children,
  id,
  variant = "base",
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  variant?: "base" | "glow-left" | "glow-right" | "glow-both";
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative h-screen w-full overflow-hidden ${className}`}
    >
      {variant !== "base" && (
        <>
          {(variant === "glow-left" || variant === "glow-both") && (
            <div
              aria-hidden
              className="glow-purple float-slow"
              style={{
                width: "760px",
                height: "760px",
                left: "-280px",
                top: "-200px",
                opacity: variant === "glow-both" ? 0.9 : 1,
              }}
            />
          )}
          {(variant === "glow-right" || variant === "glow-both") && (
            <div
              aria-hidden
              className="glow-royal float-slow"
              style={{
                width: "860px",
                height: "860px",
                right: "-320px",
                bottom: "-260px",
                opacity: variant === "glow-both" ? 0.9 : 1,
                animationDelay: "1.5s",
              }}
            />
          )}
        </>
      )}
      <AutoFit className="relative z-10">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col px-10 pt-12 pb-12 md:px-16">
          {children}
        </div>
      </AutoFit>
    </section>
  );
}

export function SlideHeader({
  eyebrow,
  slideNum,
}: {
  eyebrow: string;
  slideNum?: number;
}) {
  return (
    <div className="flex items-start justify-between">
      <div className="eyebrow">{eyebrow}</div>
      <div
        className="font-display text-[13px] italic font-bold tracking-widest"
        style={{ color: "var(--violet)" }}
      >
        SS
      </div>
      {slideNum !== undefined && (
        <span className="sr-only">Slide {slideNum}</span>
      )}
    </div>
  );
}

export function SlideFooter({
  num,
  total = 15,
}: {
  num: number;
  total?: number;
  /** deprecated — global FloatingNav handles next-slide navigation */
  next?: string;
}) {
  const pad = String(num).padStart(2, "0");
  const totalPad = String(total).padStart(2, "0");
  return (
    <div className="mt-auto pt-6">
      <div
        className="flex items-end justify-between"
        style={{ color: "var(--faint)" }}
      >
        <div
          className="text-[10px] font-bold"
          style={{ letterSpacing: "0.3em" }}
        >
          SLIMESWIPE&nbsp;&nbsp;·&nbsp;&nbsp;CLEAN IS A LIFESTYLE
        </div>
        <div className="text-[10px]" style={{ letterSpacing: "0.2em" }}>
          {pad}&nbsp;/&nbsp;{totalPad}
        </div>
      </div>
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}

export function SectionTitle({
  children,
  size = "lg",
  className = "",
}: {
  children: React.ReactNode;
  size?: "md" | "lg" | "xl";
  className?: string;
}) {
  const sizes = {
    md: "text-[38px] md:text-[48px] leading-[1.05]",
    lg: "text-[44px] md:text-[64px] leading-[1.02]",
    xl: "text-[64px] md:text-[104px] leading-[0.98]",
  };
  return (
    <h2
      className={`font-display font-bold text-white ${sizes[size]} ${className}`}
      style={{ letterSpacing: "-0.02em" }}
    >
      {children}
    </h2>
  );
}

export function Subtitle({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mt-4 max-w-4xl font-display italic text-[17px] md:text-[20px] leading-snug"
      style={{ color: "var(--dim)" }}
    >
      {children}
    </p>
  );
}
