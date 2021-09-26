import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/login.vue'),
  },

  {
    path: '/home',
    component: () => import('src/layouts/LayoutVoter.vue'),
    children: [{ path: '', component: () => import('pages/Home.vue') }],
  },

  {
    path: '/candidates',
    component: () => import('src/layouts/LayoutVoter.vue'),
    children: [{ path: '', component: () => import('pages/prime/home.vue') }],
  },

  {
    path: '/vote',
    component: () => import('src/layouts/LayoutVoter.vue'),
    children: [{ path: '', component: () => import('pages/Vote.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
