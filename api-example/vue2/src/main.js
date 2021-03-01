import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './assets/style/common.css'

import { httpRequest } from './httpRequest'

Vue.config.productionTip = false;
// Vue.prototype.$http = httpRequest

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
