export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Bukola transformed our entire product experience. The research-driven approach uncovered insights we had completely overlooked, and the resulting design exceeded our expectations.",
    name: "Alex Chen",
    role: "VP of Product",
    company: "Loopra",
  },
  {
    quote: "Working with Bukola was a masterclass in product design. The systematic approach to our HR platform redesign saved us months of iteration and delivered a product our users love.",
    name: "Sarah Mitchell",
    role: "CTO",
    company: "HRM360",
  },
  {
    quote: "The Community Shield project showed me what's possible when design is driven by genuine user research. Bukola's ethnographic work uncovered needs we never knew existed.",
    name: "James Okonkwo",
    role: "Executive Director",
    company: "Community Shield Initiative",
  },
  {
    quote: "Bukola doesn't just design beautiful interfaces — she designs systems that solve business problems. Our user satisfaction scores increased by 40% after the redesign.",
    name: "Emily Rodriguez",
    role: "CEO",
    company: "DM360 Suite",
  },
];
