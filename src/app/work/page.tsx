"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";

const projectImages = [
  "/public/images/200shots_so.png",
  "/public/images/67shots_so.png",
  "/public/images/232shots_so.png",
  "/public/images/409shots_so.png",
  "/public/images/Spl hero.png",
];

const tabs = ["All", "Web App", "Mobile App", "What I Built"] as const;

const categoryMap: Record<string, string[]> = {
  "Web App": ["SaaS Product Design", "Enterprise SaaS", "Productivity SaaS", "EdTech / Web Platform"],
  "Mobile App": ["Civic Tech / Mobile"],
  "What I Built": ["SaaS Product Design", "Enterprise SaaS", "Productivity SaaS", "EdTech / Web Platform", "Civic Tech / Mobile"],
};

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const filteredProjects = activeTab === "All"
    ? projects
    : activeTab === "What I Built"
      ? projects.filter((p) => p.slug === "loopra" || p.slug === "sky-meridian-college")
      : projects.filter((p) =>
          categoryMap[activeTab]?.some((cat) =>
            p.category.toLowerCase().includes(cat.toLowerCase())
          )
        );

  return (
    <section style={{ position: "relative", paddingTop: "8rem", paddingBottom: "6rem", minHeight: "100vh", background: "white" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 70%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 70%, transparent 100%)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      />
      <div style={{ position: "relative", zIndex: 10, maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem", marginBottom: "4rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: "bold", letterSpacing: "-0.05em", color: "#101010", marginBottom: "1.5rem" }}>
          Selected Work
        </h1>
        <p style={{ fontSize: "1.125rem", color: "#5E5E5E", maxWidth: "40rem", margin: "0 auto" }}>
          A showcase of digital products, applications, and experiences I&apos;ve built.
        </p>
      </div>

      <div style={{ position: "relative", zIndex: 10, maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "3rem" }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => {
                setActiveTab(tab);
              }}
              style={{
                padding: "0.625rem 1.5rem",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                fontWeight: 500,
                cursor: "pointer",
                border: "none",
                transition: "all 0.2s",
                background: activeTab === tab ? "#101010" : "#f3f4f6",
                color: activeTab === tab ? "white" : "#5E5E5E",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 32rem), 1fr))", gap: "2rem" }}>
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              style={{ display: "flex", flexDirection: "column", gap: "0" }}
            >
              <Link
                href={`/work/${project.slug}`}
                style={{ display: "block", textDecoration: "none" }}
              >
                <div style={{ position: "relative", aspectRatio: "4/3", width: "100%", overflow: "hidden", borderRadius: "1rem", background: "#f3f4f6", marginBottom: "1rem" }}>
                  <Image
                    src={project.heroImage || projectImages[projects.indexOf(project) % projectImages.length]}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ fontSize: "0.75rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "#5E5E5E", marginBottom: "0.5rem" }}>
                  {project.category}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                  <h2 style={{ fontSize: "1.5rem", fontWeight: 500, color: "#101010" }}>
                    {project.title}
                  </h2>
                  {project.status && (
                    <span style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", padding: "0.2rem 0.6rem", borderRadius: "9999px", background: "#FEF3C7", color: "#92400E" }}>
                      {project.status}
                    </span>
                  )}
                </div>
                <p style={{ marginTop: "0.5rem", color: "#5E5E5E" }}>{project.description}</p>
              </Link>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "#4F46E5",
                    textDecoration: "none",
                    marginTop: "1rem",
                    alignSelf: "flex-start",
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  View Live
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div style={{ textAlign: "center", padding: "4rem 0" }}>
            <p style={{ fontSize: "1.125rem", color: "#5E5E5E" }}>No projects found in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
