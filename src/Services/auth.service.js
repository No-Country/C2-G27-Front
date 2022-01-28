/* eslint-disable arrow-body-style, no-console */
import axios from 'axios';
import { LOGIN, REGISTRATION } from './Urls';

const API_URL = process.env.REACT_APP_BASE_URL;

const register = (username, email, password) => {
  return axios.post(`${API_URL + REGISTRATION}`, {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  console.log('loggin');
  return axios
    .post(`${API_URL + LOGIN}`, {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
