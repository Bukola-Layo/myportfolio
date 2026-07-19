import { Metadata } from "next";
import { PhotoGallery } from "@/components/ui/gallery";
import Worklife from "@/components/sections/worklife";

export const metadata: Metadata = {
  title: "About | Bukola",
  description: "Learn more about Bukola — Product Designer.",
};

export default function AboutPage() {
  return (
    <>
      <PhotoGallery />
      <section style={{ position: "relative", paddingTop: "2rem", paddingBottom: "6rem", background: "white" }}>
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
        <div style={{ position: "relative", zIndex: 10, maxWidth: "48rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <h1 style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: "bold", letterSpacing: "-0.05em", color: "#101010", marginBottom: "3rem" }}>
            About Me
          </h1>
          <div style={{ fontSize: "1.125rem", color: "#5E5E5E", lineHeight: 1.8 }}>
            <p style={{ marginBottom: "2rem" }}>
              Hello, I'm Bukola. I'm a passionate Product Designer and Developer dedicated to creating 
              impactful, user-centric digital experiences. I believe that great design is not just about 
              how things look, but how they work.
            </p>
            <p style={{ marginBottom: "2rem" }}>
              With a strong foundation in both design and engineering, I bridge the gap between aesthetics 
              and technical feasibility. I partner with ambitious companies to build modern, high-performance 
              web applications that scale and deliver real business value.
            </p>
            <div style={{ height: "1px", width: "100%", background: "rgba(0,0,0,0.1)", margin: "3rem 0" }}></div>
            <h2 style={{ fontSize: "1.875rem", fontWeight: "bold", letterSpacing: "-0.025em", color: "#101010", marginBottom: "1.5rem" }}>Experience & Skills</h2>
            <ul style={{ listStyle: "disc", listStylePosition: "inside", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <li>UI/UX Design & Prototyping</li>
              <li>Frontend Engineering (React, Next.js, Tailwind)</li>
              <li>Design Systems & Architecture</li>
              <li>User Research & Usability Testing</li>
            </ul>
          </div>
        </div>
      </section>
      <Worklife />
    </>
  );
}
