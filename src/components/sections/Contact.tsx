import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="section-padding pb-10 animate-fade-in [animation-delay:600ms]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Mail className="w-6 h-6 text-primary neon-glow" />
          <h2 className="text-3xl font-bold neon-glow">Contacto</h2>
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
