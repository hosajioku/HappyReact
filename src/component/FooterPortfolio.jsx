import React from 'react'

const FooterPortfolio = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
       <p className="text-center md:text-left">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <div className="flex gap-4 mt-4 md:mt-0">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">GitHub</a>
         <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">LinkedIn</a>
         <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">Twitter</a>
      </div>
      </div>
    </footer>
  )
}

export default FooterPortfolio