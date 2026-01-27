import React from 'react';
import { FaMapMarkerAlt, FaClock, FaBell } from 'react-icons/fa';

const VehicleTracking = () => {
  const features = [
    {
      icon: <FaMapMarkerAlt className="text-4xl" />,
      title: 'Real-time Tracking',
      description: 'Track your vehicle documents and services in real-time',
    },
    {
      icon: <FaClock className="text-4xl" />,
      title: 'Quick Access',
      description: 'Access all your vehicle information instantly',
    },
    {
      icon: <FaBell className="text-4xl" />,
      title: 'Smart Reminders',
      description: 'Never miss an important renewal date',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Smart Vehicle Management
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Experience seamless vehicle management with our advanced features
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition"
            >
              <div className="text-yellow-600 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleTracking;