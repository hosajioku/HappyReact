import React from 'react'
import {
  Facebook,
  Twitter,
  Instagram,
  MessageCircle,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
     <footer className="bg-[#1E2838] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Afromart</h2>
          <p className="text-gray-300 text-sm leading-6">
            Discover amazing products at unbeatable prices. Your one-stop shop
            for fashion, electronics, and jewelry!
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <Facebook className="cursor-pointer hover:text-gray-400" />
            <Twitter className="cursor-pointer hover:text-gray-400" />
            <Instagram className="cursor-pointer hover:text-gray-400" />
            <MessageCircle className="cursor-pointer hover:text-gray-400" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Customer Support</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/return-policy">Return Policy</Link></li>
            <li><Link to="/shipping">Shipping Info</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Get in Touch</h3>

          <div className="flex items-center gap-3 text-gray-300 text-sm mb-2">
            <Mail size={18} /> support@afromart.com
          </div>

          <div className="flex items-center gap-3 text-gray-300 text-sm mb-2">
            <Phone size={18} /> +234 803 586 0041
          </div>

          <div className="flex items-center gap-3 text-gray-300 text-sm">
            <MapPin size={18} /> Lagos, Nigeria
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-600 pt-4">
        © {new Date().getFullYear()} Afromart. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer