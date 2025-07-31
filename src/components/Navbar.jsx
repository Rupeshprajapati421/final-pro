
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="h-20 w-full bg-white fixed top-0 left-0 right-0 flex items-center justify-between z-50 shadow-lg px-4 sm:px-8">
      <div className="text-2xl font-bold flex items-center gap-2">
        <span className='text-3xl font-extrabold text-blue-600 drop-shadow-lg'>Code</span>
        <span className='text-3xl font-extrabold text-amber-400 drop-shadow-lg'>Share</span>
        <span className='ml-2 animate-bounce text-2xl text-pink-400'>★</span>
      </div>
      {/* Hamburger for mobile */}
      <div className="sm:hidden flex items-center">
        <button
          className="focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Nav links */}
      <ul className={`hidden sm:flex space-x-8 items-center`}>
        <li>
          <a href="#home" className="text-black font-medium hover:text-amber-600 transition">Home</a>
        </li>
        <li>
          <a href="#about" className="text-black font-medium hover:text-amber-600 transition">About</a>
        </li>
        <li>
          <a href="#product" className="text-black font-medium hover:text-amber-600 transition">Product</a>
        </li>
        <li>
          <a href="#contact" className="text-black font-medium hover:text-amber-600 transition">Contact</a>
        </li>
      </ul>
      <div className="hidden sm:block">
        <Link to="/allproduct">
          <button className='p-[10px] bg-blue-500 w-[100px] rounded-[30px] border-0 shadow-lg hover:bg-blue-800 transition-all duration-300 text-white font-semibold cursor-pointer'>
            Sign In
          </button>
        </Link>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 sm:hidden animate-fade-in z-50">
          <ul className="flex flex-col space-y-4 w-full items-center">
            <li>
              <a href="#home" className="text-black font-medium hover:text-amber-600 transition" onClick={() => setMenuOpen(false)}>Home</a>
            </li>
            <li>
              <a href="#about" className="text-black font-medium hover:text-amber-600 transition" onClick={() => setMenuOpen(false)}>About</a>
            </li>
            <li>
              <a href="#product" className="text-black font-medium hover:text-amber-600 transition" onClick={() => setMenuOpen(false)}>Product</a>
            </li>
            <li>
              <a href="#contact" className="text-black font-medium hover:text-amber-600 transition" onClick={() => setMenuOpen(false)}>Contact</a>
            </li>
            <li>
              <Link to="/allproduct" onClick={() => setMenuOpen(false)}>
                <button className='p-[10px] bg-blue-500 w-[100px] rounded-[30px] border-0 shadow-lg hover:bg-blue-800 transition-all duration-300 text-white font-semibold cursor-pointer'>
                  Sign In
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
