export interface Service {
  title: string;
  description: string;
  icon: string;
  items: string[];
}

export const services: Service[] = [
  {
    title: "Landing Page & Website Design",
    description: "Crafting visually compelling, conversion-focused landing pages and websites that leave a lasting impression.",
    icon: "Globe",
    items: ["Information Architecture", "Mobile-First Design", "UI Systems"],
  },
  {
    title: "Mobile App Design",
    description: "Designing intuitive, seamless mobile experiences that users love and keep coming back to.",
    icon: "Smartphone",
    items: ["Visual Hierarchy", "Interaction Design", "Responsive Design"],
  },
  {
    title: "AI Development & Design to MVP",
    description: "Taking AI-powered concepts from ideation to market-ready MVPs with thoughtful design and development.",
    icon: "Cpu",
    items: ["AI Product Strategy", "Rapid Prototyping", "MVP Development"],
  },
  {
    title: "B2B Design",
    description: "Designing sophisticated B2B platforms that streamline complex workflows and drive enterprise adoption.",
    icon: "Building2",
    items: ["Enterprise UX", "Dashboard Design", "Data Visualization"],
  },
  {
    title: "Web Applications Design",
    description: "Building responsive, feature-rich web applications with intuitive interfaces and scalable design systems.",
    icon: "Monitor",
    items: ["SaaS Platforms", "Design Systems", "Interaction Design"],
  },
];
