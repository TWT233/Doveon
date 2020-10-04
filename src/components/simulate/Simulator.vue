<i18n>
zh_CN:
  Simulator: 战斗模拟器
  WIP: 施工中
</i18n>

<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <BuildView></BuildView>
      </v-col>
      <v-col cols="6">
        <TargetEditor @input="b = arguments[0]"></TargetEditor>
      </v-col>
      <v-col cols="6">
        <LogView
          v-if="lastBattle != null"
          :battle-log="lastBattle.battleLog"
        ></LogView>
      </v-col>
      <v-col cols="6">
        <PanelSimulate
          @panel-load="onLoad()"
          @panel-run="onRun()"
          @panel-next="onNext()"
        ></PanelSimulate>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TargetEditor from "@/components/simulate/TargetEditor.vue";
import { PC } from "@/mechanism/mob/PC";
import { NPC } from "@/mechanism/mob/NPC";
import BuildView from "@/components/simulate/BuildView.vue";
import { Battle } from "@/mechanism/battle/Battle";
import PanelSimulate from "@/components/simulate/PanelSimulate.vue";
import LogView from "@/components/simulate/LogView.vue";
import { MENG } from "@/mechanism/mob/MENG";

@Component({
  components: { LogView, PanelSimulate, BuildView, TargetEditor }
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
