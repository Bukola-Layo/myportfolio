"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/content/projects";

const heroTexts = [
  "Product Designer",
  "Design Engineer",
  "AI Product Designer",
  "Web Developer",
  "UX Researcher",
];

const projectImages = [
  "/public/images/200shots_so.png",
  "/public/images/67shots_so.png",
  "/public/images/232shots_so.png",
  "/public/images/409shots_so.png",
  "/public/images/Spl hero.png",
];

const carouselItems = projects.map((p, i) => ({
  title: p.title,
  category: p.category,
  slug: p.slug,
  image: projectImages[i % projectImages.length],
}));

export function Hero() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-white">
      <div
        className={[
          "pointer-events-none absolute inset-0",
          "bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]",
          "[background-size:16px_16px]",
          "[mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]",
          "[-webkit-mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]",
          "[mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat]",
        ].join(" ")}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-16 text-center">
        <div className="mb-8 inline-block">
          <div className="relative mx-auto h-28 w-28 rounded-full border-4 border-[#FAFAFA] overflow-hidden shadow-lg">
            <Image
              src="/public/images/Ejilayo%202.jpg"
              alt="Profile"
              fill
              sizes="112px"
              className="object-cover"
            />
          </div>
        </div>

        <h1 className="mb-6 text-5xl font-medium tracking-tight text-[#101010] md:text-7xl">
          {heroTexts[textIndex]}
        </h1>

        <p className="mx-auto mb-8 max-w-3xl text-lg text-[#5E5E5E] md:text-xl">
          Crafting digital products that solve business problems and
          create meaningful user experiences. Designing with purpose,
          building with impact.
        </p>

        <div className="mb-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/work"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#101010] px-8 text-sm font-medium text-[#FAFAFA] transition-colors hover:bg-[#101010]/90"
          >
            <Mail className="h-4 w-4" />
            View My Work
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#101010]/20 bg-white px-8 text-sm font-medium text-[#101010] transition-colors hover:bg-gray-100"
          >
            Get in Touch
            <ArrowDown className="h-4 w-4" />
          </Link>
        </div>

      </div>

      <AutoScrollCarousel items={carouselItems} />

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ opacity: 0.6 }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ArrowDown className="h-6 w-6 text-[#5E5E5E]" />
      </motion.div>
    </section>
  );
}

function AutoScrollCarousel({ items }: { items: { title: string; category: string; slug: string; image: string }[] }) {
  return (
    <div className="relative z-10 w-full overflow-hidden pb-16">
      <div className="flex animate-scroll gap-6" style={{ width: "max-content" }}>
        {[...items, ...items].map((item, idx) => (
          <Link
            key={`${item.slug}-${idx}`}
            href={`/work/${item.slug}`}
            className="group w-[85vw] shrink-0 md:w-[380px]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/5">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 85vw, 380px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
