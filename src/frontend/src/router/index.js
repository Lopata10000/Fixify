import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import SignUp from '../views/SingUp.vue';
import LogIn from '../views/LogIn.vue';
import AccessDenied from '../views/AccessDenied.vue';
import AdminPanel from '../views/AdminPanel.vue';
import NewTask from '../views/NewTask.vue';
import UserDashboard from '../views/UserDashboard.vue';

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
    }, {
        path: '/admin-panel',
        name: 'AdminPanel',
        component: AdminPanel
    }, {
        path: '/dashboard',
        name: 'UserDashboard',
        component: UserDashboard
    }, {
        path: '/newp-review',
        name: 'UserDashboard',
        component: UserDashboard
    }, {
        path: '/new-task',
        name: 'NewTask',
        component: NewTask
    }
];

const index = createRouter({
    history: createWebHistory(),
    routes
});

export default index;
