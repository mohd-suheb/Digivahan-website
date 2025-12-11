import React, { useState } from 'react';

const Updatecom = ({ onBack, setCurrentPage }) => {
  const [comparisonId, setComparisonId] = useState('');
  const [car1Id, setCar1Id] = useState('');
  const [car2Id, setCar2Id] = useState('');

  const handleUpdateComparison = () => {
    // Add your logic here to update the comparison
    console.log('Comparison ID:', comparisonId);
    console.log('Car 1 ID:', car1Id);
    console.log('Car 2 ID:', car2Id);
    
    // You can add API call or state management here
    alert('Comparison updated successfully!');
    
    // Reset form
    setComparisonId('');
    setCar1Id('');
    setCar2Id('');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Navigation */}
        <div className="mb-6 space-y-2">
          <button
            onClick={() => setCurrentPage("manageuser")}
            className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
          >
            ← Back to Manage User App
          </button>
          <button
            onClick={onBack}
            className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
          >
            ← Back to Menu
          </button>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Update Comparison</h2>

          {/* Comparison ID Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Comparison ID
            </label>
            <input
              type="text"
              value={comparisonId}
              onChange={(e) => setComparisonId(e.target.value)}
              placeholder="CMP-001"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* Car 1 ID Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Car 1 ID
            </label>
            <input
              type="text"
              value={car1Id}
              onChange={(e) => setCar1Id(e.target.value)}
              placeholder="TC-001"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* Car 2 ID Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Car 2 ID
            </label>
            <input
              type="text"
              value={car2Id}
              onChange={(e) => setCar2Id(e.target.value)}
              placeholder="TC-002"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* Update Comparison Button */}
          <button
            onClick={handleUpdateComparison}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Update Comparison
          </button>
        </div>
      </div>
    </div>
  );
};

export default Updatecom;