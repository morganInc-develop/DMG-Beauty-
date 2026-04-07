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
        <div className="relative aspect-[3/4] w-[7.2rem] shrink-0 overflow-hidden rounded-[var(--radius-md)] desk:w-[12rem]">
          <Image src={item.img} fill className="object-cover" alt={item.name} />
        </div>

        <div className="flex flex-1 flex-col gap-2 desk:gap-3">
          <span className="chip-bubble self-start py-[0.5rem] text-[1rem] desk:py-[0.8rem] desk:text-[1.2rem]">
            {item.category}
          </span>

          <h3
            className="whitespace-pre-line leading-[0.88] text-foudre-green"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            {item.name}
          </h3>

          <p className="tx-p text-foudre-green/55">{item.variant}</p>

          <div className="mt-1 flex flex-wrap items-center justify-between gap-3 desk:mt-2 desk:gap-4">
            <div className="flex items-center gap-2 desk:gap-3">
              <motion.button
                type="button"
                className="btn-circle h-[3rem] w-[3rem] border border-foudre-green/20 bg-foudre-paper text-[1.8rem] font-light text-foudre-green desk:h-[3.6rem] desk:w-[3.6rem] desk:text-[2rem]"
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
                  className="w-[2.4rem] text-center text-[2rem] font-bold text-foudre-green desk:w-[3rem] desk:text-[3.2rem]"
                >
                  {item.quantity}
                </motion.span>
              </AnimatePresence>

              <motion.button
                type="button"
                className="btn-circle h-[3rem] w-[3rem] bg-foudre-green text-[1.8rem] font-light text-foudre-paper desk:h-[3.6rem] desk:w-[3.6rem] desk:text-[2rem]"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                onClick={() => dispatch({ type: "INCREMENT", id: item.id })}
                aria-label="Increase quantity"
              >
                +
              </motion.button>
            </div>

            <div className="flex items-center gap-3 desk:gap-4">
              <AnimatePresence mode="wait">
                <motion.span
                  key={item.price * item.quantity}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  className="text-[2rem] font-bold text-foudre-green desk:text-[3.2rem]"
                >
                  {formatPrice(item.price * item.quantity)}
                </motion.span>
              </AnimatePresence>

              <motion.button
                type="button"
                className="rounded-full border border-foudre-green/20 bg-transparent px-3 py-1.5 text-[1.1rem] font-bold text-foudre-green/50 desk:px-4 desk:py-2 desk:text-[1.2rem]"
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
