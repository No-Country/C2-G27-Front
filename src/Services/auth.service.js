/* eslint-disable arrow-body-style, no-console, object-shorthand */
import axios from 'axios';
import { REGISTRATION, LOGIN } from './Urls';

const API_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const BEARER_TOKEN = process.env.REACT_APP_BEARER_TOKEN;

const header = {
  headers: {
    api: API_KEY,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const regheader = {
  headers: {
    Authorization: `Bearer ${BEARER_TOKEN}`,
    'Content-Type': 'application/json',
  },
};

const register = (username, email, password, currentUserId) => {
  return axios.post(
    `${API_URL + REGISTRATION}`,
    {
      username: username,
      email: email,
      password: password,
      role: 'admin',
      peopleId: currentUserId,
    },
    regheader
  );
};

const login = (username, password) => {
  console.log('loggin');
  return axios
    .post(
      `${API_URL + LOGIN}`,
      {
        username: username,
        password: password,
      },
      { ...header }
    )
    .then((response) => {
      if (response.data.token) {
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
