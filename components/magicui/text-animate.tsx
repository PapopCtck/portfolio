"use client";

import { cn } from "@ppaop/lib/utils";
import {
  AnimatePresence,
  motion,
  type MotionProps,
  type Variants,
} from "motion/react";
import type { ElementType } from "react";

type AnimationType = "text" | "word" | "character" | "line";
type AnimationVariant =
  | "fadeIn"
  | "blurIn"
  | "blurInUp"
  | "blurInDown"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "scaleUp"
  | "scaleDown";

// Animation configuration
const animationConfig = {
  staggerTimings: {
    text: 0.06,
    word: 0.05,
    character: 0.03,
    line: 0.06,
  },
  containerVariants: {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  },
  itemVariants: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: { opacity: 0 },
  },
};

// Parameter object for animation variants
interface AnimationVariantConfig {
  container: Variants;
  item: Variants;
}

// Animation variant factory
const createAnimationVariant = (
  type: AnimationVariant,
): AnimationVariantConfig => {
  const baseConfig = {
    container: animationConfig.containerVariants,
    item: animationConfig.itemVariants,
  };

  switch (type) {
    case "fadeIn":
      return {
        container: baseConfig.container,
        item: {
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
          exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
        },
      };
    case "blurIn":
      return {
        container: baseConfig.container,
        item: {
          hidden: { opacity: 0, filter: "blur(10px)" },
          show: {
            opacity: 1,
            filter: "blur(0px)",
            transition: { duration: 0.3 },
          },
          exit: {
            opacity: 0,
            filter: "blur(10px)",
            transition: { duration: 0.3 },
          },
        },
      };
    case "blurInUp":
      return {
        container: baseConfig.container,
        item: {
          hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
          show: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: {
              y: { duration: 0.3 },
              opacity: { duration: 0.4 },
              filter: { duration: 0.3 },
            },
          },
          exit: {
            opacity: 0,
            filter: "blur(10px)",
            y: 20,
            transition: {
              y: { duration: 0.3 },
              opacity: { duration: 0.4 },
              filter: { duration: 0.3 },
            },
          },
        },
      };
    case "blurInDown":
      return {
        container: baseConfig.container,
        item: {
          hidden: { opacity: 0, filter: "blur(10px)", y: -20 },
          show: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: {
              y: { duration: 0.3 },
              opacity: { duration: 0.4 },
              filter: { duration: 0.3 },
            },
          },
        },
      };
    case "slideUp":
      return {
        container: baseConfig.container,
        item: {
          hidden: { y: 20, opacity: 0 },
          show: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.3,
            },
          },
        },
      };
    case "slideDown":
      return {
        container: baseConfig.container,
        item: {
          hidden: { y: -20, opacity: 0 },
          show: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.3 },
          },
          exit: {
            y: 20,
            opacity: 0,
            transition: { duration: 0.3 },
          },
        },
      };
    case "slideLeft":
      return {
        container: baseConfig.container,
        item: {
          hidden: { x: 20, opacity: 0 },
          show: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.3 },
          },
          exit: {
            x: -20,
            opacity: 0,
            transition: { duration: 0.3 },
          },
        },
      };
    case "slideRight":
      return {
        container: baseConfig.container,
        item: {
          hidden: { x: -20, opacity: 0 },
          show: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.3 },
          },
          exit: {
            x: 20,
            opacity: 0,
            transition: { duration: 0.3 },
          },
        },
      };
    case "scaleUp":
      return {
        container: baseConfig.container,
        item: {
          hidden: { scale: 0.5, opacity: 0 },
          show: {
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.3,
              scale: {
                type: "spring",
                damping: 15,
                stiffness: 300,
              },
            },
          },
          exit: {
            scale: 0.5,
            opacity: 0,
            transition: { duration: 0.3 },
          },
        },
      };
    case "scaleDown":
      return {
        container: baseConfig.container,
        item: {
          hidden: { scale: 1.5, opacity: 0 },
          show: {
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.3,
              scale: {
                type: "spring",
                damping: 15,
                stiffness: 300,
              },
            },
          },
          exit: {
            scale: 1.5,
            opacity: 0,
            transition: { duration: 0.3 },
          },
        },
      };
    default:
      return baseConfig;
  }
};

// Text segmentation service
const TextSegmenter = {
  segment(text: string, by: AnimationType): string[] {
    switch (by) {
      case "word":
        return text.split(/(\s+)/);
      case "character":
        return text.split("");
      case "line":
        return text.split("\n");
      case "text":
      default:
        return [text];
    }
  },
};

// Component parameter object
interface TextAnimateParams {
  children: string;
  delay?: number;
  duration?: number;
  variants?: Variants;
  className?: string;
  segmentClassName?: string;
  as?: ElementType;
  startOnView?: boolean;
  once?: boolean;
  by?: AnimationType;
  animation?: AnimationVariant;
}

// Helper function to get final variants
const getFinalVariants = (
  variants: Variants | undefined,
  animationVariant: AnimationVariantConfig,
  delay: number,
  duration: number,
  segments: string[],
): { container: Variants; item: Variants } => {
  if (variants) {
    return {
      container: {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            opacity: { duration: 0.01, delay },
            delayChildren: delay,
            staggerChildren: duration / segments.length,
          },
        },
        exit: {
          opacity: 0,
          transition: {
            staggerChildren: duration / segments.length,
            staggerDirection: -1,
          },
        },
      },
      item: variants,
    };
  }

  return {
    container: {
      ...animationVariant.container,
      show: {
        ...animationVariant.container.show,
        transition: {
          delayChildren: delay,
          staggerChildren: duration / segments.length,
        },
      },
      exit: {
        ...animationVariant.container.exit,
        transition: {
          staggerChildren: duration / segments.length,
          staggerDirection: -1,
        },
      },
    },
    item: animationVariant.item,
  };
};

const getStaggerTimings = (by: AnimationType) => {
  switch (by) {
    case "character":
      return animationConfig.staggerTimings.character;
    case "line":
      return animationConfig.staggerTimings.line;
    case "text":
      return animationConfig.staggerTimings.text;
    case "word":
    default:
      return animationConfig.staggerTimings.word;
  }
};

export function TextAnimate({
  children,
  delay = 0,
  duration = 0.3,
  variants,
  className,
  segmentClassName,
  as: Component = "p",
  startOnView = true,
  once = false,
  by = "word",
  animation = "fadeIn",
  ...props
}: TextAnimateParams & MotionProps) {
  const MotionComponent = motion.create(Component);
  const segments = TextSegmenter.segment(children, by);
  const animationVariant = createAnimationVariant(animation);
  const finalVariants = getFinalVariants(
    variants,
    animationVariant,
    delay,
    duration,
    segments,
  );
  const staggerTimings = getStaggerTimings(by);

  return (
    <AnimatePresence mode="popLayout">
      <MotionComponent
        variants={finalVariants.container}
        initial="hidden"
        whileInView={startOnView ? "show" : undefined}
        animate={startOnView ? undefined : "show"}
        exit="exit"
        className={cn("whitespace-pre-wrap", className)}
        viewport={{ once }}
        {...props}
      >
        {segments.map((segment, i) => (
          <motion.span
            // biome-ignore lint/suspicious/noArrayIndexKey: we don't have a better key
            key={`${by}-${segment}-${i}`}
            variants={finalVariants.item}
            custom={i * staggerTimings}
            className={cn(
              by === "line" ? "block" : "inline-block whitespace-pre",
              by === "character" && "",
              segmentClassName,
            )}
          >
            {segment}
          </motion.span>
        ))}
      </MotionComponent>
    </AnimatePresence>
  );
}
