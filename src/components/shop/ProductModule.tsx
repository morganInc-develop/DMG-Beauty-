"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import type { Product } from "@/data/products";
import { gsap, useGSAP } from "@/lib/gsap";
import ProductSlider from "./ProductSlider";
import WishlistButton from "./WishlistButton";

function getAccentTextColor(accentBg: string) {
  const normalized = accentBg.toLowerCase();

  if (
    normalized === "#f29ebd" ||
    normalized === "#fff8f6" ||
    normalized === "#fce5df"
  ) {
    return "var(--color-foudre-green)";
  }

  return "var(--color-foudre-paper)";
}

export default function ProductModule({ product }: { product: Product }) {
  const moduleRef = useRef<HTMLDivElement>(null);
  const accentTextColor = getAccentTextColor(product.accentBg);

  useGSAP(
    () => {
      const section = moduleRef.current;

      if (!section) {
        return;
      }

      gsap.from(".proj-title", {
        yPercent: 20,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          once: true,
        },
      });

      gsap.from(".proj-meta", {
        yPercent: 15,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 65%",
          once: true,
        },
      });
    },
    { scope: moduleRef },
  );

  return (
    <div
      id={`product-${product.id}`}
      ref={moduleRef}
      className="product-module py-[6rem] desk:py-[8rem]"
      style={{ backgroundColor: product.bg }}
    >
      <ProductSlider
        images={product.stories}
        accentBg={product.accentBg}
        textColor={product.textColor}
      />

      <div className="proj-meta mt-4 flex items-center gap-3 px-[1.5rem] desk:px-0">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <Link
            href={product.href}
            className="plus-btn"
            style={{
              backgroundColor: product.accentBg,
              color: accentTextColor,
            }}
            aria-label="View product"
          >
            +
          </Link>
        </motion.div>

        <WishlistButton accentColor={product.accentBg} />
      </div>

      <div className="proj-title mt-8 px-[1.5rem] desk:px-0">
        {product.nameLines.map((line) => (
          <h2
            key={line}
            className="tx-xl leading-[0.85]"
            style={{ color: product.textColor }}
          >
            {line}
          </h2>
        ))}
      </div>

      <div className="proj-meta mt-5 flex flex-wrap gap-2 px-[1.5rem] desk:px-0">
        <span
          className="chip-bubble"
          style={{
            backgroundColor: `${product.textColor}18`,
            color: product.textColor,
          }}
        >
          {product.category}
        </span>
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="chip-bubble"
            style={{
              backgroundColor: `${product.textColor}18`,
              color: product.textColor,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="proj-meta mt-6 flex flex-col gap-6 px-[1.5rem] desk:flex-row desk:items-end desk:px-0">
        <div className="space-y-4">
          <p
            className="tx-p max-w-[36rem] opacity-75"
            style={{ color: product.textColor }}
          >
            {product.excerpt}
          </p>
          <p className="tx-sm" style={{ color: product.textColor }}>
            {product.price}
          </p>
        </div>

        <motion.div
          className="desk:ml-auto desk:shrink-0"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 350, damping: 20 }}
        >
          <Link
            href={product.href}
            className="inline-flex items-center gap-2 rounded-[var(--radius-lg)] px-8 py-4 tx-p font-bold transition-opacity hover:opacity-90"
            style={{
              backgroundColor: product.accentBg,
              color: accentTextColor,
            }}
          >
            Shop now →
          </Link>
        </motion.div>
      </div>

      <div
        className="mt-[6rem] border-t opacity-20 desk:mt-[8rem]"
        style={{ borderColor: product.textColor }}
      />
    </div>
  );
}
