
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const menuItems = [
    { name: 'About', emoji: '👨‍💻' },
    { name: 'Projects', emoji: '🚀' },
    { name: 'Experience', emoji: '💼' },
    { name: 'Education', emoji: '🎓' },
    { name: 'Skills', emoji: '⚡' },
    { name: 'Contact', emoji: '📧' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-xl border-b border-coral-500/20 shadow-xl shadow-coral-500/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <span className="text-3xl font-bold bg-gradient-to-r from-coral-400 to-warm-500 bg-clip-text text-transparent">
              🚀 Portfolio
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.name.toLowerCase())}
                  className="group flex items-center space-x-2 text-slate-300 hover:text-white px-4 py-3 text-sm font-medium transition-all duration-300 hover:bg-coral-500/10 rounded-xl border border-transparent hover:border-coral-500/20 backdrop-blur-sm"
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">{item.emoji}</span>
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-3 rounded-xl hover:bg-coral-500/10 transition-all duration-300"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-xl rounded-2xl mt-4 p-6 border border-coral-500/20 shadow-2xl shadow-coral-500/10 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.name.toLowerCase())}
                  className={`flex items-center space-x-3 text-slate-300 hover:text-white px-4 py-3 text-base font-medium transition-all duration-300 text-left rounded-xl hover:bg-coral-500/10 animate-stagger-${index + 1}`}
                >
                  <span className="text-xl">{item.emoji}</span>
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
