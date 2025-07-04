import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp, ExternalLink } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/parthikhm',
      icon: Github,
      color: 'hover:text-gray-300',
      hoverBg: 'hover:bg-gray-800/30',
      description: 'View my code repositories'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/parthikhm/',
      icon: Linkedin,
      color: 'hover:text-blue-400',
      hoverBg: 'hover:bg-blue-900/30',
      description: 'Connect professionally'
    },
    {
      name: 'Email',
      url: 'mailto:parthikmodi43@gmail.com',
      icon: Mail,
      color: 'hover:text-red-400',
      hoverBg: 'hover:bg-red-900/30',
      description: 'Send me a message'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative py-16 px-4 overflow-hidden" style={{ backgroundColor: '#000000', borderTop: '1px solid rgba(247, 44, 79, 0.1)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-pink-500/20" />
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full border border-pink-500/20" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-pink-500/10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Logo size="md" animated={false} className="mb-6" />
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              Passionate Laravel Developer and Automation Specialist crafting exceptional digital experiences. 
              Transforming ideas into scalable, efficient solutions that drive business growth.
            </p>
            
            {/* Enhanced Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    boxShadow: "0 10px 25px rgba(247, 44, 79, 0.3)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`group relative w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:pulse-glow transition-all duration-300 ${link.color} ${link.hoverBg}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <link.icon size={20} />
                  
                  {/* Tooltip */}
                  <motion.div
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    {link.description}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90" />
                  </motion.div>

                  {/* Ripple effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ background: 'rgba(247, 44, 79, 0.2)' }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 gradient-bg rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    whileHover={{ x: 5, color: '#f72c4f' }}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <motion.div
                      className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-pink-500 transition-colors duration-300"
                      whileHover={{ scale: 1.5 }}
                    />
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 gradient-bg rounded-full" />
              Get In Touch
            </h3>
            <div className="space-y-4">
              <motion.a
                href="mailto:parthikmodi43@gmail.com"
                whileHover={{ scale: 1.02, x: 5 }}
                className="block text-gray-400 hover:text-white transition-all duration-300 text-sm group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg glass-effect flex items-center justify-center group-hover:pulse-glow transition-all duration-300">
                    <Mail size={14} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Email</div>
                    <div>parthikmodi43@gmail.com</div>
                  </div>
                </div>
              </motion.a>
              
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className="text-gray-400 text-sm group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg glass-effect flex items-center justify-center group-hover:pulse-glow transition-all duration-300">
                    <ExternalLink size={14} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Availability</div>
                    <div className="text-green-400">Open for Projects</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <motion.p 
                className="text-gray-500 text-sm flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
              >
                © {new Date().getFullYear()} Parthik Modi. All rights reserved.
              </motion.p>
              
              <motion.p 
                className="text-gray-600 text-xs flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
              >
                Made with <Heart size={12} style={{ color: '#f72c4f' }} className="animate-pulse" /> and lots of ☕
              </motion.p>
            </div>

            {/* Enhanced Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ 
                scale: 1.1, 
                y: -2,
                boxShadow: "0 10px 25px rgba(247, 44, 79, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:pulse-glow transition-all duration-300 group"
            >
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowUp size={18} className="group-hover:text-pink-400 transition-colors duration-300" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;