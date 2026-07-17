"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/reduced-motion";
import { cn } from "@/lib/cn";

interface ScrollTriggerProps {
  children: ReactNode;
  className?: string;
  animation?: "fade" | "fadeUp" | "fadeInLeft" | "fadeInRight" | "scale";
  delay?: number;
}

const animations = {
  fade: { opacity: 0, y: 0 },
  fadeUp: { opacity: 0, y: 60 },
  fadeInLeft: { opacity: 0, x: -60 },
  fadeInRight: { opacity: 0, x: 60 },
  scale: { opacity: 0, scale: 0.95 },
};

export function ScrollTriggerAnimation({ children, className, animation = "fadeUp", delay = 0 }: ScrollTriggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced || !ref.current) {
      if (ref.current) {
        gsap.set(ref.current, { opacity: 1, x: 0, y: 0, scale: 1 });
      }
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        animations[animation],
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 1.0,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [animation, delay, prefersReduced]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
