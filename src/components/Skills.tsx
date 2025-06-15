
import { Code, Database, BarChart3, Brain, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: "Expert" },
        { name: "SQL", level: "Expert" },
        { name: "R", level: "Advanced" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "Java", level: "Intermediate" }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & Data Platforms",
      skills: [
        { name: "AWS", level: "Expert" },
        { name: "Apache Spark", level: "Advanced" },
        { name: "Databricks", level: "Advanced" },
        { name: "Apache Kafka", level: "Advanced" },
        { name: "Informatica", level: "Advanced" }
      ]
    },
    {
      icon: Database,
      title: "Data Engineering",
      skills: [
        { name: "ETL Pipelines", level: "Expert" },
        { name: "Data Warehousing", level: "Expert" },
        { name: "PostgreSQL", level: "Expert" },
        { name: "MySQL", level: "Advanced" },
        { name: "Apache Airflow", level: "Advanced" }
      ]
    },
    {
      icon: BarChart3,
      title: "Analytics & Visualization",
      skills: [
        { name: "Tableau", level: "Expert" },
        { name: "AWS QuickSight", level: "Advanced" },
        { name: "Statistical Models", level: "Advanced" },
        { name: "Power BI", level: "Intermediate" },
        { name: "D3.js", level: "Intermediate" }
      ]
    },
    {
      icon: Brain,
      title: "Machine Learning",
      skills: [
        { name: "Random Forest", level: "Expert" },
        { name: "XGBoost", level: "Advanced" },
        { name: "LSTM", level: "Advanced" },
        { name: "Scikit-learn", level: "Advanced" },
        { name: "TensorFlow", level: "Intermediate" }
      ]
    },
    {
      icon: Wrench,
      title: "Development & Tools",
      skills: [
        { name: "Git/GitHub", level: "Expert" },
        { name: "pytest", level: "Advanced" },
        { name: "Docker", level: "Advanced" },
        { name: "React", level: "Advanced" },
        { name: "Vercel", level: "Advanced" }
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
    <section id="skills" className="py-16 px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 section-header">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="text-3xl">⚡</span>
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-light-teal to-blue-gray bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <span className="text-3xl">🛠️</span>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-light-teal to-blue-gray mx-auto mb-8 rounded-full"></div>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-chivo">
            Comprehensive expertise across cloud architecture, data engineering, and analytics — 
            from AWS infrastructure to machine learning model deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 skill-category">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-900 dark:bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                  <category.icon size={20} className="text-white dark:text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-chivo">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300 font-medium font-chivo text-sm">
                      {skill.name}
                    </span>
                    <span 
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
