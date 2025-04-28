
import Section from "./Section";
import { Calendar, Code, GraduationCap, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";

export default function AboutSection() {
  const { theme } = useTheme();
  
  const infoCards = [
    {
      icon: <GraduationCap />,
      label: "Education",
      value: "B.Tech in CSE",
    },
    {
      icon: <Code />,
      label: "Experience",
      value: "Full Stack Dev",
    },
    {
      icon: <Calendar />,
      label: "Graduation",
      value: "July 2026",
    },
    {
      icon: <Star />,
      label: "CGPA",
      value: "8.11/10",
    },
  ];

  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
        {/* Left side - image or illustration */}
        <div className="flex justify-center lg:col-span-1">
          <div
            className={cn(
              "relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl glow-effect",
              theme === "dark"
                ? "border-2 border-green-500/50"
                : "border-2 border-red-500/50"
            )}
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/80 to-primary/30 flex items-center justify-center p-6 text-center">
              <div className="space-y-4">
                <span className="text-5xl text-primary-foreground">👨‍💻</span>
                <p className="text-primary-foreground font-medium">
                  Passionate Developer
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div
              className={cn(
                "absolute -top-6 -left-6 w-12 h-12 rounded-full",
                theme === "dark" ? "bg-green-500/20" : "bg-red-500/20"
              )}
            />
            <div
              className={cn(
                "absolute -bottom-6 -right-6 w-12 h-12 rounded-full",
                theme === "dark" ? "bg-green-500/20" : "bg-red-500/20"
              )}
            />
          </div>
        </div>
        
        {/* Right side - about text */}
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Hello there! 👋</h3>
            <p className="text-lg leading-relaxed">
              I am a Computer Science Engineering student from Lovely Professional University,
              passionate about full-stack development, data structures, and building real-world projects.
              I enjoy solving coding challenges and contributing to open-source projects.
            </p>
            <p className="text-lg leading-relaxed">
              My journey in programming began with a curiosity about how things work digitally,
              which evolved into a deep interest in creating efficient, user-friendly applications.
              When I'm not coding, you'll find me participating in hackathons, collaborating with fellow developers, 
              or exploring new technologies.
            </p>
          </div>
          
          {/* Info cards row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {infoCards.map((card, index) => (
              <div
                key={index}
                className={cn(
                  "rounded-lg p-4 text-center bg-card shadow-md flex flex-col items-center gap-2 transition-transform hover:scale-105",
                  theme === "dark"
                    ? "border border-green-900/50"
                    : "border border-red-900/20"
                )}
              >
                <div
                  className={cn(
                    "p-3 rounded-full",
                    theme === "dark"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-red-500/10 text-red-500"
                  )}
                >
                  {card.icon}
                </div>
                <p className="text-sm font-medium text-muted-foreground">{card.label}</p>
                <p className="font-semibold">{card.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
