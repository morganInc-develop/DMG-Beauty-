"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

/* ─────────────────────────────────────────────
   SHARED HELPERS
───────────────────────────────────────────── */

const ease = [0.23, 1, 0.32, 1] as const;

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ScaleIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.93 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   1. HERO
───────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-foudre-paper px-6 pb-20 pt-32 desk:px-12 desk:pb-28 desk:pt-40">
      {/* Ghost wordmark */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 select-none overflow-hidden text-center"
        aria-hidden
      >
        <span
          className="font-display font-black text-foudre-green"
          style={{
            display: "block",
            fontSize: "clamp(10rem, 40vw, 68rem)",
            lineHeight: 0.88,
            letterSpacing: "-0.04em",
            opacity: 0.04,
          }}
        >
          DMG
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[96rem] text-center">
        <motion.span
          className="chip-bubble mb-8 inline-flex"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          About DMG Beauty
        </motion.span>

        <motion.h1
          className="tx-xl text-foudre-green"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.1 }}
        >
          What makes us different.
        </motion.h1>

        <motion.p
          className="tx-pxl mx-auto mt-8 max-w-[64rem] text-foudre-green/65"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.25 }}
        >
          DMG Beauty was built on a single idea — the pieces that protect you
          should still feel like a part of the outfit. We design for protection,
          polish, and presence all at once.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.4 }}
        >
          <Link href="/shop" className="pill-cta">
            Shop the edit
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-[var(--radius-lg)] border border-foudre-green/25 px-6 py-4 text-[1.3rem] font-bold text-foudre-green transition-colors hover:border-foudre-pink hover:text-foudre-pink"
          >
            Our story →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   2. BRAND EDITORIAL IMAGE
───────────────────────────────────────────── */

function EditorialImage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-foudre-paper px-6 pb-4 desk:px-12"
    >
      <ScaleIn className="mx-auto max-w-[108rem] overflow-hidden rounded-[3.6rem] shadow-[0_3rem_9rem_rgba(61,43,0,0.14)]">
        <div className="relative aspect-[16/10] overflow-hidden desk:aspect-[16/8]">
          <motion.div className="absolute inset-[-8%]" style={{ y }}>
            <Image
              src="/images/shop/rose-satin-3.jpg"
              alt="DMG Beauty editorial campaign"
              fill
              sizes="(min-width: 961px) 1200px, 100vw"
              className="object-cover object-center"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(61,43,0,0.54)] via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between gap-4">
            <p
              className="max-w-[52rem] text-foudre-paper"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 5vw, 6rem)",
                lineHeight: 0.9,
                letterSpacing: "0.02em",
              }}
            >
              Protective pieces with editorial energy.
            </p>
            <div className="shrink-0 hidden desk:flex items-center gap-2 rounded-full border border-foudre-paper/24 bg-foudre-paper/12 px-5 py-3 backdrop-blur-sm">
              <span className="text-[1.1rem] font-semibold uppercase tracking-[0.2em] text-foudre-paper/82">
                Est. 2019
              </span>
            </div>
          </div>
        </div>
      </ScaleIn>
    </section>
  );
}

/* ─────────────────────────────────────────────
   3. OUR STORY
───────────────────────────────────────────── */

function OurStorySection() {
  return (
    <section className="overflow-hidden bg-foudre-paper px-6 py-24 desk:px-12 desk:py-32">
      <div className="mx-auto max-w-[148rem]">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 md:items-center desk:gap-16">
          {/* Image */}
          <ScaleIn>
            <div className="relative overflow-hidden rounded-[3rem] shadow-[0_2rem_6rem_rgba(61,43,0,0.12)]">
              <div className="relative aspect-[4/3] md:aspect-[3/4]">
                <Image
                  src="/images/hero-left.jpg"
                  alt="DMG Beauty brand story"
                  fill
                  sizes="(min-width: 961px) 640px, 92vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/32 to-transparent" />
              </div>
              {/* Accent badge */}
              <div className="absolute bottom-5 left-5">
                <span className="rounded-full bg-foudre-green/72 px-4 py-2 text-[1.1rem] font-semibold uppercase tracking-[0.18em] text-foudre-paper backdrop-blur-sm">
                  Our roots
                </span>
              </div>
            </div>
          </ScaleIn>

          {/* Copy */}
          <div>
            <FadeUp>
              <span className="text-[1.1rem] font-semibold uppercase tracking-[0.28em] text-foudre-pink">
                Our Story
              </span>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="tx-md mt-4 text-foudre-green">
                How It All Began.
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="tx-p mt-6 max-w-[58rem] text-foudre-green/68">
                DMG Beauty grew from the gap between care and style. We wanted
                satin, softness, and function — but we also wanted shape, color,
                mood, and the confidence that comes from a piece actually
                feeling finished. That tension became the brand.
              </p>
              <p className="tx-p mt-4 max-w-[58rem] text-foudre-green/68">
                Since 2019 we&apos;ve been designing protective accessories and
                lifestyle pieces that sit comfortably in both a beauty routine
                and a wardrobe. The result is a tighter edit built around real
                wear, not trend chasing.
              </p>
            </FadeUp>

            <FadeUp delay={0.22}>
              <div className="mt-8 grid gap-3">
                {[
                  "Protection designed to still look styled.",
                  "Textures, silhouettes, and tones that feel intentional.",
                  "A tighter edit instead of trend-chasing noise.",
                  "Community-led details shaped by real wear.",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-[2rem] border border-foudre-green/14 bg-foudre-cream px-4 py-4"
                  >
                    <span className="mt-[0.3rem] inline-flex h-[2rem] w-[2rem] shrink-0 items-center justify-center rounded-full bg-foudre-pink text-[1.1rem] font-bold text-foudre-paper">
                      ✓
                    </span>
                    <p className="tx-p text-foudre-green/78">{point}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   4. STATS / WHO WE SERVE
───────────────────────────────────────────── */

const stats = [
  { value: "2019", label: "Brand roots" },
  { value: "4", label: "Core style pillars" },
  { value: "100%", label: "Hair-first thinking" },
  { value: "3+", label: "Product categories" },
];

function StatsSection() {
  return (
    <section className="overflow-hidden bg-foudre-green px-6 py-20 desk:px-12 desk:py-28">
      <div className="mx-auto max-w-[148rem]">
        <FadeUp className="text-center">
          <span className="text-[1.1rem] font-semibold uppercase tracking-[0.28em] text-foudre-pink-soft">
            Who We Serve
          </span>
          <h2 className="tx-md mt-4 text-foudre-paper">Built for real life.</h2>
          <p className="tx-p mx-auto mt-5 max-w-[62rem] text-foudre-paper/65">
            We design for people who refuse to choose between caring for their
            hair and showing up styled. Every piece carries both.
          </p>
        </FadeUp>

        <div className="mt-14 grid grid-cols-2 gap-4 desk:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeUp key={stat.label} delay={i * 0.08}>
              <div className="rounded-[2.6rem] border border-foudre-paper/14 bg-foudre-paper/8 px-6 py-8 text-center backdrop-blur-sm">
                <p
                  className="text-foudre-paper"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(4rem, 6vw, 7rem)",
                    lineHeight: 1,
                    letterSpacing: "0.02em",
                  }}
                >
                  {stat.value}
                </p>
                <p className="mt-3 text-[1.15rem] font-semibold uppercase tracking-[0.2em] text-foudre-paper/52">
                  {stat.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   5. BUILT ON PURPOSE — VALUES
───────────────────────────────────────────── */

const values = [
  {
    icon: "✦",
    title: "Great Experiences",
    desc: "Every interaction, from the first look at a product to the moment it arrives, should feel considered and complete.",
  },
  {
    icon: "◈",
    title: "Communicate Openly",
    desc: "We keep you informed at every step — shipping, restocks, new arrivals. No guesswork, no fine print surprises.",
  },
  {
    icon: "◉",
    title: "Stand Out",
    desc: "We don't chase what's already trending. We build pieces with a point of view strong enough to set the direction.",
  },
  {
    icon: "⬡",
    title: "Choose Action",
    desc: "Ideas are worth nothing without execution. We move with intention and ship work we're proud to put our name on.",
  },
];

function ValuesSection() {
  return (
    <section className="overflow-hidden bg-foudre-cream px-6 py-24 desk:px-12 desk:py-32">
      <div className="mx-auto max-w-[148rem]">
        <FadeUp className="mx-auto max-w-[78rem] text-center">
          <span className="text-[1.1rem] font-semibold uppercase tracking-[0.28em] text-foudre-pink">
            Our Values
          </span>
          <h2 className="tx-md mt-4 text-foudre-green">Built on Purpose.</h2>
          <p className="tx-p mt-5 text-foudre-green/65">
            Four principles that shape every product, decision, and interaction
            at DMG Beauty.
          </p>
        </FadeUp>

        <div className="mt-12 grid gap-5 md:grid-cols-2 desk:grid-cols-4 desk:gap-6">
          {values.map((val, i) => (
            <FadeUp key={val.title} delay={i * 0.1}>
              <article className="flex h-full flex-col rounded-[3rem] bg-foudre-paper p-8 shadow-[0_1.6rem_4rem_rgba(61,43,0,0.08)]">
                <span className="mb-5 inline-block text-[3.2rem] leading-none text-foudre-pink">
                  {val.icon}
                </span>
                <h3 className="font-display text-[2.4rem] leading-[0.92] text-foudre-green">
                  {val.title}
                </h3>
                <p className="tx-p mt-4 flex-1 text-foudre-green/64">
                  {val.desc}
                </p>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   6. PHILOSOPHY / TEAM CARDS
───────────────────────────────────────────── */

const pillars = [
  {
    name: "Texture-first thinking",
    role: "Material direction",
    image: "/images/shop/rose-satin-2.jpg",
  },
  {
    name: "Protective by design",
    role: "Function with finish",
    image: "/images/shop/cream-ribbed-2.jpg",
  },
  {
    name: "Built for more people",
    role: "Inclusive sizing and wear",
    image: "/images/shop/black-joggers-2.jpg",
  },
  {
    name: "Community in the frame",
    role: "Real-life styling cues",
    image: "/images/shop/gold-hoops-2.jpg",
  },
];

function PhilosophySection() {
  return (
    <section className="overflow-hidden bg-foudre-paper px-6 py-24 desk:px-12 desk:py-32">
      <div className="mx-auto max-w-[148rem]">
        <FadeUp className="max-w-[76rem]">
          <span className="text-[1.1rem] font-semibold uppercase tracking-[0.28em] text-foudre-pink">
            Our Design Philosophy
          </span>
          <h2 className="tx-md mt-4 text-foudre-green">
            We build the frame — real wear gives the brand its shape.
          </h2>
          <p className="tx-p mt-5 max-w-[64rem] text-foudre-green/65">
            DMG Beauty stays grounded in how people actually live in these
            pieces. The styling choices, product notes, and visual language all
            come back to people wearing them in motion, not just in a studio
            freeze.
          </p>
        </FadeUp>

        <div className="mt-12 grid gap-5 md:grid-cols-2 desk:grid-cols-4">
          {pillars.map((card, i) => (
            <FadeUp key={card.name} delay={i * 0.08}>
              <motion.article
                className="overflow-hidden rounded-[2.8rem] bg-white p-3 shadow-[0_2rem_5rem_rgba(61,43,0,0.1)]"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2.2rem]">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    sizes="(min-width: 1280px) 320px, (min-width: 768px) 46vw, 92vw"
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="px-2 pb-2 pt-4 text-foudre-green">
                  <h3 className="font-display text-[2.4rem] leading-[0.92]">
                    {card.name}
                  </h3>
                  <p className="mt-2 text-[1.2rem] font-semibold uppercase tracking-[0.18em] text-foudre-green/48">
                    {card.role}
                  </p>
                </div>
              </motion.article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   7. JOIN THE JOURNEY — CTA
───────────────────────────────────────────── */

function JoinSection() {
  return (
    <section className="overflow-hidden bg-foudre-pink-soft px-6 py-24 desk:px-12 desk:py-32">
      <div className="mx-auto max-w-[148rem]">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 md:items-center desk:gap-16">
          {/* Copy */}
          <div>
            <FadeUp>
              <span className="text-[1.1rem] font-semibold uppercase tracking-[0.28em] text-foudre-green/55">
                Growing together
              </span>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2
                className="mt-4 text-foudre-green"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(4rem, 7vw, 9rem)",
                  lineHeight: 0.9,
                  letterSpacing: "0.02em",
                }}
              >
                Our brand is growing. Come join us on the journey.
              </h2>
            </FadeUp>
            <FadeUp delay={0.18}>
              <p className="tx-p mt-6 max-w-[54rem] text-foudre-green/68">
                We release small, intentional collections — and when something
                drops, you want to know about it first. Sign up and we&apos;ll
                keep you in the loop on every new arrival, restock, and limited
                release.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/shop" className="pill-cta">
                  Enter the shop
                </Link>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-[var(--radius-lg)] border border-foudre-green/25 px-6 py-4 text-[1.3rem] font-bold text-foudre-green transition-colors hover:border-foudre-pink hover:text-foudre-pink"
                >
                  Join the waitlist
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Image */}
          <ScaleIn delay={0.1}>
            <div className="relative overflow-hidden rounded-[3rem] shadow-[0_2rem_6rem_rgba(61,43,0,0.14)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/exp-community.jpg"
                  alt="DMG Beauty community"
                  fill
                  sizes="(min-width: 961px) 640px, 92vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-foudre-pink/22 to-transparent" />
              </div>
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ROOT EXPORT
───────────────────────────────────────────── */

export default function HomeAbout() {
  return (
    <>
      <HeroSection />
      <EditorialImage />
      <OurStorySection />
      <StatsSection />
      <ValuesSection />
      <PhilosophySection />
      <JoinSection />
    </>
  );
}
