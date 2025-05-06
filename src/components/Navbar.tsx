
import { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Research & Publications", href: "/research" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="backdrop-blur-sm bg-background/90 sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="font-semibold text-lg text-petrol dark:text-accent">
              Elmira Mirzabeigi
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-petrol dark:text-gray-300 dark:hover:text-accent px-3 py-2 text-sm font-medium story-link"
              >
                {item.name}
              </Link>
            ))}
            
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <Sun size={20} className="text-accent" /> : <Moon size={20} />}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <Sun size={20} className="text-accent" /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-petrol dark:hover:text-accent block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
