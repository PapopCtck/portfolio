import { SpinningText } from "@ppaop/components/magicui/spinning-text";
import { HorizonGuideLine } from "@ppaop/components/shadcn-ui/horizonGuideLine";
import { useMemo } from "react";


export const HeroText = () => {
  return (
    <div
      className="md:-left-[50px] md:-top-[76px] lg:-left-[55px] lg:-top-[105px] relative h-[180px] w-[5ch] text-[180px]
    md:absolute md:h-[240px] md:text-[240px] lg:h-[300px] lg:text-[300px] xl:h-[max(calc(80vw/5),300px)] xl:text-[max(calc(80vw/5),300px)]"
    >
      <span className="absolute bottom-[20px] left-[18px] z-30 font-semibold text-7xl text-secondary md:bottom-[30px] md:left-[calc(18px+55px)] md:text-8xl lg:bottom-[40px] lg:left-[(30px+55px)] lg:text-9xl ">
        I'm
      </span>
      <span className="absolute top-0 z-20 font-black leading-none ">
        PAPOP
      </span>
      <span className="absolute top-0 left-[0.5ch] z-10 font-black text-outline leading-none ">
        PAPOP
      </span>
    </div>
  );
};

export const Location = () => {
  return (
    <span className="md:writing-mode-sideways absolute top-[8px] right-[8px] font-semibold text-[10px] md:top-[14px] md:right-[20px] md:text-xl lg:top-[40px] lg:right-[44px] lg:text-[28px]">
      Bangk
      <span className="underline">ok</span>
    </span>
  );
};

export const LeftText = () => {
  return (
    <div className="relative h-[324px]">
      <div className="-left-[10%] lg:-left-[30%] xl:-left-[10%] absolute md:right-[350px] md:left-auto lg:right-auto">
        <span className="font-black text-[300px] text-outline leading-none">
          PAPOP
        </span>
        <div className="absolute top-[60%] right-[-40px] hidden h-[200px] w-[1px] translate-y-[-50%] bg-white md:block" />
        <div className="-right-[60px] absolute bottom-[20px] hidden translate-x-[100%] xl:block">
          <span className="">CRAFTING BEAUTIFUL AND</span>
          <br />
          <span>EXTRAORDINARY WEBSITE SINCE</span>
        </div>
      </div>
      <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] whitespace-nowrap md:top-[-20px] md:left-[60px] md:translate-x-0 md:translate-y-0 md:font-semibold md:text-3xl lg:top-[-10px]">
        Frontend · Backend · Devops · Design
      </span>
    </div>
  );
};

export const RightText = () => {
  const elapsedTime = useMemo(() => {
    const now = new Date();
    const startDate = new Date("2020-01-01");
    const diffTime = Math.abs(now.getTime() - startDate.getTime());
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
    const diffMonths = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30),
    );
    return `${diffYears} yrs and ${diffMonths} months`;
  }, []);

  return (
    <div className="absolute top-[-60px] right-[12px] text-right md:top-[inherit] md:bottom-0 xl:left-[60%]">
      <span className="xl:hidden">CRAFTING BEAUTIFUL AND</span>
      <br />
      <span className="xl:hidden">EXTRAORDINARY WEBSITE SINCE</span>
      <br />
      <span className="xl:absolute xl:top-[calc(-90%-20px)] xl:right-0 xl:font-black xl:text-[10vw]">
        2020
        <span className="font-(family-name:--font-zeyada) -rotate-20 absolute right-0 bottom-[10px] hidden font-normal text-base text-gray-300 xl:block">
          That's {elapsedTime}
        </span>
      </span>
    </div>
  );
};

export const Spinner = () => {
  return (
    <div className="absolute bottom-[250px] left-[50%] translate-x-[-50%]">
      <HorizonGuideLine className="absolute top-[-250px]" />
      <span className="font-(family-name:--font-zeyada) absolute top-[-225px] right-[-40vw] hidden whitespace-nowrap text-2xl xl:block">
        Scroll down to know more!
      </span>
      <SpinningText>see more see more see more</SpinningText>
    </div>
  );
};
