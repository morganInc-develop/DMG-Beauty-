"use client";

import { useRef } from "react";
import { AnimatePresence } from "framer-motion";

import HomeFooter from "@/components/home/HomeFooter";
import CartEmpty from "@/components/cart/CartEmpty";
import CartHeading from "@/components/cart/CartHeading";
import CartItem from "@/components/cart/CartItem";
import FreeShippingBar from "@/components/cart/FreeShippingBar";
import OrderSummaryPanel from "@/components/cart/OrderSummaryPanel";
import FloatingControls from "@/components/persistent/FloatingControls";
import { useCart } from "@/context/CartContext";
import { gsap, useGSAP } from "@/lib/gsap";

export default function CartPage() {
  const { state } = useCart();
  const pageRef = useRef<HTMLDivElement>(null);
  const hasItems = state.items.length > 0;

  useGSAP(
    () => {
      gsap.from(".cart-item-shell", {
        yPercent: 10,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from(".order-summary", {
        yPercent: 6,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.5,
      });
    },
    { scope: pageRef, dependencies: [state.items.length] },
  );

  return (
    <div ref={pageRef} className="min-h-screen bg-foudre-paper">
      <FloatingControls />

      <div className="grid-24">
        <div className="col-span-24 desk:col-span-15 desk:pr-8">
          <CartHeading itemCount={state.items.length} />
          {hasItems ? <FreeShippingBar /> : null}

          <AnimatePresence mode="popLayout">
            {hasItems ? (
              state.items.map((item) => <CartItem key={item.id} item={item} />)
            ) : (
              <CartEmpty key="empty" />
            )}
          </AnimatePresence>
        </div>

        {hasItems ? (
          <div className="order-summary col-span-24 py-[6rem] desk:col-span-9 desk:col-start-16 desk:py-[8rem]">
            <OrderSummaryPanel ctaLabel="Checkout →" ctaHref="/checkout" />
          </div>
        ) : null}
      </div>
      <HomeFooter />
    </div>
  );
}
