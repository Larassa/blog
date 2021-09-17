/*
 * @Author: larassa
 * @Date: 2021-04-06 11:32:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-26 15:31:57
 * @Description: file content
 */
import { createRouter, createWebHistory } from 'vue-router';
// import Home from "../views/Home.vue";
import Layout from '../views/Layout.vue';

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'DashBoard',
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
