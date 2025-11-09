"use client";
import CurvedLoop from "@ppaop/components/react-bits/CurvedLoop";
import { useScrollBasedCurve } from "@ppaop/hooks/useScrollBasedCurve";

export const InteractiveCurvedLoop = ({
  reverse = false,
}: {
  reverse?: boolean;
}) => {
  const { sectionRef, curveAmountValue } = useScrollBasedCurve({
    reverse,
    inputRange: [0.3, 0.7],
    outputRange: [-200, 200],
  });

  return (
    <section ref={sectionRef}>
      <CurvedLoop
        className="text-glow"
        marqueeText="// PAPOP ✦"
        speed={1.2}
        curveAmount={curveAmountValue}
        interactive={false}
      />
    </section>
  );
};
