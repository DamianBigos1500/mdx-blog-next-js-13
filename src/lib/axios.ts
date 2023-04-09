import Axios from 'axios';

const baseUrl = 'https://mdx-blog-next-js-13.vercel.app/';

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
