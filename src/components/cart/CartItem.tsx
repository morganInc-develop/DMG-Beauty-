"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { useCart } from "@/context/CartContext";
import { formatPrice, type CartItem as CartItemType } from "@/data/cart";

export default function CartItem({ item }: { item: CartItemType }) {
  const { dispatch } = useCart();

  return (
    <div className="cart-item-shell">
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{
          opacity: 0,
          x: -40,
          transition: { duration: 0.3, ease: "easeIn" },
        }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="cart-item flex items-start gap-5 border-t border-foudre-green/15 py-8 desk:gap-8"
      >
        <div className="relative aspect-[3/4] w-[9rem] shrink-0 overflow-hidden rounded-[var(--radius-md)] desk:w-[12rem]">
          <Image src={item.img} fill className="object-cover" alt={item.name} />
        </div>

        <div className="flex flex-1 flex-col gap-3">
          <span className="chip-bubble self-start">{item.category}</span>

          <h3 className="tx-md whitespace-pre-line leading-[0.85] text-foudre-green">
            {item.name}
          </h3>

          <p className="tx-p text-foudre-green/55">{item.variant}</p>

          <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <motion.button
                type="button"
                className="btn-circle h-[3.6rem] w-[3.6rem] border border-foudre-green/20 bg-foudre-paper text-[2rem] font-light text-foudre-green"
                whileHover={{
                  scale: 1.08,
                  backgroundColor: "var(--color-foudre-green)",
                  color: "var(--color-foudre-paper)",
                }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                onClick={() => dispatch({ type: "DECREMENT", id: item.id })}
                aria-label="Decrease quantity"
              >
                −
              </motion.button>

              <AnimatePresence mode="wait">
                <motion.span
                  key={item.quantity}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="tx-sm w-[3rem] text-center text-foudre-green"
                >
                  {item.quantity}
                </motion.span>
              </AnimatePresence>

              <motion.button
                type="button"
                className="btn-circle h-[3.6rem] w-[3.6rem] bg-foudre-green text-[2rem] font-light text-foudre-paper"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                onClick={() => dispatch({ type: "INCREMENT", id: item.id })}
                aria-label="Increase quantity"
              >
                +
              </motion.button>
            </div>

            <div className="flex items-center gap-4">
              <AnimatePresence mode="wait">
                <motion.span
                  key={item.price * item.quantity}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  className="tx-sm text-foudre-green"
                >
                  {formatPrice(item.price * item.quantity)}
                </motion.span>
              </AnimatePresence>

              <motion.button
                type="button"
                className="rounded-full border border-foudre-green/20 bg-transparent px-4 py-2 tx-l font-bold text-foudre-green/50"
                whileHover={{
                  scale: 1.08,
                  borderColor: "var(--color-foudre-pink)",
                  color: "var(--color-foudre-pink)",
                }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                onClick={() => dispatch({ type: "REMOVE", id: item.id })}
                aria-label="Remove item"
              >
                × remove
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
