import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Builder from "@/components/build/TheBuilder.vue";
import Simulator from "@/components/simulate/Simulator.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: "/", redirect: "/builder" },
  { path: "/builder", component: Builder },
  { path: "/simulator", component: Simulator }
];

const router = new VueRouter({
  routes
});

export default router;
