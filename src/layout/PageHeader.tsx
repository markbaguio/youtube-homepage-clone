import { Menu, Upload, Bell, User, Mic, Search } from "lucide-react";
import logo from "../assets/clone-logo.png";
import { Button } from "../components/Button";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import { MD_SCREEN } from "../utils/constants";
import { useSidebarContext } from "../context/SidebarContext";
import ThemeToggle from "../components/ThemeToggle";
import { useTheme } from "../hooks/useTheme";

export function PageHeader() {
  const { darkMode } = useTheme();
  const [showFullWidthSearch, setShowFullWidthSearch] =
    useState<boolean>(false);

  function handleBackButtonClick() {
    setShowFullWidthSearch(false);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MD_SCREEN) {
        setShowFullWidthSearch(false);
      }
    };

    window.addEventListener("resize", handleResize);

    //clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      {/* <div
        className={` gap-4 items-center flex-shrink-0 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <button onClick={toggle} className="">
          <Menu />
        </button>
        <a href="">
          <img src={logo} className="h-6" />
        </a>
      </div> */}
      <PageHeaderFirstSection
        hidden={showFullWidthSearch}
        darkMode={darkMode}
      />
      <SearchBar
        onBackButtonClick={handleBackButtonClick}
        showFullWidthSearch={showFullWidthSearch}
      />
      <div
        className={`flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          size="icon"
          variant="ghost"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Mic />
        </Button>
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
        <ThemeToggle />
      </div>
    </div>
  );
}

type PageHeaderFirstSectionProps = {
  hidden?: boolean;
  darkMode: boolean;
};

export function PageHeaderFirstSection({
  hidden = false,
  darkMode,
}: PageHeaderFirstSectionProps) {
  const { toggle } = useSidebarContext();

  return (
    <div
      className={`pl-1.5 gap-4 items-center flex-shrink-0 ${
        hidden ? "hidden" : "flex"
      }`}
    >
      <button onClick={toggle} className="">
        <Menu />
      </button>
      <a href="">
        {darkMode ? (
          <h1 className="text-xl font-semibold">WebTube</h1>
        ) : (
          <img src={logo} className="text-amber-400 h-6" />
        )}
      </a>
    </div>
  );
}
