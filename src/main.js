import { createApp } from 'vue';
import './style.css';
import App from './app.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import 'primeicons/primeicons.css';
import { SelectButton, Button, ToggleSwitch } from 'primevue';
import i18n from './i18n.js';
import router from './router/index.js';

// noinspection JSCheckFunctionSignatures
createApp(App)
  .use(PrimeVue, {
    ripple: true,
    theme: {
      preset: Aura,
      options: {
        prefix: 'p',
        darkModeSelector: '.app-dark',
      },
    },
  })
  .component('pv-select-button', SelectButton)
  .component('pv-button', Button)
  .component('pv-toggle-switch', ToggleSwitch)
  .use(i18n)
  .use(router)
  .mount('#app');
