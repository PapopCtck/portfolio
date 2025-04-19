import { DotPattern } from "@ppaop/components/magicui/dot-pattern";
import { TextAnimate } from "@ppaop/components/magicui/text-animate";
import { cn } from "@ppaop/lib/utils";

export const Soon = () => {
  return (
    <div className="relative flex min-h-[500px] h-full w-full flex-col items-center justify-center overflow-hidden">
      <DotPattern
        glow={true}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <TextAnimate
          animation="slideUp"
          by="character"
          className="text-8xl font-(family-name:--font-dm-sans) font-extrabold text-shadow- text-black text-outline"
          segmentClassName="segment"
        >
          SOON
        </TextAnimate>
      </div>
    </div>
  );
};
