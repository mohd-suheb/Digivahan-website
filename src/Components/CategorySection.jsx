import React from "react";
import protectionIcon from "../assets/247 protection ico.png";
import alertIcon from "../assets/Instant Alert icon.svg";
import secureIcon from "../assets/Secure System.png";

const Category = () => {
  return (
    <section className="w-full py-16  ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="p-6 rounded-2xl text-center">
            <img
              src={protectionIcon}
              alt="24/7 Protection"
              className="h-16 mx-auto mb-4"
            />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              24/7 Protection
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-tight">
              Ensure your vehicle’s safety with our advanced round-the-clock
              monitoring system, keeping it protected 24/7 no matter where you are.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl shadow-md bg-white text-center">
            <img
              src={alertIcon}
              alt="Instant Alerts"
              className="h-16 mx-auto mb-4"
            />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              Instant Alerts
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-tight">
              Real-time notifications delivered instantly for your vehicle’s safety,
              keeping you informed and in control at all times.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl shadow-md bg-white text-center">
            <img
              src={secureIcon}
              alt="Secure System"
              className="h-16 mx-auto mb-4"
            />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              Secure System
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-tight">
              End-to-end encrypted chat system ensuring safe, private, and secure
              communication with the public.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Category;


