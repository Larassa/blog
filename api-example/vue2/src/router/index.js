/*
 * @Author: larassa
 * @Date: 2021-02-24 09:47:33
 * @LastEditors: larassa
 * @LastEditTime: 2021-04-25 09:50:57
 * @Description: file content
 */
import Vue from "vue";
import VueRouter from "vue-router";

import Layout from "@/views/Layout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        name: "Dashboard",
        component: () => import("@/views/Home.vue")
      }, 
      {
        path: "/component",
        name: "Component",
        component: () => import("@/views/Component.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
