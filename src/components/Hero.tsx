import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
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
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 relative overflow-hidden">
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 parallax-bg">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(234,239,239,0.15) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Content Section */}
        <div className="lg:w-2/3 text-center lg:text-left hero-content">
          {/* Name with enhanced shimmer effect */}
          <h1 className="text-5xl lg:text-6xl font-chivo font-bold mb-6 leading-tight">
            <span className="shimmer-text">
              Nithish Bilasunur
              <br />
              Manjunatha Reddy
            </span>
          </h1>
          
          {/* Title */}
          <div className="mb-6">
            <p className="text-lg lg:text-xl text-blue-gray font-chivo font-light">
              AWS Certified Solutions Architect | Data Engineer | GMU Graduate
            </p>
            <div className="w-24 h-[1px] bg-light-teal mx-auto lg:mx-0 mt-4"></div>
          </div>
          
          {/* Description */}
          <p className="text-base text-blue-gray mb-10 max-w-2xl mx-auto lg:mx-0 font-chivo font-light leading-relaxed">
            Turning Cloud & Data into Real-World Impact. Specialized in building scalable cloud-based data 
            solutions that drive efficiency and measurable business results. Actively seeking full-time opportunities 
            in data engineering and analytics.
          </p>
          
          {/* Social Links - Repositioned with jitter animation */}
          <div className="flex justify-center lg:justify-start space-x-6 mb-8 hero-social">
            <a href="https://github.com/nithishbm" target="_blank" rel="noopener noreferrer" 
               className="text-blue-gray hover:text-light-teal transition-all duration-300 hover:scale-110 transform will-change-transform flex items-center justify-center w-12 h-12"
               aria-label="Visit my GitHub profile">
              <Github size={24} className="block" />
            </a>
            <a href="https://www.linkedin.com/in/nithishbm" target="_blank" rel="noopener noreferrer"
               className="text-blue-gray hover:text-light-teal transition-all duration-300 hover:scale-110 transform will-change-transform flex items-center justify-center w-12 h-12"
               aria-label="Visit my LinkedIn profile">
              <Linkedin size={24} className="block" />
            </a>
          </div>

          {/* Contact Email Link */}
          <div className="flex justify-center lg:justify-start mt-8">
            <a href="mailto:nitheshbethur39@gmail.com"
               className="text-blue-gray hover:text-light-teal transition-all duration-300 flex items-center space-x-2 text-sm"
               aria-label="Send me an email">
              <Mail size={16} />
              <span>nbilasun@gmu.edu</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start hero-buttons">
            <button
              onClick={scrollToAbout}
              className="group inline-flex items-center space-x-3 border border-custom-medium hover:border-light-teal px-6 py-3 rounded-full text-blue-gray hover:text-light-gray font-chivo font-medium transition-all duration-300 hover:bg-custom-dark/50 text-sm transform will-change-transform"
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
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-gray shadow-2xl transition-all duration-500 group-hover:scale-105 transform will-change-transform">
              <img 
                src="/lovable-uploads/a9115f67-04d5-4f12-9f92-8f8f55bfcea4.png" 
                alt="Nithish Bilasunur Manjunatha Reddy - Professional Headshot"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-light-teal rounded-full"></div>
            <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-blue-gray rounded-full"></div>
            
            {/* Location badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-custom-dark/90 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-gray/30">
              <p className="text-light-teal font-chivo text-xs">Fairfax, VA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="w-5 h-10 border border-blue-gray rounded-full flex justify-center">
          <div className="w-1 h-2 bg-light-teal rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
