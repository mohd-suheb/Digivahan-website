import React from "react";
import renewalImage from "../assets/Important renewal.png";

const RenewalReminder = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12  p-6 md:p-8 rounded-lg">
        
        <div className="flex-shrink-0">
          <img
            src={renewalImage}
            alt="Renewal Reminder"
            className="w-full max-w-xs md:max-w-sm h-auto"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-3xl font-bold text-black">Never Miss an</h3>
          <h3 className="text-3xl font-bold text-black mb-4">Important Renewal</h3>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
            Our smart alert system keeps you worry-free by tracking your vehicle’s Insurance and PUC expiry dates. 
            You’ll receive instant notifications directly on your dashboard and via push alerts. This helps you renew on time, maintain compliance, and ensure uninterrupted coverage.
          </p>
        </div>

      </div>
    </section>
  );
};

export default RenewalReminder;

