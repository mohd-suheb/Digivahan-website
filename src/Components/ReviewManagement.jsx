import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, Minus, X, Send, ArrowLeft } from 'lucide-react';

export default function ReviewsManagement() {
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard', 'positive', 'average', 'negative'
  const [replyModal, setReplyModal] = useState(null);

  const positiveReviews = [
    { id: 'CU-1234', name: 'Anjali Mehta', review: 'Bahut achha service hai!', rating: 5, replied: true, reply: 'Thank you so much for your positive feedback!', date: '22 Dec, 2025' },
    { id: 'CU-5678', name: 'Vikram Singh', review: 'Excellent experience.', rating: 5, replied: true, reply: 'We appreciate your support!', date: '21 Dec, 2025' },
    { id: 'CU-9012', name: 'Priya Sharma', review: 'Excellent service! Very satisfied.', rating: 5, replied: true, reply: 'Thank you so much for your positive feedback!', date: '22 Dec, 2025' },
    { id: 'CU-3456', name: 'Amit Kumar', review: 'Great experience with the app.', rating: 5, replied: true, reply: 'We appreciate your support!', date: '21 Dec, 2025' },
  ];

  const averageReviews = [
    { id: 'CU-7890', name: 'Rahul Gupta', review: 'App is okay, needs improvement.', rating: 3, replied: false },
    { id: 'CU-2345', name: 'Sneha Patel', review: 'Average service, could be better.', rating: 3, replied: false },
  ];

  const negativeReviews = [
    { id: 'CU-6789', name: 'Rakesh Verma', review: 'App crashes frequently.', rating: 2, replied: true, reply: 'We apologize for the inconvenience. Our team is working on a fix.', date: '20 Dec, 2025' },
    { id: 'CU-4567', name: 'Neha Singh', review: 'Poor customer support response time.', rating: 1, replied: true, reply: 'We are sorry for the delay. We have improved our support team.', date: '19 Dec, 2025' },
  ];

  const handleReply = (review, type) => {
    setReplyModal({ ...review, type });
  };

  const submitReply = () => {
    setReplyModal(null);
  };

  // Reply Modal Component
  const ReplyModalView = () => (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="max-w-3xl mx-auto p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Reply to Review</h2>
            <p className="text-sm text-gray-600 mt-1">Respond to customer feedback</p>
          </div>
          <button 
            onClick={() => setReplyModal(null)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Customer Name</label>
            <input 
              type="text" 
              value={replyModal.name} 
              readOnly 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Review</label>
            <textarea 
              value={replyModal.review} 
              readOnly 
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 resize-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Reply <span className="text-red-500">*</span>
            </label>
            <textarea 
              placeholder="Type your reply here..."
              rows={8}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
            />
          </div>
        </div>
        
        <div className="mt-8 flex items-center gap-3 justify-end">
          <button 
            onClick={() => setReplyModal(null)}
            className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
          >
            Cancel
          </button>
          <button 
            onClick={submitReply}
            className="px-6 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2 transition-colors font-medium"
          >
            <Send className="w-4 h-4" />
            Submit Reply
          </button>
        </div>
      </div>
    </div>
  );

  // Show Reply Modal if active
  if (replyModal) {
    return <ReplyModalView />;
  }

  // Positive Reviews Page
  if (currentView === 'positive') {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex items-center gap-4">
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div>
              <h2 className="text-2xl font-semibold">Positive Reviews</h2>
              <p className="text-sm text-gray-600">Sorted by priority (most critical first)</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Customer ID</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Customer Name</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Review</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Rating</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody>
                {positiveReviews.map((review) => (
                  <tr key={review.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 text-sm text-blue-600">{review.id}</td>
                    <td className="py-4 px-4 text-sm">{review.name}</td>
                    <td className="py-4 px-4 text-sm">{review.review}</td>
                    <td className="py-4 px-4 text-sm">
                      <span className="text-yellow-500">{'⭐'.repeat(review.rating)}</span>
                    </td>
                    <td className="py-4 px-4">
                      <button 
                        onClick={() => handleReply(review, 'positive')}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-blue-600 transition-colors"
                      >
                        <Send className="w-4 h-4" />
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

  // Average Reviews Page
  if (currentView === 'average') {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex items-center gap-4">
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div>
              <h2 className="text-2xl font-semibold">Average Reviews</h2>
              <p className="text-sm text-gray-600">Sorted by priority (most critical first)</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Customer ID</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Customer Name</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Review</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Rating</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody>
                {averageReviews.map((review) => (
                  <tr key={review.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 text-sm text-blue-600">{review.id}</td>
                    <td className="py-4 px-4 text-sm">{review.name}</td>
                    <td className="py-4 px-4 text-sm">{review.review}</td>
                    <td className="py-4 px-4 text-sm">
                      <span className="text-yellow-500">{'⭐'.repeat(review.rating)}</span>
                    </td>
                    <td className="py-4 px-4">
                      <button 
                        onClick={() => handleReply(review, 'average')}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-blue-600 transition-colors"
                      >
                        <Send className="w-4 h-4" />
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

  // Negative Reviews Page
  if (currentView === 'negative') {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex items-center gap-4">
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div>
              <h2 className="text-2xl font-semibold">Negative Reviews</h2>
              <p className="text-sm text-gray-600">Sorted by priority (most critical first)</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Customer ID</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Customer Name</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Review</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Rating</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody>
                {negativeReviews.map((review) => (
                  <tr key={review.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 text-sm text-blue-600">{review.id}</td>
                    <td className="py-4 px-4 text-sm">{review.name}</td>
                    <td className="py-4 px-4 text-sm">{review.review}</td>
                    <td className="py-4 px-4 text-sm">
                      <span className="text-yellow-500">{'⭐'.repeat(review.rating)}</span>
                    </td>
                    <td className="py-4 px-4">
                      <button 
                        onClick={() => handleReply(review, 'negative')}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-blue-600 transition-colors"
                      >
                        <Send className="w-4 h-4" />
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
          <h1 className="text-3xl font-semibold text-gray-800">Reviews Management</h1>
          <p className="text-gray-600 mt-1">Monitor and respond to customer reviews</p>
        </div>

        {/* Stats Overview */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-green-500">😊</span>
              <div>
                <p className="text-sm text-gray-600">Happy Customers</p>
                <p className="text-2xl font-semibold">245</p>
              </div>
            </div>
            <div className="text-center">
              <span className="text-amber-500">😐</span>
              <p className="font-medium">Customer Satisfaction High</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-right">
                <p className="text-sm text-gray-600">Sad Customers</p>
                <p className="text-2xl font-semibold">87</p>
              </div>
              <span className="text-red-500">☹️</span>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="relative w-full h-6 bg-gray-200 rounded-full overflow-hidden">
            <div className="absolute h-full bg-green-500 rounded-full" style={{ width: '74%' }}>
              <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-medium">
                74% Happy
              </span>
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Positive Reviews Card */}
          <div 
            className="bg-green-50 border-2 border-green-200 rounded-lg p-6 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setCurrentView('positive')}
          >
            <ThumbsUp className="text-green-600 w-12 h-12 mb-4" strokeWidth={1.5} />
            <div className="flex items-end justify-between">
              <div>
                <p className="text-green-700 font-medium mb-1">Positive Reviews</p>
                <p className="text-xs text-green-600">Click to view all reviews</p>
              </div>
              <p className="text-5xl font-bold text-green-600">245</p>
            </div>
          </div>

          {/* Average Reviews Card */}
          <div 
            className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setCurrentView('average')}
          >
            <Minus className="text-yellow-600 w-12 h-12 mb-4" strokeWidth={1.5} />
            <div className="flex items-end justify-between">
              <div>
                <p className="text-yellow-700 font-medium mb-1">Average Reviews</p>
                <p className="text-xs text-yellow-600">Click to view all reviews</p>
              </div>
              <p className="text-5xl font-bold text-yellow-600">112</p>
            </div>
          </div>

          {/* Negative Reviews Card */}
          <div 
            className="bg-red-50 border-2 border-red-200 rounded-lg p-6 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setCurrentView('negative')}
          >
            <ThumbsDown className="text-red-600 w-12 h-12 mb-4" strokeWidth={1.5} />
            <div className="flex items-end justify-between">
              <div>
                <p className="text-red-700 font-medium mb-1">Negative Reviews</p>
                <p className="text-xs text-red-600">Click to view all reviews</p>
              </div>
              <p className="text-5xl font-bold text-red-600">87</p>
            </div>
          </div>
        </div>

        {/* Replied Reviews Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Replied Reviews</h2>
          
          {/* Replied Positive Reviews */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <h3 className="font-medium text-gray-800">Replied Positive Reviews</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Customer Name</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Review</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Your Reply</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Date</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-sm">Priya Sharma</td>
                    <td className="py-3 px-4 text-sm">Excellent service! Very satisfied.</td>
                    <td className="py-3 px-4 text-sm">Thank you so much for your positive feedback!</td>
                    <td className="py-3 px-4 text-sm">22 Dec, 2025</td>
                    <td className="py-3 px-4">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">Responded</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-sm">Amit Kumar</td>
                    <td className="py-3 px-4 text-sm">Great experience with the app.</td>
                    <td className="py-3 px-4 text-sm">We appreciate your support!</td>
                    <td className="py-3 px-4 text-sm">21 Dec, 2025</td>
                    <td className="py-3 px-4">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">Responded</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Replied Negative/Average Reviews */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <h3 className="font-medium text-gray-800">Replied Negative / Average Reviews</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Customer Name</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Review</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Your Reply</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Date</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-sm">Rakesh Verma</td>
                    <td className="py-3 px-4 text-sm">App crashes frequently.</td>
                    <td className="py-3 px-4 text-sm">We apologize for the inconvenience. Our team is working on a fix.</td>
                    <td className="py-3 px-4 text-sm">20 Dec, 2025</td>
                    <td className="py-3 px-4">
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">Responded</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-sm">Neha Singh</td>
                    <td className="py-3 px-4 text-sm">Poor customer support response time.</td>
                    <td className="py-3 px-4 text-sm">We are sorry for the delay. We have improved our support team.</td>
                    <td className="py-3 px-4 text-sm">19 Dec, 2025</td>
                    <td className="py-3 px-4">
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">Responded</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}