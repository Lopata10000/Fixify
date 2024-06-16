import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import './assets/tailwind.css';
import 'datatables.net-dt/css/dataTables.dataTables.min.css'; // Переміщено вище
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'intl-tel-input/build/css/intlTelInput.css';
import 'animate.css/animate.css';
import BootstrapVue3 from 'bootstrap-vue-3'





createApp(App).use(router).use(BootstrapVue3).mount('#app');

