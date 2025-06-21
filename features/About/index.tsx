import { HorizonGuideLine } from "@ppaop/components/shadcn-ui/horizonGuideLine";
import { FloatingBackgroundText, Paragraph } from "@ppaop/components/ui/about";

export const About = () => {
  return (
    <section className="relative min-h-[1800px] max-w-svw select-none overflow-hidden">
      <section className="relative min-h-[600px]">
        <div className="absolute top-0 right-[-30vw] whitespace-nowrap font-bold text-8xl tracking-[32%] md:right-[-150px] lg:text-9xl">
          <span className="font-black text-outline">ABOU</span>
          <span>T M</span>
          <span className="font-black text-outline">E</span>
        </div>
        <div className="absolute top-[0.35ch] left-[-0.65ch] z-10 rotate-90 bg-black font-black text-9xl text-outline md:text-[300px] lg:text-[400px]">
          ME
        </div>
        <FloatingBackgroundText marqueeClassName="bottom-[15%] lg:bottom-[10%]">
          ABOUT ME
        </FloatingBackgroundText>
        <Paragraph className="top-60 left-[50%] md:right-[15%] md:left-auto">
          I'm a full-stack developer with a strong focus on frontend
          architecture and user experience. I've led small teams in building
          scalable web applications for clients like BigC, Amway, Shell, and
          Robinhood, working primarily with React and Next.js. My work
          emphasizes clean architecture, maintainability, and efficient
          delivery—often under tight timelines.
        </Paragraph>
      </section>
      <section className="relative min-h-[850px]">
        <FloatingBackgroundText marqueeClassName="top-[35%] lg:bottom-[10%]">
          ABOUT ME
        </FloatingBackgroundText>
        <Paragraph className="top-40 left-[50%] md:top-60 md:right-auto md:left-[15%]">
          My strengths lie in developing clean, maintainable frontend code,
          creating design systems, and optimizing performance. I’ve also
          contributed to backend development—particularly with Go and
          PostgreSQL—supporting full product lifecycles across fintech and
          sustainability platforms. I bring a practical, product-driven mindset
          and enjoy working across the stack to deliver polished, reliable
          solutions.
        </Paragraph>
        <div className="absolute right-[-0.65ch] bottom-[0.35ch] z-10 rotate-[-90deg] bg-black font-black text-9xl text-outline md:text-[300px] lg:text-[400px]">
          ME
        </div>
        <div className="absolute bottom-0 left-[-30vw] whitespace-nowrap font-bold text-8xl tracking-[32%] md:right-[-150px] lg:text-9xl">
          <span className="font-black text-outline">ABOU</span>
          <span>T M</span>
          <span className="font-black text-outline">E</span>
        </div>
      </section>
      <HorizonGuideLine className="-translate-x-1/2 absolute bottom-0 left-1/2" />
    </section>
  );
};
