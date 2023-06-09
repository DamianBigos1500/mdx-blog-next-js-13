import Axios from 'axios';

// const baseUrl = 'http://localhost:3000/';
const baseUrl = 'https://damian-bigos-mdx.vercel.app/';

const option = {};

const axios = Axios.create({
  baseURL: baseUrl,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default axios;
