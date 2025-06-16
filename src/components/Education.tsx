import { link } from 'fs';
import { GraduationCap, Award } from 'lucide-react';
const Education = () => {
  const education = [{
    degree: "Master of Science in Data Analytics Engineering",
    school: "George Mason University",
    period: "August 2023 - May 2025",
    emoji: "🎓",
    description: "Specialized in cloud-based data solutions, machine learning, and advanced analytics",
    coursework: ["Data Engineering", "Cloud Computing", "Machine Learning", "Statistical Analysis", "Big Data Analytics"]
  }, {
    degree: "Bachelor of Engineering in Electronics & Communications",
    school: "Bangalore Institute of Technology",
    period: "August 2016 - October 2020",
    emoji: "⚡",
    description: "Focus on embedded systems, signal processing, and IoT technologies",
    coursework: ["Digital Signal Processing", "Embedded Systems", "IoT", "Data Structures", "Network Protocols"]
  }];
  const certifications = [{
    title: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    year: "2025",
    emoji: "☁️",
    badge: "/lovable-uploads/aws.png",
    link: "https://www.credly.com/badges/d50342c8-f2af-4d96-8e7e-05db74ca838f"
  }];
  return <section id="education" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-3xl animate-float">🎓</span>
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-light-teal to-blue-gray bg-clip-text text-transparent">
              Education & Certifications
            </h2>
            <span className="text-3xl animate-float delay-150">📜</span>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-light-teal to-blue-gray mx-auto mb-8 rounded-full"></div>
          <p className="text-base text-blue-gray max-w-4xl mx-auto">
            Academic foundation and professional certifications that fuel my expertise in data engineering and cloud architecture ✨
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="animate-slide-in-left">
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-12 h-12 bg-gradient-to-r from-light-teal to-blue-gray rounded-2xl flex items-center justify-center">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-light-gray">Education 📚</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => <div key={index} className="group relative animate-stagger-1">
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
                      </div>
                    </div>
                    
                    <p className="text-blue-gray mb-4 leading-relaxed text-sm">{edu.description}</p>
                    
                    <div>
                      <p className="text-xs font-semibold text-light-teal mb-3">🔑 Key Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => <span key={courseIndex} className="text-xs font-medium text-light-gray bg-custom-dark/50 px-2 py-1 rounded-lg border border-custom-medium/50">
                            {course}
                          </span>)}
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Professional Certifications */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-gray to-light-teal rounded-2xl flex items-center justify-center">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-light-gray">Certifications 🏆</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => <div key={index} className="animate-stagger-1">
                  <div className="bg-slate-800/30 backdrop-blur-sm p-4 rounded-2xl border border-custom-medium/50 hover:border-light-teal/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-light-teal/10 px-[17px] mx-[49px] my-[64px] py-[61px]">
                    <div className="flex items-center space-x-3">
                      {cert.badge ? <div className="w-12 h-12 flex items-center justify-center">
                          <img src={cert.badge} alt={`${cert.title} Badge`} className="w-10 h-10 object-contain" />
                        </div> : <div className="w-12 h-12 bg-gradient-to-r from-light-teal to-blue-gray rounded-xl flex items-center justify-center">
                          <span className="text-lg">{cert.emoji}</span>
                        </div>}
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-light-gray mb-1 hover:text-light-teal transition-colors duration-300">{cert.title}</h4>
                        <p className="text-light-teal font-medium text-xs">{cert.issuer}</p>
                        <span className="text-light-teal font-bold text-xs">{cert.year}</span>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Education;