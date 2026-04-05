"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { useCart } from "@/context/CartContext";
import {
  FREE_SHIPPING_THRESHOLD,
  SHIPPING_STANDARD,
  formatPrice,
  subtotal,
} from "@/data/cart";

interface OrderSummaryPanelProps {
  ctaLabel: string;
  ctaHref?: string;
  onSubmit?: () => void;
  isCheckout?: boolean;
  shippingCost?: number;
  ctaDisabled?: boolean;
}

export default function OrderSummaryPanel({
  ctaLabel,
  ctaHref,
  onSubmit,
  isCheckout = false,
  shippingCost,
  ctaDisabled = false,
}: OrderSummaryPanelProps) {
  const { state } = useCart();
  const sub = subtotal(state.items);
  const computedShipping =
    shippingCost ?? (sub >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_STANDARD);
  const total = sub + computedShipping;
  const isFree = computedShipping === 0;

  const actionClassName =
    "flex w-full items-center justify-center gap-3 rounded-[var(--radius-lg)] bg-foudre-pink px-8 py-5 tx-p font-bold text-foudre-paper transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-45";

  return (
    <div className="summary-card flex flex-col gap-6 desk:sticky desk:top-[3rem]">
      <p className="tx-l uppercase tracking-[0.24em] text-foudre-paper/60">
        Order Summary
      </p>

      <div className="flex flex-col gap-3">
        {state.items.map((item) => (
          <div key={item.id} className="flex items-start justify-between gap-4">
            <span className="tx-p text-foudre-paper/80">
              {item.name.replace("\n", " ")} × {item.quantity}
            </span>
            <span className="tx-p shrink-0 text-foudre-paper">
              {formatPrice(item.price * item.quantity)}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-foudre-paper/20" />

      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="tx-p text-foudre-paper/70">Subtotal</span>
          <span className="tx-p text-foudre-paper">{formatPrice(sub)}</span>
        </div>
        <div className="flex justify-between">
          <span className="tx-p text-foudre-paper/70">Shipping</span>
          <span
            className="tx-p"
            style={{
              color: isFree
                ? "var(--color-foudre-pink-soft)"
                : "var(--color-foudre-paper)",
            }}
          >
            {isFree ? (
              <span className="inline-flex items-center gap-1">
                Free
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-[1.4rem] w-[1.4rem]"
                >
                  <path d="M12 2l1.5 4.5H18l-3.75 2.7 1.5 4.5L12 11.1l-3.75 2.6 1.5-4.5L6 6.5h4.5L12 2Z" />
                </svg>
              </span>
            ) : (
              formatPrice(computedShipping)
            )}
          </span>
        </div>
      </div>

      <div className="border-t border-foudre-paper/20" />

      <div className="flex items-baseline justify-between">
        <span className="tx-p text-foudre-paper/70">Total</span>
        <span className="tx-md text-foudre-paper">{formatPrice(total)}</span>
      </div>

      <motion.div
        whileHover={ctaDisabled ? {} : { scale: 1.03 }}
        whileTap={ctaDisabled ? {} : { scale: 0.97 }}
        transition={{ type: "spring", stiffness: 350, damping: 20 }}
      >
        {ctaHref ? (
          <Link
            href={ctaHref}
            className={actionClassName}
            aria-disabled={ctaDisabled}
          >
            {ctaLabel}
          </Link>
        ) : (
          <button
            type="button"
            onClick={onSubmit}
            disabled={ctaDisabled}
            className={actionClassName}
          >
            {ctaLabel}
          </button>
        )}
      </motion.div>

      {!isCheckout && (
        <Link
          href="/shop"
          className="tx-l text-center text-foudre-paper/40 underline underline-offset-4 transition-colors hover:text-foudre-paper/70"
        >
          ← Continue shopping
        </Link>
      )}
    </div>
  );
}
