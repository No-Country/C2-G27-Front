import axios from 'axios';
import authHeader from './auth-header';
import { WALLET } from './Urls';

const API_URL = process.env.API_URL;

const getPublicContent = () => {
  return axios.get(API_URL + 'all');
};

const getUserPanel = () => {
  return axios.get(API_URL + WALLET, { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + 'admin', { headers: authHeader() });
};

const userService = {
  getPublicContent,
  getUserPanel,
  getAdminBoard,
};

export default userService;
