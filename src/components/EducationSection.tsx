
import Section from "./Section";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";
import { GraduationCap, CalendarDays, ListCheck } from "lucide-react";

export default function EducationSection() {
  const { theme } = useTheme();
  
  return (
    <Section id="education" title="Education">
      <div className="max-w-3xl mx-auto">
        <div 
          className={cn(
            "rounded-xl p-8 bg-card border shadow-lg relative overflow-hidden",
            theme === "dark" 
              ? "border-green-900/50" 
              : "border-red-900/20"
          )}
        >
          {/* Decorative elements */}
          <div 
            className={cn(
              "absolute top-0 right-0 w-32 h-32 -mt-12 -mr-12 rounded-full opacity-20",
              theme === "dark" ? "bg-green-500" : "bg-red-500"
            )}
          />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-6">
            {/* Left - University logo/image */}
            <div 
              className={cn(
                "flex-shrink-0 w-24 h-24 rounded-xl flex items-center justify-center",
                theme === "dark" 
                  ? "bg-green-500/10 text-green-400" 
                  : "bg-red-500/10 text-red-500"
              )}
            >
              <GraduationCap className="w-12 h-12" />
            </div>
            
            {/* Right - Education details */}
            <div className="space-y-4 flex-grow">
              <div>
                <h3 className="text-2xl font-bold">Lovely Professional University</h3>
                <p className="text-muted-foreground">Bachelor of Technology in Computer Science Engineering</p>
              </div>
              
              <div className="flex flex-wrap gap-y-3 gap-x-6">
                <div className="flex items-center gap-2 text-sm">
                  <CalendarDays 
                    className={cn(
                      "w-4 h-4",
                      theme === "dark" ? "text-green-400" : "text-red-500"
                    )}
                  />
                  <span>Expected Graduation: July 2026</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
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
                    className={cn(
                      theme === "dark" ? "text-green-400" : "text-red-500"
                    )}
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                  <span>CGPA: 7.8/10</span>
                </div>
              </div>
              
              <div className="pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <ListCheck 
                    className={cn(
                      "w-4 h-4",
                      theme === "dark" ? "text-green-400" : "text-red-500"
                    )}
                  />
                  <h4 className="font-medium">Relevant Coursework</h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Structures & Algorithms",
                    "Database Systems",
                    "Web Development",
                    "Object Oriented Programming",
                    "Machine Learning Foundations",
                    "Operating Systems",
                    "Computer Networks",
                    "Software Engineering"
                  ].map((course, index) => (
                    <span 
                      key={index}
                      className={cn(
                        "px-3 py-1 text-xs rounded-full",
                        theme === "dark" 
                          ? "bg-green-500/10 text-green-400" 
                          : "bg-red-500/10 text-red-600"
                      )}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
