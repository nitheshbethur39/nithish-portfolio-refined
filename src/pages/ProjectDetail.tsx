
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, Code, Users, Target, CheckCircle, Clock } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();

  const projects = [
    {
      id: 'smartvault-backup-automation',
      title: "SmartVault – Automated EC2 Backup & Compliance System",
      description: "Developed a policy-driven Lambda orchestration system to automate EC2 EBS snapshots, incorporating retention logic to delete expired snapshots and reduce storage costs. Built a compliance engine to identify and report non-compliant EC2 instances based on defined backup policies. Integrated CloudWatch dashboards, custom metrics, and SNS notifications for real-time monitoring and alerting. Implemented a CI/CD pipeline using CodePipeline and S3 artifacts to automate Lambda function deployments.",
      longDescription: "Created a policy-driven Lambda orchestration system to automate EC2 EBS snapshots. Implemented retention logic to delete expired snapshots and reduce storage cost, Built a compliance engine to report non-compliant EC2 instances based on backup policies.Integrated CloudWatch dashboards, metrics, and SNS notifications for real-time monitoring and alerting.Developed a CI/CD pipeline using CodePipeline and S3 artifacts for Lambda function deployment.",
      tech: ["AWS Lambda", "EC2", "S3", "EventBridge","SNS","CodePipeline","CloudWatch", "Python"],
      image: "https://images.unsplash.com/photo-1649734926695-1b1664e98842?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/nitheshbethur39/smartvault-backup-system",
      demo: "#",
      date: "May 2025",
      teamSize: "Solo Project",
      category: "cloud & data engineering",
      challenges: [
        "Not all EC2 instances were properly tagged, so it was hard to know which ones needed backups automatically.",
        "Deleting old snapshots without mistakes was risky, since wrong logic could accidentally remove important backups.",
        "Keeping track of backup compliance in real time was tough, especially as the number of instances kept changing."
      ],
      solutions: [
        "Built a Lambda function that looks for tagged EC2 instances and takes automatic backups based on those tags.",
        "Created a cleanup function that safely deletes old snapshots by checking their age and making sure they're no longer needed.",
        "Set up a reporting system that checks which instances are missing backups and sends alerts using email and dashboards."
      ],
      results: [
        "Saved around 60% on storage costs by cleaning up old, unused snapshots.",
        "Made backups fully automatic, removing the need for manual work.",
        "Helped teams stay compliant, with clear alerts and reports for any missing backups."
      ],
      keyFeatures: [
        "Automatic backups based on simple tags added to EC2 instances.",
        "Safe cleanup of old snapshots to reduce unnecessary costs.",
        "Compliance reports and alerts sent through email and dashboards.",
        "CI/CD setup to easily deploy and update all functions without manual steps."
      ]
    },
    {
      id: 'wildrydes-serverless-app',
      title: "WildRydes: End-to-End Serverless Ride-Sharing App",
      description: "Built a fully serverless Uber-like app using AWS services with Cognito authentication, API Gateway, Lambda, and DynamoDB. Integrated frontend on Amplify with CI/CD from GitHub.",
      longDescription: "WildRydes is a hands-on project that demonstrates how to build a ride-sharing application using a completely serverless architecture on AWS. It features user sign-up and login with Cognito, RESTful APIs with API Gateway and Lambda functions, and a DynamoDB backend to track ride data. The frontend is a static website hosted on Amplify with continuous deployment from GitHub.",
      tech: [
        "AWS Amplify",
        "Amazon Cognito",
        "API Gateway",
        "AWS Lambda",
        "Node.js",
        "DynamoDB",
        "IAM"
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      github: "#",
      demo: "#",
      date: "June 2025",
      status: "Completed",
      duration: "2 weeks",
      teamSize: "Solo project",
      category: "cloud & data engineering",
      challenges: [
        "Configuring Cognito User Pools and handling JWT authentication",
        "Setting up CORS policies in API Gateway to support frontend requests",
        "Managing IAM roles with least privilege for Lambda and DynamoDB access"
      ],
      solutions: [
        "Used Amazon Cognito for secure, verified user sign-up and login flows",
        "Enabled and tested CORS on both OPTIONS and POST methods in API Gateway",
        "Created and attached fine-grained IAM policies to Lambda functions"
      ],
      results: [
        "Fully functional ride-sharing app using only serverless components",
        "Frontend hosted with Amplify and auto-deployed via GitHub CI/CD",
        "Successful ride requests saved in DynamoDB with user tracking"
      ],
      keyFeatures: [
        "User authentication with email verification",
        "Unicorn assignment and ride request handling via Lambda",
        "RESTful API with Cognito authorization",
        "No server management – 100% serverless architecture"
      ]
    },
    {
      id: 'rag-chatbot-bedrock',
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
      duration: "1 Week",
      teamSize: "Solo project",
      category: "cloud & data engineering",
      challenges: [
        "Understanding how to connect S3 with Bedrock’s Knowledge Base",
        "Managing permissions and IAM roles for Bedrock access",
        "Handling vector search accuracy and syncing issues with embeddings"
      ],
      solutions: [
        "Created a Bedrock Knowledge Base linked to S3 and OpenSearch Serverless",
        "Configured service roles for Bedrock to access and process personal data",
        "Used Titan Embeddings and Llama models to improve chatbot accuracy"
      ],
      results: [
        "Successfully built an AI chatbot trained on my personal data",
        "Enabled context-aware and accurate answers through RAG architecture",
        "Gained hands-on experience with Bedrock’s end-to-end AI pipeline"
      ],
      keyFeatures: [
        "RAG-powered question answering from personal documents",
        "Amazon Bedrock Knowledge Base + vector search setup",
        "Document storage and management using Amazon S3",
        "AI model testing and switching using Llama 3 and Titan"
      ]
    },
    {
      id: 'netflix-dashboard-quicksight',
      title: "Visualizing Netflix Data with Amazon QuickSight",
      description: "Built an interactive dashboard using Amazon QuickSight to analyze Netflix data stored in S3. Visualized trends in content types, genres, and release years with donut and bar charts.",
      longDescription: "This project showcases cloud-based data visualization using Amazon QuickSight. The dataset was stored in Amazon S3 and connected to QuickSight via a manifest file. The dashboard highlights key metrics such as the number of movies and TV shows by year, genre distribution, and content trends. Filters were applied for precise insights, and the final dashboard was exported as a PDF for sharing. The project involved hands-on work with AWS permissions, dataset configuration, and QuickSight's interactive charting features.",
      tech: ["Amazon QuickSight", "Amazon S3", "AWS", "Data Visualization"],
      image:"/images/netflix-dashboard.png",
      github: "/images/netflix-dashboard.png",
      demo: "/images/netflix-dashboard.png",
      date: "Feb 2025",
      status: "Completed",
      duration: "1 hour",
      teamSize: "Solo project",
      category: "data visualization & analytics",
      challenges: [
        "Configuring S3 permissions correctly for QuickSight access",
        "Editing the manifest.json file to accurately point to the dataset",
        "Designing a clean, interactive dashboard layout for end users"
      ],
      solutions: [
        "Granted S3 access to QuickSight via Security & Permissions setup",
        "Edited the manifest file to ensure correct dataset structure and location",
        "Used filters, labels, and formatting to make the dashboard insightful and easy to use"
      ],
      results: [
        "Created a fully interactive and shareable Netflix data dashboard",
        "Highlighted key trends in content type, genre, and year using visual charts",
        "Demonstrated real-time data exploration skills using Amazon QuickSight"
      ],
      keyFeatures: [
        "Donut chart of release year distribution",
        "Bar charts for content types and popular genres",
        "Filters for refining by genre, country, and year",
        "PDF export for sharing dashboard insights"
      ]
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
      category: "cloud & data engineering",
      challenges: [
        "Setting up Kafka and Zookeeper on AWS EC2",
        "Managing real-time data ingestion without overloading Kafka",
        "Ensuring permissions and access between EC2, S3, Glue, and Athena"
      ],
      solutions: [
        "Installed and configured Kafka cluster manually on EC2 with secure SSH setup",
        "Created a producer-consumer pipeline using kafka-python and boto3",
        "Used AWS Glue crawlers to catalog S3 data and queried it using Athena"
      ],
      results: [
        "Successfully streamed and stored real-time stock data into S3",
        "Built a fully working serverless querying pipeline with Glue and Athena",
        "Demonstrated a scalable architecture for real-time financial data processing"
      ],
      keyFeatures: [
        "Real-time stock data streaming using Apache Kafka",
        "Data storage and crawling in AWS S3 + Glue",
        "SQL querying over streamed data via AWS Athena",
        "Notebooks for simulation and end-to-end pipeline execution"]
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
      category: "data visualization & analytics",
      challenges: [
        "Analyzing price variance across diverse zip codes and bedroom counts",
        "Building KPIs for revenue over time using calendar data",
        "Designing a clean dashboard layout that highlights insights clearly"
      ],
      solutions: [
        "Used SQL to clean and preprocess the Airbnb dataset",
        "Developed visual KPIs for price trends and bedroom listings",
        "Built a Tableau dashboard showing price by zipcode, revenue trends, and average price per bedroom"
      ],
      results: [
        "Created a fully interactive Tableau dashboard showcasing Airbnb pricing insights",
        "Enabled better understanding of high-revenue zip codes and seasonal trends",
        "Improved visualization and comparison of listing costs by size and location"
      ],
      keyFeatures: [
        "Bar charts for average price per bedroom",
        "Zipcode-level price comparisons",
        "Time-series graph showing revenue progression",
        "Summary table showing bedroom distribution"
      ]
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
      challenges: [
        "Extracting and cleaning unstructured job posting data from MongoDB",
        "Parsing and analyzing large text fields using Apache Spark",
        "Designing dashboards that clearly show skill trends and job demand"
      ],
      solutions: [
        "Used Databricks and Spark for large-scale data cleaning and processing",
        "Extracted top skills and job requirements from job summaries",
        "Built Tableau dashboards to visualize trends across industries and regions"
      ],
      results: [
        "Identified top in-demand data science skills by frequency and relevance",
        "Generated clear visuals of job trends to guide learners and professionals",
        "Showcased the application of Spark with NoSQL for real-world analytics"
      ],
      keyFeatures: [
        "Skill frequency analysis across job postings",
        "Job title and industry distribution breakdown",
        "Interactive Tableau dashboard for visual exploration",
        "Scalable processing pipeline using Spark on Databricks"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Left: Challenges & Solutions */}
            <div className="flex-1 flex flex-col gap-8">
              <div className="flex-1 min-h-[320px] bg-slate-800/40 backdrop-blur-sm rounded-xl border border-custom-medium/30 p-6">
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
              </div>  
              <div className="flex-1 min-h-[320px] bg-slate-800/40 backdrop-blur-sm rounded-xl border border-custom-medium/30 p-6">
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
            </div>

            {/* Right: Results & Features */}
            <div className="flex flex-col gap-8">
              <div className="flex-1 min-h-[320px] bg-slate-800/40 backdrop-blur-sm rounded-xl border border-custom-medium/30 p-6">
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
              </div>  
              <div className="flex-1 min-h-[320px] bg-slate-800/40 backdrop-blur-sm rounded-xl border border-custom-medium/30 p-6">
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
          </div>
    
          {/* Action Buttons */}
          <div className="mt-12 flex items-center justify-center space-x-4">
            <a href={project.github} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-700 to-slate-600 text-light-gray font-chivo font-medium px-6 py-3 rounded-lg hover:from-slate-600 hover:to-slate-500 transition-all duration-300 hover:scale-105">
              <Github size={18} />
              <span>View Code</span>
            </a>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
