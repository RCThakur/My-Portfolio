import { cn } from "../lib/utils";
import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 scroll-mt-16",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-sm" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-xl font-bold text-foreground flex items-center gap-2 scroll-mt-16"
        >
          <img src="src/assets/R_logo.svg" alt="logo" className="w-6 h-6" />
          <span className="text-glow text-foreground">
            RCThakur{" "}
            <span className="text-foreground/80 font-normal">Portfolio</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-x-10 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="transition-colors duration-300 hover:text-primary text-foreground/80"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-4 z-50">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-2 text-foreground"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Overlay Nav */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center md:hidden z-40 transition-all duration-300",
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col gap-y-6 text-xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="transition-colors duration-300 hover:text-primary text-foreground/80"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
