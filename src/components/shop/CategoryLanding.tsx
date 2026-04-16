import Image from "next/image";
import Link from "next/link";

import HomeFooter from "@/components/home/HomeFooter";
import FloatingControls from "@/components/persistent/FloatingControls";
import type { Product } from "@/data/products";

export default function CategoryLanding({
  eyebrow,
  title,
  description,
  products,
}: {
  eyebrow: string;
  title: string;
  description: string;
  products: Product[];
}) {
  const heroProduct = products[0];

  return (
    <div className="min-h-screen bg-foudre-paper pb-12 pt-[11.2rem] desk:pt-[11rem]">
      <FloatingControls />

      <main className="space-y-10 px-4 desk:px-10">
        <section className="mx-auto max-w-[148rem] overflow-hidden rounded-[3rem] bg-foudre-cream px-6 py-8 desk:px-10 desk:py-10">
          <div className="grid gap-8 desk:grid-cols-[minmax(0,1fr)_36rem] desk:items-center">
            <div>
              <span className="chip-bubble bg-foudre-paper text-foudre-green">
                {eyebrow}
              </span>
              <h1 className="tx-xl mt-5 text-foudre-green">{title}</h1>
              <p className="tx-p mt-5 max-w-[54rem] text-foudre-green/68">
                {description}
              </p>
            </div>

            {heroProduct ? (
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[32rem] overflow-hidden rounded-[2.6rem]">
                <Image
                  src={heroProduct.stories[0]}
                  alt={heroProduct.name}
                  fill
                  sizes="(min-width: 961px) 32rem, 90vw"
                  className="object-cover"
                />
              </div>
            ) : null}
          </div>
        </section>

        <section className="mx-auto grid max-w-[148rem] gap-4 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-[2.6rem] border border-foudre-green/8 bg-white shadow-[0_1.6rem_3rem_rgba(61,43,0,0.08)]"
            >
              <Link href={product.href} className="block">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={product.stories[0]}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 92vw"
                    className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
              </Link>

              <div className="space-y-4 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[1.1rem] font-semibold uppercase tracking-[0.18em] text-foudre-green/45">
                      {product.category}
                    </p>
                    <h2 className="mt-2 font-display text-[2.8rem] leading-[0.9] text-foudre-green">
                      {product.name}
                    </h2>
                  </div>
                  <span className="text-[1.2rem] font-semibold text-foudre-green/55">
                    {product.price}
                  </span>
                </div>

                <p className="tx-p text-foudre-green/68">{product.excerpt}</p>

                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-foudre-cream px-3 py-2 text-[1.1rem] font-semibold text-foudre-green/68"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href={product.href} className="pill-cta inline-flex">
                  View product
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}
