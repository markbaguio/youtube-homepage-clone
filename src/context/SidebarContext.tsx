import { createContext, ReactNode, useContext, useState } from "react";
import { LARGE_SCREEN } from "../utils/constants";

type SidebarProviderProps = {
  children: ReactNode;
};

// These are the  values that you can access if the children are inside the SidebarContextProvider.
type SidebarContextType = {
  isLargeOpen: boolean;
  isSmallOpen: boolean;
  toggle: () => void;
  close: () => void;
};

//Create Context
const SidebarContext = createContext<SidebarContextType | null>(null);

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isLargeOpen, setIsLargeOpen] = useState<boolean>(true);
  const [isSmallOpen, setIsSmallOpen] = useState<boolean>(false);

  function isSmallScreen() {
    return window.innerWidth < LARGE_SCREEN;
  }

  function toggle() {
    if (isSmallScreen()) {
      setIsSmallOpen((s) => !s);
    } else {
      setIsLargeOpen((l) => !l);
    }
  }

  function close() {
    if (isSmallScreen()) {
      setIsSmallOpen(false);
    } else {
      setIsLargeOpen(false);
    }
  }

  return (
    <SidebarContext.Provider
      value={{ isLargeOpen, isSmallOpen, toggle, close }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebarContext() {
  const value = useContext(SidebarContext);

  //if the sidebar context is being used outside the provider throw this error.
  if (value == null)
    throw Error("Cannot use this context outside the SidebarProvider.");
  return value;
}
