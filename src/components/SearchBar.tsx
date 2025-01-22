import { ArrowLeft, Mic, Search } from "lucide-react";
import { Button } from "./Button";

type SearchBarProps = {
  showFullWidthSearch: boolean;
  onBackButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  // setShowFullWidthSearch: (value: boolean) => void;
};

export default function SearchBar({
  showFullWidthSearch,
  onBackButtonClick,
}: SearchBarProps) {
  return (
    <form
      className={`gap-4 flex-grow justify-center ${
        showFullWidthSearch ? "flex" : "hidden md:flex"
      }`}
    >
      {showFullWidthSearch && (
        <Button
          onClick={onBackButtonClick}
          type="button"
          size="icon"
          variant="ghost"
          className="flex-shrink-0"
        >
          <ArrowLeft />
        </Button>
      )}
      <div className="flex flex-grow max-w-[600px]">
        <input
          type="search"
          placeholder="Search"
          className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full
              focus:border-blue-500 outline-none"
        />
        <Button className="py-2 px-4 rounded-r-full border border-secondary-border border-l-0 flex-shrink-0">
          <Search />
        </Button>
      </div>
      <Button type="button" size="icon" className="flex-shrink-0">
        <Mic />
      </Button>
    </form>
  );
}
