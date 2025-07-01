import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InteractiveCard from './InteractiveCard';

interface ProfileImageCardProps {
  className?: string;
}

const ProfileImageCard: React.FC<ProfileImageCardProps> = ({ className = '' }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <div className={`relative ${className}`}>
      <InteractiveCard className="w-80 h-80 lg:w-96 lg:h-96 p-2">
        <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center relative" style={{ background: 'linear-gradient(135deg, rgba(247, 44, 79, 0.2), rgba(233, 30, 99, 0.2))' }}>
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            </div>
          )}
          
          {imageError ? (
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-4xl mb-2">👤</div>
                <div className="text-sm">Image not available</div>
              </div>
            </div>
          ) : (
            <img 
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Parthik Modi - Laravel Developer and Automation Specialist"
              className="w-full h-full object-cover rounded-full"
              onLoad={handleImageLoad}
              onError={handleImageError}
              style={{ display: imageLoaded ? 'block' : 'none' }}
            />
          )}
        </div>
      </InteractiveCard>
    </div>
  );
};

export default ProfileImageCard;