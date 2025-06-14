
import { Mail, Linkedin, Github, MapPin, Phone, Send } from 'lucide-react';
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
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nithish.bilasunu@example.com",
      href: "mailto:nithish.bilasunu@example.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/nithishbilasunu",
      href: "https://linkedin.com/in/nithishbilasunu"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/nithishbilasunu",
      href: "https://github.com/nithishbilasunu"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-16 px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-base text-slate-300 max-w-3xl mx-auto">
            Ready to discuss data science opportunities, collaborations, or just want to chat about the latest in ML? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-3 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs">{info.label}</p>
                    <p className="text-white font-medium text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 p-5 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl border border-blue-500/20">
              <h4 className="text-lg font-bold text-white mb-3">Open to Opportunities</h4>
              <p className="text-slate-300 mb-3 text-sm">
                I'm currently open to new opportunities in data science, machine learning engineering, 
                and analytics consulting roles. Let's discuss how I can help drive your organization's 
                data initiatives forward.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Remote Work', 'Full-time', 'Contract', 'Consulting'].map((tag, index) => (
                  <span key={index} className="text-xs font-medium text-blue-400 bg-blue-500/20 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-slate-300 font-medium mb-2 text-sm">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none transition-colors duration-300 text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-300 font-medium mb-2 text-sm">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none transition-colors duration-300 text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-slate-300 font-medium mb-2 text-sm">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none transition-colors duration-300 text-sm"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-slate-300 font-medium mb-2 text-sm">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none text-sm"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center space-x-2 text-sm"
              >
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-6 border-t border-slate-700/50 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 Nithish Bilasunu. Built with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
