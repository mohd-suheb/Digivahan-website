import React from 'react'
import { CiCirclePlus } from "react-icons/ci";

const Addtrendingcar = ({ setCurrentPage, onBack}) => {
  return (
    <div className='min-h-screen bg-gray-50 p-6'>

        <div className='bg-gray-50'>
            {/* Header */}
             <div className="mb-6">
            <button 
              onClick={onBack}
              className="text-blue-600 text-sm hover:underline mb-1 block"
            >
              ← Back to Manage User App
            </button>
            <a href="#" className="text-blue-600 text-sm hover:underline mb-1 block">
              ← Back to Menu
            </a>
           
            </div>
               
        </div>

         <div className='bg-white shadow-md rounded-md  flex   w-full mx-auto '>

                     <div className='flex items-start gap-3 mt-5'>
                      <CiCirclePlus  className='w-10 h-10 rounded-full bg-green-300 text-white mt-1'/>
                      <div className='flex-1'>
                        <p className='text-[20px] text-gray-800'>Add trending cars</p>
                        <p className='text-[10px] text-gray-400'>Fill in All the car details</p>
                      </div>

                     </div>

                     
                    


                </div>
                {/* input form */}
                     <div className='bg-white  flex' >
                        <p>Basic Information</p>

                     <div className='mt-6 flex gap-5'>
                        {/* 3 input  */}
                        <div>
                         <div>
                            <label 
                     htmlFor="carId" 
                   className="block text-sm font-medium text-gray-700 mb-1"
                     >
                 Trending Car ID *
                     </label>
                   <input
                  id="carId"
                  name="carId"
                  type="text"
                  placeholder="Enter Car ID (e.g., TC-001)"
                  className="w-[300px] px-3 py-2 border border-gray-300 rounded-lg 
               focus:ring-2 focus:ring-green-500 focus:border-transparent 
               outline-none"
                    />
                        </div>

                        <div>
                            <label 
                     htmlFor="carId" 
                   className="block text-sm font-medium text-gray-700 mb-1"
                     >
                 Trending Car ID *
                     </label>
                   <input
                   id="carId"
    name="carId"
    type="text"
    placeholder="Enter Car ID (e.g., TC-001)"
    className="w-[300px] px-3 py-2 border border-gray-300 rounded-lg 
               focus:ring-2 focus:ring-green-500 focus:border-transparent 
               outline-none"
                    />
                        </div>

                        <div>
                            <label 
                     htmlFor="carId" 
                   className="block text-sm font-medium text-gray-700 mb-1"
                     >
                 Trending Car ID *
                     </label>
                   <input
                   id="carId"
    name="carId"
    type="text"
    placeholder="Enter Car ID (e.g., TC-001)"
    className="w-[300px] px-3 py-2 border border-gray-300 rounded-lg 
               focus:ring-2 focus:ring-green-500 focus:border-transparent 
               outline-none"
                    />
                        </div>
                        </div>
                        
                     </div>
                     <div className='mt-6 flex gap-5'>
                       <div>
                            <label 
                     htmlFor="carId" 
                   className="block text-sm font-medium text-gray-700 mb-1"
                     >
                 Trending Car ID *
                     </label>
                   <input
                   id="carId"
    name="carId"
    type="text"
    placeholder="Enter Car ID (e.g., TC-001)"
    className="w-[300px] px-3 py-2 border border-gray-300 rounded-lg 
               focus:ring-2 focus:ring-green-500 focus:border-transparent 
               outline-none"
                    />
                        </div>


                        <div>
                            <label 
                     htmlFor="carId" 
                   className="block text-sm font-medium text-gray-700 mb-1"
                     >
                 Trending Car ID *
                     </label>
                   <input
                   id="carId"
    name="carId"
    type="text"
    placeholder="Enter Car ID (e.g., TC-001)"
    className="w-[300px] px-3 py-2 border border-gray-300 rounded-lg 
               focus:ring-2 focus:ring-green-500 focus:border-transparent 
               outline-none"
                    />
                        </div>

                        <div>
                            <label 
                     htmlFor="carId" 
                   className="block text-sm font-medium text-gray-700 mb-1"
                     >
                 Trending Car ID *
                     </label>
                   <input
                   id="carId"
    name="carId"
    type="text"
    placeholder="Enter Car ID (e.g., TC-001)"
    className="w-[300px] px-3 py-2 border border-gray-300 rounded-lg 
               focus:ring-2 focus:ring-green-500 focus:border-transparent 
               outline-none"
                    />
                        </div>
                     </div>
                     <div></div>

                     </div>

    </div>
  )
}

export default Addtrendingcar