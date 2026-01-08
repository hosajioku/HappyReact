import React from 'react'
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const NavBarPortfolio = () => {
    const [open, setOpen] = useState(false);


const links = [
{ name: 'About', href: '#about' },
{ name: 'Projects', href: '#projects' },
{ name: 'Skills', href: '#skills' },
{ name: 'Contact', href: '#contact' },
];
  return (
   <nav className="fixed w-full bg-white/70 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Name clickable to scroll to top */}
        <a
          href="/"
          className="text-xl font-bold text-sky-600 hover:text-sky-500 transition-colors"
        >
          Happy Osajioku
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          {links.map((link) => (
            <li key={link.name} className="hover:text-sky-600 transition-colors">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${open ? 'max-h-64' : 'max-h-0 overflow-hidden'}`}>
        <ul className="flex flex-col gap-4 px-6 pb-4 font-medium text-gray-700">
          {links.map((link) => (
            <li key={link.name} className="hover:text-sky-600 transition-colors">
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
)
}

export default NavBarPortfolio