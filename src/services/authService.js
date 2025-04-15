// This file contains the authentication service that handles API calls related to user authentication.
// It includes functions for login, registration, password reset, and token management. The service uses axios for making HTTP requests and handles token storage in localStorage.
// The service is designed to be used in a React application, and it exports functions that can be imported and used in components or other services.
// The API URL is configurable through environment variables, allowing for easy switching between development and production environments.
// The service also includes an axios instance with a request interceptor to automatically attach the authentication token to requests, ensuring secure communication with the backend.
// This file is a part of the CodeB Invoice Management System (IMS) project, which is a web application for managing invoices, clients, and estimates. The project is built using React for the frontend and Java for the backend.
// The application provides a user-friendly interface for managing invoices, clients, and estimates, and includes features such as user authentication, password reset, and report generation. The project is designed to be modular and scalable, making it easy to add new features and functionality in the future.
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api/auth';

// Create axios instance with base config
const authAxios = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor to add token to requests
authAxios.interceptors.request.use(
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

export const login = (email, password) => {
  return authAxios.post('/login', { email, password });
};

export const register = (userData) => {
  return authAxios.post('/register', userData);
};

export const forgotPassword = (email) => {
  return authAxios.post('/forgot-password', { email });
};

export const resetPassword = (token, newPassword) => {
  return authAxios.post('/reset-password', { token, newPassword });
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};