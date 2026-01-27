import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { orderAPI, vehicleAPI } from '../services/api';
import toast from 'react-hot-toast';

const CreateOrder = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const [formData, setFormData] = useState({
    orderName: '',
    ownerName: '',
    vehicleNumber: '',
  });

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await vehicleAPI.getAllVehicles();
      if (response.data.success) {
        setVehicles(response.data.vehicles);
      }
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'vehicleNumber') {
      // Auto-fill owner name when vehicle is selected
      const selectedVehicle = vehicles.find(v => v.vehicleNumber === value);
      if (selectedVehicle) {
        setFormData({
          ...formData,
          vehicleNumber: value,
          ownerName: selectedVehicle.ownerName,
        });
      } else {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await orderAPI.createOrder(formData);
      
      if (response.data.success) {
        toast.success('Order created successfully!');
        navigate('/user/dashboard');
      }
    } catch (error) {
      console.error('Error creating order:', error);
      toast.error(error.response?.data?.message || 'Failed to create order');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Create New Order</h2>
            <p className="mt-2 text-sm text-gray-600">
              Place an order for your vehicle services
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Order Name *
              </label>
              <input
                type="text"
                name="orderName"
                required
                value={formData.orderName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="e.g., Premium Car Wash, QR Code Registration"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Vehicle *
              </label>
              <select
                name="vehicleNumber"
                required
                value={formData.vehicleNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="">Choose a vehicle</option>
                {vehicles.map((vehicle) => (
                  <option key={vehicle._id} value={vehicle.vehicleNumber}>
                    {vehicle.vehicleNumber} - {vehicle.ownerName}
                  </option>
                ))}
              </select>
              {vehicles.length === 0 && (
                <p className="mt-2 text-sm text-red-600">
                  No vehicles found. Please add a vehicle first.
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Owner Name *
              </label>
              <input
                type="text"
                name="ownerName"
                required
                value={formData.ownerName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-50"
                placeholder="Owner name"
                readOnly={!!formData.vehicleNumber}
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-sm font-medium text-blue-900 mb-2">Order Information</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Your order will be processed within 24-48 hours</li>
                <li>• You will receive a tracking link once processed</li>
                <li>• QR codes will be assigned for applicable orders</li>
              </ul>
            </div>

            <div className="flex gap-4 pt-6">
              <button
                type="submit"
                disabled={loading || vehicles.length === 0}
                className="flex-1 py-3 px-4 bg-yellow-600 text-white font-medium rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Creating Order...' : 'Create Order'}
              </button>
              <button
                type="button"
                onClick={() => navigate('/user/dashboard')}
                className="flex-1 py-3 px-4 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;