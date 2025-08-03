import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-5 right-5 z-50 p-3 rounded-full shadow-lg transition duration-300",
        "bg-white/20 dark:bg-[#0f172a]/70 backdrop-blur-md",
        "hover:ring-2 hover:ring-offset-2 hover:ring-white/40 hover:dark:ring-cyan-400/40",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400",
        "glow-effect" 
      )}
    >
      {isDarkMode ? (
        <Sun className="w-6 h-6 text-yellow-300 drop-shadow-md" />
      ) : (
        <Moon className="w-6 h-6 text-blue-900 drop-shadow-sm" />
      )}
    </button>
  );
};
