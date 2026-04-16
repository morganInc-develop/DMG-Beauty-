"use client";

import { useRef } from "react";

import { gsap, useGSAP } from "@/lib/gsap";

const steps = [
  {
    num: "01",
    title: "Are the bonnet photos different products?",
    desc: "No. The bonnet imagery is grouped under one bonnet product with multiple style options, so customers can scroll through the looks and choose the version they want.",
  },
  {
    num: "02",
    title: "What does P.U.S.H mean?",
    desc: "P.U.S.H stands for Pray Until Something Happens. It is one of the clearest messages in the line and shows up on the tee, keychain, and adjacent product storytelling.",
  },
  {
    num: "03",
    title: "What products are in the current collection?",
    desc: "The current lineup centers on the butterfly cross bonnet, the PUSH trucker hat, the faith hoodie, the P.U.S.H heart keychain, and the P.U.S.H signature tee.",
  },
  {
    num: "04",
    title: "Where do orders ship from?",
    desc: "Orders ship from Fort Lauderdale, Florida. We usually process within 1-2 business days, and standard delivery typically lands within 3-5 business days.",
  },
  {
    num: "05",
    title: "How do I stay updated on restocks and new drops?",
    desc: "Join the list at the bottom of the page. That is where we will point people to bonnet restocks, new apparel pieces, and giftable accessory drops first.",
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
          <span className="chip-bubble">Community</span>
          <h2 className="tx-md mt-6 whitespace-pre-line text-foudre-green">
            {"WHAT PEOPLE\nASK MOST"}
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
