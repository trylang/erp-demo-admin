import axios from 'axios';
import store from '@/store';
import { $message } from './notice';
import { getToken } from '@/utils/auth';

const service = axios.create({
  baseURL: process.env.API_ROOT,
  timeout: 15000
});
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// request拦截器
service.interceptors.request.use(config => {
  if(store.getters.token) {
    config.headers['X-Token'] = getToken(); //让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  }
  return config;
}, error => {
  console.log(error);
  Promise.reject(error);
});

// response拦截器
service.interceptors.response.use(response => {
  const res = response.data;
  if (res.code === 2000) {
    return res.data;    
  }
  else {
    if(res.message) {
      $message('error', res.message, 5 * 1000);
    }
    return Promise.reject(res);
  }
}, error => {
  if(error.message) {
    $message('error', error.message, 5 * 1000);
  } 
  return Promise.reject(error);
});

export default service;