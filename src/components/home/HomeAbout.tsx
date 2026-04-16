"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

import { products } from "@/data/products";

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

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-foudre-paper px-6 pb-20 pt-32 desk:px-12 desk:pb-28 desk:pt-40">
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

      <div className="relative z-10 mx-auto max-w-[98rem] text-center">
        <FadeUp>
          <span className="chip-bubble inline-flex">About DMG</span>
        </FadeUp>
        <FadeUp delay={0.08}>
          <h1 className="tx-xl mt-8 text-foudre-green">Faith you can wear.</h1>
        </FadeUp>
        <FadeUp delay={0.16}>
          <p className="tx-pxl mx-auto mt-8 max-w-[66rem] text-foudre-green/68">
            DMG is a Christian brand built around the products people actually
            reach for: satin bonnets, statement apparel, and small accessories
            that keep the message visible in daily life.
          </p>
        </FadeUp>
        <FadeUp delay={0.22}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/shop" className="pill-cta">
              Shop the collection
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[var(--radius-lg)] border border-foudre-green/25 px-6 py-4 text-[1.3rem] font-bold text-foudre-green transition-colors hover:border-foudre-pink hover:text-foudre-pink"
            >
              Join the list →
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function HighlightSection() {
  return (
    <section className="bg-foudre-paper px-6 pb-6 desk:px-12">
      <ScaleIn className="mx-auto max-w-[112rem] overflow-hidden rounded-[3.6rem] shadow-[0_3rem_9rem_rgba(61,43,0,0.14)]">
        <div className="grid items-stretch desk:grid-cols-[minmax(0,1.1fr)_28rem]">
          <div className="relative min-h-[42rem]">
            <Image
              src="/images/hoodie.jpg"
              alt="DMG faith hoodie"
              fill
              sizes="(min-width: 961px) 70rem, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.56)] via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 max-w-[48rem] text-foudre-paper">
              <p className="text-[1.1rem] font-semibold uppercase tracking-[0.24em] text-foudre-paper/72">
                What changed
              </p>
              <h2 className="mt-4 font-display text-[clamp(3.8rem,5vw,6.4rem)] leading-[0.9]">
                The collection is now built around real products, not
                placeholders.
              </h2>
            </div>
          </div>

          <div className="flex flex-col justify-between bg-foudre-green p-8 text-foudre-paper desk:p-10">
            <div>
              <p className="text-[1.1rem] font-semibold uppercase tracking-[0.24em] text-foudre-paper/65">
                Current lineup
              </p>
              <ul className="mt-6 space-y-4 text-[1.5rem] leading-[1.55] text-foudre-paper/78">
                <li>Butterfly cross bonnet with grouped style options.</li>
                <li>PUSH trucker hat.</li>
                <li>Faith hoodie.</li>
                <li>P.U.S.H heart keychain.</li>
                <li>P.U.S.H signature tee.</li>
              </ul>
            </div>

            <div className="mt-8 rounded-[2rem] bg-foudre-paper/10 p-5">
              <p className="text-[1.1rem] font-semibold uppercase tracking-[0.18em] text-foudre-paper/64">
                Rooted message
              </p>
              <p className="mt-3 text-[1.4rem] leading-[1.55] text-foudre-paper/78">
                The P.U.S.H message anchors the apparel and accessory side of
                the brand: Pray Until Something Happens.
              </p>
            </div>
          </div>
        </div>
      </ScaleIn>
    </section>
  );
}

function ProductGridSection() {
  return (
    <section className="bg-foudre-paper px-6 py-24 desk:px-12 desk:py-32">
      <div className="mx-auto max-w-[148rem]">
        <FadeUp>
          <span className="text-[1.1rem] font-semibold uppercase tracking-[0.28em] text-foudre-pink">
            Product focus
          </span>
        </FadeUp>
        <FadeUp delay={0.08}>
          <h2 className="tx-md mt-4 text-foudre-green">
            The line, item by item.
          </h2>
        </FadeUp>
        <FadeUp delay={0.16}>
          <p className="tx-p mt-6 max-w-[62rem] text-foudre-green/68">
            Instead of a broad fashion concept, DMG now centers a tighter mix of
            products that already carry the strongest response: satin care,
            statement apparel, and giftable reminders.
          </p>
        </FadeUp>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <ScaleIn key={product.id} delay={0.06 * index}>
              <article className="overflow-hidden rounded-[2.6rem] border border-foudre-green/8 bg-white shadow-[0_1.6rem_3rem_rgba(61,43,0,0.08)]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={product.stories[0]}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 92vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[1.1rem] font-semibold uppercase tracking-[0.18em] text-foudre-green/45">
                        {product.category}
                      </p>
                      <h3 className="mt-2 font-display text-[2.8rem] leading-[0.9] text-foudre-green">
                        {product.name}
                      </h3>
                    </div>
                    <span className="text-[1.2rem] font-semibold text-foudre-green/55">
                      {product.price}
                    </span>
                  </div>
                  <p className="tx-p text-foudre-green/68">{product.excerpt}</p>
                  <Link href={product.href} className="pill-cta inline-flex">
                    View product
                  </Link>
                </div>
              </article>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="overflow-hidden bg-foudre-cream px-6 py-24 desk:px-12 desk:py-32">
      <div className="mx-auto grid max-w-[148rem] gap-10 md:grid-cols-2 md:items-center desk:gap-16">
        <ScaleIn>
          <div className="relative overflow-hidden rounded-[3rem] shadow-[0_2rem_6rem_rgba(61,43,0,0.12)]">
            <div className="relative aspect-[4/3] md:aspect-[3/4]">
              <Image
                src="/images/tshirt.jpeg"
                alt="DMG P.U.S.H tee"
                fill
                sizes="(min-width: 961px) 640px, 92vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="absolute bottom-5 left-5">
              <span className="rounded-full bg-foudre-green/72 px-4 py-2 text-[1.1rem] font-semibold uppercase tracking-[0.18em] text-foudre-paper backdrop-blur-sm">
                Message first
              </span>
            </div>
          </div>
        </ScaleIn>

        <div>
          <FadeUp>
            <span className="text-[1.1rem] font-semibold uppercase tracking-[0.28em] text-foudre-green/55">
              Why P.U.S.H matters
            </span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="tx-md mt-4 text-foudre-green">
              The apparel side of DMG is built around a clear phrase people can
              carry with them.
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="tx-p mt-6 max-w-[58rem] text-foudre-green/68">
              P.U.S.H means Pray Until Something Happens. That phrase gives the
              collection a center of gravity. It is direct, memorable, and easy
              to wear across a tee, a hat, or a smaller accessory without losing
              the point.
            </p>
            <p className="tx-p mt-4 max-w-[58rem] text-foudre-green/68">
              Combined with the bonnet line, it gives DMG a stronger balance:
              practical satin care on one side and visible faith messaging on
              the other.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function JoinSection() {
  return (
    <section className="overflow-hidden bg-foudre-paper px-6 py-24 desk:px-12 desk:py-32">
      <div className="mx-auto grid max-w-[148rem] gap-10 md:grid-cols-2 md:items-center desk:gap-16">
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
              The catalog is tighter now. The message is clearer too.
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="tx-p mt-6 max-w-[54rem] text-foudre-green/68">
              Join the list to hear about bonnet restocks, new PUSH apparel, and
              the next wave of products added to the line.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/shop" className="pill-cta">
                Enter the shop
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-[var(--radius-lg)] border border-foudre-green/25 px-6 py-4 text-[1.3rem] font-bold text-foudre-green transition-colors hover:border-foudre-pink hover:text-foudre-pink"
              >
                Join the community
              </a>
            </div>
          </FadeUp>
        </div>

        <ScaleIn delay={0.1}>
          <div className="relative overflow-hidden rounded-[3rem] shadow-[0_2rem_6rem_rgba(61,43,0,0.14)]">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/hat.JPG"
                alt="DMG PUSH hat and shirt"
                fill
                sizes="(min-width: 961px) 640px, 92vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-foudre-pink/20 to-transparent" />
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}

export default function HomeAbout() {
  return (
    <>
      <HeroSection />
      <HighlightSection />
      <ProductGridSection />
      <StorySection />
      <JoinSection />
    </>
  );
}
