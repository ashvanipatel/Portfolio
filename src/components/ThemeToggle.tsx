
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={cn(
        "rounded-full transition-all duration-300",
        theme === "dark" ? "bg-secondary border-green-400" : "bg-secondary border-red-400",
        className
      )}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-green-400 transition-all" />
      ) : (
        <Moon className="h-5 w-5 text-red-500 transition-all" />
      )}
    </Button>
  );
}
