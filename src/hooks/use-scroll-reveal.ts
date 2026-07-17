"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/reduced-motion";

export function useScrollReveal(direction: "up" | "down" | "left" | "right" = "up") {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const animate = () => {
    if (prefersReduced || !ref.current) return;

    const offsets = {
      up: { y: 60, x: 0 },
      down: { y: -60, x: 0 },
      left: { x: -60, y: 0 },
      right: { x: 60, y: 0 },
    };

    const offset = offsets[direction];

    gsap.fromTo(
      ref.current,
      { opacity: 0, x: offset.x, y: offset.y },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  };

  return { ref, animate };
}
