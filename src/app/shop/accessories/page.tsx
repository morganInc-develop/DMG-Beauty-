import CategoryLanding from "@/components/shop/CategoryLanding";
import { products } from "@/data/products";

export default function AccessoriesPage() {
  return (
    <CategoryLanding
      eyebrow="Accessories"
      title="Smaller pieces, same clear reminder."
      description="The accessories lane holds the add-ons that still carry the brand message clearly, from the PUSH trucker to the engraved P.U.S.H heart keychain."
      products={products.filter(
        (product) => product.category === "Accessories",
      )}
    />
  );
}
