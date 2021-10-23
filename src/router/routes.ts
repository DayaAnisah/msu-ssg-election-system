import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/Login.vue'),
  },

  {
    path: '/home',
    component: () => import('src/layouts/LayoutVoter.vue'),
    children: [{ path: '', component: () => import('pages/Home.vue') }],
  },

  {
    path: '/representative',
    component: () => import('src/layouts/LayoutVoter.vue'),
    children: [{ path: 'R_Homepage', component: () => import('src/pages/representative/rep_Homepage.vue') },
              { path: 'R_Candidate', component: () => import('src/pages/representative/rep_Candidate.vue') },
              { path: 'R_Vote', component: () => import('src/pages/representative/rep_Vote.vue') }],
  },

  {
    path: '/student',
    component: () => import('src/layouts/LayoutVoter.vue'),
    children: [{ path: 'S_Homepage', component: () => import('src/pages/student/student_Homepage.vue') },
              { path: 'S_Candidate', component: () => import('src/pages/student/student_Candidate.vue') },
              { path: 'S_Vote', component: () => import('src/pages/student/student_Vote.vue') }],
  },

  {
    path: '/prime',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [{ path: 'P_Homepage', component: () => import('src/pages/prime/prime_Home.vue') },
    { path: 'P_Election', component: () => import('src/pages/prime/ssg_Election.vue') },
    { path: 'P_Official', component: () => import('src/pages/prime/ssg_official.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
