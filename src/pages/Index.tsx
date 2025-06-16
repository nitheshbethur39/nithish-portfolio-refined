
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

const Index = () => {
  useGSAPAnimations();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white font-chivo scroll-smooth relative">
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
