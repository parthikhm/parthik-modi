import React, { useState, useEffect } from 'react';
import { Sun, Moon, Monitor, Check, ChevronDown } from 'lucide-react';

interface ThemeToggleProps {
  variant?: 'button' | 'dropdown';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

type Theme = 'light' | 'dark' | 'system';

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  variant = 'button',
  size = 'md',
  showLabel = false,
  className = ''
}) => {
  const [theme, setTheme] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('dark');
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('dark');
  const [isOpen, setIsOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialSystemTheme = systemPrefersDark ? 'dark' : 'light';
    
    setSystemTheme(initialSystemTheme);
    
    if (savedTheme) {
      setTheme(savedTheme);
      const resolved = savedTheme === 'system' ? initialSystemTheme : savedTheme;
      setResolvedTheme(resolved);
      applyTheme(resolved);
    } else {
      setTheme('system');
      setResolvedTheme(initialSystemTheme);
      applyTheme(initialSystemTheme);
    }
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      const newSystemTheme = e.matches ? 'dark' : 'light';
      setSystemTheme(newSystemTheme);
      
      // If user is using system theme, update resolved theme
      if (theme === 'system') {
        setResolvedTheme(newSystemTheme);
        applyTheme(newSystemTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // Apply theme to document
  const applyTheme = (newTheme: 'light' | 'dark') => {
    setIsTransitioning(true);
    
    // Temporarily disable transitions to prevent flash
    document.documentElement.classList.add('theme-transition-disable');
    
    // Remove existing theme classes
    document.documentElement.classList.remove('light', 'dark');
    
    // Add new theme class
    document.documentElement.classList.add(newTheme);
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', newTheme === 'dark' ? '#060606' : '#ffffff');
    }
    
    // Re-enable transitions after a brief delay
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transition-disable');
      setIsTransitioning(false);
    }, 50);
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    const resolved = newTheme === 'system' ? systemTheme : newTheme;
    setResolvedTheme(resolved);
    applyTheme(resolved);
    
    setIsOpen(false);
  };

  const toggleTheme = () => {
    if (theme === 'system') {
      handleThemeChange(systemTheme === 'dark' ? 'light' : 'dark');
    } else {
      handleThemeChange(theme === 'dark' ? 'light' : 'dark');
    }
  };

  const themes = [
    { 
      key: 'light' as Theme, 
      label: 'Light', 
      icon: Sun, 
      description: 'Light mode for bright environments' 
    },
    { 
      key: 'dark' as Theme, 
      label: 'Dark', 
      icon: Moon, 
      description: 'Dark mode for low-light environments' 
    },
    { 
      key: 'system' as Theme, 
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
      <button
        onClick={toggleTheme}
        className={`
          ${sizeClasses[size]} 
          glass-effect rounded-full flex items-center justify-center 
          hover:shadow-lg transition-all duration-300 group relative overflow-hidden
          focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-transparent
          ${isTransitioning ? 'pointer-events-none' : ''}
          ${className}
        `}
        aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
        aria-pressed={resolvedTheme === 'dark'}
        title={`Current: ${currentTheme.label} mode`}
        disabled={isTransitioning}
      >
        {/* Background glow effect */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ 
            background: resolvedTheme === 'dark' 
              ? 'radial-gradient(circle, rgba(247, 44, 79, 0.2) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)'
          }}
        />

        {/* Icon with smooth transition */}
        <div
          key={resolvedTheme}
          className={`relative z-10 transition-all duration-300 ${
            isTransitioning ? 'scale-75 opacity-50' : 'scale-100 opacity-100'
          }`}
        >
          {React.createElement(currentIcon, { 
            size: iconSizes[size],
            className: `transition-colors duration-300 ${
              resolvedTheme === 'dark' ? 'text-yellow-400' : 'text-blue-500'
            }`
          })}
        </div>

        {/* Ripple effect */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ 
            background: resolvedTheme === 'dark' 
              ? 'rgba(247, 44, 79, 0.1)' 
              : 'rgba(59, 130, 246, 0.1)'
          }}
        />

        {showLabel && (
          <span className="ml-2 text-sm font-medium">
            {currentTheme.label}
          </span>
        )}
      </button>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center gap-3 px-4 py-2 glass-effect rounded-lg 
          hover:shadow-lg transition-all duration-300 group
          focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-transparent
        "
        aria-label="Theme selector"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        disabled={isTransitioning}
      >
        <div
          key={resolvedTheme}
          className={`transition-all duration-300 ${
            isTransitioning ? 'scale-75 opacity-50' : 'scale-100 opacity-100'
          }`}
        >
          {React.createElement(currentIcon, { 
            size: iconSizes[size],
            className: `transition-colors duration-300 ${
              resolvedTheme === 'dark' ? 'text-yellow-400' : 'text-blue-500'
            }`
          })}
        </div>
        
        <span className="text-sm font-medium text-tertiary">
          {currentTheme.label}
          {showLabel && theme === 'system' && (
            <span className="ml-1 text-xs text-muted">
              ({systemTheme})
            </span>
          )}
        </span>
        
        <ChevronDown 
          size={16} 
          className={`text-muted transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`} 
        />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div
            className="
              absolute top-full mt-2 right-0 z-50 min-w-[220px]
              glass-effect rounded-xl border border-secondary shadow-2xl
              backdrop-blur-xl overflow-hidden animate-fade-in
            "
            style={{ background: 'var(--bg-card)' }}
            role="listbox"
            aria-label="Theme options"
          >
            {themes.map((themeOption, index) => (
              <button
                key={themeOption.key}
                onClick={() => handleThemeChange(themeOption.key)}
                className="
                  w-full px-4 py-3 flex items-center gap-3 text-left
                  hover:bg-tertiary/50 transition-all duration-200
                  focus:outline-none focus:bg-tertiary/50
                  first:rounded-t-xl last:rounded-b-xl
                "
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: 'both'
                }}
                role="option"
                aria-selected={theme === themeOption.key}
                disabled={isTransitioning}
              >
                <div className="relative">
                  {React.createElement(themeOption.icon, { 
                    size: 18,
                    className: `transition-colors duration-200 ${
                      theme === themeOption.key 
                        ? (resolvedTheme === 'dark' ? 'text-yellow-400' : 'text-blue-500')
                        : 'text-muted'
                    }`
                  })}
                  
                  {theme === themeOption.key && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-pink-500 flex items-center justify-center animate-scale-in">
                      <Check size={8} className="text-white" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className={`font-medium text-sm transition-colors duration-200 ${
                    theme === themeOption.key ? 'text-primary' : 'text-secondary'
                  }`}>
                    {themeOption.label}
                    {themeOption.key === 'system' && (
                      <span className="ml-2 text-xs text-muted">
                        ({systemTheme})
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-muted mt-0.5">
                    {themeOption.description}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeToggle;