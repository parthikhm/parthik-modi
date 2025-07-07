import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, MapPin, Code, Zap, Users, Target, TrendingUp, Star, CheckCircle } from 'lucide-react';
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
        staggerChildren: 0.1
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

  const stats = [
    { 
      value: '2.5+', 
      label: 'Years Experience',
      description: 'Professional development expertise',
      icon: Calendar,
      color: 'from-pink-500 to-red-500'
    },
    { 
      value: '25+', 
      label: 'Projects Delivered',
      description: 'Successful implementations',
      icon: Target,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      value: '100%', 
      label: 'Client Satisfaction',
      description: 'Happy clients worldwide',
      icon: Star,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      value: '100%', 
      label: 'Success Rate',
      description: 'Perfect project delivery',
      icon: CheckCircle,
      color: 'from-purple-500 to-violet-500'
    }
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
            <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
              Passionate developer crafting exceptional digital experiences with cutting-edge technology
            </p>
          </motion.div>

          {/* Stats Cards Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index}>
                <InteractiveCard 
                  className="p-6 text-center h-full relative overflow-hidden"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.95), rgba(40, 40, 40, 0.9))',
                    minHeight: '180px',
                    border: '1px solid rgba(247, 44, 79, 0.1)'
                  }}
                >
                  {/* Icon */}
                  <div 
                    className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(247, 44, 79, 0.1)' }}
                  >
                    <stat.icon size={24} style={{ color: '#f72c4f' }} />
                  </div>

                  {/* Value */}
                  <div className="text-3xl lg:text-4xl font-black text-white mb-2">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-gray-300 text-sm lg:text-base font-semibold mb-2">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {stat.description}
                  </p>
                </InteractiveCard>
              </div>
            ))}
          </motion.div>

          {/* Main Content */}
          <motion.div variants={itemVariants}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Professional Journey - Spans 2 columns */}
              <div className="lg:col-span-2">
                <InteractiveCard className="h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f72c4f, #e91e63)' }}>
                      <Users size={24} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-bold gradient-text">Professional Journey</h3>
                  </div>
                  
                  <div className="space-y-6 text-gray-300 leading-relaxed">
                    <p className="text-lg">
                      As a dedicated <strong className="text-white">Laravel Developer and Automation Specialist</strong> with 
                      <strong className="gradient-text"> 2.5+ years of intensive experience</strong>, I've successfully delivered 
                      <strong className="text-white"> 25+ projects</strong> across diverse industries, maintaining a 
                      <strong className="gradient-text"> 100% client satisfaction rate</strong> and perfect project success record.
                    </p>
                    
                    <p>
                      My expertise spans robust web application development, Shopify backend solutions, and intelligent automation 
                      systems using n8n and AI integration. I specialize in transforming complex business requirements into 
                      scalable, efficient solutions that drive measurable growth and operational excellence.
                    </p>
                    
                    <p>
                      What sets me apart is my commitment to delivering not just functional code, but strategic solutions that 
                      create tangible business value. Every project I undertake is approached with meticulous attention to detail, 
                      ensuring optimal performance, security, and user experience.
                    </p>
                  </div>

                  {/* Key Strengths */}
                  <div className="mt-8 grid md:grid-cols-2 gap-4">
                    {[
                      'Consistent delivery within deadlines',
                      'Global client base collaboration',
                      'High-performance solutions',
                      'Expert automation integration'
                    ].map((strength, index) => (
                      <div key={index} className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 gradient-bg rounded-full"></div>
                        <span className="text-sm">{strength}</span>
                      </div>
                    ))}
                  </div>
                </InteractiveCard>
              </div>

              {/* Education & Achievements */}
              <div className="space-y-6">
                {/* Education */}
                <InteractiveCard>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(247, 44, 79, 0.2)' }}>
                      <Award size={20} style={{ color: '#f72c4f' }} />
                    </div>
                    <h3 className="text-xl font-bold gradient-text">Education</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border-l-2 pl-4" style={{ borderColor: '#f72c4f' }}>
                      <h4 className="font-semibold text-white text-sm">Master of Computer Applications</h4>
                      <p className="text-gray-400 text-xs">HNGU University</p>
                      <p className="font-semibold text-xs mt-1" style={{ color: '#f72c4f' }}>CGPA: 9.00</p>
                    </div>
                    
                    <div className="border-l-2 pl-4" style={{ borderColor: '#e91e63' }}>
                      <h4 className="font-semibold text-white text-sm">Bachelor of Computer Applications</h4>
                      <p className="text-gray-400 text-xs">HNGU University</p>
                      <p className="font-semibold text-xs mt-1" style={{ color: '#e91e63' }}>CGPA: 7.50</p>
                    </div>
                  </div>
                </InteractiveCard>

                {/* Quick Facts */}
                <InteractiveCard>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(247, 44, 79, 0.2)' }}>
                      <TrendingUp size={20} style={{ color: '#f72c4f' }} />
                    </div>
                    <h3 className="text-xl font-bold gradient-text">Quick Facts</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-300 text-sm">
                      <MapPin size={16} style={{ color: '#f72c4f' }} />
                      <span>Remote Work Specialist</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300 text-sm">
                      <Code size={16} style={{ color: '#f72c4f' }} />
                      <span>Full-Stack Development</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300 text-sm">
                      <Zap size={16} style={{ color: '#f72c4f' }} />
                      <span>Automation Expert</span>
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