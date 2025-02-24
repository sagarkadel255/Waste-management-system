// frontend/src/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // This points to your backend server
  withCredentials: true, // Include credentials if necessary
});

export default axiosInstance;
