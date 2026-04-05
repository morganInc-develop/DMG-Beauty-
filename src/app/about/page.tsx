"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import HomeFooter from "@/components/home/HomeFooter";
import FloatingControls from "@/components/persistent/FloatingControls";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

const heroStats = [
  { value: "2019", label: "Brand roots" },
  { value: "4", label: "Core style pillars" },
  { value: "100%", label: "Hair-first thinking" },
];

const historyPoints = [
  "Protection designed to still look styled.",
  "Textures, silhouettes, and tones that feel intentional.",
  "A tighter edit instead of trend-chasing noise.",
  "Community-led details shaped by real wear.",
];

const processSteps = [
  {
    step: "01",
    title: "Observe real routines",
    copy: "We begin with the lived reality: what gets worn daily, what slips, what holds, and what still needs to feel elevated.",
    image: "/images/exp-community.jpg",
    badge: "Community insight",
    buttonLabel: "Our approach",
    footerText: "Real wear, real data",
  },
  {
    step: "02",
    title: "Build the frame",
    copy: "Silhouette, lining, finish, and fit get refined together so the product reads polished before it ever reads practical.",
    image: "/images/exp-strategie.jpg",
    badge: "Craft & material",
    buttonLabel: "The process",
    footerText: "Built with intention",
  },
  {
    step: "03",
    title: "Style it into the world",
    copy: "Every drop is treated like a visual story, with product, imagery, and tone carrying the same point of view.",
    image: "/images/exp-contenu.jpg",
    badge: "Editorial ready",
    buttonLabel: "View lookbook",
    footerText: "Every detail matters",
  },
];

const valueCards = [
  {
    title: "Our mission",
    copy: "Create pieces that protect, flatter, and finish the look at once. Utility matters, but it should never come at the cost of style.",
    bullets: [
      "Hair care that stays present in the styling.",
      "Comfort built into the structure, not added after.",
      "Small collections with a stronger point of view.",
    ],
    image: "/images/products/huile-rose.jpg",
    accent: "var(--color-foudre-pink-soft)",
    badge: "Brand purpose",
    buttonLabel: "Shop the edit",
    footerText: "Protection meets style",
  },
  {
    title: "Our vision",
    copy: "Grow DMG Beauty into a modern essentials label where beauty accessories and fashion pieces live in the same visual language.",
    bullets: [
      "A wardrobe-minded approach to beauty accessories.",
      "Pieces that feel collectible without feeling precious.",
      "A brand world that moves from bold to soft with control.",
    ],
    image: "/images/products/serum-eclat.jpg",
    accent: "var(--color-foudre-cream)",
    badge: "Looking ahead",
    buttonLabel: "Explore the edit",
    footerText: "Beauty as lifestyle",
  },
];

const teamCards = [
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

const backgroundStops = ["#241304", "#6a3c0a", "#cb5e8d", "#efd6d5", "#fff8f6"];

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const page = pageRef.current;
      if (!page) return;

      gsap.set(page, { backgroundColor: backgroundStops[0] });

      const sections = gsap.utils.toArray<HTMLElement>("[data-about-section]");
      sections.forEach((section, index) => {
        const bg =
          section.dataset.bg ??
          backgroundStops[index] ??
          backgroundStops.at(-1);
        ScrollTrigger.create({
          trigger: section,
          start: "top 62%",
          end: "bottom 38%",
          onEnter: () =>
            gsap.to(page, {
              backgroundColor: bg,
              duration: 0.9,
              ease: "power2.out",
            }),
          onEnterBack: () =>
            gsap.to(page, {
              backgroundColor: bg,
              duration: 0.9,
              ease: "power2.out",
            }),
        });
      });

      gsap.from("[data-hero-copy]", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from("[data-hero-img]", {
        y: 50,
        opacity: 0,
        scale: 0.95,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.1,
      });

      gsap.utils.toArray<HTMLElement>(".about-reveal").forEach((el, i) => {
        gsap.from(el, {
          y: 48,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
          delay: i % 3 === 0 ? 0 : 0.06,
        });
      });

      gsap.utils.toArray<HTMLElement>(".about-frame").forEach((frame, i) => {
        gsap.from(frame, {
          y: 64,
          opacity: 0,
          scale: 0.93,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: frame, start: "top 84%", once: true },
          delay: i * 0.05,
        });
        gsap.to(frame, {
          yPercent: i % 2 === 0 ? -4 : 4,
          ease: "none",
          scrollTrigger: {
            trigger: frame,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: pageRef },
  );

  return (
    <div
      ref={pageRef}
      className="min-h-screen overflow-hidden text-foudre-paper"
    >
      <FloatingControls />

      <main className="relative">
        {/* ── HERO ── */}
        <section
          data-about-section
          data-bg={backgroundStops[0]}
          className="relative overflow-hidden pb-16 pt-[11.2rem] desk:pb-24 desk:pt-[8rem]"
        >
          {/* Ghost wordmark */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 select-none overflow-hidden text-center"
            aria-hidden
          >
            <span
              className="font-display font-black text-white/[0.038]"
              style={{
                display: "block",
                fontSize: "clamp(9rem, 42vw, 72rem)",
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
              }}
            >
              DMG
            </span>
          </div>

          <div className="grid-24 relative z-10 gap-y-10">
            {/* Copy */}
            <div
              data-hero-copy
              className="col-span-24 self-center desk:col-span-12"
            >
              <span className="chip-bubble border border-foudre-paper/22 bg-foudre-paper/10 text-foudre-paper backdrop-blur-sm">
                About DMG Beauty
              </span>
              <h1 className="tx-xl mt-6 text-foudre-paper">
                A softer finish,
                <br />
                a sharper point
                <br />
                of view.
              </h1>
              <p className="tx-pxl mt-6 max-w-[50rem] text-foudre-paper/72">
                DMG Beauty was built around a simple idea: the pieces that care
                for you should still look like part of the outfit. We design for
                protection, polish, and presence at the same time.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="about-reveal rounded-[2.6rem] border border-white/18 bg-white/10 px-6 py-5 backdrop-blur-sm"
                  >
                    <p className="font-display text-[3.6rem] leading-none text-foudre-paper">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-[1.2rem] font-semibold uppercase tracking-[0.18em] text-foudre-paper/60">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero image — explicit height on desktop, landscape on mobile */}
            <div
              data-hero-img
              className="col-span-24 desk:col-span-10 desk:col-start-14 desk:self-center"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2.8rem] shadow-[0_3rem_8rem_rgba(0,0,0,0.3)] desk:aspect-auto desk:h-[52rem]">
                <Image
                  src="/images/hero-center.jpg"
                  alt="DMG Beauty editorial"
                  fill
                  sizes="(min-width: 961px) 520px, 92vw"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/44 via-black/8 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <div className="rounded-full border border-foudre-paper/24 bg-foudre-paper/12 px-4 py-2.5 backdrop-blur-sm">
                    <p className="text-[1rem] font-semibold uppercase tracking-[0.22em] text-foudre-paper/82">
                      Est. 2019
                    </p>
                  </div>
                </div>
                <div className="absolute right-5 top-5">
                  <div className="rounded-full border border-foudre-paper/24 bg-foudre-paper/12 px-4 py-2.5 backdrop-blur-sm">
                    <p
                      className="text-[1rem] text-foudre-paper/78"
                      style={{ fontFamily: "var(--font-cursive)" }}
                    >
                      Hair-first design
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── HISTORY ── */}
        <section
          data-about-section
          data-bg={backgroundStops[1]}
          className="px-4 py-8 desk:px-10 desk:py-14"
        >
          <div className="mx-auto grid max-w-[148rem] gap-8 rounded-[4rem] bg-white/10 px-5 py-5 backdrop-blur-sm desk:grid-cols-2 desk:gap-10 desk:px-8 desk:py-8">
            {/* Image */}
            <div className="about-frame relative overflow-hidden rounded-[3rem]">
              <div className="relative aspect-[4/3] desk:aspect-[3/4]">
                <Image
                  src="/images/hero-left.jpg"
                  alt="DMG Beauty brand story"
                  fill
                  sizes="(min-width: 961px) 640px, 92vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/28 to-transparent" />
              </div>
              {/* Accent product image */}
              <div className="absolute bottom-4 right-4 w-[30%] overflow-hidden rounded-[1.6rem] border-2 border-white/24 shadow-[0_1.6rem_4rem_rgba(0,0,0,0.3)]">
                <div className="relative aspect-square">
                  <Image
                    src="/images/products/baume-levres.jpg"
                    alt="DMG Beauty product"
                    fill
                    sizes="160px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="about-reveal self-center">
              <span className="text-[1.1rem] font-semibold uppercase tracking-[0.28em] text-foudre-pink-soft">
                Our history
              </span>
              <h2 className="tx-md mt-4 text-foudre-paper">
                We started with the pieces most brands treat like an
                afterthought.
              </h2>
              <p className="tx-p mt-5 max-w-[58rem] text-foudre-paper/72">
                DMG Beauty grew from the gap between care and style. We wanted
                satin, softness, and function, but we also wanted shape, color,
                mood, and the confidence that comes from a piece actually
                feeling finished. That tension became the brand.
              </p>

              <div className="mt-8 grid gap-3">
                {historyPoints.map((point) => (
                  <div
                    key={point}
                    className="about-reveal flex items-start gap-3 rounded-[2rem] border border-white/18 bg-white/10 px-4 py-4"
                  >
                    <span className="mt-[0.3rem] inline-flex h-[2rem] w-[2rem] shrink-0 items-center justify-center rounded-full bg-foudre-pink text-[1.1rem] font-bold text-foudre-paper">
                      ✓
                    </span>
                    <p className="tx-p text-foudre-paper/78">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section
          data-about-section
          data-bg={backgroundStops[2]}
          className="px-4 py-10 desk:px-10 desk:py-16"
        >
          <div className="mx-auto max-w-[148rem]">
            <div className="about-reveal mx-auto max-w-[78rem] text-center">
              <span className="text-[1.1rem] font-semibold uppercase tracking-[0.28em] text-foudre-paper/62">
                How We Move
              </span>
              <h2 className="tx-md mt-4 text-foudre-paper">
                The process is intimate, not industrial.
              </h2>
              <p className="tx-p mt-4 text-foudre-paper/76">
                We refine each piece through feel, fit, and visual balance, then
                shape the surrounding imagery so the product enters a complete
                world instead of arriving alone.
              </p>
            </div>

            <div className="about-frame relative mx-auto mt-8 max-w-[110rem] overflow-hidden rounded-[4rem] border border-foudre-paper/18 bg-foudre-paper/10 p-3">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[3.2rem] desk:aspect-[16/8]">
                <Image
                  src="/images/shop/rose-satin-3.jpg"
                  alt="DMG Beauty campaign image"
                  fill
                  sizes="(min-width: 961px) 1200px, 92vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(61,43,0,0.04),rgba(61,43,0,0.42))]" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                  <p className="max-w-[46rem] font-display text-[3rem] leading-[0.92] text-foudre-paper desk:text-[4.4rem]">
                    Texture. Ease. Protection. Finish.
                  </p>
                  <div className="inline-flex h-[7rem] w-[7rem] shrink-0 items-center justify-center rounded-full bg-foudre-paper text-foudre-pink shadow-[0_2rem_4rem_rgba(61,43,0,0.22)]">
                    <PlayIcon />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 desk:grid-cols-3">
              {processSteps.map((item) => (
                <article
                  key={item.step}
                  className="about-reveal overflow-hidden rounded-[3rem] bg-foudre-paper text-foudre-green shadow-[0_2rem_5rem_rgba(61,43,0,0.12)]"
                >
                  {/* Image zone */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-foudre-cream">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 961px) 420px, 92vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/18 to-transparent" />
                    {/* Badge — top right */}
                    <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-foudre-green px-3.5 py-2 shadow-[0_0.8rem_2rem_rgba(0,0,0,0.22)]">
                      <StepClockIcon />
                      <span className="text-[1.05rem] font-semibold tracking-[0.06em] text-foudre-paper">
                        Step {item.step}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-6 pb-5 pt-6">
                    <h3 className="font-display text-[2.8rem] leading-[0.92]">
                      {item.title}
                    </h3>
                    <p className="tx-p mt-3 text-foudre-green/68">
                      {item.copy}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between border-t border-foudre-green/10 px-6 py-4">
                    <Link
                      href="/shop"
                      className="rounded-[1.4rem] border border-foudre-green/30 px-5 py-2.5 text-[1.25rem] font-semibold text-foudre-green transition-colors hover:border-foudre-pink hover:text-foudre-pink"
                    >
                      {item.buttonLabel}
                    </Link>
                    <div className="flex items-center gap-2 text-foudre-green/52">
                      <StepTagIcon />
                      <span className="tx-p">{item.footerText}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── MISSION & VISION ── */}
        <section
          data-about-section
          data-bg={backgroundStops[3]}
          className="px-4 py-10 desk:px-10 desk:py-16"
        >
          <div className="mx-auto max-w-[148rem]">
            <div className="grid gap-5 desk:grid-cols-2">
              {valueCards.map((card) => (
                <article
                  key={card.title}
                  className="about-reveal overflow-hidden rounded-[3rem] bg-foudre-paper text-foudre-green shadow-[0_2rem_5rem_rgba(61,43,0,0.1)]"
                >
                  {/* Image zone */}
                  <div
                    className="relative aspect-[16/10] overflow-hidden"
                    style={{ backgroundColor: card.accent }}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(min-width: 961px) 720px, 92vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/14 to-transparent" />
                    {/* Badge — top right */}
                    <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-foudre-green px-3.5 py-2 shadow-[0_0.8rem_2rem_rgba(0,0,0,0.22)]">
                      <ValueBadgeIcon />
                      <span className="text-[1.05rem] font-semibold tracking-[0.06em] text-foudre-paper">
                        {card.badge}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-6 pb-1 pt-6">
                    <span className="text-[1.1rem] font-semibold uppercase tracking-[0.28em] text-foudre-pink">
                      {card.title}
                    </span>
                    <p className="tx-p mt-3 text-foudre-green/68">
                      {card.copy}
                    </p>

                    <div className="mt-5 border-t border-foudre-green/12 pt-4">
                      {card.bullets.map((bullet, i) => (
                        <div
                          key={bullet}
                          className={`flex items-start gap-4 py-3 ${
                            i < card.bullets.length - 1
                              ? "border-b border-foudre-green/10"
                              : ""
                          }`}
                        >
                          <span className="mt-[0.15rem] shrink-0 text-[1.6rem] font-bold leading-none text-foudre-pink">
                            —
                          </span>
                          <p className="tx-p text-foudre-green/76">{bullet}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between border-t border-foudre-green/10 px-6 py-4">
                    <Link
                      href="/shop"
                      className="rounded-[1.4rem] border border-foudre-green/30 px-5 py-2.5 text-[1.25rem] font-semibold text-foudre-green transition-colors hover:border-foudre-pink hover:text-foudre-pink"
                    >
                      {card.buttonLabel}
                    </Link>
                    <div className="flex items-center gap-2 text-foudre-green/52">
                      <StepTagIcon />
                      <span className="tx-p">{card.footerText}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMMUNITY ── */}
        <section
          data-about-section
          data-bg={backgroundStops[4]}
          className="px-4 py-10 text-foudre-green desk:px-10 desk:py-18"
        >
          <div className="mx-auto max-w-[148rem]">
            <div className="about-reveal max-w-[76rem]">
              <span className="text-[1.1rem] font-semibold uppercase tracking-[0.28em] text-foudre-pink">
                Community and team
              </span>
              <h2 className="tx-md mt-4 text-foudre-green">
                We build the frame, but real wear gives the brand its shape.
              </h2>
              <p className="tx-p mt-5 max-w-[64rem] text-foudre-green/68">
                DMG Beauty stays grounded in how people actually live in these
                pieces. That means the styling choices, product notes, and
                visual language all come back to people wearing them in motion,
                not just in a studio freeze.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {teamCards.map((card) => (
                <article
                  key={card.name}
                  className="about-frame overflow-hidden rounded-[2.8rem] bg-white p-3 shadow-[0_2rem_5rem_rgba(61,43,0,0.1)]"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[2.2rem]">
                    <Image
                      src={card.image}
                      alt={card.name}
                      fill
                      sizes="(min-width: 1280px) 320px, (min-width: 768px) 46vw, 92vw"
                      className="object-cover object-center"
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
                </article>
              ))}
            </div>

            <div className="about-reveal mt-10 flex flex-col items-start justify-between gap-6 rounded-[3.4rem] bg-foudre-green px-6 py-8 text-foudre-paper desk:flex-row desk:items-center desk:px-10">
              <div>
                <p className="text-[1.1rem] font-semibold uppercase tracking-[0.26em] text-foudre-pink-soft">
                  Ready to shop the story?
                </p>
                <p className="tx-pxl mt-3 max-w-[58rem]">
                  Explore the current edit and see how the pieces carry this
                  same mood into the product experience.
                </p>
              </div>
              <Link
                href="/shop"
                className="shrink-0 inline-flex items-center rounded-full bg-foudre-pink px-7 py-4 text-[1.3rem] font-bold uppercase tracking-[0.18em] text-foudre-paper transition-transform hover:-translate-y-[0.1rem]"
              >
                Enter the shop
              </Link>
            </div>
          </div>
        </section>
      </main>
      <HomeFooter />
    </div>
  );
}

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-[2.4rem] w-[2.4rem]"
    >
      <path d="M8 6.5v11l9-5.5-9-5.5Z" />
    </svg>
  );
}

function StepClockIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="h-[1.3rem] w-[1.3rem]"
    >
      <circle
        cx="8"
        cy="8"
        r="6.5"
        stroke="currentColor"
        strokeWidth="1.4"
        className="text-foudre-paper/70"
      />
      <path
        d="M8 5v3.5l2 1.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        className="text-foudre-paper"
      />
    </svg>
  );
}

function ValueBadgeIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="h-[1.3rem] w-[1.3rem]"
    >
      <path
        d="M8 2.5C6 2.5 4 4 4 6.5c0 3 4 7 4 7s4-4 4-7c0-2.5-2-4-4-4z"
        stroke="currentColor"
        strokeWidth="1.3"
        className="text-foudre-paper/80"
      />
      <circle
        cx="8"
        cy="6.5"
        r="1.2"
        fill="currentColor"
        className="text-foudre-paper/80"
      />
    </svg>
  );
}

function StepTagIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="h-[1.4rem] w-[1.4rem]"
    >
      <rect
        x="1.5"
        y="3.5"
        width="13"
        height="9"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M5 7.5h6M5 10h4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}
