import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, MapPin, MessageCircle, User, FileText, ArrowRight } from 'lucide-react';
import InteractiveCard from './InteractiveCard';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
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
    setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
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
      href: 'mailto:parthikmodi43@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9173281097',
      href: 'tel:+919173281097'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Available for Remote Work',
      href: '#'
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
          
          {/* Main Contact Card */}
          <motion.div variants={itemVariants}>
            <InteractiveCard className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Side - Get In Touch */}
                <div className="p-8 lg:p-12" style={{ background: 'linear-gradient(135deg, rgba(247, 44, 79, 0.1), rgba(233, 30, 99, 0.05))' }}>
                  <div className="mb-8">
                    <motion.div 
                      className="inline-block px-4 py-2 rounded-full mb-6"
                      style={{ background: 'linear-gradient(135deg, #f72c4f, #e91e63)', color: 'white' }}
                    >
                      <span className="text-sm font-medium tracking-wider uppercase">Get In Touch</span>
                    </motion.div>
                    
                    <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                      Elevate your brand with Me
                    </h3>
                    
                    <p className="text-lg text-gray-300 leading-relaxed mb-8">
                      Ready to transform your business with cutting-edge web development and automation solutions? 
                      Let's discuss how I can help you achieve your goals with Laravel expertise and intelligent automation.
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-6 mb-8">
                    {contactInfo.map((info, index) => (
                      <motion.a
                        key={index}
                        href={info.href}
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-4 text-gray-300 hover:text-white transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: 'rgba(247, 44, 79, 0.2)' }}>
                          <info.icon size={20} style={{ color: '#f72c4f' }} />
                        </div>
                        <div>
                          <p className="font-medium">{info.title}</p>
                          <p className="text-sm text-gray-400">{info.value}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  {/* Why Work With Me */}
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">Why Choose Me?</h4>
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
                  </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="p-8 lg:p-12 bg-black/20">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Phone Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-4 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-pink-500 transition-all duration-300 text-white placeholder-gray-400"
                          required
                        />
                      </div>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-4 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-pink-500 transition-all duration-300 text-white placeholder-gray-400"
                          required
                        />
                      </div>
                    </div>

                    {/* Email and Subject Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-4 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-pink-500 transition-all duration-300 text-white placeholder-gray-400"
                          required
                        />
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-4 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-pink-500 transition-all duration-300 text-white placeholder-gray-400"
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Message */}
                    <div className="relative">
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-4 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-pink-500 transition-all duration-300 text-white placeholder-gray-400 resize-none"
                        required
                      />
                    </div>
                    
                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed text-white"
                      style={{ background: 'linear-gradient(135deg, #f72c4f, #e91e63)' }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Appointment Now</span>
                          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              </div>
            </InteractiveCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;