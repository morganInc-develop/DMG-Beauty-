"use client";

import type { MouseEvent } from "react";

import { QRCodeSVG } from "qrcode.react";
import { motion } from "framer-motion";

type WhatsappPopinProps = {
  onClose: () => void;
};

const whatsappHref = "https://wa.me/33600000000?text=Hello%20DMG%20Beauty";

export default function WhatsappPopin({ onClose }: WhatsappPopinProps) {
  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <motion.div
        className="fixed inset-0 z-[149]"
        style={{ backgroundColor: "rgba(219, 60, 138, 0.25)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        onClick={onClose}
      />

      <motion.div
        className="fixed inset-0 z-[160] flex items-center justify-center px-[1.5rem] desk:justify-end desk:px-[6rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={handleBackdropClick}
      >
        <motion.div
          className="relative flex w-[88vw] max-w-[42rem] flex-col items-center gap-6 rounded-[var(--radius-lg)] bg-foudre-green p-[4rem] text-center desk:w-full desk:max-w-[42rem]"
          initial={{ opacity: 0, scale: 0.88, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 10 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
        >
          <motion.button
            type="button"
            className="btn-circle absolute right-[1.6rem] top-[1.6rem]"
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            aria-label="Close WhatsApp popin"
          >
            <span className="text-[2rem] font-light leading-none text-foudre-green">
              ×
            </span>
          </motion.button>

          <div className="flex h-[14rem] w-[14rem] items-center justify-center rounded-[var(--radius-md)] bg-white p-4">
            <QRCodeSVG
              value={whatsappHref}
              size={180}
              bgColor="#ffffff"
              fgColor="#00522d"
              includeMargin={false}
              className="h-full w-full"
            />
          </div>

          <h2 className="tx-md whitespace-pre-line text-center leading-[0.85] text-foudre-paper">
            {"CHAT WITH\nUS ON\nWHATSAPP?"}
          </h2>

          <p className="tx-p max-w-[32rem] text-center text-foudre-paper/80">
            We&apos;re real people who actually reply. Scan the QR code, send us
            a message, and we&apos;ll get back to you fast.
          </p>

          <motion.a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-[var(--radius-lg)] px-8 py-4 tx-p font-bold text-foudre-green"
            style={{ backgroundColor: "var(--color-foudre-pink-soft)" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
          >
            Message DMG Beauty
          </motion.a>
        </motion.div>
      </motion.div>
    </>
  );
}
