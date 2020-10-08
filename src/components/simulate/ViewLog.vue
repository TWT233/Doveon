<template>
  <v-card>
    <v-card-title>
      LogView
    </v-card-title>
    <v-card-text>
      <template v-if="value != null">
        <template v-for="(item, i) in value">
          {{ item.toString() }}<br :key="i" />
        </template>
      </template>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action } from "@/mechanism/battle/Action";

@Component({})
export default class ViewLog extends Vue {
  @Prop() value!: Array<Action>;
}
</script>

<style scoped></style>
