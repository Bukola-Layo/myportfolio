export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  description: string;
  hero: {
    role: string;
    timeline: string;
    team: string;
    framing: string;
  };
  sections: CaseStudySection[];
}

export interface CaseStudySection {
  type: "challenge" | "goals" | "research" | "discovery" | "insights" | "strategy" | "information-architecture" | "wireframes" | "design-system" | "high-fidelity-ui" | "prototype" | "results" | "lessons-learned" | "reflection";
  title: string;
  content: string[];
  image?: string;
}

export const projects: CaseStudy[] = [
  {
    slug: "loopra",
    title: "Loopra",
    category: "SaaS Product Design",
    description: "Redesigning the developer experience for a CI/CD platform serving 50K+ teams.",
    hero: {
      role: "Lead Product Designer",
      timeline: "6 months",
      team: "3 designers, 12 engineers, 1 PM",
      framing: "How might we make complex deployment pipelines feel simple and intuitive?",
    },
    sections: [
      {
        type: "challenge",
        title: "Challenge",
        content: [
          "Loopra's platform had grown complex over 4 years, with features added without a cohesive design strategy.",
          "Users reported that configuring pipelines felt overwhelming, with a steep learning curve for new team members.",
          "The activation rate for new users was only 34%, and the average time-to-first-pipeline was 47 minutes.",
        ],
      },
      {
        type: "goals",
        title: "Goals",
        content: [
          "Reduce time-to-first-pipeline by 60%",
          "Improve new user activation rate to 60%+",
          "Maintain power user efficiency for complex workflows",
          "Establish a scalable design system for future feature development",
        ],
      },
      {
        type: "research",
        title: "Research",
        content: [
          "Conducted 23 user interviews with developers, DevOps engineers, and engineering managers.",
          "Analyzed session recordings of 150+ users navigating the pipeline configuration flow.",
          "Surveyed 500+ users to quantify pain points and prioritize feature requests.",
          "Competitive analysis of 8 CI/CD platforms including GitHub Actions, GitLab CI, and CircleCI.",
        ],
      },
      {
        type: "discovery",
        title: "Discovery",
        content: [
          "The primary pain point was information architecture — users couldn't find the settings they needed.",
          "85% of users never touched advanced configuration options because they were hidden or poorly labeled.",
          "New users wanted templates; power users wanted faster access to their most-used actions.",
        ],
      },
      {
        type: "insights",
        title: "Insights",
        content: [
          "Users think in workflows, not individual steps — the UI should reflect this mental model.",
          "Cognitive load peaks during the pipeline creation flow, suggesting a progressive disclosure approach.",
          "The most successful onboarding experiences use a 'guided first time, flexible thereafter' pattern.",
        ],
      },
      {
        type: "strategy",
        title: "Strategy",
        content: [
          "Adopt a workflow-centric navigation model that groups related actions visually.",
          "Implement progressive disclosure — show simple defaults first, reveal advanced options on demand.",
          "Create a template system with pre-built pipeline configurations for common use cases.",
          "Introduce a command palette for power users to accelerate frequent actions.",
        ],
      },
      {
        type: "information-architecture",
        title: "Information Architecture",
        content: [
          "Restructured the sidebar from a flat list of 12 items to 4 logical groups.",
          "Created a clear visual hierarchy with primary, secondary, and tertiary navigation levels.",
          "Introduced contextual help and tooltips without cluttering the interface.",
          "Reduced the number of clicks to reach any configuration from 5+ to 2-3 on average.",
        ],
      },
      {
        type: "wireframes",
        title: "Wireframes",
        content: [
          "Iterated through 40+ wireframe variations for the pipeline editor alone.",
          "Tested horizontal vs vertical layout paradigms for the configuration interface.",
          "Validated the template-first approach with 12 users before moving to high-fidelity.",
        ],
      },
      {
        type: "design-system",
        title: "Design System",
        content: [
          "Built a comprehensive component library with 80+ components in Figma.",
          "Established clear interaction patterns for drag-and-drop, inline editing, and multi-select.",
          "Created a token-based theming system to support white-label deployments.",
          "Documented every component with usage guidelines, accessibility notes, and code snippets.",
        ],
      },
      {
        type: "high-fidelity-ui",
        title: "High Fidelity UI",
        content: [
          "Designed 45+ screens covering the complete pipeline lifecycle — create, monitor, debug, and optimize.",
          "Focused on clarity: generous whitespace, clear typographic hierarchy, and purposeful color usage.",
          "Every state was designed: loading, empty, error, success, and edge cases.",
          "Prototyped complex interactions including real-time pipeline visualization and drag-and-drop step reordering.",
        ],
      },
      {
        type: "prototype",
        title: "Prototype",
        content: [
          "Built an interactive prototype in Figma covering the complete new user onboarding flow.",
          "Conducted 3 rounds of usability testing with 18 participants, iterating after each round.",
          "Final prototype achieved a SUS score of 84.2, up from 61.7 on the existing interface.",
        ],
      },
      {
        type: "results",
        title: "Results",
        content: [
          "Time-to-first-pipeline reduced by 64% (from 47 to 17 minutes).",
          "New user activation rate increased from 34% to 72% within 3 months of launch.",
          "Support tickets related to pipeline configuration dropped by 41%.",
          "Net Promoter Score improved from 38 to 61.",
          "Customer satisfaction score for the pipeline editor reached 4.7/5.",
        ],
      },
      {
        type: "lessons-learned",
        title: "Lessons Learned",
        content: [
          "Start with the information architecture before visual design — getting the structure right was 80% of the work.",
          "Test with real users early and often; our first assumptions about user needs were wrong.",
          "A design system isn't just components — it's shared language and interaction patterns across the team.",
          "Progressive disclosure requires careful balance: too aggressive and advanced users feel constrained.",
        ],
      },
      {
        type: "reflection",
        title: "Reflection",
        content: [
          "This project reinforced my belief that great product design comes from deep user understanding.",
          "The most impactful decisions were not visual but structural — reorganizing how users think about the product.",
          "I'm proud of how the team rallied around user research and let data guide our design decisions.",
          "The template system and command palette became the most-loved features, validating our research-driven approach.",
        ],
      },
    ],
  },
  {
    slug: "community-shield",
    title: "Community Shield",
    category: "Civic Tech / Mobile",
    description: "Designing a safety platform connecting communities with real-time emergency response.",
    hero: {
      role: "Product Designer",
      timeline: "4 months",
      team: "2 designers, 8 engineers, 1 product manager",
      framing: "How might we make emergency response feel fast, accessible, and community-driven?",
    },
    sections: [
      {
        type: "challenge",
        title: "Challenge",
        content: [
          "Emergency response times in underserved communities averaged 12+ minutes, significantly above the national average.",
          "Existing solutions were fragmented — no single platform connected residents, first responders, and community networks.",
          "Trust was a major barrier: residents were hesitant to share location data or report incidents digitally.",
        ],
      },
      {
        type: "goals",
        title: "Goals",
        content: [
          "Reduce average emergency response time by 30% within the pilot community.",
          "Achieve 15% monthly active usage among residents in the pilot area.",
          "Build trust through transparent data practices and community-led governance.",
          "Design for low-bandwidth environments and older smartphone models.",
        ],
      },
      {
        type: "research",
        title: "Research",
        content: [
          "Conducted ethnographic research in 3 communities, shadowing residents and first responders.",
          "Interviewed 35+ residents, 12 first responders, and 8 community leaders.",
          "Analyzed 911 dispatch data to understand response time bottlenecks.",
          "Audited 6 existing safety apps for feature gaps and usability issues.",
        ],
      },
      {
        type: "discovery",
        title: "Discovery",
        content: [
          "Trust was the #1 barrier — residents wanted to know exactly who sees their data and how it's used.",
          "First responders needed better context before arriving at a scene: medical info, building layouts, known hazards.",
          "Community networks (neighborhood watches, local groups) were already organizing informally — the app could amplify their efforts.",
        ],
      },
      {
        type: "insights",
        title: "Insights",
        content: [
          "Users need different interfaces for different urgency levels — a panic button and a community check-in serve different needs.",
          "Transparency is a feature: showing exactly what data is shared and with whom builds confidence.",
          "Community leaders are the key adoption drivers — design for them first, and they'll bring their networks.",
        ],
      },
      {
        type: "strategy",
        title: "Strategy",
        content: [
          "Three-tier system: emergency alert, community alert, and daily safety check-in.",
          "Privacy-first architecture with granular controls for data sharing.",
          "Community leader dashboard to coordinate local safety efforts.",
          "Progressive web app to support low-end devices and limited connectivity.",
        ],
      },
    ],
  },
  {
    slug: "hrm360",
    title: "HRM360",
    category: "Enterprise SaaS",
    description: "Unifying HR workflows across 150+ countries for a global workforce management platform.",
    hero: {
      role: "Senior Product Designer",
      timeline: "8 months",
      team: "4 designers, 20 engineers, 3 PMs",
      framing: "How might we create a unified HR experience that adapts to local regulations worldwide?",
    },
    sections: [
      {
        type: "challenge",
        title: "Challenge",
        content: [
          "The existing platform had grown through acquisitions, resulting in 3 separate interfaces for different regions.",
          "Global compliance requirements varied significantly across 150+ countries, making a one-size-fits-all approach impossible.",
          "HR administrators spent 40% of their time on manual data entry and cross-system reconciliation.",
        ],
      },
      {
        type: "goals",
        title: "Goals",
        content: [
          "Consolidate 3 interfaces into a single, unified platform.",
          "Reduce HR admin time spent on manual tasks by 50%.",
          "Maintain full compliance across all 150+ operational countries.",
          "Achieve 90% user satisfaction score within 6 months of launch.",
        ],
      },
      {
        type: "research",
        title: "Research",
        content: [
          "Shadowed 45 HR administrators across 12 countries over 3 months.",
          "Analyzed support tickets to identify the most common pain points and workarounds.",
          "Conducted compliance workshops with legal teams from 20 key markets.",
          "Benchmarked against 12 competitor platforms and adjacent enterprise tools.",
        ],
      },
    ],
  },
  {
    slug: "sky-meridian-college",
    title: "Sky Meridian College",
    category: "EdTech / Web Platform",
    description: "Reimagining the higher education digital experience for students, faculty, and staff.",
    hero: {
      role: "Product Designer",
      timeline: "5 months",
      team: "2 designers, 10 engineers, 1 PM, 3 stakeholders",
      framing: "How might we create a digital campus that feels as connected as the physical one?",
    },
    sections: [
      {
        type: "challenge",
        title: "Challenge",
        content: [
          "The college's digital ecosystem consisted of 7 disconnected platforms for different functions.",
          "Student satisfaction with digital tools was at 2.3/5, with complaints about having to navigate multiple systems.",
          "Faculty reported spending 8+ hours per week on administrative tasks that could be automated.",
        ],
      },
      {
        type: "goals",
        title: "Goals",
        content: [
          "Create a unified portal that replaces 7 separate platforms.",
          "Improve student digital satisfaction to 4.0/5 or higher.",
          "Reduce faculty administrative time by 30%.",
          "Design for accessibility — serve students with diverse needs and devices.",
        ],
      },
    ],
  },
  {
    slug: "m360-suite",
    title: "M360 Suite",
    category: "Productivity SaaS",
    description: "A comprehensive productivity ecosystem integrating project management, communication, and analytics.",
    hero: {
      role: "Lead Product Designer",
      timeline: "10 months",
      team: "5 designers, 30 engineers, 4 PMs",
      framing: "How might we create a productivity suite that feels like one product, not a collection of tools?",
    },
    sections: [
      {
        type: "challenge",
        title: "Challenge",
        content: [
          "The M360 Suite was a bundle of 4 previously separate productivity tools acquired over 2 years.",
          "Users complained about inconsistent interfaces, duplicate features, and poor cross-tool integration.",
          "Cross-tool workflows required manual context-switching, disrupting user focus and productivity.",
        ],
      },
      {
        type: "goals",
        title: "Goals",
        content: [
          "Create a unified design language across all 4 tools within 6 months.",
          "Reduce cross-tool workflow friction by 70% through deep integration.",
          "Achieve 85%+ user retention rate post-unification.",
          "Establish a shared component library for future product development.",
        ],
      },
    ],
  },
];
