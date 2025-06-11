
import React, { useState, useEffect } from 'react';

const FullImageSlide: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Tạo mảng slides với cùng ảnh GIF
  const slides = Array.from({ length: 6 }, (_, index) => ({
    id: index,
  }));

  // Auto scroll sau 3 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full h-[220px] relative overflow-hidden rounded-lg shadow-2xl">
      {/* Slides Container */}
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
            {/* Full Image Background */}
            <img
              src="images/230.gif"
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay gradient cho text dễ đọc */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
            
            {/* Slide Number */}
            <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-white text-sm font-bold">{index + 1}</span>
            </div>

            {/* Optional Text Overlay */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-bold drop-shadow-lg">Slide {index + 1}</h3>
              <p className="text-sm text-white/90 drop-shadow-md">Ảnh lặp lại #{index + 1}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-6' 
                : 'bg-white/60 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar Top */}
      <div className="absolute top-0 left-0 h-1 bg-white/20 w-full">
        <div 
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 backdrop-blur-sm hover:bg-black/50 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200 opacity-70 hover:opacity-100"
      >
        <span className="text-white text-lg font-bold">‹</span>
      </button>
      
      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 backdrop-blur-sm hover:bg-black/50 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200 opacity-70 hover:opacity-100"
      >
        <span className="text-white text-lg font-bold">›</span>
      </button>

      {/* Auto-play indicator */}
      <div className="absolute top-3 left-3 flex items-center gap-1">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <span className="text-white text-xs font-medium drop-shadow-md">AUTO</span>
      </div>
    </div>
  );
};

export default FullImageSlide;