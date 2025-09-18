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

  const platforms = [
    {
      name: 'phidata',
      logo: '/phidata-logo.svg',
      category: 'AI Platform'
    },
    {
      name: 'Relevance AI',
      logo: '/relevance-ai-logo.svg',
      category: 'AI Platform'
    },
    {
      name: 'make',
      logo: '/make-logo.svg',
      category: 'Automation'
    },
    {
      name: 'Bland®',
      logo: '/bland-logo.svg',
      category: 'AI Voice'
    },
    {
      name: 'zapier',
      logo: '/zapier-logo.svg',
      category: 'Automation'
    },
    {
      name: 'VAPI',
      logo: '/vapi-logo.svg',
      category: 'Voice AI'
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

          {/* AI Agent Platforms Section - Exact Match */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-16">
              <motion.div 
                className="inline-block px-4 py-2 rounded-full mb-8"
                style={{ 
                  background: 'rgba(139, 69, 255, 0.2)', 
                  border: '1px solid rgba(139, 69, 255, 0.3)',
                  color: '#8B45FF'
                }}
              >
                <span className="text-sm font-medium tracking-wider">Tools & Platforms</span>
              </motion.div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                AI Agent Platforms
              </h2>
              
              <p className="text-lg text-gray-300 max-w-5xl mx-auto leading-relaxed mb-16">
                My AI agent development process combines both platform-based and custom solutions. I leverage established 
                AI platforms for rapid prototyping and proof-of-concepts, allowing quick validation of ideas through 
                a low-code approach. Once the concept is proven, I transition to building sophisticated, custom AI agents using high-code 
                development. This hybrid methodology significantly accelerates development while ensuring scalability and customization. The platforms serve as a foundation, upon 
                which I build tailored solutions that precisely match each client's unique requirements and integrate seamlessly with their existing systems.
              </p>
            </div>

            {/* Platforms Carousel - Exact Match */}
            <div className="relative">
              <div 
                className="rounded-3xl p-12 relative overflow-hidden"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(20, 30, 40, 0.9), rgba(10, 20, 30, 0.8))',
                  border: '1px solid rgba(139, 69, 255, 0.2)'
                }}
              >
                {/* Navigation Arrows */}
                <motion.button
                  className="absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)'
                  }}
                  whileHover={{ scale: 1.1, background: 'rgba(139, 69, 255, 0.2)' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft size={20} className="text-white" />
                </motion.button>

                <motion.button
                  className="absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)'
                  }}
                  whileHover={{ scale: 1.1, background: 'rgba(139, 69, 255, 0.2)' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight size={20} className="text-white" />
                </motion.button>

                {/* Platforms Display */}
                <div className="flex items-center justify-center gap-16 px-20">
                  {/* phidata */}
                  <motion.div
                    className="flex items-center gap-3 text-white text-2xl font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                      <div className="w-6 h-6 bg-black rounded-sm"></div>
                    </div>
                    <span>phidata</span>
                  </motion.div>

                  {/* Relevance AI */}
                  <motion.div
                    className="flex items-center gap-3 text-2xl font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    <span style={{ color: '#3B82F6' }}>Relevance AI</span>
                  </motion.div>

                  {/* make */}
                  <motion.div
                    className="text-white text-2xl font-bold"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      ⚡ make
                    </span>
                  </motion.div>

                  {/* Bland® */}
                  <motion.div
                    className="text-white text-2xl font-bold"
                    whileHover={{ scale: 1.05 }}
                  >
                    Bland<sup className="text-sm">®</sup>
                  </motion.div>

                  {/* zapier */}
                  <motion.div
                    className="text-2xl font-bold"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span style={{ color: '#FF4A00' }}>zapier</span>
                    <span className="text-red-500 text-lg ml-1">*</span>
                  </motion.div>

                  {/* VAPI */}
                  <motion.div
                    className="text-2xl font-bold"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
                      VAPI
                    </span>
                  </motion.div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-12">
                  {[0, 1, 2, 3].map((dot, index) => (
                    <motion.div
                      key={index}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === 0 ? 'w-8 bg-blue-500' : 'w-2 bg-gray-600'
                      }`}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsTools;