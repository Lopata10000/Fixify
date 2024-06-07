import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import SignUp from '../views/SingUp.vue';
import LogIn from '../views/LogIn.vue';
import AccessDenied from '../views/AccessDenied.vue';

const routes = [
    {
        path: '/home',
        name: 'HomePage',
        component: HomePage
    }, {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp
    }, {
        path: '/log-in',
        name: 'LogIn',
        component: LogIn
    }, {
        path: '/access-denied',
        name: 'AccessDenied',
        component: AccessDenied
    },
];

const index = createRouter({
    history: createWebHistory(),
    routes
});

export default index;
