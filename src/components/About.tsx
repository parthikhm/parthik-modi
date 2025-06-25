import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, MapPin, Code, Zap, Users } from 'lucide-react';

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
    { icon: Zap, value: '5+', label: 'Projects Completed' },
    { icon: Users, value: '25+', label: 'Happy Clients' }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
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

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-3xl font-bold mb-6 gradient-text">My Story</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Dedicated and skilled Laravel Developer with 2.5 years of experience in building robust web applications. 
                  I specialize in Shopify backend development, automation with n8n, API integrations, and custom workflows.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Passionate about crafting scalable tools and modern solutions that drive business growth. 
                  I thrive on turning complex problems into elegant, efficient code that makes a real difference.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-effect p-6 rounded-xl text-center hover:pulse-glow transition-all duration-300"
                  >
                    <stat.icon size={32} className="mx-auto mb-3 text-indigo-400" />
                    <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-effect p-8 rounded-2xl hover:pulse-glow transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Education & Achievements</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-indigo-500 pl-6">
                    <h4 className="text-xl font-semibold text-white mb-2">Master of Computer Applications</h4>
                    <p className="text-gray-400 mb-1">HNGU University</p>
                    <p className="text-indigo-400 font-semibold">CGPA: 9.00</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="text-xl font-semibold text-white mb-2">Bachelor of Computer Applications</h4>
                    <p className="text-gray-400 mb-1">HNGU University</p>
                    <p className="text-purple-400 font-semibold">CGPA: 7.50</p>
                  </div>
                </div>
              </div>

              <div className="glass-effect p-8 rounded-2xl hover:pulse-glow transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Quick Facts</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Calendar size={20} className="text-indigo-400" />
                    <span>2.5+ Years Professional Experience</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin size={20} className="text-indigo-400" />
                    <span>Available for Remote Work Worldwide</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Award size={20} className="text-indigo-400" />
                    <span>Top Academic Performance (9.00 CGPA)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;