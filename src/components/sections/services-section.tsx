import Link from "next/link";
import { ArrowUpRight, Globe, Smartphone, Lightbulb, FileText } from "lucide-react";
import { services } from "@/content/services";

const iconMap: Record<string, typeof Globe> = {
  Globe, Smartphone, Lightbulb, Presentation: FileText,
};

export function ServicesSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 block text-xs font-medium uppercase tracking-widest text-[#4F46E5]">
            What I Do
          </span>
          <h2 className="text-4xl font-medium leading-tight tracking-tight text-[#101010] md:text-5xl">
            Services
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#5E5E5E]">
            From strategy to execution — I help teams design products that users
            love and businesses need.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-[#101010]/5 bg-[#FAFAFA] p-8 transition-all hover:border-[#4F46E5]/20 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#4F46E5]/10 text-[#4F46E5]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-[#101010]">
                  {service.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-[#5E5E5E]">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-[#5E5E5E]"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#4F46E5]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#4F46E5] transition-colors hover:text-[#101010]"
          >
            View All Services
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
