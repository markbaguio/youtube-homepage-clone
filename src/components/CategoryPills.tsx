import { Category } from "../dummy-data/home";
import { Button } from "./Button";

type CategoryPillsProps = {
  categories: Category[];
};

export function CategoryPills({ categories }: CategoryPillsProps) {
  return (
    <div className="overflow-x-hidden relative">
      <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant="dark"
            className="py-1 px-3 rounded-lg whitespace-nowrap"
          >
            {category.category}
          </Button>
        ))}
      </div>
    </div>
  );
}
