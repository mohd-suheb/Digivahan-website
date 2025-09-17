import React from "react";
import personalimage from "../assets/Your personal vitrual garage.png";

const VehicleTracking = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 md:px-6">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-black mb-4">Track Your All Vehicles</h1>
        <p className="text-gray-700 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Easily track all your vehicles in one place with real-time location, status updates, and instant alerts.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 bg-white p-4 md:p-8 rounded-lg">
        <div className="flex items-start md:items-center gap-2 md:gap-4">
          <img
            src={personalimage}
            alt="Your personal virtual garage"
            className="w-full max-w-xs md:max-w-sm h-auto"
          />
          <div className="border-l-2 border-yellow-400 h-40 md:h-64"></div>
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-black mb-4">Your Personal Virtual Garage</h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Manage all your vehicles from a single smart Virtual Garage. Access complete details, store documents, and receive timely reminders for insurance, PUC, service, and loans — anytime, anywhere.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VehicleTracking;
