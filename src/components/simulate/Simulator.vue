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
import { Status } from "@/mechanism/build/Status";

@Component({
  components: { EditorMob }
})
export default class Simulator extends Vue {
  private i_a = new Mob("", "", new Status());
  private i_b = new Mob("", "", new Status());

  get a() {
    return this.i_a;
  }

  set a(value: Mob) {
    this.i_a.load(value);
  }

  get b() {
    return this.i_b;
  }

  set b(value: Mob) {
    this.i_b.load(value);
  }
}
</script>

<style scoped></style>
