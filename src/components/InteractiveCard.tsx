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
  return (
    <div
      className={`relative overflow-hidden transition-all duration-300 cursor-pointer group ${className}`}
      style={{
        backgroundColor: '#141414',
        borderRadius: '12px',
        padding: '20px',
        border: '1px solid rgba(247, 44, 79, 0.1)',
        ...style,
      }}
    >
      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default InteractiveCard;