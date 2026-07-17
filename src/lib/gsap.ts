"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export { gsap, ScrollTrigger, useGSAP };

export const animationDefaults = {
  duration: {
    fast: 0.2,
    standard: 0.5,
    large: 1.0,
  },
  ease: {
    power3: "power3.out",
    expo: "expo.out",
    power4: "power4.out",
  },
};
