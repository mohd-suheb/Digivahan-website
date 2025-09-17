import React from "react";
import logo from "../assets/Group 152.png";
import { FaApple, FaGooglePlay, FaYoutube, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import digismalimg from "../assets/Group 8.png";
import { PiBirdFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import Appimg from "../assets/App Download.png";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Top section */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        
        {/* Logo + Company Info */}
        <div className="space-y-3 col-span-2 sm:col-span-1">
          <img 
            src={logo} 
            alt="Final Logo" 
            className="h-20 w-auto object-contain" 
          />
          <p className="text-xs md:text-sm text-gray-700 font-semibold">
            DIGIVAHAN DIGITAL INDIA PRIVATE LIMITED
          </p>
          <p className="text-xs md:text-sm text-gray-500">
            CIN U62099DL2023PTC420571
          </p>
        </div>

        {/* Pages */}
        <div>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="text-gray-600 font-bold">Pages</li>
            <li>Home</li>
            <li>News</li>
            <li>Updates</li>
            <li>Login</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="text-gray-600 font-bold">Support</li>
            <Link to="/contactus">ContactUs</Link>
            <li>Visit Us</li>
            <li>Raise Concern</li>
            <li>Reports</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="text-gray-600 font-bold">Company</li>
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Data Protection Policy</li>
            <li>Return and Refund Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>

        {/* Available On */}
        <div>
          <p className="text-gray-600 font-bold mb-3">Available on</p>
          <img
            src={Appimg}
            alt="App Download"
            className="h-20 w-auto"
          />
        </div>
      </div>

      {/* Bottom Border Line */}
      <div className="border-t border-gray-300 w-[90%] mx-auto"></div>

      {/* last part */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 gap-4">
        {/* Left Part (Image + Paragraph) */}
        <div className="flex items-center gap-4">
          <img
            src={digismalimg}
            alt="group Image"
            className="h-14 w-auto"
          />
          <p className="text-xs sm:text-sm text-gray-600">@ 2023 All rights reserved.</p>
        </div>

        {/* Right Part (Icons) */}
        <div className="flex items-center gap-3 text-gray-600 text-lg">
          <FaYoutube className="hover:text-red-600 cursor-pointer" />
          <FaFacebookSquare className="hover:text-blue-600 cursor-pointer" />
          <PiBirdFill className="hover:text-sky-500 cursor-pointer" />
          <FaInstagramSquare className="hover:text-pink-500 cursor-pointer" />
          <span className="font-semibold">in</span>
        </div>
      </div>
    </footer>
  );
};

