import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
export default [
  {
    name: 'redirect',
    path: '*',
    redirect: '/user',
  },
  {
    name: 'user',
    path: '/user',
    component: () => import(/* webpackChunkName: "js/components/user/index" */ '../components/user/index.vue'),
  },
  {
    name: 'checkin',
    path: '/checkin',
    component: () => import(/* webpackChunkName: "js/components/user/index" */ '../components/user/checkin.vue'),
  },
];
