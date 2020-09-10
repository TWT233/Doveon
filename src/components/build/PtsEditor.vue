<template>
  <v-card elevation="2">
    <v-card-title>Points</v-card-title>
    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col cols="2" v-for="item in ptsKeys" :key="item">
            <v-text-field
              :label="item"
              v-model.number="pts[item]"
              type="number"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text> </v-card
></template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Pts } from "@/mechanism/build/Pts";

@Component({})
export default class PtsEditor extends Vue {
  @Prop(Pts) pts!: Pts;

  get ptsKeys(): string[] {
    return Object.keys(this.pts);
  }
}
</script>

<style scoped></style>
