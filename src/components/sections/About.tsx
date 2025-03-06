
import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding min-h-screen animate-fade-in [animation-delay:200ms]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <User className="w-6 h-6 text-primary neon-glow" />
          <h2 className="text-3xl font-bold neon-glow">Sobre mí</h2>
        </div>
        <div className="space-y-6 text-foreground/80 card-gradient p-12 rounded-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg">
                Soy un desarrollador web junior apasionado por crear experiencias digitales únicas.
                Mi viaje en la programación comenzó con la curiosidad por entender cómo funcionan las
                aplicaciones web que usamos todos los días.
              </p>
              <p className="text-lg">
                Actualmente, me especializo en tecnologías frontend como React, TypeScript y Tailwind CSS.
                Estoy constantemente aprendiendo y mejorando mis habilidades para convertirme en un mejor desarrollador.
              </p>
              <p className="text-lg">
                Mi objetivo es crear aplicaciones web que no solo sean funcionales sino también intuitivas y agradables
                para el usuario. Me apasiona resolver problemas y encontrar soluciones creativas a desafíos técnicos.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                alt="Código en pantalla" 
                className="rounded-lg shadow-xl glow-on-hover w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
