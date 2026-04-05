"use client";

import { motion } from "framer-motion";

import { SHIPPING_EXPRESS, SHIPPING_STANDARD, formatPrice } from "@/data/cart";

const shippingOptions = [
  {
    id: "standard",
    label: "Standard",
    delay: "3–5 business days",
    price: SHIPPING_STANDARD,
  },
  {
    id: "express",
    label: "Express",
    delay: "1–2 business days",
    price: SHIPPING_EXPRESS,
  },
];

export default function StepShipping({
  data,
  onChange,
  shipping,
  setShipping,
  onNext,
  onBack,
}: {
  data: Record<string, string>;
  onChange: (field: string, val: string) => void;
  shipping: string;
  setShipping: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <motion.div
      key="step-2"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    >
      <h2 className="tx-lg mb-10 whitespace-pre-line text-foudre-green">
        {"SHIPPING."}
      </h2>

      <div className="flex flex-col gap-6">
        <div>
          <label htmlFor="streetAddress" className="checkout-label">
            Street address <span className="text-foudre-pink">*</span>
          </label>
          <input
            id="streetAddress"
            type="text"
            placeholder="12 Beauty Street"
            value={data.streetAddress || ""}
            onChange={(event) => onChange("streetAddress", event.target.value)}
            className="checkout-input"
          />
        </div>

        <div>
          <label htmlFor="addressLineTwo" className="checkout-label">
            Apt, suite, etc.
          </label>
          <input
            id="addressLineTwo"
            type="text"
            placeholder="Apartment, floor, building..."
            value={data.addressLineTwo || ""}
            onChange={(event) => onChange("addressLineTwo", event.target.value)}
            className="checkout-input"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 desk:grid-cols-2">
          <div>
            <label htmlFor="postalCode" className="checkout-label">
              ZIP / Postal code <span className="text-foudre-pink">*</span>
            </label>
            <input
              id="postalCode"
              type="text"
              placeholder="10001"
              value={data.postalCode || ""}
              onChange={(event) => onChange("postalCode", event.target.value)}
              className="checkout-input"
            />
          </div>
          <div>
            <label htmlFor="city" className="checkout-label">
              City <span className="text-foudre-pink">*</span>
            </label>
            <input
              id="city"
              type="text"
              placeholder="New York"
              value={data.city || ""}
              onChange={(event) => onChange("city", event.target.value)}
              className="checkout-input"
            />
          </div>
        </div>

        <div>
          <label htmlFor="country" className="checkout-label">
            Country <span className="text-foudre-pink">*</span>
          </label>
          <select
            id="country"
            value={data.country || "United States"}
            onChange={(event) => onChange("country", event.target.value)}
            className="checkout-input"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>United Kingdom</option>
            <option>France</option>
          </select>
        </div>

        <div className="mt-3 flex flex-col gap-4">
          {shippingOptions.map((option) => (
            <motion.button
              key={option.id}
              layout
              type="button"
              onClick={() => setShipping(option.id)}
              animate={{
                backgroundColor:
                  shipping === option.id
                    ? "var(--color-foudre-green)"
                    : "white",
                color:
                  shipping === option.id
                    ? "var(--color-foudre-paper)"
                    : "var(--color-foudre-green)",
                borderColor:
                  shipping === option.id
                    ? "var(--color-foudre-green)"
                    : "var(--color-foudre-gray)",
              }}
              whileHover={shipping !== option.id ? { scale: 1.02 } : {}}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="flex w-full items-center justify-between rounded-[var(--radius-md)] border-[0.15rem] p-6 text-left tx-p font-bold"
            >
              <div>
                <div className="tx-p font-bold">{option.label}</div>
                <div className="tx-l mt-1 opacity-60">{option.delay}</div>
              </div>
              <div className="tx-sm">{formatPrice(option.price)}</div>
            </motion.button>
          ))}
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
            onClick={onNext}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            className="rounded-[var(--radius-lg)] bg-foudre-green px-10 py-5 tx-p font-bold text-foudre-paper"
          >
            Continue → Payment
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
