
import React from 'react';
import { Link } from 'react-router-dom';

const RenewalReminder = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-yellow-400 to-yellow-600">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Never Miss a Renewal Again
        </h2>
        <p className="text-lg mb-8">
          Get automatic reminders for insurance, PUC, and other important vehicle documents. 
          Stay compliant and save on penalties.
        </p>
        <Link
          to="/register"
          className="inline-block bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Start Now - It's Free!
        </Link>
      </div>
    </section>
  );
};

export default RenewalReminder;