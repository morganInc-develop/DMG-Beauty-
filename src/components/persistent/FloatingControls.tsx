"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { motion } from "framer-motion";

import { getCartCount, useCart } from "@/context/CartContext";
import { gsap } from "@/lib/gsap";
import MenuButton from "./MenuButton";
import NavOverlay from "./NavOverlay";

export default function FloatingControls() {
  const [navOpen, setNavOpen] = useState(false);
  const [lookbookActive, setLookbookActive] = useState(false);
  const { state } = useCart();
  const count = getCartCount(state);

  useEffect(() => {
    const handler = (e: Event) => {
      setLookbookActive((e as CustomEvent<{ open: boolean }>).detail.open);
    };
    window.addEventListener("lookbook:dialog", handler);
    return () => window.removeEventListener("lookbook:dialog", handler);
  }, []);

  useEffect(() => {
    gsap.set(document.documentElement, {
      overflow: navOpen ? "hidden" : "auto",
    });

    return () => {
      gsap.set(document.documentElement, { clearProps: "overflow" });
    };
  }, [navOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      setNavOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <motion.div
        className="fixed left-[3rem] top-[2rem] z-[200] max-[960px]:left-[1.5rem] max-[960px]:top-[calc(env(safe-area-inset-top)+1.5rem)]"
        animate={{
          opacity: lookbookActive ? 0 : 1,
          pointerEvents: lookbookActive ? "none" : "auto",
        }}
        transition={{ duration: 0.2 }}
      >
        <MenuButton
          isOpen={navOpen}
          onClick={() => setNavOpen((value) => !value)}
        />
      </motion.div>

      <motion.div
        className="fixed right-[3rem] top-[2rem] z-[200] max-[960px]:right-[1.5rem] max-[960px]:top-[calc(env(safe-area-inset-top)+1.5rem)]"
        animate={{
          opacity: lookbookActive ? 0 : 1,
          pointerEvents: lookbookActive ? "none" : "auto",
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.93 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <Link
            href="/cart"
            className="btn-circle relative"
            aria-label="View cart"
          >
            <CartIcon />
            {count > 0 ? (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -right-1 -top-1 flex h-[1.8rem] w-[1.8rem] items-center justify-center rounded-full bg-foudre-pink text-[1rem] font-bold text-foudre-paper"
              >
                {count}
              </motion.span>
            ) : null}
          </Link>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {navOpen ? <NavOverlay onClose={() => setNavOpen(false)} /> : null}
      </AnimatePresence>
    </>
  );
}

function CartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      className="h-[2.6rem] w-[2.6rem]"
    >
      <path
        d="M3 5h2l2.2 9.2a1 1 0 0 0 1 .8H18a1 1 0 0 0 1-.8L21 8H7"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="19" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="17" cy="19" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}
