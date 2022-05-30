import App from "./App.vue";
import VueCompositionAPI, { createApp } from "@vue/composition-api";
import { pinia, PiniaVuePlugin } from "@/stores";
import router from "./router";
// initializers
import "@/initializers/bootstrap-vue.js";
import "@/initializers/maska.js";
import "@/initializers/vee-validate.js";
import { i18n } from "@/initializers/vue-i18n";
// import i18nPlugin from "./initializers/i18n";

const app = createApp({
  render: (h) => h(App),
  pinia,
  i18n,
  router,
});
app.use(VueCompositionAPI);
app.use(PiniaVuePlugin);
// app.use(i18nPlugin, {
//   greetings: {
//     hello: "Bonjour!",
//   },
// });

app.mount("#app");
