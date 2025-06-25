import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Laravel Developer',
    'Shopify Expert', 
    'n8n Automation Specialist',
    'Full Stack Developer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900">
        <div className="particle-bg">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${Math.random() * 10 + 15}s`
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="gradient-text">Parthik</span>
            <br />
            <span className="text-white">Modi</span>
          </motion.h1>
          
          <div className="h-20 flex items-center justify-center">
            <motion.h2 
              key={currentRole}
              className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-300 typewriter"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {roles[currentRole]}
            </motion.h2>
          </div>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Crafting robust web applications and automation solutions with 2.5+ years of experience. 
          Specializing in Laravel backends, Shopify integrations, and intelligent automation workflows.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          <motion.a 
            href="mailto:parthikmodi43@gmail.com"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 glass-effect rounded-full hover:pulse-glow transition-all duration-300"
          >
            <Mail size={20} />
            <span className="font-medium">Get In Touch</span>
          </motion.a>
          
          <motion.a 
            href="tel:+919173281097"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 gradient-bg rounded-full hover:shadow-lg transition-all duration-300"
          >
            <Phone size={20} />
            <span className="font-medium">Call Now</span>
          </motion.a>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex justify-center gap-6 mb-16"
        >
          {[
            { icon: Github, href: 'https://github.com/parthikhm', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/parthikhm/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:parthikmodi43@gmail.com', label: 'Email' }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 glass-effect rounded-full flex items-center justify-center hover:pulse-glow transition-all duration-300"
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="floating-animation"
        >
          <ArrowDown size={32} className="text-gray-400 mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;