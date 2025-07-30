import { createApp } from 'vue';
import './style.css';
import App from './app.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import 'primeicons/primeicons.css';
import {
    Button
} from 'primevue';
import router from './router/index.js';

// noinspection JSCheckFunctionSignatures
createApp(App)
    .use(PrimeVue, {
        theme: {
            preset: Aura
        }
    })
    .component('pv-button', Button)
    .use(router)
    .mount('#app')