"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { gsap, useGSAP } from "@/lib/gsap";

const PHASES = [
  {
    label: "SATIN FOR\nYOUR CROWN.",
    desc: "Care first.\nStyle still matters.",
    eyebrow: "Butterfly Cross Bonnet",
    cta: "Shop bonnets",
    href: "/shop/bonnets/butterfly-cross-bonnet",
    src: "/images/bonnet1.jpeg",
    alt: "DMG butterfly cross bonnet",
    textColor: "#fff8f6",
  },
  {
    label: "P.U.S.H.\nON PURPOSE.",
    desc: "Pray Until Something Happens.\nWear the reminder.",
    eyebrow: "Signature tee",
    cta: "Shop the tee",
    href: "/shop/clothes/push-signature-tee",
    src: "/images/tshirt.jpeg",
    alt: "DMG P.U.S.H tee",
    textColor: "#3d2b00",
  },
  {
    label: "LAYERED FOR\nREAL LIFE.",
    desc: "The hoodie keeps the message close\nwhen the weather shifts.",
    eyebrow: "Faith hoodie",
    cta: "Shop the hoodie",
    href: "/shop/clothes/faith-graphic-hoodie",
    src: "/images/hoodie.jpg",
    alt: "DMG faith graphic hoodie",
    textColor: "#3d2b00",
  },
  {
    label: "SMALL PIECES.\nBIG REMINDER.",
    desc: "Even the accessories\nstill say something.",
    eyebrow: "Heart keychain",
    cta: "Shop accessories",
    href: "/shop/accessories/push-heart-keychain",
    src: "/images/keychain.JPG",
    alt: "DMG P.U.S.H heart keychain",
    textColor: "#db3c8a",
  },
];

// dark pink → soft pink → blush → paper
const BG_COLORS = ["#db3c8a", "#f29ebd", "#eacccc", "#fff8f6"];

export default function HomeBrand() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = containerRef.current;
      if (!section) return;

      const bg = section.querySelector<HTMLElement>(".brand-bg")!;
      const imgs = gsap.utils.toArray<HTMLElement>(".brand-frame", section);
      const texts = gsap.utils.toArray<HTMLElement>(".brand-text", section);
      const descs = gsap.utils.toArray<HTMLElement>(".brand-desc", section);

      // Set initial states — frames (image + overlay) crossfade as one unit
      gsap.set(imgs[0], { opacity: 1 });
      gsap.set(imgs.slice(1), { opacity: 0 });
      gsap.set(texts[0], { opacity: 1, yPercent: 0 });
      gsap.set(texts.slice(1), { opacity: 0, yPercent: 40 });
      gsap.set(descs[0], { opacity: 1, yPercent: 0 });
      gsap.set(descs.slice(1), { opacity: 0, yPercent: 20 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1.2,
          start: "top top",
          end: "+=300%",
        },
      });

      // Anchor total duration at 3 so each viewport-height of scroll = 1 phase
      tl.to({}, { duration: 3 });

      // Phase 0 → 1
      tl.to(bg, { backgroundColor: BG_COLORS[1], duration: 0.6 }, 0.1);
      tl.to(texts[0], { opacity: 0, yPercent: -40, duration: 0.25 }, 0);
      tl.to(descs[0], { opacity: 0, yPercent: -20, duration: 0.25 }, 0);
      tl.to(imgs[0], { opacity: 0, duration: 0.4 }, 0.15);
      tl.to(imgs[1], { opacity: 1, duration: 0.4 }, 0.3);
      tl.to(texts[1], { opacity: 1, yPercent: 0, duration: 0.35 }, 0.5);
      tl.to(descs[1], { opacity: 1, yPercent: 0, duration: 0.35 }, 0.5);

      // Phase 1 → 2
      tl.to(bg, { backgroundColor: BG_COLORS[2], duration: 0.6 }, 1.1);
      tl.to(texts[1], { opacity: 0, yPercent: -40, duration: 0.25 }, 1);
      tl.to(descs[1], { opacity: 0, yPercent: -20, duration: 0.25 }, 1);
      tl.to(imgs[1], { opacity: 0, duration: 0.4 }, 1.15);
      tl.to(imgs[2], { opacity: 1, duration: 0.4 }, 1.3);
      tl.to(texts[2], { opacity: 1, yPercent: 0, duration: 0.35 }, 1.5);
      tl.to(descs[2], { opacity: 1, yPercent: 0, duration: 0.35 }, 1.5);

      // Phase 2 → 3
      tl.to(bg, { backgroundColor: BG_COLORS[3], duration: 0.6 }, 2.1);
      tl.to(texts[2], { opacity: 0, yPercent: -40, duration: 0.25 }, 2);
      tl.to(descs[2], { opacity: 0, yPercent: -20, duration: 0.25 }, 2);
      tl.to(imgs[2], { opacity: 0, duration: 0.4 }, 2.15);
      tl.to(imgs[3], { opacity: 1, duration: 0.4 }, 2.3);
      tl.to(texts[3], { opacity: 1, yPercent: 0, duration: 0.35 }, 2.5);
      tl.to(descs[3], { opacity: 1, yPercent: 0, duration: 0.35 }, 2.5);
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="brand-section relative">
      {/* Full-bleed background — color tweened by GSAP */}
      <div
        className="brand-bg absolute inset-0"
        style={{ backgroundColor: BG_COLORS[0] }}
      />

      <div className="relative h-screen overflow-hidden">
        <div className="grid-24 h-full content-center items-center gap-y-8">
          {/* Headline — top left, crossfading */}
          <div className="relative col-span-24 desk:col-span-11 desk:col-start-2">
            {/* Invisible spacer sized to the tallest two-line heading */}
            <div className="invisible pointer-events-none" aria-hidden>
              <p className="tx-xl whitespace-pre-line">
                {"LAYERED FOR\nREAL LIFE."}
              </p>
            </div>

            {PHASES.map((phase, i) => (
              <p
                key={i}
                className="brand-text tx-xl absolute inset-x-0 top-0 whitespace-pre-line"
                style={{ opacity: i === 0 ? 1 : 0, color: phase.textColor }}
              >
                {phase.label}
              </p>
            ))}
          </div>

          {/* Image — right column, crossfading frames (image + overlay) */}
          <div className="col-span-20 col-start-3 desk:col-span-9 desk:col-start-14">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[38rem] overflow-hidden rounded-[var(--radius-md)] shadow-2xl">
              {PHASES.map((phase, i) => (
                <div
                  key={i}
                  className="brand-frame absolute inset-0"
                  style={{ opacity: i === 0 ? 1 : 0 }}
                >
                  <Image
                    src={phase.src}
                    alt={phase.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 961px) 34rem, 72vw"
                    priority={i === 0}
                  />
                  {/* Overlay — mirrors HeroCardOverlay */}
                  <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#000000cc] via-[#00000055] to-transparent p-6 text-foudre-paper">
                    <p
                      className="tx-l uppercase tracking-[0.24em] text-foudre-paper/70"
                      style={{ fontFamily: "var(--font-cursive)" }}
                    >
                      {phase.eyebrow}
                    </p>
                    <p className="tx-sm mt-3 text-foudre-paper">{phase.cta}</p>
                    <div className="pointer-events-auto mt-4">
                      <Link href={phase.href} className="pill-cta inline-flex">
                        Shop now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Script descriptions — bottom right, crossfading */}
        {PHASES.map((phase, i) => (
          <p
            key={i}
            className="brand-desc absolute bottom-12 right-6 desk:bottom-16 desk:right-12 whitespace-pre-line text-right text-[2.2rem] leading-snug desk:text-[3.2rem]"
            style={{
              opacity: i === 0 ? 1 : 0,
              color: phase.textColor,
              fontFamily: "var(--font-cursive)",
              fontStyle: "italic",
            }}
          >
            {phase.desc}
          </p>
        ))}
      </div>
    </section>
  );
}
