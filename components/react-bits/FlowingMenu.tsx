"use client";
import React from "react";
import { motion } from "motion/react";
import { Marquee } from "../magicui/marquee";

interface MenuItemProps {
  link: string;
  text: string;
  image: string;
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
}

export const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
  return (
    <div className="h-full w-full overflow-hidden">
      <nav className="m-0 flex h-full flex-col p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ link, text, image }) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const [edge, setEdge] = React.useState<"top" | "bottom">("bottom");

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

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
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

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
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

  const repeatedMarqueeContent = React.useMemo(() => {
    return (
      <>
        <span className="p-[1vh_1vw_0] text-[4vh] leading-[1.2] font-normal text-[#060010] uppercase">
          {text}
        </span>
        <div
          className="mx-0 my-[auto] h-[90%] w-[200px] rounded-[50px] bg-cover bg-center p-[1em_0]"
          style={{ backgroundImage: `url(${image})` }}
        />
      </>
    );
  }, [text, image]);

  const marqueeY = isHovered ? "0%" : edge === "top" ? "-101%" : "101%";

  const marqueeInnerY = isHovered ? "0%" : edge === "top" ? "101%" : "-101%";

  return (
    <div
      className="relative flex-1 overflow-hidden text-center shadow-[0_-1px_0_0_#fff]"
      ref={itemRef}
    >
      <a
        className="relative flex h-full cursor-pointer items-center justify-center text-[4vh] font-semibold text-white uppercase no-underline hover:text-[#060010] focus:text-white focus-visible:text-[#060010]"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </a>
      <motion.div
        className="pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden bg-white"
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
          <Marquee duration={10} repeat={6} className="p-0">
            {repeatedMarqueeContent}
          </Marquee>
        </motion.div>
      </motion.div>
    </div>
  );
};
