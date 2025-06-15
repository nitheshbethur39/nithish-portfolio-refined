
import { Github, ExternalLink, ArrowRight, Calendar, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 'smartvault-backup-automation',
      title: "SmartVault - AWS EC2 Backup Automation",
      description: "Automated real-time stock data ingestion and EC2 backup processes using AWS Lambda and EventBridge, reducing manual data collection efforts by 90% and cutting infrastructure costs by 40%.",
      tech: ["AWS Lambda", "EC2", "S3", "EventBridge", "Python"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      date: "2025",
      status: "In Progress"
    },
    {
      id: 'airline-performance-analytics',
      title: "Airline Performance Analytics & Forecasting",
      description: "Cleaned and transformed 500,000+ rows of flight data achieving 87% prediction accuracy using ML models. Engineered unified datasets and deployed interactive React dashboards for investor insights.",
      tech: ["Python", "pandas", "Random Forest", "LSTM", "XGBoost", "React"],
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      date: "Jan 2025 - May 2025",
      status: "In Progress"
    },
    {
      id: 'healthcare-etl-pipeline',
      title: "Healthcare ETL Pipeline & Data Warehouse",
      description: "Delivered scalable ETL pipelines for U.S. healthcare provider achieving 99.9% data accuracy. Optimized SQL queries improving execution speed by 30% and reduced pre-deployment issues by 20%.",
      tech: ["Python", "PostgreSQL", "SQL", "ETL", "Data Warehouse"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      date: "Nov 2020 - Jun 2023",
      status: "Completed"
    },
    {
      id: 'naval-thermal-monitoring',
      title: "Naval Thermal Monitoring System",
      description: "Engineered real-time ETL pipeline for thermal monitoring on Indian Navy vessels, reducing overheating incidents by 30% and energy consumption by 20%. Built Tableau dashboards cutting diagnostics time by 40%.",
      tech: ["Python", "MySQL", "Tableau", "Real-time ETL", "Statistical Models"],
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      date: "Dec 2019 - Sep 2020",
      status: "Completed"
    },
    {
      id: 'predictive-maintenance-bosch',
      title: "Predictive Maintenance System",
      description: "Developed real-time data integration system for Bosch manufacturing plant using SCADA integration and time-series analysis, reducing machine breakdowns by 25% and maintenance costs by 15%.",
      tech: ["Python", "SQL", "Tableau", "SCADA", "Time-series Analysis"],
      image: "https://images.unsplash.com/photo-1565008447742-97d5aca24c05?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      date: "Jun 2019 - Aug 2019",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 section-header">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="text-3xl">🚀</span>
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-light-teal to-blue-gray bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <span className="text-3xl">💼</span>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-light-teal to-blue-gray mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Real-world data engineering and analytics projects showcasing cloud automation, 
            machine learning, and scalable data solutions with measurable business impact.
          </p>
        </div>

        {/* Responsive Grid Layout - Fixed spacing and alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-teal-400/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-400/10 flex flex-col">
              
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm ${
                  project.status === 'Completed' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Image Section */}
              <div className="relative overflow-hidden h-48 flex-shrink-0">
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
              
              {/* Content Section - Flex grow to fill remaining space */}
              <div className="p-6 flex-grow flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-teal-400 transition-colors duration-300 leading-tight flex-grow">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-400 ml-4 flex-shrink-0">
                    <Calendar size={14} className="mr-2" />
                    <span className="whitespace-nowrap">{project.date}</span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
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
                <div className="flex items-center justify-between mt-auto">
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
      </div>
    </section>
  );
};

export default Projects;
