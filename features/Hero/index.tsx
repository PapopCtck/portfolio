import { SpinningText } from "@ppaop/components/magicui/spinning-text";
import { useMemo } from "react";

const HeroText = () => {
  return (
    <div className="relative md:absolute md:-left-[50px] md:-top-[76px] lg:-left-[55px] lg:-top-[105px] text-[180px] md:text-[240px] lg:text-[300px] xl:text-[max(calc(80vw/5),300px)] w-[5ch] h-[180px] md:h-[240px] lg:h-[300px] xl:h-[max(calc(80vw/5),300px)]">
      <span
        className="absolute bottom-[20px] md:bottom-[30px] lg:bottom-[40px] text-secondary
    text-7xl md:text-8xl lg:text-9xl font-semibold z-30 left-[18px] md:left-[calc(18px+55px)] lg:left-[(30px+55px)]
  "
      >
        I'm
      </span>
      <span
        className="absolute top-0  leading-none font-black z-20
  "
      >
        PAPOP
      </span>
      <span
        className="absolute top-0 leading-none font-black text-outline
        left-[0.5ch] z-10
  "
      >
        PAPOP
      </span>
    </div>
  );
};

const Location = () => {
  return (
    <span className="absolute top-[8px] right-[8px] md:top-[14px] md:right-[20px] lg:top-[40px] lg:right-[44px] font-semibold text-[10px] md:text-xl lg:text-[28px] md:writing-mode-sideways">
      Bangk
      <span className="underline">ok</span>
    </span>
  );
};

const LeftText = () => {
  return (
    <div className="relative h-[324px]">
      <div className="absolute  -left-[10%] md:left-auto md:right-[350px] lg:right-auto lg:-left-[30%] xl:-left-[10%]">
        <span
          className=" text-[300px] font-black text-outline leading-none
"
        >
          PAPOP
        </span>
        <div className="hidden md:block h-[200px] w-[1px] bg-white absolute right-[-40px] top-[60%] translate-y-[-50%]" />
        <div className="hidden xl:block absolute  -right-[60px] translate-x-[100%] bottom-[20px]">
          <span className="">CRAFTING BEAUTIFUL AND</span>
          <br />
          <span>EXTRAORDINARY WEBSITE SINCE</span>
        </div>
      </div>
      <span className="absolute left-[50%] md:left-[60px] translate-x-[-50%] md:translate-x-0 top-[50%] md:top-[-20px] lg:top-[-10px] translate-y-[-50%] md:translate-y-0 whitespace-nowrap md:text-3xl md:font-semibold">
        Frontend · Backend · Devops · Design
      </span>
    </div>
  );
};

const RightText = () => {
  const elapsedTime = useMemo(() => {
    const now = new Date();
    const startDate = new Date("2020-01-01");
    const diffTime = Math.abs(now.getTime() - startDate.getTime());
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
    const diffMonths = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
    );
    return `${diffYears} yrs and ${diffMonths} months`;
  }, []);

  return (
    <div className="absolute top-[-60px] md:top-[inherit] md:bottom-0 right-[12px] text-right xl:left-[60%]">
      <span className="xl:hidden">CRAFTING BEAUTIFUL AND</span>
      <br />
      <span className="xl:hidden">EXTRAORDINARY WEBSITE SINCE</span>
      <br />
      <span className="xl:text-[10vw] xl:font-black xl:absolute xl:top-[calc(-90%-20px)] xl:right-0">
        2020
        <span className="font-(family-name:--font-zeyada) hidden xl:block absolute bottom-[10px] right-0 text-gray-300 -rotate-20 text-base font-normal">
          That's {elapsedTime}
        </span>
      </span>
    </div>
  );
};

const Spinner = () => {
  return (
    <div className="absolute bottom-[250px] left-[50%] translate-x-[-50%]">
      <div className="h-[80px] lg:h-[80px] w-[1px] bg-white absolute top-[-250px]" />
      <span className="font-(family-name:--font-zeyada) text-2xl absolute top-[-225px] right-[-40vw] whitespace-nowrap">
        Scroll down to know more!
      </span>
      <SpinningText>see more see more see more</SpinningText>
    </div>
  );
};
export const Hero = () => {
  return (
    <div className="relative max-w-svw overflow-hidden min-h-[1200px]">
      <HeroText />
      <Location />
      <div className="absolute top-[250px] md:top-[200px] max-w-svw w-full">
        <LeftText />
        <RightText />
      </div>
      <Spinner />
    </div>
  );
};
