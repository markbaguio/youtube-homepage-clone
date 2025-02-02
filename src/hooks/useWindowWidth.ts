import { useEffect, useRef, useState } from "react";

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
}

export function checkWindowWidth(targetWidth: number): boolean {
  const windowWidth = useWindowWidth();

  return windowWidth >= targetWidth ? true : false;
}

export function useWindowWidthMatch(targetWidth: number): boolean {
  const isMatch = useRef(false); // Ref to hold the match status without triggering re-renders

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      isMatch.current = currentWidth === targetWidth;
    };

    // Initial check on mount
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [targetWidth]);

  return isMatch.current; // Return the current match status
}
