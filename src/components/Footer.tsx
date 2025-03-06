import { Github, Linkedin, Mail, MapPin, Phone, Briefcase } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-background/50 backdrop-blur-md border-t border-white/10">
      <div className="max-w-6xl mx-auto py-16 px-8">
        <div className="grid md:grid-cols-3 gap-12 items-start text-lg">
          {/* Portfolio Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-primary mb-6">Explora mi Portfolio</h3>
            <div className="flex flex-col gap-3">
              <a href="#home" className="text-base text-foreground/60 hover:text-primary transition-colors">Inicio</a>
              <a href="#about" className="text-base text-foreground/60 hover:text-primary transition-colors">Sobre Mí</a>
              <a href="#projects" className="text-base text-foreground/60 hover:text-primary transition-colors">Proyectos</a>
            </div>
          </div>

          {/* Location Section */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-primary mb-6">Ubicación</h3>
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                <p className="text-base text-foreground/60">Ciudad, País</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-primary" />
                <p className="text-base text-foreground/60">+00 123 456 789</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-primary" />
                <p className="text-base text-foreground/60">correo@ejemplo.com</p>
              </div>
            </div>
          </div>

          {/* Contact Me Section */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold text-primary mb-6">Contáctame</h3>
            <Button variant="default" size="lg" className="rounded-full px-6">
              <Briefcase className="w-6 h-6 mr-2" /> Descargar CV
            </Button>
            <div className="mt-6 flex justify-center md:justify-end gap-6">
              <Button variant="ghost" size="icon" className="rounded-full hover:text-primary">
                <Github className="w-7 h-7" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:text-primary">
                <Linkedin className="w-7 h-7" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:text-primary">
                <Mail className="w-7 h-7" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Divider Line */}
        <div className="border-t border-white/10 mt-12"></div>
        
        {/* Copyright */}
        <div className="mt-6 text-center text-lg text-foreground/60 pb-6">
          <p>© 2024 Tu Nombre. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
