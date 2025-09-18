import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Star, Database, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import InteractiveCard from './InteractiveCard';

const StatsTools = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    {
      icon: Code,
      value: '25+',
      label: 'Total Projects',
      description: 'Successfully delivered projects'
    },
    {
      icon: Star,
      value: '100%',
      label: 'Client Satisfaction',
      description: 'Happy clients worldwide'
    },
    {
      icon: Database,
      value: '15+',
      label: 'Technologies Used',
      description: 'Modern tech stack'
    },
    {
      icon: TrendingUp,
      value: '100%',
      label: 'Success Rate',
      description: 'Perfect project delivery'
    }
  ];

  const tools = [
    {
      name: 'Laravel',
      logo: '/tools2.png',
      category: 'Backend Framework'
    },
    {
      name: 'MySQL',
      logo: '/tools4.png',
      category: 'Database'
    },
    {
      name: 'n8n',
      logo: '/freelancer_1.svg',
      category: 'Automation'
    },
    {
      name: 'Shopify',
      logo: '/tools2.png',
      category: 'E-commerce'
    },
    {
      name: 'JavaScript',
      logo: '/tools4.png',
      category: 'Programming'
    },
    {
      name: 'API Integration',
      logo: '/freelancer_1.svg',
      category: 'Integration'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-4" style={{ background: 'linear-gradient(to bottom, #060606, #0a0a0a)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Stats Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Project Impact & Results</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                >
                  <InteractiveCard 
                    className="text-center p-6 h-full"
                    style={{ 
                      background: 'rgba(20, 20, 20, 0.8)',
                      border: '1px solid rgba(247, 44, 79, 0.2)'
                    }}
                  >
                    <div 
                      className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                      style={{ background: 'rgba(247, 44, 79, 0.1)' }}
                    >
                      <stat.icon size={28} style={{ color: '#f72c4f' }} />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-white font-semibold mb-2">
                      {stat.label}
                    </div>
                    <p className="text-gray-400 text-sm">
                      {stat.description}
                    </p>
                  </InteractiveCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Platforms Section */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <motion.div 
                className="inline-block px-4 py-2 rounded-full mb-6"
                style={{ background: 'rgba(247, 44, 79, 0.1)', border: '1px solid rgba(247, 44, 79, 0.2)' }}
              >
                <span className="text-sm font-medium text-gray-300">Tools & Platforms</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Technology Stack
              </h2>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                My development process combines both platform-based and custom solutions. I leverage established 
                platforms for rapid prototyping and proof-of-concepts, allowing quick validation of ideas through 
                a low-code approach. Once the concept is proven, I transition to building sophisticated, custom 
                solutions using high-code development.
              </p>
            </div>

            {/* Tools Carousel */}
            <div className="relative">
              <InteractiveCard 
                className="p-8"
                style={{ 
                  background: 'rgba(20, 20, 20, 0.6)',
                  border: '1px solid rgba(247, 44, 79, 0.1)'
                }}
              >
                <div className="flex items-center justify-between mb-8">
                  <motion.button
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{ background: 'rgba(247, 44, 79, 0.1)', border: '1px solid rgba(247, 44, 79, 0.2)' }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft size={20} style={{ color: '#f72c4f' }} />
                  </motion.button>

                  <div className="flex-1 overflow-hidden mx-8">
                    <motion.div 
                      className="flex items-center justify-center gap-12"
                      animate={{ x: [0, -100, 0] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      {[...tools, ...tools].map((tool, index) => (
                        <motion.div
                          key={index}
                          className="flex-shrink-0 text-center group cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div 
                            className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300"
                            style={{ background: 'rgba(247, 44, 79, 0.1)' }}
                          >
                            <img 
                              src={tool.logo} 
                              alt={tool.name}
                              className="w-12 h-12 object-contain filter brightness-0 invert"
                              style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)' }}
                            />
                          </div>
                          <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-pink-400 transition-colors duration-300">
                            {tool.name}
                          </h4>
                          <p className="text-gray-400 text-xs">
                            {tool.category}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  <motion.button
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{ background: 'rgba(247, 44, 79, 0.1)', border: '1px solid rgba(247, 44, 79, 0.2)' }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight size={20} style={{ color: '#f72c4f' }} />
                  </motion.button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2">
                  {[0, 1, 2, 3].map((dot, index) => (
                    <motion.div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === 0 ? 'w-8' : ''
                      }`}
                      style={{ 
                        background: index === 0 ? '#f72c4f' : 'rgba(247, 44, 79, 0.3)'
                      }}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>
              </InteractiveCard>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsTools;