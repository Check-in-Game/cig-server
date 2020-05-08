require('./bootstrap');

// import Vue from 'vue';

window.Vue = require('vue');

import Axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
import routes from './routes/user2.js';
import cig from './layout/user2.vue';

import '../css/element-ui/theme/index.css';

Vue.use(ElementUI, Axios, VueAxios);
Vue.use(VueRouter);

window.router = new VueRouter({
  routes
});

Vue.prototype.$http = axios;

const app = new Vue({
  el: '#app',
  router,
  render: h => h(cig)
});
