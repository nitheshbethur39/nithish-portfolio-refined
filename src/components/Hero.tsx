
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          
          {/* Name */}
          <h1 className="text-5xl lg:text-7xl font-chivo font-light mb-8 text-white leading-tight">
            Nithish Bilasunur
            <br />
            <span className="font-medium">Manjunatha Reddy</span>
          </h1>
          
          {/* Title */}
          <div className="mb-8">
            <p className="text-xl lg:text-2xl text-slate-300 font-chivo font-light">
              Data Scientist & Analytics Expert
            </p>
            <div className="w-24 h-[1px] bg-slate-400 mx-auto mt-6"></div>
          </div>
          
          {/* Description */}
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto font-chivo font-light leading-relaxed">
            Transforming data into strategic insights through machine learning, 
            statistical analysis, and innovative visualization techniques.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-16">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:nithish.bilasunu@example.com"
               className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-110">
              <Mail size={24} />
            </a>
          </div>

          {/* CTA */}
          <button
            onClick={scrollToAbout}
            className="group inline-flex items-center space-x-3 border border-slate-600 hover:border-slate-400 px-8 py-4 rounded-full text-slate-300 hover:text-white font-chivo font-medium transition-all duration-300 hover:bg-slate-800/50"
          >
            <span>Explore My Work</span>
            <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-12 border border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
