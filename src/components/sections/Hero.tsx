
import { Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="section-padding min-h-screen flex items-center justify-center animate-fade-in">
      <div className="max-w-6xl w-full text-center">
        <p className="text-primary mb-4 neon-glow">Hola, soy</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 typewriter neon-glow">
          Programador Junior
        </h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto backdrop-blur-sm p-6 rounded-lg mb-8">
          Apasionado por el desarrollo web y en busca de mi primera oportunidad profesional
        </p>
        <Button 
          onClick={scrollToContact}
          className="gap-2 text-lg px-6 py-6 animate-bounce"
        >
          Contáctame
          <ArrowDown className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
