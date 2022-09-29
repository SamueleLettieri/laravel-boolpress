import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import MainHome from './pages/MainHome'
import MainPost from './pages/MainPost'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component : MainHome
        },
        {
            path: '/post/:id',
            name: 'post',
            component : MainPost
        },
    ],
});

export default router