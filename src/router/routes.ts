import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Home.vue') },
      { path: '/home', component: () => import('pages/Home.vue') },
      { path: '/petek-temizligi', component: () => import('pages/CleanRadiator.vue') },
      { path: '/kombi-bakimi', component: () => import('pages/BoilerMaintenance.vue') },
      { path: '/kombi-arizasi', component: () => import('pages/BoilerProblem.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
