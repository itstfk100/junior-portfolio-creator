
import { Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="section-padding min-h-screen flex items-center justify-center animate-fade-in">
      <div className="text-center">
        <p className="text-primary mb-4 neon-glow">Hola, soy</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 typewriter neon-glow">
          Programador Junior
        </h1>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto backdrop-blur-sm p-4 rounded-lg">
          Apasionado por el desarrollo web y en busca de mi primera oportunidad profesional
        </p>
      </div>
    </section>
  );
};

export default Hero;
