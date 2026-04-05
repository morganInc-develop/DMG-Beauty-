"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import BoltMark from "@/components/shared/BoltMark";

export default function CartEmpty() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="flex flex-col items-start gap-6 py-[8rem]"
    >
      <div className="w-[12rem] text-foudre-gray">
        <BoltMark />
      </div>

      <h2 className="tx-xl leading-[0.85] text-foudre-green">
        YOUR CART
        <br />
        <span className="text-foudre-pink">IS EMPTY.</span>
      </h2>

      <p className="tx-p max-w-[32rem] text-foudre-green/60">
        Nothing here yet.
      </p>

      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 350, damping: 20 }}
      >
        <Link
          href="/shop"
          className="inline-flex items-center gap-3 rounded-[var(--radius-lg)] bg-foudre-green px-8 py-4 tx-p font-bold text-foudre-paper"
        >
          → Shop All Products
        </Link>
      </motion.div>
    </motion.div>
  );
}
