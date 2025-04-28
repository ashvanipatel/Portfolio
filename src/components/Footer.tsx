
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Footer() {
  const { theme } = useTheme();
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollUp(scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer 
      className={cn(
        "py-8 border-t relative",
        theme === "dark" ? "border-green-900/20" : "border-red-900/10"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-xl font-bold flex items-center gap-2">
              <span 
                className={cn(
                  "bg-primary text-primary-foreground rounded px-2 py-1 text-sm",
                  theme === "dark" ? "bg-green-500" : "bg-red-500"
                )}
              >
                VM
              </span>
              Vikash Mishra
            </h3>
            <p className="text-muted-foreground text-sm mt-1">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <a 
              href="mailto:vikashmishra0200@gmail.com" 
              className={cn(
                "w-9 h-9 rounded-full flex items-center justify-center transition-colors",
                theme === "dark" 
                  ? "bg-green-500/10 hover:bg-green-500/20 text-green-400" 
                  : "bg-red-500/10 hover:bg-red-500/20 text-red-500"
              )}
              aria-label="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            
            <a 
              href="https://github.com" 
              className={cn(
                "w-9 h-9 rounded-full flex items-center justify-center transition-colors",
                theme === "dark" 
                  ? "bg-green-500/10 hover:bg-green-500/20 text-green-400" 
                  : "bg-red-500/10 hover:bg-red-500/20 text-red-500"
              )}
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            
            <a 
              href="https://linkedin.com" 
              className={cn(
                "w-9 h-9 rounded-full flex items-center justify-center transition-colors",
                theme === "dark" 
                  ? "bg-green-500/10 hover:bg-green-500/20 text-green-400" 
                  : "bg-red-500/10 hover:bg-red-500/20 text-red-500"
              )}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <Button
        variant="outline"
        size="icon"
        className={cn(
          "fixed bottom-8 right-8 rounded-full transition-all duration-300 shadow-lg",
          showScrollUp ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none",
          theme === "dark" 
            ? "bg-green-500 text-green-950 hover:bg-green-600 border-green-600" 
            : "bg-red-500 text-white hover:bg-red-600 border-red-600"
        )}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </footer>
  );
}
