
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto text-center mt-16">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1] md:leading-[1.1]">
          <span className="inline-block bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
            Soy Sebastián Villacrisis
          </span>
        </h1>
        <p className="text-2xl md:text-3xl font-semibold tracking-wide max-w-3xl mx-auto mt-8 mb-16 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]">
          Apasionado por el desarrollo web y en busca de mi primera oportunidad profesional
        </p>
        <Button onClick={scrollToContact} className="gap-2 text-lg px-6 py-6 animate-bounce">
          Contáctame
          <ArrowDown className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
