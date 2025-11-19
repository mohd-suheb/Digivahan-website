import React from 'react'
import { GoArrowLeft } from "react-icons/go";
import userAvatar from "../assets/User Avatar.png";
import imgvec from "../assets/Vector.png";
import { IoCallSharp, IoChatbox } from "react-icons/io5";
import { FaUser, FaCircle, FaCheck } from "react-icons/fa";
import { FaUsersRectangle } from "react-icons/fa6";
import { PiCurrencyCircleDollarFill } from "react-icons/pi";


const Rajatdetails = () => {
  return (
    <>
      {/* SECTION 1 - Header & Profile */}
      <div className='bg-white shadow-md hover:shadow-lg w-full min-h-[70vh] px-4 py-6'>
        {/* Header */}
        <div className='flex justify-between items-center'>
          <GoArrowLeft className='h-7 w-7 cursor-pointer' />
          <p className='text-lg sm:text-xl font-semibold text-black'>Rajat details</p>
          <div className='text-3xl sm:text-4xl text-black cursor-pointer transition'>&#8942;</div>
        </div>

        {/* Avatar */}
        <div className='flex justify-center mt-8'>
          <img
            src={userAvatar}
            alt='User Avatar'
            className='w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-blue-500 object-cover'
          />
        </div>

        {/* Name */}
        <div className='flex gap-2 justify-center items-center mt-4'>
          <h1 className='text-xl sm:text-2xl font-bold text-black'>Rajat Malik</h1>
          <img src={imgvec} alt='right vector' className='w-6 h-6 sm:w-8 sm:h-8' />
        </div>

        {/* Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center mt-10 px-2'>
          {/* Call Button */}
          
          <button className='bg-yellow-400 text-white flex items-center justify-center gap-2 px-5 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition w-full sm:w-auto'>
            <IoCallSharp className='text-lg sm:text-xl' />
            <p className='font-semibold text-sm sm:text-base'>Call to Rajat</p>
          </button>
         
          

          {/* Chat Button */}
          <button className='bg-yellow-400 text-white flex items-center justify-center gap-2 px-5 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition w-full sm:w-auto'>
            <IoChatbox className='text-lg sm:text-xl' />
            <p className='font-semibold text-sm sm:text-base'>Chat with Rajat</p>
          </button>
        </div>
      </div>

      {/* SECTION 2 - Rajat Details */}
      <div className='flex flex-col items-center justify-center mt-6 space-y-4 shadow-md hover:shadow-md text-center min-h-[60vh] p-4 rounded-lg'>
        <h1 className='text-xl sm:text-2xl font-bold text-gray-800'>Rajat Details</h1>

        {/* Name & Age Row */}
        <div className='flex flex-col sm:flex-row sm:space-x-10 justify-center items-center gap-3 mt-2'>
          {/* Name */}
          <div className='flex items-center gap-2'>
            <FaUser className='text-yellow-400 text-lg sm:text-xl' />
            <p className='text-[15px] sm:text-[17px] font-medium text-gray-700'>Sonu</p>
          </div>

          {/* Age */}
          <div className='flex items-center gap-2'>
            <FaUsersRectangle className='text-yellow-400 text-lg sm:text-xl' />
            <p className='text-[15px] sm:text-[17px] font-medium text-gray-700'>27 years old</p>
          </div>
        </div>

        {/* Location */}
        <div className='flex items-center justify-center gap-2 mt-2 flex-wrap'>
          <FaCircle className='bg-yellow-400 text-white p-[5px] rounded-full text-[8px] sm:text-[10px]' />
          <p className='text-[15px] sm:text-[17px] font-medium text-gray-700'>
            Jamna Paar, Preet Vihar, Delhi
          </p>
        </div>

        {/* Gender */}
        <div className='flex items-center justify-center gap-2 mt-1'>
          <PiCurrencyCircleDollarFill className='text-yellow-400 text-lg sm:text-xl' />
          <p className='text-[15px] sm:text-[17px] font-medium text-gray-700'>Male</p>
        </div>
      </div>

      {/* SECTION 3 - Health Report */}
      <div className='bg-white mt-4 w-full min-h-[70vh] shadow-md hover:shadow-md p-4 sm:p-6'>
        <h2 className='text-black font-bold text-lg sm:text-xl'>Health Report</h2>
        <p className='text-gray-500 mt-2 font-bold text-base sm:text-lg'>Allergies</p>

        {/* 3 Buttons */}
        <div className='mt-3 flex flex-wrap gap-3'>
          <button className='bg-white border border-yellow-400 rounded-lg flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 shadow-sm hover:bg-yellow-50 transition'>
            <p className='text-gray-800 font-medium text-sm sm:text-base'>Penicillin</p>
            <FaCheck className='text-green-500 text-sm' />
          </button>

          <button className='bg-white border border-yellow-400 rounded-lg flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 shadow-sm hover:bg-yellow-50 transition'>
            <p className='text-gray-800 font-medium text-sm sm:text-base'>Aspirin (ASA)</p>
            <FaCheck className='text-green-500 text-sm' />
          </button>

          <button className='bg-white border border-yellow-400 rounded-lg flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 shadow-sm hover:bg-yellow-50 transition'>
            <p className='text-gray-800 font-medium text-sm sm:text-base'>Sulfa Drugs</p>
            <FaCheck className='text-green-500 text-sm' />
          </button>
        </div>

        {/* Extra Button */}
        <div className='mt-4'>
          <button className='bg-white border border-yellow-400 rounded-lg flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 shadow-sm hover:bg-yellow-50 transition'>
            <p className='text-gray-800 font-medium text-sm sm:text-base'>Ibuprofen / NSAIDs</p>
            <FaCheck className='text-green-500 text-sm' />
          </button>
        </div>

        {/* More Allergies */}
        <p className='text-gray-500 mt-4 font-bold text-base sm:text-lg'>Allergies</p>
        <div className='flex flex-wrap gap-2 mt-3'>
          <button className='bg-white border border-yellow-400 rounded-lg flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 shadow-sm hover:bg-yellow-50 transition'>
            <p className='text-gray-800 font-medium text-sm sm:text-base'>Sulfa Drugs</p>
            <FaCheck className='text-green-500 text-sm' />
          </button>
          <button className='bg-white border border-yellow-400 rounded-lg flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 shadow-sm hover:bg-yellow-50 transition'>
            <p className='text-gray-800 font-medium text-sm sm:text-base'>Sulfa Drugs</p>
            <FaCheck className='text-green-500 text-sm' />
          </button>
        </div>

        {/* Note */}
        <div className='mt-3'>
          <p className='text-gray-500 font-bold text-base sm:text-lg'>Note</p>
          <p className='text-gray-500 font-medium text-sm sm:text-base'>N/A</p>
        </div>
      </div>
    </>
  )
}

export default Rajatdetails
