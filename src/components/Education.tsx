
import { GraduationCap, Award, BookOpen, Trophy, Star } from 'lucide-react';

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

  const achievements = [
    {
      title: "AWS Certified Machine Learning - Specialty",
      issuer: "Amazon Web Services",
      year: "2023",
      emoji: "☁️",
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      year: "2022", 
      emoji: "🔍",
      color: "from-blue-500 to-green-500"
    },
    {
      title: "Certified Analytics Professional (CAP)",
      issuer: "INFORMS",
      year: "2021",
      emoji: "📊",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Top 5% Kaggle Competition Performer",
      issuer: "Kaggle",
      year: "2023",
      emoji: "🏆",
      color: "from-coral-500 to-warm-500"
    }
  ];

  return (
    <section id="education" className="py-24 px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-4xl animate-float">🎓</span>
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-coral-400 to-warm-500 bg-clip-text text-transparent">
              Education & Achievements
            </h2>
            <span className="text-4xl animate-float delay-150">🏆</span>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-coral-500 to-warm-600 mx-auto mb-10 rounded-full"></div>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            Academic foundation and professional achievements that fuel my passion for data science excellence ✨
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <div className="animate-slide-in-left">
            <div className="flex items-center space-x-4 mb-12">
              <div className="w-16 h-16 bg-gradient-to-r from-coral-500 to-warm-500 rounded-2xl flex items-center justify-center">
                <GraduationCap size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Education 📚</h3>
            </div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="group relative animate-stagger-1">
                  <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-coral-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-coral-500/10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <span className="text-3xl">{edu.emoji}</span>
                        <div>
                          <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-coral-400 transition-colors duration-300">{edu.degree}</h4>
                          <p className="text-coral-400 font-semibold text-lg">{edu.school}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-slate-400 text-sm">{edu.period}</p>
                        <p className="text-white text-sm font-bold">GPA: {edu.gpa}</p>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 mb-6 leading-relaxed">{edu.description}</p>
                    
                    <div>
                      <p className="text-sm font-semibold text-coral-400 mb-4">🔑 Key Coursework:</p>
                      <div className="flex flex-wrap gap-3">
                        {edu.coursework.map((course, courseIndex) => (
                          <span key={courseIndex} className="text-sm font-medium text-slate-200 bg-slate-700/50 px-3 py-2 rounded-lg border border-slate-600/50">
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

          {/* Achievements Timeline */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-4 mb-12">
              <div className="w-16 h-16 bg-gradient-to-r from-warm-500 to-coral-500 rounded-2xl flex items-center justify-center">
                <Trophy size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Achievements 🌟</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-coral-500 to-warm-500 rounded-full"></div>
              
              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`relative animate-stagger-${index + 1}`}>
                    {/* Timeline dot */}
                    <div className={`absolute left-4 w-8 h-8 bg-gradient-to-r ${achievement.color} rounded-full border-4 border-slate-900 flex items-center justify-center z-10 group-hover:scale-125 transition-transform duration-300`}>
                      <span className="text-lg">{achievement.emoji}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="ml-20 group">
                      <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-coral-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-coral-500/10">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-xl font-bold text-white mb-2 group-hover:text-coral-400 transition-colors duration-300">{achievement.title}</h4>
                          <span className="text-coral-400 font-bold text-sm">{achievement.year}</span>
                        </div>
                        <p className="text-coral-400 font-medium">{achievement.issuer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Learning */}
            <div className="mt-16 animate-stagger-4">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <BookOpen size={24} className="text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white">Continuous Learning 🚀</h4>
              </div>
              
              <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-coral-500/20 transition-all duration-300">
                <p className="text-slate-200 mb-6 text-lg">
                  <span className="text-2xl mr-2">🌱</span>
                  I believe in continuous learning and staying current with the latest developments in data science:
                </p>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-coral-400 text-xl">🏅</span>
                    <span className="text-lg">Regular participation in Kaggle competitions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-coral-400 text-xl">👥</span>
                    <span className="text-lg">Active member of local data science meetups</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-coral-400 text-xl">💻</span>
                    <span className="text-lg">Contributing to open-source ML libraries</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-coral-400 text-xl">📝</span>
                    <span className="text-lg">Publishing research papers and technical blog posts</span>
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
