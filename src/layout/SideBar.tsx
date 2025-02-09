import { Home } from "lucide-react";
import { ElementType } from "react";
import { buttonStyles } from "../components/Button";
import { twMerge } from "tailwind-merge";

export default function SideBar() {
  return (
    <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden">
      <SmallSideBarItem Icon={Home} title="Home" url="/" />
    </aside>
  );
}

type SmallSideBarProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

function SmallSideBarItem({ Icon, title, url }: SmallSideBarProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "py-4 px-1 flex flex-col items-center rounded-lg"
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </a>
  );
}
