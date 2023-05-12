import axios from '@/lib/axios';

const authService = {
  login: () => {
    // return axios
  },
  logout: () => {},
  register: (formData: any) => {
    return axios.post('api/signup', formData);
  },
};

export default authService;
