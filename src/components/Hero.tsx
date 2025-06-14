
import { ArrowDown, Github, Linkedin, Mail, Rocket } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <ParticleBackground />
      
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-warm-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-coral-400/5 rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-coral-500 to-warm-500 rounded-full flex items-center justify-center text-6xl animate-scale-in">
            👨‍💻
          </div>
          
          <div className="mb-6 animate-slide-in-left">
            <span className="text-2xl lg:text-3xl inline-block animate-float">👋</span>
            <span className="text-xl lg:text-2xl text-slate-300 ml-3">Hey there! I'm</span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-coral-400 via-warm-500 to-coral-600 bg-clip-text text-transparent leading-tight animate-glow">
            Nithish Bilasunu
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-8 animate-stagger-1">
            <span className="text-2xl">🚀</span>
            <p className="text-2xl lg:text-3xl text-slate-200 font-semibold">
              Data Scientist & Analytics Expert
            </p>
            <span className="text-2xl">📊</span>
          </div>
          
          <p className="text-lg lg:text-xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-stagger-2">
            Transforming raw data into actionable business intelligence through machine learning, 
            statistical analysis, and innovative visualization techniques. Let's create something amazing together! ✨
          </p>
          
          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-stagger-3">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="group p-4 bg-slate-800/30 backdrop-blur-sm rounded-full hover:bg-coral-500/20 transition-all duration-500 hover:scale-110 border border-slate-700/50 hover:border-coral-500/50">
              <Github size={28} className="group-hover:text-coral-400 transition-colors duration-300" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="group p-4 bg-slate-800/30 backdrop-blur-sm rounded-full hover:bg-coral-500/20 transition-all duration-500 hover:scale-110 border border-slate-700/50 hover:border-coral-500/50">
              <Linkedin size={28} className="group-hover:text-coral-400 transition-colors duration-300" />
            </a>
            <a href="mailto:nithish.bilasunu@example.com"
               className="group p-4 bg-slate-800/30 backdrop-blur-sm rounded-full hover:bg-coral-500/20 transition-all duration-500 hover:scale-110 border border-slate-700/50 hover:border-coral-500/50">
              <Mail size={28} className="group-hover:text-coral-400 transition-colors duration-300" />
            </a>
          </div>

          {/* Enhanced CTA Button */}
          <button
            onClick={scrollToAbout}
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-coral-500 to-warm-500 hover:from-coral-600 hover:to-warm-600 px-10 py-5 rounded-full text-white font-bold text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-coral-500/30 animate-stagger-4"
          >
            <Rocket size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            <span>Let's Explore My Universe</span>
            <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-12 border-2 border-coral-400/60 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-4 bg-coral-400 rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-coral-400/80 text-sm mt-2 font-medium">Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;
