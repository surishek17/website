import React from "react";
import logo from '../assets/Logo.png';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full h-20 z-50">
      <div className=" max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        
          <a href="/" className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-4">
            <img src={logo} alt="Logo" className="ml-8 w-26 h-16" />
          </a>
       
        {/* Primary Menu */}
        <div className="hidden md:flex items-center space-x-8 mx-auto mt-4">
          {/* About Us */}
          <div className="relative group">
            <button className="text-gray-700 px-3 py-2 rounded-md hover:text-green-600 focus:outline-none text-2xl font-normal">
              About Us
            </button>
            <div className="absolute mt-2 bg-white border rounded shadow-lg w-48 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="#" className="block px-4 py-2 text-gray-700 text-lg hover:bg-gray-200">Company</a>
              <a href="#" className="block px-4 py-2 text-gray-700 text-lg hover:bg-gray-200">Team</a>
              <a href="#" className="block px-4 py-2 text-gray-700 text-lg hover:bg-gray-200">Careers</a>
            </div>
          </div>

          {/* Products */}
          <div className="relative group">
            <button className="text-gray-700 px-3 py-2 rounded-md hover:text-green-600 focus:outline-none text-2xl font-normal">
              Products
            </button>
            <div className="absolute mt-2 bg-white border rounded shadow-lg w-48 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="#" className="block px-4 py-2 text-gray-700 text-lg hover:bg-gray-200">Tiles</a>
              <a href="#" className="block px-4 py-2 text-gray-700 text-lg hover:bg-gray-200">Accessories</a>
              <a href="#" className="block px-4 py-2 text-gray-700 text-lg hover:bg-gray-200">Flooring</a>
            </div>
          </div>

          {/* E-Catalogue */}
          <div className="relative group">
            <button className="text-gray-700 px-3 py-2 rounded-md hover:text-green-600 focus:outline-none text-2xl font-normal">
              E-Catalogue
            </button>
            <div className="absolute mt-2 bg-white border rounded shadow-lg w-48 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="#" className="block px-4 py-2 text-gray-700 text-lg hover:bg-gray-200">Download Catalogue</a>
              <a href="#" className="block px-4 py-2 text-gray-700 text-lg hover:bg-gray-200">Browse Online</a>
            </div>
          </div>

          {/* Contact Us */}
          <div className="relative group">
            <button className="text-gray-700 px-3 py-2 rounded-md hover:text-green-600 focus:outline-none text-2xl font-normal">
              Contact Us
            </button>
            <div className="absolute mt-2 bg-white border rounded shadow-lg w-48 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="#" className="block px-4 py-2 text-gray-700 text-lg hover:bg-gray-200">Support</a>
              <a href="#" className="block px-4 py-2 text-gray-700 text-lg hover:bg-gray-200">Sales</a>
              <a href="#" className="block px-4 py-2 text-gray-700 text-lg hover:bg-gray-200">Locations</a>
            </div>
          </div>

          {/* More */}
          <div className="relative group">
            <button className="text-gray-700 px-3 py-2 rounded-md hover:text-green-600 focus:outline-none text-2xl font-normal">
              More
            </button>
            <div className="absolute mt-2 bg-white border rounded shadow-lg w-48 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="#" className="block px-4 py-2 text-gray-700 text-lg hover:bg-gray-200">Blog</a>
              <a href="#" className="block px-4 py-2 text-gray-700 text-lg hover:bg-gray-200">News</a>
              <a href="#" className="block px-4 py-2 text-gray-700 text-lg hover:bg-gray-200">FAQs</a>
            </div>
          </div>
        </div>
      </div>

      {/* Find Your Tile Button */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 pr-4">
          <a href="/find-tile" className="bg-green-500 text-white py-2 px-8 rounded hover:bg-green-600 text-xl font-normal">
            Find Your Tile
          </a>
        </div>
    </nav >
  );
};

export default Navbar;













