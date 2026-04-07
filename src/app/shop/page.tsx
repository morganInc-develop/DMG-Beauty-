"use client";

import { startTransition, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import HomeFooter from "@/components/home/HomeFooter";
import FloatingControls from "@/components/persistent/FloatingControls";
import { products } from "@/data/products";

const categoryOptions = [
  { key: "all", label: "All products" },
  { key: "Bonnets", label: "Bonnets" },
  { key: "Clothes", label: "Clothes" },
  { key: "Accessories", label: "Accessories" },
] as const;

const filterOptions = [
  { key: "all", label: "All pieces" },
  { key: "new", label: "New arrival" },
  { key: "bestseller", label: "Bestsellers" },
  { key: "limited", label: "Limited" },
  { key: "under-30", label: "Under $30" },
] as const;

type CategoryKey = (typeof categoryOptions)[number]["key"];
type FilterKey = (typeof filterOptions)[number]["key"];
type ViewMode = "grid" | "list";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("all");
  const [selectedFilter, setSelectedFilter] = useState<FilterKey>("all");
  const [view, setView] = useState<ViewMode>("grid");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    let matchesFilter = true;

    if (selectedFilter === "new") {
      matchesFilter = product.tags.some((tag) =>
        tag.toLowerCase().includes("new"),
      );
    }

    if (selectedFilter === "bestseller") {
      matchesFilter = product.tags.some((tag) => {
        const normalizedTag = tag.toLowerCase();
        return (
          normalizedTag.includes("bestseller") ||
          normalizedTag.includes("fan favorite")
        );
      });
    }

    if (selectedFilter === "limited") {
      matchesFilter = product.tags.some((tag) =>
        tag.toLowerCase().includes("limited"),
      );
    }

    if (selectedFilter === "under-30") {
      matchesFilter = Number(product.price.replace(/[^0-9.]/g, "")) < 30;
    }

    return matchesCategory && matchesFilter;
  });

  const activeCategoryLabel =
    selectedCategory === "all" ? "Shop All" : selectedCategory;
  const featuredProduct = filteredProducts[0] ?? products[0];
  const supportingProduct = filteredProducts[1] ?? products[1];
  const thirdProduct = filteredProducts[2] ?? products[2];

  return (
    <div className="relative min-h-screen overflow-hidden bg-foudre-blush pb-12 pt-[11.2rem] desk:pt-[11rem]">
      <FloatingControls />

      <div className="pointer-events-none absolute left-[2.5%] top-[18%] h-[2.2rem] w-[2.2rem] rounded-full bg-foudre-pink/70" />
      <div className="pointer-events-none absolute right-[4%] top-[24%] h-[1.8rem] w-[1.8rem] rounded-full bg-foudre-paper" />
      <div className="pointer-events-none absolute bottom-[14%] left-[6%] h-[1.2rem] w-[1.2rem] rounded-full bg-foudre-cream" />

      <main className="relative">
        <section className="relative overflow-hidden px-4 py-8 text-foudre-green desk:px-10 desk:py-10">
          <div
            className="relative mx-auto max-w-[148rem] overflow-hidden rounded-[3.2rem] px-6 py-8 desk:px-12 desk:py-12"
            style={{
              background:
                "linear-gradient(135deg, var(--color-foudre-pink-soft) 0%, #f7bfd4 55%, var(--color-foudre-cream) 100%)",
            }}
          >
            <div className="pointer-events-none absolute -left-6 top-8 h-[14rem] w-[14rem] rounded-full bg-foudre-paper/25 blur-3xl" />
            <div className="pointer-events-none absolute right-[-4rem] top-[-2rem] h-[18rem] w-[18rem] rounded-full bg-foudre-paper/35 blur-3xl" />

            <div className="grid gap-8 desk:grid-cols-[minmax(0,1fr)_44rem] desk:items-center">
              <div className="relative z-10 max-w-[70rem]">
                <span className="inline-flex rounded-full bg-foudre-paper/70 px-4 py-2 text-[1.1rem] font-semibold uppercase tracking-[0.26em] text-foudre-green/70">
                  DMG Spring Edit
                </span>
                <h1 className="tx-md mt-5 max-w-[72rem] text-foudre-green desk:tx-xl">
                  Shop the soft-glam drop with our signature attitude.
                </h1>
                <p className="tx-p mt-5 max-w-[48rem] text-foudre-green/70 desk:text-[1.8rem]">
                  Satin protection, sculpted layers, and statement details
                  styled in the DMG palette instead of a generic storefront.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Link
                    href={featuredProduct.href}
                    className="inline-flex items-center rounded-full bg-foudre-green px-7 py-4 text-[1.3rem] font-bold uppercase tracking-[0.18em] transition-transform hover:-translate-y-[0.1rem]"
                    style={{ color: "var(--color-foudre-paper)" }}
                  >
                    Shop featured
                  </Link>
                  <span className="rounded-full border border-foudre-green/10 bg-foudre-paper/65 px-5 py-4 text-[1.2rem] font-semibold uppercase tracking-[0.18em] text-foudre-green/65">
                    {filteredProducts.length} pieces in view
                  </span>
                </div>
              </div>

              <div className="relative min-h-[28rem]">
                <PromoImageCard
                  product={supportingProduct}
                  className="left-0 top-10 rotate-[-8deg]"
                />
                <PromoImageCard
                  product={thirdProduct}
                  className="left-1/2 top-2 z-10 -translate-x-1/2 rotate-[-3deg]"
                />
                <PromoImageCard
                  product={featuredProduct}
                  className="right-0 top-0 rotate-[7deg]"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-2 pt-2 desk:px-10">
          <div className="mx-auto grid max-w-[148rem] gap-6 desk:grid-cols-[24rem_minmax(0,1fr)] desk:items-start">
            <aside className="space-y-4">
              <div className="rounded-[2.8rem] bg-foudre-paper/65 p-4 backdrop-blur-sm">
                <div className="mb-3 flex items-center justify-between px-2">
                  <p className="text-[1.1rem] font-semibold uppercase tracking-[0.24em] text-foudre-green/55">
                    Browse
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      startTransition(() => {
                        setSelectedCategory("all");
                        setSelectedFilter("all");
                      });
                    }}
                    className="text-[1.2rem] font-semibold text-foudre-green/50 underline underline-offset-4"
                  >
                    Reset
                  </button>
                </div>

                <div className="grid gap-3 desk:grid-cols-1">
                  {categoryOptions.map((option) => {
                    const categoryProduct =
                      option.key === "all"
                        ? featuredProduct
                        : (products.find(
                            (product) => product.category === option.key,
                          ) ?? featuredProduct);

                    const isActive = selectedCategory === option.key;

                    return (
                      <button
                        key={option.key}
                        type="button"
                        onClick={() => {
                          startTransition(() => {
                            setSelectedCategory(option.key);
                          });
                        }}
                        className={`group flex items-center justify-between rounded-[2.2rem] border px-4 py-4 text-left transition ${
                          isActive
                            ? "border-foudre-pink bg-foudre-pink text-foudre-paper shadow-[0_1.6rem_3rem_rgba(219,60,138,0.22)]"
                            : "border-foudre-green/8 bg-foudre-paper text-foudre-green hover:border-foudre-pink/30 hover:bg-white"
                        }`}
                      >
                        <div className="pr-4">
                          <p className="font-display text-[2.1rem] leading-none">
                            {option.label}
                          </p>
                          <p
                            className={`mt-2 text-[1.1rem] font-semibold uppercase tracking-[0.16em] ${
                              isActive
                                ? "text-foudre-paper/70"
                                : "text-foudre-green/45"
                            }`}
                          >
                            {option.key === "all"
                              ? "Everything in the drop"
                              : "Shop this lane"}
                          </p>
                        </div>

                        <div className="relative h-[6.8rem] w-[5.8rem] shrink-0 overflow-hidden rounded-[1.8rem]">
                          <Image
                            src={categoryProduct.stories[0]}
                            alt={categoryProduct.name}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>

            <div>
              <div className="flex flex-col gap-4 desk:flex-row desk:items-end desk:justify-between">
                <div>
                  <p className="text-[1.1rem] font-semibold uppercase tracking-[0.24em] text-foudre-green/45">
                    Curated storefront
                  </p>
                  <h2 className="mt-2 font-display text-[4.4rem] leading-[0.88] text-foudre-green desk:text-[6rem]">
                    {activeCategoryLabel}
                  </h2>
                  <p className="tx-p mt-3 max-w-[52rem] text-foudre-green/65">
                    Clean filters, stronger hierarchy, and product cards that
                    feel merch-driven instead of editorial-only.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {filterOptions.map((filter) => {
                    const isActive = selectedFilter === filter.key;

                    return (
                      <button
                        key={filter.key}
                        type="button"
                        onClick={() => {
                          startTransition(() => {
                            setSelectedFilter(filter.key);
                          });
                        }}
                        className={`rounded-full border px-5 py-3 text-[1.2rem] font-semibold transition ${
                          isActive
                            ? "border-foudre-green bg-foudre-green text-foudre-paper"
                            : "border-foudre-green/10 bg-foudre-paper text-foudre-green/65 hover:border-foudre-pink/30"
                        }`}
                      >
                        {filter.label}
                      </button>
                    );
                  })}

                  {/* View toggle */}
                  <div className="ml-1 flex items-center gap-1 rounded-full border border-foudre-green/10 bg-foudre-paper p-1">
                    <button
                      type="button"
                      aria-label="Grid view"
                      onClick={() => setView("grid")}
                      className={`flex h-[3.4rem] w-[3.4rem] items-center justify-center rounded-full transition ${
                        view === "grid"
                          ? "bg-foudre-green text-foudre-paper shadow-sm"
                          : "text-foudre-green/45 hover:text-foudre-green"
                      }`}
                    >
                      <GridIcon />
                    </button>
                    <button
                      type="button"
                      aria-label="List view"
                      onClick={() => setView("list")}
                      className={`flex h-[3.4rem] w-[3.4rem] items-center justify-center rounded-full transition ${
                        view === "list"
                          ? "bg-foudre-green text-foudre-paper shadow-sm"
                          : "text-foudre-green/45 hover:text-foudre-green"
                      }`}
                    >
                      <ListIcon />
                    </button>
                  </div>
                </div>
              </div>

              {filteredProducts.length > 0 ? (
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={view}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                    className={`mt-6 grid gap-3 ${
                      view === "grid"
                        ? "grid-cols-3 desk:grid-cols-4"
                        : "grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
                    }`}
                  >
                    {filteredProducts.map((product) =>
                      view === "grid" ? (
                        <GridProductCard key={product.id} product={product} />
                      ) : (
                        <ListProductCard key={product.id} product={product} />
                      ),
                    )}
                  </motion.div>
                </AnimatePresence>
              ) : (
                <div className="mt-6 rounded-[3rem] border border-dashed border-foudre-green/20 bg-foudre-cream/45 px-6 py-16 text-center">
                  <p className="font-display text-[3.6rem] leading-none text-foudre-green">
                    No match yet
                  </p>
                  <p className="tx-p mt-3 text-foudre-green/60">
                    Try a broader search or clear the active filter.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <HomeFooter />
    </div>
  );
}

/* ── Compact grid card (3-col on mobile) ── */
function GridProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-foudre-green/8 bg-white shadow-[0_0.8rem_2.4rem_rgba(61,43,0,0.07)]">
      <Link href={product.href} className="block">
        <div
          className="relative aspect-[3/4] overflow-hidden"
          style={{
            background: `linear-gradient(180deg, ${product.bg}24 0%, ${product.accentBg}75 100%)`,
          }}
        >
          <Image
            src={product.stories[0]}
            alt={product.name}
            fill
            sizes="(min-width: 961px) 22vw, 33vw"
            className="object-cover object-center transition-transform duration-500 hover:scale-[1.04]"
          />
          <div className="absolute left-2 top-2 rounded-full bg-foudre-paper/88 px-2 py-1 text-[0.9rem] font-semibold uppercase tracking-[0.12em] text-foudre-green">
            {product.category}
          </div>
        </div>
      </Link>
      <div className="px-3 pb-3 pt-2">
        <h3 className="font-display text-[1.6rem] leading-none text-foudre-green desk:text-[2.2rem]">
          {product.name}
        </h3>
        <div className="mt-1 flex items-center justify-between gap-1">
          <p className="text-[1.1rem] font-semibold text-foudre-green/55">
            {product.price}
          </p>
          <Link
            href={product.href}
            className="inline-flex h-[2.8rem] w-[2.8rem] shrink-0 items-center justify-center rounded-full bg-foudre-cream text-foudre-green transition hover:bg-foudre-pink hover:text-foudre-paper"
            aria-label={`View ${product.name}`}
          >
            <ArrowIcon small />
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ── Full list card (single column on mobile) ── */
function ListProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <article className="overflow-hidden rounded-[3rem] border border-foudre-green/8 bg-white shadow-[0_2rem_5rem_rgba(61,43,0,0.08)]">
      <Link href={product.href} className="block">
        <div
          className="relative aspect-[4/5] overflow-hidden"
          style={{
            background: `linear-gradient(180deg, ${product.bg}24 0%, ${product.accentBg}75 100%)`,
          }}
        >
          <Image
            src={product.stories[0]}
            alt={product.name}
            fill
            sizes="(min-width: 1280px) 22vw, (min-width: 768px) 40vw, 92vw"
            className="object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
          />
          <div className="absolute left-4 top-4 rounded-full bg-foudre-paper/90 px-4 py-2 text-[1.1rem] font-semibold uppercase tracking-[0.16em] text-foudre-green">
            {product.category}
          </div>
        </div>
      </Link>
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-[2.8rem] leading-[0.9] text-foudre-green">
              {product.name}
            </h3>
            <p className="mt-2 text-[1.3rem] font-semibold text-foudre-green/55">
              {product.price}
            </p>
          </div>
          <Link
            href={product.href}
            className="inline-flex h-[4.2rem] w-[4.2rem] shrink-0 items-center justify-center rounded-full border border-foudre-green/10 text-foudre-green transition hover:border-foudre-pink hover:bg-foudre-pink hover:text-foudre-paper"
            aria-label={`View ${product.name}`}
          >
            <ArrowIcon />
          </Link>
        </div>
        <p className="tx-p min-h-[5.8rem] text-foudre-green/65">
          {product.excerpt}
        </p>
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-foudre-cream px-3 py-2 text-[1.1rem] font-semibold text-foudre-green/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ── View toggle icons ── */
function GridIcon() {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="currentColor"
      aria-hidden
      className="h-[1.6rem] w-[1.6rem]"
    >
      <rect x="1" y="1" width="6" height="6" rx="1.2" />
      <rect x="11" y="1" width="6" height="6" rx="1.2" />
      <rect x="1" y="11" width="6" height="6" rx="1.2" />
      <rect x="11" y="11" width="6" height="6" rx="1.2" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden
      className="h-[1.6rem] w-[1.6rem]"
    >
      <line x1="1" y1="4.5" x2="17" y2="4.5" />
      <line x1="1" y1="9" x2="17" y2="9" />
      <line x1="1" y1="13.5" x2="17" y2="13.5" />
    </svg>
  );
}

function PromoImageCard({
  product,
  className,
  priority = false,
}: {
  product: (typeof products)[number];
  className: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`absolute w-[15rem] overflow-hidden rounded-[2.4rem] border border-foudre-paper/70 bg-foudre-paper p-2 shadow-[0_2rem_4rem_rgba(61,43,0,0.14)] desk:w-[19rem] ${className}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem]">
        <Image
          src={product.stories[0]}
          alt={product.name}
          fill
          priority={priority}
          sizes="(min-width: 961px) 190px, 150px"
          className="object-cover"
        />
      </div>
      <div className="px-2 pb-1 pt-3">
        <p className="font-display text-[2rem] leading-none text-foudre-green">
          {product.name}
        </p>
        <p className="mt-2 text-[1.1rem] font-semibold uppercase tracking-[0.18em] text-foudre-green/45">
          {product.category}
        </p>
      </div>
    </div>
  );
}

function ArrowIcon({ small = false }: { small?: boolean }) {
  const size = small ? "h-[1.4rem] w-[1.4rem]" : "h-[1.8rem] w-[1.8rem]";
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      className={size}
    >
      <path d="M7 17 17 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
