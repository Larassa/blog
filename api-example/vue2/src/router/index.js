/*
 * @Author: larassa
 * @Date: 2021-02-24 09:47:33
 * @LastEditors: larassa
 * @LastEditTime: 2021-05-10 13:09:11
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
      },
      {
        path: "/model",
        name: "Model",
        component: () => import("@/views/Model.vue")
      },
      {
        path: "/safe",
        name: "Safe",
        component: () => import("@/views/save.vue")
      },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
