import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PortfolioGrid />
      <Testimonials />
      <CTASection />
    </>
  );
}
