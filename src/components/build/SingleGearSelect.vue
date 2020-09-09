<template>
  <v-row>
    <v-col cols="2">
      <v-select
        v-model="gear.name"
        :items="availableGearList"
        :label="type"
      ></v-select>
    </v-col>
    <v-col cols="2">
      <v-text-field
        label="Level"
        v-model.number="gear.lvl"
        type="number"
      ></v-text-field>
    </v-col>
    <v-col cols="2">
      <v-text-field
        label="P1"
        v-model.number="gear.p[0]"
        type="number"
      ></v-text-field>
    </v-col>
    <v-col cols="2">
      <v-text-field
        label="P2"
        v-model.number="gear.p[1]"
        type="number"
      ></v-text-field>
    </v-col>
    <v-col cols="2">
      <v-text-field
        label="P3"
        v-model.number="gear.p[2]"
        type="number"
      ></v-text-field>
    </v-col>
    <v-col cols="2">
      <v-text-field
        label="P4"
        v-model.number="gear.p[3]"
        type="number"
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Gear, GearCateList } from "@/mechanism/build/Gear";

@Component({})
export default class SingleGearSelect extends Vue {
  @Prop(String) type!: string;
  @Prop(Gear) gear!: Gear;

  get availableGearList() {
    const ret = new Array<string>(0);
    for (const key in GearCateList) {
      if (GearCateList[key].type == this.type) {
        ret.push(GearCateList[key].name);
      }
    }
    return ret;
  }
}
</script>

<style scoped></style>
