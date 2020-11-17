<template>
  <v-menu open-on-hover offset-x>
    <template v-slot:activator="{ on, attrs }">
      <v-card tile v-bind="attrs" v-on="on" width="600">
        <v-row dense>
          <v-col cols="6" class="d-flex">
            <v-progress-linear :value="aHPRate" color="red" dark height="15">
              {{ Math.floor(value.a.HP) }}/{{ Math.floor(value.a.origin.HP) }}
            </v-progress-linear>
            <v-progress-linear :value="aSHDRate" color="blue" dark height="15">
              {{ Math.floor(value.a.SHD) }}/{{ Math.floor(value.a.origin.SHD) }}
            </v-progress-linear>
          </v-col>
          <v-col cols="6" class="d-flex">
            <v-progress-linear :value="bHPRate" color="red" dark height="15">
              {{ Math.floor(value.b.HP) }}/{{ Math.floor(value.b.origin.HP) }}
            </v-progress-linear>
            <v-progress-linear :value="bSHDRate" color="blue" dark height="15">
              {{ Math.floor(value.b.SHD) }}/{{ Math.floor(value.b.origin.SHD) }}
            </v-progress-linear>
          </v-col>
        </v-row>
      </v-card>
    </template>
    <v-card class="d-inline-flex pa-2" outlined tile>Test Card</v-card>
  </v-menu>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { BattleFrame } from "@/mechanism/battle/BattleFrame";

@Component({})
export default class ViewBattleFrame extends Vue {
  @Prop() value!: BattleFrame;

  get aSHDRate(): number {
    return (this.value.a.SHD / this.value.a.origin.SHD) * 100;
  }

  get bSHDRate(): number {
    return (this.value.b.SHD / this.value.b.origin.SHD) * 100;
  }

  get aHPRate(): number {
    return (this.value.a.HP / this.value.a.origin.HP) * 100;
  }

  get bHPRate(): number {
    return (this.value.b.HP / this.value.b.origin.HP) * 100;
  }
}
</script>

<style scoped></style>
