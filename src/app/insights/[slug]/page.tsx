import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/content/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="pt-32">
      <article className="mx-auto max-w-3xl px-6 pb-24">
        <Link
          href="/insights"
          className="mb-8 inline-flex items-center gap-2 text-sm text-[#5E5E5E] transition-colors hover:text-[#101010]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Insights
        </Link>

        <div className="mb-8 flex items-center gap-3 text-sm text-[#5E5E5E]">
          <span className="rounded-full bg-[#4F46E5]/10 px-3 py-1 font-medium text-[#4F46E5]">
            {post.category}
          </span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="text-4xl font-medium leading-tight tracking-tight text-[#101010] md:text-5xl">
          {post.title}
        </h1>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-[#5E5E5E]">
          <p>{post.excerpt}</p>
          <p>
            This is a placeholder article. Full content will be published
            soon. Stay tuned for in-depth insights on {post.category.toLowerCase()}.
          </p>
        </div>
      </article>
    </div>
  );
}
