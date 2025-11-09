"use client";

import Link from "next/link";
import { useScrollDirection } from "@ppaop/hooks/useScrollDirection";

export const Navbar = () => {
  const isScrollingUp = useScrollDirection();

  return (
    <nav
      className={`relative ${isScrollingUp ? "top-8" : "top-2"} left-0 w-full px-2 max-w-[1024px] mx-auto z-50 transition-all delay-300 duration-300 ease-in-out`}
    >
      <div className="mx-auto w-full h-full rounded-[18px] py-3 px-5 flex items-center justify-between bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] [-webkit-backdrop-filter:blur(10px)] border border-[rgba(255,255,255,0.1)] shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <a href="#hero" className="text-white text-[19px] font-bold text-glow">
          {`// PPAOP ✦`}
        </a>

        <div className="hidden sm:flex items-center gap-6 font-semibold">
          <Link
            href="#tech-stack"
            className="text-white text-sm flex items-center"
          >
            Tech Stack
          </Link>
          <Link
            href="#previous-work"
            className="text-white text-sm flex items-center"
          >
            Previous Work
          </Link>
          <Link
            href="#contact"
            className="text-white text-sm flex items-center"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
