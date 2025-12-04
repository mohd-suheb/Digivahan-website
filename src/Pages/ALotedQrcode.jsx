import React from 'react'


const ALotedQrcode = () => {
  return (

     <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-1">QR Management</h1>
          <p className="text-sm text-gray-500">Manage and monitor QR code allocation</p>
        </div>

        {/* Back Link */}
        <a href="#" className="text-blue-600 text-sm hover:underline mb-6 inline-block">
          ← Back to Overview
        </a>

        {/* Main Form Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mt-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">Check Assigned QR Code</h2>
            <p className="text-sm text-gray-500">Enter QR ID to view details and status</p>
          </div>

          {/* Input Field with Button */}
          <div>
            <div>
              <label htmlFor='text'>
              <p className='  text-[12px] text-gray-600'>Number of QR to be Allotted *</p>
            </label>
            <input
              type="text"
              placeholder="Enter Number (e.g., No)"
              className=" w-[800px] border border-gray-300 rounded-lg px-4 py-2"
            />
            </div>
            
             <div className='mt-3'>
               <label htmlFor='text'>
              <p className='text-[12px] text-gray-600'>Sales Person ID *</p>
            </label>
             <input
              type="text"
              placeholder="Enter Sales person (e.g., sp-105)"
              className=" w-[800px] border border-gray-300 rounded-lg px-4 py-2"
            />
             </div>

             <div className='mt-4  bg-orange-700 px-96  py-2 rounded-lg text-white'>
              <button className='w-[450px] '>
                Allot Qr code
      
              </button>
             </div>
           
            <div className='mt-4  bg-orange-100 px-96  py-2 rounded-lg text-white border border-orange-500'>
              <button className='w-[450px] text-[10px] text-red-300 '>
                Note: Once allotted, QR codes will be assigned to the sales person's account and reflected in their dashboard.
      
              </button>
             </div>

             


            
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ALotedQrcode