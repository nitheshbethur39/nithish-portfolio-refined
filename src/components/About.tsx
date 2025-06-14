
import { Brain, Database, TrendingUp, Code } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      emoji: "🤖",
      title: "Machine Learning",
      description: "Expert in developing predictive models and AI solutions"
    },
    {
      icon: Database,
      emoji: "📊",
      title: "Data Engineering", 
      description: "Building robust data pipelines and ETL processes"
    },
    {
      icon: TrendingUp,
      emoji: "📈",
      title: "Business Analytics",
      description: "Converting complex data into strategic business insights"
    },
    {
      icon: Code,
      emoji: "💻",
      title: "Statistical Programming",
      description: "Proficient in Python, R, SQL, and advanced analytics tools"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-4xl animate-float">👨‍💻</span>
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-light-teal to-blue-gray bg-clip-text text-transparent">
              About Me
            </h2>
            <span className="text-4xl animate-float delay-150">✨</span>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-light-teal to-blue-gray mx-auto mb-10 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <p className="text-xl text-light-gray leading-relaxed">
                <span className="text-2xl mr-2">🚀</span>
                I'm a passionate data scientist with over 3 years of experience in transforming 
                complex datasets into actionable business insights. My expertise spans machine learning, 
                statistical analysis, and data visualization.
              </p>
              <p className="text-xl text-light-gray leading-relaxed">
                <span className="text-2xl mr-2">🎯</span>
                I specialize in building end-to-end data solutions, from data collection and preprocessing 
                to model deployment and business intelligence dashboards. My goal is to bridge the gap 
                between raw data and strategic decision-making.
              </p>
              <p className="text-xl text-light-gray leading-relaxed">
                <span className="text-2xl mr-2">🌟</span>
                When I'm not analyzing data, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge through technical writing and mentoring.
              </p>
            </div>
            
            <div className="pt-8">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                 className="group inline-flex items-center space-x-3 bg-gradient-to-r from-light-teal to-blue-gray hover:from-light-teal/80 hover:to-blue-gray/80 px-8 py-4 rounded-xl text-white font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-light-teal/30">
                <span className="text-xl group-hover:rotate-12 transition-transform duration-300">📄</span>
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 animate-fade-in">
            {highlights.map((item, index) => (
              <div key={index} className={`group bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-custom-medium hover:border-light-teal transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-light-teal/10 animate-stagger-${index + 1}`}>
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-light-teal to-blue-gray rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon size={28} className="text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 text-2xl animate-float">{item.emoji}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-light-gray group-hover:text-light-teal transition-colors duration-300">{item.title}</h3>
                <p className="text-blue-gray leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
