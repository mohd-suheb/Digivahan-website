

import React, { useState } from 'react';
import { Car, Users, ArrowLeft, Phone, Mail, User, Ban, ShieldOff, Eye } from 'lucide-react';

export const Reports = () => {
  const [selectedReport, setSelectedReport] = useState(null);
  const [showUnsuspendForm, setShowUnsuspendForm] = useState(false);
  const [justification, setJustification] = useState('');
  const [userId, setUserId] = useState('');
  const [qrId, setQrId] = useState('');
  const [reason, setReason] = useState('');

  // Sample user data
  const userData = {
    name: "Rohan Verma",
    userId: "VEH-3421",
    contact: "+91 98765 43210",
    email: "rohan.verma@email.com",
    accountType: "Premium Member",
    verificationStatus: "Verified",
    activeQRCount: "5 QR Codes"
  };

  const reports = [
    {
      id: 1,
      type: "Harassment",
      reportedBy: "Priya Sharma (CU-5632)",
      message: "Inappropriate behavior and harassing messages",
      date: "22 Dec, 2025"
    },
    {
      id: 2,
      type: "Fake Profile",
      reportedBy: "Amit Kumar (CU-7821)",
      message: "Using fake identity and misleading information",
      date: "20 Dec, 2025"
    },
    {
      id: 3,
      type: "Fraud",
      reportedBy: "Neha Singh (CU-4532)",
      message: "Fraudulent transaction attempt",
      date: "18 Dec, 2025"
    }
  ];

  const getReportTypeColor = (type) => {
    const colors = {
      "Harassment": "bg-red-100 text-red-700",
      "Fake Profile": "bg-orange-100 text-orange-700",
      "Fraud": "bg-red-100 text-red-700"
    };
    return colors[type] || "bg-gray-100 text-gray-700";
  };

  const handlePostJustification = () => {
    console.log("Posting justification:", justification);
    setJustification('');
  };

  const handleSubmitUnsuspend = () => {
    console.log("Unsuspend submission:", { userId, qrId, reason });
    setUserId('');
    setQrId('');
    setReason('');
    setShowUnsuspendForm(false);
  };

  // If a report is selected, show detail page
  if (selectedReport) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        {/* Back Button */}
        <button 
          onClick={() => setSelectedReport(null)}
          className="flex items-center gap-2 text-blue-600 mb-6 hover:text-blue-700"
        >
          <ArrowLeft size={20} />
          <span>Back to Reports</span>
        </button>

        {/* User Profile Card */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold mb-6">User Profile</h2>
          
          <div className="flex gap-6">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center">
                <User size={48} className="text-white" />
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1 grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Name</p>
                <p className="font-semibold">{userData.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">User ID</p>
                <p className="font-semibold">{userData.userId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Contact</p>
                <p className="flex items-center gap-2">
                  <Phone size={16} className="text-gray-500" />
                  <span>{userData.contact}</span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Email</p>
                <p className="flex items-center gap-2">
                  <Mail size={16} className="text-gray-500" />
                  <span>{userData.email}</span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Account Type</p>
                <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm">
                  {userData.accountType}
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Active QR Count</p>
                <p className="font-semibold">{userData.activeQRCount}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Verification Status</p>
                <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded text-sm">
                  {userData.verificationStatus}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="flex items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
              <ShieldOff size={18} />
              Suspend User
            </button>
            <button className="flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
              <Ban size={18} />
              Block QR Code
            </button>
          </div>
        </div>

        {/* Reports Table */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">All Reports Filed Against This User</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Report Type</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Reported By User</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Message</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Screenshot/Proof</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((report) => (
                    <tr key={report.id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <span className={`inline-block px-3 py-1 rounded text-sm ${getReportTypeColor(report.type)}`}>
                          {report.type}
                        </span>
                      </td>
                      <td className="py-4 px-4">{report.reportedBy}</td>
                      <td className="py-4 px-4 text-gray-600">{report.message}</td>
                      <td className="py-4 px-4">
                        <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
                          <Eye size={16} />
                          View
                        </button>
                      </td>
                      <td className="py-4 px-4 text-gray-600">{report.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* User Justification */}
        <div className="bg-yellow-50 rounded-lg shadow p-6 mb-6 border border-yellow-200">
          <h2 className="text-lg font-bold mb-2">User Justification</h2>
          <p className="text-sm text-gray-600 mb-4">Enter justification on behalf of user</p>
          
          <textarea
            value={justification}
            onChange={(e) => setJustification(e.target.value)}
            placeholder="Enter justification..."
            className="w-full border border-gray-300 rounded p-3 mb-4 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          
          <button 
            onClick={handlePostJustification}
            className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700"
          >
            Post Justification
          </button>
        </div>

        {/* Unsuspend / Unblock Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold mb-4">Unsuspend / Unblock</h2>
          
          {!showUnsuspendForm ? (
            <button 
              onClick={() => setShowUnsuspendForm(true)}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Show Unsuspend Form
            </button>
          ) : (
            <div>
              <button 
                onClick={() => setShowUnsuspendForm(false)}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 mb-6"
              >
                Hide Form
              </button>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    User ID (to unsuspend)
                  </label>
                  <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Enter User ID"
                    className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    OR QR ID (to unblock QR)
                  </label>
                  <input
                    type="text"
                    value={qrId}
                    onChange={(e) => setQrId(e.target.value)}
                    placeholder="Enter QR ID"
                    className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reason
                  </label>
                  <textarea
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Enter reason for unsuspending..."
                    className="w-full border border-gray-300 rounded p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <button 
                  onClick={handleSubmitUnsuspend}
                  className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                >
                  Submit Unsuspend
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Main Reports Dashboard
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
        <p className="text-gray-600 mt-1">Manage user reports and take action</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vehicle Owner Reports Card */}
        <div 
          onClick={() => setSelectedReport('vehicle_owner')}
          className="bg-blue-100 rounded-lg p-6 border border-blue-200 cursor-pointer hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="text-blue-600">
                <Car size={32} strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Vehicle Owner Reports</h2>
                <p className="text-sm text-gray-600 mt-1">Reports filed against vehicle owners</p>
              </div>
            </div>
            <div className="text-4xl font-bold text-gray-900">24</div>
          </div>
        </div>

        {/* Interactor Reports Card */}
        <div 
          onClick={() => setSelectedReport('interactor')}
          className="bg-purple-100 rounded-lg p-6 border border-purple-200 cursor-pointer hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="text-purple-600">
                <Users size={32} strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Interactor Reports</h2>
                <p className="text-sm text-gray-600 mt-1">Reports filed against interactors</p>
              </div>
            </div>
            <div className="text-4xl font-bold text-gray-900">18</div>
          </div>
        </div>
      </div>
    </div>
  );
};


