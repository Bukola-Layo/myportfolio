"use client";

import { useEffect } from "react";
import { useTextReveal } from "@/hooks/use-text-reveal";
import { cn } from "@/lib/cn";

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
}

export function TextReveal({ children, as: Tag = "p", className, delay = 0 }: TextRevealProps) {
  const { ref, animate } = useTextReveal();

  useEffect(() => {
    const timer = setTimeout(animate, delay * 1000);
    return () => clearTimeout(timer);
  }, [animate, delay]);

  const chars = children.split("").map((char, i) => (
    <span key={i} className="char inline-block" style={{ perspective: "100px" }}>
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <Tag ref={ref} className={cn("inline", className)}>
      {chars}
    </Tag>
  );
}
