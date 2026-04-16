import { notFound } from "next/navigation";

import HomeFooter from "@/components/home/HomeFooter";
import FloatingControls from "@/components/persistent/FloatingControls";
import ProductDetail from "@/components/shop/ProductDetail";
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
    <div className="min-h-screen bg-foudre-paper pb-12 pt-[11.2rem] desk:pt-[11rem]">
      <FloatingControls />

      <main className="grid-24 pb-[8rem]">
        <div className="col-span-24">
          <ProductDetail product={product} />
        </div>
      </main>

      <HomeFooter />
    </div>
  );
}
