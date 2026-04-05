"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import BoltMark from "@/components/shared/BoltMark";

export default function OrderConfirmation({ email }: { email?: string }) {
  const lines = [
    {
      content: "THANK\nYOU!",
      className: "tx-xl whitespace-pre-line text-foudre-paper",
    },
    { content: "Order #DMG-2025-001", isChip: true },
    {
      content: `A confirmation email has been sent to ${email || "you@example.com"}.`,
      className: "tx-p text-foudre-paper/70",
    },
  ];

  return (
    <div className="relative flex min-h-screen items-center overflow-hidden bg-foudre-green px-6 py-24 desk:px-12">
      <div className="pointer-events-none absolute right-[-8%] top-1/2 w-[38rem] -translate-y-1/2 text-foudre-cream/35 desk:w-[60rem]">
        <BoltMark />
      </div>

      <div className="relative z-10 flex max-w-[72rem] flex-col items-start gap-6">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3 + index * 0.15,
              duration: 0.7,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            {line.isChip ? (
              <span className="chip-bubble bg-foudre-pink-soft text-foudre-green">
                {line.content}
              </span>
            ) : (
              <p className={line.className}>{line.content}</p>
            )}
          </motion.div>
        ))}

        <div className="mt-6 flex flex-col gap-4 desk:flex-row">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-[var(--radius-lg)] bg-foudre-pink px-8 py-4 tx-p font-bold text-foudre-paper"
            >
              → Back to home
            </Link>
          </motion.div>

          <Link
            href="/shop"
            className="tx-p self-center text-foudre-paper/60 underline underline-offset-4 transition-colors hover:text-foudre-paper"
          >
            → Keep shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
