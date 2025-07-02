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
    { icon: Code, value: '2.5+', label: 'Years Experience' },
    { icon: Target, value: '25+', label: 'Projects Delivered' },
    { icon: Users, value: '100%', label: 'Client Satisfaction' },
    { icon: TrendingUp, value: '100%', label: 'Success Rate' }
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

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Professional Summary */}
            <motion.div variants={itemVariants} className="space-y-8">
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
                  
                  <p>
                    My track record includes developing high-performance e-commerce platforms, implementing complex automation workflows, 
                    and creating custom integrations that have collectively saved clients hundreds of hours and significantly improved their operational efficiency.
                  </p>
                </div>
              </InteractiveCard>

              {/* Performance Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.05, y: -5 }}>
                    <InteractiveCard className="p-6 text-center">
                      <stat.icon size={32} className="mx-auto mb-3" style={{ color: '#f72c4f' }} />
                      <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </InteractiveCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education and Highlights */}
            <motion.div variants={itemVariants} className="space-y-8">
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;