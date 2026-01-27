
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to DigiVahan
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          India's Premier Digital Vehicle Management Platform
        </p>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Manage your vehicle documents, track renewals, and access all vehicle-related services in one place.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/register"
            className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;