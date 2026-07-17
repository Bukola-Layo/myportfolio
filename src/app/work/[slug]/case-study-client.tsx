"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/reduced-motion";
import { Button } from "@/components/shared/button";
import type { CaseStudy } from "@/content/projects";

interface Props {
  project: CaseStudy;
}

export function CaseStudyClient({ project }: Props) {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.querySelectorAll(".hero-item"),
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.15 }
        );
      }

      sectionRefs.current.forEach((section, i) => {
        if (!section) return;

        gsap.fromTo(
          section.querySelectorAll(".section-content"),
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [prefersReduced]);

  const setSectionRef = (el: HTMLDivElement | null, i: number) => {
    sectionRefs.current[i] = el;
  };

  return (
    <article className="pt-32">
      <div ref={heroRef} className="mx-auto max-w-5xl px-6 pb-24">
        <div className="hero-item mb-4">
          <span className="text-sm font-medium uppercase tracking-widest text-[#4F46E5]">
            {project.category}
          </span>
        </div>
        <h1 className="hero-item text-5xl font-medium leading-tight tracking-tight text-[#101010] md:text-7xl">
          {project.title}
        </h1>
        <p className="hero-item mt-6 max-w-2xl text-lg leading-relaxed text-[#5E5E5E]">
          {project.hero.framing}
        </p>

        <div className="hero-item mt-12 grid gap-8 border-t border-[#101010]/10 pt-12 sm:grid-cols-3">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-[#4F46E5]">Role</p>
            <p className="mt-1 text-[#101010]">{project.hero.role}</p>
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-[#4F46E5]">Timeline</p>
            <p className="mt-1 text-[#101010]">{project.hero.timeline}</p>
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-[#4F46E5]">Team</p>
            <p className="mt-1 text-[#101010]">{project.hero.team}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6">
        {project.sections.map((section, i) => (
          <div
            key={section.type}
            ref={(el) => setSectionRef(el, i)}
            className="section-wrapper mb-32 last:mb-0"
          >
            <div className="section-content">
              <span className="mb-2 block text-sm font-medium text-[#4F46E5]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mb-8 text-3xl font-medium leading-tight text-[#101010] md:text-4xl">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.map((paragraph, j) => (
                  <p key={j} className="text-lg leading-relaxed text-[#5E5E5E]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-4xl px-6 py-32">
        <div className="border-t border-[#101010]/10 pt-16 text-center">
          <h2 className="text-3xl font-medium text-[#101010] md:text-4xl">
            Want to see more?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-[#5E5E5E]">
            Explore more projects or get in touch to discuss your next product.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button href="/work" variant="secondary">
              All Projects
            </Button>
            <Button href="/contact" variant="primary">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
