require('./bootstrap');

// import Vue from 'vue';

window.Vue = require('vue');

import Axios from 'axios'
import VueAxios from 'vue-axios'
import Antd from 'ant-design-vue';
// import VueRouter from 'vue-router';

import 'ant-design-vue/dist/antd.css';

Vue.use(Antd, Axios, VueAxios);
// Vue.use(VueRouter);

Vue.component('public-login', require('./components/public-login.vue').default);
Vue.component('public-register', require('./components/public-register.vue').default);

Vue.prototype.$http = axios;

const app = new Vue({
  el: '#app',
});
