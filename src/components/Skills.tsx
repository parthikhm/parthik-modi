import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Zap } from 'lucide-react';
import InteractiveCard from './InteractiveCard';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const developmentSkills = [
    { name: 'Laravel', level: 93 },
    { name: 'MySQL', level: 76 },
    { name: 'JavaScript & Ajax', level: 72 },
    { name: 'API Integration', level: 88 }
  ];

  const automationSkills = [
    { name: 'n8n Automation', level: 70 },
    { name: 'Workflow Design', level: 81 },
    { name: 'AI Implementation', level: 85 },
    { name: 'System Integration', level: 88 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-4" style={{ background: 'linear-gradient(to bottom, #0a0a0a, #060606)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
            <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
              Expertise in modern development technologies and automation solutions that drive business growth.
            </p>
          </motion.div>

          {/* Skills Progress Bars */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Development Skills */}
            <motion.div variants={itemVariants}>
              <InteractiveCard>
                <div className="flex items-center gap-3 mb-8">
                  <Code size={28} style={{ color: '#f72c4f' }} />
                  <h3 className="text-2xl font-bold gradient-text">Development Skills</h3>
                </div>
                
                <div className="space-y-6">
                  {developmentSkills.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-lg font-medium text-white group-hover:gradient-text transition-all duration-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold" style={{ color: '#f72c4f' }}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full rounded-full h-2 overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
                          <motion.div
                            className="h-full rounded-full relative"
                            style={{ background: 'linear-gradient(135deg, #f72c4f, #e91e63)' }}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ 
                              duration: 1.5, 
                              delay: index * 0.1,
                              ease: "easeOut"
                            }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </InteractiveCard>
            </motion.div>

            {/* API Integration Skills */}
            <motion.div variants={itemVariants}>
              <InteractiveCard>
                <div className="flex items-center gap-3 mb-8">
                  <Zap size={28} style={{ color: '#f72c4f' }} />
                  <h3 className="text-2xl font-bold gradient-text">API Integration</h3>
                </div>
                
                <div className="space-y-6">
                  {automationSkills.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-lg font-medium text-white group-hover:gradient-text transition-all duration-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold" style={{ color: '#f72c4f' }}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full rounded-full h-2 overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
                          <motion.div
                            className="h-full rounded-full relative"
                            style={{ background: 'linear-gradient(135deg, #f72c4f, #e91e63)' }}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ 
                              duration: 1.5, 
                              delay: index * 0.1 + 0.3,
                              ease: "easeOut"
                            }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </InteractiveCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;