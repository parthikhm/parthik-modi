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
      backgroundColor: isActive ? '#f72c4f' : 'transparent',
      transition: 'all 300ms ease-in-out',
      zIndex: 10,
      ...(border === 'top' && {
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
      }),
      ...(border === 'right' && {
        top: 0,
        right: 0,
        bottom: 0,
        width: '2px',
      }),
      ...(border === 'bottom' && {
        bottom: 0,
        left: 0,
        right: 0,
        height: '2px',
      }),
      ...(border === 'left' && {
        top: 0,
        left: 0,
        bottom: 0,
        width: '2px',
      }),
    };
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
      style={{
        backgroundColor: '#141414',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        ...style,
      }}
      whileHover={{ 
        boxShadow: '0 8px 25px rgba(247, 44, 79, 0.15)',
        transform: 'translateY(-2px)'
      }}
    >
      {/* Border elements */}
      <div style={getBorderStyle('top')} />
      <div style={getBorderStyle('right')} />
      <div style={getBorderStyle('bottom')} />
      <div style={getBorderStyle('left')} />
      
      {/* Content */}
      <div className="relative z-5">
        {children}
      </div>
    </motion.div>
  );
};

export default InteractiveCard;