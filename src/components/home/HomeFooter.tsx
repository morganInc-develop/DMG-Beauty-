"use client";

import { FormEvent, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaTiktok,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";

import { gsap, useGSAP } from "@/lib/gsap";

export default function HomeFooter() {
  const containerRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      return;
    }

    setSubmitted(true);
  };

  useGSAP(
    () => {
      const section = containerRef.current;

      if (!section) {
        return;
      }

      gsap.from(".footer-wordmark", {
        yPercent: 40,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <footer
      ref={containerRef}
      id="contact"
      className="footer-section overflow-hidden bg-foudre-pink-soft pt-24 desk:pt-32"
    >
      <span id="footer" className="sr-only">
        Footer
      </span>
      <div className="grid-24">
        <div className="col-span-24">
          <div className="relative mx-auto w-full max-w-[42rem] pb-24">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-md)] shadow-[0_2rem_6rem_rgb(0_0_0_/_0.12)]">
              <Image
                src="https://picsum.photos/seed/dmg-footer-portrait/700/940"
                alt="DMG Beauty lookbook portrait"
                fill
                className="object-cover"
                sizes="(min-width: 961px) 42rem, 100vw"
              />
            </div>

            <motion.div
              className="absolute bottom-0 left-[8%] z-10 max-w-[36rem] rounded-[var(--radius-lg)] bg-foudre-pink p-8 text-foudre-paper shadow-[0_2rem_6rem_rgb(0_0_0_/_0.16)]"
              style={{ rotate: -4 }}
              whileHover={{ rotate: -1, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
            >
              <span className="tx-l block uppercase tracking-[0.24em] text-foudre-paper/60">
                New arrivals every season.
              </span>
              <h2 className="tx-md mt-2 whitespace-pre-line text-foudre-paper">
                {"JOIN THE\nWAITLIST."}
              </h2>
              <p className="tx-p mt-4 max-w-[28rem] text-foudre-paper/75">
                Be first to know about the next drop, restocks, and limited
                releases.
              </p>
              <form
                className="mt-6 flex flex-col gap-3"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (submitted) {
                      setSubmitted(false);
                    }
                  }}
                  className="checkout-input border-foudre-paper/20 bg-foudre-paper text-foudre-green placeholder:text-foudre-green/40"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-[var(--radius-lg)] bg-foudre-green px-8 py-4 tx-p font-bold text-foudre-paper transition-colors hover:bg-foudre-green/90"
                >
                  Sign up →
                </button>
                {submitted ? (
                  <p className="tx-l text-foudre-paper/70">
                    You&apos;re on the list.
                  </p>
                ) : null}
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Full-bleed wordmark */}
      <div className="overflow-hidden">
        <h2
          className="footer-wordmark select-none text-center font-black leading-none text-foudre-green"
          style={{ fontSize: "clamp(5rem, 22vw, 22rem)" }}
        >
          DMG
        </h2>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col gap-4 border-t border-foudre-green/20 px-6 py-5 desk:flex-row desk:items-center desk:justify-between desk:px-12">
        {/* Left: copyright + social icons */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="tx-l text-foudre-green/60">
            © {new Date().getFullYear()} DMG Beauty. All rights reserved.
          </span>
          <div className="flex items-center gap-3">
            {[
              {
                icon: FaInstagram,
                href: "https://instagram.com/dmgbeauty",
                label: "Instagram",
              },
              {
                icon: FaTiktok,
                href: "https://tiktok.com/@dmgbeauty",
                label: "TikTok",
              },
              {
                icon: FaPinterestP,
                href: "https://pinterest.com/dmgbeauty",
                label: "Pinterest",
              },
              {
                icon: FaLinkedinIn,
                href: "https://linkedin.com/company/dmgbeauty",
                label: "LinkedIn",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-foudre-green/20 text-foudre-green transition-colors hover:border-foudre-pink hover:text-foudre-pink"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: policy links */}
        <div className="flex flex-wrap gap-6">
          {[
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms & Conditions", href: "/terms" },
            { label: "Shipping Policy", href: "/shipping" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="tx-l text-foudre-green/60 transition-colors hover:text-foudre-green"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
