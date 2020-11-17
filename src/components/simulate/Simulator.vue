<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-card>
          <v-card-title>Player</v-card-title>
          <v-card-text>
            <v-row>
              <v-col><EditorMob v-model="a"/></v-col>
              <v-col><EditorMob v-model="b"/></v-col>
            </v-row>
            <v-row dense>
              <v-col><ViewBattleLog :value="battle.log" /> </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn @click.stop="battle.run()">Run</v-btn>
            <v-btn @click="load()">Load</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EditorMob from "@/components/simulate/EditorMob.vue";
import { Mob } from "@/mechanism/battle/Mob";
import { Status } from "@/mechanism/build/Status";
import { Battle } from "@/mechanism/battle/Battle";
import { BattleStatus } from "@/mechanism/battle/BattleStatus";
import ViewBattleLog from "@/components/simulate/ViewBattleLog.vue";

@Component({
  components: { ViewBattleLog, EditorMob }
})
export default class Simulator extends Vue {
  battle: Battle = new Battle(
    new Mob("", "", new Status()),
    new Mob("", "", new Status()),
    new BattleStatus()
  );

  get a() {
    return this.battle.a;
  }

  set a(value: Mob) {
    this.battle.a.load(value);
  }

  get b() {
    return this.battle.b;
  }

  set b(value: Mob) {
    this.battle.b.load(value);
  }

  load() {
    this.$store.commit("setBuild", JSON.parse(window.localStorage["build"]));
  }
}
</script>

<style scoped></style>
