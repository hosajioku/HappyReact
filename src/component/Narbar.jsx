import React, { useState } from 'react'
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom';
import { Search } from "lucide-react";
import CartButton from '../component/CartButton'




const Narbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false); 

  
  return (
     <>
      {/* Desktop Navbar */}
      <nav className="bg-[#1e2838] shadow-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between p-4">

          {/* Logo */}
          <Link to="/" className="text-3xl font-bold text-white">Afromart</Link>

          {/* Desktop Categories */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="flex items-center hover:text-indigo-400 text-white font-medium"
            >
              All Categories <ChevronDown size={18} className="ml-1" />
           </button>

            {categoryOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 py-2 w-48">
                <Link to="/mensfashion" className="block px-4 py-2 hover:bg-gray-100">Men’s Fashion</Link>
                <Link to="/womenfashion" className="block px-4 py-2 hover:bg-gray-100">Women’s Fashion</Link>
                <Link to="/electronics" className="block px-4 py-2 hover:bg-gray-100">Electronics</Link>
                <Link to="/jewelery" className="block px-4 py-2 hover:bg-gray-100">Jewelery</Link>
              </div>
            )}
          </div>

          {/* Search */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search products..."
              className="border px-3 py-2 rounded-lg focus:outline-indigo-400 w-64 bg-white shadow-md"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-indigo-600 p-1.5 rounded text-white">
              <Search size={18} />
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6 text-white">
            <Link to="/" className="hover:text-indigo-400 font-medium">Home</Link>
            <Link to="/shop" className="hover:text-indigo-400 font-medium">Shop</Link>
            <CartButton />
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden text-white" onClick={() => setMobileOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#1e2838] z-50 shadow-md p-4 transform transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Afromart</h2>
          <button onClick={() => setMobileOpen(false)}>
            <X size={26} className="text-white"/>
          </button>
        </div>

        <ul className="space-y-4 text-white">
          <li>
            <Link to="/" className="block text-lg hover:text-indigo-400" onClick={() => setMobileOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/ProductList" className="block text-lg hover:text-indigo-400" onClick={() => setMobileOpen(false)}>Shop</Link>
          </li>

          {/* Mobile Categories */}
          <li>
            <button
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="flex items-center justify-between w-full text-lg hover:text-indigo-400"
            >
              All Categories <ChevronDown />
            </button>
            {categoryOpen && (
              <div className="mt-2 ml-4 space-y-2 text-white">
                <Link to="/mensfashion" className="block hover:text-indigo-400" onClick={() => setMobileOpen(false)}>Men’s Fashion</Link>
                <Link to="/womenfashion" className="block hover:text-indigo-400" onClick={() => setMobileOpen(false)}>Women’s Fashion</Link>
                <Link to="/electronics" className="block hover:text-indigo-400" onClick={() => setMobileOpen(false)}>Electronics</Link>
                <Link to="/jewelery" className="block hover:text-indigo-400" onClick={() => setMobileOpen(false)}>Jewelery</Link>
              </div>
            )}
          </li>

          {/* Mobile Cart */}
          <li><CartButton /></li>
        </ul>
      </div>
    </>

  
  )
}

export default Narbar