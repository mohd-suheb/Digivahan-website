import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About DigiVahan</h1>
          
          <div className="space-y-6 text-gray-700">
            <p className="text-lg">
              DigiVahan is India's premier digital vehicle management platform, revolutionizing how vehicle owners manage their documents, track renewals, and access vehicle-related services.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Our Mission</h2>
            <p>
              To digitize and simplify vehicle management for millions of Indians, making it easier to stay compliant with regulations while providing quick access to essential services.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">What We Offer</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Digital storage of vehicle documents</li>
              <li>Smart QR code generation for vehicle identification</li>
              <li>Automatic renewal reminders for insurance and PUC</li>
              <li>Vehicle comparison tools</li>
              <li>Latest automotive news and updates</li>
              <li>24/7 customer support</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Company Information</h2>
            <p>
              <strong>DIGIVAHAN DIGITAL INDIA PRIVATE LIMITED</strong><br />
              CIN: U62099DL2023PTC420571<br />
              Registered in New Delhi, India
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Contact Us</h2>
            <p>
              For any queries or support, please reach out to us through our contact page or customer support channels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;