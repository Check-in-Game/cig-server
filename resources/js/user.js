require('./bootstrap');

// import Vue from 'vue';

window.Vue = require('vue');

import Axios from 'axios'
import VueAxios from 'vue-axios'
import Antd from 'ant-design-vue';
import VueRouter from 'vue-router';
import routes from './routes/user.js';
import cig from './layout/user.vue';

import 'ant-design-vue/dist/antd.css';

Vue.use(Antd, Axios, VueAxios);
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
