
import Section from "./Section";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";
import { useEffect, useRef, useState } from "react";

export default function SkillsSection() {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const technicalSkills = [
    { name: "C++", level: 90 },
    { name: "Python", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "SQL", level: 70 },
    { name: "Git & GitHub", level: 85 },
    { name: "Bootstrap", level: 80 },
  ];

  const softSkills = [
    { name: "Teamwork", level: 90 },
    { name: "Time Management", level: 85 },
    { name: "Communication", level: 80 },
    { name: "Problem-Solving", level: 95 },
    { name: "Adaptability", level: 85 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Section 
      id="skills" 
      title="My Skills" 
      subtitle="A comprehensive overview of my technical expertise and soft skills"
    >
      <div ref={sectionRef} className="grid md:grid-cols-2 gap-12 mt-10">
        {/* Technical Skills */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold pb-2 border-b border-border flex items-center gap-2">
            <span
              className={cn(
                "w-8 h-8 rounded-full grid place-items-center text-xs",
                theme === "dark"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-500"
              )}
            >
              💻
            </span>
            Technical Skills
          </h3>
          <div className="space-y-5">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className={cn(
                      "progress-bar-fill",
                      isVisible ? "w-full" : "w-0"
                    )}
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 100}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold pb-2 border-b border-border flex items-center gap-2">
            <span
              className={cn(
                "w-8 h-8 rounded-full grid place-items-center text-xs",
                theme === "dark"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-500"
              )}
            >
              🧠
            </span>
            Soft Skills
          </h3>
          <div className="space-y-5">
            {softSkills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className={cn(
                      "progress-bar-fill",
                      isVisible ? "w-full" : "w-0"
                    )}
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${(index + technicalSkills.length) * 100}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skill badges for technologies */}
      <div className="mt-16">
        <h3 className="text-xl font-bold mb-6 text-center">Technologies & Tools</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "React.js",
            "Node.js",
            "MongoDB",
            "Express.js",
            "Git",
            "GitHub",
            "VS Code",
            "Python",
            "C++",
            "HTML5",
            "CSS3",
            "JavaScript",
            "Bootstrap",
            "SQL",
          ].map((tech, index) => (
            <span
              key={index}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-transform hover:scale-105",
                theme === "dark"
                  ? "bg-green-500/10 text-green-400 border border-green-500/30"
                  : "bg-red-500/10 text-red-600 border border-red-500/30"
              )}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
