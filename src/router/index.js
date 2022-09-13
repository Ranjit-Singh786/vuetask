import { createRouter, createWebHistory } from 'vue-router';
// import NProgress from 'nprogress';
import Home from '../views/Home.vue';


import store from '@/store/index.js';
// import Suspence from './components/SuspenseExample.vue'
// let loading = "<div>Loading.........</div>";
const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/about',
        name: 'About',

        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/contact',
        name: 'Contactus',

        component: () =>
            import ( /* webpackChunkName: "Contactus" */ '../views/Contactus.vue')
    },
    {
        path: '/terms',
        name: 'TermsCon',

        component: () =>
            import ( /* webpackChunkName: "Contactus" */ '../views/TermsCondition.vue')
    }


]
const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
    })
    // console.log(this.$store);
router.beforeResolve((to, from, next) => {

    store.commit('setLoading', false);
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("foo", reject);
        }, 1000);
    });

    next();


})

router.afterEach((to, from) => {
    console.log(to, from);
    store.commit('setLoading', true)
});

export default router