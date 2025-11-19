import React from 'react';
import { ArrowLeft } from "lucide-react";
import userAvatar from "../assets/User Avatar.png";
import imgvec from "../assets/Vector.png";
import { FaUser } from "react-icons/fa";
import { FaUsersRectangle } from "react-icons/fa6";
import { PiCurrencyCircleDollarFill } from "react-icons/pi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFonticons } from "react-icons/fa6";
import groupimg from "../assets/Group 513691.png";
import locnimg from "../assets/location 1.png";
import { useNavigate } from 'react-router-dom';

const Startchat = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen flex flex-col items-center px-4 md:px-8 lg:px-12">
      {/* Header */}
      <div className="flex w-full items-center gap-3 p-4 shadow-md">
        <ArrowLeft className="w-6 h-6 md:w-7 md:h-7 text-gray-700 cursor-pointer" />
        <h1 className="text-lg md:text-xl font-semibold text-gray-800 ml-auto">
          Scan QR Code
        </h1>
      </div>

      {/* Profile Section */}
      <main className="flex flex-col items-center mt-8 text-center">
        <img
          src={userAvatar}
          alt="User Avatar"
          className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-blue-500 object-cover"
        />

        <div className="flex gap-2 items-center mt-3">
          <h1 className="text-xl md:text-2xl font-bold">Rajat Malik</h1>
          <img src={imgvec} alt="right vector" className="w-6 h-6 md:w-8 md:h-8" />
        </div>

        {/* User Info */}
        <div className="flex flex-wrap justify-center gap-5 md:gap-10 text-center mt-3">
          <div className="flex items-center gap-2">
            <FaUser className="text-yellow-400 text-lg md:text-xl" />
            <p className="text-sm md:text-base font-semibold text-gray-600">Sonu</p>
          </div>

          <div className="flex items-center gap-2">
            <FaUsersRectangle className="text-yellow-400 text-lg md:text-xl" />
            <p className="text-sm md:text-base font-semibold text-gray-600">
              27 years old
            </p>
          </div>

          <div className="flex items-center gap-2">
            <PiCurrencyCircleDollarFill className="text-yellow-400 text-lg md:text-xl" />
            <p className="text-sm md:text-base font-semibold text-gray-600">Male</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 mt-3 flex-wrap">
          <FaMapMarkerAlt className="text-yellow-400 text-lg md:text-xl" />
          <p className="text-sm md:text-base font-semibold text-gray-600">
            Jamna Paar, Preet Vihar, Delhi
          </p>
        </div>
      </main>

      {/* Reason Text */}
      <div className="text-center font-medium mt-6 mb-4 w-full text-sm md:text-base">
        Please fill all necessary details before having a chat
      </div>

      {/* Textarea */}
      <div className="flex flex-col w-full mb-4">
        <label
          htmlFor="description"
          className="text-gray-700 font-bold text-lg md:text-2xl mb-2"
        >
          Describe the Textarea
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Describe the textarea..."
          className="w-full h-60 md:h-80 p-4 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
        />
      </div>

      {/* Share a Photo Section */}
      <div className="flex flex-col w-full mb-6">
        <label
          htmlFor="photoUpload"
          className="text-black text-lg md:text-2xl font-semibold mb-2 ml-1"
        >
          Share a Photo
        </label>
        <button
          id="photoUpload"
          className="flex items-center justify-center w-full h-14 bg-gray-400 rounded-md text-white font-semibold text-base md:text-lg gap-2 border-2 border-dotted border-yellow-400 hover:bg-gray-500 transition"
        >
          <FaFonticons className="text-yellow-300 h-8 w-8 md:h-10 md:w-10" />
          Add Icon Info
        </button>
      </div>

      {/* 3 Images Row */}
      <div className="flex justify-center sm:justify-end gap-3 sm:gap-4 mb-4 flex-wrap">
        <img src={groupimg} alt="img1" className="w-14 h-14 md:w-16 md:h-16 rounded-md" />
        <img src={groupimg} alt="img2" className="w-14 h-14 md:w-16 md:h-16 rounded-md" />
        <img src={groupimg} alt="img3" className="w-14 h-14 md:w-16 md:h-16 rounded-md" />
      </div>

      {/* Current Location */}
      <div className="flex flex-col mb-6 w-full">
        <p className="font-bold text-lg md:text-2xl mb-2">Current Location</p>
        <img
          src={locnimg}
          alt="location"
          className="w-full h-60 md:h-80 object-cover rounded-xl"
        />
      </div>

      {/* Start Chatting Button */}
      <button
        className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 rounded-md bg-yellow-400 text-white font-bold text-base md:text-lg px-8 py-3 mb-8 hover:bg-yellow-500 transition"
        onClick={() => navigate("/chatimg")}
      >
        Start Chatting
      </button>
    </div>
  );
};

export default Startchat;


