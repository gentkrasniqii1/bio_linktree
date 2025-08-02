
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 card-professional hover-lift icon-professional w-12 h-12 rounded-2xl shadow-lg"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-professional-primary transition-all duration-300" />
      ) : (
        <Moon className="h-5 w-5 text-professional-primary transition-all duration-300" />
      )}
      
      {/* Professional Background Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </Button>
  );
};
