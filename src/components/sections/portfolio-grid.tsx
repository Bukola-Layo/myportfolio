import Link from "next/link";
import Image from "next/image";
import { projects } from "@/content/projects";

const projectImages = [
  "/public/images/200shots_so.png",
  "/public/images/67shots_so.png",
  "/public/images/232shots_so.png",
  "/public/images/409shots_so.png",
  "/public/images/Spl hero.png",
];

export function PortfolioGrid() {
  return (
    <section id="projects" className="overflow-hidden bg-black py-24 rounded-t-[3rem] lg:rounded-t-[5rem]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-white">
            Selected Works
          </h2>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-6" style={{ width: "max-content" }}>
          {[...projects, ...projects].map((project, idx) => (
            <Link
              key={idx}
              href={`/work/${project.slug}`}
              className="group w-[85vw] shrink-0 md:w-[400px]"
            >
              <div className="flex flex-col gap-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/5">
                  <Image
                    src={projectImages[idx % projectImages.length]}
                    alt={project.title}
                    fill
                    sizes="400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs font-medium uppercase tracking-widest text-gray-400">
                    <span>{project.category}</span>
                  </div>
                  <h3 className="text-2xl font-medium text-white transition-colors group-hover:text-gray-300">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-6">
        <div className="flex justify-center">
          <Link
            href="/work"
            className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-sm font-medium tracking-tight text-black transition-colors hover:bg-gray-200 uppercase"
          >
            EXPLORE ALL PROJECTS
          </Link>
        </div>
      </div>
    </section>
  );
}
