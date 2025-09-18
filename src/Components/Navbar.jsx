import React, { useState } from "react";
import logo from "../assets/Group 8.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-lg   mb-1  z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        
        {/* Left + Center (Logo + Pages) */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="Digivahan Logo" className="h-12 sm:h-14 w-auto" />
          </Link>

          {/* Pages */}
          <ul className="hidden md:flex space-x-5 text-gray-700 font-medium">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/updates">Updates</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        {/* Right - Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Link to="/login">
            <button className="text-yellow-500 cursor-pointer">Login</button>
          </Link>
          <Link to="/button">
            <div className="bg-yellow-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-yellow-600 transition">
              Get Started
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-6 space-y-6 absolute top-[72px] left-0 w-full">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium text-base">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/news" onClick={() => setIsOpen(false)}>News</Link></li>
            <li><Link to="/updates" onClick={() => setIsOpen(false)}>Updates</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
          </ul>
          <div className="flex flex-col gap-4">
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <button className="text-yellow-500 w-full text-left">Login</button>
            </Link>
            <Link to="/button" onClick={() => setIsOpen(false)}>
              <div className="bg-yellow-500 text-white px-4 py-2 rounded text-center hover:bg-yellow-600 transition">
                Get Started
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
