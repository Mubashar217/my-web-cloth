'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const slides = [
  {
    image: '/1.jpg',
    title: 'READY TO WEAR',
    subtitle: "SUMMER '25 - NEW ARRIVALS",
  },
  {
    image: '/headerimg.jpg',
    title: 'MODERN STYLES',
    subtitle: 'UNIQUE DESIGNS FOR YOU',
  },
  {
    image: '/headerimg2.jpg',
    title: 'ELEGANT LOOKS',
    subtitle: 'CLASSIC TOUCH FOR SUMMER',
  },
];

export default function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <Image
          key={index}
          src={slide.image}
          alt={`Slide ${index + 1}`}
          fill
          className={`object-cover absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          priority={index === 0}
        />
      ))}

    
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-20" />

      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4 transition-opacity duration-1000 ease-in-out">
          {slides[currentIndex].title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white tracking-widest mb-8 max-w-xl mx-auto transition-opacity duration-1000 ease-in-out">
          {slides[currentIndex].subtitle}
        </p>
        <button className="bg-white text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
          SHOP NOW
        </button>
      </div>
    </header>
  );
}
