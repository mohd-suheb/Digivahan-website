import React from "react";
import logo from "../assets/Group 152.png";
import { FaYoutube, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { PiBirdFill } from "react-icons/pi";
import digismalimg from "../assets/Group 8.png";
import { Link } from "react-router-dom";
import Appimg from "../assets/App Download.png";
// import { Link } from "react-router-dom";
import Razatpg from "../Pages/Razatpg";
export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10">
      {/* Top section */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        
        {/* Logo + Company Info */}
        <div className="space-y-3">
          <img src={logo} alt="Final Logo" className="h-16 w-auto object-contain" />
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
            <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About us</Link></li>
            {/* <li><Link to="/news">News</Link></li>
            <li><Link to="/updates">Updates</Link></li> */}
            {/* <li><Link to="/login">Login</Link></li> */}
          </ul>
        </div>

        {/* Support */}
        {/* <div>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="text-gray-600 font-bold">Support</li>
            <li><Link to="/contactus">Contact Us</Link></li>
            <li><Link to= "/Visit-us">Visit Us</Link></li>
            <li><Link to= "/Raise">Raise Concern</Link></li>
            <li><Link to= "/Report">Reports</Link></li>
          </ul>
        </div> */}

        {/* Company */}
        <div>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="text-gray-600 font-bold">Company</li>
            {/* <li>About</li> */}

          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/protection-policy">Data Protection Policy</Link></li>
            <li><Link to="/return-refund-policy">Return & Refund Policy</Link></li>

            <li>
          <Link to="/terms-and-conditions">Terms and Conditions</Link>
          </li>

          </ul>
        </div>

        {/* Available On */}
        <div>
          {/* <p className="text-gray-600 font-bold mb-3">Available on</p> */}
        {/* <Link to="/razat">
        <img src={Appimg} alt="App Download" className="h-16 w-auto cursor-pointer" />
        </Link> */}
        </div>
      </div>

      {/* Bottom Border Line */}
      <div className="border-t border-gray-300 w-[90%] mx-auto"></div>

      {/* Last part */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 gap-4">
        {/* Left Part */}
        {/* <div className="flex items-center gap-4">
          <img src={digismalimg} alt="group Image" className="h-12 w-auto" />
          <p className="text-xs sm:text-sm text-gray-600">© 2023 All rights reserved.</p>
        </div> */}

        {/* Right Part (Icons) */}
        {/* <div className="flex items-center gap-3 text-gray-600 text-xl">
          <FaYoutube className="hover:text-red-600 cursor-pointer" />
          <FaFacebookSquare className="hover:text-blue-600 cursor-pointer" />
          <PiBirdFill className="hover:text-sky-500 cursor-pointer" />
          <FaInstagramSquare className="hover:text-pink-500 cursor-pointer" />
          <span className="font-semibold cursor-pointer">in</span>
        </div> */}
      </div>
    </footer>
  );
};



