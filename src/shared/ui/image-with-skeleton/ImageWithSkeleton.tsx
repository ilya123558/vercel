'use client'
import React, { useState } from 'react';
import Image from 'next/image';

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string
}

export const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({ src, alt, width, height, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="relative w-full h-full">
      {!isLoaded && (
        <div className="absolute w-full h-full bg-[#ABB0BC] animate-pulse z-[9]"></div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={100}
        onLoad={handleImageLoad}
        className={`${isLoaded ? 'opacity-100' : 'opacity-0'} ${className ? className: ''}`}
      />
    </div>
  );
};