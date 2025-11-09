import Beams from "@ppaop/components/react-bits/Beams";
import { HERO_BEAMS_CONFIG, HERO_LAYOUT } from "./constants";
import { Spinner } from "./components";

export const Hero = () => {
  const gradientStyle = `linear-gradient(to_bottom,transparent_${HERO_LAYOUT.gradientStart},transparent_${HERO_LAYOUT.gradientMid1},var(--background)_${HERO_LAYOUT.gradientMid2},var(--background)_${HERO_LAYOUT.gradientEnd})`;

  return (
    <section
      id="hero"
      className="relative min-h-[1200px] h-screen max-w-svw select-none overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <Beams {...HERO_BEAMS_CONFIG} />
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ background: gradientStyle }}
      />
      <Spinner />
    </section>
  );
};
