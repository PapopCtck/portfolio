import { cn } from "@ppaop/utils";
import { TextAnimate } from "../magicui/text-animate";
import { Marquee, type MarqueeProps } from "../magicui/marquee";

export const Paragraph = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <TextAnimate
      animation="slideUp"
      by="word"
      className={cn(
        "absolute z-20 max-w-[425px] -translate-x-1/2 text-justify font-semibold md:-translate-x-0 md:text-2xl lg:max-w-[560px]",
        className,
      )}
    >
      {children}
    </TextAnimate>
  );
};

export const FloatingBackgroundText = ({
  children,
  className,
  marqueeClassName,
  marqueeProps,
}: {
  children: React.ReactNode;
  className?: string;
  marqueeClassName?: string;
  marqueeProps?: Omit<MarqueeProps, "children">;
}) => {
  return (
    <Marquee
      className={cn(
        "absolute right-0 left-0 z-0 overflow-hidden",
        marqueeClassName,
      )}
      {...marqueeProps}
    >
      <span
        className={cn(
          "text-outline-secondary text-9xl font-black text-nowrap whitespace-nowrap opacity-70 md:text-[300px] lg:text-[400px]",
          className,
        )}
      >
        {children}
      </span>
    </Marquee>
  );
};
