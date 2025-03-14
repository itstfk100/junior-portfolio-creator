import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="section-padding pb-10 animate-fade-in [animation-delay:600ms]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Mail className="w-12 h-12 text-primary neon-glow animate-pulse" />
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
            Contacto
          </h2>
        </div>
        <div className="card-gradient p-12 rounded-xl">
          <p className="text-foreground/80 mb-8 text-lg">
            ¿Interesado en trabajar juntos? ¡Conversemos! Puedes encontrarme en:
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button className="gap-2 glow-on-hover">
              <Mail className="w-4 h-4" />
              Enviar Email
            </Button>
            <Button variant="outline" className="gap-2 bg-background/50 glow-on-hover">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
            <Button variant="outline" className="gap-2 bg-background/50 glow-on-hover">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
