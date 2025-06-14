
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Data Science",
      school: "University of California, Berkeley",
      period: "2018 - 2020",
      gpa: "3.9/4.0",
      emoji: "🎓",
      description: "Specialized in machine learning, statistical modeling, and big data analytics",
      coursework: ["Machine Learning", "Statistical Computing", "Data Mining", "Deep Learning", "Bayesian Statistics"]
    },
    {
      degree: "Bachelor of Science in Computer Science", 
      school: "Stanford University",
      period: "2014 - 2018",
      gpa: "3.8/4.0",
      emoji: "💻",
      description: "Focus on algorithms, data structures, and software engineering principles",
      coursework: ["Algorithms", "Database Systems", "Software Engineering", "Linear Algebra", "Probability Theory"]
    }
  ];

  const certification = {
    title: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    year: "2023",
    emoji: "☁️"
  };

  return (
    <section id="education" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-3xl animate-float">🎓</span>
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-light-teal to-blue-gray bg-clip-text text-transparent">
              Education & Certification
            </h2>
            <span className="text-3xl animate-float delay-150">📜</span>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-light-teal to-blue-gray mx-auto mb-8 rounded-full"></div>
          <p className="text-base text-blue-gray max-w-4xl mx-auto">
            Academic foundation and professional certification that fuel my passion for data science excellence ✨
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Education */}
          <div className="lg:col-span-2 animate-slide-in-left">
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-12 h-12 bg-gradient-to-r from-light-teal to-blue-gray rounded-2xl flex items-center justify-center">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-light-gray">Education 📚</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="group relative animate-stagger-1">
                  <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-custom-medium/50 hover:border-light-teal/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-light-teal/10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{edu.emoji}</span>
                        <div>
                          <h4 className="text-lg font-bold text-light-gray mb-1 group-hover:text-light-teal transition-colors duration-300">{edu.degree}</h4>
                          <p className="text-light-teal font-semibold">{edu.school}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-blue-gray text-xs">{edu.period}</p>
                        <p className="text-light-gray text-xs font-bold">GPA: {edu.gpa}</p>
                      </div>
                    </div>
                    
                    <p className="text-blue-gray mb-4 leading-relaxed text-sm">{edu.description}</p>
                    
                    <div>
                      <p className="text-xs font-semibold text-light-teal mb-3">🔑 Key Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <span key={courseIndex} className="text-xs font-medium text-light-gray bg-custom-dark/50 px-2 py-1 rounded-lg border border-custom-medium/50">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Certification */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-gray to-light-teal rounded-2xl flex items-center justify-center">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-light-gray">Certification 🏆</h3>
            </div>

            <div className="relative">
              <div className="animate-stagger-1">
                <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-custom-medium/50 hover:border-light-teal/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-light-teal/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-light-teal to-blue-gray rounded-2xl flex items-center justify-center">
                      <span className="text-lg">{certification.emoji}</span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-light-gray mb-1 hover:text-light-teal transition-colors duration-300">{certification.title}</h4>
                      <p className="text-light-teal font-medium text-sm">{certification.issuer}</p>
                      <span className="text-light-teal font-bold text-xs">{certification.year}</span>
                    </div>
                  </div>
                  
                  <p className="text-blue-gray leading-relaxed text-sm">
                    Professional certification demonstrating expertise in machine learning engineering, 
                    model deployment, and AWS cloud services for data science applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
