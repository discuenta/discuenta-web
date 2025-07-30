import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import 'primeicons/primeicons.css';
import {
    Button
} from 'primevue';

// noinspection JSCheckFunctionSignatures
createApp(App)
    .use(PrimeVue, {
        theme: {
            preset: Aura
        }
    })
    .component('pv-button', Button)
    .mount('#app')
