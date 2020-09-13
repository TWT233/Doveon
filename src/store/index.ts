import Vue from "vue";
import Vuex from "vuex";
import { Build } from "@/mechanism/build/Build";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    build: new Build()
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
});
