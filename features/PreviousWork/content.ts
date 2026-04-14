type ContentBlock = {
  text: string;
  className?: string;
  yearMarker?: string;
  yearMarkerClassName?: string;
  story?: string[];
  responsibilities?: string[];
};

export type WorkExperience = {
  id: string;
  companyName: string;
  triggerClassName?: string;
  headerClassName: string;
  backgroundClassName: string;
  underlineRanges: Array<{ start: number; end: number }>;
  contentAlignment: "start" | "end";
  contentBlocks: ContentBlock[];
  floatingText: {
    marqueeClassName: string;
    repeat: number;
  };
  hoverProps?: {
    text?: string;
    image?: string;
    duration?: number;
    repeat?: number;
  };
};

export const workExperiences: WorkExperience[] = [
  {
    id: "almond-digital-group",
    companyName: "ALMOND DIGITAL GROUP",
    headerClassName: "flex-1",
    backgroundClassName: "left-[30%]",
    underlineRanges: [{ start: 3, end: 11 }],
    contentAlignment: "end",
    contentBlocks: [
      {
        text: "Developed multiple customer-facing and internal platforms for Big C, Amway, Shell, and SPU, including LINE OA/LIFF applications, mobile features, and internal tooling. Often worked under compressed and shifting deadlines while maintaining stability and performance.",
        yearMarker: "Jun 2020 - Dec 2020",
        story: [
          "My career began at Almond Digital Group, a software house that delivered web and mobile solutions for enterprise clients.",
          "During my time there, I worked on multiple platforms for Big C, Amway, Shell, and SPU, primarily building LINE OA/LIFF applications, internal tools, and integrations. The timelines were consistently tight, often shortened mid-project, which pushed me to learn how to deliver quickly without compromising stability. I improved several systems load times through extensive optimization, and even volunteered to take on a critical React Native issue, despite having little prior experience, ensuring the project launched on schedule.",
          "Almond Digital closed its operations at the end of 2020, but I carried forward a strong foundation in frontend development, problem-solving under pressure, and multi-project coordination.",
        ],
        responsibilities: [
          "Delivered several concurrent projects within shortened timelines",
          "Improved UI performance and optimized application flows for multiple clients",
          "Volunteered to troubleshoot and resolve a critical React Native issue despite limited prior experience",
          "Boosted load times for certain applications by 2–10× through code and data-flow optimizations",
          "Successfully delivered all projects within tight and frequently changing schedules",
        ],
      },
    ],
    floatingText: {
      marqueeClassName: " top-[20%]",
      repeat: 5,
    },
    hoverProps: {
      text: "// ALMOND DIGITAL GROUP",
      duration: 15,
      repeat: 6,
    },
  },
  {
    id: "miax",
    companyName: "MIAX",
    triggerClassName: "items-end",
    headerClassName: "flex-1 text-right",
    backgroundClassName: "left-[5%]",
    underlineRanges: [{ start: 1, end: 3 }],
    contentAlignment: "start",
    contentBlocks: [
      {
        text: "Architected and built a video streaming platform for Robinhood  with support for scheduling, real-time chat, and analytics. Collaborated closely with interns and junior engineers to deliver the platform within an extremely short development cycle.",
        yearMarker: "Jan 2021 - Jul 2021",
        story: [
          "After Almond closed, I joined MIAX, a smaller software house founded by a previous owner of Almond.",
          "I was responsible for architecting and building a video streaming platform for Robinhood Thailand, which supported live chat, scheduling, and analytics. This was my first experience leading a project from the ground up. I worked closely with two interns, guiding them through core concepts and helping them ship production features. I also improved the codebase structure to speed up development and make onboarding smoother.",
          "The platform launched successfully within an extremely compressed 4-month window, with no major stability or latency issues.",
        ],
        responsibilities: [
          "Designed core architecture and coordinated development across a team of 7 engineers",
          "Mentored interns and guided them through shipping production features",
          "Improved code maintainability and developer onboarding experience",
          "Successfully delivered a full streaming platform in 4 months with no major latency or stability issues",
          "Standardize TypeScript usage across the project, reducing runtime errors and improving code clarity",
        ],
      },
    ],
    floatingText: {
      marqueeClassName: "top-[10%]",
      repeat: 10,
    },
    hoverProps: {
      text: "// MIAX",
      duration: 5,
      repeat: 10,
    },
  },
  {
    id: "gideon-one",
    companyName: "GIDEON ONE",
    headerClassName: "flex-1",
    backgroundClassName: "left-[20%]",
    underlineRanges: [{ start: 4, end: 9 }],
    contentAlignment: "end",
    contentBlocks: [
      {
        text: "Led front-end development for CCXT, a carbon credit exchange platform with real-time trading, market visualization, and portfolio management. Rebuilt major UI flows and collaborated on back-end WebSocket architecture for live market data.",
        yearMarker: "Aug 2022 - Jul 2024",
        story: [
          "I later joined Blockfint, where I was initially placed in a small freelance-style team before being assigned to the Gideon team, the group responsible for the CCXT carbon credit exchange platform.",
          "When the previous frontend lead left, I temporarily took over the role and was later formally promoted. I led the redevelopment of major UI flows, optimized performance, and improved load times significantly. I also collaborated with the backend team to implement WebSocket infrastructure for real-time market feeds. This exposed me to deeper back-end integration, high-precision numerical handling, and performance challenges at scale.",
          "In August 2022, the Gideon team spun off into a new company called Gideon One, and I transitioned along with the team. At Gideon One, I expanded into full-stack responsibilities while continuing to lead frontend development. My main focus was Zplify, a carbon accounting SaaS platform with more than a thousand active users. I led the design of the frontend architecture and contributed to backend and database design when our team lacked backend capacity. I managed a small team and performed 1:1s, mentorship, onboarding, and technical guidance. To support the product, I also built a documentation system using Astro/Starlight, improving product clarity and reducing support load.",
          "I was fast-tracked to Mid-Level and became the Frontend Lead within three months, based on my technical contributions and architectural leadership.",
        ],
        responsibilities: [
          "Designed and maintained the full front-end architecture using scalable patterns",
          "Contributed to Golang backend and REST API development during capacity shortages",
          "Implemented documentation platform using Astro/Starlight, improving clarity and reducing support needs",
          "Conducted regular one-on-one meetings, mentoring, and growth planning for team members",
          "Fast-tracked to Mid-Level and promoted to Front-End Lead within 3 months",
          "Delivered a production SaaS platform with 1,000+ active users and consistent 90+ Lighthouse scores",
          "Built the official Zplify documentation hub, improving user onboarding and reducing support load",
        ],
      },
    ],
    floatingText: {
      marqueeClassName: "top-[40%]",
      repeat: 8,
    },
    hoverProps: {
      text: "// GIDEON ONE",
      duration: 8,
      repeat: 6,
    },
  },
  {
    id: "thinkerfint",
    companyName: "THINKERFINT",
    triggerClassName: "items-start",
    headerClassName: "flex-1 text-right",
    backgroundClassName: "right-[20%]",
    underlineRanges: [{ start: 5, end: 11 }],
    contentAlignment: "start",
    contentBlocks: [
      {
        text: "Co-leading a team of 7 engineers while directly managing 3 engineers. Oversaw development of the company-wide Design System and co-led the Thinker core (Loan Origination System). Ensured architectural consistency, set engineering best practices, and guided long-term frontend direction. Currently a sole front-end developer on the team building a generalized workflow engine expanding beyond LOS-specific flows.",
        yearMarker: "Since Jul 2024",
        story: [
          "I am currently working at ThinkerFint, part of the Blockfint Group, where I serve as a Senior Front-End Engineer and co-lead of the frontend team. I initially led 3 developers directly while guiding a larger group of around 7 developers on frontend direction and best practices.",
          "I've also leading the development of the Design System 2.0, which involved a much larger shift. Instead of continuing the inconsistencies of v1.0, I proposed restarting with a more stable foundation. I led the migration from MUI to Mantine by forking Mantine into an internal library called Thinker-Mantine, enabling us to build a system that matched our visual identity with minimal developer configuration. This became the new UI foundation for all internal products.",
          "Alongside the design system, I co-led the Loan Origination System, defining coding standards, coordinating features, and setting architectural direction across the team. I also moved the team from an inefficient polyrepo setup into a unified monorepo, improving development workflows and cross-project integration.",
          "I later joined the Thinker Workflow team, a new initiative building a flexible, generalized workflow engine beyond the decision-tree model used in the LOS. As the sole frontend developer, I took an early-stage POC to production - refactoring the codebase, filling critical feature gaps, and migrating everything into a new monorepo. I also introduced React Server Components via Next.js, establishing a secure server-side rendering layer that proxied backend requests, protected sensitive tokens, and simplified data flows across the application.",
        ],
        responsibilities: [
          "Design System v1.0 & v2.0 (Maintaining) - Cleaned up structure, unified patterns, collaborated closely with multiple designers, and delivered the official 1.0 internal rollout",
          "Design System v1.0 & v2.0 (Maintaining) - Later led the development of Design System v2.0, initiating a full restart",
          "THINKER CORE - Defined tasks, coordinated feature breakdown, and assigned work across the team",
          "THINKER CORE - Established coding standards, architectural patterns, and frontend direction",
          "THINKER Workflow (Current Team) - Took over an early-stage POC and transformed it into a production-ready product",
          "THINKER Workflow (Current Team) - Refactored major subsystems, added missing features, and moved the entire codebase into a new monorepo",
          "THINKER Workflow (Current Team) - Migrated multiple repositories into a unified monorepo, improving DX and maintainability",
          "THINKER Workflow (Current Team) - Currently a sole front-end developer on the team building a generalized workflow engine expanding beyond LOS-specific flows",
        ],
      },
    ],
    floatingText: {
      marqueeClassName: "top-[50%]",
      repeat: 6,
    },
    hoverProps: {
      text: "// THINKERFINT",
      duration: 10,
      repeat: 6,
    },
  },
];
