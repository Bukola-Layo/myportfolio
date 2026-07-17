import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionContainer({ children, className, id }: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn("mx-auto max-w-7xl px-6 py-24 md:py-32", className)}
    >
      {children}
    </section>
  );
}
