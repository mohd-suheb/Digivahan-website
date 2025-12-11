import React, { useState } from 'react';
import { Car } from 'lucide-react';

const CheckAllcom = ({ onBack, setCurrentPage }) => {
  const [selectedComparison, setSelectedComparison] = useState(null);

  // Sample comparison data
  const comparisons = [
    {
      id: 'CMP-001',
      car1: { brand: 'Maruti Suzuki', model: 'Swift' },
      car2: { brand: 'Hyundai', model: 'i20' }
    },
    {
      id: 'CMP-002',
      car1: { brand: 'Tata', model: 'Nexon' },
      car2: { brand: 'Hyundai', model: 'Venue' }
    }
  ];

  // Detailed comparison data for selected comparison
  const comparisonDetails = {
    'CMP-001': {
      car1: {
        brand: 'Maruti Suzuki',
        model: 'Swift',
        price: '₹ 8.00 Lakh',
        mileage: '22 km/l',
        engine: '1197 cc',
        power: '89 bhp'
      },
      car2: {
        brand: 'Hyundai',
        model: 'i20',
        price: '₹ 8.50 Lakh',
        mileage: '20 km/l',
        engine: '1197 cc',
        power: '88 bhp'
      },
      features: [
        { name: 'ABS', swift: true, i20: true },
        { name: 'Airbags', swift: true, i20: true },
        { name: 'Sunroof', swift: false, i20: true },
        { name: 'Bluetooth', swift: true, i20: true }
      ]
    }
  };

  const handleComparisonClick = (comparisonId) => {
    setSelectedComparison(comparisonId);
  };

  const handleBackToAllComparisons = () => {
    setSelectedComparison(null);
  };

  // If a comparison is selected, show details
  if (selectedComparison) {
    const details = comparisonDetails[selectedComparison];

    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Navigation */}
          <div className="mb-6 space-y-2">
            <button
              onClick={() => setCurrentPage("manageuser")}
              className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
            >
              ← Back to Manage User App
            </button>
            <button
              onClick={handleBackToAllComparisons}
              className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
            >
              ← Back to All Comparisons
            </button>
          </div>

          {/* Comparison Details Header */}
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Comparison Details</h2>

          {/* Car Cards Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Car 1 */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center mb-4">
                <Car className="w-24 h-24 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{details.car1.brand}</h3>
              <p className="text-blue-600 text-lg mb-4">{details.car1.model}</p>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Price</span>
                  <span className="font-semibold">{details.car1.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Mileage</span>
                  <span className="font-semibold">{details.car1.mileage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Engine</span>
                  <span className="font-semibold">{details.car1.engine}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Power</span>
                  <span className="font-semibold">{details.car1.power}</span>
                </div>
              </div>
            </div>

            {/* Car 2 */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center mb-4">
                <Car className="w-24 h-24 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{details.car2.brand}</h3>
              <p className="text-blue-600 text-lg mb-4">{details.car2.model}</p>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Price</span>
                  <span className="font-semibold">{details.car2.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Mileage</span>
                  <span className="font-semibold">{details.car2.mileage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Engine</span>
                  <span className="font-semibold">{details.car2.engine}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Power</span>
                  <span className="font-semibold">{details.car2.power}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features Comparison Table */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Features Comparison</h3>
            
            <table className="w-full">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-3 px-4 text-gray-700 font-semibold">Feature</th>
                  <th className="text-center py-3 px-4 text-gray-700 font-semibold">{details.car1.model}</th>
                  <th className="text-center py-3 px-4 text-gray-700 font-semibold">{details.car2.model}</th>
                </tr>
              </thead>
              <tbody>
                {details.features.map((feature, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700">{feature.name}</td>
                    <td className="py-3 px-4 text-center">
                      {feature.swift ? (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                          ✓ Yes
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-100 text-red-700">
                          ✗ No
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {feature.i20 ? (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                          ✓ Yes
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-100 text-red-700">
                          ✗ No
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // Default view - All Comparisons List
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
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

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">All Comparisons</h2>
          <p className="text-gray-600 text-sm">View all car comparisons</p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comparisons.map((comparison) => (
            <div
              key={comparison.id}
              onClick={() => handleComparisonClick(comparison.id)}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 p-6"
            >
              {/* Comparison ID with Icon */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-blue-600 font-semibold text-lg">{comparison.id}</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Car Details */}
              <div className="grid grid-cols-2 gap-4">
                {/* Car 1 */}
                <div>
                  <p className="text-gray-500 text-sm mb-1">Car 1</p>
                  <p className="font-semibold text-gray-800">{comparison.car1.brand}</p>
                  <p className="text-blue-600 text-sm">{comparison.car1.model}</p>
                </div>

                {/* Car 2 */}
                <div>
                  <p className="text-gray-500 text-sm mb-1">Car 2</p>
                  <p className="font-semibold text-gray-800">{comparison.car2.brand}</p>
                  <p className="text-blue-600 text-sm">{comparison.car2.model}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckAllcom;