import { createApp } from 'vue';
import './style.css';
import App from './app.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';
import 'primeicons/primeicons.css';
import {
  Avatar,
  Button,
  Drawer,
  Menu,
  SelectButton,
  ToggleSwitch,
  Toolbar,
} from 'primevue';
import i18n from './i18n.js';
import router from './router/index.js';

// noinspection JSCheckFunctionSignatures
const CustomPreset = definePreset(Aura, {
  primitive: {
    indigo: {
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
      950: '#1e1b4b',
    },
    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
    },
    slate: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617',
    },
  },
  semantic: {
    primary: {
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '{indigo.500}',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}',
    },
    secondary: {
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}',
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}',
    },
    surface: {
      0: '#ffffff',
      50: '{slate.50}',
      100: '{slate.100}',
      200: '{slate.200}',
      300: '{slate.300}',
      400: '{slate.400}',
      500: '{slate.500}',
      600: '{slate.600}',
      700: '{slate.700}',
      800: '{slate.800}',
      900: '{slate.900}',
      950: '{slate.950}',
    },
    colorScheme: {
      light: {
        surface: '{surface.color}',
      },
      dark: {
        surface: '{surface.color}',
      },
    },
  },
  components: {
    menu: {
      colorScheme: {
        light: {
          root: {
            background: '{pink.50}',
            border: {
              color: '{indigo.500}',
            },
          },
        },
        dark: {
          root: {
            background: '{slate.800}',
            border: {
              color: '{indigo.500}',
            },
          },
        },
      },
    },
  },
});

// noinspection JSCheckFunctionSignatures
createApp(App)
  .use(PrimeVue, {
    ripple: true,
    theme: {
      preset: CustomPreset,
      options: {
        prefix: 'p',
        darkModeSelector: '.app-dark',
        cssLayer: false,
      },
    },
  })
  .component('pv-avatar', Avatar)
  .component('pv-button', Button)
  .component('pv-drawer', Drawer)
  .component('pv-menu', Menu)
  .component('pv-select-button', SelectButton)
  .component('pv-toggle-switch', ToggleSwitch)
  .component('pv-toolbar', Toolbar)
  .use(i18n)
  .use(router)
  .mount('#app');
