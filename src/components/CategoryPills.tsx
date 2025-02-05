import { ChevronLeft, ChevronRight } from "lucide-react";
import { Category } from "../dummy-data/home";
import { Button } from "./Button";
import { useState } from "react";

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
  const [isLeftVisible, setIsLeftVisible] = useState<boolean>(false);
  const [isRightVisible, setIsRightVisible] = useState<boolean>(true);

  return (
    <div className="overflow-x-hidden relative">
      <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
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
        <div className="absolute left-0  top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50%  to-transparent w-24 h-full">
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
          >
            <ChevronLeft />
          </Button>
        </div>
      )}
      {isRightVisible && (
        <div className="absolute right-0  top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50%  to-transparent w-24 h-full flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
}
