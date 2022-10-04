import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import { createPinia, PiniaVuePlugin } from "pinia";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import PiniaPlugin from "@/plugins/piniaPlugin";

Vue.use(VueCompositionAPI);
Vue.use(PiniaVuePlugin);
const pinia = createPinia();
pinia.use(PiniaPlugin);

Vue.use(ElementUI);

Vue.config.productionTip = false;

Vue.prototype.$EventBus = new Vue();

new Vue({
  el: "#app",
  router,
  pinia,
  render: (h) => h(App),
});
