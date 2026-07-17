"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/reduced-motion";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  slug: string;
  index: number;
}

export function ProjectCard({
  title,
  category,
  description,
  slug,
  index,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  return (
    <div
      ref={cardRef}
      className="group relative border-b border-[#101010]/5 bg-[#FAFAFA] px-6 py-16 transition-colors hover:bg-white md:px-12 md:py-24"
    >
      <Link href={`/work/${slug}`} className="mx-auto block max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="mb-3 block text-xs font-medium uppercase tracking-widest text-[#4F46E5]">
              {category}
            </span>
            <h3 className="text-3xl font-medium leading-tight tracking-tight text-[#101010] transition-colors group-hover:text-[#4F46E5] md:text-5xl">
              {title}
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#5E5E5E]">
              {description}
            </p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#101010]/10 transition-colors group-hover:border-[#4F46E5] group-hover:bg-[#4F46E5]">
            <ArrowUpRight className="h-5 w-5 text-[#101010] transition-colors group-hover:text-white" />
          </div>
        </div>
      </Link>
    </div>
  );
}
