import { HorizonGuideLine } from "@ppaop/components/shadcn-ui/horizonGuideLine";

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
        <div className="absolute right-[-35vw] bottom-[15%] whitespace-nowrap font-black text-9xl text-outline-secondary md:right-[-1200px] md:text-[300px] lg:bottom-[10%] lg:text-[400px] xl:right-[-800px]">
          ABOUT ME
        </div>
        <p className="-translate-x-1/2 md:-translate-x-0 absolute top-60 left-[50%] z-20 max-w-[425px] text-justify font-semibold md:right-[15%] md:left-auto md:text-2xl lg:max-w-[560px]">
          I'm a full-stack developer with a strong focus on frontend
          architecture and user experience. I've led small teams in building
          scalable web applications for clients like BigC, Amway, Shell, and
          Robinhood, working primarily with React and Next.js. My work
          emphasizes clean architecture, maintainability, and efficient
          delivery—often under tight timelines.
        </p>
      </section>
      <section className="relative min-h-[850px]">
        <div className="absolute top-[35%] left-[-35vw] whitespace-nowrap font-black text-9xl text-outline-secondary md:left-[-1200px] md:text-[300px] lg:bottom-[10%] lg:text-[400px] xl:left-[-800px]">
          ABOUT ME
        </div>
        <p className="-translate-x-1/2 md:-translate-x-0 absolute top-40 left-[50%] z-20 max-w-[425px] text-justify font-semibold md:top-60 md:right-auto md:left-[15%] md:text-2xl lg:max-w-[560px]">
          My strengths lie in developing clean, maintainable frontend code,
          creating design systems, and optimizing performance. I’ve also
          contributed to backend development—particularly with Go and
          PostgreSQL—supporting full product lifecycles across fintech and
          sustainability platforms. I bring a practical, product-driven mindset
          and enjoy working across the stack to deliver polished, reliable
          solutions.
        </p>
        <div className="absolute right-[-0.65ch] bottom-[0.35ch] z-10 rotate-[-90deg] bg-black font-black text-9xl text-outline md:text-[300px] lg:text-[400px]">
          ME
        </div>
        <div className="absolute bottom-0 left-[-30vw] whitespace-nowrap font-bold text-8xl tracking-[32%] md:right-[-150px] lg:text-9xl">
          <span className="font-black text-outline">ABOU</span>
          <span>T M</span>
          <span className="font-black text-outline">E</span>
        </div>
      </section>
      <HorizonGuideLine className="absolute bottom-0 -translate-x-1/2 left-1/2" />
    </section>
  );
};
