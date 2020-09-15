import Vue from "vue";
import Vuex from "vuex";
import { Build } from "@/mechanism/build/Build";
import { ArsenalEntry, Gear } from "@/mechanism/build/Gear";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    build: new Build(),
    arsenal: new Array<ArsenalEntry>(0)
  },
  getters: {},
  mutations: {
    arsenalLoad(state, a: ArsenalEntry[]) {
      state.arsenal = a.slice();
    },
    arsenalRemove(state, pos: number) {
      if (pos < 0 || state.arsenal.length <= pos) return;
    },
    arsenalPush(state, obj: ArsenalEntry) {
      state.arsenal.push(obj);
    },
    buildLoadGear(state, arg: { n: number; g: Gear }) {
      state.build.gears[arg.n].load(arg.g);
    }
  },
  actions: {},
  modules: {}
});
