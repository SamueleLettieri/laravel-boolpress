import Vue from 'vue';
import VueRouter from 'vue-router';

window.Vue = require('vue');

Vue.use(VueRouter)

import router from './router';
import App from './views/App';

const app = new Vue({
    el: '#root',
    render: h => h(App),
    router
});
