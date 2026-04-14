"use client";
import dynamic from "next/dynamic";
import type { BeamsProps } from "@ppaop/components/react-bits/Beams";

const Beams = dynamic(() => import("@ppaop/components/react-bits/Beams"), {
  ssr: false,
});

export const BeamsClient = (props: BeamsProps) => <Beams {...props} />;
