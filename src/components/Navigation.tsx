import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-effect shadow-2xl backdrop-blur-xl' : 'bg-transparent'
      }`}
      style={{ 
        backgroundColor: scrolled ? 'var(--glass-bg)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border-primary)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Logo size="sm" animated={false} />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`relative group transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-primary font-semibold'
                    : 'text-tertiary hover:text-primary'
                }`}
              >
                {item.name}
                
                {/* Active indicator */}
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-300"
                  style={{ 
                    background: 'linear-gradient(135deg, #f72c4f, #e91e63)',
                    width: activeSection === item.href.substring(1) ? '100%' : '0%'
                  }}
                  whileHover={{ width: '100%' }}
                />
                
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ 
                    background: 'radial-gradient(circle, rgba(247, 44, 79, 0.1) 0%, transparent 70%)',
                    transform: 'scale(1.5)'
                  }}
                />
              </motion.a>
            ))}
            
            {/* Theme Switcher */}
            <ThemeSwitcher variant="dropdown" size="md" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeSwitcher variant="button" size="sm" />
            
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-primary p-2 rounded-lg glass-effect hover:shadow-lg transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden glass-effect rounded-xl mt-2 p-6 border border-primary/20"
              style={{ background: 'var(--bg-card)' }}
            >
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className={`block py-3 px-4 rounded-lg transition-all duration-300 relative overflow-hidden ${
                      activeSection === item.href.substring(1)
                        ? 'text-primary font-semibold gradient-bg'
                        : 'text-tertiary hover:text-primary hover:bg-tertiary/50'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Ripple effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-red-500/20 opacity-0"
                      whileHover={{ opacity: 1, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
                
                {/* Mobile Theme Switcher */}
                <div className="pt-4 border-t border-secondary">
                  <ThemeSwitcher variant="dropdown" size="md" showLabel />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;