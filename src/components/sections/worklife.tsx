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
    date: "2018",
    title: "Started the Journey",
    content:
      "Began my career as a Product Designer, focusing on creating intuitive and user-centric digital experiences for early-stage startups.",
  },
  {
    date: "2020",
    title: "First Major Launch",
    content:
      "Led the design of a flagship SaaS product from concept to launch, establishing a design system and workflow that scaled with the team.",
  },
  {
    date: "2023",
    title: "Full-Stack Evolution",
    content:
      "Expanded into frontend engineering, bridging the gap between design and development to build high-performance web applications.",
  },
  {
    date: "2025",
    title: "Independent Design & Dev",
    content:
      "Working as an independent Product Designer and Developer, partnering with ambitious companies to create impactful digital products.",
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
