"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import type { Product } from "@/data/products";
import ProductSlider from "./ProductSlider";

export default function ProductDetail({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(
    product.variants?.[0]?.imageIndex ?? 0,
  );

  const activeVariant = useMemo(() => {
    return product.variants?.find(
      (variant) => variant.imageIndex === activeImage,
    );
  }, [activeImage, product.variants]);

  return (
    <div className="grid gap-10 desk:grid-cols-[minmax(0,1.1fr)_44rem] desk:items-start">
      <div>
        <div
          className="overflow-hidden rounded-[3rem]"
          style={{ backgroundColor: product.bg }}
        >
          <ProductSlider
            images={product.stories}
            accentBg={product.accentBg}
            textColor={product.textColor}
            activeIndex={activeImage}
            onActiveChange={setActiveImage}
          />
        </div>
      </div>

      <div className="space-y-6 rounded-[3rem] bg-foudre-paper p-6 shadow-[0_2rem_5rem_rgba(61,43,0,0.08)] desk:sticky desk:top-[12rem] desk:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="chip-bubble bg-foudre-pink-soft text-foudre-green">
            {product.category}
          </span>
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-foudre-green/10 px-3 py-2 text-[1.1rem] font-semibold text-foudre-green/65"
            >
              {tag}
            </span>
          ))}
        </div>

        <div>
          <h1 className="tx-xl whitespace-pre-line text-foudre-green">
            {product.nameLines.join("\n")}
          </h1>
          <p className="tx-md mt-4 text-foudre-green">{product.price}</p>
          <p className="tx-p mt-4 max-w-[48rem] text-foudre-green/68">
            {product.excerpt}
          </p>
        </div>

        {product.variants?.length ? (
          <div className="space-y-3">
            <p className="text-[1.1rem] font-semibold uppercase tracking-[0.22em] text-foudre-green/50">
              Style Options
            </p>
            <div className="flex flex-wrap gap-2">
              {product.variants.map((variant) => {
                const isActive = variant.imageIndex === activeImage;

                return (
                  <button
                    key={variant.id}
                    type="button"
                    onClick={() => setActiveImage(variant.imageIndex)}
                    className={`rounded-full border px-4 py-3 text-[1.2rem] font-semibold transition ${
                      isActive
                        ? "border-foudre-green bg-foudre-green text-foudre-paper"
                        : "border-foudre-green/12 bg-white text-foudre-green/72 hover:border-foudre-pink"
                    }`}
                  >
                    {variant.label}
                  </button>
                );
              })}
            </div>
            {activeVariant?.note ? (
              <p className="tx-p text-foudre-green/58">{activeVariant.note}</p>
            ) : null}
          </div>
        ) : null}

        <div className="space-y-3">
          <p className="text-[1.1rem] font-semibold uppercase tracking-[0.22em] text-foudre-green/50">
            Why It Belongs In The Line
          </p>
          <ul className="space-y-3">
            {product.details.map((detail) => (
              <li
                key={detail}
                className="rounded-[2rem] bg-foudre-cream/65 px-4 py-4 text-[1.4rem] leading-[1.55] text-foudre-green/72"
              >
                {detail}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 desk:flex-row">
          <a href="#contact" className="pill-cta text-center">
            Join the list
          </a>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center rounded-[var(--radius-lg)] border border-foudre-green/15 px-6 py-4 text-[1.3rem] font-bold text-foudre-green transition-colors hover:border-foudre-pink hover:text-foudre-pink"
          >
            Back to shop
          </Link>
        </div>
      </div>
    </div>
  );
}
