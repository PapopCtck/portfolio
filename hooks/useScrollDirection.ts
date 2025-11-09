"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom hook to detect scroll direction
 * @returns boolean indicating if user is scrolling up (true) or down (false)
 */
export const useScrollDirection = (): boolean => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(
        currentScrollY < lastScrollY.current || currentScrollY === 0,
      );
      lastScrollY.current = currentScrollY;
    };

    handleScroll(); // Check initial position
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrollingUp;
};
