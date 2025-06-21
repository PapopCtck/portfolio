import { NumberTicker } from "@ppaop/components/magicui/number-ticker";
import { SpinningText } from "@ppaop/components/magicui/spinning-text";
import { TextAnimate } from "@ppaop/components/magicui/text-animate";
import { HorizonGuideLine } from "@ppaop/components/shadcn-ui/horizonGuideLine";
import { useMemo } from "react";

export const HeroText = () => {
  return (
    <div
      className="md:-left-[50px] md:-top-[76px] lg:-left-[55px] lg:-top-[105px] relative h-[180px] w-[5ch] text-[180px]
    md:absolute md:h-[240px] md:text-[240px] lg:h-[300px] lg:text-[300px] xl:h-[400px] xl:text-[400px]"
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
        <div className="-right-[60px] absolute bottom-[20px] hidden translate-x-[100%] 2xl:block">
          <span className="">CRAFTING BEAUTIFUL AND</span>
          <br />
          <span>EXTRAORDINARY WEBSITE SINCE</span>
        </div>
      </div>
      <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] whitespace-nowrap md:top-[-20px] md:left-[60px] md:translate-x-0 md:translate-y-0 md:font-semibold md:text-3xl lg:top-[-10px]">
        Frontend · Backend · Devops
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
      (diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
    );
    return `${diffYears} yrs and ${diffMonths} months`;
  }, []);

  return (
    <div className="absolute top-[-48px] right-[12px] text-right md:top-[inherit] md:bottom-[20px] 2xl:left-[60%]">
      <span className="2xl:hidden">CRAFTING BEAUTIFUL AND</span>
      <br />
      <span className="2xl:hidden">EXTRAORDINARY WEBSITE SINCE</span>
      <br />
      <span className="2xl:absolute 2xl:right-0 2xl:bottom-[-50px] 2xl:font-black 2xl:text-[10vw]">
        <NumberTicker
          value={2020}
          startValue={2010}
          className="2xl:font-black 2xl:text-[300px]"
          useGrouping={false}
        />
        <span className="font-(family-name:--font-zeyada) -rotate-20 absolute right-0 bottom-[10px] hidden font-normal text-base text-gray-300 2xl:block">
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
        <TextAnimate animation="slideUp" by="character">
          Scroll down to know more!
        </TextAnimate>
      </span>
      <SpinningText>see more see more see more</SpinningText>
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-[1200px] max-w-svw select-none overflow-hidden">
      <HeroText />
      <Location />
      <div className="absolute top-[210px] w-full max-w-svw md:top-[200px] lg:top-[250px] xl:top-[265px]">
        <LeftText />
        <RightText />
      </div>
      <Spinner />
    </section>
  );
};
