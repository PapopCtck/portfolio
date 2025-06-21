import { cn } from "@ppaop/lib/utils";
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
          "relative z-10 font-black text-2xl md:text-6xl lg:text-7xl",
          headerClassName
        )}
      >
        {header}
      </span>
      <span
        className={cn(
          "-translate-y-1/2 absolute top-[50%] z-0 text-nowrap font-black text-9xl text-outline opacity-75 md:text-[300px] lg:text-[400px]",
          backgroundClassName
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
}: {
  children: React.ReactNode;
  className?: string;
  triggerClassName?: string;
}) => {
  return (
    <AccordionTrigger
      showChevron={false}
      className={cn("relative overflow-hidden", className)}
      triggerClassName={cn(
        "relative overflow-hidden rounded-none",
        triggerClassName
      )}
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
        className
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
        marqueeClassName
      )}
      {...marqueeProps}
    >
      <span
        className={cn(
          "whitespace-nowrap text-nowrap font-black text-9xl text-outline-secondary opacity-70 md:text-[196px] lg:text-[256px]",
          className
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
        "font-(family-name:--font-zeyada) absolute right-[-80px] z-10 flex h-32 w-32 items-center justify-center rounded-full bg-secondary md:h-44 md:w-44 md:text-xl",
        className
      )}
    >
      {children}
    </span>
  );
};

export const ClientList = ({
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
    <div className={cn("", className)}>
      <p className="mb-8 px-16 font-black text-2xl text-outline tracking-[32%] md:px-24 md:text-3xl">
        CLIENTS
      </p>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee {...marqueeProps} className={cn("[--gap:6rem]", marqueeClassName)}>
          {children}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
      </div>
    </div>
  );
};
