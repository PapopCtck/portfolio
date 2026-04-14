"use client";

import Link from "next/link";
import { useScrollDirection } from "@ppaop/hooks/useScrollDirection";
import { GlassPanel } from "./glass-panel";

export const Navbar = () => {
  const isScrollingUp = useScrollDirection();

  return (
    <nav
      className={`relative ${isScrollingUp ? "top-6" : "top-2"} left-0 z-1200 mx-auto w-full max-w-[1024px] px-2 transition-all delay-300 duration-300 ease-in-out`}
    >
      <GlassPanel className="mx-auto flex h-full w-full items-center justify-between px-5 py-3">
        <a href="#hero" className="text-glow text-[19px] font-bold text-white">
          {`//`}
        </a>
        <div className="hidden items-center gap-6 font-semibold sm:flex">
          <NavbarItem href="#tech-stack">Tech Stack</NavbarItem>
          <Divider />
          <NavbarItem href="#previous-work">Previous Work</NavbarItem>
          <Divider />
          <NavbarItem href="#contact">Contact</NavbarItem>
        </div>
      </GlassPanel>
    </nav>
  );
};

const NavbarItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="flex items-center text-sm font-light text-white"
    >
      {children}
    </Link>
  );
};

const Divider = () => {
  return <div className="h-[20px] w-px bg-white/10" />;
};
