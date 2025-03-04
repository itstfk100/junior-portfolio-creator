
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="section-padding min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-primary mb-4">Hola, soy</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 typewriter">
            Programador Junior
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Apasionado por el desarrollo web y en busca de mi primera oportunidad profesional
          </p>
        </div>
      </section>
      
      {/* Placeholder sections */}
      <section id="about" className="section-padding min-h-screen bg-secondary/5">
        <h2 className="text-3xl font-bold text-center mb-12">Sobre mí</h2>
      </section>
      
      <section id="projects" className="section-padding min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-12">Mis Proyectos</h2>
      </section>
      
      <section id="contact" className="section-padding min-h-screen bg-secondary/5">
        <h2 className="text-3xl font-bold text-center mb-12">Contacto</h2>
      </section>
    </div>
  );
};

export default Index;
