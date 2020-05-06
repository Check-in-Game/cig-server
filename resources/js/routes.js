import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
export default [
  {
    name: 'index',
    path: '/',
    redirect: '/login',
  },
  {
    name: 'login',
    path: '/login',
    component: () => import(/* webpackChunkName: "js/components/public/login" */ './components/public/login.vue'),
  },
  {
    name: 'register',
    path: '/register',
    component: () => import(/* webpackChunkName: "js/components/publi/register" */ './components/public/register.vue'),
  },
];
