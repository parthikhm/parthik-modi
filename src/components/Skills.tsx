import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Zap, Users, Award } from 'lucide-react';
import InteractiveCard from './InteractiveCard';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    {
      number: '2.5+',
      label: 'Years Of Experience',
      description: 'Professional development experience building robust web applications and automation solutions',
      icon: Award,
      gradient: 'from-pink-500 to-red-500'
    },
    {
      number: '25+',
      label: 'Projects Complete',
      description: 'Successfully delivered projects ranging from e-commerce platforms to automation systems',
      icon: Code,
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      number: '15+',
      label: 'Happy Clients',
      description: 'Satisfied clients across various industries with ongoing partnerships and referrals',
      icon: Users,
      gradient: 'from-green-500 to-teal-500'
    },
    {
      number: '100%',
      label: 'Project Success Rate',
      description: 'Consistent delivery of high-quality solutions meeting all project requirements',
      icon: Zap,
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  const developmentSkills = [
    { name: 'Laravel', level: 95 },
    { name: 'PHP', level: 92 },
    { name: 'Shopify', level: 88 },
    { name: 'n8n Automation', level: 90 },
    { name: 'OpenAI Integration', level: 85 },
    { name: 'Database Design', level: 87 }
  ];

  const automationSkills = [
    { name: 'Workflow Design', level: 93 },
    { name: 'API Integration', level: 90 },
    { name: 'Process Optimization', level: 88 },
    { name: 'AI Implementation', level: 85 },
    { name: 'System Integration', level: 87 },
    { name: 'Performance Tuning', level: 89 }
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

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative"
              >
                <InteractiveCard className="text-center h-full">
                  <div className="mb-4">
                    <stat.icon size={32} className="mx-auto mb-3" style={{ color: '#f72c4f' }} />
                  </div>
                  <motion.div
                    className="text-4xl font-bold gradient-text mb-2"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-3">{stat.label}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{stat.description}</p>
                </InteractiveCard>
              </motion.div>
            ))}
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

            {/* Automation Skills */}
            <motion.div variants={itemVariants}>
              <InteractiveCard>
                <div className="flex items-center gap-3 mb-8">
                  <Zap size={28} style={{ color: '#f72c4f' }} />
                  <h3 className="text-2xl font-bold gradient-text">Automation Skills</h3>
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