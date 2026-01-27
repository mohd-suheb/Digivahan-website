import React, { useState, useEffect } from 'react';
import { useAuth } from '../utils/AuthContext';
import { vehicleAPI, orderAPI } from '../services/api';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  const { user, logout } = useAuth();
  const [vehicles, setVehicles] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const [vehiclesRes, ordersRes] = await Promise.all([
        vehicleAPI.getAllVehicles(),
        orderAPI.getUserOrders(),
      ]);

      if (vehiclesRes.data.success) {
        setVehicles(vehiclesRes.data.vehicles);
      }

      if (ordersRes.data.success) {
        setOrders(ordersRes.data.orders);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      toast.error('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    window.location.href = '/';
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome, {user?.firstname}!
              </h1>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`${
                activeTab === 'overview'
                  ? 'border-yellow-500 text-yellow-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('vehicles')}
              className={`${
                activeTab === 'vehicles'
                  ? 'border-yellow-500 text-yellow-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              My Vehicles
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`${
                activeTab === 'orders'
                  ? 'border-yellow-500 text-yellow-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              My Orders
            </button>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Vehicles</h3>
              <p className="text-3xl font-bold text-yellow-600">{vehicles.length}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Orders</h3>
              <p className="text-3xl font-bold text-yellow-600">{orders.length}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pending Orders</h3>
              <p className="text-3xl font-bold text-yellow-600">
                {orders.filter(order => order.status === 'pending').length}
              </p>
            </div>
          </div>
        )}

        {activeTab === 'vehicles' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">My Vehicles</h2>
              <Link
                to="/user/add-vehicle"
                className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
              >
                Add New Vehicle
              </Link>
            </div>

            {vehicles.length === 0 ? (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <p className="text-gray-500 mb-4">No vehicles added yet</p>
                <Link
                  to="/user/add-vehicle"
                  className="inline-block px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
                >
                  Add Your First Vehicle
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vehicles.map((vehicle) => (
                  <div key={vehicle._id} className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {vehicle.vehicleNumber}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">Owner: {vehicle.ownerName}</p>
                    <p className="text-sm text-gray-600 mb-1">Type: {vehicle.vehicleType}</p>
                    <p className={`text-sm font-medium ${vehicle.status === 'active' ? 'text-green-600' : 'text-red-600'}`}>
                      Status: {vehicle.status}
                    </p>
                    <div className="mt-4 flex gap-2">
                      <Link
                        to={`/user/vehicle/${vehicle._id}`}
                        className="flex-1 text-center px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
                      >
                        View
                      </Link>
                      <Link
                        to={`/user/vehicle/edit/${vehicle._id}`}
                        className="flex-1 text-center px-3 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition text-sm"
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'orders' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">My Orders</h2>
              <Link
                to="/user/create-order"
                className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
              >
                Create New Order
              </Link>
            </div>

            {orders.length === 0 ? (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <p className="text-gray-500 mb-4">No orders yet</p>
                <Link
                  to="/user/create-order"
                  className="inline-block px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
                >
                  Create Your First Order
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order._id} className="bg-white rounded-lg shadow p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {order.orderName}
                        </h3>
                        <p className="text-sm text-gray-600">Order ID: {order.orderId}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        order.status === 'processed' ? 'bg-blue-100 text-blue-800' :
                        order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Vehicle Number:</p>
                        <p className="font-medium">{order.vehicleNumber}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Owner Name:</p>
                        <p className="font-medium">{order.ownerName}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Order Date:</p>
                        <p className="font-medium">{new Date(order.orderDate).toLocaleDateString()}</p>
                      </div>
                      {order.qrAssigned && (
                        <div>
                          <p className="text-gray-600">QR Code:</p>
                          <p className="font-medium">{order.qrAssigned}</p>
                        </div>
                      )}
                    </div>
                    {order.trackingLink && (
                      <div className="mt-4">
                        <a
                          href={order.trackingLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          Track Order →
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;