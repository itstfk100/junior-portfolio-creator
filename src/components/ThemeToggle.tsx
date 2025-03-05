
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full hover:text-primary"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 animate-scale-in" />
      ) : (
        <Moon className="h-5 w-5 animate-scale-in" />
      )}
    </Button>
  );
};

export default ThemeToggle;
