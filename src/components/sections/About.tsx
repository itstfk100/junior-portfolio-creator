
import { User, Layout, Database, Terminal } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding min-h-screen animate-fade-in [animation-delay:200ms]">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <User className="w-6 h-6 text-primary neon-glow" />
          <h2 className="text-3xl font-bold neon-glow">Sobre mí</h2>
        </div>
        <div className="space-y-6 text-foreground/80 card-gradient p-8 rounded-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4">
                Soy un desarrollador web junior apasionado por crear experiencias digitales únicas.
                Mi viaje en la programación comenzó con la curiosidad por entender cómo funcionan las
                aplicaciones web que usamos todos los días.
              </p>
              <p>
                Actualmente, me especializo en tecnologías frontend como React, TypeScript y Tailwind CSS.
                Estoy constantemente aprendiendo y mejorando mis habilidades para convertirme en un mejor desarrollador.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                alt="Código en pantalla" 
                className="rounded-lg shadow-xl glow-on-hover"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
            <div className="p-6 rounded-lg card-gradient glow-on-hover">
              <div className="flex items-center gap-2 mb-3">
                <Layout className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-primary">Frontend</h3>
              </div>
              <p className="text-sm">React, TypeScript, Tailwind CSS</p>
            </div>
            <div className="p-6 rounded-lg card-gradient glow-on-hover">
              <div className="flex items-center gap-2 mb-3">
                <Database className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-primary">Backend</h3>
              </div>
              <p className="text-sm">Node.js, Express, SQL</p>
            </div>
            <div className="p-6 rounded-lg card-gradient glow-on-hover">
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-primary">Herramientas</h3>
              </div>
              <p className="text-sm">Git, VSCode, Figma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
