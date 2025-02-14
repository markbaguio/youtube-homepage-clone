import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { Button } from "./Button";

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
      {darkMode ? <Sun /> : <Moon />}
    </Button>
  );
}
