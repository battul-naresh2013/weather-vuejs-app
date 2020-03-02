import axios from 'axios';

const baseURL = 'https://api.openweathermap.org';

const apiClient = axios.create({
  baseURL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

export default apiClient;
