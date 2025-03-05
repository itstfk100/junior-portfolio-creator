
import { Briefcase, Github, ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  return (
    <section id="projects" className="section-padding min-h-screen animate-fade-in [animation-delay:400ms]">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Briefcase className="w-6 h-6 text-primary neon-glow" />
          <h2 className="text-3xl font-bold neon-glow">Mis Proyectos</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Project Card 1 */}
          <div className="group card-gradient rounded-xl overflow-hidden glow-on-hover">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
              alt="Project 1" 
              className="w-full h-48 object-cover"
            />
            <div className="p-8">
              <Code className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                ToDo App
              </h3>
              <p className="text-foreground/80 mb-4">
                Una aplicación de gestión de tareas construida con React y TypeScript.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2 bg-background/50">
                  <Github className="w-4 h-4" />
                  Código
                </Button>
                <Button variant="outline" size="sm" className="gap-2 bg-background/50">
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </Button>
              </div>
            </div>
          </div>
          
          {/* Project Card 2 */}
          <div className="group card-gradient rounded-xl overflow-hidden glow-on-hover">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" 
              alt="Project 2" 
              className="w-full h-48 object-cover"
            />
            <div className="p-8">
              <Code className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                Portfolio Personal
              </h3>
              <p className="text-foreground/80 mb-4">
                Mi sitio web personal construido con React, TypeScript y Tailwind CSS.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2 bg-background/50">
                  <Github className="w-4 h-4" />
                  Código
                </Button>
                <Button variant="outline" size="sm" className="gap-2 bg-background/50">
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
