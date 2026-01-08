import React from 'react'
import happy from '../assets/happy.jpeg'; 

const AboutPortfolio = () => {
  return (
    <section id="about" className="min-h-screen bg-white flex items-center justify-center px-6 py-20">
<div className="max-w-5xl grid md:grid-cols-2 gap-10 items-center">


{/* IMAGE */}
<div className="flex justify-center md:justify-start">
<div className="relative w-64 h-64 md:w-72 md:h-72 rounded-xl overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-sky-200 blur-2xl opacity-30 animate-pulse rounded-xl"></div>
<div className="relative w-full h-full bg-white flex items-center justify-center border border-sky-100">
      <img
        src={happy} 
        alt="My Photo"
        className="w-full h-full object-cover"
      />
</div>
</div>
</div>


{/* TEXT */}
<div className="transition-transform duration-700 ease-in-out hover:translate-y-1">
<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
<p className="text-gray-600 text-lg mb-4">
I'm a passionate web developer specializing in building responsive, modern, and visually appealing web applications using <span className="font-semibold">React</span> and <span className="font-semibold">Tailwind CSS</span>.
</p>
<p className="text-gray-600 text-lg">
I love creating smooth user experiences, writing clean and maintainable code, and continuously learning new technologies to stay ahead in the fast-paced world of web development.
</p>
</div>


</div>
</section>

  )
}

export default AboutPortfolio