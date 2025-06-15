
import { Mail, Linkedin, Github, MapPin, Phone, Send, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nitheshbethur39@gmail.com",
      href: "mailto:nitheshbethur39@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/nithishbm",
      href: "https://www.linkedin.com/in/nithishbm"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/nithishbm",
      href: "https://github.com/nithishbm"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(571) 574-3215",
      href: "tel:+15715743215"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "3917 Fairfax Square, Fairfax, VA 22031",
      href: "#"
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      value: "nithishbilasunurportfolio.framer.website",
      href: "https://nithishbilasunurportfolio.framer.website/"
    }
  ];

  return (
    <section id="contact" className={`py-20 px-6 lg:px-8 relative overflow-hidden transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-slate-900 to-slate-950' 
        : 'bg-gradient-to-b from-slate-200 to-slate-300'
    }`}>
      {/* Background animations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-light-teal/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-blue-gray/10 rounded-full blur-xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-light-teal/20 rounded-full blur-lg animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-4xl animate-float">🚀</span>
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-light-teal to-blue-gray bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <span className="text-4xl animate-float delay-300">✨</span>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-light-teal to-blue-gray mx-auto mb-8 rounded-full animate-scale-in delay-500"></div>
          <p className={`text-base max-w-2xl mx-auto font-chivo font-light animate-fade-in delay-700 ${
            theme === 'dark' ? 'text-blue-gray' : 'text-slate-600'
          }`}>
            Ready to discuss data engineering opportunities, cloud architecture projects, or AWS consulting? 
            I'm actively seeking full-time roles and would love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="animate-slide-in-left delay-300">
            <h3 className={`text-xl font-chivo font-medium mb-8 animate-fade-in ${
              theme === 'dark' ? 'text-light-gray' : 'text-slate-800'
            }`}>Get in Touch</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.href} 
                  target={info.href.startsWith('http') ? '_blank' : undefined} 
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined} 
                  className={`flex items-center space-x-4 p-4 backdrop-blur-sm rounded-xl border transition-all duration-500 hover:scale-105 hover:shadow-xl group animate-stagger-${index + 1} ${
                    theme === 'dark' 
                      ? 'bg-slate-800/60 border-slate-700 hover:border-light-teal hover:shadow-light-teal/10 hover:bg-slate-700/90' 
                      : 'bg-white/60 border-slate-400 hover:border-light-teal hover:shadow-light-teal/10 hover:bg-white/90'
                  }`}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-light-teal/20 to-blue-gray/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <info.icon size={16} className="text-light-teal" />
                  </div>
                  <div>
                    <p className={`text-sm font-chivo ${
                      theme === 'dark' ? 'text-blue-gray' : 'text-slate-600'
                    }`}>{info.label}</p>
                    <p className={`font-chivo font-medium ${
                      theme === 'dark' ? 'text-light-gray' : 'text-slate-800'
                    }`}>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right delay-500">
            <h3 className={`text-xl font-chivo font-medium mb-8 animate-fade-in ${
              theme === 'dark' ? 'text-light-gray' : 'text-slate-800'
            }`}>Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="animate-fade-in-up delay-300">
                  <label htmlFor="name" className={`block font-chivo font-medium mb-2 text-sm ${
                    theme === 'dark' ? 'text-blue-gray' : 'text-slate-600'
                  }`}>
                    Name *
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    required 
                    className={`w-full px-4 py-3 border rounded-xl focus:border-light-teal focus:outline-none focus:ring-2 focus:ring-light-teal/20 transition-all duration-500 text-sm font-chivo ${
                      theme === 'dark' 
                        ? 'bg-slate-800/50 border-custom-medium/30 text-light-gray placeholder-blue-gray hover:bg-slate-800/70' 
                        : 'bg-white/50 border-slate-300 text-slate-800 placeholder-slate-500 hover:bg-white/70'
                    }`} 
                    placeholder="Your name" 
                  />
                </div>
                <div className="animate-fade-in-up delay-400">
                  <label htmlFor="email" className={`block font-chivo font-medium mb-2 text-sm ${
                    theme === 'dark' ? 'text-blue-gray' : 'text-slate-600'
                  }`}>
                    Email *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                    className={`w-full px-4 py-3 border rounded-xl focus:border-light-teal focus:outline-none focus:ring-2 focus:ring-light-teal/20 transition-all duration-500 text-sm font-chivo ${
                      theme === 'dark' 
                        ? 'bg-slate-800/50 border-custom-medium/30 text-light-gray placeholder-blue-gray hover:bg-slate-800/70' 
                        : 'bg-white/50 border-slate-300 text-slate-800 placeholder-slate-500 hover:bg-white/70'
                    }`} 
                    placeholder="your.email@example.com" 
                  />
                </div>
              </div>
              
              <div className="animate-fade-in-up delay-500">
                <label htmlFor="subject" className={`block font-chivo font-medium mb-2 text-sm ${
                  theme === 'dark' ? 'text-blue-gray' : 'text-slate-600'
                }`}>
                  Subject *
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleInputChange} 
                  required 
                  className={`w-full px-4 py-3 border rounded-xl focus:border-light-teal focus:outline-none focus:ring-2 focus:ring-light-teal/20 transition-all duration-500 text-sm font-chivo ${
                    theme === 'dark' 
                      ? 'bg-slate-800/50 border-custom-medium/30 text-light-gray placeholder-blue-gray hover:bg-slate-800/70' 
                      : 'bg-white/50 border-slate-300 text-slate-800 placeholder-slate-500 hover:bg-white/70'
                  }`} 
                  placeholder="What's this about?" 
                />
              </div>
              
              <div className="animate-fade-in-up delay-600">
                <label htmlFor="message" className={`block font-chivo font-medium mb-2 text-sm ${
                  theme === 'dark' ? 'text-blue-gray' : 'text-slate-600'
                }`}>
                  Message *
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  required 
                  rows={5} 
                  className={`w-full px-4 py-3 border rounded-xl focus:border-light-teal focus:outline-none focus:ring-2 focus:ring-light-teal/20 transition-all duration-500 resize-none text-sm font-chivo ${
                    theme === 'dark' 
                      ? 'bg-slate-800/50 border-custom-medium/30 text-light-gray placeholder-blue-gray hover:bg-slate-800/70' 
                      : 'bg-white/50 border-slate-300 text-slate-800 placeholder-slate-500 hover:bg-white/70'
                  }`} 
                  placeholder="Tell me about your project, opportunity, or just say hello!" 
                />
              </div>
              
              <button 
                type="submit" 
                className={`w-full border py-4 px-6 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3 text-sm group animate-scale-in delay-700 ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-light-teal/20 to-blue-gray/20 border-light-teal/30 hover:from-light-teal/30 hover:to-blue-gray/30 hover:border-light-teal/60 text-light-teal hover:shadow-light-teal/20' 
                    : 'bg-gradient-to-r from-light-teal/10 to-blue-gray/10 border-light-teal/40 hover:from-light-teal/20 hover:to-blue-gray/20 hover:border-light-teal/70 text-light-teal hover:shadow-light-teal/20'
                } font-chivo font-medium`}
              >
                <Send size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-20 pt-8 border-t text-center animate-fade-in delay-1000 ${
          theme === 'dark' ? 'border-custom-medium/20' : 'border-slate-400/30'
        }`}>
          <p className={`text-sm font-chivo ${
            theme === 'dark' ? 'text-blue-gray' : 'text-slate-600'
          }`}>
            © 2024 Nithish Bilasunur Manjunatha Reddy. Built with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
