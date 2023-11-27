import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "articles" */ '../views/Home.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "articles" */ '../views/404.vue'),
  },
  // {
  //   path: "/developer",
  //   name: "Developer",
  //   component: () => import(/* webpackChunkName: "articles" */ "../views/portal/developer-center.vue")
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
