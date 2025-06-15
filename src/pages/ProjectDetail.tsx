
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, Code, Users, Target, CheckCircle, Clock } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();

  const projects = [
    {
      id: 'customer-churn-prediction',
      title: "Customer Churn Prediction Model",
      description: "Developed a machine learning model to predict customer churn with 94% accuracy using ensemble methods and feature engineering techniques.",
      longDescription: "This comprehensive machine learning project focused on predicting customer churn for a telecommunications company. The solution involved extensive data preprocessing, feature engineering, and the implementation of multiple ensemble methods including Random Forest, XGBoost, and Gradient Boosting. The final model achieved 94% accuracy and provided actionable insights for customer retention strategies.",
      tech: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      github: "#",
      demo: "#",
      date: "2024",
      status: "Completed",
      duration: "3 months",
      teamSize: "Solo Project",
      challenges: [
        "Handling imbalanced dataset with 85% non-churn customers",
        "Feature selection from 50+ customer attributes",
        "Model interpretability for business stakeholders"
      ],
      solutions: [
        "Implemented SMOTE for balanced sampling",
        "Used recursive feature elimination and correlation analysis",
        "Created SHAP visualizations for model explainability"
      ],
      results: [
        "94% accuracy in churn prediction",
        "Identified top 10 churn indicators",
        "Reduced false positive rate by 15%"
      ],
      keyFeatures: [
        "Real-time prediction API",
        "Interactive dashboard for insights",
        "Automated model retraining pipeline",
        "Customer risk scoring system"
      ]
    },
    {
      id: 'sales-analytics-dashboard',
      title: "Real-time Sales Analytics Dashboard",
      description: "Built an interactive dashboard for real-time sales monitoring with automated alerts and predictive forecasting capabilities.",
      longDescription: "A comprehensive real-time analytics platform that provides sales teams with actionable insights through interactive visualizations, automated alerting systems, and predictive forecasting. The dashboard processes live sales data and provides real-time KPI monitoring with customizable alerts for performance thresholds.",
      tech: ["Python", "Streamlit", "PostgreSQL", "Plotly"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      github: "#",
      demo: "#",
      date: "2024",
      status: "In Progress",
      duration: "4 months",
      teamSize: "3 developers",
      challenges: [
        "Processing high-volume real-time data",
        "Creating responsive interactive visualizations",
        "Implementing accurate forecasting models"
      ],
      solutions: [
        "Implemented streaming data pipeline with Apache Kafka",
        "Used Plotly for dynamic, responsive charts",
        "Applied ARIMA and Prophet models for forecasting"
      ],
      results: [
        "Real-time data processing with <2s latency",
        "95% forecast accuracy for monthly sales",
        "40% improvement in sales team response time"
      ],
      keyFeatures: [
        "Live sales performance tracking",
        "Predictive sales forecasting",
        "Automated alert system",
        "Customizable KPI dashboards"
      ]
    },
    {
      id: 'nlp-sentiment-analysis',
      title: "NLP Sentiment Analysis System",
      description: "Created a comprehensive sentiment analysis system for social media monitoring with real-time processing capabilities.",
      longDescription: "An advanced natural language processing system that monitors social media platforms for brand sentiment analysis. The system processes thousands of social media posts in real-time, classifies sentiment with high accuracy, and provides detailed analytics for brand monitoring and reputation management.",
      tech: ["Python", "NLTK", "Transformers", "FastAPI"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      github: "#",
      demo: "#",
      date: "2023",
      status: "Completed",
      duration: "5 months",
      teamSize: "2 developers",
      challenges: [
        "Handling multilingual social media content",
        "Dealing with informal language and slang",
        "Processing high-volume streaming data"
      ],
      solutions: [
        "Used pre-trained multilingual BERT models",
        "Implemented custom preprocessing for social media text",
        "Built scalable microservices architecture"
      ],
      results: [
        "92% accuracy in sentiment classification",
        "Processing 10,000+ posts per minute",
        "Support for 12 different languages"
      ],
      keyFeatures: [
        "Real-time sentiment monitoring",
        "Multi-platform social media integration",
        "Trend analysis and reporting",
        "Automated alert system for negative sentiment"
      ]
    },
    {
      id: 'supply-chain-optimization',
      title: "Supply Chain Optimization",
      description: "Optimized supply chain logistics using linear programming and simulation modeling, reducing costs by 15%.",
      longDescription: "A comprehensive supply chain optimization project that used advanced mathematical modeling and simulation techniques to optimize logistics operations. The solution involved route optimization, inventory management, and demand forecasting to significantly reduce operational costs while maintaining service quality.",
      tech: ["Python", "OR-Tools", "Pandas", "Matplotlib"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
      github: "#",
      demo: "#",
      date: "2023",
      status: "Completed",
      duration: "6 months",
      teamSize: "4 team members",
      challenges: [
        "Complex multi-objective optimization problem",
        "Uncertainty in demand and supply",
        "Integration with existing ERP systems"
      ],
      solutions: [
        "Implemented multi-objective genetic algorithms",
        "Used Monte Carlo simulation for uncertainty handling",
        "Built REST API for ERP integration"
      ],
      results: [
        "15% reduction in operational costs",
        "20% improvement in delivery times",
        "30% reduction in inventory holding costs"
      ],
      keyFeatures: [
        "Route optimization algorithms",
        "Inventory management system",
        "Demand forecasting models",
        "Real-time supply chain monitoring"
      ]
    }
  ];

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-light-gray flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-chivo font-medium mb-4">Project Not Found</h1>
          <Link to="/" className="text-light-teal hover:text-light-gray transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-light-gray">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="inline-flex items-center space-x-2 text-light-gray hover:text-light-teal transition-colors">
              <ArrowLeft size={20} />
              <span className="font-chivo font-medium">Back to Portfolio</span>
            </Link>
            <div className="flex items-center space-x-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                 className="text-blue-gray hover:text-light-teal transition-colors">
                <Github size={20} />
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                 className="text-blue-gray hover:text-light-teal transition-colors">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className={`text-xs font-chivo font-medium px-3 py-1 rounded-full ${
                  project.status === 'Completed' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {project.status}
                </span>
                <div className="flex items-center text-sm text-blue-gray">
                  <Calendar size={14} className="mr-2" />
                  {project.date}
                </div>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-chivo font-medium mb-4 text-light-gray">
                {project.title}
              </h1>
              
              <p className="text-blue-gray mb-6 leading-relaxed font-chivo">
                {project.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, index) => (
                  <span key={index} className="text-sm font-chivo font-medium text-light-teal bg-light-teal/10 border border-light-teal/20 px-3 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-blue-gray">
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users size={16} className="mr-2" />
                  <span>{project.teamSize}</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-80 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Challenges & Solutions */}
            <div className="space-y-8">
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-custom-medium/30 p-6">
                <h3 className="text-xl font-chivo font-medium mb-4 text-light-gray flex items-center">
                  <Target size={20} className="mr-2 text-light-teal" />
                  Challenges
                </h3>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="text-blue-gray font-chivo flex items-start">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-custom-medium/30 p-6">
                <h3 className="text-xl font-chivo font-medium mb-4 text-light-gray flex items-center">
                  <Code size={20} className="mr-2 text-light-teal" />
                  Solutions
                </h3>
                <ul className="space-y-3">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="text-blue-gray font-chivo flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Results & Features */}
            <div className="space-y-8">
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-custom-medium/30 p-6">
                <h3 className="text-xl font-chivo font-medium mb-4 text-light-gray flex items-center">
                  <CheckCircle size={20} className="mr-2 text-light-teal" />
                  Results
                </h3>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="text-blue-gray font-chivo flex items-start">
                      <div className="w-2 h-2 bg-light-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-custom-medium/30 p-6">
                <h3 className="text-xl font-chivo font-medium mb-4 text-light-gray flex items-center">
                  <Code size={20} className="mr-2 text-light-teal" />
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="text-blue-gray font-chivo flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="mt-12 flex items-center justify-center space-x-4">
            <a href={project.github} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-700 to-slate-600 text-light-gray font-chivo font-medium px-6 py-3 rounded-lg hover:from-slate-600 hover:to-slate-500 transition-all duration-300 hover:scale-105">
              <Github size={18} />
              <span>View Code</span>
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center space-x-2 bg-gradient-to-r from-light-teal/20 to-light-teal/10 border border-light-teal/30 text-light-teal font-chivo font-medium px-6 py-3 rounded-lg hover:from-light-teal/30 hover:to-light-teal/20 hover:border-light-teal/50 transition-all duration-300 hover:scale-105">
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
