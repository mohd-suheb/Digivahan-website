import React from 'react'
import { CirclePlus, Edit, Trash2, Eye } from 'lucide-react';

const Managepopcm = ({setCurrentPage }) => {
  return (
    <div className='min-h-screen bg-gray-50 p-6'>
      {/* Header */}
      <div className='mb-6'>
        <button onClick={()=>setCurrentPage("manageuser")}
         className='text-blue-600 hover:text-blue-700 mb-4 flex items-center gap-1 text-sm'>
          ← Back to Manage User App
        </button>
        <h1 className='text-3xl font-bold text-gray-900 mb-1'>
          Manage Popular Comparison
        </h1>
        <p className='text-gray-600'>
          Add, update, delete, or view trending cars
        </p>
      </div>

      {/* Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl'>
        {/* Add Trending Car */}
        <div   onClick={() => setCurrentPage("addcpm")}
        className='flex items-start gap-4 bg-green-100 border-l-4 border-green-500 shadow-sm hover:shadow-md rounded-lg transition duration-200 p-5'>
          <CirclePlus className='bg-green-400 text-white flex-shrink-0 w-11 h-11 rounded-full p-2.5' />
          <div className='flex-1'>
            <h3 className="text-base font-semibold text-gray-800 mb-0.5">
              Add Comparison
            </h3>
            <p className="text-xs text-gray-600">
              Create a new comparison
            </p>
          </div>
        </div>

        {/* Update Trending Car */}
        <div  onClick={()=>setCurrentPage("Update")}
         className='flex items-start gap-4 bg-blue-50 border-l-4 border-blue-500 shadow-sm hover:shadow-md rounded-lg transition duration-200 p-5'>
          <Edit className='bg-blue-400 text-white flex-shrink-0 w-11 h-11 rounded-full p-2.5' />
          <div className='flex-1'>
            <h3 className="text-base font-semibold text-gray-800 mb-0.5">
              Update Comparison
            </h3>
            <p className="text-xs text-gray-600">
             Remove a Comparison
            </p>
          </div>
        </div>

        {/* Delete Trending Car */}
        <div onClick={()=>setCurrentPage("Delcmp")}
         className='flex items-start gap-4 bg-red-50 border-l-4 border-red-500 shadow-sm hover:shadow-md rounded-lg transition duration-200 p-5'>
          <Trash2 className='bg-red-400 text-white flex-shrink-0 w-11 h-11 rounded-full p-2.5' />
          <div className='flex-1'>
            <h3 className="text-base font-semibold text-gray-800 mb-0.5">
              Delete Comparison
            </h3>
            <p className="text-xs text-gray-600">
              Remove a Comparison
            </p>
          </div>
        </div>

        {/* Check All Trending Cars */}
        <div onClick={()=>setCurrentPage("chekallcmp")}
         className='flex items-start gap-4 bg-purple-50 border-l-4 border-purple-500 shadow-sm hover:shadow-md rounded-lg transition duration-200 p-5'>
          <Eye className='bg-purple-400 text-white flex-shrink-0 w-11 h-11 rounded-full p-2.5' />
          <div className='flex-1'>
            <h3 className="text-base font-semibold text-gray-800 mb-0.5">
              Check All Comparison
            </h3>
            <p className="text-xs text-gray-600">
              View all  cars Comparison
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Managepopcm