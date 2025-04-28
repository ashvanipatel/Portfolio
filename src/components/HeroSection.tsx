
import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";

export default function HeroSection() {
  const { theme } = useTheme();
  
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center pt-20 pb-10 relative overflow-hidden"
    >
      {/* Background elements for visual interest */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary/5 dark:bg-primary/10" />
        <div
          className={cn(
            "absolute top-40 right-1/4 w-20 h-20 rounded-full",
            theme === "dark"
              ? "bg-green-500/30 animate-glow"
              : "bg-red-500/30 animate-pulse"
          )}
        />
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Profile Image */}
          <div
            className={cn(
              "w-40 h-40 rounded-full overflow-hidden border-4 mb-6 relative",
              theme === "dark"
                ? "border-green-500 shadow-lg shadow-green-500/20"
                : "border-red-500 shadow-lg shadow-red-500/20"
            )}
          >
            {/* Placeholder avatar - replace with actual image */}
            <div className="w-full h-full bg-gradient-to-br from-primary/90 to-primary/40 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary-foreground">AP</span>
            </div>
          </div>

          {/* Name and title with animation */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold animate-slide-down">
              Ashvani Patel
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground animate-slide-up">
              Data Science | Problem Solver | Tech Enthusiast
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mt-4 animate-fade-in">
              Coding with purpose, building with passion.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in">
          <a href="/resume.pdf" download>
            <Button className="flex items-center gap-2 px-6">
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </a>

            <Button variant="outline" className="flex items-center gap-2 px-6" asChild>
              <a href="#contact">
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-primary" />
      </a>
    </section>
  );
}
