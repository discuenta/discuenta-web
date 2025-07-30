import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'default',
        redirect: '/dashboard'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    console.log(`Navigating from ${from.name} to ${to.name}`);
    let baseTitle = 'Discuenta Web';
    document.title = `${baseTitle} | ${to.name['title']}`;
    next();
})