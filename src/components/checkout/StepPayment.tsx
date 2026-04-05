"use client";

import { motion } from "framer-motion";

export default function StepPayment({
  data,
  onChange,
  onSubmit,
  onBack,
}: {
  data: Record<string, string>;
  onChange: (field: string, val: string) => void;
  onSubmit: () => void;
  onBack: () => void;
}) {
  return (
    <motion.div
      key="step-3"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    >
      <h2 className="tx-lg mb-10 whitespace-pre-line text-foudre-green">
        {"PAYMENT."}
      </h2>

      <div className="flex flex-col gap-6">
        <div>
          <label htmlFor="cardNumber" className="checkout-label">
            Card number <span className="text-foudre-pink">*</span>
          </label>
          <input
            id="cardNumber"
            type="text"
            inputMode="numeric"
            placeholder="1234 5678 9012 3456"
            value={data.cardNumber || ""}
            onChange={(event) => onChange("cardNumber", event.target.value)}
            className="checkout-input"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 desk:grid-cols-2">
          <div>
            <label htmlFor="cardExpiry" className="checkout-label">
              Expiry (MM/YY) <span className="text-foudre-pink">*</span>
            </label>
            <input
              id="cardExpiry"
              type="text"
              placeholder="MM/YY"
              value={data.cardExpiry || ""}
              onChange={(event) => onChange("cardExpiry", event.target.value)}
              className="checkout-input"
            />
          </div>
          <div>
            <label htmlFor="cardCvv" className="checkout-label">
              CVV <span className="text-foudre-pink">*</span>
            </label>
            <input
              id="cardCvv"
              type="password"
              placeholder="•••"
              value={data.cardCvv || ""}
              onChange={(event) => onChange("cardCvv", event.target.value)}
              className="checkout-input"
            />
          </div>
        </div>

        <div>
          <label htmlFor="cardName" className="checkout-label">
            Name on card <span className="text-foudre-pink">*</span>
          </label>
          <input
            id="cardName"
            type="text"
            placeholder="Marie Martin"
            value={data.cardName || ""}
            onChange={(event) => onChange("cardName", event.target.value)}
            className="checkout-input"
          />
        </div>

        <div className="mt-4 flex items-center gap-3 rounded-[var(--radius-md)] bg-foudre-paper p-4">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
            className="h-[2rem] w-[2rem] shrink-0 text-foudre-green"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <p className="tx-l text-foudre-green/60">
            100% secure payment. Your data is encrypted and protected.
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-4 desk:flex-row">
          <motion.button
            type="button"
            onClick={onBack}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            className="rounded-[var(--radius-lg)] border border-foudre-green/20 px-10 py-5 tx-p font-bold text-foudre-green"
          >
            ← Back
          </motion.button>

          <motion.button
            type="button"
            className="w-full rounded-[var(--radius-lg)] bg-foudre-pink px-8 py-6 tx-p font-bold text-foudre-paper transition-opacity hover:opacity-90"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            onClick={onSubmit}
          >
            Place order →
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
