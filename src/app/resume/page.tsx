import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/section-container";
import { Button } from "@/components/shared/button";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download Bukola Akintomide's resume — Product Designer.",
};

const experience = [
  {
    role: "Lead Product Designer",
    company: "M360 Suite",
    period: "2022 — Present",
    description:
      "Leading product design for a suite of productivity tools serving 200K+ users. Established the design system, mentored a team of 4 designers, and drove a 40% improvement in user satisfaction scores.",
  },
  {
    role: "Senior Product Designer",
    company: "HRM360",
    period: "2020 — 2022",
    description:
      "Led the redesign of a global HR platform serving enterprises across 150+ countries. Consolidated 3 legacy interfaces into a unified experience, reducing admin task time by 50%.",
  },
  {
    role: "Product Designer",
    company: "Community Shield",
    period: "2019 — 2020",
    description:
      "Designed a civic safety platform from concept to launch. Conducted ethnographic research in 3 communities and achieved a 30% reduction in emergency response times.",
  },
  {
    role: "Junior Designer",
    company: "Design Studio Lagos",
    period: "2016 — 2019",
    description:
      "Designed websites, mobile apps, and brand identities for 20+ clients across fintech, healthtech, and edtech sectors.",
  },
];

const skills = [
  { category: "Design", items: ["Product Design", "UX Research", "Interaction Design", "Visual Design", "Design Systems", "Prototyping"] },
  { category: "Tools", items: ["Figma", "Framer", "Principle", "After Effects", "Illustrator", "Photoshop"] },
  { category: "Code", items: ["HTML/CSS", "TypeScript", "React", "Next.js", "Tailwind CSS", "GSAP"] },
  { category: "Methods", items: ["Design Thinking", "Lean UX", "Agile/Scrum", "Usability Testing", "A/B Testing", "Design Sprints"] },
];

export default function ResumePage() {
  return (
    <>
      <div className="pt-32">
        <SectionContainer>
          <div className="mb-16 flex items-start justify-between">
            <div className="max-w-2xl">
              <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-[#4F46E5]">
                Resume
              </span>
              <h1 className="text-5xl font-medium leading-tight tracking-tight text-[#101010] md:text-7xl">
                Experience & Skills
              </h1>
            </div>
            <Button href="#" variant="primary">
              Download PDF
            </Button>
          </div>

          <div className="space-y-16">
            <div>
              <h2 className="mb-8 text-2xl font-medium text-[#101010]">Experience</h2>
              <div className="space-y-10">
                {experience.map((job) => (
                  <div key={job.role} className="grid gap-4 md:grid-cols-4">
                    <div className="md:col-span-1">
                      <p className="text-sm font-medium text-[#4F46E5]">{job.period}</p>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-lg font-medium text-[#101010]">{job.role}</h3>
                      <p className="mb-2 text-sm text-[#5E5E5E]">{job.company}</p>
                      <p className="text-base leading-relaxed text-[#5E5E5E]">{job.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-8 text-2xl font-medium text-[#101010]">Skills</h2>
              <div className="grid gap-8 md:grid-cols-4">
                {skills.map((group) => (
                  <div key={group.category}>
                    <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-[#4F46E5]">
                      {group.category}
                    </h3>
                    <ul className="space-y-2">
                      {group.items.map((skill) => (
                        <li key={skill} className="text-base text-[#5E5E5E]">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>
    </>
  );
}
