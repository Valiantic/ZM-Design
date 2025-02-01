import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaProjectDiagram} from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';
import logo from '../../assets/images/logo.jpeg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white">
      <div className="max-w-[100vw] px-2 sm:px-4">
        <div className="flex items-center justify-between py-2 md:py-4">

          {/* Updated Logo Section */}
          <Link to="/" className="flex items-center space-x-3 text-sm md:text-base lg:text-lg">
            <img className="h-10 w-10 sm:h-8 sm:w-8" src={logo} alt="Logo" />
            <span className="text-2xl sm:text-xl font-bold text-black-600">ZM Design</span>
          </Link>

          {/* DESKTOP VIEW */}
          <div className="hidden md:block text-sm md:text-base">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className="nav-link text-black hover:text-black-600 transition-colors text-lg font-medium flex items-center gap-4">
                <FaHome className="text-xl" /> Home
              </Link>
              <Link to="/projects" className="nav-link text-black hover:text-black-600 transition-colors text-lg font-medium flex items-center gap-4">
                <FaProjectDiagram className="text-xl" /> Projects
              </Link>
              <Link to="/contacts" className="nav-link text-black hover:text-black-600 transition-colors text-lg font-medium flex items-center gap-4">
                <MdPhone className="text-xl" /> Contacts
              </Link>
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
          <div className="md:hidden w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center bg-white">
              <Link to="/" className="nav-link text-black hover:text-black-600 transition-colors py-2 text-lg font-medium w-32 text-center flex items-center justify-center gap-2">
                <FaHome /> Home
              </Link>
              <Link to="/projects" className="nav-link text-black hover:text-black-600 transition-colors py-2 text-lg font-medium w-32 text-center flex items-center justify-center gap-2">
                <FaUser /> Projects
              </Link>
              <Link to="/contacts" className="nav-link text-black hover:text-black-600 transition-colors py-2 text-lg font-medium w-32 text-center flex items-center justify-center gap-2">
                <FaProjectDiagram /> Contacts
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
