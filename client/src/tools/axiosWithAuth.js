import axios from 'axios';

 const axiosWithAuth = () => {
  return axios.create({
    // config object
    baseURL: 'https://bwdevdesk.herokuapp.com/',
    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
};

export default axiosWithAuth