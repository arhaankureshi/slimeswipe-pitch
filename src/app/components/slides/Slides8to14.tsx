"use client";

import Image from "next/image";
import Reveal from "../Reveal";
import {
  Slide,
  SlideHeader,
  SlideFooter,
  SectionTitle,
  Subtitle,
} from "../Slide";

/* ==============================================================
   SLIDE 8 · TRACTION
   ============================================================== */
export function Slide8Traction() {
  const stats = [
    { big: "$4,852.79", label: "REVENUE", sub: "end Feb → April 2026" },
    { big: "~2 mo", label: "IN MARKET", sub: "from first jar sold" },
    { big: "340+", label: "JARS MOVED", sub: "single + bundles + pilot" },
    { big: "6×", label: "GROWTH", sub: "March 1 vs. April 15" },
  ];

  const months = ["END FEB", "MAR W1", "MAR W2", "MAR W3", "APR W1", "APR W2"];
  const values = [240, 680, 1210, 2010, 3340, 4852.79];
  const maxV = Math.max(...values);

  // Build SVG path
  const w = 900;
  const h = 200;
  const pad = 32;
  const stepX = (w - pad * 2) / (values.length - 1);
  const points = values.map((v, i) => {
    const x = pad + i * stepX;
    const y = h - pad - (v / maxV) * (h - pad * 2);
    return [x, y] as const;
  });
  const linePath = points
    .map(([x, y], i) => (i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`))
    .join(" ");
  const areaPath = `${linePath} L ${points[points.length - 1][0]} ${
    h - pad
  } L ${points[0][0]} ${h - pad} Z`;

  return (
    <Slide id="traction" variant="glow-both">
      <Reveal>
        <SlideHeader eyebrow="06 · TRACTION" />
      </Reveal>

      <div className="mt-8">
        <Reveal delay={1}>
          <SectionTitle>
            Two months in market.
            <br />
            $4,852.79 in the till.
          </SectionTitle>
        </Reveal>
        <Reveal delay={2}>
          <Subtitle>
            We launched at the end of February. By mid-April, we&apos;d cleared
            $4,852.79 in sales from single jars, bundles, and an early wholesale
            pilot — without ads, without discounts, without the second round
            of inventory even being ready.
          </Subtitle>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={(i + 1) as 1 | 2 | 3 | 4}>
            <div className="relative py-2 pl-5">
              <div
                className="absolute inset-y-0 left-0 w-[3px]"
                style={{
                  background: i % 2 === 0 ? "var(--violet)" : "var(--electric)",
                }}
              />
              <div
                className="font-display font-bold leading-none text-white stat-glow"
                style={{
                  fontSize: "clamp(28px, 3vw, 44px)",
                  letterSpacing: "-0.02em",
                  whiteSpace: "nowrap",
                }}
              >
                {s.big}
              </div>
              <div
                className="mt-3 text-[10px] font-bold"
                style={{ color: "var(--lilac)", letterSpacing: "0.3em" }}
              >
                {s.label}
              </div>
              <div
                className="mt-1 text-[11px] italic"
                style={{ color: "var(--faint)" }}
              >
                {s.sub}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={4}>
        <div className="card-base mt-10 flex-1 p-8">
          <div className="flex items-baseline justify-between">
            <div
              className="text-[10px] font-bold"
              style={{ color: "var(--lilac)", letterSpacing: "0.26em" }}
            >
              SALES GROWTH&nbsp;&nbsp;·&nbsp;&nbsp;CUMULATIVE REVENUE ($)
            </div>
            <div
              className="text-[10px] italic"
              style={{ color: "var(--faint)" }}
            >
              Trending up month over month
            </div>
          </div>

          <div className="mt-6 w-full">
            <svg
              viewBox={`0 0 ${w} ${h}`}
              className="h-[220px] w-full"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4F7BFF" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#4F7BFF" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#6B3FA0" />
                  <stop offset="100%" stopColor="#4F7BFF" />
                </linearGradient>
              </defs>
              {/* grid */}
              {[0, 1, 2, 3].map((i) => {
                const y = pad + ((h - pad * 2) * i) / 3;
                return (
                  <line
                    key={i}
                    x1={pad}
                    x2={w - pad}
                    y1={y}
                    y2={y}
                    stroke="#1a1a2a"
                    strokeWidth="0.5"
                  />
                );
              })}
              <path d={areaPath} fill="url(#areaGrad)" />
              <path
                d={linePath}
                stroke="url(#lineGrad)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(79,123,255,0.6))",
                  strokeDasharray: 2000,
                  strokeDashoffset: 2000,
                  animation: "draw 1.8s ease-out forwards",
                }}
              />
              <style>{`
                @keyframes draw { to { stroke-dashoffset: 0; } }
              `}</style>
              {points.map(([x, y], i) => (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="5"
                  fill="#4F7BFF"
                  stroke="#050509"
                  strokeWidth="2"
                  style={{
                    filter: "drop-shadow(0 0 6px rgba(79,123,255,0.9))",
                  }}
                />
              ))}
              {months.map((m, i) => (
                <text
                  key={m}
                  x={pad + i * stepX}
                  y={h - 6}
                  textAnchor="middle"
                  fontSize="10"
                  fill="#8A8AA8"
                  fontFamily="Inter, sans-serif"
                >
                  {m}
                </text>
              ))}
            </svg>
          </div>
        </div>
      </Reveal>

      <SlideFooter num={7} total={17} next="#projected" />
    </Slide>
  );
}

/* ==============================================================
   SLIDE · GIVING BACK  ·  MEDLIFE MOVING MOUNTAINS
   ============================================================== */
export function Slide11Giving() {
  const programs = [
    {
      title: "HEALTHCARE",
      desc: "Mobile clinics in communities with no doctor — routine care, pediatrics, follow-ups.",
      accent: "var(--electric)",
      src: "/medlife/healthcare.jpg",
    },
    {
      title: "EDUCATION",
      desc: "Classroom builds, supply drives, scholarships that pull students past the wall.",
      accent: "var(--violet)",
      src: "/medlife/education.jpg",
    },
    {
      title: "INFRASTRUCTURE",
      desc: "Community-led builds — safe staircases, clean water, retaining walls that stay.",
      accent: "var(--lilac)",
      src: "/medlife/infrastructure.jpg",
    },
  ];

  return (
    <Slide id="giving" variant="glow-left">
      <Reveal>
        <SlideHeader eyebrow="11 · THE CHARITY" />
      </Reveal>

      <div className="mt-8">
        <Reveal delay={1}>
          <SectionTitle>Moving Mountains. Literally.</SectionTitle>
        </Reveal>
        <Reveal delay={2}>
          <Subtitle>
            Every SlimeSwipe jar contributes to{" "}
            <span className="text-white">MEDLIFE&apos;s Moving Mountains</span>{" "}
            program — a long-term, community-led initiative that funds
            healthcare, education, and infrastructure in underserved
            communities around the world.
          </Subtitle>
        </Reveal>
      </div>

      <div className="mt-10 grid flex-1 grid-cols-1 gap-5 md:grid-cols-[360px_1fr]">
        {/* Left column — 10% hero card + non-toxic callout */}
        <div className="flex flex-col gap-5">
          <Reveal delay={2}>
            <div className="card-hero flex flex-col gap-4 p-8">
              <div>
                <div
                  className="text-[10px] font-bold"
                  style={{ color: "var(--lilac)", letterSpacing: "0.3em" }}
                >
                  EVERY JAR, EVERY SCENT
                </div>
                <div
                  className="mt-3 font-display font-bold leading-none text-white stat-glow"
                  style={{ fontSize: "clamp(72px, 8vw, 112px)" }}
                >
                  10%
                </div>
                <div
                  className="mt-3 text-[11px] font-bold"
                  style={{ color: "var(--electric)", letterSpacing: "0.3em" }}
                >
                  OF EVERY SALE DONATED
                </div>
              </div>
              <div
                className="h-px w-full"
                style={{ background: "var(--hair)" }}
              />
              <p
                className="text-[12.5px] italic leading-relaxed"
                style={{ color: "var(--pearl)" }}
              >
                A built-in line in the unit economics — it moves when sales
                move.
              </p>
              <a
                href="https://www.medlifemovement.org/donate-to-medlife-moving-mountains-program/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] font-bold hover:opacity-80 transition-opacity"
                style={{
                  color: "var(--electric)",
                  letterSpacing: "0.26em",
                }}
              >
                MEDLIFEMOVEMENT.ORG &rarr;
              </a>
            </div>
          </Reveal>

          {/* Non-toxic callout (folded in from Social Responsibility) */}
          <Reveal delay={3}>
            <div className="card-base relative p-6 pl-8">
              <div
                className="absolute inset-y-0 left-0 w-[3px]"
                style={{ background: "var(--violet)" }}
              />
              <div
                className="text-[10px] font-bold"
                style={{ color: "var(--violet)", letterSpacing: "0.3em" }}
              >
                100% NON-TOXIC
              </div>
              <div className="mt-2 font-display text-[16px] font-bold leading-snug text-white">
                Safe around kids, pets, and the air you&apos;re breathing.
              </div>
              <p
                className="mt-2 text-[11.5px] leading-relaxed"
                style={{ color: "var(--pearl)" }}
              >
                Food- and cosmetic-grade ingredients. Reusable jar. No persistent
                plastics — reducing landfill load one wipe-replacement at a time.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right column — intro blurb + 3 program photo cards */}
        <div className="flex flex-col gap-5">
          <Reveal delay={3}>
            <div className="card-base relative p-6 pl-8">
              <div
                className="absolute inset-y-0 left-0 w-[3px]"
                style={{ background: "var(--electric)" }}
              />
              <div
                className="text-[10px] font-bold"
                style={{ color: "var(--lilac)", letterSpacing: "0.3em" }}
              >
                WHAT MEDLIFE DOES
              </div>
              <p
                className="mt-3 text-[12.5px] leading-relaxed"
                style={{ color: "var(--pearl)" }}
              >
                MEDLIFE (Medicine, Education, Development for Low-Income
                Families Everywhere) has worked in Peru, Ecuador, and
                Tanzania since 2004. <span className="text-white font-bold">Moving Mountains</span> is
                their long-term arm: communities pick the project, MEDLIFE
                funds the materials and mobilizes student volunteers, and
                the result is owned and maintained locally — not one-off
                aid, sustained infrastructure.
              </p>
            </div>
          </Reveal>

          <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-3">
            {programs.map((p, i) => (
              <Reveal key={p.title} delay={(i + 3) as 3 | 4 | 5}>
                <div className="card-base relative flex h-full flex-col overflow-hidden">
                  <div
                    className="absolute inset-x-0 top-0 z-[2] h-[3px]"
                    style={{ background: p.accent }}
                  />
                  {/* Photo slot — uses real photo if present, falls back to styled placeholder */}
                  <div
                    className="relative h-40 w-full"
                    style={{ background: "var(--violet-deep)" }}
                  >
                    <Image
                      src={p.src}
                      alt={`MEDLIFE Moving Mountains — ${p.title.toLowerCase()}`}
                      fill
                      sizes="300px"
                      className="object-cover opacity-90"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.opacity =
                          "0";
                      }}
                      unoptimized
                    />
                    {/* Placeholder overlay visible behind image — shows if Image fails or while loading */}
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(26,15,46,0.9), rgba(8,19,64,0.7))",
                        zIndex: -1,
                      }}
                    >
                      <span
                        className="text-[9px] font-bold"
                        style={{
                          color: p.accent,
                          letterSpacing: "0.3em",
                        }}
                      >
                        [ PHOTO ]
                      </span>
                    </div>
                    {/* Gradient fade to card */}
                    <div
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-1/2"
                      style={{
                        background:
                          "linear-gradient(to bottom, transparent, #0c0c18 95%)",
                      }}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div
                      className="text-[10px] font-bold"
                      style={{
                        color: p.accent,
                        letterSpacing: "0.28em",
                      }}
                    >
                      {p.title}
                    </div>
                    <p
                      className="mt-2 text-[11.5px] leading-relaxed"
                      style={{ color: "var(--pearl)" }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div
            className="text-[11px] italic"
            style={{ color: "var(--faint)" }}
          >
            Our team has personal ties to MEDLIFE through hospital and university
            volunteer work — we&apos;re not picking it off a list.
          </div>
        </div>
      </div>

      <SlideFooter num={12} total={17} next="#insight" />
    </Slide>
  );
}

/* ==============================================================
   SLIDE 12 · RESILIENCE
   ============================================================== */
export function Slide12Resilience() {
  const phases = [
    {
      tag: "THE BLOCKER",
      title: "The stack was killing sales.",
      desc: "Every line of SlimeSwipe — frontend, backend, payment rail — was built in-house by Fabiyan and Mark. But our Shopify and Square integrations stalled. Payments wouldn't route. Contact-Us emails never arrived. Customers were ghosting at checkout.",
      hero: false,
    },
    {
      tag: "THE OVERHAUL",
      title: "Full-stack rebuild — in-house.",
      desc: "Rather than outsourcing, the tech team rewrote the backend and deployed two new APIs: Stripe for instant secure payments, and Resend for customer comms. The bugs that were costing us sales for weeks were fixed in days.",
      hero: true,
    },
    {
      tag: "THE SHIP",
      title: "Enterprise-grade security.",
      desc: "Encrypted secret keys for every payment route, customer data shielded behind controls following SOC2 guidelines as closely as we can. We didn't just patch a website — we engineered a digital storefront.",
      hero: false,
    },
  ];

  return (
    <Slide id="resilience" variant="glow-both">
      <Reveal>
        <SlideHeader eyebrow="09 · RESILIENCE" />
      </Reveal>

      <div className="mt-8">
        <Reveal delay={1}>
          <SectionTitle>We didn&apos;t fix a website. We engineered a storefront.</SectionTitle>
        </Reveal>
      </div>

      <div className="relative mt-16 flex-1">
        {/* Timeline spine */}
        <div
          aria-hidden
          className="absolute left-[8%] right-[8%] top-0 h-px"
          style={{ background: "var(--hair)" }}
        />
        {/* Nodes */}
        {[8, 50, 92].map((left, i) => (
          <div
            key={i}
            aria-hidden
            className="absolute top-0 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${left}%` }}
          >
            <div
              className="h-4 w-4 rounded-full"
              style={{
                background: i === 1 ? "var(--electric)" : "var(--violet)",
                boxShadow:
                  i === 1
                    ? "0 0 20px rgba(79,123,255,0.9)"
                    : "0 0 14px rgba(107,63,160,0.7)",
                border: "2px solid var(--ink)",
              }}
            />
          </div>
        ))}

        <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-3">
          {phases.map((p, i) => (
            <Reveal key={p.title} delay={(i + 1) as 1 | 2 | 3}>
              <div className="flex flex-col">
                <div
                  className="text-[10px] font-bold"
                  style={{
                    color: p.hero ? "var(--electric)" : "var(--lilac)",
                    letterSpacing: "0.3em",
                  }}
                >
                  {p.tag}
                </div>
                <div
                  className={`relative mt-4 flex-1 p-8 ${
                    p.hero ? "card-hero" : "card-base"
                  }`}
                >
                  <div
                    className="absolute left-0 top-0 h-[3px] w-16"
                    style={{
                      background: p.hero
                        ? "var(--electric)"
                        : "var(--violet)",
                    }}
                  />
                  <div
                    className="font-display text-[22px] font-bold leading-tight text-white"
                  >
                    {p.title}
                  </div>
                  <p
                    className="mt-4 text-[13px] leading-relaxed"
                    style={{ color: "var(--pearl)" }}
                  >
                    {p.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={4}>
        <div
          className="card-hero mt-8 flex items-center gap-4 px-6 py-4"
          style={{ borderLeft: "4px solid var(--electric)" }}
        >
          <span
            className="text-[11px] font-bold"
            style={{ color: "var(--electric)", letterSpacing: "0.3em" }}
          >
            THE LESSON
          </span>
          <span className="text-[14px] italic text-white">
            We control the entire stack — which means every bug we hit becomes a chance to{" "}
            <span className="font-bold not-italic">build smarter</span>, not call for help.
          </span>
        </div>
      </Reveal>

      <SlideFooter num={10} total={17} next="#marketing" />
    </Slide>
  );
}

/* ==============================================================
   SLIDE 13 · THE TEAM
   ============================================================== */
export function Slide13Team() {
  const team = [
    {
      role: "PRESIDENT",
      name: "Vedant Panchal",
      accent: "var(--electric)",
      ownership: "Strategy · Operations · Finance",
      bio: "Sets the weekly operating cadence — pricing reviews, inventory forecasts, and the team's north-star metric (jars sold per pop-up). Built SlimeSwipe's first supplier pipeline and owns every number we put in front of a mentor.",
      fact: "Pitched the product to three JA mentors before a label existed.",
      photo: "/team/vedant.jpg",
      objectPosition: "right 30%",
    },
    {
      role: "VP OF SALES",
      name: "Saket Pandey",
      accent: "var(--violet)",
      ownership: "Pop-ups · Wholesale · Conversion",
      bio: "Owns every customer-facing surface — booth layouts, demo scripts, and the follow-up thread with NAPA and the local GM dealership. Converted our first 30 customers face-to-face before we'd even finished the label design.",
      fact: "Holds the team record for jars sold in a single four-hour booth: 38.",
      photo: "/team/saket.jpg",
      objectPosition: "center 25%",
    },
    {
      role: "VP OF SOCIAL MEDIA",
      name: "Jean Soro",
      accent: "var(--lilac)",
      ownership: "TikTok · Instagram · Community",
      bio: "Runs the Instagram aesthetic and the TikTok punchlines. Responsible for every SlimeSwipe scroll that made someone stop — including the ASMR vent-reveal reel that's our highest-reach post to date.",
      fact: "Turned one scent-reveal TikTok into 14k organic views in 72 hours.",
      photo: "/team/jean.jpg",
      objectPosition: "center 30%",
    },
  ];

  return (
    <Slide id="team" variant="base">
      <Reveal>
        <SlideHeader eyebrow="01 · THE TEAM" />
      </Reveal>

      <div className="mt-8">
        <Reveal delay={1}>
          <SectionTitle size="md">
            Meet the team behind SlimeSwipe.
          </SectionTitle>
        </Reveal>
        <Reveal delay={2}>
          <Subtitle>
            The three of us are presenting today. Each of us owns a
            different pillar of the business — strategy, revenue, and
            reach. Advised by JA mentor Martha.
          </Subtitle>
        </Reveal>
      </div>

      <div className="mt-12 grid flex-1 grid-cols-1 gap-5 md:grid-cols-3">
        {team.map((t, i) => (
          <Reveal key={t.role} delay={(i + 1) as 1 | 2 | 3}>
            <div className="card-base relative flex h-full flex-col p-7">
              <div
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ background: t.accent }}
              />
              {/* Photo slot — real photo if present, styled placeholder if not */}
              <div
                className="relative overflow-hidden"
                style={{
                  background: "var(--violet-deep)",
                  border: "1px solid var(--violet)",
                  height: "280px",
                  width: "100%",
                }}
              >
                <Image
                  src={t.photo}
                  alt={`${t.name} — ${t.role}`}
                  fill
                  sizes="400px"
                  className="object-cover"
                  style={{ objectPosition: t.objectPosition }}
                  unoptimized
                />
                {/* Accent glow behind */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at 50% 30%, ${t.accent}33, transparent 70%)`,
                    mixBlendMode: "screen",
                  }}
                />
                {/* Fade to card at bottom */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent, #0c0c18 98%)",
                  }}
                />
                {/* Placeholder visible behind image */}
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 flex items-center justify-center"
                >
                  <span
                    className="text-[10px] font-bold"
                    style={{ color: t.accent, letterSpacing: "0.3em" }}
                  >
                    [ PHOTO ]
                  </span>
                </div>
              </div>
              <div
                className="mt-6 text-[9px] font-bold"
                style={{ color: t.accent, letterSpacing: "0.3em" }}
              >
                {t.role}
              </div>
              <div className="mt-2 font-display text-[22px] font-bold leading-tight text-white">
                {t.name}
              </div>
              <div
                className="mt-1 text-[11px]"
                style={{ color: "var(--dim)", letterSpacing: "0.14em" }}
              >
                {t.ownership}
              </div>
              <div
                className="my-4 h-px w-full"
                style={{ background: "var(--hair)" }}
              />
              <p
                className="text-[12.5px] leading-relaxed"
                style={{ color: "var(--pearl)" }}
              >
                {t.bio}
              </p>
              <div className="mt-4 flex items-start gap-2">
                <span
                  className="mt-[2px] text-[9px] font-bold"
                  style={{ color: t.accent, letterSpacing: "0.3em" }}
                >
                  FACT
                </span>
                <span
                  className="text-[11.5px] italic"
                  style={{ color: "var(--faint)" }}
                >
                  {t.fact}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <SlideFooter num={2} total={17} next="#problem" />
    </Slide>
  );
}

/* ==============================================================
   SLIDE 14 · THE ASK
   ============================================================== */
export function Slide14Ask() {
  const pillars = [
    {
      title: "VALIDATED",
      desc: "Real customers. Real sales. Real feedback.",
      accent: "var(--electric)",
    },
    {
      title: "SCALABLE",
      desc: "Margin-positive with growing demand.",
      accent: "var(--violet)",
    },
    {
      title: "PURPOSEFUL",
      desc: "10% of every sale funds MEDLIFE Moving Mountains.",
      accent: "var(--lilac)",
    },
  ];

  return (
    <section id="ask" className="relative h-screen w-full overflow-hidden">
      <div
        aria-hidden
        className="glow-purple"
        style={{ width: 1260, height: 1260, left: -450, top: -320, opacity: 1 }}
      />
      <div
        aria-hidden
        className="glow-royal"
        style={{ width: 1440, height: 1440, right: -520, top: -80, opacity: 0.95 }}
      />
      <div
        aria-hidden
        className="glow-violet"
        style={{ width: 460, height: 460, left: "40%", top: "22%", opacity: 0.9 }}
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1280px] flex-col px-10 py-12 md:px-16">
        <Reveal>
          <SlideHeader eyebrow="16 · THE ASK" />
        </Reveal>

        <div className="mt-24 flex flex-1 flex-col justify-center">
          <Reveal delay={1}>
            <h2
              className="font-display font-bold leading-[1.02] text-white"
              style={{
                fontSize: "clamp(44px, 6.5vw, 92px)",
                letterSpacing: "-0.02em",
              }}
            >
              Back a business that&apos;s{" "}
              <span
                className="italic"
                style={{
                  color: "var(--electric)",
                  textShadow: "0 0 40px rgba(79,123,255,0.5)",
                }}
              >
                already working
              </span>
              .
            </h2>
          </Reveal>

          <Reveal delay={2}>
            <p
              className="mt-6 font-display italic leading-snug"
              style={{
                fontSize: "clamp(22px, 2.4vw, 34px)",
                color: "var(--lilac)",
              }}
            >
              Help us scale clean into a lifestyle.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={(i + 3) as 3 | 4 | 5}>
                <div className="card-base relative h-full p-8 pl-10">
                  <div
                    className="absolute inset-y-0 left-0 w-[4px]"
                    style={{ background: p.accent }}
                  />
                  <div
                    className="font-display text-[24px] font-bold text-white"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    {p.title}
                  </div>
                  <p
                    className="mt-3 text-[13.5px] leading-relaxed"
                    style={{ color: "var(--pearl)" }}
                  >
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={6}>
          <div className="mt-auto flex justify-center pt-10">
            <div
              className="text-center font-display font-bold"
              style={{ fontSize: "clamp(18px, 2vw, 28px)" }}
            >
              <span className="text-white" style={{ letterSpacing: "0.28em" }}>
                SWIPE THE GRIME.{" "}
              </span>
              <span
                style={{
                  color: "var(--electric)",
                  fontStyle: "italic",
                  letterSpacing: "0.28em",
                }}
              >
                KEEP THE SHINE.
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
