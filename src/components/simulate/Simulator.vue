<i18n>
zh_CN:
</i18n>

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
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EditorMob from "@/components/simulate/EditorMob.vue";
import { Mob } from "@/mechanism/battle/Mob";
import { DynStatus } from "@/mechanism/battle/DynStatus";
import { Status } from "@/mechanism/build/Status";

@Component({
  components: { EditorMob }
})
export default class Simulator extends Vue {
  _a: Mob = new Mob("", "", new DynStatus(new Status()));
  _b: Mob = new Mob("", "", new DynStatus(new Status()));

  get a() {
    return this._a;
  }

  set a(value: Mob) {
    this._a.load(value);
  }

  get b() {
    return this._b;
  }

  set b(value: Mob) {
    this._b.load(value);
  }
}
</script>

<style scoped></style>
