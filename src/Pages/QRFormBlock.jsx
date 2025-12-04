import React from 'react'

const QRFormBlock = () => {
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
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter QR ID (e.g., QR-2025-001)"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Check QR
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QRFormBlock;