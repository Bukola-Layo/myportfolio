import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PortfolioGrid />
      <Testimonials />
    </>
  );
}
