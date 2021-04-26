import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "InputValidation",
    component: () =>
      import("@/views/InputValidation.vue"),
  },
  {
    path: "/regvalidation",
    name: "RegValidation",
    component: () =>
      import("@/views/RegValidation.vue"),
  },
  {
    path: "/veevalidation",
    name: "VeeValidation",
    component: () =>
      import("@/views/VeeValidation.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;