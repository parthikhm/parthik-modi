import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, MapPin, Code, Zap, Users, Target, TrendingUp } from 'lucide-react';
import InteractiveCard from './InteractiveCard';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const stats = [
    { value: '2.5+', label: 'Years Experience' },
    { value: '25+', label: 'Projects Delivered' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '100%', label: 'Success Rate' }
  ];

  return (
    <section id="about" className="py-20 px-4" style={{ background: 'linear-gradient(to bottom, #060606, #0a0a0a)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
          </motion.div>

          {/* Stats Cards Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <InteractiveCard 
                  className={`p-6 text-center h-full flex flex-col justify-center ${
                    index === 0 ? 'lg:col-span-1' : ''
                  }`}
                  style={index === 0 ? { 
                    background: 'linear-gradient(135deg, rgba(247, 44, 79, 0.8), rgba(139, 69, 19, 0.6))',
                    minHeight: '160px'
                  } : { 
                    background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(40, 40, 40, 0.8))',
                    minHeight: '160px'
                  }}
                >
                  {index === 0 ? (
                    // Special design for Years Experience card
                    <div className="relative">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <motion.div 
                          className="text-4xl lg:text-5xl font-black text-white"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        >
                          {stat.value}
                        </motion.div>
                      </div>
                      <div className="text-white text-sm lg:text-base font-medium leading-tight">
                        {stat.label}
                      </div>
                      <p className="text-white/80 text-xs mt-2 leading-relaxed">
                        Professional development expertise
                      </p>
                    </div>
                  ) : (
                    // Regular design for other stats
                    <>
                      <motion.div 
                        className="text-3xl lg:text-4xl font-black text-white mb-2"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-gray-300 text-sm lg:text-base font-medium leading-tight">
                        {stat.label}
                      </div>
                    </>
                  )}
                </InteractiveCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Professional Summary Section */}
          <motion.div variants={itemVariants}>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Professional Summary */}
              <InteractiveCard>
                <h3 className="text-3xl font-bold mb-6 gradient-text">Professional Summary</h3>
                
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    As a dedicated Laravel Developer and Automation Specialist with <strong className="text-white">2.5+ years of intensive experience</strong>, 
                    I've successfully delivered <strong className="text-white">25+ projects</strong> across diverse industries, maintaining a 
                    <strong className="gradient-text"> 100% client satisfaction rate</strong> and perfect project success record.
                  </p>
                  
                  <p>
                    My expertise spans robust web application development, Shopify backend solutions, and intelligent automation systems using n8n and AI integration. 
                    I specialize in transforming complex business requirements into scalable, efficient solutions that drive measurable growth and operational excellence.
                  </p>
                  
                  <p>
                    What sets me apart is my commitment to delivering not just functional code, but strategic solutions that create tangible business value. 
                    Every project I undertake is approached with meticulous attention to detail, ensuring optimal performance, security, and user experience.
                  </p>
                </div>
              </InteractiveCard>

              {/* Education and Highlights */}
              <div className="space-y-8">
                {/* Education */}
                <InteractiveCard>
                  <h3 className="text-2xl font-bold mb-6 gradient-text">Education & Achievements</h3>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 pl-6" style={{ borderColor: '#f72c4f' }}>
                      <h4 className="text-xl font-semibold text-white mb-2">Master of Computer Applications</h4>
                      <p className="text-gray-400 mb-1">HNGU University</p>
                      <p className="font-semibold" style={{ color: '#f72c4f' }}>CGPA: 9.00 (Outstanding Performance)</p>
                    </div>
                    
                    <div className="border-l-4 pl-6" style={{ borderColor: '#e91e63' }}>
                      <h4 className="text-xl font-semibold text-white mb-2">Bachelor of Computer Applications</h4>
                      <p className="text-gray-400 mb-1">HNGU University</p>
                      <p className="font-semibold" style={{ color: '#e91e63' }}>CGPA: 7.50</p>
                    </div>
                  </div>
                </InteractiveCard>

                {/* Professional Highlights */}
                <InteractiveCard>
                  <h3 className="text-2xl font-bold mb-6 gradient-text">Professional Highlights</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-300">
                      <Calendar size={20} style={{ color: '#f72c4f' }} />
                      <span>Consistent delivery within deadlines across all projects</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <MapPin size={20} style={{ color: '#f72c4f' }} />
                      <span>Global client base with 24/7 remote collaboration</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Award size={20} style={{ color: '#f72c4f' }} />
                      <span>Specialized in high-performance, scalable solutions</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Zap size={20} style={{ color: '#f72c4f' }} />
                      <span>Expert in automation and AI integration</span>
                    </div>
                  </div>
                </InteractiveCard>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;