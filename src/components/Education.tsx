
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Data Science",
      school: "University of California, Berkeley",
      period: "2018 - 2020",
      gpa: "3.9/4.0",
      description: "Specialized in machine learning, statistical modeling, and big data analytics",
      coursework: ["Machine Learning", "Statistical Computing", "Data Mining", "Deep Learning", "Bayesian Statistics"]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Stanford University",
      period: "2014 - 2018",
      gpa: "3.8/4.0",
      description: "Focus on algorithms, data structures, and software engineering principles",
      coursework: ["Algorithms", "Database Systems", "Software Engineering", "Linear Algebra", "Probability Theory"]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Machine Learning - Specialty",
      issuer: "Amazon Web Services",
      year: "2023"
    },
    {
      name: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      year: "2022"
    },
    {
      name: "Certified Analytics Professional (CAP)",
      issuer: "INFORMS",
      year: "2021"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Academic foundation and professional certifications that underpin my expertise in data science and analytics.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-1">{edu.degree}</h4>
                      <p className="text-blue-400 font-medium">{edu.school}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-400 text-sm">{edu.period}</p>
                      <p className="text-slate-300 text-sm font-medium">GPA: {edu.gpa}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mb-4">{edu.description}</p>
                  
                  <div>
                    <p className="text-sm font-medium text-slate-400 mb-2">Key Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <span key={courseIndex} className="text-xs font-medium text-slate-300 bg-slate-700/50 px-2 py-1 rounded">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">{cert.name}</h4>
                      <p className="text-purple-400 font-medium text-sm">{cert.issuer}</p>
                    </div>
                    <span className="text-slate-400 text-sm font-medium">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Learning */}
            <div className="mt-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <BookOpen size={20} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-white">Continuous Learning</h4>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
                <p className="text-slate-300 mb-4">
                  I believe in continuous learning and staying current with the latest developments in data science:
                </p>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Regular participation in Kaggle competitions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Active member of local data science meetups</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Contributing to open-source ML libraries</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Publishing research papers and technical blog posts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
