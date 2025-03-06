import { Briefcase, Github, ExternalLink, Code, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "ToDo App",
    description: "Una aplicación de gestión de tareas construida con React y TypeScript.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Portfolio Personal",
    description: "Mi sitio web personal construido con React, TypeScript y Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="section-padding min-h-screen animate-fade-in [animation-delay:400ms]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Briefcase className="w-6 h-6 text-primary neon-glow" />
          <h2 className="text-3xl font-bold neon-glow">Mis Proyectos</h2>
        </div>
        
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="card-gradient rounded-xl overflow-hidden glow-on-hover relative backdrop-blur-sm border border-primary/20 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            >
              <img 
                src={projects[currentProject].image}
                alt={projects[currentProject].title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <Code className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {projects[currentProject].title}
                </h3>
                <p className="text-foreground/80 mb-6">
                  {projects[currentProject].description}
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {projects[currentProject].tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20 shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="default" size="lg" className="gap-2 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                    <ExternalLink className="w-4 h-4" />
                    Proyecto
                  </Button>
                  <Button variant="outline" size="lg" className="gap-2 shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="rounded-full hover:bg-primary/20 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="rounded-full hover:bg-primary/20 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            >
              <ArrowRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
