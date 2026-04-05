"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function HeartIcon({ filled }: { filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[1.6rem] w-[1.6rem]"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
    </svg>
  );
}

interface WishlistButtonProps {
  accentColor: string;
}

export default function WishlistButton({ accentColor }: WishlistButtonProps) {
  const [saved, setSaved] = useState(false);
  const [particles, setParticles] = useState<number[]>([]);

  const handleSave = () => {
    setSaved(true);
    const ids = Array.from({ length: 6 }, (_, index) => Date.now() + index);
    setParticles((prev) => [...prev, ...ids]);
    window.setTimeout(() => {
      setParticles((prev) => prev.filter((id) => !ids.includes(id)));
    }, 1200);
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {particles.map((id, index) => (
          <motion.div
            key={id}
            className="pointer-events-none absolute bottom-full left-1/2"
            style={{ color: accentColor }}
            initial={{ y: 0, x: (index - 2.5) * 10, opacity: 1, scale: 1 }}
            animate={{ y: -60, opacity: 0, scale: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: index * 0.06 }}
          >
            <HeartIcon filled />
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.button
        type="button"
        className="like-btn"
        style={{
          backgroundColor: saved ? accentColor : "transparent",
          border: `2px solid ${accentColor}`,
          color: saved ? "var(--color-foudre-paper)" : accentColor,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        onClick={handleSave}
        aria-label="Save product"
      >
        <HeartIcon filled={saved} />
      </motion.button>
    </div>
  );
}
