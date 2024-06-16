import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import SignUp from '../views/SingUp.vue';
import LogIn from '../views/LogIn.vue';
import AccessDenied from '../views/AccessDenied.vue';
import AdminPanel from '../views/AdminPanel.vue';
import NewTask from '../views/NewTask.vue';
import UserDashboard from '../views/UserDashboard.vue';
import CreateReview from '../views/CreateReview.vue';

const routes = [
    {
        path: '/home',
        name: 'HomePage',
        component: HomePage,
        meta: {
            icon: '/image/logo.png', // іконка для цього маршруту
            title: 'Головна сторінка' // заголовок (метатекст)
        }
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
        path: '/create-review',
        name: 'CreateReview',
        component: CreateReview
    }, {
        path: '/new-task',
        name: 'NewTask',
        component: NewTask
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
