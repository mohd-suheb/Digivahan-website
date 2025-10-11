import React, { useState } from "react";
import logimg from "../assets/Frame 1.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Backend call
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.success) {
        toast.success("Login Successful!", {
          position: "top-right", // ✅ string value
          autoClose: 3000,
        });

        console.log("Logged in user:", data.user);

        // JWT token localStorage me save karo
        localStorage.setItem("token", data.token);
      } else {
        toast.error(data.message || "Login failed!", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (err) {
      toast.error("Server error!", {
        position: "top-right",
        autoClose: 3000,
      });
      console.error(err);
    }
  };

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
            Welcome to DigiVahan!
          </h1>
          <p className="text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base">
            Please enter your details to continue.
          </p>

          <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0">
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
                className="w-full sm:w-1/2 px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
                className="w-full sm:w-1/2 px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <div className="flex justify-end">
              <a
                href="#"
                className="text-xs sm:text-sm text-yellow-500 hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white font-semibold py-2 sm:py-2.5 rounded-lg hover:bg-yellow-600 transition text-sm sm:text-base"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;

