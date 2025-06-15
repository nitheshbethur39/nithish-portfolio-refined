
import { Github, ExternalLink, ArrowRight, Calendar, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 'customer-churn-prediction',
      title: "Customer Churn Prediction Model",
      description: "Developed a machine learning model to predict customer churn with 94% accuracy using ensemble methods and feature engineering techniques.",
      tech: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      date: "2024",
      status: "Completed"
    },
    {
      id: 'sales-analytics-dashboard',
      title: "Real-time Sales Analytics Dashboard",
      description: "Built an interactive dashboard for real-time sales monitoring with automated alerts and predictive forecasting capabilities.",
      tech: ["Python", "Streamlit", "PostgreSQL", "Plotly"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      date: "2024",
      status: "In Progress"
    },
    {
      id: 'nlp-sentiment-analysis',
      title: "NLP Sentiment Analysis System",
      description: "Created a comprehensive sentiment analysis system for social media monitoring with real-time processing capabilities.",
      tech: ["Python", "NLTK", "Transformers", "FastAPI"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      date: "2023",
      status: "Completed"
    },
    {
      id: 'supply-chain-optimization',
      title: "Supply Chain Optimization",
      description: "Optimized supply chain logistics using linear programming and simulation modeling, reducing costs by 15%.",
      tech: ["Python", "OR-Tools", "Pandas", "Matplotlib"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      date: "2023",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore my latest data science and analytics projects that demonstrate practical applications 
            of machine learning and statistical analysis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-teal-400/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-400/10">
              
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm ${
                  project.status === 'Completed' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Image Section */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
                
                {/* Floating Action Buttons */}
                <div className="absolute top-4 left-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-300 hover:text-teal-400 hover:bg-slate-900 transition-all duration-300 hover:scale-110">
                    <Github size={18} />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-300 hover:text-teal-400 hover:bg-slate-900 transition-all duration-300 hover:scale-110">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-teal-400 transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-400 ml-4">
                    <Calendar size={14} className="mr-2" />
                    {project.date}
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="text-sm font-medium text-teal-400 bg-teal-400/10 border border-teal-400/20 px-3 py-1 rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <Link to={`/project/${project.id}`}
                     className="inline-flex items-center space-x-2 text-gray-300 hover:text-teal-400 font-medium group-hover:translate-x-1 transition-all duration-300">
                    <Code size={16} />
                    <span>View Project</span>
                    <ArrowRight size={16} />
                  </Link>
                  
                  <div className="flex space-x-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="w-9 h-9 bg-slate-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-teal-400 hover:bg-teal-400/10 transition-all duration-300">
                      <Github size={16} />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                       className="w-9 h-9 bg-slate-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-teal-400 hover:bg-teal-400/10 transition-all duration-300">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center space-x-3 bg-gradient-to-r from-teal-400/20 to-blue-500/20 border border-teal-400/30 text-teal-400 font-medium px-8 py-3 rounded-xl hover:from-teal-400/30 hover:to-blue-500/30 hover:border-teal-400/50 transition-all duration-300 hover:scale-105">
            <span>View All Projects</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
