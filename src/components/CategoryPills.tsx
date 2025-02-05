import { ChevronLeft } from "lucide-react";
import { Category } from "../dummy-data/home";
import { Button } from "./Button";

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
      <div className="absolute top-1/2 left-0 -translate-y-1/2 bg-gradient-to-r from-white from-50%  to-transparent w-24">
        <Button
          variant="ghost"
          size="icon"
          className="h-full aspect-square w-auto p-1.5"
        >
          <ChevronLeft />
        </Button>
      </div>
    </div>
  );
}
