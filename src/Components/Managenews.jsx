import React from 'react'
import { CirclePlus, Edit, Trash2, Eye } from 'lucide-react';

const Managenews = () => {
  return (
     <div className='min-h-screen bg-gray-50 p-6'>
      {/* Header */}
      <div className='mb-6'>
        <button className='text-blue-600 hover:text-blue-700 mb-4 flex items-center gap-1 text-sm'>
          ← Back to Manage User App
        </button>
        <h1 className='text-3xl font-bold text-gray-900 mb-1'>
          Manage Top Trending Cars
        </h1>
        <p className='text-gray-600'>
          Add, update, delete, or view trending cars
        </p>
      </div>

      {/* Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl'>
        {/* Add Trending Car */}
        <div className='flex items-start gap-4 bg-green-100 border-l-4 border-green-500 shadow-sm hover:shadow-md rounded-lg transition duration-200 p-5'>
          <CirclePlus className='bg-green-400 text-white flex-shrink-0 w-11 h-11 rounded-full p-2.5' />
          <div className='flex-1'>
            <h3 className="text-base font-semibold text-gray-800 mb-0.5">
              Add Trending Car
            </h3>
            <p className="text-xs text-gray-600">
              Add a new car to the trending list
            </p>
          </div>
        </div>

        {/* Update Trending Car */}
        <div className='flex items-start gap-4 bg-blue-50 border-l-4 border-blue-500 shadow-sm hover:shadow-md rounded-lg transition duration-200 p-5'>
          <Edit className='bg-blue-400 text-white flex-shrink-0 w-11 h-11 rounded-full p-2.5' />
          <div className='flex-1'>
            <h3 className="text-base font-semibold text-gray-800 mb-0.5">
              Update Trending Car
            </h3>
            <p className="text-xs text-gray-600">
              Modify existing car details
            </p>
          </div>
        </div>

        {/* Delete Trending Car */}
        <div className='flex items-start gap-4 bg-red-50 border-l-4 border-red-500 shadow-sm hover:shadow-md rounded-lg transition duration-200 p-5'>
          <Trash2 className='bg-red-400 text-white flex-shrink-0 w-11 h-11 rounded-full p-2.5' />
          <div className='flex-1'>
            <h3 className="text-base font-semibold text-gray-800 mb-0.5">
              Delete Trending Car
            </h3>
            <p className="text-xs text-gray-600">
              Remove a car from trending list
            </p>
          </div>
        </div>

        {/* Check All Trending Cars */}
        <div className='flex items-start gap-4 bg-purple-50 border-l-4 border-purple-500 shadow-sm hover:shadow-md rounded-lg transition duration-200 p-5'>
          <Eye className='bg-purple-400 text-white flex-shrink-0 w-11 h-11 rounded-full p-2.5' />
          <div className='flex-1'>
            <h3 className="text-base font-semibold text-gray-800 mb-0.5">
              Check All Trending Cars
            </h3>
            <p className="text-xs text-gray-600">
              View all trending cars in the system
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Managenews