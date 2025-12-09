import React from 'react'
import { Trash2Icon } from "lucide-react";



const DeletetCom = ({ onBack, setCurrentPage }) => {
  return (

       <div className='h-min-screen bg-gray-50'>

        <div className='max-w-4xl mx-auto'>
            {/* Headre */}

            <div className='mb-6'>
              <a  onClick={()=>setCurrentPage("manageuser")}
               
               href="#" className="text-blue-600 text-sm hover:underline"> ← Back to Manage User App</a>
               <br/>
               <div>
                 <a onClick={onBack}
              href='#' className='text-blue-600 text-sm hover:underline'>← Back to menu</a>
               
               </div>
             
            </div>

            {/* Main card */}
            <div className='bg-white rounded-lg border border-gray-200'>
                 {/* Title Section */}
                 <div  className='p-6 border border-gray-200'>
                    <div className='flex items-start gap-4'>
                        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                           
                           <Trash2Icon className ='w-5 h-5 text-red-100' />
                        </div>
             <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-800 mb-0.5">
                  Delete Trending Car
                </h3>
                <p className="text-xs text-gray-600">
                 Remove a car from the trending list
                </p>
              </div>
                    </div>
                  

                              <div className="p-6">
                               <label className="block text-[12px] text-gray-700 mb-2">
                                Enter trending car id
                               </label>
                               <div className="flex gap-2">
                                 <input
                                   type="text"
                                //    value={searchQuery}
                                //    onChange={(e) => setSearchQuery(e.target.value)}
                                //    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                                   placeholder="TC-001"
                                   className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                 />
                                 <button
                                //    onClick={handleSearch}
                                   className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
                                 >
                                   < Trash2Icon className="w-4 h-4" />
                                   Delete
                                 </button>
                               </div>
                              </div>

                 </div>


                             
            </div>


        </div>

    </div>
  )
}

export default DeletetCom