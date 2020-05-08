import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
export default [
  {
    name: 'index',
    path: '/',
    component: () => import(/* webpackChunkName: "js/components/user/index" */ '../components/user2/index.vue'),
  },
  {
    name: 'checkin',
    path: '/checkin',
    component: () => import(/* webpackChunkName: "js/components/user/index" */ '../components/user2/checkin.vue'),
  },
];
