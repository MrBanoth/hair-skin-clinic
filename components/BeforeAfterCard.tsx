'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Eye } from 'lucide-react';

type BeforeAfterCardProps = {
  beforeImage: string;
  afterImage: string;
  title: string;
  category: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
};

export default function BeforeAfterCard({
  beforeImage,
  afterImage,
  title,
  category,
  beforeLabel = 'Before',
  afterLabel = 'After',
  className = '',
}: BeforeAfterCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const position = 50; // Fixed 50/50 split
  
  // Generate image pairs for the carousel
  const imagePairs = [
    {
      before: beforeImage,
      after: afterImage,
      label: 'Transformation 1'
    },
    {
      before: beforeImage.replace(/(\.[\w\d]+)$/, '-2$1'),
      after: afterImage.replace(/(\.[\w\d]+)$/, '-2$1'),
      label: 'Transformation 2'
    }
  ];
  
  const totalSlides = imagePairs.length;
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };
  
  // Close modal when clicking outside content
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal(e);
    }
  };
  
  // Generate additional image variations by appending numbers to the base filename
  const getImageVariations = (basePath: string) => {
    const baseName = basePath.split('.').slice(0, -1).join('.');
    const ext = basePath.split('.').pop();
    return [
      basePath, // Original image
      `${baseName}-2.${ext}`, // Second variation
    ];
  };

  const handleViewClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide(0);
    setIsModalOpen(true);
  };

  const closeModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <>
      {/* Modal with Carousel */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <div 
            className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6 text-center">
              {title} - {imagePairs[currentSlide]?.label}
            </h3>
            
            <div className="relative">
              {/* Navigation Arrows */}
              <button 
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 dark:bg-gray-700/80 flex items-center justify-center shadow-md hover:bg-white dark:hover:bg-gray-600 transition-colors"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 dark:bg-gray-700/80 flex items-center justify-center shadow-md hover:bg-white dark:hover:bg-gray-600 transition-colors"
                aria-label="Next image"
              >
                <svg className="w-5 h-5 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Carousel Content */}
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {imagePairs.map((pair, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Before Image */}
                        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                          <div className="absolute top-3 left-3 z-10 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                            Before
                          </div>
                          <Image
                            src={pair.before}
                            alt={`Before: ${title} - ${pair.label}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        
                        {/* After Image */}
                        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                          <div className="absolute top-3 left-3 z-10 bg-rose-500 text-white text-xs px-2 py-1 rounded-full">
                            After
                          </div>
                          <Image
                            src={pair.after}
                            alt={`After: ${title} - ${pair.label}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Pagination Dots */}
              {totalSlides > 1 && (
                <div className="flex justify-center mt-4 space-x-2">
                  {imagePairs.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => { e.stopPropagation(); setCurrentSlide(index); }}
                      className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-rose-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Card */}
    <div 
      ref={containerRef}
      className={`relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg group bg-gray-100 dark:bg-gray-800 ${className}`}
    >
      {/* Before Image (Left Side) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={beforeImage}
            alt={`Before: ${title}`}
            fill
            className="object-cover"
            style={{ clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0% 100%)` }}
          />
        </div>
        {/* Before Label */}
        <div className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full z-10">
          {beforeLabel}
        </div>
      </div>

      {/* After Image (Right Side) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt={`After: ${title}`}
            fill
            className="object-cover"
            style={{ clipPath: `polygon(${position}% 0, 100% 0, 100% 100%, ${position}% 100%)` }}
          />
        </div>
        {/* After Label */}
        <div className="absolute top-4 right-4 bg-rose-500 text-white text-xs px-3 py-1.5 rounded-full z-10">
          {afterLabel}
        </div>
      </div>

      {/* Divider Line - Fixed in the middle */}
      <div 
        className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/50 shadow-lg z-20 pointer-events-none"
        style={{ transform: 'translateX(-50%)' }}
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
        <div className="w-full">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-4 transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
            <div className="md:max-w-[70%]">
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-white mb-0.5 md:mb-1 line-clamp-1">{title}</h3>
              <p className="text-xs sm:text-sm text-rose-100">{category}</p>
            </div>
            <button 
              onClick={handleViewClick}
              className="inline-flex items-center px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full bg-white/90 text-gray-800 hover:bg-white transition-colors duration-200 shadow-sm whitespace-nowrap mt-1 md:mt-0"
            >
              View
              <svg className="ml-1 w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Eye Icon in the middle - Always visible */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
        <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center">
          <Eye className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
    </>
  );
}
