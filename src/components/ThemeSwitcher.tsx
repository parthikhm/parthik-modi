import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor, Check, ChevronDown } from 'lucide-react';
import { useThemeContext } from './ThemeProvider';
import { Theme } from '../hooks/useTheme';

interface ThemeSwitcherProps {
  variant?: 'button' | 'dropdown';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  variant = 'button',
  size = 'md',
  showLabel = false,
  className = ''
}) => {
  const { theme, resolvedTheme, systemTheme, setTheme, toggleTheme } = useThemeContext();
  const [isOpen, setIsOpen] = useState(false);

  const themes: Array<{ key: Theme; label: string; icon: React.ComponentType<any>; description: string }> = [
    { 
      key: 'light', 
      label: 'Light', 
      icon: Sun, 
      description: 'Light mode for bright environments' 
    },
    { 
      key: 'dark', 
      label: 'Dark', 
      icon: Moon, 
      description: 'Dark mode for low-light environments' 
    },
    { 
      key: 'system', 
      label: 'System', 
      icon: Monitor, 
      description: 'Follows your system preference' 
    }
  ];

  const currentTheme = themes.find(t => t.key === theme) || themes[2];
  const currentIcon = resolvedTheme === 'dark' ? Moon : Sun;

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg'
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  if (variant === 'button') {
    return (
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          ${sizeClasses[size]} 
          glass-effect rounded-full flex items-center justify-center 
          hover:shadow-lg transition-all duration-300 group relative overflow-hidden
          focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-transparent
          ${className}
        `}
        aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
        title={`Current: ${currentTheme.label} mode`}
      >
        {/* Background glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ 
            background: resolvedTheme === 'dark' 
              ? 'radial-gradient(circle, rgba(247, 44, 79, 0.2) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)'
          }}
        />

        {/* Icon with smooth transition */}
        <motion.div
          key={resolvedTheme}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="relative z-10"
        >
          {React.createElement(currentIcon, { 
            size: iconSizes[size],
            className: resolvedTheme === 'dark' ? 'text-yellow-400' : 'text-blue-500'
          })}
        </motion.div>

        {/* Ripple effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ 
            background: resolvedTheme === 'dark' 
              ? 'rgba(247, 44, 79, 0.1)' 
              : 'rgba(59, 130, 246, 0.1)'
          }}
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {showLabel && (
          <span className="ml-2 text-sm font-medium">
            {currentTheme.label}
          </span>
        )}
      </motion.button>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="
          flex items-center gap-3 px-4 py-2 glass-effect rounded-lg 
          hover:shadow-lg transition-all duration-300 group
          focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-transparent
        "
        aria-label="Theme selector"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <motion.div
          key={resolvedTheme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {React.createElement(currentIcon, { 
            size: iconSizes[size],
            className: resolvedTheme === 'dark' ? 'text-yellow-400' : 'text-blue-500'
          })}
        </motion.div>
        
        <span className="text-sm font-medium text-gray-300 dark:text-gray-300">
          {currentTheme.label}
        </span>
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} className="text-gray-400" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="
                absolute top-full mt-2 right-0 z-50 min-w-[200px]
                glass-effect rounded-xl border border-gray-700/50 shadow-2xl
                backdrop-blur-xl overflow-hidden
              "
              style={{ background: 'rgba(20, 20, 20, 0.95)' }}
              role="listbox"
              aria-label="Theme options"
            >
              {themes.map((themeOption, index) => (
                <motion.button
                  key={themeOption.key}
                  onClick={() => {
                    setTheme(themeOption.key);
                    setIsOpen(false);
                  }}
                  whileHover={{ backgroundColor: 'rgba(247, 44, 79, 0.1)' }}
                  className="
                    w-full px-4 py-3 flex items-center gap-3 text-left
                    hover:bg-gray-800/50 transition-all duration-200
                    focus:outline-none focus:bg-gray-800/50
                    first:rounded-t-xl last:rounded-b-xl
                  "
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  role="option"
                  aria-selected={theme === themeOption.key}
                >
                  <div className="relative">
                    {React.createElement(themeOption.icon, { 
                      size: 18,
                      className: theme === themeOption.key 
                        ? (resolvedTheme === 'dark' ? 'text-yellow-400' : 'text-blue-500')
                        : 'text-gray-400'
                    })}
                    
                    {theme === themeOption.key && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-pink-500 flex items-center justify-center"
                      >
                        <Check size={8} className="text-white" />
                      </motion.div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className={`font-medium text-sm ${
                      theme === themeOption.key ? 'text-white' : 'text-gray-300'
                    }`}>
                      {themeOption.label}
                      {themeOption.key === 'system' && (
                        <span className="ml-2 text-xs text-gray-500">
                          ({systemTheme})
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {themeOption.description}
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;