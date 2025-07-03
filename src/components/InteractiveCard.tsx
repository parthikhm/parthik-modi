import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({ 
  children, 
  className = '', 
  style = {} 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [activeBorder, setActiveBorder] = useState<'top' | 'right' | 'bottom' | 'left' | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current || !isHovered) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });

      // Calculate which border is closest
      const { width, height } = rect;
      const distanceToTop = y;
      const distanceToRight = width - x;
      const distanceToBottom = height - y;
      const distanceToLeft = x;

      const minDistance = Math.min(
        distanceToTop,
        distanceToRight,
        distanceToBottom,
        distanceToLeft
      );

      if (minDistance === distanceToTop) {
        setActiveBorder('top');
      } else if (minDistance === distanceToRight) {
        setActiveBorder('right');
      } else if (minDistance === distanceToBottom) {
        setActiveBorder('bottom');
      } else {
        setActiveBorder('left');
      }
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setActiveBorder(null);
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isHovered]);

  const getBorderStyle = (border: 'top' | 'right' | 'bottom' | 'left') => {
    const isActive = activeBorder === border;
    return {
      position: 'absolute' as const,
      background: isActive 
        ? 'linear-gradient(90deg, #f72c4f, #e91e63, #f72c4f)' 
        : 'transparent',
      transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
      zIndex: 10,
      ...(border === 'top' && {
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: isActive 
          ? 'linear-gradient(90deg, transparent, #f72c4f, #e91e63, #f72c4f, transparent)' 
          : 'transparent',
      }),
      ...(border === 'right' && {
        top: 0,
        right: 0,
        bottom: 0,
        width: '2px',
        background: isActive 
          ? 'linear-gradient(180deg, transparent, #f72c4f, #e91e63, #f72c4f, transparent)' 
          : 'transparent',
      }),
      ...(border === 'bottom' && {
        bottom: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: isActive 
          ? 'linear-gradient(90deg, transparent, #f72c4f, #e91e63, #f72c4f, transparent)' 
          : 'transparent',
      }),
      ...(border === 'left' && {
        top: 0,
        left: 0,
        bottom: 0,
        width: '2px',
        background: isActive 
          ? 'linear-gradient(180deg, transparent, #f72c4f, #e91e63, #f72c4f, transparent)' 
          : 'transparent',
      }),
    };
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden transition-all duration-500 cursor-pointer group ${className}`}
      style={{
        backgroundColor: '#141414',
        borderRadius: '12px',
        padding: '20px',
        border: '1px solid rgba(247, 44, 79, 0.1)',
        ...style,
      }}
      whileHover={{ 
        boxShadow: [
          '0 4px 6px rgba(0, 0, 0, 0.1)',
          '0 20px 40px rgba(247, 44, 79, 0.15), 0 10px 20px rgba(233, 30, 99, 0.1)',
        ],
        scale: 1.02,
        y: -8,
        borderColor: 'rgba(247, 44, 79, 0.3)',
      }}
      transition={{
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {/* Animated background gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `
            radial-gradient(
              600px circle at ${mousePosition.x}px ${mousePosition.y}px,
              rgba(247, 44, 79, 0.06),
              rgba(233, 30, 99, 0.03),
              transparent 40%
            )
          `,
          borderRadius: '12px',
        }}
      />

      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(247, 44, 79, 0.1), rgba(233, 30, 99, 0.05))',
          borderRadius: '12px',
          filter: 'blur(1px)',
        }}
      />

      {/* Corner highlights */}
      <div className="absolute top-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div 
          className="absolute top-0 left-0 w-full h-0.5"
          style={{ background: 'linear-gradient(90deg, #f72c4f, transparent)' }}
        />
        <div 
          className="absolute top-0 left-0 w-0.5 h-full"
          style={{ background: 'linear-gradient(180deg, #f72c4f, transparent)' }}
        />
      </div>
      
      <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div 
          className="absolute top-0 right-0 w-full h-0.5"
          style={{ background: 'linear-gradient(270deg, #e91e63, transparent)' }}
        />
        <div 
          className="absolute top-0 right-0 w-0.5 h-full"
          style={{ background: 'linear-gradient(180deg, #e91e63, transparent)' }}
        />
      </div>

      <div className="absolute bottom-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div 
          className="absolute bottom-0 left-0 w-full h-0.5"
          style={{ background: 'linear-gradient(90deg, #f72c4f, transparent)' }}
        />
        <div 
          className="absolute bottom-0 left-0 w-0.5 h-full"
          style={{ background: 'linear-gradient(0deg, #f72c4f, transparent)' }}
        />
      </div>

      <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div 
          className="absolute bottom-0 right-0 w-full h-0.5"
          style={{ background: 'linear-gradient(270deg, #e91e63, transparent)' }}
        />
        <div 
          className="absolute bottom-0 right-0 w-0.5 h-full"
          style={{ background: 'linear-gradient(0deg, #e91e63, transparent)' }}
        />
      </div>

      {/* Dynamic border elements */}
      <div style={getBorderStyle('top')} />
      <div style={getBorderStyle('right')} />
      <div style={getBorderStyle('bottom')} />
      <div style={getBorderStyle('left')} />

      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: `
            linear-gradient(
              135deg,
              transparent 30%,
              rgba(255, 255, 255, 0.1) 50%,
              transparent 70%
            )
          `,
          borderRadius: '12px',
        }}
        initial={{ x: '-100%', y: '-100%' }}
        whileHover={{
          x: '100%',
          y: '100%',
          transition: {
            duration: 0.8,
            ease: 'easeInOut',
          }
        }}
      />

      {/* Content */}
      <div className="relative z-20 transition-transform duration-300 group-hover:scale-[1.01]">
        {children}
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 2 === 0 ? '#f72c4f' : '#e91e63',
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-10, -20, -10],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default InteractiveCard;