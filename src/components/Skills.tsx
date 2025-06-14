
import { Code, Database, BarChart3, Brain, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Python", level: 95 },
        { name: "R", level: 88 },
        { name: "SQL", level: 92 },
        { name: "JavaScript", level: 75 },
        { name: "Java", level: 70 }
      ]
    },
    {
      icon: Brain,
      title: "Machine Learning",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Scikit-learn", level: 95 },
        { name: "TensorFlow", level: 88 },
        { name: "PyTorch", level: 85 },
        { name: "XGBoost", level: 90 },
        { name: "MLflow", level: 80 }
      ]
    },
    {
      icon: Database,
      title: "Data Engineering",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Apache Spark", level: 85 },
        { name: "Airflow", level: 82 },
        { name: "Kafka", level: 75 },
        { name: "ETL Pipelines", level: 90 },
        { name: "Data Warehousing", level: 88 }
      ]
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Tableau", level: 92 },
        { name: "Power BI", level: 85 },
        { name: "Plotly", level: 90 },
        { name: "D3.js", level: 75 },
        { name: "Matplotlib", level: 95 }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      color: "from-sky-500 to-blue-500",
      skills: [
        { name: "AWS", level: 90 },
        { name: "Google Cloud", level: 85 },
        { name: "Azure", level: 78 },
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 75 }
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Frameworks",
      color: "from-violet-500 to-purple-500",
      skills: [
        { name: "Git", level: 95 },
        { name: "Jupyter", level: 98 },
        { name: "Streamlit", level: 88 },
        { name: "FastAPI", level: 85 },
        { name: "Postman", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A comprehensive toolkit spanning the entire data science pipeline, from data collection 
            to model deployment and business intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2">
                      <div 
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Additional Competencies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Statistical Analysis</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>Hypothesis Testing</li>
                  <li>Regression Analysis</li>
                  <li>Time Series Analysis</li>
                  <li>Bayesian Statistics</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-purple-400 mb-3">Domain Knowledge</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>Financial Analytics</li>
                  <li>Marketing Analytics</li>
                  <li>Supply Chain</li>
                  <li>Healthcare Data</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-green-400 mb-3">Soft Skills</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>Project Management</li>
                  <li>Team Leadership</li>
                  <li>Client Communication</li>
                  <li>Problem Solving</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-orange-400 mb-3">Methodologies</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>Agile/Scrum</li>
                  <li>CI/CD</li>
                  <li>A/B Testing</li>
                  <li>MLOps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
