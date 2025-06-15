
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, Code, Users, Target, CheckCircle, Clock } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();

  const projects = [
    {
      id: 'smartvault-backup-automation',
      title: "SmartVault - AWS EC2 Backup Automation",
      description: "Automated real-time stock data ingestion and EC2 backup processes using AWS Lambda and EventBridge, reducing manual data collection efforts by 90% and cutting infrastructure costs by 40%.",
      longDescription: "This comprehensive cloud automation project focused on building a robust backup system for AWS EC2 instances using serverless architecture. The solution automated stock data ingestion from multiple sources, implemented real-time backup processes, and significantly reduced operational overhead while improving system reliability and cost efficiency.",
      tech: ["AWS Lambda", "EC2", "S3", "EventBridge", "Python"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      github: "#",
      demo: "#",
      date: "2025",
      status: "In Progress",
      duration: "6 months",
      teamSize: "Solo Project",
      category: "cloud",
      challenges: [
        "Managing complex EC2 instance dependencies during backup",
        "Handling real-time stock data ingestion at scale",
        "Optimizing Lambda cold starts for time-sensitive operations"
      ],
      solutions: [
        "Implemented dependency mapping with EventBridge orchestration",
        "Used streaming data pipelines with buffering mechanisms",
        "Applied provisioned concurrency and connection pooling"
      ],
      results: [
        "90% reduction in manual data collection efforts",
        "40% reduction in infrastructure costs",
        "99.9% backup success rate with automated recovery"
      ],
      keyFeatures: [
        "Automated EC2 snapshot management",
        "Real-time stock data processing",
        "Cost optimization algorithms",
        "Disaster recovery automation"
      ]
    },
    {
      id: 'airline-performance-analytics',
      title: "Airline Performance Analytics & Forecasting",
      description: "Cleaned and transformed 500,000+ rows of flight data achieving 87% prediction accuracy using ML models. Engineered unified datasets and deployed interactive React dashboards for investor insights.",
      longDescription: "A comprehensive data analytics platform that processes large-scale airline performance data to provide predictive insights for investors and airline management. The system combines advanced machine learning models with interactive visualizations to forecast flight performance, delays, and operational metrics.",
      tech: ["Python", "pandas", "Random Forest", "LSTM", "XGBoost", "React"],
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
      github: "#",
      demo: "#",
      date: "Jan 2025 - May 2025",
      status: "In Progress",
      duration: "5 months",
      teamSize: "3 developers",
      category: "analytics",
      challenges: [
        "Processing 500,000+ rows of heterogeneous flight data",
        "Handling missing data and inconsistent formats",
        "Building accurate forecasting models for volatile airline metrics"
      ],
      solutions: [
        "Implemented robust ETL pipelines with data validation",
        "Used advanced imputation techniques and feature engineering",
        "Applied ensemble methods combining LSTM and XGBoost models"
      ],
      results: [
        "87% prediction accuracy for flight performance",
        "Unified dataset from 15+ data sources",
        "Interactive dashboards serving 100+ stakeholders"
      ],
      keyFeatures: [
        "Real-time flight performance tracking",
        "Predictive delay forecasting",
        "Interactive investor dashboards",
        "Automated reporting system"
      ]
    },
    {
      id: 'healthcare-etl-pipeline',
      title: "Healthcare ETL Pipeline & Data Warehouse",
      description: "Delivered scalable ETL pipelines for U.S. healthcare provider achieving 99.9% data accuracy. Optimized SQL queries improving execution speed by 30% and reduced pre-deployment issues by 20%.",
      longDescription: "A mission-critical healthcare data infrastructure project that built scalable ETL pipelines for a major U.S. healthcare provider. The system processes sensitive patient data while maintaining HIPAA compliance, ensuring data accuracy, and providing real-time analytics for clinical decision-making.",
      tech: ["Python", "PostgreSQL", "SQL", "ETL", "Data Warehouse"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      github: "#",
      demo: "#",
      date: "Nov 2020 - Jun 2023",
      status: "Completed",
      duration: "32 months",
      teamSize: "5 team members",
      category: "cloud",
      challenges: [
        "Ensuring HIPAA compliance for sensitive patient data",
        "Managing complex healthcare data schemas",
        "Achieving near-perfect data accuracy requirements"
      ],
      solutions: [
        "Implemented end-to-end encryption and audit trails",
        "Built flexible schema mapping with validation rules",
        "Created comprehensive data quality monitoring"
      ],
      results: [
        "99.9% data accuracy achieved",
        "30% improvement in SQL query execution speed",
        "20% reduction in pre-deployment issues"
      ],
      keyFeatures: [
        "HIPAA-compliant data processing",
        "Real-time data validation",
        "Automated quality monitoring",
        "Clinical analytics dashboards"
      ]
    },
    {
      id: 'naval-thermal-monitoring',
      title: "Naval Thermal Monitoring System",
      description: "Engineered real-time ETL pipeline for thermal monitoring on Indian Navy vessels, reducing overheating incidents by 30% and energy consumption by 20%. Built Tableau dashboards cutting diagnostics time by 40%.",
      longDescription: "A specialized IoT and data analytics solution for the Indian Navy that monitors thermal conditions across naval vessels in real-time. The system prevents equipment failures, optimizes energy consumption, and provides critical insights for maritime operations through advanced analytics and visualization.",
      tech: ["Python", "MySQL", "Tableau", "Real-time ETL", "Statistical Models"],
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
      github: "#",
      demo: "#",
      date: "Dec 2019 - Sep 2020",
      status: "Completed",
      duration: "10 months",
      teamSize: "4 engineers",
      category: "cloud",
      challenges: [
        "Operating in harsh maritime environments",
        "Processing real-time sensor data from multiple vessels",
        "Ensuring system reliability for critical naval operations"
      ],
      solutions: [
        "Implemented ruggedized IoT sensors with redundancy",
        "Built fault-tolerant streaming data architecture",
        "Created automated failover and recovery systems"
      ],
      results: [
        "30% reduction in overheating incidents",
        "20% reduction in energy consumption",
        "40% reduction in diagnostic time"
      ],
      keyFeatures: [
        "Real-time thermal monitoring",
        "Predictive maintenance alerts",
        "Energy optimization algorithms",
        "Naval-grade reliability systems"
      ]
    },
    {
      id: 'predictive-maintenance-bosch',
      title: "Predictive Maintenance System",
      description: "Developed real-time data integration system for Bosch manufacturing plant using SCADA integration and time-series analysis, reducing machine breakdowns by 25% and maintenance costs by 15%.",
      longDescription: "An industrial IoT and predictive analytics solution developed for Bosch manufacturing operations. The system integrates with existing SCADA infrastructure to provide real-time machine health monitoring, predictive maintenance scheduling, and operational optimization through advanced time-series analysis.",
      tech: ["Python", "SQL", "Tableau", "SCADA", "Time-series Analysis"],
      image: "https://images.unsplash.com/photo-1565008447742-97d5aca24c05?w=800&h=600&fit=crop",
      github: "#",
      demo: "#",
      date: "Jun 2019 - Aug 2019",
      status: "Completed",
      duration: "3 months",
      teamSize: "2 developers",
      category: "analytics",
      challenges: [
        "Integrating with legacy SCADA systems",
        "Processing high-frequency industrial sensor data",
        "Building accurate predictive models for diverse machinery"
      ],
      solutions: [
        "Developed custom SCADA connectors with protocol translation",
        "Implemented streaming analytics with edge computing",
        "Used machine-specific ML models with ensemble techniques"
      ],
      results: [
        "25% reduction in machine breakdowns",
        "15% reduction in maintenance costs",
        "Real-time monitoring of 200+ machines"
      ],
      keyFeatures: [
        "SCADA system integration",
        "Real-time anomaly detection",
        "Predictive maintenance scheduling",
        "Manufacturing optimization dashboards"
      ]
    },
    {
      id: 'e-commerce-analytics',
      title: "E-commerce Customer Analytics Platform",
      description: "Built comprehensive customer behavior analytics platform with real-time recommendation engine and churn prediction models, improving customer retention by 35% and increasing revenue by 22%.",
      longDescription: "A comprehensive e-commerce analytics platform that combines customer behavior analysis, real-time recommendation systems, and predictive modeling to optimize customer experience and business outcomes. The platform processes millions of user interactions to provide personalized experiences and actionable business insights.",
      tech: ["Python", "Apache Kafka", "TensorFlow", "React", "MongoDB"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      github: "#",
      demo: "#",
      date: "Coming Soon",
      status: "Coming Soon",
      duration: "8 months",
      teamSize: "6 developers",
      category: "analytics",
      challenges: [
        "Processing millions of real-time user interactions",
        "Building accurate recommendation algorithms",
        "Scaling personalization across diverse product catalogs"
      ],
      solutions: [
        "Implemented distributed streaming with Apache Kafka",
        "Used collaborative filtering with deep learning models",
        "Built microservices architecture for horizontal scaling"
      ],
      results: [
        "35% improvement in customer retention",
        "22% increase in revenue",
        "Real-time recommendations for 1M+ users"
      ],
      keyFeatures: [
        "Real-time behavior tracking",
        "Personalized recommendation engine",
        "Customer churn prediction",
        "Revenue optimization analytics"
      ]
    },
    {
      id: 'serverless-microservices',
      title: "Serverless Microservices Architecture",
      description: "Designed and implemented cloud-native microservices architecture using AWS Lambda and API Gateway, reducing operational costs by 60% and improving system scalability by 300%.",
      longDescription: "A comprehensive serverless architecture transformation project that modernized legacy monolithic applications into cloud-native microservices. The solution leverages AWS serverless technologies to achieve unprecedented scalability while dramatically reducing operational overhead and infrastructure costs.",
      tech: ["AWS Lambda", "API Gateway", "DynamoDB", "CloudFormation", "Node.js"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      github: "#",
      demo: "#",
      date: "Coming Soon",
      status: "Coming Soon",
      duration: "12 months",
      teamSize: "8 developers",
      category: "cloud",
      challenges: [
        "Decomposing complex monolithic applications",
        "Managing distributed system complexity",
        "Ensuring data consistency across microservices"
      ],
      solutions: [
        "Applied domain-driven design for service boundaries",
        "Implemented event-driven architecture with SQS/SNS",
        "Used eventual consistency with CQRS patterns"
      ],
      results: [
        "60% reduction in operational costs",
        "300% improvement in system scalability",
        "Zero-downtime deployments"
      ],
      keyFeatures: [
        "Serverless microservices architecture",
        "Auto-scaling infrastructure",
        "Event-driven communication",
        "Infrastructure as Code deployment"
      ]
    },
    {
      id: 'realtime-fraud-detection',
      title: "Real-time Fraud Detection System",
      description: "Developed ML-powered fraud detection system processing 1M+ transactions daily with 99.8% accuracy and sub-second response times, preventing $2.5M in fraudulent activities annually.",
      longDescription: "A high-performance fraud detection system that processes millions of financial transactions in real-time using advanced machine learning algorithms. The system combines rule-based engines with ML models to achieve exceptional accuracy while maintaining ultra-low latency for critical financial operations.",
      tech: ["Python", "Apache Spark", "Kafka", "Redis", "Scikit-learn"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      github: "#",
      demo: "#",
      date: "Coming Soon",
      status: "Coming Soon",
      duration: "10 months",
      teamSize: "5 data scientists",
      category: "analytics",
      challenges: [
        "Processing 1M+ transactions daily with sub-second latency",
        "Balancing fraud detection accuracy with false positives",
        "Adapting to evolving fraud patterns in real-time"
      ],
      solutions: [
        "Implemented distributed computing with Apache Spark",
        "Used ensemble models with dynamic threshold adjustment",
        "Built continuous learning pipelines with model retraining"
      ],
      results: [
        "99.8% fraud detection accuracy",
        "Sub-second response times",
        "$2.5M prevented in fraudulent activities annually"
      ],
      keyFeatures: [
        "Real-time transaction monitoring",
        "Machine learning fraud detection",
        "Dynamic risk scoring",
        "Automated response systems"
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
                    : project.status === 'Coming Soon'
                    ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
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
