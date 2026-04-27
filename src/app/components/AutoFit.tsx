"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Wraps slide content and scales it down (never up) so the entire content
 * fits within the parent's height/width. Centers vertically and horizontally.
 */
export default function AutoFit({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const compute = () => {
      const c = containerRef.current;
      const i = innerRef.current;
      if (!c || !i) return;

      // Measure unscaled
      i.style.transform = "scale(1)";
      const containerH = c.clientHeight;
      const containerW = c.clientWidth;
      const innerH = i.scrollHeight;
      const innerW = i.scrollWidth;
      if (innerH === 0 || innerW === 0) return;

      const sy = containerH / innerH;
      const sx = containerW / innerW;
      const next = Math.min(1, sy, sx);
      setScale(next);
    };

    compute();

    const ro = new ResizeObserver(compute);
    if (innerRef.current) ro.observe(innerRef.current);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", compute);

    // Recompute after fonts / images settle
    const t1 = window.setTimeout(compute, 80);
    const t2 = window.setTimeout(compute, 400);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [children]);

  return (
    <div
      ref={containerRef}
      className={`flex h-full w-full items-center justify-center overflow-hidden ${className}`}
    >
      <div
        ref={innerRef}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          width: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
}
