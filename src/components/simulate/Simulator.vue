<i18n>
zh_CN:
  Simulator: 战斗模拟器
  WIP: 施工中
</i18n>

<template>
  <v-container>
    <v-row>
      <v-col cols="6"><ViewBuild v-model="$store.state.build"/></v-col>
      <v-col cols="6"><EditorTarget @input="b = arguments[0]"/></v-col>
      <v-col cols="6">
        <ViewLog v-if="lastBattle" v-model="lastBattle.battleLog" />
      </v-col>
      <v-col cols="6">
        <ThePanelSimulate @load="onLoad()" @run="onRun()" @next="onNext()" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EditorTarget from "@/components/simulate/EditorTarget.vue";
import { PC } from "@/mechanism/mob/PC";
import { NPC } from "@/mechanism/mob/NPC";
import ViewBuild from "@/components/simulate/ViewBuild.vue";
import { Battle } from "@/mechanism/battle/Battle";
import ThePanelSimulate from "@/components/simulate/ThePanelSimulate.vue";
import ViewLog from "@/components/simulate/ViewLog.vue";
import { MENG } from "@/mechanism/mob/MENG";

@Component({
  components: {
    ViewLog,
    ThePanelSimulate,
    ViewBuild,
    EditorTarget
  }
})
export default class Simulator extends Vue {
  a: PC | null = null;
  b: NPC | null = null;
  lastBattle: Battle | null = null;

  onLoad() {
    if (!window.localStorage) {
      throw Error("LocalStorage not supported");
    }

    if (window.localStorage.getItem("build") === null) {
      throw Error("no `build` in LocalStorage");
    } else {
      this.$store.state.build.load(JSON.parse(window.localStorage["build"]));
      this.a = new MENG(this.$store.state.build);
    }
  }

  onRun() {
    if (this.a && this.b) {
      this.lastBattle = new Battle(this.a, this.b);
      this.lastBattle.run();
    }
  }

  onNext() {
    this.lastBattle?.next();
  }
}
</script>

<style scoped></style>
