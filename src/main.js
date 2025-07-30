import { createApp } from 'vue';
import './style.css';
import App from './app.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import 'primeicons/primeicons.css';
import {
    Button
} from 'primevue';
import i18n from "./i18n.js";
import router from './router/index.js';

// noinspection JSCheckFunctionSignatures
createApp(App)
    .use(PrimeVue, {
        theme: {
            preset: Aura
        }
    })
    .component('pv-button', Button)
    .use(i18n)
    .use(router)
    .mount('#app')