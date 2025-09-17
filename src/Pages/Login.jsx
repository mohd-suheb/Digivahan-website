import React from "react";
import logimg from "../assets/Frame 1.png";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl flex flex-col md:flex-row w-full max-w-3xl overflow-hidden">
        
        {/* Left side: Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:p-6 bg-yellow-50">
          <img
            src={logimg}
            alt="Frame Logo"
            className="w-full h-64 sm:h-80 md:h-auto object-contain rounded-lg"
          />
        </div>

        {/* Right side: Form */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-2">
            Welcome to Digivahan!
          </h1>
          <p className="text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base">
            Say something to start a live chat!
          </p>

          <form className="space-y-3 sm:space-y-4">
            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            {/* Forgot password link */}
            <div className="flex justify-end">
              <a
                href="#"
                className="text-xs sm:text-sm text-yellow-500 hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white font-semibold py-2 sm:py-2.5 rounded-lg hover:bg-yellow-600 transition text-sm sm:text-base"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

