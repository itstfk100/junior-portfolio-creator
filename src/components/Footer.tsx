
import { Github, Linkedin, Mail, MapPin, Phone, Briefcase } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-background/50 backdrop-blur-md border-t border-white/10">
      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-4 gap-8 items-start">
          {/* Portfolio Section */}
          <div className="text-center md:text-left col-span-1">
            <h3 className="text-lg font-semibold text-primary mb-4">Explora mi Portfolio</h3>
            <div className="flex flex-col gap-2">
              <a href="#home" className="text-sm text-foreground/60 hover:text-primary transition-colors">Inicio</a>
              <a href="#about" className="text-sm text-foreground/60 hover:text-primary transition-colors">Sobre Mí</a>
              <a href="#projects" className="text-sm text-foreground/60 hover:text-primary transition-colors">Proyectos</a>
              <a href="#contact" className="text-sm text-foreground/60 hover:text-primary transition-colors">Contacto</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center space-y-4 col-span-1">
            <h3 className="text-lg font-semibold text-primary mb-4">Redes Sociales</h3>
            <div className="flex justify-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:text-primary">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:text-primary">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="text-center md:text-right space-y-2 col-span-2">
            <div className="flex items-center justify-end gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <p className="text-sm text-foreground/60">Ciudad, País</p>
            </div>
            <div className="flex items-center justify-end gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <p className="text-sm text-foreground/60">+00 123 456 789</p>
            </div>
            <div className="flex items-center justify-end gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <p className="text-sm text-foreground/60">correo@ejemplo.com</p>
            </div>
            <div className="mt-4 text-sm text-foreground/60">
              <p>© 2024 Tu Nombre.</p>
              <p>Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
