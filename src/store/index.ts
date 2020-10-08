import Vue from "vue";
import Vuex from "vuex";
import { Build } from "@/mechanism/build/Build";
import { Gear } from "@/mechanism/build/Gear";
import { Aura } from "@/mechanism/build/Aura";
import { Card } from "@/mechanism/build/Card";
import { Pts } from "@/mechanism/build/Pts";
import { ArsenalEntry } from "@/mechanism/build/ArsenalEntry";
import { Suit } from "@/mechanism/build/Suit";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    build: new Build(),
    arsenal: new Array<ArsenalEntry>(0)
  },
  getters: {},
  mutations: {
    setArsenal(state, a: ArsenalEntry[]) {
      state.arsenal.splice(0, state.arsenal.length);
      a.forEach(e => state.arsenal.push(new ArsenalEntry().load(e)));
    },
    setArsenalEntry(state, arg: { pos: number; val: ArsenalEntry }) {
      state.arsenal[arg.pos].load(arg.val);
    },
    arsenalRemove(state, pos: number) {
      if (pos < 0 || state.arsenal.length <= pos) return;
      state.arsenal.splice(pos, 1);
    },
    arsenalPush(state, obj: ArsenalEntry) {
      state.arsenal.push(obj);
    },
    setBuild(state, obj: Build) {
      state.build.load(obj);
    },
    setBuildAura(state, obj: Aura) {
      state.build.aura.load(obj);
    },
    setBuildCard(state, obj: Card) {
      state.build.card.load(obj);
    },
    setBuildSuit(state, value: Suit) {
      state.build.suit = value;
    },
    setBuildPts(state, obj: Pts) {
      state.build.pts.load(obj);
    }
  },
  actions: {},
  modules: {}
});
