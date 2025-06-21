import { HeroText, Location, LeftText, RightText, Spinner } from "@ppaop/components/ui/hero";

export const Hero = () => {
  return (
    <section className="relative min-h-[1200px] max-w-svw select-none overflow-hidden">
      <HeroText />
      <Location />
      <div className="absolute top-[250px] w-full max-w-svw md:top-[200px]">
        <LeftText />
        <RightText />
      </div>
      <Spinner />
    </section>
  );
};
