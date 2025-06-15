
import { ArrowDown, Github, Linkedin, Mail, Download, Briefcase } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Hero = () => {
  const { theme } = useTheme();
  
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Nithish_Bilasunur_Manjunatha_Reddy_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={`min-h-screen flex items-center justify-center px-6 lg:px-8 relative overflow-hidden transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' 
        : 'bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50'
    }`}>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 parallax-bg">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(234,239,239,0.15) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Main Hero Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content Section */}
          <div className="lg:w-2/3 text-center lg:text-left hero-content">
            {/* Name with enhanced shimmer effect */}
            <h1 className={`text-5xl lg:text-6xl font-chivo font-bold mb-6 leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              <span className="shimmer-text">
                Nithish Bilasunur
                <br />
                Manjunatha Reddy
              </span>
            </h1>
            
            {/* Title */}
            <div className="mb-6">
              <p className={`text-lg lg:text-xl font-chivo font-light ${
                theme === 'dark' ? 'text-blue-gray' : 'text-slate-600'
              }`}>
                AWS Certified Solutions Architect | Data Engineer | GMU Graduate
              </p>
              <div className="w-24 h-[1px] bg-light-teal mx-auto lg:mx-0 mt-4"></div>
            </div>
            
            {/* Description */}
            <p className={`text-base mb-10 max-w-2xl mx-auto lg:mx-0 font-chivo font-light leading-relaxed ${
              theme === 'dark' ? 'text-blue-gray' : 'text-slate-600'
            }`}>
              Turning Cloud & Data into Real-World Impact. Specialized in building scalable cloud-based data 
              solutions that drive efficiency and measurable business results. Actively seeking full-time opportunities 
              in data engineering and analytics.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 mb-12 hero-social">
              <a href="https://github.com/nithishbm" target="_blank" rel="noopener noreferrer" 
                 className={`hover:text-light-teal transition-all duration-300 hover:scale-110 transform will-change-transform ${
                   theme === 'dark' ? 'text-blue-gray' : 'text-slate-600'
                 }`}>
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/nithishbm" target="_blank" rel="noopener noreferrer"
                 className={`hover:text-light-teal transition-all duration-300 hover:scale-110 transform will-change-transform ${
                   theme === 'dark' ? 'text-blue-gray' : 'text-slate-600'
                 }`}>
                <Linkedin size={20} />
              </a>
              <a href="mailto:nitheshbethur39@gmail.com"
                 className={`hover:text-light-teal transition-all duration-300 hover:scale-110 transform will-change-transform ${
                   theme === 'dark' ? 'text-blue-gray' : 'text-slate-600'
                 }`}>
                <Mail size={20} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start hero-buttons">
              <button
                onClick={scrollToAbout}
                className={`group inline-flex items-center space-x-3 border px-6 py-3 rounded-full font-chivo font-medium transition-all duration-300 text-sm transform will-change-transform ${
                  theme === 'dark' 
                    ? 'border-custom-medium hover:border-light-teal text-blue-gray hover:text-light-gray hover:bg-custom-dark/50' 
                    : 'border-slate-300 hover:border-light-teal text-slate-600 hover:text-slate-800 hover:bg-slate-100/50'
                }`}
              >
                <span>Explore My Work</span>
                <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform duration-300" />
              </button>
              
              <button
                onClick={downloadResume}
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-light-teal to-blue-gray hover:from-light-teal/80 hover:to-blue-gray/80 px-6 py-3 rounded-full text-white font-chivo font-medium transition-all duration-300 hover:shadow-lg hover:shadow-light-teal/25 text-sm transform will-change-transform"
              >
                <Download size={14} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Headshot Section */}
          <div className="lg:w-1/3 flex justify-center hero-image">
            <div className="relative group">
              <div className={`w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br border-4 shadow-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-105 transform will-change-transform ${
                theme === 'dark' 
                  ? 'from-custom-dark to-custom-medium border-blue-gray' 
                  : 'from-slate-200 to-slate-300 border-slate-400'
              }`}>
                <div className="text-center">
                  <div className={`w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center ${
                    theme === 'dark' ? 'bg-blue-gray' : 'bg-slate-400'
                  }`}>
                    <svg className="w-10 h-10 text-light-teal" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <p className="text-light-teal font-chivo text-xs">Fairfax, VA</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-light-teal rounded-full"></div>
              <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-blue-gray rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Open to Opportunities Section - Prominently Placed */}
        <div className="max-w-4xl mx-auto">
          <div className={`p-8 rounded-2xl border transition-all duration-300 ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-light-teal/10 to-blue-gray/10 border-light-teal/20' 
              : 'bg-gradient-to-r from-light-teal/5 to-blue-gray/5 border-light-teal/30'
          }`}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Briefcase size={24} className="text-light-teal" />
              <h3 className={`text-2xl font-chivo font-bold ${
                theme === 'dark' ? 'text-light-gray' : 'text-slate-800'
              }`}>Open to Opportunities</h3>
              <span className="text-2xl">🚀</span>
            </div>
            
            <p className={`text-center mb-6 font-chivo leading-relaxed ${
              theme === 'dark' ? 'text-blue-gray' : 'text-slate-600'
            }`}>
              I'm actively seeking full-time opportunities in data engineering, cloud architecture, 
              and analytics roles. Let's discuss how my AWS expertise and data engineering experience 
              can drive your organization's success.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {['Data Engineering', 'Cloud Architecture', 'AWS Solutions', 'Analytics'].map((tag, index) => (
                <span 
                  key={index} 
                  className="text-sm font-chivo font-medium text-light-teal bg-light-teal/10 border border-light-teal/20 px-4 py-2 rounded-full hover:bg-light-teal/20 transition-all duration-300 hover:scale-105 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className={`w-5 h-10 border rounded-full flex justify-center ${
          theme === 'dark' ? 'border-blue-gray' : 'border-slate-400'
        }`}>
          <div className="w-1 h-2 bg-light-teal rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
