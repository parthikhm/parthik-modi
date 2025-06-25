import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase, ArrowRight } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    {
      title: 'Shopify + n8n Automation Developer',
      company: 'Metizsoft',
      period: 'Jan 2025 – Present',
      location: 'Remote',
      description: 'Developing advanced Shopify automation solutions and n8n workflows for e-commerce businesses. Creating intelligent automation systems that streamline business processes and enhance operational efficiency.',
      achievements: [
        'Built automated inventory management systems',
        'Developed custom Shopify app integrations',
        'Created complex n8n workflows for client automation'
      ],
      current: true,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Laravel Developer',
      company: 'Hackberry Softech',
      period: 'Feb 2023 – Jan 2025',
      location: 'Remote',
      description: 'Built robust web applications using Laravel, integrated APIs, and developed custom solutions for various clients. Focused on creating scalable, maintainable code and delivering high-quality software solutions.',
      achievements: [
        'Developed 15+ Laravel web applications',
        'Integrated multiple third-party APIs',
        'Improved application performance by 40%',
        'Mentored junior developers'
      ],
      current: false,
      color: 'from-blue-500 to-indigo-600'
    }
  ];

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

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
            <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
              My professional journey in building exceptional web applications and automation solutions.
            </p>
          </motion.div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full hidden md:block" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <motion.div 
                    className="absolute left-6 top-8 w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full hidden md:block pulse-glow"
                    whileHover={{ scale: 1.2 }}
                  />
                  
                  <motion.div 
                    className="md:ml-20 glass-effect p-8 rounded-2xl hover:pulse-glow transition-all duration-300 group"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                          {exp.title}
                        </h3>
                        <h4 className="text-xl text-gray-300 mb-3">{exp.company}</h4>
                      </div>
                      {exp.current && (
                        <motion.span 
                          className="inline-block px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full text-sm font-medium pulse-glow"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Current Position
                        </motion.span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-6 mb-6 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={18} className="text-indigo-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={18} className="text-indigo-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div>
                      <h5 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Briefcase size={18} className="text-indigo-400" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3 text-gray-300">
                            <ArrowRight size={16} className="text-indigo-400 mt-1 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;