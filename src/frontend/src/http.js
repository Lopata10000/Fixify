import axios from 'axios';

// Створіть інстанс Axios
const axiosInstance = axios.create({
    baseURL: 'http://html/home.html ', // Замініть на ваш URL API
    timeout: 1000,
});

// Додайте інтерцептор запиту
axiosInstance.interceptors.request.use(
    config => {
        // Додайте токен до заголовків запиту
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// Додайте інтерцептор відповіді
axiosInstance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        // Обробка помилок відповіді
        if (error.response.status === 401) {
            // Наприклад, перенаправлення на сторінку логіну
            window.location = '/login';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
