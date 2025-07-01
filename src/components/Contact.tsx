import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, MapPin, MessageCircle, User, FileText } from 'lucide-react';
import InteractiveCard from './InteractiveCard';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'parthikmodi43@gmail.com',
      href: 'mailto:parthikmodi43@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9173281097',
      href: 'tel:+919173281097',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Available for Remote Work',
      href: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4" style={{ background: 'linear-gradient(to bottom, #060606, #000000)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
            <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
              Ready to bring your ideas to life? I'm always excited to work on new projects and help businesses grow through technology.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <InteractiveCard>
                <h3 className="text-3xl font-bold mb-8 gradient-text">Get In Touch</h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, creative projects, or potential collaborations. 
                  Whether you have a question or just want to say hi, I'll do my best to get back to you!
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="flex items-center gap-4 p-4 glass-effect rounded-xl hover:pulse-glow transition-all duration-300 group"
                    >
                      <div className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #f72c4f, #e91e63)' }}>
                        <info.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold group-hover:gradient-text transition-all duration-300">
                          {info.title}
                        </p>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </InteractiveCard>

              <motion.div whileHover={{ scale: 1.02 }}>
                <InteractiveCard>
                  <h4 className="text-xl font-bold mb-4 gradient-text">Why Work With Me?</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 gradient-bg rounded-full"></div>
                      <span>2.5+ years of professional experience</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 gradient-bg rounded-full"></div>
                      <span>Expertise in Laravel, Shopify, and automation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 gradient-bg rounded-full"></div>
                      <span>Fast turnaround and reliable communication</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 gradient-bg rounded-full"></div>
                      <span>Scalable and maintainable code solutions</span>
                    </li>
                  </ul>
                </InteractiveCard>
              </motion.div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <InteractiveCard>
                <h3 className="text-2xl font-bold mb-8 gradient-text flex items-center gap-3">
                  <MessageCircle size={28} />
                  Send Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <User size={20} className="absolute left-4 top-4 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 glass-effect rounded-xl focus:outline-none focus:pulse-glow transition-all duration-300 text-white placeholder-gray-400"
                        style={{ border: '1px solid rgba(247, 44, 79, 0.1)', backgroundColor: 'rgba(247, 44, 79, 0.05)' }}
                        required
                      />
                    </div>
                    <div className="relative">
                      <Mail size={20} className="absolute left-4 top-4 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 glass-effect rounded-xl focus:outline-none focus:pulse-glow transition-all duration-300 text-white placeholder-gray-400"
                        style={{ border: '1px solid rgba(247, 44, 79, 0.1)', backgroundColor: 'rgba(247, 44, 79, 0.05)' }}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <FileText size={20} className="absolute left-4 top-4 text-gray-400" />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 glass-effect rounded-xl focus:outline-none focus:pulse-glow transition-all duration-300 text-white placeholder-gray-400"
                      style={{ border: '1px solid rgba(247, 44, 79, 0.1)', backgroundColor: 'rgba(247, 44, 79, 0.05)' }}
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <MessageCircle size={20} className="absolute left-4 top-4 text-gray-400" />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full pl-12 pr-4 py-4 glass-effect rounded-xl focus:outline-none focus:pulse-glow transition-all duration-300 text-white placeholder-gray-400 resize-none"
                      style={{ border: '1px solid rgba(247, 44, 79, 0.1)', backgroundColor: 'rgba(247, 44, 79, 0.05)' }}
                      required
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 font-semibold rounded-xl hover:pulse-glow transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed text-white"
                    style={{ background: 'linear-gradient(135deg, #f72c4f, #e91e63)' }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </InteractiveCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;