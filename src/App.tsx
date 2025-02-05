import { useState } from "react";
import { CategoryPills } from "./components/CategoryPills";
import { CATEGORIES, Category } from "./dummy-data/home";
import { PageHeader } from "./layout/PageHeader";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    CATEGORIES[0]
  );

  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto, 1fr] flex-grow-1 overflow-auto">
        <div>SideBar</div>
        <div className="sticky top-0 bg-white z-10 pb-4">
          <CategoryPills
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
