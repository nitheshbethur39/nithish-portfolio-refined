
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
    <section id="contact" className="py-12 px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-chivo font-medium mb-3 text-light-gray">
            Let's Connect
          </h2>
          <div className="w-16 h-[1px] bg-light-teal mx-auto mb-4"></div>
          <p className="text-sm text-blue-gray max-w-2xl mx-auto font-chivo font-light">
            Ready to discuss data science opportunities, collaborations, or just want to chat about the latest in ML? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-chivo font-medium text-light-gray mb-5">Get in Touch</h3>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.href} 
                  target={info.href.startsWith('http') ? '_blank' : undefined} 
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined} 
                  className="flex items-center space-x-3 p-3 bg-gradient-to-br from-slate-800/40 to-slate-800/20 backdrop-blur-sm rounded-lg border border-custom-medium/30 hover:border-light-teal/40 transition-all duration-300 hover:scale-[1.02] group"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-light-teal/20 to-blue-gray/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon size={14} className="text-light-teal" />
                  </div>
                  <div>
                    <p className="text-blue-gray text-xs font-chivo">{info.label}</p>
                    <p className="text-light-gray font-chivo font-medium text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-light-teal/10 to-blue-gray/10 rounded-lg border border-light-teal/20">
              <h4 className="text-base font-chivo font-medium text-light-gray mb-2">Open to Opportunities</h4>
              <p className="text-blue-gray mb-3 text-xs font-chivo font-light">
                I'm currently open to new opportunities in data science, machine learning engineering, 
                and analytics consulting roles. Let's discuss how I can help drive your organization's 
                data initiatives forward.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Remote Work', 'Full-time', 'Contract', 'Consulting'].map((tag, index) => (
                  <span key={index} className="text-xs font-chivo font-medium text-light-teal bg-light-teal/10 border border-light-teal/20 px-2 py-0.5 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-lg font-chivo font-medium text-light-gray mb-5">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="name" className="block text-blue-gray font-chivo font-medium mb-1.5 text-xs">
                    Name *
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    required 
                    className="w-full px-3 py-2 bg-slate-800/50 border border-custom-medium/30 rounded-lg text-light-gray placeholder-blue-gray focus:border-light-teal focus:outline-none transition-colors duration-300 text-sm font-chivo" 
                    placeholder="Your name" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-blue-gray font-chivo font-medium mb-1.5 text-xs">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                    className="w-full px-3 py-2 bg-slate-800/50 border border-custom-medium/30 rounded-lg text-light-gray placeholder-blue-gray focus:border-light-teal focus:outline-none transition-colors duration-300 text-sm font-chivo" 
                    placeholder="your.email@example.com" 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-blue-gray font-chivo font-medium mb-1.5 text-xs">
                  Subject *
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleInputChange} 
                  required 
                  className="w-full px-3 py-2 bg-slate-800/50 border border-custom-medium/30 rounded-lg text-light-gray placeholder-blue-gray focus:border-light-teal focus:outline-none transition-colors duration-300 text-sm font-chivo" 
                  placeholder="What's this about?" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-blue-gray font-chivo font-medium mb-1.5 text-xs">
                  Message *
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  required 
                  rows={4} 
                  className="w-full px-3 py-2 bg-slate-800/50 border border-custom-medium/30 rounded-lg text-light-gray placeholder-blue-gray focus:border-light-teal focus:outline-none transition-colors duration-300 resize-none text-sm font-chivo" 
                  placeholder="Tell me about your project, opportunity, or just say hello!" 
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-light-teal/20 to-blue-gray/20 border border-light-teal/30 hover:from-light-teal/30 hover:to-blue-gray/30 hover:border-light-teal/50 text-light-teal font-chivo font-medium py-2.5 px-5 rounded-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2 text-sm"
              >
                <Send size={14} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-5 border-t border-custom-medium/30 text-center">
          <p className="text-blue-gray text-xs font-chivo">
            © 2024 Nithish Bilasunu. Built with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
