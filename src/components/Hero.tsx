
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // Create a dummy download link - user can replace with actual resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // User needs to add their resume file to public folder
    link.download = 'Nithish_Bilasunur_Manjunatha_Reddy_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Content Section */}
        <div className="lg:w-2/3 text-center lg:text-left animate-fade-in-up">
          {/* Name */}
          <h1 className="text-5xl lg:text-7xl font-chivo font-light mb-8 text-white leading-tight animate-slide-in-left">
            Nithish Bilasunur
            <br />
            <span className="font-medium">Manjunatha Reddy</span>
          </h1>
          
          {/* Title */}
          <div className="mb-8 animate-fade-in delay-200">
            <p className="text-xl lg:text-2xl text-slate-300 font-chivo font-light">
              Data Scientist & Analytics Expert
            </p>
            <div className="w-24 h-[1px] bg-slate-400 mx-auto lg:mx-0 mt-6 animate-scale-in delay-300"></div>
          </div>
          
          {/* Description */}
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto lg:mx-0 font-chivo font-light leading-relaxed animate-fade-in delay-400">
            Transforming data into strategic insights through machine learning, 
            statistical analysis, and innovative visualization techniques.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center lg:justify-start space-x-8 mb-16 animate-stagger-1">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 animate-float">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 animate-float delay-100">
              <Linkedin size={24} />
            </a>
            <a href="mailto:nithish.bilasunu@example.com"
               className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 animate-float delay-200">
              <Mail size={24} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={scrollToAbout}
              className="group inline-flex items-center space-x-3 border border-slate-600 hover:border-slate-400 px-8 py-4 rounded-full text-slate-300 hover:text-white font-chivo font-medium transition-all duration-300 hover:bg-slate-800/50 animate-glow"
            >
              <span>Explore My Work</span>
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={downloadResume}
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-coral-500 to-warm-500 hover:from-coral-600 hover:to-warm-600 px-8 py-4 rounded-full text-white font-chivo font-medium transition-all duration-300 hover:shadow-lg hover:shadow-coral-500/25 animate-pulse"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </button>
          </div>
        </div>

        {/* Headshot Section */}
        <div className="lg:w-1/3 flex justify-center animate-scale-in delay-500">
          <div className="relative group">
            {/* Placeholder for headshot */}
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-slate-800 to-slate-700 border-4 border-slate-600 shadow-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-105 animate-float">
              <div className="text-center">
                <div className="w-24 h-24 bg-slate-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <p className="text-slate-400 font-chivo text-sm">Add Your Photo</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-slate-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-slate-600 rounded-full animate-pulse delay-1000"></div>
          </div>
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
