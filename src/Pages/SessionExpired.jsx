import React from "react";
import { useNavigate } from "react-router-dom";

const SessionExpired = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-sm">
        <h1 className="text-2xl font-bold text-red-500 mb-3">Session Expired</h1>
        <p className="text-gray-600 mb-6">Your OTP session has expired. Please try again.</p>
        <button
          onClick={() => navigate(-1)}
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded-lg"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default SessionExpired;
