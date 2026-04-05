"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

interface ProductSliderProps {
  images: string[];
  accentBg: string;
  textColor: string;
}

export default function ProductSlider({
  images,
  accentBg,
  textColor,
}: ProductSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const barRefs = useRef<HTMLDivElement[]>([]);
  const activeTween = useRef<gsap.core.Tween | null>(null);
  const [active, setActive] = useState(0);

  const playSlide = useCallback(
    function runSlide(index: number) {
      if (!barRefs.current[index]) {
        return;
      }

      setActive(index);
      gsap.set(barRefs.current, { scaleX: 0, transformOrigin: "left center" });

      if (index > 0) {
        gsap.set(barRefs.current.slice(0, index), { scaleX: 1 });
      }

      activeTween.current?.kill();
      activeTween.current = gsap.to(barRefs.current[index], {
        scaleX: 1,
        transformOrigin: "left center",
        duration: 5,
        ease: "none",
        onComplete: () => runSlide((index + 1) % images.length),
      });
    },
    [images.length],
  );

  useGSAP(
    () => {
      playSlide(0);

      ScrollTrigger.create({
        trigger: sliderRef.current,
        start: "top bottom",
        end: "bottom top",
        onLeave: () => activeTween.current?.pause(),
        onEnterBack: () => activeTween.current?.resume(),
        onLeaveBack: () => activeTween.current?.pause(),
        onEnter: () => activeTween.current?.resume(),
      });

      return () => activeTween.current?.kill();
    },
    { scope: sliderRef, dependencies: [playSlide] },
  );

  return (
    <div ref={sliderRef} className="story-frame max-w-none">
      {images.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-300"
          style={{ opacity: active === index ? 1 : 0 }}
        >
          <Image
            src={src}
            fill
            className="object-cover"
            alt={`Product image ${index + 1}`}
            priority={index === 0}
            sizes="(min-width: 961px) 66vw, 100vw"
          />
        </div>
      ))}

      <div className="story-dots pointer-events-none">
        {images.map((_, index) => (
          <div
            key={index}
            className="story-dot"
            style={{ backgroundColor: `${textColor}40` }}
          >
            <div
              ref={(element) => {
                if (element) {
                  barRefs.current[index] = element;
                }
              }}
              className="story-dot-fill origin-left scale-x-0"
              style={{ backgroundColor: textColor }}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="absolute inset-y-0 left-0 z-20 w-1/2 bg-transparent"
        onClick={() => playSlide(Math.max(0, active - 1))}
        aria-label="Previous product image"
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 z-20 w-1/2 bg-transparent"
        onClick={() => playSlide((active + 1) % images.length)}
        aria-label="Next product image"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-between p-4">
        <span
          className="inline-flex items-center rounded-full px-4 py-2 tx-l font-bold uppercase tracking-[0.18em]"
          style={{
            backgroundColor: `${accentBg}cc`,
            color:
              textColor === "#00522d"
                ? "var(--color-foudre-green)"
                : "var(--color-foudre-paper)",
          }}
        >
          {active + 1}/{images.length}
        </span>
      </div>
    </div>
  );
}
