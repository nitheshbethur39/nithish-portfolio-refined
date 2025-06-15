
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import { ThreeBackground } from '../components/ThreeBackground';
import { useGSAPAnimations } from '../hooks/useGSAPAnimations';
import { useTheme } from '../components/ThemeProvider';

const Index = () => {
  useGSAPAnimations();
  const { theme } = useTheme();

  console.log('Current theme in Index:', theme);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white' 
        : 'bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 text-slate-900'
    } font-chivo scroll-smooth relative`}>
      <ThreeBackground />
      <Navigation />
      <div className="relative z-10">
        <div className="hero-content">
          <Hero />
        </div>
        <div className="about-section">
          <About />
        </div>
        <div className="projects-section">
          <Projects />
        </div>
        <div className="experience-section">
          <Experience />
        </div>
        <div className="education-section">
          <Education />
        </div>
        <div className="skills-section">
          <Skills />
        </div>
        <div className="contact-section">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Index;
