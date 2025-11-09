import { cn } from "@ppaop/utils";
import { Marquee, type MarqueeProps } from "../magicui/marquee";
import { AccordionTrigger } from "../shadcn-ui/accordion";
import { TextAnimate } from "../magicui/text-animate";

export const Header = ({
  header,
  headerClassName,
  background,
  backgroundClassName,
}: {
  header: React.ReactNode;
  headerClassName?: string;
  background: React.ReactNode;
  backgroundClassName?: string;
}) => {
  return (
    <>
      <span
        className={cn(
          "relative z-10 text-2xl font-black md:text-6xl lg:text-7xl",
          headerClassName,
        )}
      >
        {header}
      </span>
      <span
        className={cn(
          "text-outline absolute top-[50%] z-0 -translate-y-1/2 text-9xl font-black text-nowrap opacity-75 md:text-[300px] lg:text-[400px]",
          backgroundClassName,
        )}
      >
        {background}
      </span>
    </>
  );
};

export const Trigger = ({
  children,
  className,
  triggerClassName,
  hoverProps,
}: {
  children: React.ReactNode;
  className?: string;
  triggerClassName?: string;
  hoverProps?: {
    text?: string;
    image?: string;
    duration?: number;
    repeat?: number;
  };
}) => {
  return (
    <AccordionTrigger
      showChevron={false}
      className={cn("relative overflow-hidden", className)}
      triggerClassName={cn(
        "relative overflow-hidden rounded-none",
        triggerClassName,
      )}
      hoverProps={hoverProps}
    >
      {children}
    </AccordionTrigger>
  );
};

export const ContentContainer = ({
  children,
  className,
  yearMarker,
  yearMarkerClassName,
}: {
  children: string;
  className?: string;
  yearMarker?: React.ReactNode;
  yearMarkerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "relative z-10 max-w-[230px] text-justify font-semibold md:max-w-[425px] md:text-2xl lg:max-w-[565px]",
        className,
      )}
    >
      <TextAnimate animation="slideUp" by="word">
        {children}
      </TextAnimate>
      {yearMarker && (
        <FloatingYearMarker className={cn("", yearMarkerClassName)}>
          {yearMarker}
        </FloatingYearMarker>
      )}
    </div>
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
          "text-outline-primary text-9xl font-black text-nowrap whitespace-nowrap opacity-70 md:text-[196px] lg:text-[256px]",
          className,
        )}
      >
        {children}
      </span>
    </Marquee>
  );
};

export const FloatingYearMarker = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "bg-secondary absolute right-[-80px] z-10 flex h-32 w-32 items-center justify-center rounded-full font-(family-name:--font-zeyada) md:h-44 md:w-44 md:text-xl",
        className,
      )}
    >
      {children}
    </span>
  );
};
