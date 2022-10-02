import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import MainHome from './pages/MainHome'
import MainPost from './pages/MainPost'
import PostsTags from './pages/PostsTags'
import MainTags from './pages/MainTags'
import UserPost from './pages/UserPost'
import MainUsers from './pages/MainUsers'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'MainHome',
            component : MainHome
        },
        {
            path: '/posts/:id',
            name: 'MainPost',
            component : MainPost
        },
        {
            path: '/tags/:id',
            name: 'PostsTags',
            component : PostsTags
        },
        {
            path: '/tags',
            name: 'MainTags',
            component : MainTags
        },
        {
            path: '/users/:id',
            name: 'UserPost',
            component : UserPost
        },
        {
            path: '/users',
            name: 'MainUsers',
            component : MainUsers
        },
    ],
});

export default router