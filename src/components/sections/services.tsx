const servicesList = [
  {
    title: "Landing Page & Website Design",
    items: ["Information Architecture", "Mobile-First Design", "UI Systems"],
  },
  {
    title: "Mobile App Design",
    items: ["Visual Hierarchy", "Interaction Design", "Responsive Design"],
  },
  {
    title: "B2B Design",
    items: ["Enterprise UX", "Dashboard Design", "Data Visualization"],
  },
  {
    title: "Web Applications Design",
    items: ["SaaS Platforms", "Design Systems", "Interaction Design"],
  },
  {
    title: "AI Development & Design to MVP",
    items: ["AI Product Strategy", "Rapid Prototyping", "MVP Development"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black sticky top-32">
              My Expertise
            </h2>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-12">
            {servicesList.map((service, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-12 pb-12 border-b border-black/10 last:border-0">
                <div className="text-2xl font-medium text-black shrink-0">
                  #{idx + 1}
                </div>
                <div className="flex flex-col">
                    <h3 className="text-3xl font-medium text-black mb-4">{service.title}</h3>
                    <ul className="flex flex-wrap gap-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full bg-[#F3F4F6] px-4 py-1.5 text-sm text-[#5E5E5E]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
