import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'text';
  animated?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  variant = 'full', 
  animated = true,
  className = '' 
}) => {
  const sizeClasses = {
    sm: { container: 'h-8', text: 'text-lg', icon: 'w-8 h-8' },
    md: { container: 'h-12', text: 'text-2xl', icon: 'w-12 h-12' },
    lg: { container: 'h-16', text: 'text-3xl', icon: 'w-16 h-16' },
    xl: { container: 'h-20', text: 'text-4xl', icon: 'w-20 h-20' }
  };

  const currentSize = sizeClasses[size];

  const iconVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.8
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 }
    }
  };

  const textVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const letterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  // Logo Icon Component
  const LogoIcon = () => (
    <motion.div
      className={`${currentSize.icon} relative flex items-center justify-center`}
      variants={animated ? iconVariants : {}}
      initial={animated ? "initial" : false}
      animate={animated ? "animate" : false}
      whileHover={animated ? "hover" : {}}
    >
      {/* Outer ring with gradient */}
      <div 
        className="absolute inset-0 rounded-full p-0.5"
        style={{ 
          background: 'linear-gradient(135deg, #f72c4f, #e91e63, #f72c4f)',
        }}
      >
        <div 
          className="w-full h-full rounded-full"
          style={{ backgroundColor: '#060606' }}
        />
      </div>

      {/* Inner content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {/* P and M letters stylized */}
        <svg 
          viewBox="0 0 40 40" 
          className="w-3/4 h-3/4"
          fill="none"
        >
          {/* P letter */}
          <motion.path
            d="M8 6 L8 34 M8 6 L20 6 Q26 6 26 12 Q26 18 20 18 L8 18"
            stroke="url(#gradient1)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          
          {/* M letter */}
          <motion.path
            d="M14 34 L14 20 L20 26 L26 20 L26 34 M14 20 L20 6 L26 20"
            stroke="url(#gradient2)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          />

          {/* Gradient definitions */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f72c4f" />
              <stop offset="100%" stopColor="#e91e63" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e91e63" />
              <stop offset="100%" stopColor="#f72c4f" />
            </linearGradient>
          </defs>
        </svg>

        {/* Decorative dots */}
        <motion.div
          className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
          style={{ background: 'linear-gradient(135deg, #f72c4f, #e91e63)' }}
          animate={animated ? {
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-full"
          style={{ background: 'linear-gradient(135deg, #e91e63, #f72c4f)' }}
          animate={animated ? {
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5]
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </motion.div>
  );

  // Logo Text Component
  const LogoText = () => (
    <motion.div
      className="flex flex-col"
      variants={animated ? textVariants : {}}
      initial={animated ? "initial" : false}
      animate={animated ? "animate" : false}
    >
      <div className={`${currentSize.text} font-bold leading-tight`}>
        {"Parthik Modi".split('').map((letter, i) => (
          <motion.span
            key={i}
            className={letter === ' ' ? 'mr-2' : 'gradient-text'}
            variants={animated ? letterVariants : {}}
            custom={i}
            initial={animated ? "initial" : false}
            animate={animated ? "animate" : false}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </div>
      <motion.div 
        className="text-xs text-gray-400 font-medium tracking-wider uppercase"
        initial={animated ? { opacity: 0 } : false}
        animate={animated ? { opacity: 1 } : false}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        Laravel Developer
      </motion.div>
    </motion.div>
  );

  if (variant === 'icon') {
    return (
      <div className={`${className}`}>
        <LogoIcon />
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div className={`${className}`}>
        <LogoText />
      </div>
    );
  }

  return (
    <motion.div 
      className={`flex items-center gap-3 ${currentSize.container} ${className}`}
      whileHover={animated ? { scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
    >
      <LogoIcon />
      <LogoText />
    </motion.div>
  );
};

export default Logo;