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
          "text-outline absolute top-[50%] z-0 -translate-y-1/2 text-[200px] font-black text-nowrap opacity-75 md:text-[300px] lg:text-[400px]",
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

const ContentSummary = ({
  children,
  yearMarker,
  yearMarkerClassName,
  isEnd,
}: {
  children: string;
  yearMarker?: React.ReactNode;
  yearMarkerClassName?: string;
  isEnd: boolean;
}) => (
  <div
    className={cn(
      "mb-10 max-w-xl md:max-w-2xl",
      isEnd ? "ml-auto text-right" : "text-left",
    )}
  >
    {yearMarker && (
      <p
        className={cn(
          "mb-8 text-4xl font-black tracking-tight uppercase md:mb-12 md:text-7xl lg:text-8xl",
          yearMarkerClassName,
        )}
      >
        {yearMarker}
      </p>
    )}
    <div className="text-sm leading-relaxed font-semibold md:text-xl lg:text-2xl">
      <TextAnimate animation="slideUp" by="word">
        {children}
      </TextAnimate>
    </div>
  </div>
);

const ContentStory = ({
  story,
  isEnd,
}: {
  story: string[];
  isEnd: boolean;
}) => (
  <div className="border-foreground/20 mb-10 border-t pt-8">
    <div className={cn("w-full space-y-5", isEnd ? "text-right" : "text-left")}>
      {story.map((paragraph, i) => (
        <p key={i} className="text-sm leading-loose md:text-base lg:text-lg">
          <TextAnimate animation="slideUp" by="word">
            {paragraph}
          </TextAnimate>
        </p>
      ))}
    </div>
  </div>
);

const ContentResponsibilities = ({
  responsibilities,
  isEnd,
}: {
  responsibilities: string[];
  isEnd: boolean;
}) => (
  <div className="border-foreground/20 border-t pt-8">
    <p
      className={cn(
        "text-md mb-6 font-bold tracking-[0.3em] uppercase",
        isEnd ? "text-right" : "text-left",
      )}
    >
      Responsibilities &amp; Impact
    </p>
    <ul className="grid grid-cols-1 gap-x-16 gap-y-3 md:grid-cols-2">
      {responsibilities.map((item, i) => (
        <li
          key={i}
          className={cn(
            "flex gap-3 text-xs leading-snug font-medium md:text-sm",
            isEnd ? "flex-row-reverse text-right" : "flex-row",
          )}
        >
          <span className="mt-0.5 shrink-0">—</span>
          <TextAnimate animation="slideUp" by="word">
            {item}
          </TextAnimate>
        </li>
      ))}
    </ul>
  </div>
);

export const ContentContainer = ({
  children,
  className,
  yearMarker,
  yearMarkerClassName,
  story,
  responsibilities,
  contentAlignment = "start",
}: {
  children: string;
  className?: string;
  yearMarker?: React.ReactNode;
  yearMarkerClassName?: string;
  story?: string[];
  responsibilities?: string[];
  contentAlignment?: "start" | "end";
}) => {
  const isEnd = contentAlignment === "end";

  return (
    <div className={cn("relative z-10 w-full", className)}>
      <ContentSummary
        yearMarker={yearMarker}
        yearMarkerClassName={yearMarkerClassName}
        isEnd={isEnd}
      >
        {children}
      </ContentSummary>

      {story && story.length > 0 && (
        <ContentStory story={story} isEnd={isEnd} />
      )}

      {responsibilities && responsibilities.length > 0 && (
        <ContentResponsibilities
          responsibilities={responsibilities}
          isEnd={isEnd}
        />
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
        "bg-secondary z-10 flex h-28 w-28 shrink-0 items-center justify-center rounded-full text-center font-(family-name:--font-zeyada) text-sm md:h-40 md:w-40 md:text-xl",
        className,
      )}
    >
      {children}
    </span>
  );
};
