import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Download, ArrowDown, Code2, Sparkles, Zap, Database, Globe } from 'lucide-react';
import InteractiveCard from './InteractiveCard';
import OptimizedImage from './OptimizedImage';

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
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
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
      {/* Enhanced Animated Background with better performance */}
      <div className="absolute inset-0" style={{ backgroundColor: '#060606' }}>
        {/* Optimized particle system */}
        <div className="particle-bg">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                background: 'rgba(247, 44, 79, 0.3)'
              }}
              animate={{
                y: [window.innerHeight + 100, -100],
                opacity: [0, 1, 1, 0],
                scale: [0, 1, 1, 0]
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
        
        {/* Reduced geometric shapes for better performance */}
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 rounded-full border border-pink-500/30"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 6, 
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
          {/* Enhanced Left Content */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <motion.div className="mb-6">
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
              >
                <span className="text-white">Hi, I'm</span>
                <br />
                <motion.span 
                  className="gradient-text"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  Parthik
                </motion.span>
              </motion.h1>
              
              <div className="h-16 flex items-center justify-center lg:justify-start mb-6">
                <motion.h2 
                  key={currentRole}
                  className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300 flex items-center gap-3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Code2 size={28} style={{ color: '#f72c4f' }} />
                  </motion.div>
                  {roles[currentRole]}
                </motion.h2>
              </div>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Crafting robust web applications and intelligent automation solutions with 
              <motion.span 
                className="gradient-text font-semibold"
                whileHover={{ scale: 1.05 }}
              > 2.5+ years</motion.span> of experience. 
              Specializing in Laravel backends, Shopify integrations, and n8n workflows.
            </motion.p>

            {/* Enhanced Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.a 
                href="mailto:parthikmodi43@gmail.com"
                className="flex items-center gap-3 px-6 py-3 gradient-bg rounded-full hover:shadow-2xl transition-all duration-300 group text-white relative overflow-hidden"
              >
                <Mail size={20} />
                <span className="font-medium">Let's Talk</span>
                <motion.div
                  className="group-hover:rotate-12 transition-transform duration-300"
                  whileHover={{ rotate: 12 }}
                >
                  <Zap size={16} />
                </motion.div>
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
              
              <motion.a 
                href="tel:+919173281097"
                className="flex items-center gap-3 px-6 py-3 glass-effect rounded-full hover:pulse-glow transition-all duration-300"
              >
                <Phone size={20} />
                <span className="font-medium">Call Now</span>
              </motion.a>

              <motion.a 
                href="/Parthik_Modi.pdf"
                download="Parthik_Modi_Resume.pdf"
                className="flex items-center gap-3 px-6 py-3 glass-effect rounded-full hover:pulse-glow transition-all duration-300 group"
              >
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Download size={20} />
                </motion.div>
                <span className="font-medium">Resume</span>
              </motion.a>
            </motion.div>

            {/* Enhanced Social Links */}
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
                  className={`w-12 h-12 glass-effect rounded-full flex items-center justify-center transition-all duration-300 ${social.color} ${social.hoverBg} relative overflow-hidden group`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <social.icon size={20} />
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
            </motion.div>
          </motion.div>

          {/* Enhanced Right Content - Developer Image */}
          <motion.div 
            variants={imageVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Enhanced background decorative elements */}
              <motion.div 
                className="absolute -inset-12 rounded-full blur-3xl opacity-60"
                style={{ background: 'linear-gradient(135deg, rgba(247, 44, 79, 0.4), rgba(233, 30, 99, 0.3), rgba(156, 39, 176, 0.2))' }}
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.4, 0.7, 0.4],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Additional glow layers */}
              <motion.div 
                className="absolute -inset-6 rounded-full blur-2xl opacity-40"
                style={{ background: 'linear-gradient(45deg, rgba(247, 44, 79, 0.3), rgba(233, 30, 99, 0.2))' }}
                animate={{ 
                  scale: [1.1, 1, 1.1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              {/* Main image container with Enhanced Interactive Card */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10"
              >
                <InteractiveCard 
                  className="w-80 h-80 lg:w-96 lg:h-96 p-3 relative overflow-hidden shadow-2xl"
                  style={{ 
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(40, 40, 40, 0.8))',
                    border: '2px solid rgba(247, 44, 79, 0.3)',
                    boxShadow: '0 0 60px rgba(247, 44, 79, 0.3), inset 0 0 60px rgba(247, 44, 79, 0.1)'
                  }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center relative border-2 border-white/10" 
                       style={{ background: 'linear-gradient(135deg, rgba(247, 44, 79, 0.15), rgba(233, 30, 99, 0.15), rgba(156, 39, 176, 0.1))' }}>
                    {/* Background image with cropping */}
                    <div 
                      className="absolute inset-0 rounded-full transition-all duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage: 'url(/1732172836245.jpeg)',
                        backgroundSize: '120%',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                    
                    {/* Overlay text */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center">
                      <motion.div 
                        className="mb-4 px-4 py-2 rounded-full backdrop-blur-md"
                        style={{ 
                          background: 'rgba(0, 0, 0, 0.7)',
                          border: '1px solid rgba(247, 44, 79, 0.3)'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 0.8 }}
                      >
                        <div className="text-2xl font-bold gradient-text">2.5+</div>
                        <div className="text-xs text-white font-medium">Years</div>
                      </motion.div>
                      
                      <motion.div 
                        className="px-4 py-2 rounded-full backdrop-blur-md"
                        style={{ 
                          background: 'rgba(0, 0, 0, 0.7)',
                          border: '1px solid rgba(247, 44, 79, 0.3)'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.3, duration: 0.8 }}
                      >
                        <div className="text-2xl font-bold gradient-text">25+</div>
                        <div className="text-xs text-white font-medium">Projects</div>
                      </motion.div>
                    </div>
                    {/* Enhanced image overlay effects */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/30 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    {/* Animated border effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'conic-gradient(from 0deg, transparent, rgba(247, 44, 79, 0.5), transparent, rgba(233, 30, 99, 0.5), transparent)',
                        mask: 'radial-gradient(circle, transparent 98%, black 100%)',
                        WebkitMask: 'radial-gradient(circle, transparent 98%, black 100%)'
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </InteractiveCard>
              </motion.div>
                
              {/* Enhanced floating tech icons */}
              <motion.div 
                className="absolute -top-6 -right-6 w-20 h-20 glass-effect rounded-2xl flex items-center justify-center shadow-xl border border-pink-500/20"
                style={{ background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(40, 40, 40, 0.8))' }}
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.2, rotate: 15 }}
              >
                <Code2 size={28} style={{ color: '#f72c4f' }} />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 w-18 h-18 glass-effect rounded-2xl flex items-center justify-center shadow-xl border border-pink-500/20"
                style={{ background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(40, 40, 40, 0.8))' }}
                animate={{ 
                  y: [10, -10, 10],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileHover={{ scale: 1.2, rotate: -15 }}
              >
                <Zap size={24} style={{ color: '#f72c4f' }} />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              
              {/* New floating elements */}
              <motion.div 
                className="absolute top-1/2 -left-12 w-12 h-12 glass-effect rounded-xl flex items-center justify-center shadow-lg border border-pink-500/20"
                style={{ background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(40, 40, 40, 0.8))' }}
                animate={{ 
                  x: [-5, 5, -5],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                whileHover={{ scale: 1.15 }}
              >
                <Database size={18} style={{ color: '#f72c4f' }} />
              </motion.div>

              <motion.div 
                className="absolute top-1/4 -right-10 w-10 h-10 glass-effect rounded-lg flex items-center justify-center shadow-lg border border-pink-500/20"
                style={{ background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(40, 40, 40, 0.8))' }}
                animate={{ 
                  x: [5, -5, 5],
                  y: [-3, 3, -3]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ scale: 1.15 }}
              >
                <Globe size={16} style={{ color: '#f72c4f' }} />
              </motion.div>

              {/* Enhanced stats floating cards */}
              <motion.div 
                className="absolute -left-12 top-20"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <InteractiveCard 
                  className="p-5 shadow-2xl border border-pink-500/20"
                  style={{ background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.95), rgba(40, 40, 40, 0.9))' }}
                >
                  <div className="text-center">
                    <motion.div 
                      className="text-3xl font-bold gradient-text mb-1"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                    >
                      2.5+
                    </motion.div>
                    <div className="text-xs text-gray-400 font-medium">Years Exp</div>
                  </div>
                </InteractiveCard>
              </motion.div>

              <motion.div 
                className="absolute -right-12 bottom-20"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
              >
                <InteractiveCard 
                  className="p-5 shadow-2xl border border-pink-500/20"
                  style={{ background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.95), rgba(40, 40, 40, 0.9))' }}
                >
                  <div className="text-center">
                    <motion.div 
                      className="text-3xl font-bold gradient-text mb-1"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 3 }}
                    >
                      25+
                    </motion.div>
                    <div className="text-xs text-gray-400 font-medium">Projects</div>
                  </div>
                </InteractiveCard>
              </motion.div>
              
              {/* Additional decorative elements */}
              <motion.div
                className="absolute top-8 left-8 w-3 h-3 rounded-full"
                style={{ background: 'linear-gradient(135deg, #f72c4f, #e91e63)' }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
              
              <motion.div
                className="absolute bottom-12 right-12 w-2 h-2 rounded-full"
                style={{ background: 'linear-gradient(135deg, #e91e63, #f72c4f)' }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Enhanced scroll indicator with smooth scroll functionality */}
        <motion.div 
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToNextSection}
        >
          <motion.div 
            className="flex flex-col items-center gap-2 group"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm text-gray-400 font-medium group-hover:text-white transition-colors duration-300">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={24} className="text-gray-400 group-hover:text-pink-400 transition-colors duration-300" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;