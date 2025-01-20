import { Menu } from "lucide-react";
import logo from "../assets/clone-logo.png";

export function PageHeader() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between">
      <div className="flex gap-4 items-center flex-shrink-0">
        <button className="">
          <Menu />
        </button>
        <a href="">
          <img src={logo} className="h-6" />
        </a>
      </div>
      <div>section 2</div>
      <div>section 3</div>
    </div>
  );
}
