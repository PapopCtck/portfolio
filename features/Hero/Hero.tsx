import Beams from "@ppaop/components/react-bits/Beams";
import { HERO_BEAMS_CONFIG } from "./constants";
import { Spinner } from "./components";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[1200px] h-screen max-w-svw select-none overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <Beams {...HERO_BEAMS_CONFIG} />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_0%,transparent_30%,var(--background)_70%,var(--background)_100%)] pointer-events-none" />
      <Spinner />
    </section>
  );
};
