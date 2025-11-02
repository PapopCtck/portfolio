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
        <span className="text-(--background) my-auto uppercase font-normal text-4xl md:text-7xl xl:text-8xl leading-[1.2]">
          {hoverProps.text}
        </span>
        {hoverProps.image && (
          <div
            className="w-[200px] h-[90%] my-[auto] mx-0 p-[1em_0] rounded-[50px] bg-cover bg-center"
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
          "flex flex-1 cursor-pointer items-start justify-between gap-4 rounded-md px-7 py-6 text-left font-medium text-sm outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 md:px-16 md:py-20 [&[data-state=open]>svg]:rotate-180",
          triggerClassName,
        )}
        {...props}
        onMouseEnter={showHoverText ? handleMouseEnter : undefined}
        onMouseLeave={showHoverText ? handleMouseLeave : undefined}
      >
        {children}
        {showChevron && (
          <ChevronDownIcon className="pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" />
        )}
      </AccordionPrimitive.Trigger>
      <motion.div
        className="absolute z-10 top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-white"
        initial={{ y: "101%" }}
        animate={{ y: marqueeY }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="h-full w-[200%] flex"
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
      className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
