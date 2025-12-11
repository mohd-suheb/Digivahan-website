import React, { useState } from 'react';

const Addtrendingcar = ({onBack, setSelectedPolicy, setCurrentPage}) => {
  const [formData, setFormData] = useState({
    trendingCarId: '',
    brandName: '',
    modelName: '',
    type: '',
    price: '',
    priceDisplay: '',
    mileage: '',
    topSpeed: '',
    imageUrl: '',
    engine: '',
    transmission: '',
    tankCapacity: '',
    seatHeight: '',
    weight: '',
    maxPower: '',
    torque: '',
    ridingModes: '',
    gearPattern: '',
    bootspace: '',
    groundClearance: '',
    length: '',
    width: '',
    height: '',
    features: {
      abs: false,
      airbags: false,
      bluetooth: false,
      cruiseControl: false,
      parkingSensors: false,
      sunroof: false
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      features: {
        ...prev.features,
        [name]: checked
      }
    }));
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    alert('Car added successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Links */}
       <div className='mb-6'>
              <a  onClick={()=>setCurrentPage("manageuser")}
               
               href="#" className="text-blue-600 text-sm hover:underline"> ← Back to Manage User App</a>
               <br/>
               <div>
                 <a 
                 onClick={()=>  setCurrentPage("managetop")}
                            //  setCurrentPage={setCurrentPage}
                  href='#' className='text-blue-600 text-sm hover:underline'>← Back to menu</a>
               
               </div>
             
            </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center text-white text-xl font-bold">
              +
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">Add Trending Car</h1>
              <p className="text-sm text-gray-500">Fill in all the car details</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Basic Information */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Basic Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Trending Car ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="trendingCarId"
                  value={formData.trendingCarId}
                  onChange={handleInputChange}
                  placeholder="Enter Car ID (e.g., TC-001)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Brand Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="brandName"
                  value={formData.brandName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Model Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="modelName"
                  value={formData.modelName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                >
                  <option value="">Select Type</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="hatchback">Hatchback</option>
                  <option value="sports">Sports</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="₹ 1500000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Display</label>
                <input
                  type="text"
                  name="priceDisplay"
                  value={formData.priceDisplay}
                  onChange={handleInputChange}
                  placeholder="₹15.00 Lakh"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mileage</label>
                <input
                  type="text"
                  name="mileage"
                  value={formData.mileage}
                  onChange={handleInputChange}
                  placeholder="20 km/l"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Top Speed</label>
                <input
                  type="text"
                  name="topSpeed"
                  value={formData.topSpeed}
                  onChange={handleInputChange}
                  placeholder="180 km/h"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                <input
                  type="text"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  placeholder="https://..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Specifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Engine</label>
                <input
                  type="text"
                  name="engine"
                  value={formData.engine}
                  onChange={handleInputChange}
                  placeholder="1498 cc"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Transmission</label>
                <input
                  type="text"
                  name="transmission"
                  value={formData.transmission}
                  onChange={handleInputChange}
                  placeholder="Manual/Automatic"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tank Capacity</label>
                <input
                  type="text"
                  name="tankCapacity"
                  value={formData.tankCapacity}
                  onChange={handleInputChange}
                  placeholder="45 liters"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Seat Height</label>
                <input
                  type="text"
                  name="seatHeight"
                  value={formData.seatHeight}
                  onChange={handleInputChange}
                  placeholder="800 mm"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Weight</label>
                <input
                  type="text"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  placeholder="1200 kg"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Detailed Specifications */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Detailed Specifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Max Power</label>
                <input
                  type="text"
                  name="maxPower"
                  value={formData.maxPower}
                  onChange={handleInputChange}
                  placeholder="120 bhp"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Torque</label>
                <input
                  type="text"
                  name="torque"
                  value={formData.torque}
                  onChange={handleInputChange}
                  placeholder="170 Nm"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Riding Modes</label>
                <input
                  type="text"
                  name="ridingModes"
                  value={formData.ridingModes}
                  onChange={handleInputChange}
                  placeholder="Eco, Sport, Normal"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gear Pattern</label>
                <input
                  type="text"
                  name="gearPattern"
                  value={formData.gearPattern}
                  onChange={handleInputChange}
                  placeholder="5-Speed Manual"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Dimensions */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Dimensions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bootspace</label>
                <input
                  type="text"
                  name="bootspace"
                  value={formData.bootspace}
                  onChange={handleInputChange}
                  placeholder="350 liters"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ground Clearance</label>
                <input
                  type="text"
                  name="groundClearance"
                  value={formData.groundClearance}
                  onChange={handleInputChange}
                  placeholder="180 mm"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Length</label>
                <input
                  type="text"
                  name="length"
                  value={formData.length}
                  onChange={handleInputChange}
                  placeholder="4500 mm"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Width</label>
                <input
                  type="text"
                  name="width"
                  value={formData.width}
                  onChange={handleInputChange}
                  placeholder="1800 mm"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Height</label>
                <input
                  type="text"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  placeholder="1600 mm"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Features</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="abs"
                  name="abs"
                  checked={formData.features.abs}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="abs" className="text-sm text-gray-700">ABS</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="airbags"
                  name="airbags"
                  checked={formData.features.airbags}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="airbags" className="text-sm text-gray-700">Airbags</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="bluetooth"
                  name="bluetooth"
                  checked={formData.features.bluetooth}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="bluetooth" className="text-sm text-gray-700">Bluetooth</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="cruiseControl"
                  name="cruiseControl"
                  checked={formData.features.cruiseControl}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="cruiseControl" className="text-sm text-gray-700">Cruise Control</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="parkingSensors"
                  name="parkingSensors"
                  checked={formData.features.parkingSensors}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="parkingSensors" className="text-sm text-gray-700">Parking Sensors</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="sunroof"
                  name="sunroof"
                  checked={formData.features.sunroof}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="sunroof" className="text-sm text-gray-700">Sunroof</label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md flex items-center gap-2 font-medium transition-colors"
            >
              <span className="text-xl">+</span>
              Add Car
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addtrendingcar;