import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Globe, Code, Zap, Database } from 'lucide-react';
import InteractiveCard from './InteractiveCard';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'AfroBiz Finders',
      description: 'Local business discovery web application for African businesses with advanced search capabilities and SEO optimization.',
      url: 'https://afrobizfinders.com',
      tech: ['Laravel', 'MySQL', 'APIs', 'SEO'],
      category: 'web',
      featured: true,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Irish Holidays',
      description: 'Complete holiday booking and management system with payment integration and real-time availability.',
      url: 'https://www.irishholidays.in',
      tech: ['Laravel', 'Payment Integration', 'Booking System'],
      category: 'web',
      featured: true,
      image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Sarjan Homes',
      description: 'Real estate platform for property listings and management with advanced filtering and CRM integration.',
      url: 'https://sarjanhomes.in',
      tech: ['Laravel', 'Property Management', 'CRM'],
      category: 'web',
      featured: true,
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Blavitts Hopen',
      description: 'E-commerce platform with custom features, payment gateway integration, and inventory management.',
      url: 'https://blavittshopen.se',
      tech: ['Laravel', 'E-commerce', 'Payment Gateway'],
      category: 'web',
      featured: true,
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Voice-to-Action Telegram Bot',
      description: 'AI-powered Telegram bot with voice processing capabilities using OpenAI and advanced NLP.',
      tech: ['Python', 'OpenAI', 'Telegram API', 'Voice Processing'],
      category: 'automation',
      featured: false,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Auto Email Reply System',
      description: 'IMAP-based email automation with GPT-4 integration for intelligent response generation.',
      tech: ['PHP', 'IMAP', 'GPT-4', 'Automation'],
      category: 'automation',
      featured: false,
      image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Instagram Marketing Automation',
      description: 'Automated Instagram marketing with Gemini AI for content generation and scheduling.',
      tech: ['n8n', 'Instagram API', 'Gemini', 'Automation'],
      category: 'automation',
      featured: false,
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Prompt Collab',
      description: 'Hourly prompt generator for AI applications with collaborative features and scheduling.',
      tech: ['Laravel', 'AI Integration', 'Scheduling'],
      category: 'ai',
      featured: false,
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: Globe },
    { key: 'web', label: 'Web Apps', icon: Code },
    { key: 'automation', label: 'Automation', icon: Zap },
    { key: 'ai', label: 'AI Projects', icon: Database }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4" style={{ background: 'linear-gradient(to bottom, #0a0a0a, #060606)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
            <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
              A showcase of my recent work in web development, automation, and AI integration.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filterItem) => (
              <motion.button
                key={filterItem.key}
                onClick={() => setFilter(filterItem.key)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  filter === filterItem.key
                    ? 'text-white pulse-glow'
                    : 'glass-effect text-gray-300 hover:text-white'
                }`}
                style={filter === filterItem.key ? { background: 'linear-gradient(135deg, #f72c4f, #e91e63)' } : {}}
              >
                <filterItem.icon size={18} />
                <span className="font-medium">{filterItem.label}</span>
              </motion.button>
            ))}
          </motion.div>
          
          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={filter}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${filter}-${index}`}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <InteractiveCard className="overflow-hidden group">
                    {project.image && (
                      <div className="relative overflow-hidden h-48 -m-5 mb-5">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        {project.featured && (
                          <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium text-white" style={{ background: 'linear-gradient(135deg, #f72c4f, #e91e63)' }}>
                            Featured
                          </div>
                        )}
                      </div>
                    )}
                    
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                          {project.title}
                        </h3>
                        <div className="flex gap-2">
                          {project.url && (
                            <motion.a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className="p-2 glass-effect rounded-full hover:pulse-glow transition-all duration-300"
                            >
                              <ExternalLink size={16} />
                            </motion.a>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 glass-effect text-gray-300 rounded-full text-xs font-medium hover:gradient-text transition-all duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </InteractiveCard>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">No projects found in this category.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;