
import { Calendar, MapPin, Building } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Experience = () => {
  const { theme } = useTheme();
  
  const experiences = [
    {
      title: "Data Engineer - Center for Air Transportation Systems Research",
      company: "George Mason University",
      logo: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=100&h=100&fit=crop&crop=center",
      location: "Fairfax, Virginia",
      period: "January 2025 - May 2025",
      description: [
        "Cleaned, filtered, and transformed 500,000+ rows of historical flight data using Python (pandas), improving data quality by 35%",
        "Automated real-time stock data ingestion using AWS Lambda and EventBridge, reducing manual efforts by 90%",
        "Engineered unified airline performance and financial datasets with daily S3 updates for centralized access",
        "Applied Random Forest models achieving 87% accuracy in airline performance predictions using multiple ML algorithms"
      ],
      skills: ["Python", "AWS Lambda", "S3", "EventBridge", "Random Forest", "LSTM", "React"]
    },
    {
      title: "Data Engineer",
      company: "Manuh Solutions",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop&crop=center",
      location: "Bengaluru, Karnataka, India",
      period: "November 2020 - June 2023",
      description: [
        "Delivered scalable ETL pipelines for U.S. healthcare provider achieving 99.9% data accuracy",
        "Migrated large-scale legacy healthcare data ensuring compliance with governance standards",
        "Optimized SQL queries with advanced indexing, improving execution speed by 30%",
        "Reduced pre-deployment data issues by 20% through comprehensive SQL code reviews"
      ],
      skills: ["Python", "PostgreSQL", "ETL", "Data Warehousing", "Healthcare Data", "SQL"]
    },
    {
      title: "Data Analyst",
      company: "Bharat Electronics Limited",
      logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop&crop=center",
      location: "Bengaluru, Karnataka, India",
      period: "December 2019 - September 2020",
      description: [
        "Engineered real-time ETL pipeline for thermal monitoring on Indian Navy vessels",
        "Reduced overheating incidents by 30% and energy consumption by 20% through predictive analytics",
        "Designed Tableau dashboards cutting manual diagnostics time by 40% for engineering teams",
        "Applied statistical models for thermal forecasting improving operational safety"
      ],
      skills: ["Python", "MySQL", "Tableau", "Statistical Models", "Real-time ETL", "IoT"]
    },
    {
      title: "Student Internship",
      company: "Bosch Engineering and Business Solutions",
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop&crop=center",
      location: "Bengaluru Area, India",
      period: "June 2019 - August 2019",
      description: [
        "Developed real-time data integration and predictive maintenance system for manufacturing plant",
        "Connected SCADA systems to central data server enabling seamless data flow",
        "Built ETL pipeline using Python and SQL for machine health data processing",
        "Reduced machine breakdowns by 25% and maintenance costs by 15% through time-series analysis"
      ],
      skills: ["Python", "SQL", "Tableau", "SCADA", "Time-series Analysis", "Manufacturing"]
    }
  ];

  console.log('Experience component theme:', theme);
  console.log('Experience component experiences:', experiences);

  return (
    <section id="experience" className={`py-20 px-6 lg:px-8 transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-slate-950 to-slate-900' 
        : 'bg-gradient-to-b from-slate-100 to-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 section-header">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="text-3xl">💼</span>
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-light-teal to-blue-gray bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <span className="text-3xl">🚀</span>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-light-teal to-blue-gray mx-auto mb-8 rounded-full"></div>
          <p className={`text-base max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-light-gray' : 'text-slate-700'
          }`}>
            My journey in data engineering and analytics, delivering measurable business impact 
            across healthcare, aerospace, manufacturing, and defense sectors.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-light-teal to-blue-gray"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center timeline-item ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-2 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-light-teal to-blue-gray rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content */}
                <div className={`ml-12 lg:ml-0 lg:w-1/2 ${
                  index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                }`}>
                  <div className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 transform will-change-transform ${
                    theme === 'dark' 
                      ? 'bg-slate-800/90 border-slate-700 hover:border-light-teal hover:shadow-xl hover:shadow-light-teal/20 hover:bg-slate-700/90' 
                      : 'bg-white/90 border-slate-300 hover:border-light-teal hover:shadow-xl hover:shadow-light-teal/20 hover:bg-slate-50/90'
                  }`}>
                    {/* Company with Logo */}
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="flex-shrink-0">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          className="w-8 h-8 rounded-lg object-cover border border-light-teal/20"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.nextElementSibling as HTMLDivElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div className="w-8 h-8 bg-gradient-to-br from-light-teal to-blue-gray rounded-lg hidden items-center justify-center">
                          <Building size={16} className="text-white" />
                        </div>
                      </div>
                      <span className={`font-medium text-sm ${
                        theme === 'dark' ? 'text-light-teal' : 'text-blue-gray'
                      }`}>{exp.company}</span>
                    </div>
                    
                    <h3 className={`text-lg font-bold mb-2 ${
                      theme === 'dark' ? 'text-light-gray' : 'text-slate-800'
                    }`}>{exp.title}</h3>
                    
                    <div className={`flex items-center space-x-4 mb-3 text-sm ${
                      theme === 'dark' ? 'text-blue-gray' : 'text-slate-600'
                    }`}>
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={12} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className={`flex items-start space-x-2 text-sm leading-relaxed ${
                          theme === 'dark' ? 'text-blue-gray' : 'text-slate-600'
                        }`}>
                          <span className="text-light-teal mt-1 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className={`text-xs font-medium px-2 py-1 rounded-full transition-colors duration-300 ${
                          theme === 'dark' 
                            ? 'text-light-gray bg-slate-700/50 hover:bg-slate-600/50' 
                            : 'text-slate-700 bg-slate-200/50 hover:bg-slate-300/50'
                        }`}>
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
