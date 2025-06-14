
import { Code, Database, BarChart3, Brain, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: "Expert" },
        { name: "R", level: "Advanced" },
        { name: "SQL", level: "Expert" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "Java", level: "Intermediate" }
      ]
    },
    {
      icon: Brain,
      title: "Machine Learning & AI",
      skills: [
        { name: "Scikit-learn", level: "Expert" },
        { name: "TensorFlow", level: "Advanced" },
        { name: "PyTorch", level: "Advanced" },
        { name: "XGBoost", level: "Expert" },
        { name: "Deep Learning", level: "Advanced" }
      ]
    },
    {
      icon: Database,
      title: "Data Engineering",
      skills: [
        { name: "Apache Spark", level: "Advanced" },
        { name: "Apache Airflow", level: "Advanced" },
        { name: "Apache Kafka", level: "Intermediate" },
        { name: "ETL Pipelines", level: "Expert" },
        { name: "Data Warehousing", level: "Advanced" }
      ]
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      skills: [
        { name: "Tableau", level: "Expert" },
        { name: "Power BI", level: "Advanced" },
        { name: "Plotly", level: "Expert" },
        { name: "D3.js", level: "Intermediate" },
        { name: "Matplotlib/Seaborn", level: "Expert" }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: "Expert" },
        { name: "Google Cloud Platform", level: "Advanced" },
        { name: "Microsoft Azure", level: "Intermediate" },
        { name: "Docker", level: "Advanced" },
        { name: "Kubernetes", level: "Intermediate" }
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Frameworks",
      skills: [
        { name: "Git/GitHub", level: "Expert" },
        { name: "Jupyter Notebooks", level: "Expert" },
        { name: "Streamlit", level: "Advanced" },
        { name: "FastAPI", level: "Advanced" },
        { name: "MLflow", level: "Advanced" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300";
      case "Advanced":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "Intermediate":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <section id="skills" className="py-20 px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-chivo">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gray-300 dark:bg-gray-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-chivo">
            Comprehensive expertise across the data science and analytics ecosystem, 
            from data collection and processing to advanced machine learning and deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-900 dark:bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                  <category.icon size={24} className="text-white dark:text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-chivo">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300 font-medium font-chivo">
                      {skill.name}
                    </span>
                    <span 
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 font-chivo">
            Core Competencies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 font-chivo">
                Statistical Analysis
              </h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm font-chivo">
                <li>Hypothesis Testing</li>
                <li>Regression Analysis</li>
                <li>Time Series Forecasting</li>
                <li>Bayesian Statistics</li>
                <li>A/B Testing</li>
              </ul>
            </div>
            
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 font-chivo">
                Domain Expertise
              </h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm font-chivo">
                <li>Financial Analytics</li>
                <li>Marketing Analytics</li>
                <li>Supply Chain Optimization</li>
                <li>Healthcare Data Analysis</li>
                <li>Risk Assessment</li>
              </ul>
            </div>
            
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 font-chivo">
                Leadership & Communication
              </h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm font-chivo">
                <li>Project Management</li>
                <li>Team Leadership</li>
                <li>Stakeholder Communication</li>
                <li>Technical Documentation</li>
                <li>Cross-functional Collaboration</li>
              </ul>
            </div>
            
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 font-chivo">
                Methodologies
              </h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm font-chivo">
                <li>Agile/Scrum</li>
                <li>CI/CD Pipelines</li>
                <li>MLOps Best Practices</li>
                <li>Data Governance</li>
                <li>Model Validation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
