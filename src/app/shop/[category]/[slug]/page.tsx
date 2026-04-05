import Link from "next/link";
import { notFound } from "next/navigation";

import FloatingControls from "@/components/persistent/FloatingControls";
import { products } from "@/data/products";

type ProductPageProps = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

function matchesProductRoute(
  productHref: string,
  category: string,
  slug: string,
) {
  return productHref === `/shop/${category}/${slug}`;
}

export async function generateStaticParams() {
  return products.map((product) => {
    const [, , category, slug] = product.href.split("/");
    return { category, slug };
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category, slug } = await params;
  const product = products.find((entry) =>
    matchesProductRoute(entry.href, category, slug),
  );

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-foudre-paper">
      <FloatingControls />

      <div className="grid-24 pt-[12rem] pb-[8rem]">
        <div className="col-span-24 desk:col-span-15">
          <span className="chip-bubble bg-foudre-pink-soft text-foudre-green">
            {product.category}
          </span>
          <h1 className="tx-xl mt-6 whitespace-pre-line text-foudre-green">
            {product.nameLines.join("\n")}
          </h1>
          <p className="tx-md mt-6 text-foudre-green">{product.price}</p>
          <p className="tx-p mt-4 max-w-[48rem] text-foudre-green/65">
            {product.excerpt}
          </p>
          <p className="tx-p mt-6 max-w-[44rem] text-foudre-green/60">
            This product page is being prepared. You can explore the rest of the
            DMG Beauty collection now and check back shortly for the full edit.
          </p>
          <div className="mt-8 flex flex-col gap-4 desk:flex-row">
            <Link href="/shop" className="pill-cta">
              Back to shop →
            </Link>
            <Link
              href={`/shop/${category}`}
              className="tx-p self-center text-foudre-green/60 underline underline-offset-4 hover:text-foudre-green"
            >
              View {product.category}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
