import React from "react";
import logo from "../assets/Group 8.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        
        <div className="flex items-center space-x-4 md:space-x-6 w-full md:w-auto justify-between">
          <Link to="/">
            <img src={logo} alt="Digivahan Logo" className="h-14 w-auto" />
          </Link>
          <ul className="flex space-x-3 md:space-x-6 text-gray-700 font-medium text-sm sm:text-base">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/updates">Updates</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        <div className="flex items-center space-x-3">
          <Link to="/login">
            <button className="text-yellow-500 cursor-pointer text-sm sm:text-base">Login</button>
          </Link>
          <Link to="/button">
            <div className="bg-yellow-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded cursor-pointer text-sm sm:text-base">
              Get Started
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

