import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="h-20 w-full bg-white fixed top-0 left-0 right-0 flex items-center justify-between z-50 shadow-lg">
      <div className="ml-[80px] text-2xl font-bold flex items-center gap-2">
        <span className='text-3xl font-extrabold text-blue-600 drop-shadow-lg'>Code</span>
        <span className='text-3xl font-extrabold text-amber-400 drop-shadow-lg'>Share</span>
        <span className='ml-2 animate-bounce text-2xl text-pink-400'>★</span>
      </div>
      <ul className="flex space-x-8">
        <li>
          <a href="#home" className="text-black font-medium hover:text-amber-600 transition">Home</a>
        </li>
        <li>
          <a href="#about" className="text-black font-medium hover:text-amber-600 transition">About</a>
        </li>
        <li>
          <a href="#contact" className="text-black font-medium hover:text-amber-600 transition">Contact</a>
        </li>
        <li>
          <a href="#product" className="text-black font-medium hover:text-amber-600 transition">Product</a>
        </li>
      </ul>
      <button className='p-[10px] bg-blue-600 w-[100px] rounded-[30px] mr-[80px] border-0 shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-blue-600 hover:to-amber-400 transition-all duration-300 text-white font-semibold'>
       <Link to="/allproduct"> Sign In</Link>
      </button>
    </nav>
  );
}
