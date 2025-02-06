import { useEffect, useRef, useState } from "react";

export type useScrollVisibilityProps = {
  translate: number;
};

export function useScrollVisibility({ translate }: useScrollVisibilityProps) {
  const [isLeftVisible, setIsLeftVisible] = useState<boolean>(false);
  const [isRightVisible, setIsRightVisible] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current == null) return;

    const observer = new ResizeObserver((entries) => {
      const container = entries[0].target; // same as containerRef.current  which will target the div.

      setIsLeftVisible(translate > 0); //** Show scroll left button when there is  space to scroll to the left.
      setIsRightVisible(
        translate + container.clientWidth < container.scrollWidth
      ); //** Show scroll right button when there is space to scroll to the right.

      if (container == null) return;
    });

    observer.observe(containerRef.current);

    //** Clean up function
    return () => {
      observer.disconnect();
    };
  }, [translate]);

  return {
    containerRef,
    isLeftVisible,
    isRightVisible,
  };
}
