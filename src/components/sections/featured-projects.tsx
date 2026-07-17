"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/reduced-motion";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/shared/project-card";

export function FeaturedProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const featuredProjects = projects.slice(0, 3);

  return (
    <section ref={sectionRef} className="relative">
      {featuredProjects.map((project, i) => (
        <ProjectCard
          key={project.slug}
          title={project.title}
          category={project.category}
          description={project.description}
          slug={project.slug}
          index={i}
        />
      ))}
    </section>
  );
}
