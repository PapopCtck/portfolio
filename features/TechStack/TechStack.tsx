import LogoLoop from "@ppaop/components/react-bits/LogoLoop";
import { InteractiveCurvedLoop } from "@ppaop/components/ui/curvedLoop";
import { SectionHeading } from "@ppaop/components/ui/section-heading";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMantine,
  SiShadcnui,
  SiNodedotjs,
  SiGo,
  SiPostgresql,
  SiCssmodules,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiCssmodules />,
    title: "CSS Modules",
    href: "https://github.com/css-modules/css-modules",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiMantine />,
    title: "Mantine",
    href: "https://mantine.dev",
  },
  {
    node: <SiShadcnui />,
    title: "Shadcn UI",
    href: "https://ui.shadcn.com",
  },
  {
    node: <SiNodedotjs />,
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    node: <SiGo />,
    title: "Golang",
    href: "https://go.dev",
  },
  {
    node: <SiPostgresql />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
];

export const TechStack = () => {
  return (
    <section id="tech-stack" className="relative z-2">
      <InteractiveCurvedLoop />
      <SectionHeading className="px-4 md:px-7">
        <div>
          <span className="text-outline">TEC</span>
          <span>HSTA</span>
          <span className="text-outline">CK</span>
        </div>
      </SectionHeading>
      <LogoLoop
        logos={techLogos}
        speed={50}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#000"
        ariaLabel="Tech Stack"
        className="mt-16 md:mt-48"
      />
    </section>
  );
};
