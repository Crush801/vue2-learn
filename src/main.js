import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

Vue.config.productionTip = false;

// 注册一个全局自定义指令 `v-focus`

Vue.prototype.$EventBus = new Vue();

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
