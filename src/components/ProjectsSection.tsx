
import { useState } from "react";
import Section from "./Section";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, ExternalLink, Filter } from "lucide-react";
import { useTheme } from "./ThemeProvider";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string; 
  techStack: string[];
  githubLink: string;
  liveLink?: string;
};

export default function ProjectsSection() {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "Gym Website (Fit Zone)",
      description: "A fully responsive gym website with membership registration, workout plans, and admin dashboard.",
      image: "gym", 
      techStack: ["React", "Node.js", "MongoDB", "Express", "MERN"],
      githubLink: "https://github.com/vikashmishra464/fitZone",
      liveLink: "https://fit-zone-mu.vercel.app/",
    },
    {
      id: 2,
      title: "Sudoku Solver Visualizer",
      description: "Interactive sudoku solver that visualizes backtracking algorithm step-by-step.",
      image: "sudoku", 
      techStack: ["React", "DSA", "CSS", "JavaScript"],
      githubLink: "https://github.com/vikashmishra464/sudokuSolverReact",
      liveLink: "https://cracksudoku.netlify.app/",
    },
    {
      id: 3,
      title: "Socket Chess",
      description: "Real-time multiplayer chess app with chat functionality and match history.",
      image: "chess", 
      techStack: ["Node.js", "Socket.io", "Express", "JavaScript"],
      githubLink: "https://github.com/vikashmishra464/SocketChessReactVersion",
      liveLink: "https://socketchess.netlify.app/play",
    },
    {
      id: 4,
      title: "Real-Time Weather App",
      description: "Weather application showing forecasts, air quality, and weather alerts for multiple locations.",
      image: "weather", 
      techStack: ["Node.js", "API", "JavaScript", "CSS"],
      githubLink: "https://github.com/vikashmishra464/weatherApp",
    },
  ];

  // Get unique tech stacks for filtering
  const allTechStacks = [...new Set(projects.flatMap((project) => project.techStack))].sort();
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter((project) => project.techStack.includes(activeFilter));

  // Project card component
  const ProjectCard = ({ project }: { project: Project }) => (
    <div 
      className={cn(
        "rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2",
        "bg-card border shadow-lg group h-full flex flex-col",
        theme === "dark" 
          ? "border-green-900/30 hover:border-green-500/50 hover:shadow-green-500/10" 
          : "border-red-900/10 hover:border-red-500/30 hover:shadow-red-500/5"
      )}
    >
      {/* Project Image */}
      <div className="h-48 overflow-hidden bg-gradient-to-br from-primary/30 to-primary/10 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl">{getProjectEmoji(project.image)}</span>
        </div>
      </div>
      
      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, index) => (
            <span 
              key={index}
              className={cn(
                "px-2 py-1 text-xs rounded",
                theme === "dark" 
                  ? "bg-green-500/10 text-green-400" 
                  : "bg-red-500/10 text-red-600"
              )}
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex gap-3 mt-auto">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 gap-2" 
            asChild
          >
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              Code
            </a>
          </Button>
          {project.liveLink && (
            <Button 
              size="sm" 
              className="flex-1 gap-2"
              asChild
            >
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
  
  // Helper function to get project emoji based on project type
  function getProjectEmoji(type: string): string {
    switch(type) {
      case "gym": return "💪";
      case "sudoku": return "🧩";
      case "chess": return "♟️";
      case "weather": return "🌦️";
      default: return "💻";
    }
  }

  return (
    <Section 
      id="projects" 
      title="My Projects" 
      subtitle="A collection of my recent work and personal projects"
    >
      {/* Filter buttons */}
      <div className="flex items-center justify-center mb-8 overflow-x-auto pb-2">
        <div className="flex gap-2 items-center bg-secondary/50 rounded-full p-1">
          <Filter className="w-4 h-4 ml-3 text-muted-foreground" />
          
          <Button
            variant={activeFilter === "all" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveFilter("all")}
            className={cn(
              "rounded-full text-sm",
              activeFilter === "all" ? "" : "text-muted-foreground"
            )}
          >
            All
          </Button>
          
          {allTechStacks.map((tech) => (
            <Button
              key={tech}
              variant={activeFilter === tech ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveFilter(tech)}
              className={cn(
                "rounded-full text-sm whitespace-nowrap",
                activeFilter === tech ? "" : "text-muted-foreground"
              )}
            >
              {tech}
            </Button>
          ))}
        </div>
      </div>
      
      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {/* More projects link */}
      <div className="flex justify-center mt-10">
        <Button variant="outline" className="group">
          View All Projects
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </Section>
  );
}
