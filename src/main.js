import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import {ValidationProvider, extend, ValidationObserver} from "vee-validate";
import * as rules from "vee-validate/dist/rules";

for (let rule in rules) {
  extend(rule, rules[rule]);
}

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
