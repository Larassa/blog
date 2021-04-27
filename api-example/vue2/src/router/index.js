/*
 * @Author: larassa
 * @Date: 2021-02-24 09:47:33
 * @LastEditors: larassa
 * @LastEditTime: 2021-04-27 17:27:56
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
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
