"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  type UseInViewOptions,
  type Variants,
  type MotionProps,
} from "motion/react";
import { useRef } from "react";

type MarginType = UseInViewOptions["margin"];

interface AnimationConfig {
  duration: number;
  delay: number;
  offset: number;
  direction: "up" | "down" | "left" | "right";
  blur: string;
}

interface BlurFadeProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  animationConfig?: Partial<AnimationConfig>;
  inView?: boolean;
  inViewMargin?: MarginType;
}

const defaultAnimationConfig: AnimationConfig = {
  duration: 0.4,
  delay: 0,
  offset: 6,
  direction: "down",
  blur: "6px",
};

const getDirectionProperty = (direction: string) => {
  return direction === "left" || direction === "right" ? "x" : "y";
};

const getDirectionValue = (direction: string, offset: number, isHidden: boolean) => {
  if (isHidden) {
    return direction === "right" || direction === "down" ? -offset : offset;
  }
  return 0;
};

const createDefaultVariants = (config: AnimationConfig): Variants => {
  const { direction, offset, blur } = config;
  const property = getDirectionProperty(direction);

  return {
    hidden: {
      [property]: getDirectionValue(direction, offset, true),
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      [property]: getDirectionValue(direction, offset, false),
      opacity: 1,
      filter: 'blur(0px)',
    },
  };
};

export function BlurFade({
  children,
  className,
  variant,
  animationConfig = {},
  inView = false,
  inViewMargin = "-50px",
  ...props
}: BlurFadeProps) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;

  const config = { ...defaultAnimationConfig, ...animationConfig };
  const combinedVariants = variant ?? createDefaultVariants(config);

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: 0.04 + config.delay,
          duration: config.duration,
          ease: "easeOut",
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
