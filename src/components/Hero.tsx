import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Download, ArrowDown, Code2, Sparkles, Zap } from 'lucide-react';
import InteractiveCard from './InteractiveCard';
import Logo from './Logo';

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

  // Enhanced smooth scroll function
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const headerHeight = 80; // Account for fixed header
      const targetPosition = aboutSection.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  // Enhanced social links with better hover effects
  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/parthikhm', 
      label: 'GitHub', 
      color: 'hover:text-gray-300',
      hoverBg: 'hover:bg-gray-800'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/parthikhm/', 
      label: 'LinkedIn', 
      color: 'hover:text-blue-400',
      hoverBg: 'hover:bg-blue-900/30'
    },
    { 
      icon: Mail, 
      href: 'mailto:parthikmodi43@gmail.com', 
      label: 'Email', 
      color: 'hover:text-red-400',
      hoverBg: 'hover:bg-red-900/30'
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#060606' }}>
      {/* Optimized Background */}
      <div className="absolute inset-0" style={{ backgroundColor: '#060606' }}>
        {/* Simplified particle system */}
        <div className="particle-bg">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 2}px`,
                height: `${Math.random() * 3 + 2}px`,
                background: 'rgba(247, 44, 79, 0.2)'
              }}
              animate={{
                y: [window.innerHeight + 50, -50],
                opacity: [0, 0.8, 0.8, 0]
              }}
              transition={{
                duration: Math.random() * 8 + 12,
                repeat: Infinity,
                delay: Math.random() * 15,
                ease: "linear"
              }}
            />
          ))}
        </div>
        
        {/* Simplified geometric shapes */}
        <motion.div 
          className="absolute top-20 left-10 w-16 h-16 rounded-full border border-pink-500/20"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-12 h-12 rounded-lg rotate-45"
          style={{ background: 'linear-gradient(135deg, rgba(247, 44, 79, 0.1), rgba(233, 30, 99, 0.1))' }}
          animate={{ 
            rotate: [45, 135, 45]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        className="relative z-10 px-4 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <motion.div className="mb-6">
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <Sparkles size={16} style={{ color: '#f72c4f' }} />
                <span className="text-sm font-medium text-gray-300">Available for Projects</span>
                <motion.div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#f72c4f' }}
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
              >
                <span className="text-white">Hi, I'm</span>
                <br />
                <span className="gradient-text">Parthik</span>
              </motion.h1>
              
              <div className="h-16 flex items-center justify-center lg:justify-start mb-6">
                <motion.h2 
                  key={currentRole}
                  className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300 flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <Code2 size={28} style={{ color: '#f72c4f' }} />
                  {roles[currentRole]}
                </motion.h2>
              </div>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Crafting robust web applications and intelligent automation solutions with 
              <span className="gradient-text font-semibold"> 2.5+ years</span> of experience. 
              Specializing in Laravel backends, Shopify integrations, and n8n workflows.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.a 
                href="mailto:parthikmodi43@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-3 gradient-bg rounded-full hover:shadow-xl transition-all duration-300 group text-white relative overflow-hidden"
              >
                <Mail size={20} />
                <span className="font-medium">Let's Talk</span>
                <Zap size={16} />
              </motion.a>
              
              <motion.a 
                href="tel:+919173281097"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-3 glass-effect rounded-full hover:shadow-lg transition-all duration-300"
              >
                <Phone size={20} />
                <span className="font-medium">Call Now</span>
              </motion.a>

              <motion.a 
                href="/Parthik_Modi.pdf"
                download="Parthik_Modi_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-3 glass-effect rounded-full hover:shadow-lg transition-all duration-300"
              >
                <Download size={20} />
                <span className="font-medium">Resume</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 ${social.color} ${social.hoverBg}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Developer Image */}
          <motion.div 
            variants={imageVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background glow */}
              <motion.div 
                className="absolute -inset-6 rounded-full blur-2xl"
                style={{ background: 'linear-gradient(135deg, rgba(247, 44, 79, 0.2), rgba(233, 30, 99, 0.1))' }}
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Main image container */}
              <InteractiveCard 
                className="w-80 h-80 lg:w-96 lg:h-96 p-2 relative overflow-hidden"
                style={{ borderRadius: '50%' }}
              >
                <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center relative" style={{ background: 'linear-gradient(135deg, rgba(247, 44, 79, 0.1), rgba(233, 30, 99, 0.1))' }}>
                  <img 
                    src="/1732172836245.jpeg"
                    alt="Parthik Modi - Laravel Developer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </InteractiveCard>
                
              {/* Floating stats */}
              <motion.div 
                className="absolute -left-8 top-16"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <InteractiveCard className="p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">2.5+</div>
                    <div className="text-xs text-gray-400">Years Exp</div>
                  </div>
                </InteractiveCard>
              </motion.div>

              <motion.div 
                className="absolute -right-8 bottom-16"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <InteractiveCard className="p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">25+</div>
                    <div className="text-xs text-gray-400">Projects</div>
                  </div>
                </InteractiveCard>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToNextSection}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div 
            className="flex flex-col items-center gap-2 group"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm text-gray-400 font-medium group-hover:text-white transition-colors duration-300">
              Scroll to explore
            </span>
            <ArrowDown size={24} className="text-gray-400 group-hover:text-pink-400 transition-colors duration-300" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;