import { CategoryPills } from "./components/CategoryPills";
import { CATEGORIES } from "./dummy-data/home";
import { PageHeader } from "./layout/PageHeader";

function App() {
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto, 1fr] flex-grow-1 overflow-auto">
        <div>SideBar</div>
        <div className="sticky top-0 bg-white z-10 pb-4">
          <CategoryPills categories={CATEGORIES} />
        </div>
      </div>
    </div>
  );
}

export default App;
