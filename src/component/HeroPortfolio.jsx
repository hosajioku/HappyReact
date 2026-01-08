import React from 'react'
import { motion } from 'framer-motion'
import happy from '../assets/happy.jpeg'

const HeroPortfolio = () => {
  return (
     <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-sky-50 flex items-center justify-center px-6">
      <section className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="transition-transform duration-700 ease-in-out hover:translate-x-1"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I'm <span className="text-sky-600">Happy Osajioku</span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            I build modern, responsive and beautiful web experiences using{' '}
            <span className="font-semibold">React</span> &{' '}
            <span className="font-semibold">Tailwind CSS</span>.
          </p>

           <div className="mt-6 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-sky-600 text-white rounded-xl shadow hover:shadow-lg transition-all"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-sky-600 text-sky-600 rounded-xl hover:bg-sky-50 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

           {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center md:justify-end transform transition duration-700 hover:scale-105"
        >
          <div className="relative w-64 h-64 md:w-72 md:h-72">
            {/* animated glow - use supported blur class */}
            <div className="absolute inset-0 rounded-full bg-sky-300 blur-2xl opacity-30 animate-pulse" />

            {/* profile circle */}
            <div
              role="img"
              aria-label="Profile placeholder"
              className="relative w-full h-full rounded-full bg-white shadow-2xl flex items-center justify-center border border-sky-100 overflow-hidden"
            >
              {/* replace with <img src={...} /> when you have an image */}
             <img 
              src={happy}
              alt="Happy Osajioku"
              className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default HeroPortfolio