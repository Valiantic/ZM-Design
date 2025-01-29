import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaProjectDiagram } from 'react-icons/fa';
import logo from '../assets/images/logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white/90 backdrop-blur-sm shadow-md z-[1000] font-poppins">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          {/* LOGO SECTION */}
          <div className="flex items-center space-x-2">
            <img className="h-10 w-10 sm:h-8 sm:w-8" src={logo} alt="Logo" />
            <span className="text-2xl sm:text-xl font-bold text-black-600 font-poppins">ZM Design</span>
          </div>

          {/* DESKTOP VIEW */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className="nav-link text-black hover:text-black-600 transition-colors text-lg font-medium flex items-center gap-4">
                <FaHome className="text-xl" /> Home
              </a>
              <a href="#" className="nav-link text-black hover:text-black-600 transition-colors text-lg font-medium flex items-center gap-4">
                <FaUser className="text-xl" /> About
              </a>
              <a href="#" className="nav-link text-black hover:text-black-600 transition-colors text-lg font-medium flex items-center gap-4">
                <FaProjectDiagram className="text-xl" /> Projects
              </a>
            </div>
          </div>

          {/* MOBILE VIEW */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-black-600 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU WITH ICONS */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
              <a href="#" className="nav-link text-black hover:text-black-600 transition-colors py-2 text-lg font-medium w-32 text-center flex items-center justify-center gap-2">
                <FaHome /> Home
              </a>
              <a href="#" className="nav-link text-black hover:text-black-600 transition-colors py-2 text-lg font-medium w-32 text-center flex items-center justify-center gap-2">
                <FaUser /> About
              </a>
              <a href="#" className="nav-link text-black hover:text-black-600 transition-colors py-2 text-lg font-medium w-32 text-center flex items-center justify-center gap-2">
                <FaProjectDiagram /> Projects
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
