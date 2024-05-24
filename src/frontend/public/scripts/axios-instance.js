import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    function (config) {
        // Get the token from local storage
        const token = localStorage.getItem('refreshToken');
        // If the token exists, add it to the header
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axiosInstance;
