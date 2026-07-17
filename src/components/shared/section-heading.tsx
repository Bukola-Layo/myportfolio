import { cn } from "@/lib/cn";
import { TextReveal } from "@/components/animations/text-reveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-[#4F46E5]">
          {label}
        </span>
      )}
      <h2 className="text-4xl font-medium leading-tight tracking-tight text-[#101010] md:text-5xl lg:text-6xl">
        <TextReveal>{title}</TextReveal>
      </h2>
      {description && (
        <p className="mt-6 text-lg leading-relaxed text-[#5E5E5E]">
          {description}
        </p>
      )}
    </div>
  );
}
