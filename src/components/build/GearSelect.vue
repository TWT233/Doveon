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
          <v-col v-for="(item, i) in gears" :key="gearTypes[i]">
            <SingleGearSelect
              :types="[gearTypes[i]]"
              :value="{ gear: item, label: '' }"
              @input="item.load(arguments[0].gear)"
            >
            </SingleGearSelect>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SingleGearSelect from "@/components/build/SingleGearSelect.vue";

@Component({ components: { SingleGearSelect } })
export default class GearSelect extends Vue {
  gearTypes: string[] = ["weapon", "hand", "body", "head"];

  gears = this.$store.state.build.gears;
}
</script>

<style scoped></style>
