
import Section from "./Section";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";
import { Briefcase, Calendar } from "lucide-react";

export default function ExperienceSection() {
  const { theme } = useTheme();
  
  const experiences = [
    {
      title: "Freelance AI Trainer",
      company: "Outlier",
      period: "Nov 2024 - Dec 2024",
      description: [
        "Trained 100+ AI models, improving accuracy by analyzing and reviewing responses",
        "Reviewed 500+ responses to ensure quality and consistency",
        "Worked with cutting-edge AI technologies and frameworks",
        "Collaborated with a remote team to meet project deadlines"
      ]
    },
    {
      title: "Web Development Intern",
      company: "Virtual Experience",
      period: "Sep 2024 - Oct 2024",
      description: [
        "Developed responsive websites using modern front-end technologies",
        "Collaborated with senior developers to implement new features",
        "Optimized website performance and load times",
        "Participated in code reviews and team meetings"
      ]
    }
  ];
  
  const certifications = [
    {
      title: "Competitive Programming DSA",
      issuer: "Udemy",
      date: "Feb 2025",
      icon: "🏆"
    },
    {
      title: "Cloud Computing",
      issuer: "IIT Madras",
      date: "Nov 2024",
      icon: "☁️"
    },
    {
      title: "Walmart Forage Internship",
      issuer: "Walmart",
      date: "Nov 2024",
      icon: "🛒"
    },
    {
      title: "Android Basics",
      issuer: "Meta",
      date: "Nov 2024",
      icon: "📱"
    },
    {
      title: "Python Programming",
      issuer: "Kaggle",
      date: "Dec 2022",
      icon: "🐍"
    }
  ];

  return (
    <Section id="experience" title="Experience & Certifications">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Professional Experience */}
        <div className="space-y-8">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Briefcase className={cn(theme === "dark" ? "text-green-400" : "text-red-500")} />
            Professional Experience
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={cn(
                  "rounded-lg p-6 bg-card border shadow-md relative",
                  theme === "dark" 
                    ? "border-green-900/30" 
                    : "border-red-900/10"
                )}
              >
                {/* Timeline dot */}
                <div 
                  className={cn(
                    "absolute -left-3 top-8 w-6 h-6 rounded-full flex items-center justify-center",
                    theme === "dark" 
                      ? "bg-green-500 text-green-950" 
                      : "bg-red-500 text-white"
                  )}
                >
                  <span className="text-xs font-bold">{index + 1}</span>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-lg font-bold">{exp.title}</h4>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-muted-foreground">{exp.company}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2 text-sm">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span 
                        className={cn(
                          "inline-block w-1.5 h-1.5 rounded-full mt-1.5",
                          theme === "dark" ? "bg-green-400" : "bg-red-500"
                        )}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Certifications */}
        <div className="space-y-8">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={cn(theme === "dark" ? "text-green-400" : "text-red-500")}
            >
              <path d="M12.3 6.3a2 2 0 1 0-2.6 0L6 10l.7.7L12 6.4l5.3 4.3.7-.7Z"/>
              <path d="M18 8h2a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2"/>
              <path d="M15 13H9"/>
              <path d="M15 17H9"/>
            </svg>
            Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className={cn(
                  "rounded-lg p-5 bg-card border shadow-sm flex gap-4 transition-transform hover:scale-105",
                  theme === "dark" 
                    ? "border-green-900/30" 
                    : "border-red-900/10"
                )}
              >
                <div 
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center text-xl",
                    theme === "dark" 
                      ? "bg-green-500/10 text-green-400" 
                      : "bg-red-500/10 text-red-500"
                  )}
                >
                  {cert.icon}
                </div>
                <div>
                  <h4 className="font-bold">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs flex items-center gap-1 mt-1">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Achievement badges */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18" height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn(theme === "dark" ? "text-green-400" : "text-red-500")}
              >
                <circle cx="12" cy="8" r="6"/>
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
              Achievements
            </h3>
            
            <div className="space-y-3">
              {[
                "Top 2% coder in college",
                "Solved 900+ problems on LeetCode, GFG, HackerRank",
                "Hackathon participant",
                "Active member: GDSC, Literary Society"
              ].map((achievement, index) => (
                <div 
                  key={index}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm inline-block mr-3 mb-3",
                    theme === "dark" 
                      ? "bg-green-500/10 border border-green-500/30 text-green-400" 
                      : "bg-red-500/10 border border-red-500/30 text-red-600"
                  )}
                >
                  {achievement}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
