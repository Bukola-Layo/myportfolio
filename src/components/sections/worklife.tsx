"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

type TimelineEntry = {
  date: string;
  title: string;
  content: string;
};

const timelineData: TimelineEntry[] = [
  {
    date: "January 2026 — Present",
    title: "UIUX Instructor — Mahdumo Academy",
    content:
      "Developed structured UI/UX curriculum covering the fundamentals of design principles. Facilitated hands-on UI/UX design training, guiding students through real-world projects, design tools, and mentored them toward building job-ready portfolios.",
  },
  {
    date: "March 2025 — Present",
    title: "Lead UIUX Designer — M360 Solutions",
    content:
      "Collaborated with developers and product managers to deliver user-centric solutions. Designed dashboards, landing pages, and mobile apps with a focus on conversion and usability across different industries. Conducted competitor analysis and user research to guide product decisions.",
  },
  {
    date: "May 2025 — Dec 2025",
    title: "Lead UIUX Designer — IJM Global Limited",
    content:
      "Developed low-fidelity and high-fidelity designs. Conducted user research. Developed design systems for Community Shield to ensure consistency across design. Collaborated with developers to ensure smooth handover of projects. Developed and maintained dynamic, responsive, user-friendly designs.",
  },
  {
    date: "March 2024 — May 2025",
    title: "UIUX Designer — Diakrino Limited",
    content:
      "Developed design systems for projects. Collaborated with other designers to create seamless designs. Collaborated with developers to ensure smooth handover of projects. Developed and maintained dynamic, responsive, user-friendly designs.",
  },
];

export default function Worklife() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <h1 className="text-foreground mb-16 text-center text-4xl font-bold tracking-tight sm:text-5xl">
          My Worklife Journey
        </h1>

        <div className="relative mx-auto max-w-3xl">
          {timelineData.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative mb-12 pl-12"
            >
              <div className="absolute left-2 top-5 h-3 w-3 rounded-full bg-cyan-500 ring-4 ring-background" />

              <h4 className="text-lg font-normal text-foreground">
                {entry.title}
              </h4>
              <p className="mb-2 text-sm text-muted-foreground">{entry.date}</p>
              <Card className="border bg-card shadow-sm hover:shadow-md transition">
                <CardContent className="px-5 py-4">
                  <p className="leading-relaxed text-muted-foreground">
                    {entry.content}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
