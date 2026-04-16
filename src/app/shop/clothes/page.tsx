import CategoryLanding from "@/components/shop/CategoryLanding";
import { products } from "@/data/products";

export default function ClothesPage() {
  return (
    <CategoryLanding
      eyebrow="Apparel"
      title="Graphic pieces that carry the message."
      description="DMG apparel now centers the actual products in the collection: the statement tee and the hoodie, both designed to keep faith language visible in everyday wear."
      products={products.filter((product) => product.category === "Apparel")}
    />
  );
}
