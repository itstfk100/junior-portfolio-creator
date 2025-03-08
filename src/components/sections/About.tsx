import { User } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Permite que la animación ocurra varias veces
    threshold: 0.3, // Se activa cuando el 30% del elemento está visible
  });

  return (
    <section id="about" className="section-padding min-h-screen animate-fade-in [animation-delay:200ms]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <User className="w-8 h-8 text-primary neon-glow " />
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]">Sobre mí</h2>
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

            {/* Contenedor animado para la imagen y el marco */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.5 }}
              className="relative flex justify-center items-center"
            >
              {/* Marco de fondo */}
              <div className="absolute w-full h-full bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 rounded-lg p-2 blur-lg opacity-50" />

              {/* Imagen */}
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                alt="Código en pantalla" 
                className="rounded-lg shadow-xl glow-on-hover w-full relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
