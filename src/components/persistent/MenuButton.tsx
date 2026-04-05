"use client";

import { AnimatePresence, motion } from "framer-motion";

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const spring = { type: "spring" as const, stiffness: 400, damping: 20 };

export default function MenuButton({ isOpen, onClick }: MenuButtonProps) {
  return (
    <motion.button
      type="button"
      className="btn-circle relative overflow-hidden"
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.93 }}
      transition={spring}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="nav-menu"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? (
          <motion.span
            key="close"
            initial={{ opacity: 0, rotate: -45, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.6 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="absolute inset-0 flex items-center justify-center text-[3rem] font-light leading-none text-foudre-green"
          >
            ×
          </motion.span>
        ) : (
          <motion.span
            key="menu"
            initial={{ opacity: 0, rotate: 45, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -45, scale: 0.6 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              aria-hidden="true"
            >
              <rect
                y="0"
                width="18"
                height="2"
                rx="1"
                fill="var(--color-foudre-green)"
              />
              <rect
                y="5"
                width="18"
                height="2"
                rx="1"
                fill="var(--color-foudre-green)"
              />
              <rect
                y="10"
                width="18"
                height="2"
                rx="1"
                fill="var(--color-foudre-green)"
              />
            </svg>
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
