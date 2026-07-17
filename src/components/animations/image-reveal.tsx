"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useImageReveal } from "@/hooks/use-image-reveal";
import { cn } from "@/lib/cn";

interface ImageRevealProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export function ImageReveal({ src, alt, width, height, className, priority = false }: ImageRevealProps) {
  const { containerRef, imageRef, animate } = useImageReveal();

  useEffect(() => {
    animate();
  }, [animate]);

  return (
    <div
      ref={containerRef}
      className={cn("overflow-hidden", className)}
      style={{ clipPath: "inset(0%)" }}
    >
      <div ref={imageRef} className="h-full w-full">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-full w-full object-cover"
          priority={priority}
        />
      </div>
    </div>
  );
}
