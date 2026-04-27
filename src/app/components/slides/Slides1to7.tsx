"use client";

import Image from "next/image";
import Reveal from "../Reveal";
import HeroScene from "../HeroSceneClient";
import {
  Slide,
  SlideHeader,
  SlideFooter,
  SectionTitle,
  Subtitle,
} from "../Slide";

/* ==============================================================
   SLIDE 1 · TITLE
   ============================================================== */
export function Slide1Title() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {/* layered ambient glows */}
      <div
        aria-hidden
        className="glow-purple"
        style={{ width: 1100, height: 1100, left: -400, top: -320 }}
      />
      <div
        aria-hidden
        className="glow-royal"
        style={{ width: 1280, height: 1280, right: -500, top: 40, opacity: 0.9 }}
      />
      <div
        aria-hidden
        className="glow-violet"
        style={{ width: 540, height: 540, left: "38%", top: "30%", opacity: 0.7 }}
      />

      {/* Over-the-top three.js centerpiece — sits behind the title */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <HeroScene />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1280px] flex-col px-10 py-20 md:px-16">
        <Reveal>
          <div className="flex items-center gap-4">
            <span
              className="inline-block h-[2px] w-10"
              style={{ background: "var(--violet)" }}
            />
            <span className="eyebrow">
              A JA STUDENT COMPANY&nbsp;&nbsp;·&nbsp;&nbsp;FORT McMURRAY, AB
            </span>
          </div>
        </Reveal>

        <div className="flex flex-1 flex-col justify-center">
          <Reveal delay={1}>
            <h1
              className="font-display font-bold leading-[0.92] text-white"
              style={{
                fontSize: "clamp(84px, 14vw, 200px)",
                letterSpacing: "-0.04em",
              }}
            >
              SlimeSwipe
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p
              className="mt-6 font-display"
              style={{
                fontSize: "clamp(24px, 3.2vw, 44px)",
                color: "var(--pearl)",
              }}
            >
              Swipe the Grime.{" "}
              <span style={{ color: "var(--ice)", fontStyle: "italic" }}>
                Keep the Shine.
              </span>
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div
              className="mt-12 dotted-rule"
              style={{ width: "min(560px, 60vw)" }}
            />
          </Reveal>

          <Reveal delay={4}>
            <p
              className="mt-4 text-[14px]"
              style={{ color: "var(--dim)" }}
            >
              JA Northern Alberta Big Pitch 2026
            </p>
          </Reveal>

          <Reveal delay={5}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <span
                className="text-[10px] font-bold"
                style={{
                  color: "var(--lilac)",
                  letterSpacing: "0.3em",
                }}
              >
                PRESENTED BY
              </span>
              {[
                { name: "Vedant Panchal", role: "PRESIDENT" },
                { name: "Saket Pandey", role: "VP · SALES" },
                { name: "Jean Soro", role: "VP · SOCIAL MEDIA" },
              ].map((p, i) => (
                <span
                  key={p.name}
                  className="flex items-baseline gap-3"
                  style={{ opacity: 1 - i * 0.02 }}
                >
                  {i > 0 && (
                    <span
                      aria-hidden
                      className="inline-block h-[3px] w-[3px] rounded-full"
                      style={{ background: "var(--violet)" }}
                    />
                  )}
                  <span
                    className="font-display text-[16px] font-bold text-white"
                  >
                    {p.name}
                  </span>
                  <span
                    className="text-[9px] font-bold"
                    style={{
                      color: "var(--electric)",
                      letterSpacing: "0.3em",
                    }}
                  >
                    {p.role}
                  </span>
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={5}>
          <div className="flex items-center gap-4 pb-2">
            <span
              className="inline-block h-8 w-[3px]"
              style={{ background: "var(--violet)" }}
            />
            <div>
              <div
                className="text-[11px] font-bold text-white"
                style={{ letterSpacing: "0.3em" }}
              >
                CLEAN IS A LIFESTYLE
              </div>
              <div
                className="text-[11px] italic"
                style={{ color: "var(--faint)" }}
              >
                Established 2025
              </div>
            </div>

            <a
              href="#problem"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#problem")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="group ml-auto hidden items-center gap-3 md:flex"
            >
              <span
                className="text-[10px] font-bold transition-colors group-hover:text-white"
                style={{ color: "var(--dim)", letterSpacing: "0.3em" }}
              >
                BEGIN THE DECK
              </span>
              <span
                aria-hidden
                className="inline-block h-6 w-[1px]"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--violet), transparent)",
                  animation: "scroll-hint 2s ease-in-out infinite",
                }}
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ==============================================================
   SLIDE 2 · THE PROBLEM
   ============================================================== */
export function Slide2Problem() {
  const rivals = [
    {
      n: "01",
      rival: "THE VACUUM CLEANER",
      problem:
        "Can't fit into a dashboard vent, can't follow the curve of a cupholder seam, and still leaves a film of dust on buttons it should have taken care of.",
      ss:
        "A pinch of gel presses itself into every vent slat, every stitch, every crack — and lifts the debris out with it.",
    },
    {
      n: "02",
      rival: "THE DISPOSABLE WIPE",
      problem:
        "Pushes dust from one surface to another, smears fingerprints instead of lifting them, and ends up in the trash after a single passenger seat.",
      ss:
        "One jar lasts weeks. The gel picks up debris on contact, and you knead a fresh surface when it's spent.",
    },
    {
      n: "03",
      rival: "THE PRO DETAILING APPOINTMENT",
      problem:
        "Costs $80–$150, eats half a Saturday, and you're back to crumbs by Wednesday. Nobody pays that on a weekly cadence.",
      ss:
        "Under 60 seconds, under $14 a jar, and realistic to pull out the moment your car starts feeling off.",
    },
  ];

  return (
    <Slide id="problem" variant="glow-left">
      <Reveal>
        <SlideHeader eyebrow="02 · THE PROBLEM" />
      </Reveal>

      <div className="mt-20">
        <Reveal delay={1}>
          <SectionTitle>
            Dirt in your <span style={{ color: "var(--electric)" }}>vents</span>.
            <br />
            Crumbs in your <span style={{ color: "var(--electric)" }}>cupholders</span>.
            <br />
            Dust on your <span style={{ color: "var(--electric)" }}>dashboard</span>.
          </SectionTitle>
        </Reveal>

        <Reveal delay={2}>
          <div className="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-2">
            <span
              className="font-display font-bold leading-none text-white line-through opacity-50"
              style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
            >
              $300
            </span>
            <span
              className="font-display"
              style={{ color: "var(--dim)", fontSize: "clamp(20px, 2vw, 28px)" }}
            >
              &rarr;
            </span>
            <span
              className="font-display font-bold leading-none stat-glow"
              style={{
                fontSize: "clamp(48px, 6vw, 80px)",
                color: "var(--electric)",
              }}
            >
              $13.99
            </span>
            <span
              className="text-[12px] font-bold"
              style={{ color: "var(--lilac)", letterSpacing: "0.3em" }}
            >
              SAME SHOWROOM RESULT
            </span>
          </div>
        </Reveal>
      </div>

      <div className="mt-14 grid flex-1 grid-cols-1 items-stretch gap-5 md:grid-cols-3">
        {rivals.map((r, i) => (
          <Reveal key={r.n} delay={(i + 1) as 1 | 2 | 3}>
            <div className="card-base relative flex h-full flex-col p-8 pl-10">
              <div
                className="absolute inset-y-0 left-0 w-[3px]"
                style={{ background: "var(--violet)" }}
              />
              <div
                className="text-[10px] font-bold"
                style={{ color: "var(--violet)", letterSpacing: "0.3em" }}
              >
                {r.n}  ·  VS
              </div>
              <div
                className="mt-4 font-display text-[26px] font-bold leading-tight text-white"
              >
                {r.rival}
              </div>

              <div
                className="mt-6 text-[9px] font-bold"
                style={{ color: "var(--dim)", letterSpacing: "0.3em" }}
              >
                WHERE IT FAILS
              </div>
              <p
                className="mt-2 text-[13px] leading-relaxed"
                style={{ color: "var(--pearl)" }}
              >
                {r.problem}
              </p>

              <div
                className="my-5 h-px w-full"
                style={{ background: "var(--hair)" }}
              />

              <div
                className="text-[9px] font-bold"
                style={{ color: "var(--electric)", letterSpacing: "0.3em" }}
              >
                WHAT SLIMESWIPE DOES
              </div>
              <p
                className="mt-2 text-[13px] leading-relaxed text-white"
              >
                {r.ss}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={4}>
        <div className="mt-6 flex items-center gap-4">
          <span
            className="text-[11px] font-bold"
            style={{ color: "var(--electric)", letterSpacing: "0.3em" }}
          >
            THE GAP
          </span>
          <span className="text-[14px] italic text-white">
            There&apos;s no weekly-priced, vent-reaching, reusable cleaner on
            the market. That&apos;s the hole SlimeSwipe was built to fill.
          </span>
        </div>
      </Reveal>

      <SlideFooter num={3} total={17} next="#what" />
    </Slide>
  );
}

/* ==============================================================
   SLIDE 3 · WHAT WE DO
   ============================================================== */
export function Slide3WhatWeDo() {
  const jars = [
    {
      name: "COBALT MINT",
      scent: "ICY PEPPERMINT",
      src: "/jars/2.svg",
      scentColor: "var(--electric)",
      glow: "radial-gradient(ellipse at center, rgba(79,123,255,0.55) 0%, rgba(79,123,255,0.2) 45%, transparent 75%)",
    },
    {
      name: "FOREST BREEZE",
      scent: "EUCALYPTUS",
      src: "/jars/1.svg",
      scentColor: "var(--ice)",
      glow: "radial-gradient(ellipse at center, rgba(120,200,170,0.5) 0%, rgba(120,200,170,0.18) 45%, transparent 75%)",
    },
    {
      name: "LAVISH BLOOM",
      scent: "FLORAL",
      src: "/jars/3.svg",
      scentColor: "var(--violet)",
      glow: "radial-gradient(ellipse at center, rgba(155,126,222,0.55) 0%, rgba(155,126,222,0.22) 45%, transparent 75%)",
    },
  ];

  return (
    <Slide id="what" variant="glow-right">
      <Reveal>
        <SlideHeader eyebrow="03 · WHAT WE DO" />
      </Reveal>

      <div className="mt-20">
        <Reveal delay={1}>
          <p
            className="font-display leading-tight"
            style={{
              fontSize: "clamp(26px, 2.8vw, 40px)",
              color: "var(--pearl)",
            }}
          >
            A <span className="text-white font-bold">premium gel cleaner</span>{" "}
            engineered to lift dust and debris from every surface of your car
            interior —{" "}
            <span style={{ color: "var(--lilac)", fontStyle: "italic" }}>
              in three signature scents.
            </span>
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid flex-1 grid-cols-1 items-stretch gap-8 md:grid-cols-[340px_1fr]">
        {/* Product spec panel */}
        <Reveal delay={2}>
          <div className="card-base relative h-full p-8 pl-10">
            <div
              className="absolute inset-y-0 left-0 w-[4px]"
              style={{ background: "var(--violet)" }}
            />
            <div
              className="text-[10px] font-bold"
              style={{ color: "var(--lilac)", letterSpacing: "0.3em" }}
            >
              PRODUCT FORMAT
            </div>
            <div className="mt-5 font-display text-[22px] font-bold text-white">
              120ml jar&nbsp;&nbsp;·&nbsp;&nbsp;reusable
            </div>
            <div
              className="my-6 h-px w-full"
              style={{ background: "var(--hair)" }}
            />
            <dl className="space-y-4">
              {[
                ["Application", "Press + peel"],
                ["Coverage", "~50 uses / jar"],
                ["Scents", "3 signature"],
                ["Target", "Car interiors"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between">
                  <dt
                    className="text-[12px]"
                    style={{ color: "var(--dim)" }}
                  >
                    {k}
                  </dt>
                  <dd className="text-[12px] font-bold text-white">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        {/* Jar display */}
        <div className="grid grid-cols-3 gap-6">
          {jars.map((j, i) => (
            <Reveal key={j.name} delay={(i + 2) as 2 | 3 | 4}>
              <div className="flex h-full flex-col items-center justify-end">
                <div className="relative h-[320px] w-full max-w-[260px]">
                  {/* Glow pad behind jar */}
                  <div
                    aria-hidden
                    className="absolute inset-0 float-slow"
                    style={{
                      background: j.glow,
                      filter: "blur(22px)",
                    }}
                  />
                  {/* Jar photo — already transparent, just let it float */}
                  <div className="jar-float relative h-full w-full">
                    <Image
                      src={j.src}
                      alt={`${j.name} — ${j.scent}`}
                      fill
                      sizes="260px"
                      className="object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)]"
                      priority={i === 0}
                    />
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <div
                    className="text-[12px] font-bold text-white"
                    style={{ letterSpacing: "0.22em" }}
                  >
                    {j.name}
                  </div>
                  <div
                    className="mt-1 text-[9px] font-bold"
                    style={{
                      color: j.scentColor,
                      letterSpacing: "0.3em",
                    }}
                  >
                    {j.scent}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <SlideFooter num={4} total={17} next="#how" />
    </Slide>
  );
}

/* ==============================================================
   SLIDE 4 · HOW IT WORKS
   ============================================================== */
export function Slide4How() {
  const steps = [
    {
      n: "01",
      title: "PRESS",
      desc: "Apply a pinch of gel directly to the dusty area — vents, crevices, seams, buttons.",
      accent: "var(--violet)",
    },
    {
      n: "02",
      title: "PULL",
      desc: "Drag the gel slowly across the surface. Debris transfers into the gel on contact.",
      accent: "var(--electric)",
    },
    {
      n: "03",
      title: "PEEL",
      desc: "Lift the gel away cleanly. Knead to reveal a fresh surface, then repeat until spent.",
      accent: "var(--purple)",
    },
  ];

  return (
    <Slide id="how" variant="base">
      <Reveal>
        <SlideHeader eyebrow="04 · HOW IT WORKS" />
      </Reveal>

      <div className="mt-20">
        <Reveal delay={1}>
          <SectionTitle size="md">Three steps. Every corner clean.</SectionTitle>
        </Reveal>
        <Reveal delay={2}>
          <Subtitle>
            A mechanical bond, not a chemical one. The gel pulls debris out — it
            doesn&apos;t push it around.
          </Subtitle>
        </Reveal>
      </div>

      <div className="relative mt-16 grid flex-1 grid-cols-1 items-stretch gap-6 md:grid-cols-3">
        {/* connector line (absolute behind cards) */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[16.6%] right-[16.6%] top-[48%] hidden h-px md:block"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--violet) 15%, var(--violet) 85%, transparent)",
            opacity: 0.5,
          }}
        />
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={(i + 1) as 1 | 2 | 3}>
            <div className="card-base relative h-full p-10">
              <div
                className="absolute left-0 top-0 h-[3px] w-16"
                style={{ background: s.accent }}
              />
              <div
                className="font-display text-[32px] font-bold"
                style={{ color: s.accent }}
              >
                {s.n}
              </div>
              <div
                className="mt-4 font-display text-[30px] font-bold text-white"
                style={{ letterSpacing: "0.04em" }}
              >
                {s.title}
              </div>
              <p
                className="mt-6 text-[14px] leading-relaxed"
                style={{ color: "var(--pearl)" }}
              >
                {s.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={4}>
        <div
          className="card-hero mt-8 flex items-center gap-4 px-6 py-4"
          style={{ borderRadius: 0 }}
        >
          <span
            className="text-[11px] font-bold"
            style={{ color: "var(--lilac)", letterSpacing: "0.3em" }}
          >
            RESULT
          </span>
          <span
            className="hidden h-4 w-px md:inline-block"
            style={{ background: "var(--violet)" }}
          />
          <span className="text-[14px] text-white md:text-[15px]">
            A surface-to-crevice clean that disposable wipes can&apos;t match — in
            under 60 seconds.
          </span>
        </div>
      </Reveal>

      <SlideFooter num={5} total={17} next="#edge" />
    </Slide>
  );
}

/* ==============================================================
   SLIDE 5 · COMPETITIVE EDGE
   ============================================================== */
export function Slide5Edge() {
  const criteria = [
    "Reaches vents & crevices",
    "Reusable per jar",
    "Signature scent options",
    "Weekly-friendly price",
    "Community reinvestment",
  ];
  const brands = [
    {
      name: "SLIMESWIPE",
      hero: true,
      values: [true, true, true, true, true],
    },
    {
      name: "DISPOSABLE WIPES",
      hero: false,
      values: [false, false, false, true, false],
    },
    {
      name: "PRO DETAILING",
      hero: false,
      values: [true, false, false, false, false],
    },
  ];

  const Dot = ({
    on,
    hero,
  }: {
    on: boolean;
    hero: boolean;
  }) =>
    on ? (
      <span
        aria-hidden
        className="inline-block h-3 w-3 rounded-full"
        style={{
          background: hero ? "var(--electric)" : "var(--lilac)",
          boxShadow: hero
            ? "0 0 16px rgba(79,123,255,0.7)"
            : "0 0 10px rgba(155,126,222,0.4)",
        }}
      />
    ) : (
      <span
        aria-hidden
        className="inline-block h-3 w-3 rounded-full"
        style={{ background: "var(--hair)" }}
      />
    );

  return (
    <Slide id="edge" variant="glow-right">
      <Reveal>
        <SlideHeader eyebrow="05 · COMPETITIVE EDGE" />
      </Reveal>

      <div className="mt-20">
        <Reveal delay={1}>
          <SectionTitle>
            We don&apos;t compete on price.
            <br />
            We compete on reach.
          </SectionTitle>
        </Reveal>
      </div>

      <Reveal delay={2}>
        <div className="mt-12 overflow-hidden rounded-none hair-border">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th
                  className="px-6 py-4 text-left text-[10px] font-bold"
                  style={{
                    color: "var(--lilac)",
                    letterSpacing: "0.26em",
                    background: "var(--violet-deep)",
                  }}
                >
                  CRITERIA
                </th>
                {brands.map((b) => (
                  <th
                    key={b.name}
                    className="relative px-4 py-4 text-center text-[11px] font-bold"
                    style={{
                      color: b.hero ? "var(--white)" : "var(--lilac)",
                      letterSpacing: "0.22em",
                      background: b.hero
                        ? "var(--violet-deep)"
                        : "transparent",
                      width: "22%",
                    }}
                  >
                    {b.hero && (
                      <span
                        className="absolute inset-x-0 top-0 h-[3px]"
                        style={{ background: "var(--electric)" }}
                      />
                    )}
                    {b.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {criteria.map((c, ri) => (
                <tr key={c}>
                  <td
                    className="px-6 py-4 text-[13px]"
                    style={{
                      color: "var(--pearl)",
                      background:
                        ri % 2 === 0 ? "var(--obsidian)" : "transparent",
                      borderTop: "1px solid var(--hair)",
                    }}
                  >
                    {c}
                  </td>
                  {brands.map((b) => (
                    <td
                      key={b.name + c}
                      className="px-4 py-4 text-center"
                      style={{
                        background: b.hero
                          ? "rgba(26, 15, 46, 0.7)"
                          : "transparent",
                        borderTop: "1px solid var(--hair)",
                      }}
                    >
                      <Dot on={b.values[ri]} hero={b.hero} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal delay={3}>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              tag: "LOCAL MARKET FIT",
              title: "Built for a car town.",
              desc: "Fort McMurray residents invest heavily in their vehicles — but the detailing aisle is boring, overused, and dull. SlimeSwipe is the first genuinely exciting product in that aisle.",
              accent: "var(--electric)",
            },
            {
              tag: "INSIDE ADVANTAGE",
              title: "Born in a dealership.",
              desc: "We're embedded in the auto industry before we ever sold a jar. That proximity shapes every design decision — what surfaces, what scent, what size.",
              accent: "var(--violet)",
            },
            {
              tag: "CATEGORY OWNERSHIP",
              title: "No one else is here.",
              desc: "Of every JA team competing this year, we're the only one building for cars. In a niche that big and that untapped, we own the narrative by default.",
              accent: "var(--lilac)",
            },
          ].map((b, i) => (
            <div
              key={b.tag}
              className="card-base relative h-full p-6 pl-8"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div
                className="absolute inset-y-0 left-0 w-[3px]"
                style={{ background: b.accent }}
              />
              <div
                className="text-[9px] font-bold"
                style={{ color: b.accent, letterSpacing: "0.3em" }}
              >
                {b.tag}
              </div>
              <div className="mt-4 font-display text-[20px] font-bold leading-snug text-white">
                {b.title}
              </div>
              <p
                className="mt-3 text-[12.5px] leading-relaxed"
                style={{ color: "var(--pearl)" }}
              >
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={4}>
        <div className="mt-6 flex items-center gap-4">
          <span
            className="text-[11px] font-bold"
            style={{ color: "var(--electric)", letterSpacing: "0.3em" }}
          >
            THE EDGE
          </span>
          <span className="italic text-[14px] text-white">
            Only SlimeSwipe meets every need — at a price that makes weekly use
            realistic, in a category no one else is fighting for.
          </span>
        </div>
      </Reveal>

      <SlideFooter num={6} total={17} next="#insight" />
    </Slide>
  );
}

/* ==============================================================
   SLIDE 6 · CUSTOMER INSIGHT
   ============================================================== */
export function Slide6Insight() {
  const bars = [
    { name: "Lavish Bloom", scent: "Floral", pct: 36, color: "var(--violet)" },
    {
      name: "Cobalt Mint",
      scent: "Icy Peppermint",
      pct: 34,
      color: "var(--electric)",
    },
    {
      name: "Forest Breeze",
      scent: "Eucalyptus",
      pct: 30,
      color: "var(--ice)",
    },
  ];
  const max = 40;

  return (
    <Slide id="insight" variant="glow-left">
      <Reveal>
        <SlideHeader eyebrow="06 · CUSTOMER INSIGHT" />
      </Reveal>

      <div className="mt-20">
        <Reveal delay={1}>
          <SectionTitle size="md">We didn&apos;t guess. We asked.</SectionTitle>
        </Reveal>
        <Reveal delay={2}>
          <Subtitle>
            Every product decision — scent, format, price — is traceable back to
            customer data.
          </Subtitle>
        </Reveal>
      </div>

      <div className="mt-12 grid flex-1 grid-cols-1 items-stretch gap-6 md:grid-cols-[380px_1fr]">
        <Reveal delay={2}>
          <div className="card-hero flex h-full flex-col justify-between p-10">
            <div>
              <div
                className="font-display font-bold leading-none text-white stat-glow"
                style={{ fontSize: "clamp(100px, 11vw, 160px)" }}
              >
                60+
              </div>
              <div
                className="mt-6 text-[11px] font-bold"
                style={{ color: "var(--lilac)", letterSpacing: "0.3em" }}
              >
                SURVEY RESPONSES
              </div>
            </div>
            <p
              className="mt-8 text-[14px] italic leading-relaxed"
              style={{ color: "var(--pearl)" }}
            >
              Across local demographics — commuters, parents, students, and car
              enthusiasts — to validate demand before we produced a single jar.
            </p>
          </div>
        </Reveal>

        <Reveal delay={3}>
          <div className="card-base flex h-full flex-col p-8">
            <div className="flex items-baseline justify-between">
              <div
                className="text-[10px] font-bold"
                style={{ color: "var(--lilac)", letterSpacing: "0.26em" }}
              >
                SCENT PREFERENCE&nbsp;&nbsp;·&nbsp;&nbsp;SURVEY RESULTS
              </div>
            </div>

            <div className="mt-10 flex flex-1 flex-col justify-center gap-6">
              {bars.map((b) => (
                <div key={b.name} className="grid grid-cols-[200px_1fr_48px] items-center gap-4">
                  <div>
                    <div className="text-[13px] font-bold text-white">
                      {b.name}
                    </div>
                    <div
                      className="text-[10px]"
                      style={{ color: "var(--dim)", letterSpacing: "0.12em" }}
                    >
                      {b.scent}
                    </div>
                  </div>
                  <div
                    className="relative h-2 w-full overflow-hidden"
                    style={{ background: "var(--night)" }}
                  >
                    <div
                      className="bar-fill absolute inset-y-0 left-0"
                      style={{
                        width: `${(b.pct / max) * 100}%`,
                        background: `linear-gradient(90deg, ${b.color}, ${b.color})`,
                        boxShadow: `0 0 20px ${b.color}`,
                      }}
                    />
                  </div>
                  <div className="text-right text-[13px] font-bold text-white">
                    {b.pct}%
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <span
                className="text-[10px] font-bold"
                style={{ color: "var(--electric)", letterSpacing: "0.3em" }}
              >
                INSIGHT
              </span>
              <span
                className="text-[13px] italic"
                style={{ color: "var(--pearl)" }}
              >
                Preference was nearly even — validating a 3-scent launch
                strategy over a single hero product.
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      <SlideFooter num={7} total={17} next="#testimonials" />
    </Slide>
  );
}

