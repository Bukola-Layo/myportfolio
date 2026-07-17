export function AboutStats() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Text Content */}
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-black mb-8">
              A Team of Builders & Innovators
            </h2>
            <div className="space-y-6 text-gray-500 text-lg">
              <p>
                We are a digital agency passionate about creating impactful software. 
                Our team blends strategic design with robust engineering to deliver 
                products that users love and businesses rely on.
              </p>
              <p>
                With a focus on performance, scalability, and seamless user experiences, 
                we partner with startups and enterprises alike to bring their vision to life 
                through cutting-edge web and mobile solutions.
              </p>
            </div>
          </div>

          {/* Right Stats */}
          <div className="flex flex-col gap-12 pt-4">
            <div>
              <div className="text-6xl md:text-8xl font-medium tracking-tighter text-black mb-2">
                5K+
              </div>
              <div className="text-sm font-medium uppercase tracking-widest text-gray-400">
                Projects Delivered
              </div>
            </div>
            
            <div className="h-px w-full bg-black/10"></div>

            <div>
              <div className="text-6xl md:text-8xl font-medium tracking-tighter text-black mb-2">
                $1M+
              </div>
              <div className="text-sm font-medium uppercase tracking-widest text-gray-400">
                Revenue Generated
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
