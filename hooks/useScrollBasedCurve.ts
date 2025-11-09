"use client";

import { useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { useRef, useState } from "react";

interface UseScrollBasedCurveOptions {
  reverse?: boolean;
  inputRange?: [number, number];
  outputRange?: [number, number];
}

/**
 * Custom hook for scroll-based curve animation
 * @param options Configuration options for the curve animation
 * @returns Object containing sectionRef and curveAmountValue
 */
export const useScrollBasedCurve = ({
  reverse = false,
  inputRange = [0.3, 0.7],
  outputRange = [-200, 200],
}: UseScrollBasedCurveOptions = {}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const curveAmount = useTransform(
    scrollYProgress,
    reverse ? [inputRange[1], inputRange[0]] : inputRange,
    outputRange,
  );
  const [curveAmountValue, setCurveAmountValue] = useState(outputRange[0]);

  useMotionValueEvent(curveAmount, "change", (latest) => {
    setCurveAmountValue(latest);
  });

  return { sectionRef, curveAmountValue };
};
