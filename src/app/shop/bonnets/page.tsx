import CategoryLanding from "@/components/shop/CategoryLanding";
import { products } from "@/data/products";

export default function BonnetsPage() {
  return (
    <CategoryLanding
      eyebrow="Bonnets"
      title="Satin care with a stronger point of view."
      description="The bonnet line is built around one core product with multiple style options, so customers can browse the looks they want without treating each colorway like a separate item."
      products={products.filter((product) => product.category === "Bonnets")}
    />
  );
}
