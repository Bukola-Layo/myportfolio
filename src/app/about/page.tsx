import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Bukola",
  description: "Learn more about Bukola — Product Designer.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black mb-12">
          About Me
        </h1>
        <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
          <p>
            Hello, I'm Bukola. I'm a passionate Product Designer and Developer dedicated to creating 
            impactful, user-centric digital experiences. I believe that great design is not just about 
            how things look, but how they work.
          </p>
          <p>
            With a strong foundation in both design and engineering, I bridge the gap between aesthetics 
            and technical feasibility. I partner with ambitious companies to build modern, high-performance 
            web applications that scale and deliver real business value.
          </p>
          <div className="h-px w-full bg-black/10 my-12"></div>
          <h2 className="text-3xl font-bold tracking-tight text-black mb-6">Experience & Skills</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>UI/UX Design & Prototyping</li>
            <li>Frontend Engineering (React, Next.js, Tailwind)</li>
            <li>Design Systems & Architecture</li>
            <li>User Research & Usability Testing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
