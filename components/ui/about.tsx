import { cn } from "@ppaop/lib/utils";
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
        "-translate-x-1/2 md:-translate-x-0 absolute z-20 max-w-[425px] text-justify font-semibold md:text-2xl lg:max-w-[560px]",
        className
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
        marqueeClassName
      )}
      {...marqueeProps}
    >
      <span
        className={cn(
          "whitespace-nowrap text-nowrap font-black text-9xl text-outline-secondary opacity-70 md:text-[300px] lg:text-[400px]",
          className
        )}
      >
        {children}
      </span>
    </Marquee>
  );
};
