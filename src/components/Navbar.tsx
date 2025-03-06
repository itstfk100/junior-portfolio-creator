
import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Mail, FileText } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Inicio', icon: <Home className="w-4 h-4" />, href: '#home' },
    { name: 'Sobre mí', icon: <User className="w-4 h-4" />, href: '#about' },
    { name: 'Proyectos', icon: <Briefcase className="w-4 h-4" />, href: '#projects' },
    { name: 'Contacto', icon: <Mail className="w-4 h-4" />, href: '#contact' },
  ];

  const handleDownloadCV = () => {
    // Replace with your actual CV file path
    const cvUrl = '/CV.pdf';
    window.open(cvUrl, '_blank');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-primary">Portfolio</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:flex-1 md:justify-center md:items-center">
            <div className="relative px-6 py-2 rounded-full bg-secondary/30 backdrop-blur-sm border border-primary/20 shadow-[0_0_15px_rgba(147,51,234,0.1)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(147,51,234,0.2)] hover:border-primary/30">
              <div className="flex items-center space-x-6">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 text-foreground/80 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
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
              className="flex items-center gap-2 ml-4"
            >
              <FileText className="w-4 h-4" />
              Descargar CV
            </Button>
          </div>
          
          {/* Mobile menu button */}
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

      {/* Mobile menu */}
      <div className={`md:hidden glass-nav ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 text-foreground/80 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              {item.name}
            </a>
          ))}
          <Button
            onClick={handleDownloadCV}
            variant="outline"
            className="flex items-center gap-2 w-full justify-center"
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
