import { ClientsSection } from "@/components/ui/testimonial-card";
import { testimonials } from "@/content/testimonials";

const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "3+", label: "Years of Experience" },
  { value: "4.9", label: "Average Rating" },
];

const testimonialCards = testimonials.map((t) => ({
  name: t.name,
  title: `${t.role}, ${t.company}`,
  quote: t.quote,
  avatarSrc: `https://api.dicebear.com/9.x/initials/svg?seed=${t.name.replace(/\s+/g, "")}&backgroundColor=4F46E5&textColor=ffffff`,
  rating: 5,
}));

export function Testimonials() {
  return (
    <ClientsSection
      tagLabel="Testimonials"
      title="Kind words from teams and clients"
      description="Trusted by startups and enterprises to deliver impactful product designs."
      stats={stats}
      testimonials={testimonialCards}
      primaryActionLabel="View My Work"
      secondaryActionLabel="Get in Touch"
    />
  );
}
