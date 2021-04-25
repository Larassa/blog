/*
 * @Author: larassa
 * @Date: 2021-04-06 11:32:04
 * @LastEditors: larassa
 * @LastEditTime: 2021-04-25 13:22:58
 * @Description: file content
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App)

// // 分环境处理
// if (process.env.NODE_ENV === 'development') {
//   if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in window) {
//   // 这里__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue赋值一个createApp实例
//     window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
//   }
//   app.config.devtools = true
// }
app.component('my-component', {
  template: `<div>my-component</div>`
})

app.use(router).mount("#app");
