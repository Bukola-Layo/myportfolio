"use client";

import { useRef, useCallback } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/reduced-motion";

export function useImageReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const animate = useCallback(() => {
    if (prefersReduced || !containerRef.current || !imageRef.current) {
      if (containerRef.current) {
        gsap.set(containerRef.current, { opacity: 1 });
      }
      if (imageRef.current) {
        gsap.set(imageRef.current, { scale: 1, clipPath: "inset(0%)" });
      }
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      containerRef.current,
      { clipPath: "inset(0 100% 0 0)" },
      { clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "power3.out" }
    ).fromTo(
      imageRef.current,
      { scale: 1.1 },
      { scale: 1, duration: 1.2, ease: "power3.out" },
      0
    );
  }, [prefersReduced]);

  return { containerRef, imageRef, animate };
}
