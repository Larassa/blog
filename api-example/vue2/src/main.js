import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { httpRequest } from './httpRequest'

Vue.config.productionTip = false;
Vue.prototype.$http = httpRequest

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
