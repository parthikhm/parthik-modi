import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Globe, Code, Zap, Database, Star, TrendingUp, Award } from 'lucide-react';
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
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: { users: '10K+', performance: '95%', uptime: '99.9%' }
    },
    {
      title: 'Irish Holidays',
      description: 'Complete holiday booking and management system with payment integration and real-time availability.',
      url: 'https://www.irishholidays.in',
      tech: ['Laravel', 'Payment Integration', 'Booking System'],
      category: 'web',
      featured: true,
      image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: { bookings: '500+', revenue: '€50K+', satisfaction: '98%' }
    },
    {
      title: 'Sarjan Homes',
      description: 'Real estate platform for property listings and management with advanced filtering and CRM integration.',
      url: 'https://sarjanhomes.in',
      tech: ['Laravel', 'Property Management', 'CRM'],
      category: 'web',
      featured: true,
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: { properties: '1K+', leads: '300+', conversion: '25%' }
    },
    {
      title: 'Blavitts Hopen',
      description: 'E-commerce platform with custom features, payment gateway integration, and inventory management.',
      url: 'https://blavittshopen.se',
      tech: ['Laravel', 'E-commerce', 'Payment Gateway'],
      category: 'web',
      featured: true,
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: { orders: '2K+', products: '500+', growth: '150%' }
    },
    {
      title: 'Voice-to-Action Telegram Bot',
      description: 'AI-powered Telegram bot with voice processing capabilities using OpenAI and advanced NLP.',
      tech: ['Python', 'OpenAI', 'Telegram API', 'Voice Processing'],
      category: 'automation',
      featured: false,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: { messages: '50K+', accuracy: '92%', users: '1K+' }
    },
    {
      title: 'Auto Email Reply System',
      description: 'IMAP-based email automation with GPT-4 integration for intelligent response generation.',
      tech: ['PHP', 'IMAP', 'GPT-4', 'Automation'],
      category: 'automation',
      featured: false,
      image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: { emails: '10K+', response: '95%', time: '80%' }
    },
    {
      title: 'Instagram Marketing Automation',
      description: 'Automated Instagram marketing with Gemini AI for content generation and scheduling.',
      tech: ['n8n', 'Instagram API', 'Gemini', 'Automation'],
      category: 'automation',
      featured: false,
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: { posts: '1K+', engagement: '300%', reach: '100K+' }
    },
    {
      title: 'Prompt Collab',
      description: 'Hourly prompt generator for AI applications with collaborative features and scheduling.',
      tech: ['Laravel', 'AI Integration', 'Scheduling'],
      category: 'ai',
      featured: false,
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: { prompts: '5K+', users: '200+', quality: '96%' }
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: Globe, count: projects.length },
    { key: 'web', label: 'Web Apps', icon: Code, count: projects.filter(p => p.category === 'web').length },
    { key: 'automation', label: 'Automation', icon: Zap, count: projects.filter(p => p.category === 'automation').length },
    { key: 'ai', label: 'AI Projects', icon: Database, count: projects.filter(p => p.category === 'ai').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
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
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(247, 44, 79, 0.1)', border: '1px solid rgba(247, 44, 79, 0.2)' }}
            >
              <Award size={16} style={{ color: '#f72c4f' }} />
              <span className="text-sm font-medium text-gray-300">Portfolio Showcase</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
            <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work in web development, automation, and AI integration with measurable results and impact.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filterItem) => (
              <motion.button
                key={filterItem.key}
                onClick={() => setFilter(filterItem.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 relative overflow-hidden ${
                  filter === filterItem.key
                    ? 'text-white'
                    : 'glass-effect text-gray-300 hover:text-white'
                }`}
                style={filter === filterItem.key ? { background: 'linear-gradient(135deg, #f72c4f, #e91e63)' } : {}}
              >
                <filterItem.icon size={18} />
                <span className="font-medium">{filterItem.label}</span>
                <span 
                  className={`text-xs px-2 py-1 rounded-full ${
                    filter === filterItem.key ? 'bg-white/20' : 'bg-gray-700'
                  }`}
                >
                  {filterItem.count}
                </span>
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
                  variants={cardVariants}
                >
                  <InteractiveCard className="overflow-hidden h-full flex flex-col">
                    {/* Project Image */}
                    {project.image && (
                      <div className="relative overflow-hidden h-48 -m-5 mb-5">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        
                        {/* Badges */}
                        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                          {project.featured && (
                            <div 
                              className="px-3 py-1 rounded-full text-xs font-medium text-white flex items-center gap-1"
                              style={{ background: 'linear-gradient(135deg, #f72c4f, #e91e63)' }}
                            >
                              <Star size={12} />
                              Featured
                            </div>
                          )}
                          
                          <div 
                            className="px-3 py-1 rounded-full text-xs font-medium bg-black/50 text-white backdrop-blur-sm"
                          >
                            {project.category.toUpperCase()}
                          </div>
                        </div>

                        {/* Hover overlay with metrics */}
                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <div className="text-center text-white">
                            <div className="grid grid-cols-3 gap-4 text-xs">
                              {Object.entries(project.metrics).map(([key, value], i) => (
                                <div key={key} className="text-center">
                                  <div className="font-bold text-pink-400">{value}</div>
                                  <div className="capitalize">{key}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Project Content */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-white">
                          {project.title}
                        </h3>
                        <div className="flex gap-2">
                          {project.url && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 glass-effect rounded-full hover:text-pink-400 transition-all duration-300"
                            >
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed text-sm flex-1">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 glass-effect text-gray-300 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Project Stats */}
                      <div className="mt-auto pt-4 border-t border-gray-700/50">
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <div className="flex items-center gap-1">
                            <TrendingUp size={12} />
                            <span>High Performance</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star size={12} />
                            <span>Client Approved</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </InteractiveCard>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-pink-500/30 border-t-pink-500 animate-spin" />
              <p className="text-gray-400 text-lg">No projects found in this category.</p>
              <p className="text-gray-500 text-sm mt-2">Try selecting a different filter above.</p>
            </motion.div>
          )}

          {/* Project Summary */}
          <motion.div 
            variants={itemVariants}
            className="mt-16"
          >
            <InteractiveCard>
              <div className="text-center">
                <h3 className="text-3xl font-bold gradient-text mb-6">
                  Project Impact & Results
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { label: 'Total Projects', value: '25+', icon: Code, color: 'from-blue-500 to-indigo-500' },
                    { label: 'Client Satisfaction', value: '100%', icon: Star, color: 'from-green-500 to-emerald-500' },
                    { label: 'Technologies Used', value: '15+', icon: Database, color: 'from-purple-500 to-violet-500' },
                    { label: 'Success Rate', value: '100%', icon: TrendingUp, color: 'from-pink-500 to-red-500' }
                  ].map((stat, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div 
                        className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300"
                        style={{ background: 'rgba(247, 44, 79, 0.1)' }}
                      >
                        <stat.icon size={28} style={{ color: '#f72c4f' }} />
                      </div>
                      <div className="text-3xl font-bold gradient-text mb-2">
                        {stat.value}
                      </div>
                      <h4 className="font-semibold text-white text-sm">{stat.label}</h4>
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

export default Projects;