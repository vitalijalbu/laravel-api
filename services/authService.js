// services/authService.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://moneymaker.com.pk/public/',  // Replace with your backend URL
  withCredentials: true,  // Required for Sanctum CSRF
});

export const getCsrfCookie = async () => {
  await api.get('/sanctum/csrf-cookie');  // Fetch CSRF token
};

export const login = async (email, password) => {
  await getCsrfCookie();  // Ensure CSRF is set before login
  const response = await api.post('/api/auth/login', { email, password });
  return response.data;
};

export const logout = async () => {
  await api.post('/api/auth/logout');
};
