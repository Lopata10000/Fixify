// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import NewEvent from '../components/NewEvent.vue'; // Adjust the path as necessary

const routes = [
    {
        path: '/new-event',
        name: 'NewEvent',
        component: NewEvent
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
