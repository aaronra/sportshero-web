import axios from 'axios';

export const HTTP = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL + `/mockDatas/`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': '*',
  },
});
