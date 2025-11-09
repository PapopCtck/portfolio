"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@ppaop/utils";
import { motion } from "motion/react";
import { useRef, useState, useMemo } from "react";
import { Marquee } from "../magicui/marquee";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-foreground border-b first:border-t", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  showChevron = true,
  showHoverText = true,
  triggerClassName,
  hoverProps = {
    text: "",
    image: "",
    duration: 8,
    repeat: 9,
  },
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  showChevron?: boolean;
  showHoverText?: boolean;
  triggerClassName?: string;
  hoverProps?: {
    text?: string;
    image?: string;
    duration?: number;
    repeat?: number;
  };
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [edge, setEdge] = useState<"top" | "bottom">("bottom");

  const findClosestEdge = (
    mouseX: number,
    mouseY: number,
    width: number,
    height: number,
  ): "top" | "bottom" => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist =
      Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const handleMouseEnter = (ev: React.MouseEvent<HTMLButtonElement>) => {
    if (!itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const closestEdge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height,
    );
    setEdge(closestEdge);
    setIsHovered(true);
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLButtonElement>) => {
    if (!itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const closestEdge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height,
    );
    setEdge(closestEdge);
    setIsHovered(false);
  };

  const repeatedMarqueeContent = useMemo(() => {
    return (
      <>
        <span className="my-auto text-4xl leading-[1.2] font-normal text-(--background) uppercase md:text-7xl xl:text-8xl">
          {hoverProps.text}
        </span>
        {hoverProps.image && (
          <div
            className="mx-0 my-[auto] h-[90%] w-[200px] rounded-[50px] bg-cover bg-center p-[1em_0]"
            style={{ backgroundImage: `url(${hoverProps.image})` }}
          />
        )}
      </>
    );
  }, [hoverProps.image, hoverProps.text]);

  const marqueeY = isHovered ? "0%" : edge === "top" ? "-101%" : "101%";

  const marqueeInnerY = isHovered ? "0%" : edge === "top" ? "101%" : "-101%";

  return (
    <AccordionPrimitive.Header className={cn("flex", className)} ref={itemRef}>
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 cursor-pointer items-start justify-between gap-4 rounded-md px-7 py-6 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 md:px-16 md:py-20 [&[data-state=open]>svg]:rotate-180",
          triggerClassName,
        )}
        {...props}
        onMouseEnter={showHoverText ? handleMouseEnter : undefined}
        onMouseLeave={showHoverText ? handleMouseLeave : undefined}
      >
        {children}
        {showChevron && (
          <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
        )}
      </AccordionPrimitive.Trigger>
      <motion.div
        className="pointer-events-none absolute top-0 left-0 z-10 h-full w-full overflow-hidden bg-white"
        initial={{ y: "101%" }}
        animate={{ y: marqueeY }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="flex h-full w-[200%]"
          initial={{ y: "-101%" }}
          animate={{ y: marqueeInnerY }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Marquee
            duration={hoverProps.duration}
            repeat={hoverProps.repeat}
            className="p-0"
          >
            {repeatedMarqueeContent}
          </Marquee>
        </motion.div>
      </motion.div>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
