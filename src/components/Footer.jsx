import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-blue-950 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo and Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h1 className="text-3xl font-extrabold"><span className="text-blue-500">Code</span><span className="text-amber-400">Share</span></h1>
          <p className="text-white text-shadow-md">Enlight Your Future</p>
        </div>
        {/* Navigation Links */}
        <div className="flex flex-col md:flex-col text-lg font-medium">
          <ul className="list-disc ">
            <li><a href="#home" className="hover:text-amber-400 transition text-white">Documentation</a></li>
            <li><a href="#about" className="hover:text-amber-400 transition text-white">Policies</a></li>
            <li><a href="#product" className="hover:text-amber-400 transition text-white">Privacy and Security</a></li>
            <li><a href="#contact" className="hover:text-amber-400 transition text-white">Feedback</a></li>
          </ul>
        </div>
        {/* Social Icons */}
        <div className="flex gap-4">
          <FontAwesomeIcon icon={faInstagram} className="text-pink-500 hover:text-pink-700 transition cursor-pointer" size="2x" />
          <FontAwesomeIcon icon={faFacebook} className="text-blue-600 hover:text-blue-800 transition cursor-pointer" size="2x" />
          <FontAwesomeIcon icon={faTwitter} className="text-blue-400 hover:text-blue-600 transition cursor-pointer" size="2x" />
        </div>
      </div>
      <div className="text-center text-white text-sm mt-8 ml-[30px]">&copy;  CodeShare. All rights reserved.</div>
    </footer>
  )
}
