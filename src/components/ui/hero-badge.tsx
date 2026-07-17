"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface HeroBadgeProps {
  href?: string;
  text: string;
  icon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const badgeVariants: Record<string, string> = {
  default: "bg-[#FAFAFA] border-[#101010]/10 hover:bg-[#101010]/5",
  outline: "border-2 border-[#101010]/20 hover:bg-[#101010]/5",
  ghost: "hover:bg-[#101010]/5",
};

const sizeVariants: Record<string, string> = {
  sm: "px-3 py-1 text-xs gap-1.5",
  md: "px-4 py-1.5 text-sm gap-2",
  lg: "px-5 py-2 text-base gap-2.5",
};

export default function HeroBadge({
  href,
  text,
  icon,
  endIcon,
  variant = "default",
  size = "md",
  className,
}: HeroBadgeProps) {
  const baseClassName = cn(
    "inline-flex items-center rounded-full border transition-colors text-[#5E5E5E]",
    badgeVariants[variant],
    sizeVariants[size],
    className
  );

  const content = (
    <div className={baseClassName}>
      {icon && <span className="text-[#5E5E5E]">{icon}</span>}
      <span>{text}</span>
      {endIcon && <span className="text-[#5E5E5E]">{endIcon}</span>}
    </div>
  );

  if (href) {
    return <Link href={href} className={cn("group", href && "cursor-pointer")}>{content}</Link>;
  }

  return <div className="group">{content}</div>;
}
