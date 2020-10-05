<i18n>
zh_CN:
  Gear: "武器装备"
</i18n>

<template>
  <v-card>
    <v-card-title>{{ $t("Gear") }}</v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col v-for="(item, i) in ASE" :key="gearTypes[i]">
            <EditorGearSingle
              :types="[gearTypes[i]]"
              :value="ASE[i]"
              @input="val => onEditFinish(val, item)"
            >
            </EditorGearSingle>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import EditorGearSingle from "@/components/build/EditorGearSingle.vue";
import { ArsenalEntry } from "@/mechanism/build/Gear";

@Component({ components: { EditorGearSingle } })
export default class EditorGear extends Vue {
  gearTypes: string[] = ["weapon", "hand", "body", "head"];

  gears = this.$store.state.build.gears;

  ASE: ArsenalEntry[] = [
    new ArsenalEntry("", "", this.gears[0]),
    new ArsenalEntry("", "", this.gears[1]),
    new ArsenalEntry("", "", this.gears[2]),
    new ArsenalEntry("", "", this.gears[3])
  ];

  onEditFinish(val: ArsenalEntry, ori: ArsenalEntry) {
    ori.load(val);
  }
}
</script>

<style scoped></style>
