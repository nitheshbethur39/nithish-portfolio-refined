
import { Github, ExternalLink, ArrowRight, Calendar, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Description } from '@radix-ui/react-toast';

const Projects = () => {
  const [activeTab, setActiveTab] = useState(()=>'all');

  const projects = [
    {
      id: 'smartvault-backup-automation',
      title: "SmartVault – Automated EC2 Backup & Compliance System",
      description: "Designed and deployed a fully automated, tag-based backup and compliance system on AWS to manage EC2 volume snapshots with zero manual intervention.",
      tech: ["AWS Lambda", "EC2", "S3", "EventBridge","SNS","CodePipeline","CloudWatch", "Python"],

      image: "https://images.unsplash.com/photo-1649734926695-1b1664e98842?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/nitheshbethur39/smartvault-backup-system",
      demo: "#",
      date: "May-2025",
      status: "Completed",
      category: "cloud & data engineering"
    },
    {
      id: 'wildrydes-serverless-app',
      title: "WildRydes: Serverless Ride-Sharing App on AWS",
      description: "Built a fully serverless ride-sharing app using AWS services like Lambda, API Gateway, DynamoDB, and Cognito. Hosted the frontend on Amplify with CI/CD from GitHub.",
      tech: ["AWS Lambda", "API Gateway", "DynamoDB", "Cognito", "Amplify", "Node.js"],
      image: "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      date: "June 2025",
      status: "Completed",
      category: "cloud & data engineering"
    },
    {
      id:'rag-chatbot-bedrock',
      title: "Personalized AI Chatbot with Amazon Bedrock (RAG)",
      description: "Built a custom chatbot using Retrieval Augmented Generation (RAG) on Amazon Bedrock, trained on personal documents to answer questions about me with high accuracy and context awareness.",
      longDescription: "This project demonstrates the creation of a personalized AI assistant using Retrieval Augmented Generation (RAG) in Amazon Bedrock. The chatbot was designed to understand and answer questions about my personal profile, knowledge, and experience using documents uploaded to S3. Bedrock’s integration with OpenSearch Serverless and Titan embedding models enabled real-time search and intelligent response generation. The setup included building a Knowledge Base, connecting vector storage, syncing data, and testing with multiple AI models like Llama and Titan.",
      tech: [
        "Amazon Bedrock",
        "RAG (Retrieval Augmented Generation)",
        "S3",
        "OpenSearch Serverless",
        "Titan Embeddings",
        "Llama 3 Instruct",
        "IAM Roles"
      ],
      image: "https://learn.nextwork.org/projects/static/ai-rag-bedrock/architecture-complete.png",
      github: "https://github.com/nitheshbethur39/AI-Chatbot-RAG-Amazon-Bedrock",
      demo: "#",
      date: "Feb 2025",
      status: "Completed",
      duration: "1 week",
      teamSize: "Solo project",
      category: "cloud & data engineering",
    },
    {
      id: 'netflix-dashboard-quicksight',
      title: "Visualizing Netflix Data with Amazon QuickSight",
      description: "Built an interactive dashboard using Amazon QuickSight to analyze Netflix data stored in S3. Visualized trends in content types, genres, and release years with donut and bar charts.",
      longDescription: "This project showcases cloud-based data visualization using Amazon QuickSight. The dataset was stored in Amazon S3 and connected to QuickSight via a manifest file. The dashboard highlights key metrics such as the number of movies and TV shows by year, genre distribution, and content trends. Filters were applied for precise insights, and the final dashboard was exported as a PDF for sharing. The project involved hands-on work with AWS permissions, dataset configuration, and QuickSight's interactive charting features.",
      tech: ["Amazon QuickSight", "Amazon S3", "AWS", "Data Visualization"],
      image:"/images/netflix-dashboard.png", // Replace with S3-hosted preview if available
      github: "#",
      demo: "#",
      date: "Feb 2025",
      status: "Completed",
      duration: "1 hour",
      teamSize: "Solo project",
      category: "data visualization & analytics"
    },
    {
      id: 'kafka-stock-data-pipeline',
      title: "Kafka Stock Market Data Pipeline with AWS",
      description: "Built a real-time stock market data pipeline using Apache Kafka, AWS S3, Glue, and Athena. Simulated data was streamed via Kafka and stored in S3 for analysis using Athena.",
      longDescription: "This project demonstrates the development of a real-time stock market data pipeline using Apache Kafka and AWS services. Simulated stock data is sent via a Kafka producer hosted on an EC2 instance. A Kafka consumer fetches the data and stores it in an S3 bucket. AWS Glue is used to catalog the data, and AWS Athena enables SQL-based querying. The pipeline enables end-to-end data ingestion, storage, metadata extraction, and analysis.",
      tech: ["Python", "Apache Kafka", "AWS EC2", "AWS S3", "AWS Glue", "AWS Athena", "pandas", "kafka-python", "boto3"],
      image: "/images/kafka.png", // Replace with your actual image link if needed
      github: "https://github.com/nitheshbethur39/Kafka-Stock-Market-Data-Pipeline-Project/tree/main",
      demo: "#",
      date: "Jan 2025",
      status: "Completed",
      duration: "2 Days",
      teamSize: "Solo project",
      category: "cloud & data engineering"
    },
    {
      id: 'airbnb-cost-dashboard',
      title: "Airbnb Cost Distribution Dashboard with Tableau",
      description: "Created an interactive dashboard to visualize Airbnb pricing trends across zip codes and property sizes. Highlighted revenue patterns using KPIs and time-series analysis.",
      longDescription: "This project involves analyzing Airbnb listings to identify pricing trends based on location (zipcode) and the number of bedrooms. Built using Tableau, the dashboard includes visualizations such as average price per bedroom, price by zipcode, and revenue trends over the year. Key performance indicators were added to help track business-critical metrics. The data was cleaned and processed using SQL before visualization.",
      tech: ["Tableau", "SQL", "Data Visualization"],
      image: "/images/airbnb.png", 
      github: "https://public.tableau.com/app/profile/nithish.bm/viz/AirBnBFullProject_16640999066110/Dashboard1",
      demo: "https://public.tableau.com/app/profile/nithish.bm/viz/AirBnBFullProject_16640999066110/Dashboard1",
      date: "Feb 2025",
      status: "Completed",
      duration: "1 day",
      teamSize: "Solo project",
      category: "data visualization & analytics"
    },
    {
      id: 'data-science-job-market',
      title: "Data Science Job Market Analysis",
      description: "Analyzed data science job postings using Databricks and MongoDB to uncover key trends in skills, job summaries, and market demand. Visualized insights using Tableau dashboards.",
      longDescription: "This project provides a comprehensive analysis of the data science job market by leveraging Databricks for data processing and MongoDB for storage. Apache Spark was used to clean and transform job postings data, focusing on skill requirements, job descriptions, and trends over time. Tableau dashboards were created to highlight in-demand skills and industry demand, helping job seekers and educators better understand the current hiring landscape.",
      tech: ["Databricks", "Apache Spark", "MongoDB", "Tableau"],
      image: "/images/job-dashboard.png", 
      github: "https://public.tableau.com/app/profile/nithish.bm/viz/AirBnBFullProject_16640999066110/Dashboard1",
      demo: "https://public.tableau.com/app/profile/nithish.bm/viz/AirBnBFullProject_16640999066110/Dashboard1",
      date: "Apr 2024",
      status: "Completed",
      duration: "3 days",
      teamSize: "Solo project",
      category: "data visualization & analytics",
    }
  ];

  const filterProjects = (category: string) => {
    if (category === 'all') return projects;
    return projects.filter(project => project.category === category);
  };

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <div key={index} className="project-card group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-teal-400/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-400/10 flex flex-col">
      
      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className={`text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm ${
          project.status === 'Completed' 
            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
            : project.status === 'Coming Soon'
            ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
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
          className="w-full h-full object-cover group-hover:scale-110 brightness-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/30 to-transparent z-0 pointer-events-none"></div>
        
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
          {project.tech.map((tech: string, techIndex: number) => (
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
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>
    </div>
  );

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

        {/* Tabs Interface */}
        <Tabs defaultValue='all' value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-1 sm:grid-cols-3 w-full max-w-2xl mx-auto mb-12 bg-slate-800/50 border border-slate-700/50 gap-1">
            <TabsTrigger value="all" className="text-xs sm:text-sm">
              All Projects
            </TabsTrigger>
            <TabsTrigger value="cloud & data engineering" className="text-xs sm:text-sm">
              Cloud & Engineering
            </TabsTrigger>
            <TabsTrigger value="data visualization & analytics" className="text-xs sm:text-sm">
              Data Viz & Analytics
            </TabsTrigger>
          </TabsList>


          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {filterProjects('all').map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cloud & data engineering" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {filterProjects('cloud & data engineering').map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="data visualization & analytics" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {filterProjects('data visualization & analytics').map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
