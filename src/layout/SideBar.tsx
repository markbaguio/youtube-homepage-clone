import {
  Home,
  Repeat,
  MailCheck,
  Library,
  ChevronUp,
  ChevronDown,
  Clapperboard,
  History,
  SquarePlay,
  ListVideo,
  TvMinimalPlay,
  Clock4,
  ThumbsUp,
  Scissors,
  Flame,
  Music,
  MonitorPlay,
  Gamepad2,
  Newspaper,
  Trophy,
  Shirt,
  Settings,
  Flag,
  BadgeHelp,
  MessageCircleWarning,
} from "lucide-react";
import { Children, ElementType, ReactNode, useState } from "react";
import { Button, buttonStyles } from "../components/Button";
import { twMerge } from "tailwind-merge";
import { playlists, subscriptions } from "../dummy-data/sidebar";
import { useSidebarContext } from "../context/SidebarContext";
import { PageHeaderFirstSection } from "./PageHeader";

export default function SideBar() {
  /**
   * sidebar size is based on the screen size
   */

  const { isLargeOpen, isSmallOpen, close } = useSidebarContext();
  return (
    <>
      <aside
        className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 ${
          isLargeOpen ? "lg:hidden" : "lg:flex"
        }`}
      >
        <SmallSideBarItem Icon={Home} title="Home" url="/" />
        <SmallSideBarItem Icon={Repeat} title="Shorts" url="/" />
        <SmallSideBarItem Icon={MailCheck} title="Subscription" url="/" />
        <SmallSideBarItem Icon={Library} title="Library" url="/Library" />
      </aside>
      {isSmallOpen && (
        <div
          onClick={close}
          className="lg:hidden fixed inset-0 z-[999] bg-secondary-dark opacity-50"
        ></div>
      )}
      <aside
        className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 ${
          isLargeOpen ? "lg:flex" : "lg:hidden"
        } ${isSmallOpen ? "flex z-[999] bg-white max-h-screen" : "hidden"}`}
      >
        <div className={`lg:hidden pt-4 pb- px-2 sticky top-0 bg-white`}>
          <PageHeaderFirstSection />
        </div>
        <LargeSideBarSection>
          <LargeSideBarItem IconOrImgUrl={Home} title="Home" url="/" />
          <LargeSideBarItem
            IconOrImgUrl={SquarePlay}
            title="Shorts"
            url="/shorts"
          />
          <LargeSideBarItem
            IconOrImgUrl={Clapperboard}
            title="Subscription"
            url="/Subscription"
          />
        </LargeSideBarSection>
        <hr />
        <LargeSideBarSection visibleItemCount={5}>
          <LargeSideBarItem
            IconOrImgUrl={History}
            title="History"
            url="/history"
          />
          <LargeSideBarItem
            IconOrImgUrl={ListVideo}
            title="Playlist"
            url="/playlist"
          />
          <LargeSideBarItem
            IconOrImgUrl={TvMinimalPlay}
            title="Your videos"
            url="/videos"
          />
          <LargeSideBarItem
            IconOrImgUrl={Clock4}
            title="Watch later"
            url="/playlist?list=WL"
          />
          <LargeSideBarItem
            IconOrImgUrl={ThumbsUp}
            title="Liked videos"
            url="/liked-videos"
          />
          <LargeSideBarItem
            IconOrImgUrl={Scissors}
            title="Your clips"
            url="/clips"
          />
          {playlists.map((playlist) => (
            <LargeSideBarItem
              key={playlist.id}
              IconOrImgUrl={ListVideo}
              title={playlist.name}
              url={`/playlist/list=${playlist.id}`}
            />
          ))}
        </LargeSideBarSection>
        <hr />
        <LargeSideBarSection title="Subscription" visibleItemCount={3}>
          {subscriptions.map((subscription) => (
            <LargeSideBarItem
              key={subscription.id}
              IconOrImgUrl={subscription.imgUrl}
              title={subscription.channelName}
              url={`/@${subscription.channelName}`}
            />
          ))}
        </LargeSideBarSection>
        <hr />
        <LargeSideBarSection title="Explore">
          <LargeSideBarItem
            IconOrImgUrl={Flame}
            title="Trending"
            url="/trending"
          />
          <LargeSideBarItem IconOrImgUrl={Music} title="Music" url="/music" />
          <LargeSideBarItem
            IconOrImgUrl={MonitorPlay}
            title="Movies"
            url="/movies"
          />
          <LargeSideBarItem
            IconOrImgUrl={Gamepad2}
            title="Gaming"
            url="/gaming"
          />
          <LargeSideBarItem IconOrImgUrl={Newspaper} title="News" url="/news" />
          <LargeSideBarItem
            IconOrImgUrl={Trophy}
            title="Sports"
            url="/sports"
          />
          <LargeSideBarItem
            IconOrImgUrl={Shirt}
            title="Fashion & Beauty"
            url="/fashion"
          />
        </LargeSideBarSection>
        <hr />
        <LargeSideBarSection>
          <LargeSideBarItem
            IconOrImgUrl={Settings}
            title="Setting"
            url="/setting"
          />
          <LargeSideBarItem
            IconOrImgUrl={Flag}
            title="Report history"
            url="/report"
          />
          <LargeSideBarItem IconOrImgUrl={BadgeHelp} title="Help" url="/help" />
          <LargeSideBarItem
            IconOrImgUrl={MessageCircleWarning}
            title="Feedback"
            url="/feedback"
          />
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
  Icon?: ElementType;
};

function LargeSideBarSection({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}: LargeSideBarSectionProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const childrenArray = Children.toArray(children).flat();
  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, visibleItemCount);

  const showExpandedButton: boolean = childrenArray.length > visibleItemCount;
  const ButtonIcon: ElementType = isExpanded ? ChevronUp : ChevronDown;

  return (
    <div>
      {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
      {visibleChildren}
      {showExpandedButton && (
        <Button
          onClick={() => setIsExpanded((expaded) => !expaded)}
          variant="ghost"
          className="w-full flex items-center rounded-lg gap-4 p-3"
        >
          <ButtonIcon className="w-6 h-6" />
          <div>{isExpanded ? "Show Less" : "Show More"}</div>
        </Button>
      )}
    </div>
  );
}

type LargeSideBarItemProps = {
  IconOrImgUrl: ElementType | string;
  title: string;
  url: string;
  isActive?: boolean;
};

export function LargeSideBarItem({
  IconOrImgUrl,
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
      {typeof IconOrImgUrl === "string" ? (
        <img src={IconOrImgUrl} className="w-6 h-6 rounded-full" />
      ) : (
        <IconOrImgUrl className="w-6 h-6" />
      )}
      <div className=" whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>
    </a>
  );
}
