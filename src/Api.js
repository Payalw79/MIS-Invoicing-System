import axios from 'axios';

// Create axios instance with base config
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor to add auth token to requests
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors globally
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const login = (email, password) => {
  return api.post('/auth/login', { email, password });
};

export const register = (userData) => {
  return api.post('/auth/register', userData);
};

export const forgotPassword = (email) => {
  return api.post('/auth/forgot-password', { email });
};

export const resetPassword = (token, newPassword) => {
  return api.post('/auth/reset-password', { token, newPassword });
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

// Client API
export const getClients = (params = {}) => {
  return api.get('/clients', { params });
};

export const getClient = (id) => {
  return api.get(`/clients/${id}`);
};

export const createClient = (clientData) => {
  return api.post('/clients', clientData);
};

export const updateClient = (id, clientData) => {
  return api.put(`/clients/${id}`, clientData);
};

export const deleteClient = (id) => {
  return api.delete(`/clients/${id}`);
};

// Estimate API
export const getEstimates = (params = {}) => {
  return api.get('/estimates', { params });
};

export const getEstimate = (id) => {
  return api.get(`/estimates/${id}`);
};

export const createEstimate = (estimateData) => {
  return api.post('/estimates', estimateData);
};

export const updateEstimate = (id, estimateData) => {
  return api.put(`/estimates/${id}`, estimateData);
};

export const deleteEstimate = (id) => {
  return api.delete(`/estimates/${id}`);
};

// Invoice API
export const getInvoices = (params = {}) => {
  return api.get('/invoices', { params });
};

export const getInvoice = (id) => {
  return api.get(`/invoices/${id}`);
};

export const createInvoice = (invoiceData) => {
  return api.post('/invoices', invoiceData);
};

export const updateInvoice = (id, invoiceData) => {
  return api.put(`/invoices/${id}`, invoiceData);
};

export const deleteInvoice = (id) => {
  return api.delete(`/invoices/${id}`);
};

// Report API
export const getReports = () => {
  return api.get('/reports');
};

export const generateReport = (reportData) => {
  return api.post('/reports/generate', reportData);
};

export const getReport = (id) => {
  return api.get(`/reports/${id}`);
};

// Chain API (for estimates)
export const getChains = () => {
  return api.get('/chains');
};

// User API
export const getProfile = () => {
  return api.get('/users/profile');
};

export const updateProfile = (userData) => {
  return api.put('/users/profile', userData);
};

export const changePassword = (passwordData) => {
  return api.post('/users/change-password', passwordData);
};

// Settings API
export const getSettings = () => {
  return api.get('/settings');
};

export const updateSettings = (settingsData) => {
  return api.put('/settings', settingsData);
};

export default api;