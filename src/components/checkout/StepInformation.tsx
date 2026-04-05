"use client";

import { motion } from "framer-motion";

export default function StepInformation({
  data,
  onChange,
  onNext,
}: {
  data: Record<string, string>;
  onChange: (field: string, val: string) => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      key="step-1"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    >
      <h2 className="tx-lg mb-10 whitespace-pre-line text-foudre-green">
        {"YOUR\nINFO"}
      </h2>

      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-6 desk:grid-cols-2">
          {[
            {
              id: "firstName",
              label: "First Name",
              type: "text",
              placeholder: "Jordan",
              required: true,
            },
            {
              id: "lastName",
              label: "Last Name",
              type: "text",
              placeholder: "Mason",
              required: true,
            },
          ].map((field, index) => (
            <motion.div
              key={field.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              <label htmlFor={field.id} className="checkout-label">
                {field.label}{" "}
                {field.required ? (
                  <span className="text-foudre-pink">*</span>
                ) : null}
              </label>
              <input
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                value={data[field.id] || ""}
                onChange={(event) => onChange(field.id, event.target.value)}
                className="checkout-input"
                required={field.required}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2 * 0.08,
            duration: 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
        >
          <label htmlFor="email" className="checkout-label">
            Email address <span className="text-foudre-pink">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={data.email || ""}
            onChange={(event) => onChange("email", event.target.value)}
            className="checkout-input"
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 3 * 0.08,
            duration: 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
        >
          <label htmlFor="phone" className="checkout-label">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+1 (555) 234-5678"
            value={data.phone || ""}
            onChange={(event) => onChange("phone", event.target.value)}
            className="checkout-input"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 4 * 0.08,
            duration: 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="mt-4"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <button
            type="button"
            onClick={onNext}
            className="w-full rounded-[var(--radius-lg)] bg-foudre-green px-12 py-5 tx-p font-bold text-foudre-paper transition-opacity hover:opacity-90 desk:w-auto"
          >
            Continue → Shipping
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
