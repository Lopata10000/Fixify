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
        if (error.response.status === 403) {
            // Наприклад, перенаправлення на сторінку логіну
            window.location = '/access-denied';
        }
        return Promise.reject(error);
    }
);
// Перехоплювач відповідей
axiosInstance.interceptors.response.use(
    response => {
        // Перевіряємо відповідь на значення "NONE"
        if (response === "NONE") {
            // Видаляємо токен з локального сховища
            localStorage.removeItem('token');
        }
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);
export default axiosInstance;
