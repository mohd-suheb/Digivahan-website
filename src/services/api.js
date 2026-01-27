


import axios from 'axios';
import toast from 'react-hot-toast';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Request interceptor to add token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('role');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth APIs
export const authAPI = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
  sendOtp: (data) => api.post('/auth/send-otp', data),
  verifyOtp: (data) => api.post('/auth/verify-otp', data),
};

// Vehicle APIs
export const vehicleAPI = {
  addVehicle: (data) => api.post('/vehicles', data),
  getAllVehicles: () => api.get('/vehicles'),
  getVehicleById: (id) => api.get(`/vehicles/${id}`),
  updateVehicle: (id, data) => api.put(`/vehicles/${id}`, data),
  deleteVehicle: (id) => api.delete(`/vehicles/${id}`),
};

// Order APIs
export const orderAPI = {
  createOrder: (data) => api.post('/orders', data),
  getAllOrders: () => api.get('/orders/all'),
  getUserOrders: () => api.get('/orders/my-orders'),
  updateOrderStatus: (id, data) => api.put(`/orders/${id}/status`, data),
  cancelOrder: (id, data) => api.put(`/orders/${id}/cancel`, data),
};

// Trending Car APIs
export const trendingCarAPI = {
  addTrendingCar: (data) => api.post('/trending-cars', data),
  getAllTrendingCars: () => api.get('/trending-cars'),
  getTrendingCarById: (id) => api.get(`/trending-cars/${id}`),
  updateTrendingCar: (id, data) => api.put(`/trending-cars/${id}`, data),
  deleteTrendingCar: (id) => api.delete(`/trending-cars/${id}`),
};

// Comparison APIs
export const comparisonAPI = {
  addComparison: (data) => api.post('/comparisons', data),
  getAllComparisons: () => api.get('/comparisons'),
  getComparisonById: (id) => api.get(`/comparisons/${id}`),
  updateComparison: (id, data) => api.put(`/comparisons/${id}`, data),
  deleteComparison: (id) => api.delete(`/comparisons/${id}`),
};

// News APIs
export const newsAPI = {
  addNews: (data) => api.post('/news', data),
  getAllNews: () => api.get('/news'),
  updateNews: (id, data) => api.put(`/news/${id}`, data),
  deleteNews: (id) => api.delete(`/news/${id}`),
};

// Query APIs
export const queryAPI = {
  addQuery: (data) => api.post('/queries', data),
  getAllQueries: (params) => api.get('/queries', { params }),
  replyQuery: (id, data) => api.put(`/queries/${id}/reply`, data),
  resolveQuery: (id) => api.put(`/queries/${id}/resolve`),
};

// Review APIs
export const reviewAPI = {
  addReview: (data) => api.post('/reviews', data),
  getAllReviews: (params) => api.get('/reviews', { params }),
  replyReview: (id, data) => api.put(`/reviews/${id}/reply`, data),
};

// Report APIs
export const reportAPI = {
  submitReport: (data) => api.post('/reports', data),
  getAllReports: (params) => api.get('/reports', { params }),
  updateReportStatus: (id, data) => api.put(`/reports/${id}/status`, data),
};

export default api;