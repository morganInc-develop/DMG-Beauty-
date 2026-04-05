"use client";

import { motion } from "framer-motion";

const steps = [
  { id: 1, label: "Your Info" },
  { id: 2, label: "Shipping" },
  { id: 3, label: "Payment" },
];

export default function CheckoutProgress({
  currentStep,
}: {
  currentStep: number;
}) {
  return (
    <div className="mb-[5rem] flex flex-col gap-4">
      <div className="flex gap-2">
        {steps.map((step) => {
          const isComplete = step.id < currentStep;
          const isActive = step.id === currentStep;
          return (
            <div
              key={step.id}
              className="h-[0.4rem] flex-1 overflow-hidden rounded-full bg-foudre-gray"
            >
              <motion.div
                className="h-full rounded-full"
                initial={{ width: "0%" }}
                animate={{
                  width: isComplete ? "100%" : isActive ? "50%" : "0%",
                  backgroundColor: isComplete
                    ? "var(--color-foudre-green)"
                    : "var(--color-foudre-pink)",
                }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              />
            </div>
          );
        })}
      </div>

      <div className="flex gap-2">
        {steps.map((step) => {
          const isComplete = step.id < currentStep;
          const isActive = step.id === currentStep;
          return (
            <div key={step.id} className="flex-1">
              <span
                className="tx-l font-bold uppercase tracking-[0.16em]"
                style={{
                  color: isComplete
                    ? "var(--color-foudre-green)"
                    : isActive
                      ? "var(--color-foudre-pink)"
                      : "var(--color-foudre-gray)",
                }}
              >
                {isComplete ? "✓ " : ""}
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
