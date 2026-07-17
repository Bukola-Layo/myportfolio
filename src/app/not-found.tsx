import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-medium text-[#101010]">404</h1>
      <p className="mt-4 text-lg text-[#5E5E5E]">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#4F46E5] transition-colors hover:text-[#101010]"
      >
        Back to Home
      </Link>
    </div>
  );
}
