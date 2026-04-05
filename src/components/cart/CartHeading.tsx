"use client";

import { useRef } from "react";

import { gsap, useGSAP } from "@/lib/gsap";

export default function CartHeading({ itemCount }: { itemCount: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".cart-heading-inner", {
        yPercent: 15,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="py-[6rem] desk:py-[8rem]">
      <div className="cart-heading-inner">
        <div className="chip-bubble mb-6 inline-flex">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
            className="h-[1.4rem] w-[1.4rem]"
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          {itemCount} item{itemCount !== 1 ? "s" : ""}
        </div>
        <h1 className="tx-xl whitespace-pre-line text-foudre-green">
          {"YOUR\nCART"}
        </h1>
        <p className="tx-p mt-4 text-foudre-green/60">
          Review your items before checkout.
        </p>
      </div>
    </div>
  );
}
