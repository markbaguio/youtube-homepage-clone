import { Home, Repeat, MailCheck, Library, Divide } from "lucide-react";
import { Children, ElementType, PropsWithChildren, ReactNode } from "react";
import { buttonStyles } from "../components/Button";
import { twMerge } from "tailwind-merge";

export default function SideBar() {
  /**
   * sidebar size is based on the screen size
   */
  return (
    <>
      <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden">
        <SmallSideBarItem Icon={Home} title="Home" url="/" />
        <SmallSideBarItem Icon={Repeat} title="Shorts" url="/" />
        <SmallSideBarItem Icon={MailCheck} title="Subscription" url="/" />
        <SmallSideBarItem Icon={Library} title="Library" url="/" />
      </aside>
      <aside className="w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col gap-2 px-2">
        <LargeSideBarSection visibleItemCount={1} title="test">
          <LargeSideBarItem Icon={Home} title="Home" url="/" />
          <LargeSideBarItem Icon={Home} title="Home" url="/" />
          <LargeSideBarItem Icon={Home} title="Home" url="/" />
        </LargeSideBarSection>
      </aside>
    </>
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

type LargeSideBarSectionProps = {
  children: ReactNode;
  title?: string;
  visibleItemCount?: number;
};

type LargeSideBarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
  isActive?: boolean;
};

function LargeSideBarSection({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}: LargeSideBarSectionProps) {
  const childrenArray = Children.toArray(children).flat();
  const visibleChildren = childrenArray.slice(0, visibleItemCount);

  return (
    <div>
      {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
      {visibleChildren}
    </div>
  );
}

function LargeSideBarItem({
  Icon,
  title,
  url,
  isActive = false,
}: LargeSideBarItemProps) {
  return (
    <a
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `w-full flex items-center rounded-lg gap-4 p-3 ${
          isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined
        }`
      )}
      href={url}
    >
      <Icon className="w-6 h-6" />
      <div className=" whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>
    </a>
  );
}
