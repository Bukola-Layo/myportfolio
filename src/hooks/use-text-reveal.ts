"use client";

import { useRef, useCallback } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/reduced-motion";

export function useTextReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const animate = useCallback(() => {
    if (prefersReduced || !ref.current) return;

    const chars = ref.current.querySelectorAll(".char");
    if (chars.length === 0) return;

    gsap.fromTo(
      chars,
      { opacity: 0, y: 40, rotateX: -90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.02,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [prefersReduced]);

  return { ref, animate };
}
