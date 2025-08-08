import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.85 }}
      className={cn(
        "p-2 rounded-full shadow-md transition duration-300",
        "bg-white/20 dark:bg-[#0f172a]/70 backdrop-blur-md",
        "hover:ring-2 hover:ring-offset-2 hover:ring-white/40 hover:dark:ring-cyan-400/40",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDarkMode ? "sun" : "moon"}
          initial={{ rotate: -180, scale: 0.5, opacity: 0 }}
          animate={{
            rotate: 0,
            scale: [1, 1.3, 1], // Bounce effect
            opacity: 1,
          }}
          exit={{ rotate: 180, scale: 0.5, opacity: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            scale: { duration: 0.3, ease: "easeOut" },
          }}
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-yellow-300 drop-shadow-md" />
          ) : (
            <Moon className="w-5 h-5 text-blue-900 drop-shadow-sm" />
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};
