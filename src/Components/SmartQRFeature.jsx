import React from "react";
import qrImage from "../assets/smart QR.png";

const SmartQRFeature = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 md:px-6">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-black mb-4">Smart QR Feature</h1>
        <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Allow the public to connect with you instantly and securely by simply scanning your vehicle’s Smart QR.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 bg-white p-4 md:p-8 rounded-lg">
        <div className="flex items-start md:items-center gap-6 md:gap-8 max-w-xl md:max-w-2xl">
          <div className="border-l-4 border-yellow-400 h-48 md:h-64"></div>
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              Smart QR – Connect Securely in Seconds
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Our Smart QR feature lets anyone connect with you instantly while keeping your privacy intact. Place it on your vehicle for safe and fast communication without revealing personal info.
            </p>
          </div>
        </div>

        <div className="flex-shrink-0">
          <img src={qrImage} alt="Smart QR" className="w-full max-w-xs md:max-w-sm h-auto" />
        </div>
      </div>
    </section>
  );
};

export default SmartQRFeature;

