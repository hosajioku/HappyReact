import React, { useEffect, useState } from 'react'

const Hero = () => {
    const images = [
    "https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1713947506242-8fcae733d158?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  const [index, setIndex] = useState(0);

  // Auto-play every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Switch image on hover
  const handleHover = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };
  return (
  <section className="flex flex-col md:flex-row items-center justify-between bg-white p-6 md:p-12 rounded-lg shadow-md mb-8">

      {/* Div 1: Welcome message */}
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Welcome to Afromart!
        </h1>
        <p className="text-gray-600 text-lg">
          Discover amazing products at unbeatable prices. Your one-stop shop for fashion, electronics, and jewelry!
        </p>
      </div>

      {/* Div 2: Image Slider */}
      <div className="md:w-1/2 flex justify-center cursor-pointer" onMouseEnter={handleHover}>
        <img
          src={images[index]}
          alt="Afromart hero"
          className="rounded-lg shadow-lg object-cover transition-all duration-700 w-full h-[300px] md:h-[380px]"
        />
      </div>

    </section>
  )
}

export default Hero