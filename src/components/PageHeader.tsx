import { Menu } from "lucide-react";

export function PageHeader() {
  return (
    <>
      <div className="flex gap-10 justify-between">
        <div className="flex gap-4 lg:gap-20 justify-normal">
          <button>
            <Menu />
          </button>
          <a href="/">asdasd</a>
        </div>
        <div className="2"></div>
      </div>
    </>
  );
}
