import Link from "next/link";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-[#FAFAFA] py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 rounded-full bg-[#101010]/5 p-8">
            <Icons.logo className="h-8 w-8 text-[#101010]" />
          </div>
          <nav className="mb-8 flex flex-wrap justify-center gap-6">
            <Link href="/" className="text-sm text-[#5E5E5E] transition-colors hover:text-[#101010]">
              Home
            </Link>
            <Link href="/about" className="text-sm text-[#5E5E5E] transition-colors hover:text-[#101010]">
              About
            </Link>
            <Link href="/services" className="text-sm text-[#5E5E5E] transition-colors hover:text-[#101010]">
              Services
            </Link>
            <Link href="/work" className="text-sm text-[#5E5E5E] transition-colors hover:text-[#101010]">
              Work
            </Link>
            <Link href="/contact" className="text-sm text-[#5E5E5E] transition-colors hover:text-[#101010]">
              Contact
            </Link>
          </nav>
          <div className="mb-8 flex gap-4">
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a href="#" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </Button>
          </div>
          <div className="mb-8 w-full max-w-md">
            <form className="flex gap-2">
              <input
                id="email"
                placeholder="Enter your email"
                type="email"
                className="flex h-10 w-full rounded-full border border-[#101010]/20 bg-transparent px-4 py-2 text-sm text-[#101010] placeholder:text-[#5E5E5E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button type="submit" className="rounded-full shrink-0">
                Subscribe
              </Button>
            </form>
          </div>
          <div className="text-center">
            <p className="text-sm text-[#5E5E5E]">
              Built with love by Bukola Akintomide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
