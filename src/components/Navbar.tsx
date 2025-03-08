import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Mail, FileText } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      const sections = ['home', 'about', 'projects', 'contact'];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Inicio', icon: <Home className="w-4 h-4" />, href: '#home', id: 'home' },
    { name: 'Sobre mí', icon: <User className="w-4 h-4" />, href: '#about', id: 'about' },
    { name: 'Proyectos', icon: <Briefcase className="w-4 h-4" />, href: '#projects', id: 'projects' },
    { name: 'Contacto', icon: <Mail className="w-4 h-4" />, href: '#contact', id: 'contact' },
  ];

  const handleDownloadCV = () => {
    const cvUrl = '/CV.pdf';
    window.open(cvUrl, '_blank');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 text-base py-3 ${isScrolled ? 'glass-nav' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-primary">Portfolio</span>
          </div>

          <div className="hidden md:flex md:flex-1 md:justify-center md:items-center">
            <div className="relative px-5 py-2 rounded-full bg-secondary/30 backdrop-blur-sm border border-primary/20 shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary/30">
              <div className="flex items-center space-x-5">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md font-medium transition-all duration-300 relative 
                  ${activeSection === item.id ? 'text-primary' : 'text-foreground/80 hover:text-primary'}
                  before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-full before:h-0.5 
                  before:bg-gradient-to-r before:from-purple-400 before:via-blue-400 before:to-pink-400
                  before:transform before:origin-left
                  before:animate-[navline_2s_linear_infinite]`}
                  >
                    {item.icon}
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:flex md:items-center">
            <Button
              onClick={handleDownloadCV}
              variant="outline"
              className="flex items-center gap-2 ml-4 px-4 py-1.5 text-sm"
            >
              <FileText className="w-4 h-4" />
              Descargar CV
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <div className={`md:hidden glass-nav transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 text-foreground/80 hover:text-primary px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              {item.name}
            </a>
          ))}
          <Button
            onClick={handleDownloadCV}
            variant="outline"
            className="flex items-center gap-2 w-full justify-center px-4 py-1.5 text-sm"
          >
            <FileText className="w-4 h-4" />
            Descargar CV
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
