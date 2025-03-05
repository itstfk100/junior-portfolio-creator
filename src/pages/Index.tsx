
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import TechStack from "@/components/TechStack";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Decorative elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
