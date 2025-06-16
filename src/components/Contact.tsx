
import { Mail, Linkedin, Github, MapPin, Phone, Send, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
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
      value: "nbilasun@gmu.edu",
      href: "mailto:nbilasun@gmu.edu"
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
      href: "https://github.com/nitheshbethur39"
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
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
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
          <p className="text-base text-blue-gray max-w-2xl mx-auto font-chivo font-light animate-fade-in delay-700">
            Ready to discuss data engineering opportunities, cloud architecture projects, or AWS consulting? 
            I'm actively seeking full-time roles and would love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="animate-slide-in-left delay-300">
            <h3 className="text-xl font-chivo font-medium text-light-gray mb-8 animate-fade-in">Get in Touch</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.href} 
                  target={info.href.startsWith('http') ? '_blank' : undefined} 
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined} 
                  className={`flex items-center space-x-4 p-4 bg-gradient-to-br from-slate-800/60 to-slate-800/30 backdrop-blur-sm rounded-xl border border-custom-medium/30 hover:border-light-teal/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-light-teal/10 group animate-stagger-${index + 1}`}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-light-teal/20 to-blue-gray/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <info.icon size={16} className="text-light-teal" />
                  </div>
                  <div>
                    <p className="text-blue-gray text-sm font-chivo">{info.label}</p>
                    <p className="text-light-gray font-chivo font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-light-teal/10 to-blue-gray/10 rounded-xl border border-light-teal/20 animate-fade-in delay-1000">
              <h4 className="text-lg font-chivo font-medium text-light-gray mb-3 animate-fade-in">Open to Opportunities</h4>
              <p className="text-blue-gray mb-4 text-sm font-chivo font-light animate-fade-in delay-200">
                I'm actively seeking full-time opportunities in data engineering, cloud architecture, 
                and analytics roles. Let's discuss how my AWS expertise and data engineering experience 
                can drive your organization's success.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Data Engineering', 'Cloud Architecture', 'AWS Solutions', 'Analytics'].map((tag, index) => (
                  <span 
                    key={index} 
                    className={`text-sm font-chivo font-medium text-light-teal bg-light-teal/10 border border-light-teal/20 px-3 py-1 rounded-full hover:bg-light-teal/20 transition-all duration-300 hover:scale-105 animate-scale-in`}
                    style={{ animationDelay: `${1200 + index * 100}ms` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right delay-500">
            <h3 className="text-xl font-chivo font-medium text-light-gray mb-8 animate-fade-in">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="animate-fade-in-up delay-300">
                  <label htmlFor="name" className="block text-blue-gray font-chivo font-medium mb-2 text-sm">
                    Name *
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    required 
                    className="w-full px-4 py-3 bg-slate-800/50 border border-custom-medium/30 rounded-xl text-light-gray placeholder-blue-gray focus:border-light-teal focus:outline-none focus:ring-2 focus:ring-light-teal/20 transition-all duration-500 text-sm font-chivo hover:bg-slate-800/70" 
                    placeholder="Your name" 
                  />
                </div>
                <div className="animate-fade-in-up delay-400">
                  <label htmlFor="email" className="block text-blue-gray font-chivo font-medium mb-2 text-sm">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                    className="w-full px-4 py-3 bg-slate-800/50 border border-custom-medium/30 rounded-xl text-light-gray placeholder-blue-gray focus:border-light-teal focus:outline-none focus:ring-2 focus:ring-light-teal/20 transition-all duration-500 text-sm font-chivo hover:bg-slate-800/70" 
                    placeholder="your.email@example.com" 
                  />
                </div>
              </div>
              
              <div className="animate-fade-in-up delay-500">
                <label htmlFor="subject" className="block text-blue-gray font-chivo font-medium mb-2 text-sm">
                  Subject *
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleInputChange} 
                  required 
                  className="w-full px-4 py-3 bg-slate-800/50 border border-custom-medium/30 rounded-xl text-light-gray placeholder-blue-gray focus:border-light-teal focus:outline-none focus:ring-2 focus:ring-light-teal/20 transition-all duration-500 text-sm font-chivo hover:bg-slate-800/70" 
                  placeholder="What's this about?" 
                />
              </div>
              
              <div className="animate-fade-in-up delay-600">
                <label htmlFor="message" className="block text-blue-gray font-chivo font-medium mb-2 text-sm">
                  Message *
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  required 
                  rows={5} 
                  className="w-full px-4 py-3 bg-slate-800/50 border border-custom-medium/30 rounded-xl text-light-gray placeholder-blue-gray focus:border-light-teal focus:outline-none focus:ring-2 focus:ring-light-teal/20 transition-all duration-500 resize-none text-sm font-chivo hover:bg-slate-800/70" 
                  placeholder="Tell me about your project, opportunity, or just say hello!" 
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-light-teal/20 to-blue-gray/20 border border-light-teal/30 hover:from-light-teal/30 hover:to-blue-gray/30 hover:border-light-teal/60 text-light-teal font-chivo font-medium py-4 px-6 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-light-teal/20 flex items-center justify-center space-x-3 text-sm group animate-scale-in delay-700"
              >
                <Send size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-custom-medium/20 text-center animate-fade-in delay-1000">
          <p className="text-blue-gray text-sm font-chivo">
            © 2024 Nithish Bilasunur Manjunatha Reddy. Built with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
