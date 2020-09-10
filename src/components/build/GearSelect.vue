<template>
  <v-card elevation="2">
    <v-card-title>Gear</v-card-title>
    <v-card-text>
      <v-container fluid>
        <SingleGearSelect
          v-for="(item, i) in gears"
          :key="gearTypes[i]"
          :type="gearTypes[i]"
          :gear="item"
        ></SingleGearSelect>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import SingleGearSelect from "@/components/build/SingleGearSelect.vue";
import { Gear } from "@/mechanism/build/Gear";

@Component({ components: { SingleGearSelect } })
export default class GearSelect extends Vue {
  gearTypes: string[] = ["weapon", "hand", "body", "head"];

  @Prop({ default: [new Gear(), new Gear(), new Gear(), new Gear()] })
  gears!: Array<Gear>;
}
</script>

<style scoped></style>
