export function AboutStats() {
  return (
    <section id="about" style={{ position: "relative", paddingTop: "6rem", paddingBottom: "6rem", background: "white" }}>
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
      <div style={{ position: "relative", zIndex: 10, maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "4rem 6rem", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2 style={{ fontSize: "clamp(2.25rem, 4vw, 3.75rem)", fontWeight: 500, letterSpacing: "-0.025em", color: "#101010", marginBottom: "2rem" }}>
              A Team of Builders & Innovators
            </h2>
            <div style={{ fontSize: "1.125rem", color: "#6b7280", lineHeight: 1.75 }}>
              <p style={{ marginBottom: "1.5rem" }}>
                We are a digital agency passionate about creating impactful software. 
                Our team blends strategic design with robust engineering to deliver 
                products that users love and businesses rely on.
              </p>
              <p>
                With a focus on performance, scalability, and seamless user experiences, 
                we partner with startups and enterprises alike to bring their vision to life 
                through cutting-edge web and mobile solutions.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "3rem", paddingTop: "1rem" }}>
            <div>
              <div style={{ fontSize: "clamp(3.75rem, 6vw, 6rem)", fontWeight: 500, letterSpacing: "-0.05em", color: "#101010", marginBottom: "0.5rem" }}>
                5K+
              </div>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9ca3af" }}>
                Projects Delivered
              </div>
            </div>
            
            <div style={{ height: "1px", width: "100%", background: "rgba(0,0,0,0.1)" }}></div>

            <div>
              <div style={{ fontSize: "clamp(3.75rem, 6vw, 6rem)", fontWeight: 500, letterSpacing: "-0.05em", color: "#101010", marginBottom: "0.5rem" }}>
                $1M+
              </div>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9ca3af" }}>
                Revenue Generated
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
