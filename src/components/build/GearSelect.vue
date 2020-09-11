<template>
  <v-card elevation="2">
    <v-card-title>Gear</v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col
            sm="6"
            cols="12"
            v-for="(item, i) in gears"
            :key="gearTypes[i]"
          >
            <SingleGearSelect :type="gearTypes[i]" :gear="item">
            </SingleGearSelect>
          </v-col>
        </v-row>
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

  @Prop() gears!: Array<Gear>;
}
</script>

<style scoped></style>
