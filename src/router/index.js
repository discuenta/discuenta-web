import {createRouter, createWebHistory} from "vue-router";
import MainLayout from "../shared/components/main-layout.vue";

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: '',
                redirect: 'dashboard'
            },
            {
                path: 'dashboard',
                name: 'dashboard',
                component: () => import('../shared/pages/dashboard.vue'),
                meta: {title: 'Dashboard'}
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    console.log(`Navigating from ${from.name} to ${to.name}`);
    let baseTitle = 'Discuenta Web';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
});

export default router;