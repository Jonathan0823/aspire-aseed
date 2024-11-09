// Navbar.tsx
"use client";

import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center p-4 bg-opacity-50 bg-[#d2c6b7] backdrop-blur-lg z-10">
     
      <div className="flex items-center space-x-2 bg-[#d2c6b7] bg-opacity-80 rounded-full px-4 py-2">
        <FaUserCircle className="text-gray-800 w-5 h-5" />
        <span className="text-[#040180] font-semibold">English Education Department</span>
      </div>

      
      <nav className="hidden lg:flex space-x-4 border-2 border-purple-500 rounded-full bg-[#d2c6b7] bg-opacity-80 px-6 py-2">
        <a href="#" className="text-blue-900 font-bold hover:text-blue-600">HOME</a>
        <a href="#" className="text-blue-900 font-bold hover:text-blue-600">ABOUT</a>
        <a href="#" className="text-blue-900 font-bold hover:text-blue-600">CONTACT</a>
      </nav>

      {/* Hamburger Icon for Mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden text-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Dropdown Menu for Mobile */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-[#d2c6b7] rounded-lg shadow-lg p-4 flex flex-col space-y-2 lg:hidden z-20">
          <a href="/home" className="text-gray-800 font-semibold hover:text-blue-600">HOME</a>
          <a href="/about" className="text-gray-800 font-semibold hover:text-blue-600">ABOUT</a>
          <a href="/contact" className="text-gray-800 font-semibold hover:text-blue-600">CONTACT</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
