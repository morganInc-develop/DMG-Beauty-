"use client";

import BoltMark from "@/components/shared/BoltMark";

export default function ShopIntro() {
  return (
    <div className="relative flex min-h-[32rem] flex-col gap-6 overflow-hidden px-6 py-16 desk:h-full desk:justify-between desk:px-0 desk:py-0">
      <div className="relative z-10 flex flex-col gap-6">
        <div className="desk:hidden w-[4rem] text-foudre-cream">
          <BoltMark />
        </div>

        <div className="chip-bubble inline-flex self-start bg-foudre-cream text-foudre-green">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
            className="h-[1.4rem] w-[1.4rem]"
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          All products
        </div>

        <div className="desk:hidden">
          <h1 className="tx-lg whitespace-pre-line text-foudre-paper">SHOP</h1>
        </div>

        <div className="hidden desk:block">
          <h1 className="tx-xl whitespace-pre-line text-foudre-paper">SHOP</h1>
        </div>

        <p className="tx-p max-w-[28rem] text-foudre-paper/75">
          Bold pieces. Made for you.
        </p>
      </div>

      <div className="pointer-events-none absolute bottom-[-2%] left-1/2 hidden w-[88%] -translate-x-1/2 text-foudre-cream opacity-90 desk:block">
        <BoltMark />
      </div>
    </div>
  );
}
