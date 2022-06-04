import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    // Not found page like a 404
    {  
      path: '/:notFound(.*)', 
      component: () => import(/* webpackChunkName: "about" */ '@/views/NotFound.vue')
    },
  ]
});

export default router;