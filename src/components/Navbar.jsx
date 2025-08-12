import { cn } from "../lib/utils";
import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import logo from "../assets/R_logo.svg";

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

  // Detect scroll for style change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll without URL change + navbar offset
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      const navHeight = document.querySelector("nav").offsetHeight;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };

  // Resume handler: open in new tab + download
  const handleResumeClick = (e) => {
    e.preventDefault();

    // Open the Google Drive view link in new tab
    window.open(
      "https://drive.google.com/file/d/10s99uxXCNJFRRCUNx10fYIqH0mPelB4I/view?usp=sharing",
      "_blank"
    );

    // Trigger download in background
    const downloadLink = document.createElement("a");
    downloadLink.href = "https://drive.google.com/uc?export=download&id=10s99uxXCNJFRRCUNx10fYIqH0mPelB4I";
    downloadLink.download = "RCThakur_Resume.pdf";
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <nav
      className={cn(
        "fixed w-full h-18 z-50 transition-all duration-300 bg-gradient-to-r from-primary/70 to-foreground/20 shadow-md backdrop-blur-sm",
        isScrolled
          ? "py-3 bg-gradient-to-r from-primary/70 to-foreground/20 shadow-md backdrop-blur-sm"
          : "py-5"
      )}
    >
      <div className="container px-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="text-xl font-bold text-foreground flex items-center gap-2 cursor-pointer"
        >
          <img src={logo} alt="logo" className="w-6 h-6" />
          <span className="text-glow text-foreground">
            RCThakur{" "}
            <span className="text-foreground/80 font-normal">Portfolio</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-x-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="transition-colors duration-300 hover:text-primary text-foreground/80 cursor-pointer"
            >
              {item.name}
            </a>
          ))}

          {/* Resume Button */}
          <a
            href="#"
            onClick={handleResumeClick}
            className="px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300
              border border-gray-800 bg-gray-800 text-white hover:bg-white hover:text-gray-900 hover:border-white
              dark:border-primary dark:bg-primary dark:text-black dark:hover:bg-white dark:hover:text-primary dark:hover:border-white"
          >
            Resume
          </a>

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
            "fixed top-0 left-0 w-full h-screen bg-background/95 dark:bg-primary/95 backdrop-blur-md",
            "flex flex-col items-center justify-center md:hidden transition-all duration-300 z-[60]",
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
            className="absolute top-5 right-5 p-2 text-foreground bg-white/10 rounded-full backdrop-blur hover:bg-white/20 transition"
          >
            <X size={24} />
          </button>

          {/* Mobile Links */}
          <div className="flex flex-col items-center gap-y-6 text-lg font-medium">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  handleNavClick(e, item.href);
                  setIsOpen(false);
                }}
                className="transition-colors duration-300 hover:text-primary text-foreground/80 cursor-pointer"
              >
                {item.name}
              </a>
            ))}

            {/* Mobile Resume Button */}
            <a
              href="#"
              onClick={(e) => {
                handleResumeClick(e);
                setIsOpen(false);
              }}
              className="px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300
                border border-gray-800 bg-gray-800 text-white hover:bg-white hover:text-gray-900 hover:border-white
                dark:border-primary dark:bg-primary dark:text-black dark:hover:bg-white dark:hover:text-primary dark:hover:border-white"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
