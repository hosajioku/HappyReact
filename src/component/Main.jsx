import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Main = () => {

  return (

      <div className="flex flex-row items-center justify-between p-8 md:p-16 min-h-[60vh] bg-blue-100">
        {/* Text Column */}
        <div className="flex flex-col md:w-1/2 mb-6 md:mb-0">
        <h1 className='text-4x1  md:text-5xl font-bold mb-4'>AfroMart</h1>
          <h2 className="text-1x5 md:text-1xl font-bold mb-4">
            Your trusted African marketplace for quality, affordable products.</h2>
          <p className="text-1-5">Shop, sell, and connect with verified suppliers across Africa and beyond.</p>
          <p><strong>Motto:</strong> Connecting Africa to the World.</p>
        </div>

        {/* Image Column */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src="https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h1-slide-2-img-1.png"
            alt="Hero"
            className="w-[500px] h-1/10 object-cover rounded-lg"
          />
        </div>
      </div>
  );
};