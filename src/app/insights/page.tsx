import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Insights",
  description: "Thoughts on product design, UX research, design systems, and more from Bukola Akintomide.",
};

export default function InsightsPage() {
  return (
    <>
      <div className="pt-32">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="mb-20 max-w-2xl">
            <span className="mb-4 block text-xs font-medium uppercase tracking-widest text-[#4F46E5]">
              Insights
            </span>
            <h1 className="text-5xl font-medium leading-tight tracking-tight text-[#101010] md:text-7xl">
              Blog & thoughts
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#5E5E5E]">
              Thoughts on product design, UX research, design systems, and the
              business of design.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group rounded-2xl border border-[#101010]/5 bg-white p-8 transition-all hover:border-[#4F46E5]/20 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center gap-3 text-xs text-[#5E5E5E]">
                  <span className="rounded-full bg-[#4F46E5]/10 px-3 py-1 font-medium text-[#4F46E5]">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mb-3 text-xl font-medium leading-snug text-[#101010] transition-colors group-hover:text-[#4F46E5]">
                  {post.title}
                </h2>
                <p className="text-sm leading-relaxed text-[#5E5E5E]">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-1 text-sm font-medium text-[#4F46E5] opacity-0 transition-all group-hover:opacity-100">
                  Read More
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
