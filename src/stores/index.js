import { createPinia, PiniaVuePlugin } from "pinia";
import router from "@/router";
import { markRaw } from "@vue/composition-api";
const pinia = createPinia();
// adding router in pinia
pinia.use(({ store }) => {
  store.router = markRaw(router);
});
export { pinia, PiniaVuePlugin };
