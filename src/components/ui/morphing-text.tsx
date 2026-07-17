"use client";

import { useEffect, useState } from "react";

interface MorphingTextProps {
  texts: string[];
  className?: string;
  interval?: number;
}

export function MorphingText({ texts, className, interval = 3000 }: MorphingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log("MorphingText mounted, texts:", texts);
    const timer = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % texts.length;
        console.log("MorphingText index:", next, "text:", texts[next]);
        return next;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [texts.length, interval]);

  console.log("MorphingText rendering, index:", index, "text:", texts[index]);

  return (
    <span className={className}>
      {texts[index]}
    </span>
  );
}
