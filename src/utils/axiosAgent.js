import axios from 'axios';

const axiosAgent = axios;

const initializeAxios = () => {
  axiosAgent.interceptors.response.use(response => {
    return response;
  }, error => {
    return Promise.reject(error);
  });
};

export default axiosAgent;