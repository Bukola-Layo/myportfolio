"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "PROJECTS", href: "/work" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/#services" },
  { label: "BLOG", href: "/#blog" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.05)] border-black/5 py-3"
          : "bg-white py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter text-black uppercase"
        >
          Bukola
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-tight text-black transition-colors hover:text-gray-500 uppercase"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-full bg-black px-6 text-sm font-medium tracking-tight text-white transition-colors hover:bg-gray-800"
          >
            GET STARTED
          </Link>
        </div>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="relative z-50 md:hidden"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? (
            <X className="h-6 w-6 text-black" />
          ) : (
            <Menu className="h-6 w-6 text-black" />
          )}
        </button>
      </div>

      {isMobileOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-white md:hidden">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-2xl font-bold tracking-tight text-black transition-colors hover:text-gray-500 uppercase"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMobileOpen(false)}
              className="mt-4 inline-flex h-12 items-center justify-center rounded-full bg-black px-8 text-base font-medium tracking-tight text-white transition-colors hover:bg-gray-800"
            >
              GET STARTED
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
