"use client";
import React, { useEffect, useState } from 'react';

const slides = [
"/bannner3.jpg",
"/bannner1.jpg",
"/bannerr.jpg"

  
];

const HomeBanner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500); // 3.5 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[140px] sm:h-[200px] md:h-[280px] lg:h-[370px] xl:h-[520px] 2xl:h-[550px] max-h-[90vh] overflow-hidden">
      {slides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="banner"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          style={{ pointerEvents: 'none' }}
        />
      ))}
      {/* Dots for manual navigation */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-amber-400' : 'bg-white/60'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;