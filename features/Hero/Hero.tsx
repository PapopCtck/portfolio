import RotatingText from "@ppaop/components/react-bits/RotatingText";
import TextType from "@ppaop/components/react-bits/TextType";
import { AvailableBadge } from "@ppaop/components/ui/available-badge";
import { HERO_BEAMS_CONFIG } from "./constants";
import { Spinner } from "./components";
import { BeamsClient } from "./BeamsClient";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative z-1 h-screen min-h-[1200px] max-w-svw overflow-visible bg-black select-none"
    >
      <div className="absolute top-0 left-0 h-full w-full opacity-50 md:left-[-15%]">
        <BeamsClient {...HERO_BEAMS_CONFIG} />
      </div>
      <div className="absolute top-[30%] w-full md:top-[20%]">
        <div className="mx-auto flex max-w-[1024px] flex-col items-center text-right">
          <div className="mb-6">
            <AvailableBadge />
          </div>
          <TextType
            text={["// PAPOP", "// PPAOP"]}
            className="text-7xl font-bold tracking-wide whitespace-nowrap text-white select-none md:text-[150px] lg:text-[200px]"
            textClassName="whitespace-nowrap text-glow"
            typingSpeed={120}
            showCursor
            cursorCharacter="."
            cursorBlinkDuration={0.5}
            pauseDuration={5000}
            deletingSpeed={50}
            as="h1"
          />
          <div className="mx-4 mt-16 flex items-center select-none">
            <RotatingText
              texts={["Software", "Full Stack", "Frontend", "Backend"]}
              mainClassName="text-2xl mr-2 tracking-widest text-white py-1 pt-2 font-medium text-glow"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.005}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={5000}
            />
            <span className="text-2xl tracking-widest whitespace-nowrap text-white">
              Engineer
            </span>
          </div>
          <div className="mx-4 mt-0">
            <RotatingText
              texts={[
                '"Stay hungry, stay foolish." - Steve Jobs',
                '"Live as if you were to die tomorrow. Learn as if you were to live forever." - Mahatma Ghandi',
                "\"If you can't explain it to a six year old, you don't understand it yourself.\" - Albert Einstein",
              ]}
              mainClassName="text-sm mr-2 tracking-widest text-white"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={10000}
            />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full bg-[linear-gradient(to_bottom,transparent_0%,transparent_30%,var(--background)_70%,var(--background)_100%)]" />
      <Spinner />
    </section>
  );
};
