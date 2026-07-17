import Link from "next/link";

export function Blog() {
  const blogs = [
    {
      title: "The Future of Web UX: Trends That Will Shape 2027",
      category: "APP DESIGN",
      date: "DEC 2026",
      href: "/#",
    },
    {
      title: "Scaling Engineering Teams in a Remote-First World",
      category: "ENGINEERING",
      date: "NOV 2026",
      href: "/#",
    }
  ];

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black">
            Bukola's Insights
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, idx) => (
            <Link key={idx} href={blog.href} className="group flex flex-col gap-6">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-100">
                {/* Placeholder for blog image */}
                <div className="absolute inset-0 bg-gray-200 transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-xs font-medium uppercase tracking-widest text-gray-400">
                  {blog.category} - {blog.date}
                </div>
                <h3 className="text-2xl font-medium text-black transition-colors group-hover:text-gray-600">
                  {blog.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
