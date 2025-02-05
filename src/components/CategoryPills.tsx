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
            {category.id}
          </Button>
        ))}
      </div>
    </div>
  );
}
