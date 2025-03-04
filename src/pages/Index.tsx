
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, Code, User, Briefcase } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="section-padding min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-primary mb-4">Hola, soy</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 typewriter">
            Programador Junior
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Apasionado por el desarrollo web y en busca de mi primera oportunidad profesional
          </p>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="section-padding min-h-screen bg-secondary/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <User className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Sobre mí</h2>
          </div>
          <div className="space-y-6 text-foreground/80">
            <p>
              Soy un desarrollador web junior apasionado por crear experiencias digitales únicas.
              Mi viaje en la programación comenzó con la curiosidad por entender cómo funcionan las
              aplicaciones web que usamos todos los días.
            </p>
            <p>
              Actualmente, me especializo en tecnologías frontend como React, TypeScript y Tailwind CSS.
              Estoy constantemente aprendiendo y mejorando mis habilidades para convertirme en un mejor desarrollador.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
              <div className="p-4 rounded-lg bg-card hover:bg-card/80 transition-colors">
                <h3 className="font-bold text-primary mb-2">Frontend</h3>
                <p className="text-sm">React, TypeScript, Tailwind CSS</p>
              </div>
              <div className="p-4 rounded-lg bg-card hover:bg-card/80 transition-colors">
                <h3 className="font-bold text-primary mb-2">Backend</h3>
                <p className="text-sm">Node.js, Express, SQL</p>
              </div>
              <div className="p-4 rounded-lg bg-card hover:bg-card/80 transition-colors">
                <h3 className="font-bold text-primary mb-2">Herramientas</h3>
                <p className="text-sm">Git, VSCode, Figma</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="section-padding min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Mis Proyectos</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Project Card 1 */}
            <div className="group rounded-lg overflow-hidden bg-card hover:bg-card/80 transition-all">
              <div className="p-6">
                <Code className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  ToDo App
                </h3>
                <p className="text-foreground/80 mb-4">
                  Una aplicación de gestión de tareas construida con React y TypeScript.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="w-4 h-4" />
                    Código
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Project Card 2 */}
            <div className="group rounded-lg overflow-hidden bg-card hover:bg-card/80 transition-all">
              <div className="p-6">
                <Code className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  Portfolio Personal
                </h3>
                <p className="text-foreground/80 mb-4">
                  Mi sitio web personal construido con React, TypeScript y Tailwind CSS.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="w-4 h-4" />
                    Código
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="section-padding min-h-screen bg-secondary/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Mail className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Contacto</h2>
          </div>
          <p className="text-foreground/80 mb-8">
            ¿Interesado en trabajar juntos? ¡Conversemos! Puedes encontrarme en:
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button className="gap-2">
              <Mail className="w-4 h-4" />
              Enviar Email
            </Button>
            <Button variant="outline" className="gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
            <Button variant="outline" className="gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
