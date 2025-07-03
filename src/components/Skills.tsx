import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Zap, Database, Globe, Layers, Settings } from 'lucide-react';
import InteractiveCard from './InteractiveCard';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: 'Development Skills',
      icon: Code,
      color: 'from-blue-500 to-indigo-600',
      skills: [
        { name: 'Laravel', level: 93, description: 'Advanced PHP framework expertise' },
        { name: 'MySQL', level: 76, description: 'Database design & optimization' },
        { name: 'JavaScript & Ajax', level: 72, description: 'Dynamic frontend interactions' },
        { name: 'API Integration', level: 88, description: 'Third-party service connections' }
      ]
    },
    {
      title: 'Automation & Integration',
      icon: Zap,
      color: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'n8n Automation', level: 70, description: 'Workflow automation platform' },
        { name: 'Workflow Design', level: 81, description: 'Process optimization strategies' },
        { name: 'AI Implementation', level: 85, description: 'Intelligent system integration' },
        { name: 'System Integration', level: 88, description: 'Seamless platform connections' }
      ]
    }
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

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
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
              Mastering cutting-edge technologies to build exceptional digital solutions
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex}
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <InteractiveCard className="h-full">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${category.color}`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <category.icon size={28} className="text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                      <p className="text-gray-400 text-sm">Professional expertise level</p>
                    </div>
                  </div>
                  
                  {/* Skills List */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skillIndex} 
                        className="group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 
                        }}
                      >
                        {/* Skill Header */}
                        <div className="flex justify-between items-center mb-3">
                          <div>
                            <span className="text-lg font-semibold text-white group-hover:gradient-text transition-all duration-300">
                              {skill.name}
                            </span>
                            <p className="text-xs text-gray-400 mt-1">{skill.description}</p>
                          </div>
                          <motion.span 
                            className="text-xl font-bold px-3 py-1 rounded-full text-white"
                            style={{ background: `linear-gradient(135deg, #f72c4f, #e91e63)` }}
                            initial={{ scale: 0 }}
                            animate={inView ? { scale: 1 } : { scale: 0 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 
                            }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="relative">
                          <div 
                            className="w-full rounded-full h-3 overflow-hidden" 
                            style={{ backgroundColor: '#1a1a1a' }}
                          >
                            <motion.div
                              className="h-full rounded-full relative overflow-hidden"
                              style={{ background: `linear-gradient(135deg, #f72c4f, #e91e63)` }}
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ 
                                duration: 1.5, 
                                delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                                ease: "easeOut"
                              }}
                            >
                              {/* Animated shine effect */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                initial={{ x: '-100%' }}
                                animate={{ x: '100%' }}
                                transition={{
                                  duration: 2,
                                  delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1,
                                  ease: "easeInOut"
                                }}
                              />
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Category Footer */}
                  <motion.div 
                    className="mt-8 pt-6 border-t border-gray-700"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: categoryIndex * 0.2 + 1 }}
                  >
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>Average Proficiency</span>
                      <span className="font-bold gradient-text">
                        {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                      </span>
                    </div>
                  </motion.div>
                </InteractiveCard>
              </motion.div>
            ))}
          </div>

          {/* Technology Stack Overview */}
          <motion.div 
            variants={itemVariants}
            className="mt-16"
          >
            <InteractiveCard>
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f72c4f, #e91e63)' }}>
                    <Settings size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">Technology Stack</h3>
                </div>
                
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Leveraging modern technologies and best practices to deliver scalable, maintainable, and high-performance solutions
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { icon: Database, label: 'Backend', count: '4+' },
                    { icon: Globe, label: 'Frontend', count: '3+' },
                    { icon: Zap, label: 'Automation', count: '4+' },
                    { icon: Layers, label: 'Integration', count: '10+' }
                  ].map((tech, index) => (
                    <motion.div
                      key={index}
                      className="text-center group"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-16 h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center group-hover:pulse-glow transition-all duration-300" style={{ background: 'rgba(247, 44, 79, 0.1)' }}>
                        <tech.icon size={24} style={{ color: '#f72c4f' }} />
                      </div>
                      <h4 className="font-semibold text-white text-sm">{tech.label}</h4>
                      <p className="text-xs text-gray-400">{tech.count} Technologies</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </InteractiveCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;