type ContentBlock = {
  text: string;
  className?: string;
  yearMarker?: string;
  yearMarkerClassName?: string;
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
        text: "Developed and delivered multiple customer-facing and internal platforms for BigC, Amway, Shell, and SPU—spanning LINEOA/LIFF apps, React Native mobile apps, and custom back-office tools. Leveraged React, Redux, Express, and PostgreSQL to build scalable UIs and RESTful services. Delivered all projects within compressed timelines, often shortened mid-development, without compromising stability or functionality.",
        className: "mb-44",
        yearMarker: "Jun 2020 - Dec 2020",
        yearMarkerClassName: "rotate-[-10deg]",
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
        text: "Led a team of 2 frontend developers and 2 interns to architect and build a video streaming platform for Robinhood Thailand using Next.js, TypeScript, and Redux. Which supported content scheduling, real-time chat, and user engagement analytics. The platform launched on time with incredibly short development cycle of only 4 months with no significant latency or crashes.",
        className: "mb-44",
        yearMarker: "Jan 2021 - Jul 2021",
        yearMarkerClassName: "rotate-[10deg]",
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
        text: "Led frontend development and optimization of CCXT, a carbon credit exchange platform enabling trading, portfolio tracking, and market visualization. Rebuilt major UI flows using React, react-hook-form, and TradingView, cutting page load time by half. Also initiated backend WebSocket infrastructure in Golang for live market feeds.",
      },
      {
        text: "Later Initiated and led frontend architecture for Zplify, a carbon accounting platform that transforms user activity into carbon emission reports. Built using React, TypeScript, React Query, React Hook Form, and NX monorepo for modular scalability. Authored the CI/CD pipeline deployed via Cloudflare Pages. Occasionally help develop a RESTFUL API when needed.",
        className: "mt-16 mb-44",
        yearMarker: "Aug 2022 - Jul 2024",
        yearMarkerClassName: "rotate-[-14deg]",
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
        text: "Directed frontend team to build and maintain a reusable component library adopted across multiple internal projects, initially built with MUI and later migrated to Mantine for improved customization and modernization. Simultaneously co-led development of Thinker-Core, a Loan Origination System used by financial clients to streamline loan approvals. Utilizing React, react-query, nx monorepo, and react-hook-form.",
        className: "mb-40",
        yearMarker: "Since Jul 2024",
        yearMarkerClassName: "rotate-[-4deg]",
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
