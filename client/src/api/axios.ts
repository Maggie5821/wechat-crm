import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // 你后端运行的地址
});

// 请求拦截器：自动加上 token
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
