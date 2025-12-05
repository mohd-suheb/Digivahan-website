

import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';
import EditPolicyPage from './Editpolicypage';

export default function UpdatePolicies({ onBack, setSelectedPolicy, setCurrentPage }) {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Manage User App
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Update Policies</h1>
          <p className="text-gray-600">Select a policy to update its content</p>
        </div>

        {/* Policy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Terms & Conditions */}
          <div
            onClick={() => {
             setSelectedPolicy("Terms & Conditions");
              setCurrentPage("editpolicy")
            }}
            className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer border-l-4 border-blue-500 p-6"
          >
            <div className="flex items-start gap-4">
              <FileText className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Terms & Conditions
                </h3>
                <p className="text-sm text-gray-600">
                  Add new car to the trending list
                </p>
              </div>
            </div>
          </div>

          {/* Privacy Policy */}
          <div
            onClick={() => {
             setSelectedPolicy("Terms & Conditions");
              setCurrentPage("editpolicy")
            }}
            className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer border-l-4 border-blue-500 p-6"
          >
            <div className="flex items-start gap-4">
              <FileText className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Privacy Policy
                </h3>
                <p className="text-sm text-gray-600">
                  Click to edit this policy
                </p>
              </div>
            </div>
            
          </div>

          {/* Data Protection Policy */}
          <div
             onClick={() => {
             setSelectedPolicy("Terms & Conditions");
              setCurrentPage("editpolicy")
            }}
            className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer border-l-4 border-blue-500 p-6"
          >
            <div className="flex items-start gap-4">
              <FileText className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Data Protection Policy
                </h3>
                <p className="text-sm text-gray-600">
                  Click to edit this policy
                </p>
              </div>
            </div>
          </div>

          {/* Refund Policy */}
          <div
             onClick={() => {
             setSelectedPolicy("Terms & Conditions");
              setCurrentPage("editpolicy")
            }}
            className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer border-l-4 border-blue-500 p-6"
          >
            <div className="flex items-start gap-4">
              <FileText className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Refund Policy
                </h3>
                <p className="text-sm text-gray-600">
                  Click to edit this policy
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}