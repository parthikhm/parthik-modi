import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Download, ArrowDown, Code2, Sparkles, Zap } from 'lucide-react';

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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#060606' }}>
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0" style={{ backgroundColor: '#060606' }}>
        <div className="particle-bg">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${Math.random() * 15 + 10}s`,
                background: 'rgba(247, 44, 79, 0.3)'
              }}
            />
          ))}
        </div>
        
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full animate-pulse" style={{ border: '1px solid rgba(247, 44, 79, 0.3)' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-lg rotate-45 floating-animation" style={{ background: 'linear-gradient(135deg, rgba(247, 44, 79, 0.2), rgba(233, 30, 99, 0.2))' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 rotate-12 floating-animation" style={{ border: '2px solid rgba(247, 44, 79, 0.4)', animationDelay: '2s' }}></div>
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
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles size={16} style={{ color: '#f72c4f' }} />
                <span className="text-sm font-medium text-gray-300">Available for Projects</span>
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#f72c4f' }}></div>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <span className="text-white">Hi, I'm</span>
                <br />
                <span className="gradient-text">Parthik</span>
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

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.a 
                href="mailto:parthikmodi43@gmail.com"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-3 gradient-bg rounded-full hover:shadow-2xl transition-all duration-300 group text-white"
              >
                <Mail size={20} />
                <span className="font-medium">Let's Talk</span>
                <Zap size={16} className="group-hover:rotate-12 transition-transform duration-300" />
              </motion.a>
              
              <motion.a 
                href="tel:+919173281097"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-3 glass-effect rounded-full hover:pulse-glow transition-all duration-300"
              >
                <Phone size={20} />
                <span className="font-medium">Call Now</span>
              </motion.a>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-4"
            >
              {[
                { icon: Github, href: 'https://github.com/parthikhm', label: 'GitHub', color: 'hover:text-gray-300' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/parthikhm/', label: 'LinkedIn', color: 'hover:text-blue-400' },
                { icon: Mail, href: 'mailto:parthikmodi43@gmail.com', label: 'Email', color: 'hover:text-red-400' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:pulse-glow transition-all duration-300 ${social.color}`}
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
              {/* Background decorative elements */}
              <div className="absolute -inset-4 rounded-full blur-2xl" style={{ background: 'linear-gradient(135deg, rgba(247, 44, 79, 0.2), rgba(233, 30, 99, 0.2))' }}></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-xl" style={{ background: 'linear-gradient(135deg, rgba(247, 44, 79, 0.1), rgba(233, 30, 99, 0.1))' }}></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full blur-xl" style={{ background: 'linear-gradient(135deg, rgba(247, 44, 79, 0.1), rgba(233, 30, 99, 0.1))' }}></div>
              
              {/* Main image container */}
              <motion.div 
                className="relative w-80 h-80 lg:w-96 lg:h-96 glass-effect rounded-full p-2 hover:pulse-glow transition-all duration-500"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(247, 44, 79, 0.2), rgba(233, 30, 99, 0.2))' }}>
                  <img 
                    src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Parthik Modi - Laravel Developer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                {/* Floating tech icons */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-16 h-16 glass-effect rounded-full flex items-center justify-center"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Code2 size={24} style={{ color: '#f72c4f' }} />
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-14 h-14 glass-effect rounded-full flex items-center justify-center"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <Zap size={20} style={{ color: '#f72c4f' }} />
                </motion.div>
                
                <motion.div 
                  className="absolute top-1/2 -right-6 w-12 h-12 glass-effect rounded-full flex items-center justify-center"
                  animate={{ x: [-5, 5, -5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  <Sparkles size={18} style={{ color: '#f72c4f' }} />
                </motion.div>
              </motion.div>

              {/* Stats floating cards */}
              <motion.div 
                className="absolute -left-8 top-16 glass-effect p-4 rounded-xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">2.5+</div>
                  <div className="text-xs text-gray-400">Years Exp</div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -right-8 bottom-16 glass-effect p-4 rounded-xl"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">25+</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 floating-animation"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-400 font-medium">Scroll to explore</span>
            <ArrowDown size={24} className="text-gray-400" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;