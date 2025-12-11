import React, { useState } from 'react';

const Deletecom = ({ onBack, setCurrentPage }) => {
  const [comparisonId, setComparisonId] = useState('');

  const handleDeleteComparison = () => {
    if (!comparisonId.trim()) {
      alert('Please enter a Comparison ID');
      return;
    }

    // Add your logic here to delete the comparison
    console.log('Deleting Comparison ID:', comparisonId);
    
    // Confirmation dialog
    const confirmDelete = window.confirm(
      `Are you sure you want to delete comparison ${comparisonId}?`
    );
    
    if (confirmDelete) {
      // You can add API call or state management here
      alert('Comparison deleted successfully!');
      
      // Reset form
      setComparisonId('');
    }
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Delete Comparison</h2>

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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* Delete Comparison Button */}
          <button
            onClick={handleDeleteComparison}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Delete Comparison
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deletecom;