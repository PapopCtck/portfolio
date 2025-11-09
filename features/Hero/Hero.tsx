import Beams from "@ppaop/components/react-bits/Beams";
import { HERO_BEAMS_CONFIG } from "./constants";
import { Spinner } from "./components";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[1200px] max-w-svw overflow-hidden select-none"
    >
      <div className="absolute top-0 left-0 h-full w-full">
        <Beams {...HERO_BEAMS_CONFIG} />
      </div>
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full bg-[linear-gradient(to_bottom,transparent_0%,transparent_30%,var(--background)_70%,var(--background)_100%)]" />
      <Spinner />
    </section>
  );
};
