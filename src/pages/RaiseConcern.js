import React, { useState } from 'react';
import { useAuth } from '../utils/AuthContext';
import { reportAPI } from '../services/api';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const RaiseConcern = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    reportedUserId: '',
    reportedUserName: '',
    reportedBy: user?.id || `GUEST-${Date.now()}`,
    reportType: 'Other',
    message: '',
    screenshot: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAuthenticated()) {
      toast.error('Please login to raise a concern');
      navigate('/login');
      return;
    }

    setLoading(true);

    try {
      const response = await reportAPI.submitReport(formData);
      
      if (response.data.success) {
        toast.success('Your concern has been submitted successfully!');
        setFormData({
          reportedUserId: '',
          reportedUserName: '',
          reportedBy: user?.id || `GUEST-${Date.now()}`,
          reportType: 'Other',
          message: '',
          screenshot: '',
        });
      }
    } catch (error) {
      console.error('Error submitting report:', error);
      toast.error(error.response?.data?.message || 'Failed to submit report');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Raise a Concern</h2>
            <p className="mt-2 text-sm text-gray-600">
              Report any issues or concerns you have encountered
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Reported User ID *
                </label>
                <input
                  type="text"
                  name="reportedUserId"
                  required
                  value={formData.reportedUserId}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="e.g., VEH-3421"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Reported User Name *
                </label>
                <input
                  type="text"
                  name="reportedUserName"
                  required
                  value={formData.reportedUserName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter user name"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Report Type *
                </label>
                <select
                  name="reportType"
                  required
                  value={formData.reportType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="Harassment">Harassment</option>
                  <option value="Fake Profile">Fake Profile</option>
                  <option value="Fraud">Fraud</option>
                  <option value="Abuse">Abuse</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Screenshot URL (Optional)
                </label>
                <input
                  type="text"
                  name="screenshot"
                  value={formData.screenshot}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="https://..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Detailed Description *
              </label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Please provide detailed information about the issue..."
              ></textarea>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> All reports are taken seriously and will be reviewed by our team. False reports may result in account suspension.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-yellow-600 text-white font-medium rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Submit Report'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RaiseConcern;