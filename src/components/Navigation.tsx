
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Nithish_Bilasunur_Manjunatha_Reddy_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  const menuItems = [
    { name: 'About' },
    { name: 'Projects' },
    { name: 'Experience' },
    { name: 'Education' },
    { name: 'Skills' },
    { name: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl shadow-slate-900/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 animate-fade-in">
            <span className="text-lg font-chivo font-medium text-white hover:text-light-teal transition-colors duration-500">
              Portfolio
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.name.toLowerCase())}
                className={`text-slate-300 hover:text-white font-chivo font-light transition-all duration-500 text-sm hover:scale-110 transform animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </button>
            ))}
            
            <button
              onClick={downloadResume}
              className="inline-flex items-center space-x-2 text-slate-300 hover:text-white font-chivo font-light transition-all duration-500 border border-slate-600 hover:border-slate-400 px-3 py-2 rounded-lg hover:bg-slate-800/50 text-sm hover:scale-105 transform animate-scale-in delay-700"
            >
              <Download size={14} />
              <span>Resume</span>
            </button>
            
            <button
              onClick={toggleTheme}
              className="text-slate-300 hover:text-white p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-500 hover:scale-110 transform animate-scale-in delay-800"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="text-slate-300 hover:text-white p-2 transition-all duration-300 hover:scale-110"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-110"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-slate-800/95 backdrop-blur-xl rounded-2xl mt-3 p-5 border border-slate-700/50 animate-scale-in">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.name.toLowerCase())}
                  className={`text-slate-300 hover:text-white font-chivo font-light text-left text-sm transition-all duration-300 hover:translate-x-2 animate-slide-in-left`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </button>
              ))}
              
              <button
                onClick={downloadResume}
                className="inline-flex items-center space-x-2 text-slate-300 hover:text-white font-chivo font-light border border-slate-600 hover:border-slate-400 px-3 py-2 rounded-lg hover:bg-slate-800/50 transition-all duration-500 text-sm hover:scale-105 animate-fade-in delay-300"
              >
                <Download size={14} />
                <span>Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
