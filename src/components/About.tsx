
import { Brain, Database, TrendingUp, Code } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      emoji: "☁️",
      title: "Cloud Architecture",
      description: "AWS Certified Solutions Architect with expertise in scalable cloud solutions"
    },
    {
      icon: Database,
      emoji: "🔧",
      title: "Data Engineering", 
      description: "Building robust ETL pipelines and real-time data processing systems"
    },
    {
      icon: TrendingUp,
      emoji: "📊",
      title: "Business Impact",
      description: "Delivering measurable results: 40% cost reduction, 99.9% data accuracy"
    },
    {
      icon: Code,
      emoji: "⚡",
      title: "Automation & Analytics",
      description: "Streamlining workflows with Python, SQL, and advanced analytics tools"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 section-header">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="text-3xl">🚀</span>
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-light-teal to-blue-gray bg-clip-text text-transparent">
              About Me
            </h2>
            <span className="text-3xl">✨</span>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-light-teal to-blue-gray mx-auto mb-8 rounded-full"></div>
        </div>

        {/* Mobile & Tablet Layout - Stacked */}
        <div className="block lg:hidden space-y-12">
          {/* Text Content */}
          <div className="space-y-6 about-content">
            <div className="space-y-5">
              <p className="text-lg text-light-gray leading-relaxed">
                <span className="text-xl mr-2">🎓</span>
                I'm a recent Master's graduate in Data Analytics Engineering from George Mason University and 
                an AWS Certified Solutions Architect. I specialize in building scalable cloud-based data solutions 
                that drive efficiency and measurable business impact.
              </p>
              <p className="text-lg text-light-gray leading-relaxed">
                <span className="text-xl mr-2">💡</span>
                From automating EC2 backups with SmartVault (cutting costs by 40%) to engineering real-time 
                pipelines with Kafka, Glue, and Athena, I bring hands-on experience in data engineering, 
                analytics, and cloud architecture across healthcare, aerospace, and manufacturing sectors.
              </p>
              <p className="text-lg text-light-gray leading-relaxed">
                <span className="text-xl mr-2">🎯</span>
                I'm passionate about using cloud tools to solve real business problems — whether it's streamlining 
                workflows, enhancing compliance, or creating actionable insights. Currently seeking full-time 
                opportunities in data engineering and analytics roles.
              </p>
            </div>
            
            <div className="pt-6 text-center">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                 className="group inline-flex items-center space-x-3 bg-gradient-to-r from-light-teal to-blue-gray hover:from-light-teal/80 hover:to-blue-gray/80 px-8 py-4 rounded-xl text-white font-bold text-base transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-light-teal/30 transform will-change-transform">
                <span className="text-lg group-hover:rotate-12 transition-transform duration-300">📄</span>
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 about-highlights">
            {highlights.map((item, index) => (
              <div key={index} className="group bg-slate-800/90 border border-slate-700 hover:border-light-teal p-6 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-light-teal/20 transform will-change-transform hover:bg-slate-700/90">
                <div className="flex items-center justify-center mb-4">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-light-teal to-blue-gray rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <item.icon size={24} className="text-white" />
                    </div>
                    <span className="absolute -top-1 -right-1 text-xl">{item.emoji}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-light-gray group-hover:text-light-teal transition-colors duration-300 text-center">{item.title}</h3>
                <p className="text-blue-gray leading-relaxed text-base text-center group-hover:text-light-gray transition-colors duration-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 items-start">
          {/* Text Content - Takes 2 columns for better balance */}
          <div className="lg:col-span-2 space-y-6 about-content pr-4">
            <div className="space-y-6">
              <p className="text-lg text-light-gray leading-relaxed">
                <span className="text-xl mr-2">🎓</span>
                I'm a recent Master's graduate in Data Analytics Engineering from George Mason University and 
                an AWS Certified Solutions Architect. I specialize in building scalable cloud-based data solutions 
                that drive efficiency and measurable business impact.
              </p>
              <p className="text-lg text-light-gray leading-relaxed">
                <span className="text-xl mr-2">💡</span>
                From automating EC2 backups with SmartVault (cutting costs by 40%) to engineering real-time 
                pipelines with Kafka, Glue, and Athena, I bring hands-on experience in data engineering, 
                analytics, and cloud architecture across healthcare, aerospace, and manufacturing sectors.
              </p>
              <p className="text-lg text-light-gray leading-relaxed">
                <span className="text-xl mr-2">🎯</span>
                I'm passionate about using cloud tools to solve real business problems — whether it's streamlining 
                workflows, enhancing compliance, or creating actionable insights. Currently seeking full-time 
                opportunities in data engineering and analytics roles.
              </p>
            </div>
            
            <div className="pt-8">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                 className="group inline-flex items-center space-x-3 bg-gradient-to-r from-light-teal to-blue-gray hover:from-light-teal/80 hover:to-blue-gray/80 px-8 py-4 rounded-xl text-white font-bold text-base transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-light-teal/30 transform will-change-transform">
                <span className="text-lg group-hover:rotate-12 transition-transform duration-300">📄</span>
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Highlight Cards - Takes 2 columns with 2x2 grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4 about-highlights">
            {highlights.map((item, index) => (
              <div key={index} className="group bg-slate-800/90 border border-slate-700 hover:border-light-teal p-4 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-light-teal/20 transform will-change-transform hover:bg-slate-700/90">
                <div className="flex items-center justify-center mb-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-light-teal to-blue-gray rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <item.icon size={20} className="text-white" />
                    </div>
                    <span className="absolute -top-1 -right-1 text-lg">{item.emoji}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-light-gray group-hover:text-light-teal transition-colors duration-300 text-center">{item.title}</h3>
                <p className="text-blue-gray leading-relaxed text-sm text-center group-hover:text-light-gray transition-colors duration-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
