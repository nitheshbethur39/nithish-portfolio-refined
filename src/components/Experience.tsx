
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Data Scientist",
      company: "TechCorp Analytics",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: [
        "Led development of machine learning models that improved customer retention by 25%",
        "Built automated data pipelines processing 50M+ records daily",
        "Mentored junior data scientists and established ML best practices",
        "Collaborated with cross-functional teams to deliver data-driven solutions"
      ],
      skills: ["Python", "TensorFlow", "AWS", "SQL", "Docker"]
    },
    {
      title: "Data Scientist",
      company: "DataVision Inc.",
      location: "New York, NY",
      period: "2021 - 2022",
      description: [
        "Developed predictive models for demand forecasting with 90% accuracy",
        "Created interactive dashboards for executive decision-making",
        "Implemented A/B testing frameworks for product optimization",
        "Reduced data processing time by 40% through optimization techniques"
      ],
      skills: ["R", "Tableau", "PostgreSQL", "Scikit-learn", "Git"]
    },
    {
      title: "Junior Data Analyst",
      company: "Analytics Solutions",
      location: "Boston, MA",
      period: "2020 - 2021",
      description: [
        "Performed statistical analysis on customer behavior data",
        "Automated reporting processes saving 20 hours per week",
        "Contributed to data quality initiatives and documentation",
        "Supported senior analysts in machine learning projects"
      ],
      skills: ["Excel", "SQL", "Python", "Power BI", "Statistics"]
    }
  ];

  return (
    <section id="experience" className="py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-light-teal to-blue-gray bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-light-teal to-blue-gray mx-auto mb-6 rounded-full"></div>
          <p className="text-base text-blue-gray max-w-3xl mx-auto">
            My journey in data science, from junior analyst to senior leadership roles, 
            driving data-driven decision making across organizations.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-light-teal to-blue-gray"></div>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-2 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-light-teal to-blue-gray rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content */}
                <div className={`ml-12 lg:ml-0 lg:w-1/2 ${
                  index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                }`}>
                  <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-custom-medium/50 hover:border-light-teal/50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center space-x-2 mb-2">
                      <Building size={14} className="text-light-teal" />
                      <span className="text-light-teal font-medium text-sm">{exp.company}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-light-gray mb-2">{exp.title}</h3>
                    
                    <div className="flex items-center space-x-4 text-blue-gray mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span className="text-xs">{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={12} />
                        <span className="text-xs">{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-blue-gray flex items-start space-x-2 text-sm">
                          <span className="text-light-teal mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-xs font-medium text-light-gray bg-custom-dark/50 px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
