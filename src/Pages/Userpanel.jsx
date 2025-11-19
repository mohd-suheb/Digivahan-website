import React from "react";
import { Download } from "lucide-react";
import {  LogOut} from "lucide-react";

const Userpanel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex">
      {/* Sidebar */}
     <aside className="w-64 bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-gray-200 flex flex-col p-10 shadow-xl">
  <h2 className="text-xl font-semibold text-indigo-400">User Panel</h2>
  {/* Sidebar intentionally left blank as per instruction */}
          <button className="mt-auto flex items-center space-x-2 bg-indigo-600/30 hover:bg-indigo-500/60 rounded-lg px-8 py-4 transition">
            <LogOut className="w-5 h-5 text-indigo-400" />
            <span>Logout</span>
            </button> 

</aside>


      {/* Main Section (Navbar + Content) */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <nav className="px-6 py-4 border-b border-gray-700 bg-gray-800/60
         shadow-md">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold tracking-wide text-indigo-400">
              Dashboard
            </h1>
            <p className="text-sm text-gray-300">Welcome back 👋</p>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-2xl text-center space-y-6 bg-gray-800/60 p-8 rounded-2xl shadow-xl backdrop-blur-md border border-gray-700 mt-10">
            <h2 className="text-3xl font-bold text-indigo-400">
              Welcome to User Dashboard
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Access your DigiVahan user services and explore your personal dashboard.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Manage your vehicle-related queries, track QR services, and view renewal updates easily.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Simplify your digital vehicle management with our secure and smart platform.
            </p>

            {/* Download Button */}
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-2 rounded-full shadow-lg transition">
              <Download className="w-5 h-5" />
              Download Report
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Userpanel;

