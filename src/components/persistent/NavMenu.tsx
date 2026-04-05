"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "SHOP", href: "/shop" },
  { label: "ABOUT", href: "/about" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: <InstagramIcon />,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    icon: <TikTokIcon />,
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com",
    icon: <PinterestIcon />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: <LinkedInIcon />,
  },
];

export default function NavMenu({ onClose }: { onClose: () => void }) {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = dialogRef.current;

    if (!container) {
      return;
    }

    const selectors = [
      "a[href]",
      "button:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
    ].join(",");

    const focusable = Array.from(
      container.querySelectorAll<HTMLElement>(selectors),
    );

    focusable[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") {
        return;
      }

      const currentFocusable = Array.from(
        container.querySelectorAll<HTMLElement>(selectors),
      );

      if (currentFocusable.length === 0) {
        return;
      }

      const first = currentFocusable[0];
      const last = currentFocusable[currentFocusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <motion.div
      id="nav-menu"
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Primary navigation"
      className="fixed inset-0 z-[150] overflow-hidden bg-foudre-green"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
    >
      <div
        className="pointer-events-none absolute right-[4%] top-1/2 -translate-y-1/2 select-none overflow-hidden max-[960px]:right-[1.5rem]"
        aria-hidden="true"
      >
        <div
          className="flex flex-col items-end leading-[0.82]"
          style={{ color: "var(--color-foudre-pink-soft)", opacity: 0.15 }}
        >
          <span className="tx-xxl">DMG</span>
          <span className="tx-xxl">BEAUTY</span>
        </div>
      </div>

      <nav
        aria-label="Primary navigation"
        className="absolute left-[3rem] top-1/2 flex -translate-y-[40%] flex-col gap-1 max-[960px]:left-[1.5rem]"
      >
        {navLinks.map((link, index) => {
          const baseHref = link.href.split("#")[0] || "/";
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : baseHref !== "/" && pathname.startsWith(baseHref);

          return (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.07,
                ease: [0.23, 1, 0.32, 1],
              }}
              whileHover={{ x: 10 }}
            >
              <Link
                href={link.href}
                onClick={onClose}
                className="group relative block py-[0.4rem] text-left tx-lg leading-[0.85] transition-opacity hover:opacity-80 focus:outline-none focus-visible:opacity-80"
                style={{
                  color: isActive
                    ? "var(--color-foudre-pink)"
                    : "var(--color-foudre-paper)",
                }}
              >
                {link.label}
                <motion.span
                  className="absolute bottom-[-0.4rem] left-0 h-[0.3rem] rounded-full bg-foudre-pink"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                />
              </Link>
            </motion.div>
          );
        })}
      </nav>

      <motion.div
        className="absolute bottom-[3rem] left-[3rem] flex items-center gap-4 max-[960px]:bottom-[8.8rem] max-[960px]:left-[1.5rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.55 }}
      >
        {socialLinks.map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="flex h-[3.6rem] w-[3.6rem] items-center justify-center rounded-full text-foudre-paper"
            style={{ backgroundColor: "rgba(255,248,246,0.15)" }}
            whileHover={{
              scale: 1.12,
              backgroundColor: "rgba(255,248,246,0.25)",
            }}
            whileTap={{ scale: 0.93 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.64 3c.2 1.68 1.15 3.32 2.67 4.3 1.01.66 2.1.97 3.19 1.01v2.76a8.29 8.29 0 0 1-3.1-.61v5.73c0 3.88-3.08 6.81-6.83 6.81A6.78 6.78 0 0 1 4 16.19c0-3.72 3.01-6.74 6.72-6.74.31 0 .58.02.86.07v2.81a4.3 4.3 0 0 0-.86-.09 3.95 3.95 0 0 0-3.94 3.95 3.99 3.99 0 0 0 4.27 3.95c2.08-.14 3.56-1.86 3.56-4.24V3h2.03Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.64 19.31c-.03-.79 0-1.73.2-2.58l1.38-5.84s-.35-.71-.35-1.75c0-1.64.95-2.86 2.13-2.86 1 0 1.49.75 1.49 1.65 0 1.01-.64 2.53-.98 3.93-.28 1.18.59 2.15 1.75 2.15 2.1 0 3.51-2.7 3.51-5.9 0-2.43-1.63-4.25-4.6-4.25-3.35 0-5.44 2.5-5.44 5.3 0 .96.29 1.64.74 2.17.21.25.24.35.17.64-.06.21-.19.72-.24.92-.08.3-.33.41-.61.3-1.7-.69-2.49-2.53-2.49-4.58 0-3.41 2.87-7.5 8.58-7.5 4.59 0 7.61 3.32 7.61 6.88 0 4.72-2.62 8.25-6.48 8.25-1.3 0-2.52-.7-2.94-1.5l-.8 3.12c-.29 1.09-.85 2.37-1.36 3.29A10 10 0 1 0 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3a1.97 1.97 0 1 0 0 3.94 1.97 1.97 0 0 0 0-3.94ZM20 13.14c0-3.4-1.82-4.98-4.25-4.98-1.96 0-2.84 1.08-3.33 1.84V8.5H9.06c.04.99 0 11.5 0 11.5h3.36v-6.42c0-.34.02-.69.13-.94.27-.69.88-1.4 1.9-1.4 1.34 0 1.88 1.02 1.88 2.51V20H20v-6.86Z" />
    </svg>
  );
}
