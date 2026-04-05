"use client";

import { useRef } from "react";

import { useCart } from "@/context/CartContext";
import { FREE_SHIPPING_THRESHOLD, formatPrice, subtotal } from "@/data/cart";
import { gsap, useGSAP } from "@/lib/gsap";

export default function FreeShippingBar() {
  const barRef = useRef<HTMLDivElement>(null);
  const { state } = useCart();
  const total = subtotal(state.items);
  const progress = Math.min(100, (total / FREE_SHIPPING_THRESHOLD) * 100);
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - total);
  const isFree = total >= FREE_SHIPPING_THRESHOLD;

  useGSAP(
    () => {
      gsap.to(barRef.current, {
        width: `${progress}%`,
        duration: 1.2,
        ease: "power3.out",
      });
    },
    { dependencies: [progress] },
  );

  return (
    <div className="mb-8 w-full py-4">
      <p className="tx-l mb-3 text-foudre-green/60">
        Free shipping on orders over {formatPrice(FREE_SHIPPING_THRESHOLD)}
      </p>

      <div className="shipping-track">
        <div
          ref={barRef}
          className="h-full rounded-full"
          style={{
            width: "0%",
            backgroundColor: isFree
              ? "var(--color-foudre-pink)"
              : "var(--color-foudre-green)",
          }}
        />
      </div>

      <p className="tx-p mt-2 font-bold text-foudre-green">
        {isFree
          ? "✓ Free shipping unlocked!"
          : `Add ${formatPrice(remaining)} more for free shipping.`}
      </p>
    </div>
  );
}
