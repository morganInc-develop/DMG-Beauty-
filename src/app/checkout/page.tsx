"use client";

import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import OrderSummaryPanel from "@/components/cart/OrderSummaryPanel";
import CheckoutProgress from "@/components/checkout/CheckoutProgress";
import OrderConfirmation from "@/components/checkout/OrderConfirmation";
import StepInformation from "@/components/checkout/StepInformation";
import StepShipping from "@/components/checkout/StepShipping";
import StepPayment from "@/components/checkout/StepPayment";
import FloatingControls from "@/components/persistent/FloatingControls";
import { useCart } from "@/context/CartContext";
import {
  FREE_SHIPPING_THRESHOLD,
  SHIPPING_EXPRESS,
  SHIPPING_STANDARD,
  subtotal,
} from "@/data/cart";
import { gsap } from "@/lib/gsap";

const stepBg: Record<number, string> = {
  1: "var(--color-foudre-paper)",
  2: "var(--color-foudre-cream)",
  3: "var(--color-foudre-gray)",
};

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [formData, setFormData] = useState<Record<string, string>>({});
  const { state, dispatch } = useCart();
  const pageRef = useRef<HTMLDivElement>(null);

  const shippingCost = useMemo(() => {
    const sub = subtotal(state.items);

    if (shippingMethod === "express") {
      return SHIPPING_EXPRESS;
    }

    return sub >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_STANDARD;
  }, [shippingMethod, state.items]);

  const updateField = (field: string, val: string) =>
    setFormData((prev) => ({ ...prev, [field]: val }));

  const goToStep = (nextStep: number) => {
    gsap.to(window, { scrollTo: 0, duration: 0.6, ease: "power3.out" });
    setStep(nextStep);
  };

  const handleSubmit = () => {
    dispatch({ type: "CLEAR" });
    setComplete(true);
  };

  if (complete) {
    return <OrderConfirmation email={formData.email} />;
  }

  return (
    <motion.div
      ref={pageRef}
      animate={{ backgroundColor: stepBg[step] }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="min-h-screen"
    >
      <FloatingControls />

      <div className="grid-24 py-[6rem]">
        <div className="col-span-24 desk:col-span-15 desk:pr-12">
          <CheckoutProgress currentStep={step} />

          <AnimatePresence mode="wait">
            {step === 1 ? (
              <StepInformation
                key="step-1"
                data={formData}
                onChange={updateField}
                onNext={() => goToStep(2)}
              />
            ) : null}

            {step === 2 ? (
              <StepShipping
                key="step-2"
                data={formData}
                onChange={updateField}
                shipping={shippingMethod}
                setShipping={setShippingMethod}
                onNext={() => goToStep(3)}
                onBack={() => goToStep(1)}
              />
            ) : null}

            {step === 3 ? (
              <StepPayment
                key="step-3"
                data={formData}
                onChange={updateField}
                onSubmit={handleSubmit}
                onBack={() => goToStep(2)}
              />
            ) : null}
          </AnimatePresence>
        </div>

        <div className="col-span-24 mt-12 desk:col-span-9 desk:col-start-16 desk:mt-0">
          <OrderSummaryPanel
            ctaLabel="Place order →"
            onSubmit={step === 3 ? handleSubmit : undefined}
            isCheckout
            shippingCost={shippingCost}
            ctaDisabled={step !== 3}
          />
        </div>
      </div>
    </motion.div>
  );
}
