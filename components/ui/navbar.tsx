"use client";

import Link from "next/link";
import { useScrollDirection } from "@ppaop/hooks/useScrollDirection";

export const Navbar = () => {
  const isScrollingUp = useScrollDirection();

  return (
    <nav
      className={`relative ${isScrollingUp ? "top-6" : "top-2"} left-0 z-50 mx-auto w-full max-w-[1024px] px-2 transition-all delay-300 duration-300 ease-in-out`}
    >
      <div className="mx-auto flex h-full w-full items-center justify-between rounded-[18px] bg-[rgba(255,255,255,0.05)] px-5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[10px] [-webkit-backdrop-filter:blur(10px)]">
        <a href="#hero" className="text-glow text-[19px] font-bold text-white">
          {`// PPAOP ✦`}
        </a>

        <div className="hidden items-center gap-6 font-semibold sm:flex">
          <Link
            href="#tech-stack"
            className="flex items-center text-sm text-white"
          >
            Tech Stack
          </Link>
          <Link
            href="#previous-work"
            className="flex items-center text-sm text-white"
          >
            Previous Work
          </Link>
          <Link
            href="#contact"
            className="flex items-center text-sm text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
