import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Zap, 
  Database, 
  Globe, 
  Layers, 
  Settings,
  Server,
  Workflow,
  Brain,
  Link,
  ChevronRight,
  Star,
  TrendingUp
} from 'lucide-react';
import InteractiveCard from './InteractiveCard';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      id: 'development',
      title: 'Development Skills',
      subtitle: 'Core Programming & Frameworks',
      icon: Code,
      color: 'from-blue-500 via-indigo-500 to-purple-600',
      bgGradient: 'from-blue-500/10 to-indigo-500/5',
      skills: [
        { 
          name: 'Laravel', 
          level: 93, 
          description: 'Advanced PHP framework with MVC architecture',
          icon: Server,
          projects: '15+ projects'
        },
        { 
          name: 'MySQL', 
          level: 76, 
          description: 'Database design, optimization & complex queries',
          icon: Database,
          projects: '20+ databases'
        },
        { 
          name: 'JavaScript & Ajax', 
          level: 72, 
          description: 'Dynamic frontend interactions & async operations',
          icon: Globe,
          projects: '25+ implementations'
        },
        { 
          name: 'API Integration', 
          level: 88, 
          description: 'RESTful APIs, third-party services & webhooks',
          icon: Link,
          projects: '30+ integrations'
        }
      ]
    },
    {
      id: 'automation',
      title: 'Automation & Integration',
      subtitle: 'Workflow Automation & AI',
      icon: Zap,
      color: 'from-pink-500 via-red-500 to-orange-500',
      bgGradient: 'from-pink-500/10 to-red-500/5',
      skills: [
        { 
          name: 'n8n Automation', 
          level: 70, 
          description: 'Visual workflow automation platform',
          icon: Workflow,
          projects: '10+ workflows'
        },
        { 
          name: 'Workflow Design', 
          level: 81, 
          description: 'Process optimization & business logic',
          icon: Settings,
          projects: '15+ processes'
        },
        { 
          name: 'AI Implementation', 
          level: 85, 
          description: 'OpenAI, GPT integration & intelligent systems',
          icon: Brain,
          projects: '8+ AI projects'
        },
        { 
          name: 'System Integration', 
          level: 88, 
          description: 'Seamless platform connections & data sync',
          icon: Layers,
          projects: '20+ integrations'
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
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
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(247, 44, 79, 0.1)', border: '1px solid rgba(247, 44, 79, 0.2)' }}
            >
              <Star size={16} style={{ color: '#f72c4f' }} />
              <span className="text-sm font-medium text-gray-300">Technical Expertise</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
            <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed">
              Mastering cutting-edge technologies to build exceptional digital solutions that drive business growth
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex justify-center mb-12">
            <div className="flex gap-2 p-2 rounded-2xl" style={{ background: 'rgba(20, 20, 20, 0.8)' }}>
              {skillCategories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeCategory === index
                      ? 'text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  style={activeCategory === index ? { 
                    background: 'linear-gradient(135deg, #f72c4f, #e91e63)' 
                  } : {}}
                >
                  <category.icon size={20} />
                  <span className="font-medium">{category.title}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Active Category Content */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {skillCategories.map((category, categoryIndex) => (
              activeCategory === categoryIndex && (
                <div key={category.id}>
                  {/* Category Header */}
                  <motion.div 
                    variants={itemVariants}
                    className="text-center mb-12"
                  >
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <div 
                        className={`w-20 h-20 rounded-3xl flex items-center justify-center bg-gradient-to-br ${category.color}`}
                      >
                        <category.icon size={32} className="text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-3xl font-bold text-white">{category.title}</h3>
                        <p className="text-gray-400">{category.subtitle}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Skills Grid */}
                  <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <InteractiveCard className="h-full">
                          <div className="flex items-start gap-4 mb-6">
                            <div 
                              className="w-14 h-14 rounded-2xl flex items-center justify-center"
                              style={{ background: `linear-gradient(135deg, rgba(247, 44, 79, 0.2), rgba(233, 30, 99, 0.1))` }}
                            >
                              <skill.icon size={24} style={{ color: '#f72c4f' }} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="text-xl font-bold text-white">
                                  {skill.name}
                                </h4>
                                <div 
                                  className="flex items-center gap-2 px-3 py-1 rounded-full text-white text-sm font-bold"
                                  style={{ background: 'linear-gradient(135deg, #f72c4f, #e91e63)' }}
                                >
                                  <TrendingUp size={14} />
                                  {skill.level}%
                                </div>
                              </div>
                              <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                                {skill.description}
                              </p>
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <ChevronRight size={12} />
                                <span>{skill.projects}</span>
                              </div>
                            </div>
                          </div>

                          {/* Progress Bar */}
                          <div className="relative">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-xs text-gray-500">Proficiency Level</span>
                              <span className="text-xs text-gray-500">Expert</span>
                            </div>
                            <div 
                              className="w-full rounded-full h-3 overflow-hidden relative"
                              style={{ backgroundColor: '#1a1a1a' }}
                            >
                              <motion.div
                                className="h-full rounded-full relative overflow-hidden"
                                style={{ 
                                  background: `linear-gradient(135deg, #f72c4f, #e91e63)`,
                                  width: `${skill.level}%`
                                }}
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: skillIndex * 0.1 }}
                              >
                                <div className="absolute inset-0 bg-white/10"></div>
                              </motion.div>
                            </div>
                          </div>
                        </InteractiveCard>
                      </div>
                    ))}
                  </div>

                  {/* Category Summary */}
                  <motion.div 
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.5 }}
                  >
                    <InteractiveCard>
                      <div className="text-center">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          <div>
                            <div className="text-3xl font-bold gradient-text mb-2">
                              {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                            </div>
                            <p className="text-gray-400 text-sm">Average Proficiency</p>
                          </div>
                          <div>
                            <div className="text-3xl font-bold gradient-text mb-2">
                              {category.skills.length}
                            </div>
                            <p className="text-gray-400 text-sm">Core Technologies</p>
                          </div>
                          <div>
                            <div className="text-3xl font-bold gradient-text mb-2">
                              {category.id === 'development' ? '2.5+' : '1.5+'}
                            </div>
                            <p className="text-gray-400 text-sm">Years Experience</p>
                          </div>
                        </div>
                      </div>
                    </InteractiveCard>
                  </motion.div>
                </div>
              )
            ))}
          </motion.div>

          {/* Technology Stack Overview */}
          <motion.div 
            variants={itemVariants}
            className="mt-20"
          >
            <InteractiveCard>
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #f72c4f, #e91e63)' }}
                  >
                    <Settings size={28} className="text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold gradient-text">Technology Ecosystem</h3>
                    <p className="text-gray-400">Comprehensive technical stack</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Leveraging modern technologies and industry best practices to deliver scalable, 
                  maintainable, and high-performance solutions that exceed client expectations
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { icon: Server, label: 'Backend', count: '4+', description: 'Server Technologies' },
                    { icon: Globe, label: 'Frontend', count: '3+', description: 'UI/UX Frameworks' },
                    { icon: Zap, label: 'Automation', count: '4+', description: 'Workflow Tools' },
                    { icon: Database, label: 'Integration', count: '10+', description: 'API Connections' }
                  ].map((tech, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="p-6 rounded-2xl transition-all duration-300" style={{ background: 'rgba(247, 44, 79, 0.05)' }}>
                        <div 
                          className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300"
                          style={{ background: 'rgba(247, 44, 79, 0.1)' }}
                        >
                          <tech.icon size={28} style={{ color: '#f72c4f' }} />
                        </div>
                        <div className="text-2xl font-bold gradient-text mb-2">{tech.count}</div>
                        <h4 className="font-semibold text-white mb-1">{tech.label}</h4>
                        <p className="text-xs text-gray-400">{tech.description}</p>
                      </div>
                    </div>
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