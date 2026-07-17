import type { Metadata } from "next";
import { PenTool, BarChart3, Layout, Palette } from "lucide-react";
import { services } from "@/content/services";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Services",
  description: "Product design, UX strategy, design systems, and brand identity services by Bukola Akintomide.",
};

const iconMap: Record<string, typeof PenTool> = {
  PenTool, BarChart3, Layout, Palette,
};

export default function ServicesPage() {
  return (
    <>
      <div className="pt-32">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="mb-20 max-w-2xl">
            <span className="mb-4 block text-xs font-medium uppercase tracking-widest text-[#4F46E5]">
              What I Do
            </span>
            <h1 className="text-5xl font-medium leading-tight tracking-tight text-[#101010] md:text-7xl">
              Services
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#5E5E5E]">
              From strategy to execution — I help teams design products that
              users love and businesses need.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || PenTool;
              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-[#101010]/5 bg-white p-8 md:p-10"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#4F46E5]/10 text-[#4F46E5]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="mb-3 text-2xl font-medium text-[#101010]">
                    {service.title}
                  </h2>
                  <p className="mb-6 text-base leading-relaxed text-[#5E5E5E]">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-[#5E5E5E]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#4F46E5]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <CTASection />
    </>
  );
}
