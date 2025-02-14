import { ChevronLeft, ChevronRight } from "lucide-react";
import { Category } from "../dummy-data/home";
import { Button } from "./Button";
import { useEffect, useRef, useState } from "react";
import { TRANSLATE_AMOUNT } from "../utils/constants";

type CategoryPillsProps = {
  categories: Category[];
  selectedCategory: Category;
  onSelect: (category: Category) => void;
};

export function CategoryPills({
  categories,
  selectedCategory,
  onSelect,
}: CategoryPillsProps) {
  const [translate, setTranslate] = useState<number>(0);
  const [isLeftVisible, setIsLeftVisible] = useState<boolean>(false);
  const [isRightVisible, setIsRightVisible] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  //TODO: Implement the left and right scroll of the category pills section.
  /**
   ** useRef hook - for getting data, in this case the current scroll width(full scroll width) and client width(visible width)
   */

  /**
   ** This useEffect will re-run is the given dependencies changed to determine when to show/hide the left and right scroll buttons.
   */
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
  }, [categories, translate]);

  return (
    <div
      ref={containerRef}
      className="dark:bg-almost-black overflow-x-hidden relative"
    >
      <div
        className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]"
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => onSelect(category)}
            variant={selectedCategory.id === category.id ? "dark" : "default"}
            className="py-1 px-3 rounded-lg whitespace-nowrap"
          >
            {category.category}
          </Button>
        ))}
      </div>
      {isLeftVisible && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r dark:from-almost-black from-white from-50%  to-transparent w-24 h-full">
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
            onClick={() => {
              setTranslate((translate) => {
                const newTranslate = translate - TRANSLATE_AMOUNT;
                if (newTranslate <= 0) return 0;
                return newTranslate;
              });
            }}
          >
            <ChevronLeft />
          </Button>
        </div>
      )}
      {isRightVisible && (
        <div className="absolute right-0  top-1/2 -translate-y-1/2 bg-gradient-to-l dark:from-almost-black from-white from-50%  to-transparent w-24 h-full flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
            onClick={() => {
              setTranslate((translate) => {
                if (containerRef.current == null) return translate;

                /**
                 ** Scroll to the right.
                 */
                const newTranslate = translate + TRANSLATE_AMOUNT;

                /***
                 ** check if the right scroll is going over the edge.
                 ** [container.current.scrollWidth] is the full scroll width, edge to edge
                 ** [container.current.cliendWidth] is the current visible scroll width.
                 */
                const edge = containerRef.current.scrollWidth;
                const visibleWidth = containerRef.current.clientWidth;

                if (newTranslate + visibleWidth >= edge) {
                  return edge - visibleWidth;
                }
                return newTranslate;
              });
            }}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
}
