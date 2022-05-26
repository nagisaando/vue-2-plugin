import Vue from "vue";
import App from "./App.vue";

import { required } from "vee-validate/dist/rules";
import { extend } from "vee-validate";

extend("required", required);

Vue.config.productionTip = false;
Vue.config.silent = true;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
