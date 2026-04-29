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
   TESTIMONIALS (new · position 7 · eyebrow 07)
   ============================================================== */
export function SlideTestimonials() {
  const quotes = [
    {
      quote:
        "Bought one at the school market just to help out tbh. Ended up actually using it on my car lol. Cleaned my vents and cupholders on the drive home and it smells good too. Gonna grab the floral one next time.",
      name: "Kevin Aghanya",
      context: "Grade 12 · supporting a local student business",
      accent: "var(--electric)",
    },
    {
      quote:
        "The students showed me an early version before the market and I was honestly skeptical. It holds up. Cleans without leaving residue on the trim and the scents aren't overpowering. Nice to see a student product that actually works.",
      name: "Lori Simpson",
      context: "Chemistry teacher",
      accent: "var(--violet)",
    },
    {
      quote:
        "Saw them set up at a local event and grabbed one because the jar looked kind of cool. Ended up using it on my truck — pulled dust out of spots I couldn't even reach with a cloth before. Worth it.",
      name: "Ayaan Badar",
      context: "Walk-up customer · local event",
      accent: "var(--lilac)",
    },
  ];

  return (
    <Slide id="testimonials" variant="glow-left">
      <Reveal>
        <SlideHeader eyebrow="14 · TESTIMONIALS" />
      </Reveal>

      <div className="mt-8">
        <Reveal delay={1}>
          <SectionTitle>
            What our real customers
            <br />
            are actually saying.
          </SectionTitle>
        </Reveal>
        <Reveal delay={2}>
          <Subtitle>
            Unedited — a student, a teacher, a walk-up at the farmers&apos;
            market. Three different people, one thing in common: they&apos;d
            buy another jar.
          </Subtitle>
        </Reveal>
      </div>

      <div className="mt-12 grid flex-1 grid-cols-1 items-stretch gap-5 md:grid-cols-3">
        {quotes.map((q, i) => (
          <Reveal key={q.name} delay={(i + 1) as 1 | 2 | 3}>
            <div className="card-base relative flex h-full flex-col p-8">
              <div
                className="absolute left-0 top-0 h-[3px] w-16"
                style={{ background: q.accent }}
              />
              <div
                className="font-display text-[56px] leading-none"
                style={{ color: q.accent }}
              >
                &ldquo;
              </div>
              <p
                className="mt-2 flex-1 text-[15px] leading-relaxed text-white"
                style={{ letterSpacing: "0.005em" }}
              >
                {q.quote}
              </p>
              <div
                className="my-5 h-px w-full"
                style={{ background: "var(--hair)" }}
              />
              <div
                className="text-[13px] font-bold text-white"
              >
                {q.name}
              </div>
              <div
                className="mt-[2px] text-[11px]"
                style={{ color: "var(--dim)" }}
              >
                {q.context}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <SlideFooter num={15} total={18} next="#edge" />
    </Slide>
  );
}

/* ==============================================================
   SALES STRATEGY (new · position 10 · replaces old GTM · eyebrow 09)
   ============================================================== */
export function SlideSales() {
  const pillars = [
    {
      n: "01",
      title: "PREORDERS",
      headline: "Momentum before inventory.",
      desc: "Customers commit before we produce. That builds the buzz that sells to strangers — and gives us the runway to stock without waste.",
      accent: "var(--electric)",
    },
    {
      n: "02",
      title: "DIRECT-TO-CONSUMER",
      headline: "The booth is our showroom.",
      desc: "Strategically placed at events where our target customers already gather — car shows, school events, farmers’ markets. Face-to-face converts highest.",
      accent: "var(--violet)",
    },
    {
      n: "03",
      title: "ONLINE DELIVERY",
      headline: "Special orders, shipped.",
      desc: "Custom requests, bulk orders, and anyone outside our booth radius. Keeps the long tail of demand from leaking to competitors.",
      accent: "var(--lilac)",
    },
    {
      n: "04",
      title: "WHOLESALE",
      headline: "Shelf space, not just stalls.",
      desc: "Active conversations with NAPA and the local GM dealership. Getting SlimeSwipe behind the counter of names people already trust.",
      accent: "var(--purple)",
    },
  ];

  return (
    <Slide id="sales" variant="glow-right">
      <Reveal>
        <SlideHeader eyebrow="16 · SALES STRATEGY" />
      </Reveal>

      <div className="mt-8">
        <Reveal delay={1}>
          <SectionTitle>
            Four ways to sell.
            <br />
            One product to move.
          </SectionTitle>
        </Reveal>
        <Reveal delay={2}>
          <Subtitle>
            A layered distribution model — each channel unlocks a different
            buyer the others can&apos;t reach.
          </Subtitle>
        </Reveal>
      </div>

      <div className="mt-12 grid flex-1 grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {pillars.map((p, i) => (
          <Reveal key={p.n} delay={(i + 1) as 1 | 2 | 3 | 4}>
            <div className="card-base relative flex h-full flex-col p-7 pl-9">
              <div
                className="absolute inset-y-0 left-0 w-[3px]"
                style={{ background: p.accent }}
              />
              <div
                className="text-[10px] font-bold"
                style={{ color: p.accent, letterSpacing: "0.3em" }}
              >
                {p.n}
              </div>
              <div
                className="mt-4 text-[12px] font-bold text-white"
                style={{ letterSpacing: "0.2em" }}
              >
                {p.title}
              </div>
              <div className="mt-6 font-display text-[22px] font-bold leading-tight text-white">
                {p.headline}
              </div>
              <p
                className="mt-4 text-[12.5px] leading-relaxed"
                style={{ color: "var(--pearl)" }}
              >
                {p.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={5}>
        <div
          className="card-hero mt-6 flex items-center gap-4 px-6 py-4"
          style={{ borderLeft: "4px solid var(--electric)" }}
        >
          <span
            className="text-[11px] font-bold"
            style={{ color: "var(--electric)", letterSpacing: "0.3em" }}
          >
            SEQUENCING
          </span>
          <span className="text-[14px] italic text-white">
            Preorders <span className="font-bold not-italic">build</span> demand. Booths{" "}
            <span className="font-bold not-italic">prove</span> it. Online{" "}
            <span className="font-bold not-italic">scales</span> it. Wholesale{" "}
            <span className="font-bold not-italic">locks it in</span>.
          </span>
        </div>
      </Reveal>

      <SlideFooter num={17} total={18} next="#ask" />
    </Slide>
  );
}

/* ==============================================================
   SALES (new · position 11 · eyebrow 10) — booth pivot + B2B wins
   ============================================================== */
export function SlideSalesProof() {
  const phases = [
    {
      tag: "PHASE 01",
      title: "Retail-first stalled.",
      desc: "We wanted shelves before sales — proof of demand for B2B negotiations. But traditional shelf-space moved too slowly. Weeks in, zero revenue.",
      accent: "var(--lilac)",
      hero: false,
    },
    {
      tag: "PHASE 02",
      title: "The booth pivot.",
      desc: "We took SlimeSwipe direct to the consumer at events and pop-ups. Sales skyrocketed from zero to $2,000 in seven days.",
      accent: "var(--electric)",
      hero: true,
    },
    {
      tag: "PHASE 03",
      title: "B2B unlocked.",
      desc: "The booth traction gave us leverage. Summit GM signed for 160 units with a '1 Car = 1 Free SlimeSwipe' promo. NAPA is pending.",
      accent: "var(--violet)",
      hero: false,
    },
  ];

  const milestones = [
    {
      stat: "$0 → $2,000",
      label: "BOOTH SALES · 1 WEEK",
      sub: "After pivoting from retail-first to direct-to-consumer",
      accent: "var(--electric)",
    },
    {
      stat: "160 UNITS",
      label: "FIRST B2B · SUMMIT GM",
      sub: "Locked with a 1 car = 1 free SlimeSwipe promo",
      accent: "var(--violet)",
    },
    {
      stat: "WIP",
      label: "NAPA PIPELINE",
      sub: "Active negotiations · auto-parts shelf placement",
      accent: "var(--lilac)",
    },
  ];

  return (
    <Slide id="wins" variant="glow-left">
      <Reveal>
        <SlideHeader eyebrow="05 · SALES" />
      </Reveal>

      <div className="mt-8">
        <Reveal delay={1}>
          <SectionTitle>
            $0 to $2,000 — in <span style={{ color: "var(--electric)" }}>one week</span>.
          </SectionTitle>
        </Reveal>
        <Reveal delay={2}>
          <Subtitle>
            Retail-first stalled. So we stopped waiting and{" "}
            <span className="text-white font-bold">took SlimeSwipe to the consumer</span> — and the receipts followed.
          </Subtitle>
        </Reveal>
      </div>

      {/* 3-phase narrative */}
      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {phases.map((p, i) => (
          <Reveal key={p.tag} delay={(i + 1) as 1 | 2 | 3}>
            <div className={`${p.hero ? "card-hero" : "card-base"} relative h-full p-7 pl-9`}>
              <div className="absolute inset-y-0 left-0 w-[3px]" style={{ background: p.accent }} />
              <div
                className="text-[10px] font-bold"
                style={{ color: p.accent, letterSpacing: "0.3em" }}
              >
                {p.tag}
              </div>
              <div className="mt-4 font-display text-[22px] font-bold leading-tight text-white">
                {p.title}
              </div>
              <p
                className="mt-4 text-[12.5px] leading-relaxed"
                style={{ color: "var(--pearl)" }}
              >
                {p.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Stats strip — the receipts */}
      <Reveal delay={4}>
        <div className="card-base mt-6 grid grid-cols-1 overflow-hidden md:grid-cols-3">
          {milestones.map((m, i) => (
            <div
              key={m.label}
              className="relative p-6 pl-7"
              style={{ borderLeft: i === 0 ? "none" : "1px solid var(--hair)" }}
            >
              <div className="absolute inset-y-3 left-0 w-[3px]" style={{ background: m.accent }} />
              <div className="font-display text-[26px] font-bold leading-none text-white">
                {m.stat}
              </div>
              <div
                className="mt-3 text-[10px] font-bold"
                style={{ color: m.accent, letterSpacing: "0.3em" }}
              >
                {m.label}
              </div>
              <div
                className="mt-1 text-[11px] italic"
                style={{ color: "var(--faint)" }}
              >
                {m.sub}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Summit GM proof photo */}
      <Reveal delay={5}>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-[200px_1fr]">
          <div
            className="relative h-32 w-full overflow-hidden md:h-full"
            style={{
              background: "var(--violet-deep)",
              border: "1px solid var(--violet)",
            }}
          >
            <Image
              src="/team/IMG_7870.jpg"
              alt="SlimeSwipe team inside Summit GM dealership"
              fill
              sizes="200px"
              className="object-cover"
              style={{ objectPosition: "center 25%" }}
              unoptimized
            />
          </div>
          <div
            className="flex items-center gap-4 px-4 py-3"
            style={{
              borderLeft: "3px solid var(--violet)",
              background: "rgba(26, 15, 46, 0.5)",
            }}
          >
            <span
              className="text-[10px] font-bold"
              style={{ color: "var(--violet)", letterSpacing: "0.3em" }}
            >
              INSIDE SUMMIT GM
            </span>
            <span className="text-[14px] italic text-white">
              We walked the booth model into the dealership lobby — and walked out with our{" "}
              <span className="font-bold not-italic">first B2B contract</span>.
            </span>
          </div>
        </div>
      </Reveal>

      <SlideFooter num={6} total={18} next="#traction" />
    </Slide>
  );
}

/* ==============================================================
   PRODUCTION (new · position 13 · eyebrow 12)
   ============================================================== */
export function SlideProduction() {
  const steps: Array<{
    tag: string;
    title: string;
    desc: string;
    accent: string;
    src?: string;
    objectPosition?: string;
  }> = [
    {
      tag: "STEP 01",
      title: "Gel base mixed",
      desc: "Food-grade base prepped in small batches.",
      accent: "var(--electric)",
      src: "/team/IMG_5700.JPG",
      objectPosition: "center 40%",
    },
    {
      tag: "STEP 02",
      title: "Scent + jar fill",
      desc: "Signature scent compounds added, jars filled by hand.",
      accent: "var(--violet)",
      src: "/team/IMG_5538.jpg",
      objectPosition: "center 35%",
    },
    {
      tag: "STEP 03",
      title: "Sealed + labeled",
      desc: "Quality-checked, sealed, and labeled before they ship.",
      accent: "var(--lilac)",
      src: "/team/IMG_7856.jpg",
      objectPosition: "center 30%",
    },
  ];

  const stats = [
    { stat: "100%", label: "MADE IN-HOUSE", accent: "var(--electric)" },
    { stat: "FOOD-GRADE", label: "INGREDIENTS ONLY", accent: "var(--violet)" },
    { stat: "FORT MAC", label: "LOCAL PRODUCTION", accent: "var(--lilac)" },
  ];

  return (
    <Slide id="production" variant="glow-both">
      <Reveal>
        <SlideHeader eyebrow="12 · PRODUCTION" />
      </Reveal>

      <div className="mt-8">
        <Reveal delay={1}>
          <SectionTitle>
            Mixed by us. Made in <span style={{ color: "var(--electric)" }}>Fort Mac</span>.
          </SectionTitle>
        </Reveal>
        <Reveal delay={2}>
          <Subtitle>
            Every jar is hand-assembled by the team — gel base, scent compound, glass, label.
            Local production means <span className="text-white font-bold">we control the quality</span> on every unit that ships.
          </Subtitle>
        </Reveal>
      </div>

      {/* Photo grid — placeholders for production-process shots */}
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.tag} delay={(i + 1) as 1 | 2 | 3}>
            <div className="card-base relative flex h-full flex-col overflow-hidden">
              <div
                className="absolute inset-x-0 top-0 z-[2] h-[3px]"
                style={{ background: s.accent }}
              />
              <div
                className="relative h-44 w-full overflow-hidden"
                style={{ background: "var(--violet-deep)" }}
              >
                {s.src ? (
                  <Image
                    src={s.src}
                    alt={`SlimeSwipe production — ${s.title}`}
                    fill
                    sizes="400px"
                    className="object-cover"
                    style={{ objectPosition: s.objectPosition ?? "center" }}
                    unoptimized
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-[9px] font-bold"
                      style={{ color: s.accent, letterSpacing: "0.3em" }}
                    >
                      [ PHOTO ]
                    </span>
                  </div>
                )}
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
                  style={{ color: s.accent, letterSpacing: "0.3em" }}
                >
                  {s.tag}
                </div>
                <div className="mt-2 font-display text-[18px] font-bold leading-tight text-white">
                  {s.title}
                </div>
                <p
                  className="mt-2 text-[11.5px] leading-relaxed"
                  style={{ color: "var(--pearl)" }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Production stats strip */}
      <Reveal delay={4}>
        <div className="card-base mt-6 grid grid-cols-1 overflow-hidden md:grid-cols-3">
          {stats.map((m, i) => (
            <div
              key={m.label}
              className="relative p-5 pl-6"
              style={{ borderLeft: i === 0 ? "none" : "1px solid var(--hair)" }}
            >
              <div
                className="absolute inset-y-2 left-0 w-[3px]"
                style={{ background: m.accent }}
              />
              <div className="font-display text-[22px] font-bold leading-none text-white">
                {m.stat}
              </div>
              <div
                className="mt-2 text-[10px] font-bold"
                style={{ color: m.accent, letterSpacing: "0.3em" }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <SlideFooter num={13} total={18} next="#insight" />
    </Slide>
  );
}

/* ==============================================================
   PROJECTED SALES (new · position 8 · eyebrow 07)
   ============================================================== */
export function SlideProjections() {
  const cards = [
    {
      label: "WHOLESALE",
      revenue: "$14,700",
      profit: "$8,379",
      note: "Summit GM (160 units) locked + NAPA pipeline in motion.",
      accent: "var(--electric)",
      hero: false,
    },
    {
      label: "RETAIL",
      revenue: "$6,300",
      profit: "$4,914",
      note: "Booth pop-ups, online direct, bundle ladder.",
      accent: "var(--violet)",
      hero: false,
    },
    {
      label: "BLENDED · 90 DAY",
      revenue: "$21,000",
      profit: "$13,293",
      note: "B2C urgency × B2B reliability — profitable growth on contract.",
      accent: "var(--lilac)",
      hero: true,
    },
  ];

  const drivers = [
    {
      stat: "SECURED",
      label: "SUMMIT GM · 160 UNITS",
      sub: "First B2B deal — already on the books",
      accent: "var(--electric)",
    },
    {
      stat: "PENDING",
      label: "NAPA PIPELINE",
      sub: "Active negotiations · auto-parts shelf placement",
      accent: "var(--violet)",
    },
    {
      stat: "RECURRING",
      label: "BOOTH FLYWHEEL",
      sub: "Weekly events · expanding reach across Fort McMurray",
      accent: "var(--lilac)",
    },
  ];

  return (
    <Slide id="projected" variant="glow-both">
      <Reveal>
        <SlideHeader eyebrow="07 · PROJECTED SALES" />
      </Reveal>

      <div className="mt-8">
        <Reveal delay={1}>
          <SectionTitle>
            <span style={{ color: "var(--electric)" }}>$21,000</span> — next 90 days.
          </SectionTitle>
        </Reveal>
        <Reveal delay={2}>
          <Subtitle>
            Built on <span className="text-white font-bold">secured B2B</span> + active pipeline +
            the booth flywheel that&apos;s already producing weekly. Not a forecast — a{" "}
            <span className="text-white font-bold">contracted trajectory</span>.
          </Subtitle>
        </Reveal>
      </div>

      {/* 3 big projection cards */}
      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.label} delay={(i + 1) as 1 | 2 | 3}>
            <div
              className={`${c.hero ? "card-hero" : "card-base"} relative h-full p-7 pl-9`}
            >
              <div
                className="absolute inset-y-0 left-0 w-[4px]"
                style={{ background: c.accent }}
              />
              <div
                className="text-[10px] font-bold"
                style={{ color: c.accent, letterSpacing: "0.3em" }}
              >
                {c.label}
              </div>
              <div
                className={`mt-5 font-display font-bold leading-none text-white ${
                  c.hero ? "stat-glow" : ""
                }`}
                style={{ fontSize: "clamp(40px, 4.6vw, 64px)" }}
              >
                {c.revenue}
              </div>
              <div
                className="mt-2 text-[10px] font-bold"
                style={{ color: "var(--dim)", letterSpacing: "0.22em" }}
              >
                REVENUE
              </div>
              <div className="mt-5 flex items-baseline gap-3">
                <span
                  className="font-display font-bold leading-none"
                  style={{
                    fontSize: "clamp(22px, 2.4vw, 30px)",
                    color: c.accent,
                  }}
                >
                  {c.profit}
                </span>
                <span
                  className="text-[10px] font-bold"
                  style={{ color: "var(--dim)", letterSpacing: "0.22em" }}
                >
                  PROFIT
                </span>
              </div>
              <div
                className="my-5 h-px w-full"
                style={{ background: "var(--hair)" }}
              />
              <p
                className="text-[12px] leading-relaxed"
                style={{ color: "var(--pearl)" }}
              >
                {c.note}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* What's behind the numbers — confidence strip */}
      <Reveal delay={4}>
        <div className="card-base mt-6 grid grid-cols-1 overflow-hidden md:grid-cols-3">
          {drivers.map((d, i) => (
            <div
              key={d.label}
              className="relative p-6 pl-7"
              style={{ borderLeft: i === 0 ? "none" : "1px solid var(--hair)" }}
            >
              <div
                className="absolute inset-y-3 left-0 w-[3px]"
                style={{ background: d.accent }}
              />
              <div
                className="text-[11px] font-bold text-white"
                style={{ letterSpacing: "0.3em" }}
              >
                {d.stat}
              </div>
              <div className="mt-2 font-display text-[16px] font-bold leading-tight text-white">
                {d.label}
              </div>
              <div
                className="mt-2 text-[11px] italic"
                style={{ color: "var(--faint)" }}
              >
                {d.sub}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <SlideFooter num={8} total={18} next="#numbers" />
    </Slide>
  );
}

/* ==============================================================
   MARKETING (new · position 14 · eyebrow 13)
   ============================================================== */
export function SlideMarketing() {
  return (
    <Slide id="marketing" variant="glow-both">
      <Reveal>
        <SlideHeader eyebrow="10 · MARKETING" />
      </Reveal>

      <div className="mt-8">
        <Reveal delay={1}>
          <SectionTitle>Two platforms. Two voices.</SectionTitle>
        </Reveal>
        <Reveal delay={2}>
          <Subtitle>
            Same brand, different voices — because the algorithm isn&apos;t the only audience.
          </Subtitle>
        </Reveal>
      </div>

      <div className="mt-12 grid flex-1 grid-cols-1 gap-6 md:grid-cols-2">
        {/* TikTok panel */}
        <Reveal delay={2}>
          <div className="card-base relative flex h-full flex-col overflow-hidden p-10 pl-12">
            <div
              className="absolute inset-y-0 left-0 w-[4px]"
              style={{ background: "var(--electric)" }}
            />
            {/* Mock phone silhouette */}
            <div
              aria-hidden
              className="absolute -bottom-10 -right-10 h-[320px] w-[180px] rounded-[40px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(79,123,255,0.25), rgba(107,63,160,0.15))",
                border: "1px solid var(--violet)",
                boxShadow: "0 0 60px rgba(79,123,255,0.3)",
                transform: "rotate(-8deg)",
              }}
            >
              <div
                className="absolute inset-3 rounded-[32px]"
                style={{ background: "var(--night)" }}
              />
              <div
                className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full"
                style={{ background: "var(--hair)" }}
              />
              <div className="absolute inset-x-6 top-12 space-y-2">
                <div
                  className="h-2 w-10"
                  style={{ background: "var(--electric)", borderRadius: 2 }}
                />
                <div
                  className="h-2 w-20"
                  style={{ background: "var(--hair)", borderRadius: 2 }}
                />
              </div>
              <div
                className="absolute inset-x-6 top-24 h-32 rounded-xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(79,123,255,0.4), rgba(155,126,222,0.25))",
                  border: "1px solid rgba(155,126,222,0.3)",
                }}
              />
              <div className="absolute inset-x-6 bottom-8 space-y-2">
                <div
                  className="h-2 w-24"
                  style={{ background: "var(--hair)", borderRadius: 2 }}
                />
                <div
                  className="h-2 w-16"
                  style={{ background: "var(--hair)", borderRadius: 2 }}
                />
              </div>
            </div>

            <div className="relative">
              <div
                className="text-[10px] font-bold"
                style={{ color: "var(--electric)", letterSpacing: "0.3em" }}
              >
                TIKTOK
              </div>
              <div className="mt-4 font-display text-[38px] font-bold leading-tight text-white">
                Funny. Fast.
                <br />
                Unignorable.
              </div>
              <p
                className="mt-5 max-w-[280px] text-[13px] leading-relaxed"
                style={{ color: "var(--pearl)" }}
              >
                Short, viral, reaction-bait content aimed at the 16–25 crowd.
                The goal isn&apos;t to sell in the video — it&apos;s to make
                the product the punchline everyone screenshots.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["GEL SATISFYING", "VENT REVEAL", "SCENT PRANK"].map((t) => (
                  <span
                    key={t}
                    className="inline-block px-3 py-1 text-[9px] font-bold"
                    style={{
                      background: "var(--violet-deep)",
                      color: "var(--ice)",
                      letterSpacing: "0.2em",
                      border: "1px solid var(--violet)",
                    }}
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Instagram panel */}
        <Reveal delay={3}>
          <div className="card-base relative flex h-full flex-col overflow-hidden p-10 pl-12">
            <div
              className="absolute inset-y-0 left-0 w-[4px]"
              style={{ background: "var(--violet)" }}
            />
            {/* Mock IG grid */}
            <div
              aria-hidden
              className="absolute -bottom-8 -right-4 grid h-[220px] w-[220px] grid-cols-3 gap-1 rotate-[-4deg]"
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    background:
                      i % 4 === 0
                        ? "linear-gradient(135deg, rgba(107,63,160,0.4), rgba(26,15,46,0.8))"
                        : i % 3 === 0
                        ? "linear-gradient(135deg, rgba(79,123,255,0.35), rgba(8,19,64,0.7))"
                        : "linear-gradient(135deg, rgba(155,126,222,0.3), rgba(26,15,46,0.8))",
                    border: "1px solid rgba(107,63,160,0.35)",
                  }}
                />
              ))}
            </div>

            <div className="relative">
              <div
                className="text-[10px] font-bold"
                style={{ color: "var(--violet)", letterSpacing: "0.3em" }}
              >
                INSTAGRAM
              </div>
              <div className="mt-4 font-display text-[38px] font-bold leading-tight text-white">
                Polished.
                <br />
                Premium. Patient.
              </div>
              <p
                className="mt-5 max-w-[280px] text-[13px] leading-relaxed"
                style={{ color: "var(--pearl)" }}
              >
                Editorial product photography, scent-reveal reels, and
                how-to carousels for a wider, older audience that buys on
                trust rather than impulse.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["EDITORIAL", "HOW-TO REELS", "SCENT STORY"].map((t) => (
                  <span
                    key={t}
                    className="inline-block px-3 py-1 text-[9px] font-bold"
                    style={{
                      background: "var(--violet-deep)",
                      color: "var(--lilac)",
                      letterSpacing: "0.2em",
                      border: "1px solid var(--violet)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Content calendar + metrics strip */}
      <Reveal delay={4}>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
          {[
            { k: "18k+", label: "TOTAL REACH", sub: "across both channels, to date" },
            { k: "3×/wk", label: "POSTING CADENCE", sub: "Reels + TikTok, 2 stories daily" },
            { k: "14k", label: "TOP TIKTOK VIEWS", sub: "scent-reveal, 72-hour burst" },
            { k: "$0", label: "AD SPEND", sub: "100% organic reach to date" },
          ].map((m, i) => {
            const accent = i % 2 === 0 ? "var(--electric)" : "var(--violet)";
            return (
              <div key={m.label} className="relative py-2 pl-4">
                <div
                  className="absolute inset-y-0 left-0 w-[2px]"
                  style={{ background: accent }}
                />
                <div
                  className="font-display text-[28px] font-bold leading-none text-white"
                >
                  {m.k}
                </div>
                <div
                  className="mt-2 text-[9px] font-bold"
                  style={{ color: accent, letterSpacing: "0.28em" }}
                >
                  {m.label}
                </div>
                <div
                  className="mt-1 text-[10.5px] italic"
                  style={{ color: "var(--dim)" }}
                >
                  {m.sub}
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>

      <Reveal delay={5}>
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-[1fr_320px]">
          {/* Blind spot + Facebook pivot */}
          <div className="card-base relative p-7 pl-9">
            <div
              className="absolute inset-y-0 left-0 w-[3px]"
              style={{ background: "var(--lilac)" }}
            />
            <div
              className="text-[10px] font-bold"
              style={{ color: "var(--lilac)", letterSpacing: "0.3em" }}
            >
              THE BLIND SPOT
            </div>
            <div className="mt-3 font-display text-[22px] font-bold leading-tight text-white">
              We dominate <span style={{ color: "var(--electric)" }}>18–24</span>.
              The <span style={{ color: "var(--electric)" }}>35–44</span> owners we built for? Barely seeing us.
            </div>
            <p
              className="mt-4 text-[12.5px] leading-relaxed"
              style={{ color: "var(--pearl)" }}
            >
              Family SUVs, work trucks, school-run minivans — those are the cars{" "}
              <span className="text-white font-bold">most plagued by the problem we solve</span>, and the buyers least likely to scroll TikTok.
              Next phase: <span className="text-white font-bold">Facebook video</span> showing the product in action, plus{" "}
              <span className="text-white font-bold">paid conversion ads</span> we can attribute end-to-end.
            </p>
          </div>

          {/* Mayor recognition slot — photo placeholder */}
          <div className="card-base relative flex flex-col p-6 pl-8">
            <div
              className="absolute inset-y-0 left-0 w-[3px]"
              style={{ background: "var(--electric)" }}
            />
            <div
              className="text-[10px] font-bold"
              style={{ color: "var(--electric)", letterSpacing: "0.3em" }}
            >
              LOCAL RECOGNITION
            </div>
            <div
              className="relative mt-4 h-40 w-full overflow-hidden"
              style={{
                background: "var(--violet-deep)",
                border: "1px solid var(--violet)",
              }}
            >
              <Image
                src="/team/mayor.jpg"
                alt="SlimeSwipe team with the Mayor of Fort McMurray at the booth"
                fill
                sizes="320px"
                className="object-cover"
                style={{ objectPosition: "center 30%" }}
                unoptimized
              />
            </div>
            <div className="mt-3 text-[12.5px] font-bold leading-snug text-white">
              Mayor of Fort McMurray dropped by our booth.
            </div>
            <div
              className="mt-1 text-[10.5px] italic"
              style={{ color: "var(--faint)" }}
            >
              Civic visibility · proof we&apos;re landing in our hometown
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={6}>
        <div className="mt-6 flex items-center gap-4">
          <span
            className="text-[11px] font-bold"
            style={{ color: "var(--electric)", letterSpacing: "0.3em" }}
          >
            THE PLAY
          </span>
          <span className="text-[14px] italic text-white">
            TikTok <span className="font-bold not-italic">discovers</span> us. Instagram{" "}
            <span className="font-bold not-italic">convinces</span> them. Facebook + paid ads{" "}
            <span className="font-bold not-italic">close the gap</span> — every view is earned.
          </span>
        </div>
      </Reveal>

      <SlideFooter num={11} total={18} next="#giving" />
    </Slide>
  );
}

/* ==============================================================
   NEW NUMBERS (replaces old Numbers · position 12 · eyebrow 11)
   ============================================================== */
export function SlideNumbers() {
  // Revenue split across 3 sales categories (Feb–April actuals)
  const channels = [
    { name: "Single Jars", value: 2210, color: "var(--electric)" },
    { name: "Bundles (2-pack + 3-pack)", value: 1842.79, color: "var(--violet)" },
    { name: "Wholesale Pilot", value: 800, color: "var(--lilac)" },
  ];
  const max = Math.max(...channels.map((c) => c.value));
  const total = channels.reduce((s, c) => s + c.value, 0);

  const tiers = [
    {
      label: "SINGLE",
      price: "$13.99",
      per: "/ jar",
      desc: "Entry price. Weekly use, impulse buy.",
      accent: "var(--electric)",
      hero: false,
    },
    {
      label: "2-PACK",
      price: "$24.99",
      per: "bundle",
      desc: "Pair up for different scents. Save $3.",
      accent: "var(--violet)",
      hero: true,
    },
    {
      label: "3-PACK",
      price: "$39.99",
      per: "bundle",
      desc: "The full scent flight — gift or stock up.",
      accent: "var(--lilac)",
      hero: false,
    },
  ];

  return (
    <Slide id="numbers" variant="base">
      <Reveal>
        <SlideHeader eyebrow="08 · THE NUMBERS" />
      </Reveal>

      <div className="mt-8">
        <Reveal delay={1}>
          <SectionTitle size="md">
            $1.94 in. $13.99 out. Every jar.
          </SectionTitle>
        </Reveal>
        <Reveal delay={2}>
          <Subtitle>
            Cost per unit is the number most startups hide. Ours is{" "}
            <span className="text-white font-bold">$1.94</span> — which is why
            the pricing ladder and the bundle math both work without gimmicks.
          </Subtitle>
        </Reveal>
      </div>

      {/* Pricing ladder — 3 tiers */}
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {tiers.map((t, i) => (
          <Reveal key={t.label} delay={(i + 1) as 1 | 2 | 3}>
            <div
              className={`${t.hero ? "card-hero" : "card-base"} relative h-full p-6 pl-8`}
            >
              <div
                className="absolute inset-y-0 left-0 w-[4px]"
                style={{ background: t.accent }}
              />
              <div className="flex items-center justify-between">
                <div
                  className="text-[10px] font-bold"
                  style={{ color: t.accent, letterSpacing: "0.3em" }}
                >
                  {t.label}
                </div>
                {t.hero && (
                  <span
                    className="text-[8px] font-bold"
                    style={{
                      background: "var(--electric)",
                      color: "var(--ink)",
                      padding: "3px 8px",
                      letterSpacing: "0.22em",
                    }}
                  >
                    MOST POPULAR
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <div
                  className={`font-display font-bold leading-none text-white ${
                    t.hero ? "stat-glow" : ""
                  }`}
                  style={{ fontSize: "clamp(44px, 5vw, 64px)" }}
                >
                  {t.price}
                </div>
                <div
                  className="text-[10px] font-bold"
                  style={{ color: t.accent, letterSpacing: "0.22em" }}
                >
                  {t.per}
                </div>
              </div>
              <p
                className="mt-3 text-[12.5px] leading-relaxed"
                style={{ color: "var(--pearl)" }}
              >
                {t.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Wholesale callout (compact, since retail ladder is the hero) */}
      <Reveal delay={3}>
        <div className="mt-4 flex items-center gap-4 px-4 py-3" style={{
          borderLeft: "3px solid var(--violet)",
          background: "rgba(26, 15, 46, 0.5)",
        }}>
          <span
            className="text-[10px] font-bold"
            style={{ color: "var(--lilac)", letterSpacing: "0.3em" }}
          >
            + WHOLESALE
          </span>
          <span className="font-display text-[22px] font-bold text-white">
            $5.99
          </span>
          <span className="text-[12px] italic" style={{ color: "var(--dim)" }}>
            / jar — the number that gets us onto NAPA and GM dealership shelves.
          </span>
        </div>
      </Reveal>

      {/* Materials breakdown — full width, horizontal */}
      <Reveal delay={3}>
        <div className="card-base relative mt-6 p-8 pl-10">
          <div
            className="absolute inset-y-0 left-0 w-[4px]"
            style={{ background: "var(--lilac)" }}
          />
          <div className="flex items-baseline justify-between">
            <div
              className="text-[10px] font-bold"
              style={{ color: "var(--lilac)", letterSpacing: "0.3em" }}
            >
              MATERIALS &raquo; REVENUE
            </div>
            <div className="text-[11px] italic" style={{ color: "var(--faint)" }}>
              Per $100 of bulk materials ordered
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 items-center gap-8 md:grid-cols-[auto_1fr]">
            {/* Left: $100 → $720 visual */}
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-6">
              <div>
                <div
                  className="font-display font-bold leading-none text-white"
                  style={{ fontSize: "clamp(38px, 3.6vw, 54px)" }}
                >
                  $100
                </div>
                <div
                  className="mt-1 text-[10px] font-bold"
                  style={{ color: "var(--dim)", letterSpacing: "0.2em" }}
                >
                  MATERIALS IN
                </div>
              </div>
              <div
                className="font-display text-[26px]"
                style={{ color: "var(--electric)" }}
              >
                &rarr;
              </div>
              <div>
                <div
                  className="font-display font-bold leading-none stat-glow"
                  style={{
                    fontSize: "clamp(38px, 3.6vw, 54px)",
                    color: "var(--electric)",
                  }}
                >
                  $720
                </div>
                <div
                  className="mt-1 text-[10px] font-bold"
                  style={{ color: "var(--electric)", letterSpacing: "0.2em" }}
                >
                  REVENUE OUT
                </div>
              </div>
            </div>

            {/* Right: breakdown list */}
            <div>
              <div
                className="text-[10px] font-bold"
                style={{ color: "var(--dim)", letterSpacing: "0.22em" }}
              >
                $100 BREAKS DOWN TO
              </div>
              <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                {[
                  { k: "Glass jars + lids", v: "$42" },
                  { k: "Gel base (shaving cream + binder)", v: "$32" },
                  { k: "Scent compounds", v: "$15" },
                  { k: "Labels + adhesive", v: "$11" },
                ].map((r) => (
                  <li
                    key={r.k}
                    className="flex items-baseline justify-between border-t text-[12px]"
                    style={{ borderColor: "var(--hair)", paddingTop: 6 }}
                  >
                    <span style={{ color: "var(--pearl)" }}>{r.k}</span>
                    <span className="font-bold text-white">{r.v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p
            className="mt-5 text-[11.5px] italic"
            style={{ color: "var(--faint)" }}
          >
            ~51 jars produced per $100 of materials at $1.94 unit cost, sold at retail.
          </p>
        </div>
      </Reveal>

      {/* Revenue: NOW + NEXT 90 DAYS — combined card */}
      <Reveal delay={4}>
        <div className="card-base relative mt-6 p-8 pl-10">
          <div
            className="absolute inset-y-0 left-0 w-[4px]"
            style={{ background: "var(--electric)" }}
          />
          <div className="flex items-baseline justify-between">
            <div
              className="text-[10px] font-bold"
              style={{ color: "var(--lilac)", letterSpacing: "0.3em" }}
            >
              REVENUE · NOW + NEXT 90 DAYS
            </div>
            <div className="text-[10px] italic" style={{ color: "var(--faint)" }}>
              Actuals through April 2026 · projections through July 2026
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* CURRENT — Revenue by Category */}
            <div className="flex flex-col">
              <div
                className="text-[10px] font-bold"
                style={{ color: "var(--electric)", letterSpacing: "0.28em" }}
              >
                CURRENT &middot; END FEB &rarr; APRIL
              </div>

              <div className="mt-6 flex flex-1 flex-col justify-center gap-5">
                {channels.map((c) => (
                  <div
                    key={c.name}
                    className="grid grid-cols-[1fr_64px] items-center gap-3"
                  >
                    <div>
                      <div className="text-[12.5px] font-bold text-white">
                        {c.name}
                      </div>
                      <div
                        className="relative mt-2 h-2 w-full overflow-hidden"
                        style={{ background: "var(--night)" }}
                      >
                        <div
                          className="bar-fill absolute inset-y-0 left-0"
                          style={{
                            width: `${(c.value / max) * 100}%`,
                            background: c.color,
                            boxShadow: `0 0 18px ${c.color}`,
                          }}
                        />
                      </div>
                      <div
                        className="mt-1 text-[10px]"
                        style={{ color: "var(--dim)", letterSpacing: "0.14em" }}
                      >
                        {Math.round((c.value / total) * 100)}% OF REVENUE
                      </div>
                    </div>
                    <div className="text-right text-[13px] font-bold text-white">
                      ${c.value.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="my-5 h-px w-full"
                style={{ background: "var(--hair)" }}
              />
              <div className="flex items-baseline justify-between">
                <span
                  className="text-[10px] font-bold"
                  style={{ color: "var(--electric)", letterSpacing: "0.3em" }}
                >
                  TOTAL TO DATE
                </span>
                <span className="font-display text-[24px] font-bold text-white">
                  ${total.toLocaleString()}
                </span>
              </div>
            </div>

            {/* PROJECTED — 90-day */}
            <div className="flex flex-col">
              <div
                className="text-[10px] font-bold"
                style={{ color: "var(--violet)", letterSpacing: "0.28em" }}
              >
                PROJECTED &middot; NEXT 90 DAYS
              </div>

              <div className="mt-6 flex flex-1 flex-col gap-4">
                {[
                  {
                    label: "WHOLESALE",
                    revenue: "$14,700",
                    profit: "$8,379",
                    accent: "var(--electric)",
                    hero: false,
                  },
                  {
                    label: "RETAIL",
                    revenue: "$6,300",
                    profit: "$4,914",
                    accent: "var(--violet)",
                    hero: false,
                  },
                  {
                    label: "BLENDED · 90 DAY",
                    revenue: "$21,000",
                    profit: "$13,293",
                    accent: "var(--lilac)",
                    hero: true,
                  },
                ].map((p) => (
                  <div
                    key={p.label}
                    className="relative grid grid-cols-[1fr_auto_auto] items-baseline gap-4 pl-4"
                    style={{ borderLeft: `3px solid ${p.accent}` }}
                  >
                    <div
                      className="text-[10px] font-bold"
                      style={{ color: p.accent, letterSpacing: "0.3em" }}
                    >
                      {p.label}
                    </div>
                    <div
                      className={`font-display font-bold leading-none text-white ${
                        p.hero ? "stat-glow" : ""
                      }`}
                      style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}
                    >
                      {p.revenue}
                    </div>
                    <div
                      className="font-display font-bold leading-none"
                      style={{ fontSize: "clamp(14px, 1.4vw, 18px)", color: p.accent }}
                    >
                      / {p.profit} profit
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="my-5 h-px w-full"
                style={{ background: "var(--hair)" }}
              />
              <div className="text-[11px] italic" style={{ color: "var(--faint)" }}>
                Based on current pipeline + secured B2B (Summit GM) and pending B2B (NAPA).
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Finance philosophy — pricing posture + client mindset */}
      <Reveal delay={6}>
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="card-base relative p-6 pl-8">
            <div
              className="absolute inset-y-0 left-0 w-[3px]"
              style={{ background: "var(--electric)" }}
            />
            <div
              className="text-[10px] font-bold"
              style={{ color: "var(--electric)", letterSpacing: "0.3em" }}
            >
              MARKET RANGE
            </div>
            <div
              className="mt-3 font-display font-bold leading-none text-white"
              style={{ fontSize: "clamp(28px, 3vw, 40px)" }}
            >
              $10 – $16
            </div>
            <p
              className="mt-3 text-[12px] leading-relaxed"
              style={{ color: "var(--pearl)" }}
            >
              Comparable car-cleaning products. We landed at{" "}
              <span className="text-white font-bold">$13.99</span> — aggressive enough to win the wallet, premium enough to signal quality.
            </p>
          </div>

          <div className="card-hero relative p-6 pl-8">
            <div
              className="absolute inset-y-0 left-0 w-[3px]"
              style={{ background: "var(--violet)" }}
            />
            <div
              className="text-[10px] font-bold"
              style={{ color: "var(--lilac)", letterSpacing: "0.3em" }}
            >
              MARGIN POSTURE
            </div>
            <div
              className="mt-3 font-display font-bold leading-none stat-glow"
              style={{ fontSize: "clamp(36px, 4vw, 56px)", color: "var(--electric)" }}
            >
              78%
            </div>
            <p
              className="mt-3 text-[12px] leading-relaxed"
              style={{ color: "var(--pearl)" }}
            >
              Profit margin on a SlimeSwipe jar — built for{" "}
              <span className="text-white font-bold">scalable, profitable growth</span> from the first unit.
            </p>
          </div>

          <div className="card-base relative p-6 pl-8">
            <div
              className="absolute inset-y-0 left-0 w-[3px]"
              style={{ background: "var(--lilac)" }}
            />
            <div
              className="text-[10px] font-bold"
              style={{ color: "var(--lilac)", letterSpacing: "0.3em" }}
            >
              THE MINDSET
            </div>
            <div className="mt-3 font-display text-[22px] font-bold leading-tight text-white">
              Not a customer. <span style={{ color: "var(--electric)" }}>A client.</span>
            </div>
            <p
              className="mt-3 text-[12px] leading-relaxed"
              style={{ color: "var(--pearl)" }}
            >
              Every purchase is a subscription to us — we&apos;re{" "}
              <span className="text-white font-bold">repeat-business oriented</span>, not transactional.
            </p>
          </div>
        </div>
      </Reveal>

      <SlideFooter num={9} total={18} next="#resilience" />
    </Slide>
  );
}

