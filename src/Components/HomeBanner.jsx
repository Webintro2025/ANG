"use client"
import React, { useState, useEffect } from 'react';

// Desktop images (d1, d2)
const desktopBanners = [
  {
    id: 1,
    src: "/d1.jpg", // Replace with your actual desktop image path
    alt: "Desktop Banner 1"
  },
  {
    id: 2,
    src: "/d2.jpg", // Replace with your actual desktop image path
    alt: "Desktop Banner 2"
  },

  {
    id: 3,
    src: "/d3.jpg", // Replace with your actual desktop image path
    alt: "Desktop Banner 3"
  }
];

// Mobile images (m1, m2, m3)
const mobileBanners = [
  {
    id: 1,
    src: "/m1.jpg", // Replace with your actual mobile image path
    alt: "Mobile Banner 1"
  },
  {
    id: 2,
    src: "/m2.jpg", // Replace with your actual mobile image path
    alt: "Mobile Banner 2"
  },
  {
    id: 3,
    src: "/m3.jpg", // Replace with your actual mobile image path
    alt: "Mobile Banner 3"
  }
];


const HomeBanner = () => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 640 : false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // Reset currentIndex if banner set changes (to avoid out of range)
  useEffect(() => {
    setCurrentIndex(0);
  }, [isMobile]);

  useEffect(() => {
    const banners = isMobile ? mobileBanners : desktopBanners;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const banners = isMobile ? mobileBanners : desktopBanners;
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`relative w-full h-[15vh] sm:h-[20vh] md:h-[30vh] lg:h-[38vh] xl:h-[53vh] 2xl:h-[70vh] bg-gradient-to-r from-[#D2AD65]/30 via-white to-[#D2AD65]/60 shadow-2xl ${isMobile ? 'pt-8' : ''}`}>
      <div className="relative w-full h-full">
        <img
          src={banners[currentIndex].src}
          alt={banners[currentIndex].alt}
          className="w-full h-full object-cover"
        />
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/30" />
      </div>
     
      {/* Dot Indicators */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex space-x-4">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 sm:w-4 sm:h-4 md:w-4 md:h-4 border-2 border-[#D2AD65]/40 transition-all duration-300 ${index === currentIndex ? 'bg-[#D2AD65] shadow-lg' : 'bg-white/70'}`}
          />
        ))}
      </div>
      {/* Slide Counter */}
      
    </div>
  );
};

export default HomeBanner;
