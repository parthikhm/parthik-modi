import React, { useRef } from 'react';

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

  return (
    <div
      ref={cardRef}
      className={`
        relative overflow-hidden transition-all duration-300 cursor-pointer
        bg-white dark:bg-gray-800 
        border border-gray-200 dark:border-gray-700
        shadow-lg hover:shadow-xl dark:shadow-gray-900/50
        rounded-xl p-6
        ${className}
      `}
      style={{
        ...style,
      }}
    >
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(600px circle at 50% 50%, rgba(247, 44, 79, 0.05), transparent 40%)',
          borderRadius: '12px',
        }}
      />

      {/* Corner highlights */}
      <div className="absolute top-0 left-0 w-8 h-8 opacity-0 hover:opacity-100 transition-opacity duration-500">
        <div 
          className="absolute top-0 left-0 w-full h-0.5"
          style={{ background: 'linear-gradient(90deg, #f72c4f, transparent)' }}
        />
        <div 
          className="absolute top-0 left-0 w-0.5 h-full"
          style={{ background: 'linear-gradient(180deg, #f72c4f, transparent)' }}
        />
      </div>
      
      <div className="absolute top-0 right-0 w-8 h-8 opacity-0 hover:opacity-100 transition-opacity duration-500">
        <div 
          className="absolute top-0 right-0 w-full h-0.5"
          style={{ background: 'linear-gradient(270deg, #e91e63, transparent)' }}
        />
        <div 
          className="absolute top-0 right-0 w-0.5 h-full"
          style={{ background: 'linear-gradient(180deg, #e91e63, transparent)' }}
        />
      </div>

      <div className="absolute bottom-0 left-0 w-8 h-8 opacity-0 hover:opacity-100 transition-opacity duration-500">
        <div 
          className="absolute bottom-0 left-0 w-full h-0.5"
          style={{ background: 'linear-gradient(90deg, #f72c4f, transparent)' }}
        />
        <div 
          className="absolute bottom-0 left-0 w-0.5 h-full"
          style={{ background: 'linear-gradient(0deg, #f72c4f, transparent)' }}
        />
      </div>

      <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 hover:opacity-100 transition-opacity duration-500">
        <div 
          className="absolute bottom-0 right-0 w-full h-0.5"
          style={{ background: 'linear-gradient(270deg, #e91e63, transparent)' }}
        />
        <div 
          className="absolute bottom-0 right-0 w-0.5 h-full"
          style={{ background: 'linear-gradient(0deg, #e91e63, transparent)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default InteractiveCard;