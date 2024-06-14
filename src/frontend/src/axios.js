import axios from 'axios';

const token = window.localStorage.getItem('refreshToken');

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default axios;