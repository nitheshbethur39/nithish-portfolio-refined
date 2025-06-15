
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
    <section id="projects" className="py-12 px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-chivo font-medium mb-3 text-light-gray">
            Featured Projects
          </h2>
          <div className="w-16 h-[1px] bg-light-teal mx-auto mb-4"></div>
          <p className="text-sm text-blue-gray max-w-2xl mx-auto font-chivo font-light">
            Explore my latest data science and analytics projects that demonstrate practical applications 
            of machine learning and statistical analysis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <div key={index} className="project-card group relative bg-gradient-to-br from-slate-800/40 to-slate-800/20 backdrop-blur-sm rounded-xl border border-custom-medium/30 overflow-hidden hover:border-light-teal/40 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-light-teal/10 transform will-change-transform">
              
              {/* Status Badge */}
              <div className="absolute top-3 right-3 z-10">
                <span className={`text-xs font-chivo font-medium px-2 py-1 rounded-full ${
                  project.status === 'Completed' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Image Section */}
              <div className="relative overflow-hidden h-40">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
                
                {/* Floating Action Buttons */}
                <div className="absolute top-3 left-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                     className="w-8 h-8 bg-custom-dark/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-light-gray hover:text-light-teal hover:bg-custom-dark transition-all duration-300 hover:scale-110 transform will-change-transform">
                    <Github size={14} />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                     className="w-8 h-8 bg-custom-dark/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-light-gray hover:text-light-teal hover:bg-custom-dark transition-all duration-300 hover:scale-110 transform will-change-transform">
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-5">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base font-chivo font-medium text-light-gray group-hover:text-light-teal transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-xs text-blue-gray ml-3">
                    <Calendar size={12} className="mr-1" />
                    {project.date}
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-blue-gray mb-4 leading-relaxed font-chivo font-light text-xs line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs font-chivo font-medium text-light-teal bg-light-teal/10 border border-light-teal/20 px-2 py-0.5 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <Link to={`/project/${project.id}`}
                     className="inline-flex items-center space-x-2 text-blue-gray hover:text-light-teal font-chivo font-medium group-hover:translate-x-1 transition-all duration-300 text-xs transform will-change-transform">
                    <Code size={12} />
                    <span>View Project</span>
                    <ArrowRight size={12} />
                  </Link>
                  
                  <div className="flex space-x-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="w-7 h-7 bg-custom-medium/20 rounded-lg flex items-center justify-center text-blue-gray hover:text-light-teal hover:bg-light-teal/10 transition-all duration-300 transform will-change-transform">
                      <Github size={12} />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                       className="w-7 h-7 bg-custom-medium/20 rounded-lg flex items-center justify-center text-blue-gray hover:text-light-teal hover:bg-light-teal/10 transition-all duration-300 transform will-change-transform">
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-light-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-8">
          <a href="#" className="inline-flex items-center space-x-2 bg-gradient-to-r from-light-teal/20 to-light-teal/10 border border-light-teal/30 text-light-teal font-chivo font-medium px-5 py-2.5 rounded-lg hover:from-light-teal/30 hover:to-light-teal/20 hover:border-light-teal/50 transition-all duration-300 hover:scale-105 text-sm transform will-change-transform">
            <span>View All Projects</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
