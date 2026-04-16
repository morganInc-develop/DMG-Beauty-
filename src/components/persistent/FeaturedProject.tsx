"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { products } from "@/data/products";
import { gsap, useGSAP } from "@/lib/gsap";

export default function FeaturedProject() {
  const progressRef = useRef<HTMLSpanElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const featuredProducts = useMemo(
    () => [products[0], products[4], products[3]],
    [],
  );

  const activeProduct = featuredProducts[activeIndex];

  useGSAP(() => {
    if (!progressRef.current) {
      return;
    }

    gsap.set(progressRef.current, { width: "0%" });

    const tween = gsap.to(progressRef.current, {
      width: "100%",
      duration: 5,
      ease: "none",
    });

    return () => {
      tween.kill();
      gsap.set(progressRef.current, { width: "0%" });
    };
  }, [activeIndex]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % featuredProducts.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [featuredProducts.length]);

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 30 }}
      className="fixed bottom-28 right-6 z-50 hidden w-[22rem] desk:block desk:bottom-12 desk:right-12 desk:w-[28rem]"
    >
      <motion.div
        className="foudre-panel overflow-hidden p-4 desk:p-5"
        animate={{ backgroundColor: activeProduct.bg }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="relative mb-4 aspect-[2.2/1] overflow-hidden rounded-[var(--radius-md)]">
              <Image
                src={activeProduct.stories[0]}
                alt={activeProduct.name}
                fill
                className="object-cover"
                sizes="(min-width: 961px) 28rem, 22rem"
              />
            </div>

            <span className="tx-l uppercase tracking-[0.2em] text-white/60">
              {activeProduct.category}
            </span>
            <h3 className="tx-sm mt-3 whitespace-pre-line text-white">
              {activeProduct.nameLines.join("\n")}
            </h3>

            <div className="mt-4 flex items-center gap-3">
              <span className="chip-bubble bg-white text-foudre-green">
                {activeProduct.price}
              </span>

              <Link href={activeProduct.href} className="pill-cta w-fit">
                Shop now →
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 h-[0.3rem] overflow-hidden rounded-full bg-white/20">
          <span
            ref={progressRef}
            className="block h-full rounded-full bg-white"
            style={{ width: "0%" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
