import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: 'Backend Development',
      skills: [
        { name: 'Laravel', level: 95, color: 'from-red-500 to-orange-500' },
        { name: 'PHP', level: 92, color: 'from-blue-500 to-purple-500' },
        { name: 'MySQL', level: 88, color: 'from-green-500 to-teal-500' },
        { name: 'APIs', level: 93, color: 'from-yellow-500 to-red-500' }
      ]
    },
    {
      title: 'Frontend & Platforms',
      skills: [
        { name: 'JavaScript', level: 87, color: 'from-yellow-400 to-orange-500' },
        { name: 'jQuery', level: 82, color: 'from-blue-400 to-indigo-500' },
        { name: 'Shopify', level: 85, color: 'from-green-400 to-blue-500' },
        { name: 'HTML/CSS', level: 90, color: 'from-pink-500 to-purple-500' }
      ]
    },
    {
      title: 'Automation & AI',
      skills: [
        { name: 'n8n', level: 90, color: 'from-purple-500 to-pink-500' },
        { name: 'OpenAI', level: 88, color: 'from-green-400 to-cyan-500' },
        { name: 'LangChain', level: 80, color: 'from-indigo-500 to-purple-600' },
        { name: 'Google APIs', level: 85, color: 'from-red-500 to-yellow-500' }
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

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
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
              A comprehensive toolkit of modern technologies and frameworks that I use to build exceptional digital experiences.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="glass-effect p-8 rounded-2xl hover:pulse-glow transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-8 gradient-text text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-lg font-medium text-white group-hover:gradient-text transition-all duration-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-400 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Additional Technologies</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {['Supabase', 'Zoho', 'Bootstrap', 'Retell AI', 'IVR Design', 'SEO', 'Prompt Engineering', 'GitHub'].map((tech, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 glass-effect rounded-full text-sm font-medium hover:gradient-text transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;