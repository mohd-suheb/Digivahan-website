import React, { useState } from "react";
import logimg from "../assets/Frame 1.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
     const res = await fetch(`${process.env.REACT_APP_API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log("Login response:", data);

      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.user.role);
        toast.success("Login Successful!", { autoClose: 2000 });

        setTimeout(() => {
          if (data.user.role === "admin") navigate("/admin-panel");
          else navigate("/user-panel");
        }, 1000);
      } else {
        toast.error(data.message || "Invalid credentials", { autoClose: 2000 });
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error("Server error!", { autoClose: 2000 });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl flex flex-col md:flex-row w-full max-w-3xl overflow-hidden">
        <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:p-6 bg-yellow-50">
          <img src={logimg} alt="Logo" className="w-full h-64 sm:h-80 md:h-auto object-contain rounded-lg" />
        </div>

        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-2">Welcome to DigiVahan!</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" />
            <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded-lg">Login</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;

