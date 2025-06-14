
import { Brain, Database, TrendingUp, Code } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Expert in developing predictive models and AI solutions"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Building robust data pipelines and ETL processes"
    },
    {
      icon: TrendingUp,
      title: "Business Analytics",
      description: "Converting complex data into strategic business insights"
    },
    {
      icon: Code,
      title: "Statistical Programming",
      description: "Proficient in Python, R, SQL, and advanced analytics tools"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate data scientist with over 3 years of experience in transforming 
              complex datasets into actionable business insights. My expertise spans machine learning, 
              statistical analysis, and data visualization.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I specialize in building end-to-end data solutions, from data collection and preprocessing 
              to model deployment and business intelligence dashboards. My goal is to bridge the gap 
              between raw data and strategic decision-making.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              When I'm not analyzing data, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge through technical writing and mentoring.
            </p>
            
            <div className="pt-6">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105">
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
