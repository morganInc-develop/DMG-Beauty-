"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ReturnLink() {
  return (
    <motion.div
      className="fixed left-[1.5rem] top-1/2 z-50 hidden -translate-y-1/2 desk:block"
      whileHover={{ x: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <Link
        href="/"
        className="tx-l font-bold uppercase tracking-[0.28em] text-foudre-paper/70 transition-colors hover:text-foudre-paper [writing-mode:vertical-rl] rotate-180"
      >
        ← Back to home
      </Link>
    </motion.div>
  );
}
