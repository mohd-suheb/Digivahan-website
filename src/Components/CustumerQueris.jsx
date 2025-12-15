import React, { useState } from 'react';
import { Plus, Trash2, Edit, ArrowLeft, MessageSquare } from 'lucide-react';

export default function CustomerQueries() {
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard', 'post-faq', 'delete-faq', 'update-faq', 'reply'
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [faqQuestion, setFaqQuestion] = useState('');
  const [faqAnswer, setFaqAnswer] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const categories = [
    {
      id: 1,
      name: 'General Information Queries',
      description: 'Basic questions about services and features',
      color: 'blue',
      pending: 12,
      queries: [
        { id: 'CU-5932', name: 'Rakesh Kumar', question: 'App crash ho raha hai jab main payment karta hoon', date: '23 Dec, 3:45 PM' },
        { id: 'CU-5845', name: 'Priya Sharma', question: 'Mera order kahan hai? Tracking nahi dikh raha', date: '23 Dec, 2:30 PM' },
        { id: 'CU-5723', name: 'Amit Verma', question: 'Password reset link nahi aa raha email pe', date: '23 Dec, 1:15 PM' },
        { id: 'CU-5654', name: 'Neha Patel', question: 'Refund kab milega? Already 5 days ho gaye', date: '23 Dec, 11:20 AM' },
        { id: 'CU-5598', name: 'Suresh Reddy', question: 'Premium subscription activate nahi ho raha', date: '23 Dec, 10:05 AM' },
      ]
    },
    {
      id: 2,
      name: 'Technical Queries',
      description: 'Technical issues and troubleshooting',
      color: 'purple',
      pending: 8,
      queries: [
        { id: 'CU-5932', name: 'Rakesh Kumar', question: 'App crash ho raha hai jab main payment karta hoon', date: '23 Dec, 3:45 PM' },
        { id: 'CU-5845', name: 'Priya Sharma', question: 'Mera order kahan hai? Tracking nahi dikh raha', date: '23 Dec, 2:30 PM' },
        { id: 'CU-5723', name: 'Amit Verma', question: 'Password reset link nahi aa raha email pe', date: '23 Dec, 1:15 PM' },
        { id: 'CU-5654', name: 'Neha Patel', question: 'Refund kab milega? Already 5 days ho gaye', date: '23 Dec, 11:20 AM' },
        { id: 'CU-5598', name: 'Suresh Reddy', question: 'Premium subscription activate nahi ho raha', date: '23 Dec, 10:05 AM' },
      ]
    },
    {
      id: 3,
      name: 'Account Related',
      description: 'Profile, settings and account management',
      color: 'cyan',
      pending: 15,
      queries: [
        { id: 'CU-5932', name: 'Rakesh Kumar', question: 'App crash ho raha hai jab main payment karta hoon', date: '23 Dec, 3:45 PM' },
        { id: 'CU-5845', name: 'Priya Sharma', question: 'Mera order kahan hai? Tracking nahi dikh raha', date: '23 Dec, 2:30 PM' },
        { id: 'CU-5723', name: 'Amit Verma', question: 'Password reset link nahi aa raha email pe', date: '23 Dec, 1:15 PM' },
        { id: 'CU-5654', name: 'Neha Patel', question: 'Refund kab milega? Already 5 days ho gaye', date: '23 Dec, 11:20 AM' },
        { id: 'CU-5598', name: 'Suresh Reddy', question: 'Premium subscription activate nahi ho raha', date: '23 Dec, 10:05 AM' },
      ]
    },
    {
      id: 4,
      name: 'Payment / Billing',
      description: 'Payment issues and billing queries',
      color: 'green',
      pending: 6,
      queries: [
        { id: 'CU-5932', name: 'Rakesh Kumar', question: 'App crash ho raha hai jab main payment karta hoon', date: '23 Dec, 3:45 PM' },
        { id: 'CU-5845', name: 'Priya Sharma', question: 'Mera order kahan hai? Tracking nahi dikh raha', date: '23 Dec, 2:30 PM' },
        { id: 'CU-5723', name: 'Amit Verma', question: 'Password reset link nahi aa raha email pe', date: '23 Dec, 1:15 PM' },
        { id: 'CU-5654', name: 'Neha Patel', question: 'Refund kab milega? Already 5 days ho gaye', date: '23 Dec, 11:20 AM' },
        { id: 'CU-5598', name: 'Suresh Reddy', question: 'Premium subscription activate nahi ho raha', date: '23 Dec, 10:05 AM' },
      ]
    },
    {
      id: 5,
      name: 'Order / Service Status',
      description: 'Track orders and service requests',
      color: 'orange',
      pending: 20,
      queries: [
        { id: 'CU-5932', name: 'Rakesh Kumar', question: 'App crash ho raha hai jab main payment karta hoon', date: '23 Dec, 3:45 PM' },
        { id: 'CU-5845', name: 'Priya Sharma', question: 'Mera order kahan hai? Tracking nahi dikh raha', date: '23 Dec, 2:30 PM' },
        { id: 'CU-5723', name: 'Amit Verma', question: 'Password reset link nahi aa raha email pe', date: '23 Dec, 1:15 PM' },
        { id: 'CU-5654', name: 'Neha Patel', question: 'Refund kab milega? Already 5 days ho gaye', date: '23 Dec, 11:20 AM' },
        { id: 'CU-5598', name: 'Suresh Reddy', question: 'Premium subscription activate nahi ho raha', date: '23 Dec, 10:05 AM' },
      ]
    },
    {
      id: 6,
      name: 'Product / Service Complaints',
      description: 'Quality issues and complaints',
      color: 'red',
      pending: 4,
      queries: [
        { id: 'CU-5932', name: 'Rakesh Kumar', question: 'App crash ho raha hai jab main payment karta hoon', date: '23 Dec, 3:45 PM' },
        { id: 'CU-5845', name: 'Priya Sharma', question: 'Mera order kahan hai? Tracking nahi dikh raha', date: '23 Dec, 2:30 PM' },
        { id: 'CU-5723', name: 'Amit Verma', question: 'Password reset link nahi aa raha email pe', date: '23 Dec, 1:15 PM' },
        { id: 'CU-5654', name: 'Neha Patel', question: 'Refund kab milega? Already 5 days ho gaye', date: '23 Dec, 11:20 AM' },
        { id: 'CU-5598', name: 'Suresh Reddy', question: 'Premium subscription activate nahi ho raha', date: '23 Dec, 10:05 AM' },
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', dot: 'bg-blue-500', badge: 'bg-blue-100 text-blue-700' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600', dot: 'bg-purple-500', badge: 'bg-purple-100 text-purple-700' },
      cyan: { bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-600', dot: 'bg-cyan-500', badge: 'bg-cyan-100 text-cyan-700' },
      green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-600', dot: 'bg-green-500', badge: 'bg-green-100 text-green-700' },
      orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600', dot: 'bg-orange-500', badge: 'bg-orange-100 text-orange-700' },
      red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-600', dot: 'bg-red-500', badge: 'bg-red-100 text-red-700' }
    };
    return colors[color];
  };

  const handleReplySubmit = () => {
    if (!replyText.trim()) {
      return; // Browser validation will show the message
    }
    setShowSuccessPopup(true);
  };

  const handleFaqSubmit = () => {
    if (!faqQuestion.trim() || !faqAnswer.trim()) {
      return; // Browser validation will show the message
    }
    setShowSuccessPopup(true);
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    setCurrentView('dashboard');
    setSelectedCategory(null);
    setSelectedQuery(null);
    setReplyText('');
    setFaqQuestion('');
    setFaqAnswer('');
  };

  // Reply to Query Page
  if (currentView === 'reply' && selectedQuery) {
    return (
      <div className="min-h-screen bg-white p-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Reply to Customer Query</h2>
                <p className="text-sm text-gray-600 mt-1">Provide a detailed response to the customer</p>
              </div>
            </div>
            <button 
              onClick={() => {
                setCurrentView('dashboard');
                setSelectedCategory(null);
                setSelectedQuery(null);
              }}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Customer Name
              </label>
              <input 
                type="text" 
                value={selectedQuery.name}
                disabled
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Customer ID
              </label>
              <input 
                type="text" 
                value={selectedQuery.id}
                disabled
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Customer Query
              </label>
              <textarea 
                value={selectedQuery.question}
                disabled
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 resize-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Reply <span className="text-red-500">*</span>
              </label>
              <textarea 
                placeholder="Type your reply here..."
                rows={8}
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
              />
              {replyText.trim() === '' && (
                <p className="text-sm text-orange-600 mt-1 flex items-center gap-1">
                  <span className="bg-orange-500 text-white px-1.5 py-0.5 rounded text-xs font-bold">!</span>
                  Please fill out this field.
                </p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Attach Files (Optional)
              </label>
              <button className="px-4 py-2.5 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium flex items-center gap-2">
                📎 Attach File
              </button>
            </div>
          </div>
          
          <div className="mt-8 flex items-center gap-3">
            <button 
              onClick={handleReplySubmit}
              className="px-6 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium flex items-center gap-2"
            >
              ✉️ Submit Reply
            </button>
            <button 
              onClick={() => {
                setSelectedCategory(categories.find(c => c.id === selectedCategory?.id));
                setCurrentView('dashboard');
                setSelectedQuery(null);
                setReplyText('');
              }}
              className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Success Popup */}
        {showSuccessPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Reply sent successfully</h3>
              </div>
              <button 
                onClick={closeSuccessPopup}
                className="w-full mt-6 px-6 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                Ok
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Post FAQ Page
  if (currentView === 'post-faq') {
    return (
      <div className="min-h-screen bg-white p-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Plus className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Post FAQ</h2>
                <p className="text-sm text-gray-600 mt-1">Add a new frequently asked question</p>
              </div>
            </div>
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Question Type <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                <option>General</option>
                <option>Technical</option>
                <option>Account</option>
                <option>Payment</option>
                <option>Order</option>
                <option>Complaint</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Question <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                placeholder="Enter the question..."
                value={faqQuestion}
                onChange={(e) => setFaqQuestion(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              {faqQuestion.trim() === '' && (
                <p className="text-sm text-orange-600 mt-1 flex items-center gap-1">
                  <span className="bg-orange-500 text-white px-1.5 py-0.5 rounded text-xs font-bold">!</span>
                  Please fill out this field.
                </p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Answer <span className="text-red-500">*</span>
              </label>
              <textarea 
                placeholder="Enter the detailed answer..."
                rows={8}
                value={faqAnswer}
                onChange={(e) => setFaqAnswer(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
              />
              {faqAnswer.trim() === '' && (
                <p className="text-sm text-orange-600 mt-1 flex items-center gap-1">
                  <span className="bg-orange-500 text-white px-1.5 py-0.5 rounded text-xs font-bold">!</span>
                  Please fill out this field.
                </p>
              )}
            </div>
          </div>
          
          <div className="mt-8 flex items-center gap-3">
            <button 
              onClick={handleFaqSubmit}
              className="px-6 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              Post FAQ
            </button>
            <button 
              onClick={() => {
                setCurrentView('dashboard');
                setFaqQuestion('');
                setFaqAnswer('');
              }}
              className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Success Popup */}
        {showSuccessPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">FAQ posted successfully</h3>
              </div>
              <button 
                onClick={closeSuccessPopup}
                className="w-full mt-6 px-6 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                Ok
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Delete FAQ Page
  if (currentView === 'delete-faq') {
    return (
      <div className="min-h-screen bg-white p-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <Trash2 className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Delete FAQ</h2>
                <p className="text-sm text-gray-600 mt-1">Remove an existing FAQ from the system</p>
              </div>
            </div>
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Question Type <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none">
                <option>General</option>
                <option>Technical</option>
                <option>Account</option>
                <option>Payment</option>
                <option>Order</option>
                <option>Complaint</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Question <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none">
                <option>Choose a question...</option>
              </select>
            </div>
          </div>
          
          <div className="mt-8 flex items-center gap-3">
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="px-6 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium flex items-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Delete FAQ
            </button>
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Update FAQ Page
  if (currentView === 'update-faq') {
    return (
      <div className="min-h-screen bg-white p-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Edit className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Update FAQ</h2>
                <p className="text-sm text-gray-600 mt-1">Modify an existing FAQ</p>
              </div>
            </div>
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Question Type <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none">
                <option>General</option>
                <option>Technical</option>
                <option>Account</option>
                <option>Payment</option>
                <option>Order</option>
                <option>Complaint</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Question <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none">
                <option>Choose a question...</option>
              </select>
            </div>
          </div>
          
          <div className="mt-8 flex items-center gap-3">
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="px-6 py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium flex items-center gap-2"
            >
              <Edit className="w-4 h-4" />
              Update FAQ
            </button>
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Category Details View
  if (selectedCategory) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex items-center gap-4">
            <button 
              onClick={() => setSelectedCategory(null)}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div>
              <h2 className="text-2xl font-semibold">{selectedCategory.name}</h2>
              <p className="text-sm text-gray-600">Total queries: {selectedCategory.queries.length}</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Customer Name</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Customer ID</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Question Asked</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Date & Time</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody>
                {selectedCategory.queries.map((query) => (
                  <tr key={query.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 text-sm">{query.name}</td>
                    <td className="py-4 px-4 text-sm text-blue-600">{query.id}</td>
                    <td className="py-4 px-4 text-sm">{query.question}</td>
                    <td className="py-4 px-4 text-sm">{query.date}</td>
                    <td className="py-4 px-4">
                      <button 
                        onClick={() => {
                          setSelectedQuery(query);
                          setCurrentView('reply');
                        }}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-blue-600 transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        Reply
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard View
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Customer Queries</h1>
          <p className="text-gray-600 mt-1">Manage FAQs and customer support queries</p>
        </div>

        {/* FAQ Management Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">FAQ Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Post FAQ Card */}
            <div 
              className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setCurrentView('post-faq')}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Plus className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">Post FAQ</h3>
              </div>
              <p className="text-sm text-gray-600">Add a new frequently asked question</p>
            </div>

            {/* Delete FAQ Card */}
            <div 
              className="bg-red-50 border-2 border-red-200 rounded-lg p-6 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setCurrentView('delete-faq')}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <Trash2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">Delete FAQ</h3>
              </div>
              <p className="text-sm text-gray-600">Remove an existing FAQ from system</p>
            </div>

            {/* Update FAQ Card */}
            <div 
              className="bg-green-50 border-2 border-green-200 rounded-lg p-6 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setCurrentView('update-faq')}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Edit className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">Update FAQ</h3>
              </div>
              <p className="text-sm text-gray-600">Modify existing FAQ content</p>
            </div>
          </div>
        </div>

        {/* Customer Queries by Category */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Customer Queries by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => {
              const colorClasses = getColorClasses(category.color);
              return (
                <div 
                  key={category.id}
                  className={`${colorClasses.bg} border-l-4 ${colorClasses.border} rounded-lg p-6 cursor-pointer hover:shadow-md transition-shadow`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-10 h-10 ${colorClasses.dot} rounded-full`}></div>
                    <span className={`${colorClasses.badge} px-3 py-1 rounded-full text-xs font-medium`}>
                      {category.pending} pending
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}