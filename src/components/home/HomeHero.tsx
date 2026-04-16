"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { gsap, useGSAP } from "@/lib/gsap";

type HeroCard = {
  title: string;
  eyebrow: string;
  href: string;
  imageSrc?: string;
  videoSrc?: string;
  poster?: string;
  alt: string;
  showBolt?: boolean;
};

function BoltIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-[1.8rem] w-[1.8rem]"
    >
      <path d="M13 2 4.093 12.688H11L10 22l8.907-10.688H13L13 2Z" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      aria-hidden="true"
      className="h-[2rem] w-[2rem]"
    >
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      aria-hidden="true"
      className="h-[2rem] w-[2rem]"
    >
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const heroCards: HeroCard[] = [
  {
    title: "SATIN BONNET",
    eyebrow: "Rooted routine",
    href: "/shop/bonnets/rose-satin",
    imageSrc: "https://picsum.photos/seed/dmg-hero-left/600/800",
    alt: "DMG satin bonnet editorial for a Christian apparel campaign",
  },
  {
    title: "CLOUD HOODIE",
    eyebrow: "Faith in motion",
    href: "/shop/clothes/cream-ribbed",
    videoSrc: "/videos/hero-loop.mp4",
    poster: "https://picsum.photos/seed/dmg-hero-center-poster/800/1000",
    alt: "DMG hoodie editorial for a Fort Lauderdale Christian clothing brand",
    showBolt: true,
  },
  {
    title: "SATIN SCARF",
    eyebrow: "Finish with purpose",
    href: "/shop/accessories/gold-hoops",
    imageSrc: "https://picsum.photos/seed/dmg-hero-right/600/800",
    alt: "DMG satin scarf editorial inspired by Old Harbour roots",
  },
];

const carouselSlides = [
  {
    src: "/images/shop/rose-satin-2.jpg",
    alt: "Rose satin bonnet",
    label: "Satin Bonnet",
  },
  {
    src: "/images/shop/cream-ribbed-2.jpg",
    alt: "Cream ribbed set",
    label: "Ribbed Set",
  },
  {
    src: "/images/shop/gold-hoops-2.jpg",
    alt: "Gold hoops",
    label: "Gold Hoops",
  },
  {
    src: "/images/shop/black-joggers-2.jpg",
    alt: "Black joggers",
    label: "Joggers",
  },
  {
    src: "/images/shop/smoke-black-2.jpg",
    alt: "Smoke black bonnet",
    label: "Smoke Bonnet",
  },
];

const slideVariants = {
  enter: { opacity: 0, scale: 1.04 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.96 },
};

function HeroCardOverlay({
  title,
  eyebrow,
  href,
}: Pick<HeroCard, "title" | "eyebrow" | "href">) {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#000000cc] via-[#00000055] to-transparent p-4 text-foudre-paper"
      initial={false}
    >
      <p
        className="tx-l uppercase tracking-[0.24em] text-foudre-paper/70"
        style={{ fontFamily: "var(--font-cursive)" }}
      >
        {eyebrow}
      </p>
      <p className="tx-sm mt-3 max-w-[14rem] whitespace-pre-line text-foudre-paper">
        {title}
      </p>
      <div className="pointer-events-auto mt-4">
        <Link href={href} className="pill-cta inline-flex">
          Shop now
        </Link>
      </div>
    </motion.div>
  );
}

export default function HomeHero() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  // Auto-rotate every 3.5 s
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % carouselSlides.length);
    }, 3500);
    return () => clearInterval(id);
  }, [paused]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length,
    );
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % carouselSlides.length);
  };

  const handleDot = (i: number) => {
    setDirection(i > activeIndex ? 1 : -1);
    setActiveIndex(i);
  };

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".hero-wordmark", {
        yPercent: 15,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
      })
        .from(
          ".hero-collage-img",
          {
            yPercent: 30,
            opacity: 0,
            stagger: 0.12,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.9",
        )
        .from(
          ".hero-sub-copy",
          {
            yPercent: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="hero"
      className="hero-section relative overflow-hidden bg-foudre-paper pb-16 pt-8 desk:pb-24 desk:pt-10"
    >
      {/* ── BACKGROUND: huge DMG wordmark ── */}
      <div
        className="hero-wordmark pointer-events-none absolute inset-x-0 top-0 z-0 select-none overflow-hidden text-center"
        aria-hidden="true"
      >
        <span
          className="font-display font-black text-foudre-green"
          style={{
            display: "block",
            fontSize: "clamp(8rem, 36vw, 60rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
          }}
        >
          DMG
        </span>
      </div>

      {/* ── FOREGROUND: content ── */}
      <div className="relative z-10 grid-24 gap-y-8 desk:gap-y-0">
        {/* ── Three-card collage ── */}
        <div className="col-span-24 mt-[clamp(4rem,18vw,16rem)] desk:col-span-20 desk:col-start-3 desk:mt-[clamp(6rem,22vw,24rem)]">
          <div className="flex items-end justify-center gap-[1%] desk:gap-[1.5%]">
            {/* Left card */}
            <motion.div
              className="hero-collage-img group relative aspect-[3/4] w-[28%] overflow-hidden rounded-[var(--radius-md)] shadow-lg desk:w-[26%]"
              style={{ translateY: "4%" }}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <Image
                src={heroCards[0].imageSrc!}
                alt={heroCards[0].alt}
                fill
                className="object-cover transition-transform duration-500 desk:group-hover:scale-110"
                sizes="(min-width: 961px) 26vw, 28vw"
              />
              <HeroCardOverlay
                title={heroCards[0].title}
                eyebrow={heroCards[0].eyebrow}
                href={heroCards[0].href}
              />
            </motion.div>

            {/* Center card */}
            <motion.div
              className="hero-collage-img group relative aspect-[3/4] w-[36%] overflow-hidden rounded-[var(--radius-md)] shadow-2xl desk:w-[32%]"
              style={{ translateY: "-3%" }}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              {heroCards[1].videoSrc ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={heroCards[1].poster}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 desk:group-hover:scale-110"
                  src={heroCards[1].videoSrc}
                />
              ) : (
                <Image
                  src={heroCards[1].imageSrc!}
                  alt={heroCards[1].alt}
                  fill
                  className="object-cover transition-transform duration-500 desk:group-hover:scale-110"
                  sizes="(min-width: 961px) 32vw, 36vw"
                />
              )}
              <div className="absolute left-1/2 top-6 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-foudre-cream text-foudre-green transition-transform duration-300 desk:group-hover:scale-110">
                <BoltIcon />
              </div>
              <HeroCardOverlay
                title={heroCards[1].title}
                eyebrow={heroCards[1].eyebrow}
                href={heroCards[1].href}
              />
            </motion.div>

            {/* Right card */}
            <motion.div
              className="hero-collage-img group relative aspect-[3/4] w-[28%] overflow-hidden rounded-[var(--radius-md)] shadow-lg desk:w-[26%]"
              style={{ translateY: "2%" }}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <Image
                src={heroCards[2].imageSrc!}
                alt={heroCards[2].alt}
                fill
                className="object-cover transition-transform duration-500 desk:group-hover:scale-110"
                sizes="(min-width: 961px) 26vw, 28vw"
              />
              <HeroCardOverlay
                title={heroCards[2].title}
                eyebrow={heroCards[2].eyebrow}
                href={heroCards[2].href}
              />
            </motion.div>
          </div>
        </div>

        {/* ── "WEAR YOUR STORY" — single row ── */}
        <div className="col-span-24 mt-8 desk:mt-10">
          <p className="hero-sub-copy tx-l uppercase tracking-[0.24em] text-foudre-green/38">
            Fort Lauderdale · Old Harbour · Worn With Purpose
          </p>
          <p
            className="hero-sub-copy mt-4 text-foudre-pink desk:whitespace-nowrap"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: "0.02em",
              fontSize: "clamp(5rem, 9.2vw, 13rem)",
            }}
          >
            ROOTED IN FAITH
          </p>
        </div>

        {/* ── Tagline + Carousel ── */}
        <div className="hero-sub-copy col-span-24 mt-10 pb-4">
          {/* Tagline — cursive, centered */}
          <p
            className="text-center text-foudre-green/70"
            style={{
              fontFamily: "var(--font-cursive)",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(2rem, 2.8vw, 3.6rem)",
              lineHeight: 1.35,
            }}
          >
            Christian apparel with South Florida polish and Old Harbour roots -
            <br className="hidden desk:block" />
            made for conviction, comfort, and everyday presence.
          </p>

          {/* Carousel */}
          <div
            className="relative mx-auto mt-10 max-w-[84rem] px-[3.4rem]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Image frame */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[3rem] shadow-[0_2.4rem_6rem_rgba(61,43,0,0.14)]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className="absolute inset-0"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={carouselSlides[activeIndex].src}
                      alt={carouselSlides[activeIndex].alt}
                      fill
                      sizes="(min-width: 961px) 780px, 92vw"
                      className="object-cover object-center"
                      loading={activeIndex === 0 ? "eager" : "lazy"}
                      unoptimized
                    />
                  </div>
                  {/* Slide label */}
                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full bg-foudre-green/70 px-4 py-2 text-[1.15rem] font-semibold uppercase tracking-[0.18em] text-foudre-paper backdrop-blur-sm">
                      {carouselSlides[activeIndex].label}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Prev button */}
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="btn-circle absolute left-0 top-1/2 -translate-y-1/2 shadow-[0_1rem_3rem_rgba(61,43,0,0.14)]"
            >
              <ChevronLeftIcon />
            </button>

            {/* Next button */}
            <button
              onClick={handleNext}
              aria-label="Next slide"
              className="btn-circle absolute right-0 top-1/2 -translate-y-1/2 shadow-[0_1rem_3rem_rgba(61,43,0,0.14)]"
            >
              <ChevronRightIcon />
            </button>

            {/* Dot indicators */}
            <div className="mt-6 flex items-center justify-center gap-2">
              {carouselSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDot(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-[0.7rem] rounded-full transition-all duration-300 ease-out ${
                    i === activeIndex
                      ? "w-[2.8rem] bg-foudre-pink"
                      : "w-[0.7rem] bg-foudre-green/20 hover:bg-foudre-green/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
