"use client";

import { useRef } from "react";

import { gsap, useGSAP } from "@/lib/gsap";

const steps = [
  {
    num: "01",
    title: "How long does shipping take?",
    desc: "Orders are processed within 1–2 business days and typically arrive within 3–5 business days. Expedited shipping options are available at checkout.",
  },
  {
    num: "02",
    title: "What is your return policy?",
    desc: "We accept returns within 30 days of delivery. Items must be unused and in their original packaging. Simply contact us to start your return.",
  },
  {
    num: "03",
    title: "How do I track my order?",
    desc: "Once your order ships, you'll receive a confirmation email with a tracking number. You can use it to follow your package every step of the way.",
  },
  {
    num: "04",
    title: "What payment methods do you accept?",
    desc: "We accept all major credit and debit cards, PayPal, Apple Pay, and Google Pay. All transactions are secured and encrypted.",
  },
  {
    num: "05",
    title: "How do I contact customer support?",
    desc: "Our team is available via email and WhatsApp. We aim to respond to all inquiries within 24 hours on business days.",
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = containerRef.current;

      if (!section) {
        return;
      }

      gsap.from(".process-step", {
        yPercent: 25,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          once: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="process-section overflow-hidden bg-foudre-cream py-24 desk:py-32"
    >
      <div className="grid-24 gap-y-6">
        <div className="col-span-24 desk:col-span-12">
          <span className="chip-bubble">Support</span>
          <h2 className="tx-md mt-6 whitespace-pre-line text-foudre-green">
            {"FREQUENTLY\nASKED QUESTIONS"}
          </h2>
        </div>

        <div className="col-span-24 mt-6 space-y-0">
          {steps.map((step) => (
            <div
              key={step.num}
              className="process-step grid-24 border-t border-foudre-green/20 py-6 desk:items-start desk:py-8"
            >
              <div className="col-span-24 text-foudre-pink desk:col-span-2">
                <p className="tx-sm">{step.num}</p>
              </div>
              <div className="col-span-24 mt-2 desk:col-span-8 desk:mt-0">
                <h3 className="tx-md text-foudre-green">{step.title}</h3>
              </div>
              <div className="col-span-24 mt-3 desk:col-span-14 desk:mt-1">
                <p className="tx-p max-w-[68rem] text-foudre-green/72">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
