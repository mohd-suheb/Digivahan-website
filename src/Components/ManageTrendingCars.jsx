import React, { useState } from 'react';
import { ArrowLeft, Plus, Edit, Trash2, Eye } from 'lucide-react';

const ManageTrendingCars = ({ onBack }) => {
  const [currentView, setCurrentView] = useState('dashboard'); // dashboard, add, update, delete, view
  const [cars, setCars] = useState([
    { id: 1, name: 'Tata Nexon', price: '₹8-15 Lakhs', fuel: 'Petrol/Diesel/EV', rating: 4.5 },
    { id: 2, name: 'Maruti Swift', price: '₹6-9 Lakhs', fuel: 'Petrol/CNG', rating: 4.3 },
    { id: 3, name: 'Hyundai Creta', price: '₹11-20 Lakhs', fuel: 'Petrol/Diesel', rating: 4.6 },
  ]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [formData, setFormData] = useState({ name: '', price: '', fuel: '', rating: '' });

  // Add Car View
  const AddCarView = () => (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Trending Car</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Car Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
        />
        <input
          type="text"
          placeholder="Price Range"
          value={formData.price}
          onChange={(e) => setFormData({...formData, price: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
        />
        <input
          type="text"
          placeholder="Fuel Type"
          value={formData.fuel}
          onChange={(e) => setFormData({...formData, fuel: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
        />
        <input
          type="number"
          step="0.1"
          placeholder="Rating (0-5)"
          value={formData.rating}
          onChange={(e) => setFormData({...formData, rating: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
        />
        <div className="flex gap-3">
          <button
            onClick={() => {
              setCars([...cars, { id: Date.now(), ...formData }]);
              setFormData({ name: '', price: '', fuel: '', rating: '' });
              alert('Car added successfully! ✅');
              setCurrentView('dashboard');
            }}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
          >
            Add Car
          </button>
          <button
            onClick={() => setCurrentView('dashboard')}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  // Update Car View
  const UpdateCarView = () => (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Update Trending Car</h2>
      {!selectedCar ? (
        <div className="space-y-3">
          {cars.map(car => (
            <div
              key={car.id}
              onClick={() => {
                setSelectedCar(car);
                setFormData(car);
              }}
              className="p-4 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer"
            >
              <h3 className="font-semibold">{car.name}</h3>
              <p className="text-sm text-gray-600">{car.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="text"
            value={formData.price}
            onChange={(e) => setFormData({...formData, price: e.target.value})}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="text"
            value={formData.fuel}
            onChange={(e) => setFormData({...formData, fuel: e.target.value})}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="number"
            step="0.1"
            value={formData.rating}
            onChange={(e) => setFormData({...formData, rating: e.target.value})}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <div className="flex gap-3">
            <button
              onClick={() => {
                setCars(cars.map(c => c.id === selectedCar.id ? {...c, ...formData} : c));
                setSelectedCar(null);
                alert('Car updated successfully! ✅');
                setCurrentView('dashboard');
              }}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              Update
            </button>
            <button
              onClick={() => {
                setSelectedCar(null);
                setCurrentView('dashboard');
              }}
              className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );

  // Delete Car View
  const DeleteCarView = () => (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Delete Trending Car</h2>
      <div className="space-y-3">
        {cars.map(car => (
          <div
            key={car.id}
            className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:bg-red-50"
          >
            <div>
              <h3 className="font-semibold">{car.name}</h3>
              <p className="text-sm text-gray-600">{car.price}</p>
            </div>
            <button
              onClick={() => {
                if (window.confirm(`Delete ${car.name}?`)) {
                  setCars(cars.filter(c => c.id !== car.id));
                  alert('Car deleted successfully! ✅');
                }
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => setCurrentView('dashboard')}
        className="mt-4 bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400"
      >
        Back
      </button>
    </div>
  );

  // View All Cars
  const ViewAllCarsView = () => (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">All Trending Cars</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.map(car => (
          <div key={car.id} className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-lg">{car.name}</h3>
            <p className="text-gray-600">{car.price}</p>
            <p className="text-sm text-gray-500">{car.fuel}</p>
            <p className="text-yellow-500 font-semibold">⭐ {car.rating}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => setCurrentView('dashboard')}
        className="mt-4 bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400"
      >
        Back
      </button>
    </div>
  );

  // Dashboard View
  if (currentView === 'dashboard') {
    return (
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-800 font-medium mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Manage User App
          </button>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Manage Top Trending Cars</h1>
            <p className="text-gray-600">Add, update, delete, or view trending cars</p>
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Add Trending Car */}
            <div
              onClick={() => setCurrentView('add')}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 cursor-pointer hover:shadow-lg transition-all duration-200 border-l-4 border-green-500"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-green-500 p-3 rounded-full">
                  <Plus className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Add Trending Car</h3>
              </div>
              <p className="text-gray-600">Add a new car to the trending list</p>
            </div>

            {/* Update Trending Car */}
            <div
              onClick={() => setCurrentView('update')}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 cursor-pointer hover:shadow-lg transition-all duration-200 border-l-4 border-blue-500"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Edit className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Update Trending Car</h3>
              </div>
              <p className="text-gray-600">Modify existing car details</p>
            </div>

            {/* Delete Trending Car */}
            <div
              onClick={() => setCurrentView('delete')}
              className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-6 cursor-pointer hover:shadow-lg transition-all duration-200 border-l-4 border-red-500"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-red-500 p-3 rounded-full">
                  <Trash2 className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Delete Trending Car</h3>
              </div>
              <p className="text-gray-600">Remove a car from trending list</p>
            </div>

            {/* Check All Trending Cars */}
            <div
              onClick={() => setCurrentView('view')}
              className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-6 cursor-pointer hover:shadow-lg transition-all duration-200 border-l-4 border-purple-500"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-purple-500 p-3 rounded-full">
                  <Eye className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Check All Trending Cars</h3>
              </div>
              <p className="text-gray-600">View all trending cars in the system</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Other Views
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-800 font-medium mb-6"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Manage User App
        </button>

        {currentView === 'add' && <AddCarView />}
        {currentView === 'update' && <UpdateCarView />}
        {currentView === 'delete' && <DeleteCarView />}
        {currentView === 'view' && <ViewAllCarsView />}
      </div>
    </div>
  );
};

export default ManageTrendingCars;