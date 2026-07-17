export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "designing-for-scale",
    title: "Designing for Scale: Lessons from Building a Global Design System",
    excerpt: "How we built a design system that serves 200K+ users across 150 countries, and the hard lessons learned along the way.",
    category: "Design Systems",
    date: "March 2026",
    readTime: "8 min read",
  },
  {
    slug: "research-driven-product-design",
    title: "Why Research-Driven Product Design Wins Every Time",
    excerpt: "Three case studies that demonstrate how user research directly improved product outcomes and business metrics.",
    category: "UX Research",
    date: "January 2026",
    readTime: "6 min read",
  },
  {
    slug: "motion-with-purpose",
    title: "Motion With Purpose: When to Animate and When to Stay Still",
    excerpt: "A framework for deciding when motion adds value to your product and when it's just noise.",
    category: "Motion Design",
    date: "November 2025",
    readTime: "5 min read",
  },
  {
    slug: "designing-for-trust",
    title: "Designing for Trust in Civic Technology",
    excerpt: "How we built a safety platform that earned community trust through transparent design and privacy-first architecture.",
    category: "Civic Tech",
    date: "September 2025",
    readTime: "7 min read",
  },
];
