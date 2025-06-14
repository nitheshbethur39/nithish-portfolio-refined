
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Customer Churn Prediction Model",
      description: "Developed a machine learning model to predict customer churn with 94% accuracy using ensemble methods and feature engineering techniques.",
      tech: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Real-time Sales Analytics Dashboard",
      description: "Built an interactive dashboard for real-time sales monitoring with automated alerts and predictive forecasting capabilities.",
      tech: ["Python", "Streamlit", "PostgreSQL", "Plotly"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "NLP Sentiment Analysis System",
      description: "Created a comprehensive sentiment analysis system for social media monitoring with real-time processing capabilities.",
      tech: ["Python", "NLTK", "Transformers", "FastAPI"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Supply Chain Optimization",
      description: "Optimized supply chain logistics using linear programming and simulation modeling, reducing costs by 15%.",
      tech: ["Python", "OR-Tools", "Pandas", "Matplotlib"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-chivo font-medium mb-6 text-white">
            Featured Projects
          </h2>
          <div className="w-24 h-[1px] bg-slate-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-chivo font-light">
            Explore my latest data science and analytics projects that demonstrate practical applications 
            of machine learning and statistical analysis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-slate-600/50 transition-all duration-500 hover:transform hover:scale-[1.02]">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="text-slate-400 hover:text-white transition-colors duration-300">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                       className="text-slate-400 hover:text-white transition-colors duration-300">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-2xl font-chivo font-medium mb-4 text-white group-hover:text-slate-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 mb-6 leading-relaxed font-chivo font-light">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs font-chivo font-medium text-slate-300 bg-slate-700/50 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a href={project.demo} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center space-x-2 text-slate-400 hover:text-white font-chivo font-medium group-hover:translate-x-2 transition-all duration-300">
                  <span>View Project</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
