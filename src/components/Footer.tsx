
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-background/50 backdrop-blur-md border-t border-white/10">
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-primary mb-2">Portfolio</h3>
            <p className="text-sm text-foreground/60">
              Diseñado y desarrollado con ❤️
            </p>
          </div>
          
          <div className="text-center space-y-4">
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
          
          <div className="text-center md:text-right space-y-2">
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
