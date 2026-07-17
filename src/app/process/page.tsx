import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/section-container";

export const metadata: Metadata = {
  title: "Process",
  description: "Bukola Akintomide's design process — from discovery to delivery.",
};

const phases = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understanding the landscape",
    description:
      "Every project begins with understanding. I immerse myself in the problem space through user research, stakeholder interviews, competitive analysis, and data exploration. This phase is about asking the right questions — not jumping to solutions.",
    deliverables: ["User interviews", "Competitive analysis", "Analytics review", "Stakeholder workshops", "Research synthesis"],
  },
  {
    number: "02",
    title: "Define",
    subtitle: "Framing the problem",
    description:
      "Research is meaningless without synthesis. I distil findings into actionable insights, define the problem space, and establish clear success metrics. This is where ambiguity becomes clarity and we align on what we're building and why.",
    deliverables: ["User personas", "Journey maps", "Problem statements", "Success metrics", "Feature prioritization"],
  },
  {
    number: "03",
    title: "Design",
    subtitle: "Exploring and testing solutions",
    description:
      "With a clear problem definition, I explore solutions through rapid iteration — starting with sketches and low-fidelity wireframes, progressing to high-fidelity prototypes. Each iteration is tested with users, refined, and tested again.",
    deliverables: ["Sketches & wireframes", "Interactive prototypes", "Usability testing", "Visual design", "Design system components"],
  },
  {
    number: "04",
    title: "Deliver",
    subtitle: "Building and launching",
    description:
      "Design doesn't end with a handoff. I work closely with engineering throughout development, ensuring the final product matches the vision. Design QA, accessibility audits, and performance optimization ensure a launch we're proud of.",
    deliverables: ["Design specifications", "Developer handoff", "Design QA", "Accessibility audit", "Launch support"],
  },
];

export default function ProcessPage() {
  return (
    <>
      <div className="pt-32">
        <SectionContainer>
          <div className="mb-20 max-w-2xl">
            <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-[#4F46E5]">
              Process
            </span>
            <h1 className="text-5xl font-medium leading-tight tracking-tight text-[#101010] md:text-7xl">
              How I design products
            </h1>
          </div>

          <div className="space-y-24">
            {phases.map((phase, i) => (
              <div key={phase.number} className="grid gap-8 md:grid-cols-5">
                <div className="md:col-span-2">
                  <span className="mb-2 block text-sm font-medium text-[#4F46E5]">
                    {phase.number}
                  </span>
                  <h2 className="text-3xl font-medium text-[#101010] md:text-4xl">
                    {phase.title}
                  </h2>
                  <p className="mt-1 text-base text-[#5E5E5E]">{phase.subtitle}</p>
                </div>

                <div className="md:col-span-3">
                  <p className="mb-6 text-lg leading-relaxed text-[#5E5E5E]">
                    {phase.description}
                  </p>
                  <ul className="space-y-2">
                    {phase.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-[#5E5E5E]">
                        <span className="h-1 w-1 rounded-full bg-[#4F46E5]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
      </div>
    </>
  );
}
