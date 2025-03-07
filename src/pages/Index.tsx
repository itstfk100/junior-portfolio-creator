import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import TechStack from "@/components/TechStack";
import InteractiveBackground from "@/components/InteractiveBackground";

const Index = () => {
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal(); // Initial check
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className="min-h-screen bg-transparent relative">
      <InteractiveBackground />
      
      <div className="relative z-10">
        <Navbar />
        <div className="reveal">
          <Hero />
        </div>
        <div className="reveal">
          <About />
        </div>
        <div className="reveal">
          <TechStack />
        </div>
        <div className="reveal">
          <Projects />
        </div>
        <div className="reveal">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
