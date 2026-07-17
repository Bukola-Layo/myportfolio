"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { User, Briefcase, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Work", url: "/work", icon: Briefcase },
  { name: "About", url: "/about", icon: User },
  { name: "Contact", url: "/contact", icon: Mail },
];

export function TubelightNavbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
        isScrolled ? "pt-4" : "pt-6"
      )}
    >
      <div className="flex items-center gap-2 border border-white/10 bg-[#FAFAFA]/80 px-2 py-1 rounded-full shadow-lg backdrop-blur-lg">
        {/* Home / Profile icon */}
        <Link
          href="/"
          onClick={() => setActiveTab("Home")}
          className="relative block h-9 w-9 rounded-full overflow-hidden shadow-sm transition-transform hover:scale-105"
        >
          <Image
            src="/public/images/Ejilayo%202.jpg"
            alt="Profile"
            fill
            sizes="36px"
            className="object-cover"
          />
        </Link>

        {navItems.map((item) => {
          const isActive = activeTab === item.name;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-medium px-4 py-2 rounded-full transition-colors",
                "text-[#5E5E5E] hover:text-[#101010]",
                isActive && "text-[#101010]"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-[#4F46E5]/10 rounded-full -z-10"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#4F46E5] rounded-t-full">
                    <div className="absolute w-12 h-6 bg-[#4F46E5]/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-[#4F46E5]/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-[#4F46E5]/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
