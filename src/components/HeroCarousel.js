import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeroCarousel = ({ images, interval = 6000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // eslint-disable-next-line
  const [isAnimating, setIsAnimating] = useState(false); 
  const nextSlide = () => {
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-slide logic with timer using useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, [currentIndex, interval]);
    // eslint-disable-next-line


  // Reset animation state after transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Duration of animation in ms

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carousel container */}
      <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-start justify-center md:px-24 px-6 z-10 bg-[rgba(0,0,0,0.8)]">
        <h1 className="text-4xl md:text-7xl text-left text-white">Empowering Communities, <span className="block">Changing Lives</span></h1>
        <p className="text-white font-extralight md:text-lg md:w-2/3 md:mt-2 mt-1 mb-4">Join FOUNDAID AMERICA in making a difference. Together, we can build a better future for underprivileged communities through education, healthcare, and sustainable development.</p>
        <Link to={"/volunteer"} className="border border-customBlue hover:bg-customBlue transition-all ease-in-out duration-500 px-10 py-3 text-white text-sm font-light">JOIN OUR MISSION</Link>

        {/* Indicators */}
        <div className="absolute md:bottom-8 bottom-12 left-0 flex space-x-2 md:px-24 px-6">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
