import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/parthikhm',
      icon: Github,
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/parthikhm/',
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      url: 'mailto:parthikmodi43@gmail.com',
      icon: Mail,
      color: 'hover:text-red-400'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4" style={{ backgroundColor: '#000000', borderTop: '1px solid rgba(247, 44, 79, 0.1)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-0 text-center md:text-left"
          >
            <Logo size="md" animated={false} className="justify-center md:justify-start mb-4" />
            <p className="text-gray-500 text-sm mt-2">Building the future, one line of code at a time.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`w-14 h-14 glass-effect rounded-full flex items-center justify-center transition-all duration-300 hover:pulse-glow ${link.color}`}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8"
          style={{ borderTop: '1px solid rgba(247, 44, 79, 0.1)' }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center">
            {/* <p className="text-gray-400 flex items-center justify-center gap-2 mb-4 md:mb-0">
              Made with <Heart size={16} style={{ color: '#f72c4f' }} className="animate-pulse" /> by Parthik Modi
            </p> */}
            
            <div className="flex items-center gap-6">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Parthik Modi All rights reserved.
              </p>
              
              
            </div>
          </div>
          <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 glass-effect rounded-full flex items-center ml-auto justify-center hover:pulse-glow transition-all duration-300"
              >
                <ArrowUp size={18} />
              </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <div className="glass-effect p-6 rounded-xl max-w-2xl mx-auto">
            <p className="text-gray-400 text-sm leading-relaxed">
              "The best way to predict the future is to create it. Let's build something amazing together."
            </p>
            <p className="text-gray-500 text-xs mt-2">- Ready for your next project</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;