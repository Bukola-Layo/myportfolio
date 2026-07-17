"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function HeroAlt() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#4F46E5]/5 via-transparent to-transparent" />
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/20 bg-[#4F46E5]/5 px-4 py-1.5 text-sm text-[#4F46E5]">
          <Sparkles className="h-3.5 w-3.5" />
          Product Designer — 8+ years experience
        </div>

        <h1 className="mt-8 max-w-5xl text-5xl font-medium italic leading-tight tracking-tight text-[#101010] sm:text-6xl md:text-7xl lg:text-8xl">
          I design products
          <br />
          that solve{" "}
          <span className="text-[#4F46E5]">business problems</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#5E5E5E]">
          Bukola Akintomide — crafting digital experiences that drive
          measurable impact for startups and enterprises worldwide.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/work"
            className={cn(
              buttonVariants({ size: "lg" }),
              "gap-2 w-full sm:w-auto"
            )}
          >
            View My Work
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "gap-2 w-full sm:w-auto"
            )}
          >
            Get in Touch
          </Link>
        </div>

        <div className="mt-20 grid gap-6 text-left sm:grid-cols-3">
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "30+", label: "Happy Clients" },
            { number: "8+", label: "Years Experience" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[#101010]/5 bg-white p-6"
            >
              <p className="text-3xl font-semibold text-[#101010]">
                {stat.number}
              </p>
              <p className="mt-1 text-sm text-[#5E5E5E]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
