
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 light:from-slate-50 light:via-slate-100 light:to-slate-50 text-white dark:text-white light:text-slate-900 font-chivo scroll-smooth">
      <Navigation />
      <div className="animate-fade-in">
        <Hero />
        <div className="animate-fade-in-up delay-300">
          <About />
        </div>
        <div className="animate-slide-in-left delay-500">
          <Projects />
        </div>
        <div className="animate-fade-in delay-700">
          <Experience />
        </div>
        <div className="animate-scale-in delay-1000">
          <Education />
        </div>
        <div className="animate-fade-in-up delay-1200">
          <Skills />
        </div>
        <div className="animate-slide-in-left delay-1500">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Index;
