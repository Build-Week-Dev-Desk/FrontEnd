import axios from 'axios';

export const axiosWithAuth = () => {
  return axios.create({
    // config object
    baseURL: 'http://localhost:5001',
    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
};