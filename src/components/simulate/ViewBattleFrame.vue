<template>
  <v-menu
    open-on-hover
    offset-x
    :close-on-content-click="false"
    nudge-width="-600"
  >
    <template v-slot:activator="{ on }">
      <v-card tile v-on="on">
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

    <v-card outlined tile>
      <v-container>
        <v-row align-content="center">
          <v-col cols="auto">
            <v-list dense>
              <v-list-item>
                <v-icon color="red">mdi-flash</v-icon>
                {{ Math.floor(value.e.a.PA) }}
                <v-icon color="blue">mdi-flash</v-icon>
                {{ Math.floor(value.e.a.MA) }}
                <v-icon color="yellow">mdi-flash</v-icon>
                {{ Math.floor(value.e.a.AA) }}
              </v-list-item>
              <v-list-item>
                <v-icon color="red">mdi-plus</v-icon>
                {{ Math.floor(value.e.a.HR) }}
                <v-icon color="red">mdi-minus</v-icon>
                {{ Math.floor(value.e.a.HD) }}
                <v-icon color="blue">mdi-plus</v-icon>
                {{ Math.floor(value.e.a.SR) }}
                <v-icon color="blue">mdi-minus</v-icon>
                {{ Math.floor(value.e.a.SD) }}
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="1" align-self="center">
            <v-icon color="green">
              {{ value.e.s === "a" ? "mdi-arrow-right" : "mdi-arrow-left" }}
            </v-icon>
          </v-col>
          <v-col cols="auto">
            <v-list dense>
              <v-list-item>
                <v-icon color="red">mdi-flash</v-icon>
                {{ Math.floor(value.e.b.PA) }}
                <v-icon color="blue">mdi-flash</v-icon>
                {{ Math.floor(value.e.b.MA) }}
                <v-icon color="yellow">mdi-flash</v-icon>
                {{ Math.floor(value.e.b.AA) }}
              </v-list-item>
              <v-list-item>
                <v-icon color="red">mdi-plus</v-icon>
                {{ Math.floor(value.e.b.HR) }}
                <v-icon color="red">mdi-minus</v-icon>
                {{ Math.floor(value.e.b.HD) }}
                <v-icon color="blue">mdi-plus</v-icon>
                {{ Math.floor(value.e.b.SR) }}
                <v-icon color="blue">mdi-minus</v-icon>
                {{ Math.floor(value.e.b.SD) }}
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col>
            <v-checkbox v-model="CRI" label="isCri" disabled />
          </v-col>
          <v-col>
            <v-checkbox v-model="SKI" label="isSKi" disabled />
          </v-col>
          <v-col>
            <v-checkbox v-model="MC" label="isMC" disabled />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { BattleFrame } from "@/mechanism/battle/BattleFrame";

@Component({})
export default class ViewBattleFrame extends Vue {
  @Prop() value!: BattleFrame;

  get CRI(): boolean {
    return this.value.e.isCri;
  }

  set CRI(value: boolean) {
    this.value.e.isCri = value;
  }

  get SKI(): boolean {
    return this.value.e.isSki;
  }

  set SKI(value: boolean) {
    this.value.e.isSki = value;
  }

  get MC(): boolean {
    return this.value.e.isMC;
  }

  set MC(value: boolean) {
    this.value.e.isMC = value;
  }

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
