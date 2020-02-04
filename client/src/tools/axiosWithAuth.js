import axios from 'axios';

 const axiosWithAuth = () => {
  return axios.create({
    // config object
    baseURL: 'http://localhost:5001',
    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
};

export default axiosWithAuth