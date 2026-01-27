import React, { useState, useEffect } from 'react';
import { useAuth } from '../utils/AuthContext';
import { orderAPI, vehicleAPI, queryAPI, reviewAPI, reportAPI, trendingCarAPI, newsAPI } from '../services/api';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  
  // State for all data
  const [stats, setStats] = useState({
    totalOrders: 0,
    pendingOrders: 0,
    totalQueries: 0,
    totalReviews: 0,
    totalReports: 0,
  });
  
  const [orders, setOrders] = useState([]);
  const [queries, setQueries] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [reports, setReports] = useState([]);
  const [trendingCars, setTrendingCars] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [ordersRes, queriesRes, reviewsRes, reportsRes] = await Promise.all([
        orderAPI.getAllOrders(),
        queryAPI.getAllQueries(),
        reviewAPI.getAllReviews(),
        reportAPI.getAllReports(),
      ]);

      if (ordersRes.data.success) {
        setOrders(ordersRes.data.orders);
        setStats(prev => ({
          ...prev,
          totalOrders: ordersRes.data.count,
          pendingOrders: ordersRes.data.orders.filter(o => o.status === 'pending').length,
        }));
      }

      if (queriesRes.data.success) {
        setQueries(queriesRes.data.queries);
        setStats(prev => ({ ...prev, totalQueries: queriesRes.data.count }));
      }

      if (reviewsRes.data.success) {
        setReviews(reviewsRes.data.reviews);
        setStats(prev => ({ ...prev, totalReviews: reviewsRes.data.count }));
      }

      if (reportsRes.data.success) {
        setReports(reportsRes.data.reports);
        setStats(prev => ({ ...prev, totalReports: reportsRes.data.count }));
      }

    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      toast.error('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateOrderStatus = async (orderId, status, additionalData = {}) => {
    try {
      const response = await orderAPI.updateOrderStatus(orderId, {
        status,
        ...additionalData,
      });

      if (response.data.success) {
        toast.success('Order status updated successfully');
        fetchDashboardData();
      }
    } catch (error) {
      console.error('Error updating order:', error);
      toast.error('Failed to update order status');
    }
  };

  const handleReplyQuery = async (queryId, reply) => {
    try {
      const response = await queryAPI.replyQuery(queryId, { reply });
      
      if (response.data.success) {
        toast.success('Reply sent successfully');
        fetchDashboardData();
      }
    } catch (error) {
      console.error('Error replying to query:', error);
      toast.error('Failed to send reply');
    }
  };

  const handleResolveQuery = async (queryId) => {
    try {
      const response = await queryAPI.resolveQuery(queryId);
      
      if (response.data.success) {
        toast.success('Query resolved successfully');
        fetchDashboardData();
      }
    } catch (error) {
      console.error('Error resolving query:', error);
      toast.error('Failed to resolve query');
    }
  };

  const handleReplyReview = async (reviewId, reply) => {
    try {
      const response = await reviewAPI.replyReview(reviewId, { reply });
      
      if (response.data.success) {
        toast.success('Reply sent successfully');
        fetchDashboardData();
      }
    } catch (error) {
      console.error('Error replying to review:', error);
      toast.error('Failed to send reply');
    }
  };

  const handleUpdateReportStatus = async (reportId, status, actionTaken) => {
    try {
      const response = await reportAPI.updateReportStatus(reportId, { status, actionTaken });
      
      if (response.data.success) {
        toast.success('Report status updated successfully');
        fetchDashboardData();
      }
    } catch (error) {
      console.error('Error updating report:', error);
      toast.error('Failed to update report');
    }
  };

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    window.location.href = '/';
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-500">Welcome back, {user?.firstname}!</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 overflow-x-auto">
            {['overview', 'orders', 'queries', 'reviews', 'reports', 'trending-cars', 'news'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab
                    ? 'border-yellow-500 text-yellow-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
              >
                {tab.replace('-', ' ')}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Orders</h3>
              <p className="text-3xl font-bold text-yellow-600">{stats.totalOrders}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pending Orders</h3>
              <p className="text-3xl font-bold text-orange-600">{stats.pendingOrders}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Queries</h3>
              <p className="text-3xl font-bold text-blue-600">{stats.totalQueries}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Reviews</h3>
              <p className="text-3xl font-bold text-green-600">{stats.totalReviews}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Reports</h3>
              <p className="text-3xl font-bold text-red-600">{stats.totalReports}</p>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Manage Orders</h2>
            <div className="space-y-4">
              {orders.length === 0 ? (
                <div className="bg-white rounded-lg shadow p-8 text-center">
                  <p className="text-gray-500">No orders found</p>
                </div>
              ) : (
                orders.map((order) => (
                  <div key={order._id} className="bg-white rounded-lg shadow p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{order.orderName}</h3>
                        <p className="text-sm text-gray-600">Order ID: {order.orderId}</p>
                        <p className="text-sm text-gray-600">Vehicle: {order.vehicleNumber}</p>
                        <p className="text-sm text-gray-600">Owner: {order.ownerName}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        order.status === 'processed' ? 'bg-blue-100 text-blue-800' :
                        order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={() => handleUpdateOrderStatus(order._id, 'processed', {
                          qrAssigned: `QR-${Date.now()}`,
                          trackingLink: `https://tracking.digivahan.com/${order.orderId}`
                        })}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
                        disabled={order.status !== 'pending'}
                      >
                        Mark Processed
                      </button>
                      <button
                        onClick={() => handleUpdateOrderStatus(order._id, 'delivered')}
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition text-sm"
                        disabled={order.status !== 'processed'}
                      >
                        Mark Delivered
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Queries Tab */}
        {activeTab === 'queries' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Queries</h2>
            <div className="space-y-4">
              {queries.length === 0 ? (
                <div className="bg-white rounded-lg shadow p-8 text-center">
                  <p className="text-gray-500">No queries found</p>
                </div>
              ) : (
                queries.map((query) => (
                  <div key={query._id} className="bg-white rounded-lg shadow p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{query.customerName}</h3>
                        <p className="text-sm text-gray-600">{query.email} | {query.phone}</p>
                        <p className="text-sm text-gray-600">Category: {query.category}</p>
                        <p className="mt-2 text-gray-800">{query.question}</p>
                        {query.reply && (
                          <div className="mt-3 p-3 bg-blue-50 rounded">
                            <p className="text-sm font-medium text-gray-700">Reply:</p>
                            <p className="text-sm text-gray-600">{query.reply}</p>
                          </div>
                        )}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        query.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        query.status === 'replied' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {query.status}
                      </span>
                    </div>
                    {query.status !== 'resolved' && (
                      <div className="mt-4">
                        <textarea
                          placeholder="Type your reply here..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                          rows="3"
                          id={`reply-${query._id}`}
                        ></textarea>
                        <div className="flex gap-2 mt-2">
                          <button
                            onClick={() => {
                              const reply = document.getElementById(`reply-${query._id}`).value;
                              if (reply.trim()) {
                                handleReplyQuery(query._id, reply);
                              } else {
                                toast.error('Please enter a reply');
                              }
                            }}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
                          >
                            Send Reply
                          </button>
                          <button
                            onClick={() => handleResolveQuery(query._id)}
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition text-sm"
                          >
                            Mark Resolved
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
            <div className="space-y-4">
              {reviews.length === 0 ? (
                <div className="bg-white rounded-lg shadow p-8 text-center">
                  <p className="text-gray-500">No reviews found</p>
                </div>
              ) : (
                reviews.map((review) => (
                  <div key={review._id} className="bg-white rounded-lg shadow p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{review.customerName}</h3>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={i < review.rating ? 'text-yellow-500' : 'text-gray-300'}>
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-800">{review.review}</p>
                        {review.reply && (
                          <div className="mt-3 p-3 bg-blue-50 rounded">
                            <p className="text-sm font-medium text-gray-700">Your Reply:</p>
                            <p className="text-sm text-gray-600">{review.reply}</p>
                          </div>
                        )}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        review.category === 'positive' ? 'bg-green-100 text-green-800' :
                        review.category === 'average' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {review.category}
                      </span>
                    </div>
                    {review.status !== 'replied' && (
                      <div className="mt-4">
                        <textarea
                          placeholder="Type your reply here..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                          rows="2"
                          id={`review-reply-${review._id}`}
                        ></textarea>
                        <button
                          onClick={() => {
                            const reply = document.getElementById(`review-reply-${review._id}`).value;
                            if (reply.trim()) {
                              handleReplyReview(review._id, reply);
                            } else {
                              toast.error('Please enter a reply');
                            }
                          }}
                          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
                        >
                          Send Reply
                        </button>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === 'reports' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">User Reports</h2>
            <div className="space-y-4">
              {reports.length === 0 ? (
                <div className="bg-white rounded-lg shadow p-8 text-center">
                  <p className="text-gray-500">No reports found</p>
                </div>
              ) : (
                reports.map((report) => (
                  <div key={report._id} className="bg-white rounded-lg shadow p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">
                          Report against {report.reportedUserName}
                        </h3>
                        <p className="text-sm text-gray-600">Report ID: {report.reportId}</p>
                        <p className="text-sm text-gray-600">Type: {report.reportType}</p>
                        <p className="text-sm text-gray-600">Reported by: {report.reportedBy}</p>
                        <p className="mt-2 text-gray-800">{report.message}</p>
                        {report.actionTaken && (
                          <div className="mt-3 p-3 bg-green-50 rounded">
                            <p className="text-sm font-medium text-gray-700">Action Taken:</p>
                            <p className="text-sm text-gray-600">{report.actionTaken}</p>
                          </div>
                        )}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        report.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        report.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {report.status}
                      </span>
                    </div>
                    {report.status !== 'resolved' && (
                      <div className="mt-4">
                        <textarea
                          placeholder="Describe the action taken..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                          rows="2"
                          id={`action-${report._id}`}
                        ></textarea>
                        <div className="flex gap-2 mt-2">
                          <button
                            onClick={() => {
                              const action = document.getElementById(`action-${report._id}`).value;
                              if (action.trim()) {
                                handleUpdateReportStatus(report._id, 'reviewed', action);
                              } else {
                                toast.error('Please describe the action taken');
                              }
                            }}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
                          >
                            Mark Reviewed
                          </button>
                          <button
                            onClick={() => {
                              const action = document.getElementById(`action-${report._id}`).value;
                              if (action.trim()) {
                                handleUpdateReportStatus(report._id, 'resolved', action);
                              } else {
                                toast.error('Please describe the action taken');
                              }
                            }}
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition text-sm"
                          >
                            Mark Resolved
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Trending Cars Tab */}
        {activeTab === 'trending-cars' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Manage Trending Cars</h2>
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <p className="text-gray-500">Trending Cars Management - Coming Soon</p>
            </div>
          </div>
        )}

        {/* News Tab */}
        {activeTab === 'news' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Manage News</h2>
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <p className="text-gray-500">News Management - Coming Soon</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;