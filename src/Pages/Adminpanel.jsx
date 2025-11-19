
import React, { useEffect, useState } from "react";
import { SiPlausibleanalytics } from "react-icons/si";
import { Bell, Settings, User, Home, LogOut, QrCode, Users } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Adminpanel = () => {
  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch Privacy Policy
  const fetchdata = async () => {
  try {
    const token = localStorage.getItem("token");
    console.log("Fetch token:", token);

    const res = await fetch("http://localhost:5000/api/privacy-policy", {
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}` 
      },
    });

    const json = await res.json();
    console.log("Fetch privacy response:", json);

    if (json.success) setdata(json.data);
    else toast.error(json.message || "Failed to load privacy policy");

  } catch (err) {
    console.error("Fetch error:", err);
    toast.error("Server error while fetching data");
  } finally {
    setLoading(false);
  }
};


  useEffect(() => { fetchdata(); }, []);

  // Update Privacy Policy
  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("Update token:", token, "Content:", data?.content);

      const res = await fetch("http://localhost:5000/api/privacy-policy", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content: data?.content }),
      });

      console.log("PUT response status:", res.status);

      if (!res.ok) {
        const text = await res.text();
        console.error("Server response:", text);
        throw new Error("Failed to update");
      }

      const json = await res.json();
      console.log("Update response:", json);

      if (json.success) {
        toast.success("Privacy Policy updated successfully!");
        setdata(json.data);
      } else toast.error(json.message || "Update failed");
    } catch (err) {
      console.error("Error updating policy:", err);
      toast.error("Error updating privacy policy");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0f172a] text-gray-100">
        <h2 className="text-2xl font-semibold animate-pulse">Loading Admin Panel...</h2>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#0f172a] text-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-gray-200 flex flex-col p-5 space-y-6 shadow-xl">
        <h2 className="text-2xl font-bold text-center text-indigo-400">Admin Panel</h2>

        <nav className="flex flex-col space-y-3 mt-6">
          <button className="flex items-center space-x-3 bg-indigo-600 rounded-lg px-3 py-2 hover:bg-indigo-600/40 transition">
            <Home className="w-5 h-5 text-indigo-400" /> <span>Dashboard</span>
          </button>
          <button className="flex items-center space-x-3 hover:bg-indigo-600/20 rounded-lg px-3 py-2 transition">
            <User className="w-5 h-5 text-indigo-400" /> <span>Requests</span>
          </button>
          <button className="flex items-center space-x-3 hover:bg-indigo-600/20 rounded-lg px-3 py-2 transition">
            <QrCode className="w-5 h-5 text-indigo-400" /> <span>QR Management</span>
          </button>
          <button className="flex items-center space-x-3 hover:bg-indigo-600/20 rounded-lg px-3 py-2 transition">
            <Users className="w-5 h-5 text-indigo-400" /> <span>Customers</span>
          </button>
          <button className="flex items-center space-x-3 hover:bg-indigo-600/20 rounded-lg px-3 py-2 transition">
            <Settings className="w-5 h-5 text-indigo-400" /> <span>Settings</span>
          </button>
          <button className="flex items-center space-x-3 hover:bg-indigo-600/20 rounded-lg px-3 py-2 transition">
            <SiPlausibleanalytics className="w-5 h-5 text-indigo-400" /> <span>Analytics</span>
          </button>
        </nav>

        <button className="mt-auto flex items-center space-x-2 bg-indigo-600/30 hover:bg-indigo-500/60 rounded-lg px-4 py-2 transition">
          <LogOut className="w-5 h-5 text-indigo-400" />
          <span>Logout</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-[#1e293b]/60 backdrop-blur-md shadow-md py-4 px-6 flex justify-between items-center border-b border-gray-700">
          <h1 className="text-xl font-semibold text-gray-200">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Bell className="w-5 h-5 text-gray-300 hover:text-indigo-400 cursor-pointer" />
          </div>
        </header>

        <main className="p-6 space-y-6">
          <h1 className="font-bold text-3xl mb-4">Customer Based Overview</h1>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#1e293b]/80 rounded-xl shadow-lg p-5 hover:shadow-indigo-500/30 transition">
              <h3 className="text-gray-400 font-semibold">Total Users</h3>
              <p className="text-3xl font-semibold mt-2 text-indigo-400">12,458</p>
              <p className="text-sm mt-1 text-blue-200">+12.5% from last month</p>
            </div>
            <div className="bg-[#1e293b]/80 rounded-xl shadow-lg p-5 hover:shadow-green-500/30 transition">
              <h3 className="text-gray-400 font-semibold">Total QR Sold</h3>
              <p className="text-3xl font-semibold mt-2 text-green-400">8,540</p>
              <p className="text-sm mt-1 text-blue-200">Overall QRCodes</p>
            </div>
            <div className="bg-[#1e293b]/80 rounded-xl shadow-lg p-5 hover:shadow-orange-400/30 transition">
              <h3 className="text-gray-400 font-semibold">Virtual QR Sold</h3>
              <p className="text-3xl font-semibold mt-2 text-orange-400">5,898</p>
              <p className="text-sm mt-1 text-blue-200">71.5% of total</p>
            </div>
            <div className="bg-[#1e293b]/80 rounded-xl shadow-lg p-5 hover:shadow-orange-400/30 transition">
              <h3 className="text-gray-400 font-semibold">Physical QR Sold</h3>
              <p className="text-3xl font-semibold mt-2 text-orange-400">34</p>
              <p className="text-sm mt-1 text-blue-200">28.5% of total</p>
            </div>
          </div>

          {/* Privacy Policy Editor */}
          <div className="bg-[#1e293b]/80 rounded-xl shadow-lg p-6 hover:shadow-indigo-400/30 transition mt-8">
            <h2 className="text-lg font-semibold text-gray-200 mb-4">Privacy Policy Editor</h2>

            <textarea
              value={data?.content || ""}
              onChange={(e) => setdata((prev) => ({ ...prev, content: e.target.value }))}
              rows={10}
              className="w-full min-h-[220px] p-4 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 hover:border-indigo-400 focus:border-indigo-400 transition-colors duration-300 outline-none resize-none"
            />

            <div className="flex justify-end mt-4">
              <button
                onClick={handleUpdate}
                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white font-semibold transition"
              >
                Save Changes
              </button>
            </div>
          </div>
        </main>
      </div>

      <ToastContainer position="top-right" autoClose={2000} theme="dark" />
    </div>
  );
};

export default Adminpanel;




