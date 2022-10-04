import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/account',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AccountPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('layouts/MainLayout.vue'),
    // component: () => import('pages/ErrorNotFound.vue'),
    children: [
      { path: '', component: () => import('pages/ErrorNotFound.vue') },
    ],
  },
]

export default routes
