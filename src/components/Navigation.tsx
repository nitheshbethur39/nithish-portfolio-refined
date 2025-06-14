
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
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const downloadResume = () => {
    // Create a dummy download link - user can replace with actual resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // User needs to add their resume file to public folder
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-lg font-chivo font-medium text-white">
              Portfolio
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.name.toLowerCase())}
                className="text-slate-300 hover:text-white font-chivo font-light transition-colors duration-300 text-sm"
              >
                {item.name}
              </button>
            ))}
            
            {/* Resume Download Button */}
            <button
              onClick={downloadResume}
              className="inline-flex items-center space-x-2 text-slate-300 hover:text-white font-chivo font-light transition-colors duration-300 border border-slate-600 hover:border-slate-400 px-3 py-2 rounded-lg hover:bg-slate-800/50 text-sm"
            >
              <Download size={14} />
              <span>Resume</span>
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-slate-300 hover:text-white p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="text-slate-300 hover:text-white p-2"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-xl rounded-2xl mt-3 p-5 border border-slate-700/50">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.name.toLowerCase())}
                  className="text-slate-300 hover:text-white font-chivo font-light text-left text-sm"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile Resume Download Button */}
              <button
                onClick={downloadResume}
                className="inline-flex items-center space-x-2 text-slate-300 hover:text-white font-chivo font-light border border-slate-600 hover:border-slate-400 px-3 py-2 rounded-lg hover:bg-slate-800/50 transition-all duration-300 text-sm"
              >
                <Download size={14} />
                <span>Resume</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
