"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/reduced-motion";
import { ExternalLink, ArrowLeft, Eye, Clock, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/content/projects";
import { projects } from "@/content/projects";

interface Props {
  project: CaseStudy;
}

function ProjectNavigation({ currentSlug }: { currentSlug: string }) {
  const otherProjects = projects.filter((p) => p.slug !== currentSlug).slice(0, 2);

  return (
    <div className="pt-16">
      <p className="mb-10 text-center text-xs font-medium uppercase tracking-widest text-[#5E5E5E]">
        More Projects
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {otherProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group block rounded-xl border border-[#101010]/10 transition-all hover:border-[#4F46E5]/30 hover:shadow-lg overflow-hidden"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f3f4f6]">
              {project.heroImage && (
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
            </div>
            <div className="p-5">
              <p className="text-[10px] font-medium uppercase tracking-widest text-[#4F46E5]">
                {project.category}
              </p>
              <h3 className="mt-2 text-lg font-bold text-[#101010] transition-colors group-hover:text-[#4F46E5]">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-[#5E5E5E] line-clamp-2">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
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
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.12 }
        );
      }

      sectionRefs.current.forEach((section, i) => {
        if (!section) return;

        gsap.fromTo(
          section,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
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

  const sectionIcon = (type: string) => {
    switch (type) {
      case "challenge": return "⚡";
      case "goals": return "🎯";
      case "research": return "🔍";
      case "discovery": return "💡";
      case "insights": return "📌";
      case "strategy": return "🧠";
      case "information-architecture": return "🏗️";
      case "wireframes": return "📐";
      case "design-system": return "🎨";
      case "high-fidelity-ui": return "✨";
      case "prototype": return "🔄";
      case "results": return "📊";
      case "lessons-learned": return "📝";
      case "reflection": return "💭";
      default: return "•";
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-white">
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(75, 85, 99, 0.06) 2px, rgba(75, 85, 99, 0.06) 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(107, 114, 128, 0.05) 2px, rgba(107, 114, 128, 0.05) 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(55, 65, 81, 0.04) 2px, rgba(55, 65, 81, 0.04) 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(31, 41, 55, 0.03) 2px, rgba(31, 41, 55, 0.03) 3px, transparent 3px, transparent 8px)
          `,
        }}
      />
      <article className="relative z-10 pt-24 md:pt-32">
        <div className="mx-auto max-w-7xl px-6 pb-6">
          <Link
            href="/work"
            className="hero-item inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#5E5E5E] transition-colors hover:text-[#4F46E5]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Works
          </Link>
        </div>
        <div ref={heroRef} className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="hero-item relative col-span-3 overflow-hidden rounded-xl md:col-span-2 min-h-[280px] md:min-h-[320px]">
              {project.heroImage && (
                <div className="absolute inset-0">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 66vw"
                    priority
                  />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/80 via-[#101010]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#4F46E5]/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white">
                    {project.category}
                  </span>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-sm transition-colors hover:bg-white/25"
                    >
                      Live Link
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
                <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                  {project.title}
                </h1>
              </div>
            </div>

            <div className="hero-item flex flex-col gap-4 rounded-xl bg-[#0077b6] p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#FAFAFA]/80">Project Brief</p>
              <p className="text-sm leading-relaxed text-white">
                {project.hero.framing}
              </p>
              <div className="mt-auto rounded-lg bg-black/20 p-4 space-y-4">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-widest text-white/60">Role</p>
                  <p className="mt-1 text-sm font-medium text-white">{project.hero.role}</p>
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-widest text-white/60">Timeline</p>
                  <p className="mt-1 text-sm font-medium text-white">{project.hero.timeline}</p>
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-widest text-white/60">Team</p>
                  <p className="mt-1 text-sm font-medium text-white">{project.hero.team}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {project.sections.map((section, i) => (
              <div
                key={section.type}
                ref={(el) => setSectionRef(el, i)}
                className="rounded-xl border border-[#101010]/10 bg-white p-6 transition-all hover:border-[#4F46E5]/20 hover:shadow-md md:p-8"
              >
                <span className="mb-3 block text-lg">{sectionIcon(section.type)}</span>
                <span className="mb-2 block text-[10px] font-bold text-[#4F46E5]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mb-3 text-lg font-bold leading-snug text-[#101010]">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.content.map((paragraph, j) => (
                    <p key={j} className="text-sm leading-relaxed text-[#5E5E5E]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <ProjectNavigation currentSlug={project.slug} />
          </div>
        </div>
      </article>
    </div>
  );
}
