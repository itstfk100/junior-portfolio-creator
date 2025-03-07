
import { Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
          Programador Junior
        </h1>
        <p className="text-2xl md:text-3xl text-foreground/80 max-w-3xl mx-auto mb-12 font-light tracking-wide drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]">
          Apasionado por el desarrollo web y en busca de mi primera oportunidad profesional
        </p>
        <Button 
          onClick={scrollToContact}
          className="gap-2 text-lg px-8 py-6 bg-primary/20 hover:bg-primary/30 backdrop-blur-sm border border-primary/30 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300"
        >
          Contáctame
          <ArrowDown className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
